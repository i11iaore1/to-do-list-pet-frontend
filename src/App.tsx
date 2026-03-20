import { ThemeProvider } from "./contexts/ThemeContext";
import { TaskFilterStateManager } from "./contexts/TaskFilterContext/TaskFiltersProvider";
import { Pages } from "./pages/Pages";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <TaskFilterStateManager>
          <Pages />
        </TaskFilterStateManager>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
