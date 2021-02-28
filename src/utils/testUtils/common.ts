export const combineSelectors = (...selectors: string[]): string =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");
