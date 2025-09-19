# Oppo Swap

A minimal static site that integrates the Jupiter Ultra Swap Plugin for Solana token swapping.

## Overview

This is a simple static site consisting of only three files that loads the Jupiter Ultra Swap Plugin directly. The site is designed to work on GitHub Pages under the project path `/oppo-widget-site/`.

## Files

- `index.html` - Main HTML page with Jupiter plugin script and target container
- `styles.css` - CSS variables for Jupiter plugin theming and basic layout styling
- `main.js` - JavaScript initialization code for the Jupiter Ultra Swap Plugin

## Features

- **Jupiter Ultra Swap Plugin Integration**: Direct CDN integration with the official Jupiter plugin
- **Oppo Branding**: Configured with Oppo logo and branding
- **Referral Account**: Pre-configured referral account for fee collection
- **Responsive Layout**: Centered 400x568px swap widget
- **GitHub Pages Compatible**: Uses relative paths for project subpath deployment

## Configuration

The Jupiter plugin is initialized with:
- **Initial Input Token**: SOL (So11111111111111111111111111111111111111112)
- **Initial Output Token**: HEADE token (HEadEtLjAFBGqAweLESUR2Qcjoc3U8ekQNvSUSH17gJz)
- **Referral Account**: 9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn
- **Explorer**: Solscan
- **Branding**: Oppo name and logo

## Deployment

The site is deployed to GitHub Pages at: https://soletswap.github.io/oppo-widget-site/

No build process is required - just commit the three static files to the repository root.