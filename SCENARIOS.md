# Assignment 4: Provided React-Collection Scenarios

Pick one scenario and copy its goal into the Plan Before Building section of your submission template.

All four are fictional practice situations, not real clients, so there is nothing to research and no one to interview. Every scenario uses the same requirements and rubric. You may change names, wording, and colors, but keep every required item from the assignment. Optional extra features do not replace required work.

**Suggested components.**

Use at least five purposeful components besides `App`. Possible jobs are Header, CollectionControls, ItemForm, ItemList, ItemCard, and StatusMessage. These are starting ideas, not required names or finished code.

Render repeated ItemCards with different props and stable keys, and pass an action callback, such as `onRemove`, to the component that reports it. Name the main state owner and record each component's props, events, and state in your component map.

Every record has an `id`, `title`, `creator`, `category`, `minutes`, and `description`. The records are fictional starting content; the items users add and the state changes are yours to build. `data/empty.json`, `data/incomplete.json`, and `data/boundary-records.json` help you check unusual data.

**Begin and check.**

1. Choose your scenario and copy its goal into your plan.
2. Sketch five or more component jobs and circle the main state owner.
3. Load the starting records into your collection and show a clear empty state when none remain.
4. Build the two-field controlled form with useful validation.
5. Check the initial, valid, invalid, collection update, filter or sort, empty, and keyboard cases.
6. Write at least two meaningful automated tests and record what you actually saw.
7. Explain the component boundary you improved after the first working version.

## Reading List (Recommended)

- Who uses it: Alex, a reader organizing fictional practice books.
- Goal: Add a book to a collection, update its status, and find matching entries.
- Supplied starting content: [Books](data/books.json), in `data/books.json`.
- Two suggested controlled fields: title and creator; require meaningful nonempty text.
- Meaningful actions: add, remove, or toggle a reading status; filter the collection.

## What Is Here

- `package.json` and `package-lock.json`: the exact React and Vitest versions. Do not edit them.
- `vite.config.js` and `index.html`: the Vite setup. You add one `base` line to `vite.config.js` when you deploy.
- `src/App.jsx`: your app starts here.
- `src/App.test.jsx`: two sample tests so `npm test` passes from the start. Add your own test files next to your components.
- `src/main.jsx`, `src/styles.css`, and `src/test-setup.js`: startup, your CSS, and test setup.
- `data/`: the four scenario datasets, plus `empty.json`, `incomplete.json`, and `boundary-records.json` for checking unusual data.
- `SCENARIOS.md`: the four scenarios. Pick one.
- `.gitignore`: keeps `node_modules` and `dist` out of Git.
- `.github/workflows/deploy.yml`: the GitHub Pages workflow. It builds and publishes your app on every push to `main`; you do not edit it. The `.github` folder starts with a dot and may be hidden; on a Mac, press Shift+Cmd+. in Finder to see it before you copy.
