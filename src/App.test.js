import React from "react";
import { render, screen } from "@testing-library/react";
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

  const { getByText } = render(<App />);

  expect(getByText('Hello Canada')).toBeInTheDocument();

  expect(getByText('Provinces')).toBeInTheDocument();
  expect(getByText('Territories')).toBeInTheDocument();
});

test('renders provinces data by default', async () => { 
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([]),
    });

    const { getByAltText } = render(<App />);

    // Assert that the Canada flag image is rendered
    const canadaFlagImg = getByAltText("Canada's Flag");
    expect(canadaFlagImg).toBeInTheDocument();
    expect(canadaFlagImg).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg');

})

