// @ts-check
const { devices } = require('@playwright/test')

const config = {
  reporter: 'line',
  webServer: {
    command: 'npm run serve',
    url: 'http://localhost:4200/',
    timeout: 120000
  },
  use: {
    baseURL: 'http://localhost:4200',
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
  snapshotDir: './src/es/web-components-toolbox/e2e/',
  outputDir: './src/es/web-components-toolbox/e2e/tests/'
}

module.exports = config
