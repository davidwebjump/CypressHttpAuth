import './commands'

// Get uncaught error
Cypress.on('uncaught:exception', (err, runnable) => false);

//This command is to not show the xhrs of the page
const app = window.top;
  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
};