import { ThemeProvider } from "./contexts/ThemeContext";
import { TaskFilterStateManager } from "./contexts/TaskFilterContext/TaskFiltersProvider";
import { Pages } from "./pages/Pages";

function App() {
  return (
    <ThemeProvider>
      <TaskFilterStateManager>
        <Pages />
      </TaskFilterStateManager>
    </ThemeProvider>
  );
}

export default App;
