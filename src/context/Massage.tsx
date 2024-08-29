import { type ParentComponent, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const defaultState = {
  count: 1,
  massaging: false,
  isBB: false,
};

const MassageContext = createContext<
  [
    state: typeof defaultState,
    actions: {
      toggleMassaging: () => void;
      addMassager: () => void;
      removeMassager: () => void;
      toggleBB: () => void;
    },
  ]
>([
  defaultState,
  {
    toggleMassaging: () => {},
    addMassager: () => {},
    removeMassager: () => {},
    toggleBB: () => {},
  },
]);

export const MassageProvider: ParentComponent = (props) => {
  const [state, setState] = createStore(defaultState);

  const toggleMassaging = () => {
    setState("massaging", (m) => !m);
  };
  const addMassager = () => {
    setState("count", (c) => c + 1);
  };
  const removeMassager = () => {
    setState("count", (c) => Math.max(1, c - 1));
  };
  const toggleBB = () => {
    setState("isBB", (bb) => !bb);
  };

  return (
    <MassageContext.Provider
      value={[
        state,
        {
          toggleMassaging,
          addMassager,
          removeMassager,
          toggleBB,
        },
      ]}
    >
      {props.children}
    </MassageContext.Provider>
  );
};

export const useMassage = () => useContext(MassageContext);
