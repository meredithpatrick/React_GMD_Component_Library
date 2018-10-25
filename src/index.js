import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div>
      <p>
        <a href="https://material-ui.com/getting-started/usage/">
          Material UI docs
        </a>
      </p>
      <HelloWorld />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
