import App from './App.svelte'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/app.css";

const app = new App({
  target: document.getElementById('app')
})

export default app