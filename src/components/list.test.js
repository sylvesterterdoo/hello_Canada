import List from "./list";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders <List>", async() => {
  const provinces = [
    {
        "name": "Ontario",
        "capital": "Toronto",
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg"
    },
    {
        "name": "Quebec",
        "capital": "Quebec City",
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg"
    },
    {
        "name": "Nova Scotia",
        "capital": "Halifax",
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Nova_Scotia.svg"
    },
    {
        "name": "New Brunswick",
        "capital": "Fredericton",
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_New_Brunswick.svg"
    },
    {
        "name": "Manitoba",
        "capital": "Winnipeg",
        "flagUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Manitoba.svg"
    }
];

  render(<List data={provinces} />)

  const items = screen.getAllByTestId("item-name");
  expect(items.length).toBe(5);

})