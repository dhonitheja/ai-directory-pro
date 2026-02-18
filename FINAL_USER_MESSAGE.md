# Automation Pipeline Created! 🚀

I've set up the automated tool discovery workflow for your AI Directory.

## What's Included:
1.  **`scripts/fetch-tools.js`**:
    - Scrapes "Trending AI Tools" (mock implementation).
    - Safely adds them to `tools.ts` without duplicates.
    - Run manually with `node scripts/fetch-tools.js` or let GitHub Actions handle it.

2.  **`.github/workflows/update-tools.yml`**:
    - Runs daily at midnight.
    - Automatically creates a Pull Request when new tools are found.
    - Keeps verification in your hands (you merge the PR).

## How to Test:
1.  Check the "Actions" tab in your GitHub repository.
2.  If you want to run it manually, click "Run workflow".
3.  Watch for new PRs labeled "🤖 New AI Tools Discovered".

Enjoy your automated directory!
