import { type Component, For } from "solid-js";
import { useMassage } from "../context/Massage";
import Massager from "./Massager";

const Massagers: Component = () => {
  const [state] = useMassage();

  return (
    <div class="w-full h-full flex justify-center items-center gap-4 px-4">
      <For each={new Array(state.count)}>{() => <Massager />}</For>
    </div>
  );
};

export default Massagers;
