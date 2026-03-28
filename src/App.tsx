import { ThemeProvider } from "./contexts/ThemeContext";
import { TaskFilterStateManager } from "./contexts/TaskFilterContext/TaskFiltersProvider";
import { Pages } from "./pages/Pages";
import Layout from "./layouts/Layout";
import QueryClientProvider from "./api/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Layout>
          <TaskFilterStateManager>
            <Pages />
          </TaskFilterStateManager>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
