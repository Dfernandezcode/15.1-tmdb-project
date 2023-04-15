import { render } from "@testing-library/react";
import Footer from "./Footer";
describe("Footer component", () => {
  test("Check that footer renders correct", () => {
    const { container } = render(<Footer></Footer>);
    const footerElement = container.querySelector(".footer");
    expect(footerElement).toHaveClass("footer");
  });
});
