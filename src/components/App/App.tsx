import React from "react";

import { Main } from "components/Main";

import "components/App/App.css";

export const App: React.FC = () => (
  <div data-testid="app" className="App">
    <Main />
  </div>
);
