//imports 
import React, { Component } from "react";
import { DrizzleProvider } from "@drizzle/react-plugin";
import { LoadingContainer } from "@drizzle/react-components";
//sends the store as a prop tp drizzle provider
import store from './middleware';

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MyContainer from "./MyContainer";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <MyContainer />
          <DrizzleProvider store={store} options={drizzleOptions}></DrizzleProvider>
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
