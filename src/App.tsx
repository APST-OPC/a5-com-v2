import type { ReactElement } from "react";

const App = (): ReactElement => {
  return (
    <div>
      <main className="container mx-auto p-5">
        <div className="rounded-2xl border-2 border-amber-400/50 bg-slate-900/20 p-5 shadow-md">
          <h1 className="text-2xl text-center uppercase font-bold">
            Sample Application
          </h1>
        </div>
      </main>
    </div>
  );
};

export default App;
