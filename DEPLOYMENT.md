# GitHub Pages Deployment Guide

## Configuration Complete

- HashRouter enabled for GitHub Pages compatibility
- gh-pages package installed
- package.json configured with homepage and deploy scripts
- vite.config.js base path set to /paradise-nursery/
- Build tested successfully

## Deployment Commands

Run these commands in order:

### 1. Initialize Git repository
```bash
git init
```  

### 2. Add all files
```bash
git add .
``` 

### 3. Create initial commit
```bash
git commit -m "Initial commit: Paradise Nursery e-commerce app"
```  

### 4. Add remote repository
```bash
git remote add origin https://github.com/syedmuhammadshah510/paradise-nursery.git
```  

### 5. Push to GitHub main branch
```bash
git branch -M main
git push -u origin main
``` 

### 6. Deploy to GitHub Pages
```bash
npm run deploy
``` 

## After Deployment

1. Go to https://github.com/syedmuhammadshah510/paradise-nursery
2. Click Settings > Pages
3. Verify Source is set to gh-pages branch
4. Your site will be live at: https://syedmuhammadshah510.github.io/paradise-nursery/

Note: GitHub Pages may take 1-5 minutes to build and deploy.

## Future Updates

To deploy updates after making changes:
```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```