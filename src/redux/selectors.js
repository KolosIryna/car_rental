export const selectorCars = state => state.car?.items || [];

export const selectorFilter = state => state.car?.filter || '';

export const selectorCarsIsLoading = state => state.car?.isLoading || false;

export const selectorCarsError = state => state.car?.error || null;
