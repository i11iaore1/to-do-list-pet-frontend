import { ThemeProvider } from "./contexts/ThemeContext";
import { TaskFiltersProvider } from "./contexts/taskFilterContexts/TaskFiltersProvider";
import { Pages } from "./pages/Pages";

function App() {
  return (
    <ThemeProvider>
      <TaskFiltersProvider>
        <Pages />
      </TaskFiltersProvider>
    </ThemeProvider>
  );
}

export default App;
