import { JSDOM } from "jsdom";

// Initialize DOM environment
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <input id="myInput" value="test input" />
    </body>
  </html>
`);

// Export DOM objects
export const window = dom.window;
export const document = dom.window.document;
export const HTMLElement = dom.window.HTMLElement;
export const HTMLButtonElement = dom.window.HTMLButtonElement;
export const HTMLInputElement = dom.window.HTMLInputElement;
