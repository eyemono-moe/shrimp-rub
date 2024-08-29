import { type ParentComponent, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const defaultState = {
  count: 1,
  massaging: false,
};

const MassageContext = createContext<
  [
    state: typeof defaultState,
    actions: {
      toggleMassaging: () => void;
      addMassager: () => void;
      removeMassager: () => void;
    },
  ]
>([
  defaultState,
  {
    toggleMassaging: () => {},
    addMassager: () => {},
    removeMassager: () => {},
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

  return (
    <MassageContext.Provider
      value={[
        state,
        {
          toggleMassaging,
          addMassager,
          removeMassager,
        },
      ]}
    >
      {props.children}
    </MassageContext.Provider>
  );
};

export const useMassage = () => useContext(MassageContext);
