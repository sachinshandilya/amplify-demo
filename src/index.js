import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import Amplify, { Auth } from "aws-amplify";
import awsExports from "./aws-exports";

let App;
Amplify.configure(awsExports);

App = require("./App.js").default;

Amplify.configure({
  API: {
    graphql_headers: async () => {
      const session = await Auth.currentSession();
      return {
        Authorization: session.getIdToken().getJwtToken(),
      };
    },
  },
  Auth: {
    storage: sessionStorage,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <div>123</div> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
