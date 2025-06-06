# Elite Static Web App

This repository contains a simple yet polished static web application consisting of an `index.html` page and accompanying `style.css` stylesheet. The site is designed to be easily hosted on GitHub Pages and demonstrates a clean, responsive layout.

## Features

- Responsive design with a navigation menu
- Minimal dependencies (pure HTML and CSS)
- Automated deployment via GitHub Actions

## Deployment

A GitHub Actions workflow is included in `.github/workflows/github-pages.yml`. Push changes to the `main` branch, and the workflow will automatically deploy the contents of the repository to GitHub Pages.

1. Create a new repository on GitHub and push this code to the `main` branch.
2. In your repository settings, navigate to **Pages** and choose **GitHub Actions** as the source if prompted.
3. After the workflow completes, your site will be available at `https://<your-github-username>.github.io/<repository-name>/`.

You can also open `index.html` locally in a browser to preview the site before publishing.
