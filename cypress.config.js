// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {},
//   allowCypressEnv: false
// });
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://testapp1.andresfloresv.com',  // Root of your site
  },
  env: {
    username: 'louisem1609',   // your test username
    password: 'tOaK0&@3' // your test password
  },
  allowCypressEnv: false,    // disables insecure Cypress.env() access in browser
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true
}
}
)
