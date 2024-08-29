import type { Component } from "solid-js";
import DefaultShrimp from "../assets/shrimp.png";
import Hand from "./Hand";
import Image from "./Image";
import "../assets/momi.css";
import { useMassage } from "../context/Massage";

const Massager: Component = () => {
  const [state] = useMassage();

  return (
    <div class="relative w-full max-w-18vw @container">
      <div class="w-full h-auto">
        <Image />
      </div>
      <div class="w-full h-auto absolute bottom-0 translate-y-50%">
        <div
          class="[--radius:4cqw] translate-(x-[calc(var(--radius)*sin(var(--angle)))] y-[calc(var(--radius)*cos(var(--angle)))])"
          classList={{
            "animate-[0.53s_hand_linear_infinite]": state.massaging,
          }}
        >
          <Image defaultSrc={DefaultShrimp} />
        </div>
      </div>
      <Hand />
    </div>
  );
};

export default Massager;
