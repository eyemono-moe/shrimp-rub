import { type Component, type ComponentProps, mergeProps } from "solid-js";

const Button: Component<
  ComponentProps<"button"> & {
    variant?: "primary" | "secondary";
  }
> = (props) => {
  const defaultProps = mergeProps(props, {
    variant: "primary",
  });

  return (
    <button
      {...defaultProps}
      class="rounded-full px-4 py-2 font-bold text-nowrap flex gap-1"
      classList={{
        "bg-blue-500 hover:bg-blue-600 text-white":
          defaultProps.variant === "primary",
        "bg-gray-500 hover:bg-gray-600 text-white":
          defaultProps.variant === "secondary",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
