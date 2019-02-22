import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import { Provider } from "react-redux";
import MediaQuery from 'react-responsive';

const mediaQueriesReactResponsive = () => (
  <div>
    <div>Device Test!</div>
    <MediaQuery query="(min-device-width: 1224px)">
      <div>You are a desktop or laptop</div>
      <MediaQuery query="(min-device-width: 1824px)">
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query="(orientation: portrait)">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query="(min-resolution: 2dppx)">
      <div>You are retina</div>
    </MediaQuery>
  </div>
);

const NotFound = () => (
  <h1>
    Not found
  </h1>
);

const About = () => (
  <h1>
    About us
  </h1>
);

const Contact = () => (
  <h1>
    Contact us
  </h1>
);

const Home= () => (
  <h1>
    Home Dashboard
  </h1>
);

const reactingResponsively= () => (
  mediaQueriesReactResponsive()
);

export default (store) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/about" component={About}/>
          <DefaultLayout exact path="/contact" component={Contact}/>
          <DefaultLayout exact path="/react_responsive" component={reactingResponsively}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
