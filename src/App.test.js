import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByText } = render(<App />);

  const appElement = screen.getByText("Hello Canada");
  expect(appElement).toBeInTheDocument();
});


test('renders header and menu items', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([]),
  });

  let getByTextResult;

  await act(async () => {
    getByTextResult = render(<App />);
  });

  const { getByText } = getByTextResult;

  expect(getByText('Provinces')).toBeInTheDocument();
  expect(getByText('Territories')).toBeInTheDocument();
});



test('renders image of Canada flag', async () => {
  // Mock the fetch function
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve([]),
  });

  let getByAltTextResult;

  await act(async () => {
    getByAltTextResult = render(<App />);
  });

  const { getByAltText } = getByAltTextResult;

  const canadaFlagImg = getByAltText("Canada's Flag");
  expect(canadaFlagImg).toBeInTheDocument();
  expect(canadaFlagImg).toHaveAttribute(
    'src',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg'
  );
});

