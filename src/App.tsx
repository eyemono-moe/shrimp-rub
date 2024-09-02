import type { Component } from "solid-js";
import Controller from "./components/Controller";
import Massagers from "./components/Massagers";
import { useMassage } from "./context/Massage";

const App: Component = () => {
  const [state] = useMassage();

  return (
    <div
      class="w-full min-h-100dvh grid grid-rows-[1fr_auto_auto] font-[Noto_Sans_JP] px-4 pb-8 c-zinc-9"
      classList={{
        "bg-#00f": state.isBB,
        "bg-#e1e1e1": !state.isBB,
      }}
    >
      <Massagers />
      <div class="w-fit flex flex-col gap-4 mx-auto">
        <Controller />
        <div class="flex gap-2 items-center justify-center flex-wrap">
          <div>
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
          <a
            href="https://github.com/eyemono-moe/shrimp-rub"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center"
          >
            <div class="i-mdi:github w-6 h-6" />
            <span class="underline c-blue-7 visited:c-purple-7">
              eyemono-moe/shrimp-rub
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
