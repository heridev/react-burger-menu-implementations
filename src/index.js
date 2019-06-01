import { render } from "react-dom";
import Router from "./routes";
import store from "./store";
import * as serviceWorker from './serviceWorker';

const run = () => {
  render(Router(store), document.getElementById("rootContainer"));
}

if (["complete", "loaded", "interactive"].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener("DOMContentLoaded", run, false);
}

serviceWorker.unregister();
