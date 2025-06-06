const fs = require('fs');
const { JSDOM } = require('jsdom');

describe('index.html', () => {
  test('has correct title and heading', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector('title').textContent;
    const heading = dom.window.document.querySelector('h1').textContent;
    expect(title).toBe('Elite Static Web App');
    expect(heading).toBe('Welcome to the Elite Static Web App');
  });
});
