import { createPointerListeners } from "@solid-primitives/pointer";
import { type Component, Show, createSignal } from "solid-js";
import FileInput from "./FileInput";

const Image: Component<{
  defaultSrc?: string;
}> = (props) => {
  const [imgSrc, setImgSrc] = createSignal<string | undefined>(
    props.defaultSrc,
  );

  const resetImage = () => {
    setImgSrc(undefined);
  };

  const [showReset, setShowReset] = createSignal(false);
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement>();

  createPointerListeners({
    target: containerRef,
    onEnter: () => setShowReset(true),
    onLeave: () => setShowReset(false),
  });

  return (
    <div class="w-fit h-fit" ref={setContainerRef}>
      <Show
        when={imgSrc()}
        fallback={
          <FileInput
            onChange={(base64) => {
              setImgSrc(base64);
            }}
          />
        }
      >
        <Show when={showReset()}>
          <button
            type="button"
            onClick={resetImage}
            class="absolute top-0 right-0 appearance-none p-1 bg-red rounded-full"
          >
            <div class="i-material-symbols:delete-outline-rounded w-6 h-6 c-white" />
          </button>
        </Show>
        {/* biome-ignore lint/a11y/useAltText: user input */}
        <img src={imgSrc()} />
      </Show>
    </div>
  );
};

export default Image;
