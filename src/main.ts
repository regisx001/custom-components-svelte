// Custom Components
export * from "./lib/Counter.svelte"




// Main App
import './app.css'
import { mount } from 'svelte';

import App from './App.svelte'

// @ts-ignore
const app = mount(App, { target: document.getElementById("app") });
export default app
