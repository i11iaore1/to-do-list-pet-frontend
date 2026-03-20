import { createContext, useContext } from "react";

const STATUS_CHOICES = ["all", "issued", "closed", "expired"] as const;
export type StatusChoice = (typeof STATUS_CHOICES)[number];
export const DEFAULT_STATUS: StatusChoice = "issued";

export interface StatusFilterContextValue {
  status: StatusChoice;
  setStatus: React.Dispatch<React.SetStateAction<StatusChoice>>;
}

const StatusFilterContext = createContext<StatusFilterContextValue | null>(
  null,
);

interface StatusFilterProviderProps {
  children: React.ReactNode;
  contextValue: StatusFilterContextValue;
}

export const StatusFilterProvider = (props: StatusFilterProviderProps) => {
  return (
    <StatusFilterContext.Provider value={props.contextValue}>
      {props.children}
    </StatusFilterContext.Provider>
  );
};

export const useStatusFilter = () => {
  const context = useContext(StatusFilterContext);
  if (!context)
    throw new Error(
      "useStatusFilter must be used within a StatusFilterProvider",
    );
  return context;
};
