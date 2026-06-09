# Claude Code Hook Setup for Auto PDF Export

## Overview

Configure a Claude Code `PostToolUse` hook that detects when portfolio content files
are edited and prompts Claude to re-export the PDF and update the download link.

## Hook Configuration

Add this to `.claude/settings.local.json` in the project root:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "case \"$CLAUDE_TOOL_INPUT\" in *src/routes/*|*src/components/*) echo '[PDF-HOOK] Portfolio content changed. Run: python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py --url http://localhost:5173 --output public/portfolio.pdf && update the PDF download link on the page.' ;; esac"
          }
        ]
      }
    ]
  }
}
```

## How It Works

1. **Trigger**: Fires after any `Edit` or `Write` tool call
2. **Match**: Checks if the edited file path contains `src/routes/` or `src/components/`
3. **Action**: Prints a reminder message that Claude sees, prompting it to:
   - Start the dev server if not running
   - Run the export script against the local dev server
   - Verify the PDF was created in `public/`
   - Ensure the download link exists on the page

## Manual Export

To export manually without the hook:

```bash
# Start dev server in background
bun run dev &

# Wait for server, then export
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173 \
  --output public/portfolio.pdf

# Export a specific route
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/about \
  --output public/about.pdf
```

## Multiple Pages

Export multiple routes by running the script once per page:

```bash
for route in "" "about" "projects"; do
  python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
    --url "http://localhost:5173/$route" \
    --output "public/${route:-index}.pdf"
done
```
