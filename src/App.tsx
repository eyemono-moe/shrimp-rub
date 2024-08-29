import type { Component } from "solid-js";
import Controller from "./components/Controller";
import Massagers from "./components/Massagers";
import { MassageProvider } from "./context/Massage";

const App: Component = () => {
  return (
    <MassageProvider>
      <div class="bg-#e1e1e1 h-100vh flex flex-col">
        <Massagers />
        <Controller />
      </div>
    </MassageProvider>
  );
};

export default App;
