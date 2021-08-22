import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Header from "../components/header";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import pretty from "pretty";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});
describe("<App />", () => {
  it("renders with or without a props", () => {
    act(() => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"makeStyles-root-1\\">
        <header class=\\"MuiPaper-root MuiAppBar-root MuiAppBar-positionSticky MuiAppBar-colorTransparent makeStyles-topAppBar-2 MuiPaper-elevation4\\">
          <div class=\\"MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters\\">
            <h6 class=\\"MuiTypography-root makeStyles-title-4 MuiTypography-h6\\"><a href=\\"/\\"> <img src=\\"shory-logo.png\\" class=\\"makeStyles-logoImage-5\\" alt=\\"Shory\\"></a></h6>
            <div><button class=\\"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"account of current user\\" aria-controls=\\"menu-appbar\\" aria-haspopup=\\"true\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
          </div>
        </header>
      </div>"
    `); /* ... gets filled automatically by jest ... */
  });
});
