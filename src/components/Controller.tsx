import { type Component, Show } from "solid-js";
import { useMassage } from "../context/Massage";
import Button from "./Button";

const Controller: Component = () => {
  const [state, { addMassager, removeMassager, toggleMassaging, toggleBB }] =
    useMassage();

  return (
    <div class="flex flex-wrap gap-2 justify-center w-full">
      <Button type="button" onClick={toggleMassaging}>
        <Show when={state.massaging} fallback="揉む">
          揉まない
        </Show>
      </Button>
      <Button type="button" variant="secondary" onClick={removeMassager}>
        <div class="i-material-symbols:person-remove-outline-rounded w-6 h-6" />
        ちょっと揉む
      </Button>
      <Button type="button" variant="secondary" onClick={addMassager}>
        <div class="i-material-symbols:person-add-outline-rounded w-6 h-6" />
        もっと揉む
      </Button>
      <Button type="button" variant="secondary" onClick={toggleBB}>
        BB切り替え
      </Button>
    </div>
  );
};

export default Controller;
