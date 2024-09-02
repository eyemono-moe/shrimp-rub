import {
  type Component,
  type JSX,
  createSignal,
  createUniqueId,
} from "solid-js";

const FileInput: Component<{
  onChange: (base64: string) => void;
}> = (props) => {
  const handleFileChange: JSX.ChangeEventHandler<HTMLInputElement, Event> = (
    e,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        props.onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const [textInputRef, setTextInputRef] = createSignal<HTMLInputElement>();

  const handleUrlSubmit: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (
    e,
  ) => {
    e.preventDefault();
    const url = textInputRef()?.value;
    if (url) {
      props.onChange(url);
    }
  };

  const inputId = createUniqueId();

  return (
    <div class="relative w-full h-auto aspect-1 pointer-events-auto overflow-hidden">
      <div class="absolute inset-0 flex flex-col items-center gap-2 pointer-events-none p-4">
        <label class="flex gap-2 font-bold" for={`${inputId}-image`}>
          <div class="i-material-symbols:add-photo-alternate-outline-rounded w-6 h-6" />
          画像を選択
        </label>
        or
        <div class="flex w-full">
          <input
            type="text"
            ref={setTextInputRef}
            placeholder="URLを入力"
            class="pointer-events-auto rounded shrink w-full px-2"
          />
          <button
            type="button"
            onClick={handleUrlSubmit}
            class="pointer-events-auto rounded px-2 py-1 font-bold text-nowrap bg-blue-600 hover:bg-blue-700 text-white touch-manipulation"
          >
            読込
          </button>
        </div>
      </div>
      <input
        type="file"
        id={`${inputId}-image`}
        accept="image/*"
        onChange={handleFileChange}
        class="w-full h-full min-h-0 b-(2 dashed zinc) bg-zinc/20 rounded-xl file:hidden cursor-pointer text-transparent"
        aria-hidden
      />
    </div>
  );
};

export default FileInput;
