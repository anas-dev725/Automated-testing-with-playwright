const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  // Folder for screenshots, videos, traces
  outputDir: 'test-results',

  reporter: [
    ['html', { open: 'never' }]
  ],

  // Default behavior for ALL browsers
  use: {
    headless: true,                // default headless
    screenshot: 'only-on-failure',
    video: 'on',                   // record video for all tests
  },

  projects: [
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
      },
    },
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});
