## Tech Stack
I am using the following technologies for this task:
- **Material UI** – For UI components and styling
- **TypeScript** – For type safety and better development experience
- **Tailwind CSS** – For utility-based styling
- **React Query** – For efficient data fetching and caching

## Approach

### Data Fetching
- When the page loads, data is fetched using **React Query**.
- The `fetch` API is used for simplicity.

### Component Structure
- Each component is separated based on its functionality to ensure modularity and maintainability.

### State Management
- Temporary data is stored using **React hooks** for simplicity.
- In a real-world scenario, **Redux** or **Zustand** would be more suitable for global state management. eg. when user selected & click "Next" Button

### UI/UX Considerations
- The design focuses on **clean, simple, and clear** layouts to enhance user experience.
- Since the selection involves **garden waste**, using a **green** color scheme improves visual representation and user understanding.

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
