import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
    render(<App />);
    expect(screen.findByText("Hello world!"));
});
