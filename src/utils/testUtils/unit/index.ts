import { fireEvent, RenderResult } from "@testing-library/react";

export const existElement = (page: RenderResult, selector: string): boolean => {
  try {
    return !!page.getByTestId(selector);
  } catch {
    return false;
  }
};

export const elementClick = (selector: string, wrapper: RenderResult): void => {
  const { getByTestId } = wrapper;
  const element = getByTestId(selector);
  Object.assign(element, { preventDefault: jest.fn() });
  fireEvent.click(element);
};
