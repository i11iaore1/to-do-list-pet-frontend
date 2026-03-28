import {
  QueryClient,
  QueryClientProvider as OriginalQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <OriginalQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </OriginalQueryClientProvider>
  );
};

export default QueryClientProvider;
