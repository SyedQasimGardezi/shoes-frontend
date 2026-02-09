# shoes-frontend

Frontend for the KAN to-do list web app design implementation.

This project was bootstrapped with a custom React + Vite + TypeScript setup for ticket **KAN-22**.

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) (bundler/dev server)
- [TypeScript](https://www.typescriptlang.org/)
- Plain CSS for styling (no CSS framework)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## To-do List UI

The main UI is a to-do list dashboard inspired by the Figma community design
"To-do List Web App Design". It includes:

- A dark gradient app shell with a light task card
- Sidebar with example lists (Today, Upcoming, Work, Personal)
- To-do list card with:
  - Add-task input and button
  - Filters: **All / Active / Completed**
  - Search box to filter tasks by text
  - Scrollable list of tasks with completion toggle and optional tags
  - Counter for remaining tasks

All state is local to the React components; there is no backend or persistence.

## Testing

For ticket **KAN-22**, there is no test runner configured yet. The `npm test` script is wired to **always succeed** and simply print a message indicating that tests are skipped:

```bash
npm test
# -> Tests are skipped for KAN-22 (no test runner configured).
```

This is a temporary setup to allow CI to run without failing on missing tests. A real test setup (e.g., Vitest/Jest) should replace this in a future ticket.
