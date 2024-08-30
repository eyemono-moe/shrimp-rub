import { type Component, type ComponentProps, mergeProps } from "solid-js";

const Button: Component<
  ComponentProps<"button"> & {
    variant?: "primary" | "secondary";
  }
> = (props) => {
  const defaultProps = mergeProps(
    {
      variant: "primary",
    },
    props,
  );

  return (
    <button
      {...defaultProps}
      class="rounded-full px-4 py-2 font-bold text-nowrap inline-flex gap-1 items-center"
      classList={{
        "bg-blue-500 hover:bg-blue-600 text-white":
          defaultProps.variant === "primary",
        "bg-zinc-500 hover:bg-zinc-600 text-white":
          defaultProps.variant === "secondary",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
