import Item from "./item";
import { render, screen, fireEvent } from "@testing-library/react";

test('renders country items correctly', () => {
  const itemProps = {
    name: "Austria", 
    capital: "Vienna",
    flagUrl: "https://example.com/johndoe.jpg",
  };

  render(<Item {...itemProps} />);

  expect(screen.getByTestId("item-name").textContent).toBe("Austria")

  const button = screen.getByTestId("item-btn");
  fireEvent.click(button)
  expect(screen.getByText("Vienna")).toBeTruthy();
})


test("toggles capital visibility on button click", () => {
  const itemProps = {
    name: "Germany", 
    capital: "Berlin",
    flagUrl: "https://example.com/johndoe.jpg",
  };

  render(<Item {...itemProps} />);

  const button = screen.getByTestId("item-btn");
  fireEvent.click(button);
  expect(screen.getByText("Berlin")).toBeTruthy();

  fireEvent.click(button);
  expect(screen.queryByText("Berlin")).toBeFalsy();
});
