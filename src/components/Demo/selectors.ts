export const getReloadingList = (state: Record<string, unknown>) => {
  return state.initLoaded && state.loading;
};
