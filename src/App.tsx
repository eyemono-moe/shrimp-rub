import type { Component } from "solid-js";
import Controller from "./components/Controller";
import Massagers from "./components/Massagers";
import { MassageProvider } from "./context/Massage";

const App: Component = () => {
  return (
    <MassageProvider>
      <div class="bg-#e1e1e1 w-full min-h-100dvh grid grid-rows-[1fr_auto_auto]">
        <Massagers />
        <Controller />
        <div class="text-center">
          元エビ：
          <a
            href="https://www.nicovideo.jp/watch/sm44019051"
            target="_blank"
            rel="noopener noreferrer"
            class="underline c-blue-7 visited:c-purple-7"
          >
            sm44019051
          </a>
        </div>
      </div>
    </MassageProvider>
  );
};

export default App;
