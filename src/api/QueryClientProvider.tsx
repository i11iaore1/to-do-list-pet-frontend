import {
  QueryClient,
  QueryClientProvider as OriginalQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthController from "../components/AuthController/AuthController";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <OriginalQueryClientProvider client={queryClient}>
      <AuthController>{children}</AuthController>
      <ReactQueryDevtools initialIsOpen={false} />
    </OriginalQueryClientProvider>
  );
};

export default QueryClientProvider;
