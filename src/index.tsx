import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Main = () => {
  return <App />;
};

root.render(<Main />);
