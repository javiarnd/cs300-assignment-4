import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";
import userEvent from "@testing-library/user-event";

test("adds a valid book with lowercases and ws throughout and cleans its formatting", async () => {
  render(<App />);
  await userEvent.type(screen.getByLabelText("Title"), "test book");
  await userEvent.type(screen.getByLabelText("Author"), "jane doe");
  await userEvent.type(screen.getByLabelText("Minutes"), "120");
  await userEvent.click(screen.getByRole("button", { name: "Add Book" }));
  expect(screen.getByRole("heading", { name: "Test Book" })).toBeInTheDocument();
  expect(screen.getByText("9 books in your library")).toBeInTheDocument();
});

test("search filters the list and shows the empty message for when theres no match", async () => {
  render(<App />);
  const search = screen.getByLabelText("Search by title or author");
  await userEvent.type(search, "robot");
  expect(screen.getByRole("heading", { name: "Robot Garden" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "River Sketches" })).not.toBeInTheDocument();
  await userEvent.clear(search);
  await userEvent.type(search, "Captain Underpants");
  expect(screen.getByText("No books match your search")).toBeInTheDocument();
});

/* test("shows an error when the title is empty", async () => {
 render(<App />);
 await userEvent.click(screen.getByRole("button", { name: "Add book" }));
 expect(screen.getByText("Enter a title.")).toBeInTheDocument();
}); */