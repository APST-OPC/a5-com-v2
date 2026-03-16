import type { ReactElement } from "react";

const App = (): ReactElement => {
  return (
    <div>
      <main className="container mx-auto p-5">
        <div className="bg-background-tertiary rounded-2xl border-2 border-amber-400/50 p-5 shadow-md">
          <h1 className="text-2xl text-center uppercase font-bold">
            Sample Application
          </h1>
          <button className="bg-button-secondary p-2 rounded-xl active:bg-button-secondary/80 hover:bg-button-tertiary">
            HELLO
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
