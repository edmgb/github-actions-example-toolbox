// @ts-check
const { devices } = require('@playwright/test')

const config = {
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
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
    reuseExistingServer: true,
    debug: true,
    usedPortAction: 'ignore'
  }
}

module.exports = config
