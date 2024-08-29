import type { Component } from "solid-js";
import Controller from "./components/Controller";
import Massagers from "./components/Massagers";
import { useMassage } from "./context/Massage";

const App: Component = () => {
  const [state] = useMassage();

  return (
    <div
      class="w-full min-h-100dvh grid grid-rows-[1fr_auto_auto]"
      classList={{
        "bg-#00f": state.isBB,
        "bg-#e1e1e1": !state.isBB,
      }}
    >
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
  );
};

export default App;
