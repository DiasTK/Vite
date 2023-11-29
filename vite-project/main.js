import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import MyComponent from './component.js'

const myVariable = 'Hello, World!';

document.addEventListener('DOMContentLoaded', () => {
  // Create a new instance of MyComponent
  const myComponent = new MyComponent();

  // Create a container div for your custom component
  const container = document.createElement('div');

  // Set the inner HTML of the container using the component's data
  container.innerHTML = `
    <p>${myComponent.message}</p>
  `;

  // Append the container to the body or any other element in your HTML
  document.body.appendChild(container);
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
