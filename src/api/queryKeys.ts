export const queryKeys = {
  user: {
    me: ["user", "me"] as const,
    other: (id: number) => ["user", "other", id],
  },
  tasks: {
    list: (filters: object) => ["tasks", "list", { ...filters }] as const,
    // detail: (id: number) => ["tasks", "detail", id] as const,
  },
};
