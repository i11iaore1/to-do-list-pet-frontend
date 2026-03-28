import { createContext, useContext } from "react";

export interface DescriptionFilterContextValue {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const DescriptionFilterContext =
  createContext<DescriptionFilterContextValue | null>(null);

interface DescriptionFilterProviderProps {
  children: React.ReactNode;
  contextValue: DescriptionFilterContextValue;
}

export const DescriptionFilterProvider = (
  props: DescriptionFilterProviderProps,
) => {
  return (
    <DescriptionFilterContext.Provider value={props.contextValue}>
      {props.children}
    </DescriptionFilterContext.Provider>
  );
};

export const useDescriptionFilter = () => {
  const context = useContext(DescriptionFilterContext);
  if (!context)
    throw new Error(
      "useDescriptionFilter must be used within a DescriptionFilterProvider",
    );
  return context;
};
