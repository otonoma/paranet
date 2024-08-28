# Grokit Documentation

This README provides instructions on how to set up, run, style, and test the Docusaurus app locally.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Styling and Theming

### Custom Styling

You can customize the look and feel of the documentation site by modifying the following files:

- **CSS/SCSS**: Modify the `src/css/custom.css` file to add or override default styles.
- **Theme Configuration**: Customize the theme and layout in `docusaurus.config.js` under the `themeConfig` object.

### Adding Custom Components

You can add custom React components to your site by placing them in the `src/components` directory. These components can then be used in your markdown files via MDX.

### Using Markdown and MDX

Docusaurus supports both Markdown and MDX (Markdown with JSX). You can create content using either format:

- **Markdown**: Use `.md` files for basic documentation content.
- **MDX**: Use `.mdx` files when you need to include React components within your content.

## Testing the Site Locally

### Broken Link Checking

Docusaurus automatically checks for broken links during the build process. To manually check for broken links, run:

```bash
npm run build

If there are any broken links, they will be listed in the terminal output. You can configure the onBrokenLinks setting in docusaurus.config.js to change how broken links are handled (e.g., ignore, warn, or throw an error).

## Additional Resources

- **Docusaurus Documentation**: [Docusaurus Docs](https://docusaurus.io/docs)
- **MDX Documentation**: [MDX Docs](https://mdxjs.com/docs/)
- **React Documentation**: [React Docs](https://reactjs.org/docs/getting-started.html)

If you encounter any issues or have questions, please refer to the Docusaurus documentation.
