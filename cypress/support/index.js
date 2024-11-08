Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Missing or insufficient permissions')) {
      return false;
    }
  });
  