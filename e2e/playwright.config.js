// @ts-check
const { devices } = require('@playwright/test')

const config = {
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:2200',
    headless: true
  },
  projects: [
    {
      name: 'Mobile Android',
      use: {
        ...devices['Pixel 2']
      }
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ],

  /* Run your local server before starting the tests */
  webServer: {
    command: 'npm run serve',
    port: 4200,
    reuseExistingServer: true
  }
}

module.exports = config
