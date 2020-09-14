import React from "react";
import "./App.css"
import { Provider } from "react-redux";
import store from "./store";
import GithubUsers from "./gitHubUsers"

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GithubUsers />
      </div>
    </Provider>
  );
}
