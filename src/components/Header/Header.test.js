import { customTestingRender } from "../../utils/test-utils";
import Header from "./Header";

describe("Header component", () => {
  test("Check that header renders with correct background", () => {
    const { container } = customTestingRender(<Header background={"test"}></Header>);
    const headerElement = container.querySelector(".header");
    expect(headerElement).toHaveClass("background-test");
  });
});
