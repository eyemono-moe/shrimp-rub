import type { Component } from "solid-js";
import HandSrc from "../assets/hand.webp";
import { useMassage } from "../context/Massage";
import "../assets/momi.css";

const Hand: Component = () => {
  const [state] = useMassage();

  return (
    <img
      src={HandSrc}
      alt="手"
      class="pointer-events-none absolute left-50% bottom--5% w-60% [--radius:8cqw] translate-(x-[calc(var(--radius)*sin(var(--angle))-50%)] y-[calc(var(--radius)*cos(var(--angle)))])"
      classList={{
        "animate-[0.53s_hand_linear_infinite]": state.massaging,
      }}
    />
  );
};

export default Hand;
