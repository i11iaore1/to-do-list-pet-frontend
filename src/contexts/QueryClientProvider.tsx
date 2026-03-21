import {
  QueryClient,
  QueryClientProvider as OriginalQueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <OriginalQueryClientProvider client={queryClient}>
      {children}
    </OriginalQueryClientProvider>
  );
};

export default QueryClientProvider;
