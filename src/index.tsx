/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";
import { MassageProvider } from "./context/Massage";

// biome-ignore lint/style/noNonNullAssertion: div#root in index.html
const root = document.getElementById("root")!;

render(
  () => (
    <MassageProvider>
      <App />
    </MassageProvider>
  ),
  root,
);
