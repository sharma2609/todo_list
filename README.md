# Tasks

A client-side task management app inspired by NothingOS design — add, organize, and filter tasks with a clean black-and-white interface.

## Overview

Tasks is a single-user todo application that stores everything in `localStorage`. No accounts, no servers, no cloud sync. It was built as a lightweight, visually minimal alternative to feature-heavy productivity tools. The focus is on fast entry, category-based organization (Personal / Work / Others), urgency markers, and dead-simple filtering.

## Features

- **Add, complete, and delete tasks** — core CRUD with inline toggle and animated delete
- **Three categories** — Personal, Work, Others, each with distinct accent colors
- **Urgency flag** — mark tasks as urgent; they sort to the top and show a red pulse indicator
- **Smart sorting** — urgent first, then incomplete, then newest
- **Filter tabs** — filter by All, Urgent, Completed, or by individual category
- **Real-time stats** — live counts for total, urgent pending, and per-category pending tasks
- **Bulk actions** — Clear Completed and Clear All (both with confirmation prompts)
- **Persistent storage** — tasks survive page reloads via `localStorage` (key: `nothing-todos`)
- **Responsive layout** — two-panel grid on desktop, stacked single column on mobile (<768px)
- **No runtime dependencies** beyond React — no state library, no CSS framework, no icon library

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool and dev server
- **Plain CSS** — all styling is hand-written, no preprocessor or CSS-in-JS
- **ESLint 8** — linting with React and React Hooks plugins
- **Vitest 1** — unit testing

## Installation

Prerequisites:

- **Node.js >= 18** (see `.nvmrc`)
- npm or equivalent package manager

```bash
git clone <repo-url>
cd todo_list
npm install
npm run dev
```

The dev server starts at `http://localhost:3001`.

### Production build

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel config is included).

## Usage

The app has two panels:

**Left panel** — input controls
1. Type a task description (max 120 characters)
2. Select a category: Personal / Work / Others
3. Toggle the Urgent switch if needed
4. Press Enter or click Add Task

**Right panel** — filter tabs + task list
- Use the top row of filters (All / Urgent / Completed) to change what's shown
- Use the bottom row to filter by category
- Click the checkbox to mark a task complete
- Click the × button to delete a task (with a 200ms exit animation)
- Task count is displayed per view

**Keyboard shortcuts**:
- `Enter` — submit the form
- `Tab` — move between form fields
- `Space` — activate toggle buttons
- `Escape` — clear input text

## Configuration

No environment variables required. The only build-time config is in `vite.config.js`:

| Setting | Value | Description |
|---------|-------|-------------|
| `server.port` | `3001` | Dev server port |
| `build.outDir` | `dist` | Production output directory |

Local storage key: `nothing-todos` (used for all persistence).

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx      # Input form with category selector and urgency toggle
│   ├── TodoForm.css
│   ├── TodoItem.jsx      # Single task row with checkbox, label, badge, delete
│   ├── TodoItem.css
│   ├── TodoList.jsx      # Sorted task list with filter-aware header
│   └── TodoList.css
├── App.jsx               # Root component: state, persistence, stats, layout
├── App.css               # Global styles, two-panel grid, responsive breakpoints
├── App.test.jsx          # Test entry point
├── index.jsx             # ReactDOM.createRoot mount point
└── index.css             # CSS reset and base body styles
```

## Testing

```bash
npm run test
```

Tests use Vitest with `jsdom` environment. Currently a smoke test confirming the app renders.

## Contributing

This is a personal project, but issues and pull requests are welcome. If you open a PR, please keep the CSS in plain stylesheets (no CSS-in-JS or preprocessors) and avoid adding runtime dependencies.

## License

No license specified.
