# Next.js Beginner's Toolkit

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A comprehensive, beginner-friendly starter project for learning Next.js. This toolkit provides a step-by-step guide and a ready-to-deploy application that helps newcomers understand modern web development with Next.js, Tailwind CSS, and deployment on Vercel.

## 🎯 Overview

This project is designed for developers who are new to Next.js and want a solid foundation to build upon. It includes:

- Pre-configured Next.js 14 with App Router
- Tailwind CSS for styling
- Ready-to-deploy setup for Vercel
- GitHub integration workflow
- Comprehensive documentation and examples

**Live Demo:** [https://next-js-beginner-s-toolkit-2c1lvcqwa-victor-kigens-projects.vercel.app/]

---

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Resources](#-resources)

---

## ✨ Features

- **🚀 Next.js 14** - Latest version with App Router
- **🎨 Tailwind CSS** - Utility-first CSS framework pre-configured
- **📱 Responsive Design** - Mobile-first approach
- **⚡ Fast Refresh** - Instant feedback during development
- **🔍 ESLint** - Code quality and consistency
- **📦 Easy Deployment** - One-click deployment to Vercel
- **🔄 Auto-Deploy** - Automatic deployments on Git push
- **📚 Comprehensive Documentation** - Step-by-step guides included

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your machine:

### Required Software

- **Node.js** (version 18.17 or higher)
  - Download from [nodejs.org](https://nodejs.org)
  - Verify installation: `node --version`
  
- **npm** (comes with Node.js) or **yarn**
  - Verify installation: `npm --version`

- **Git** (version 2.x or higher)
  - Download from [git-scm.com](https://git-scm.com)
  - Verify installation: `git --version`

### Recommended

- **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/)
- **VS Code Extensions** (optional but helpful):
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter

### Accounts (for deployment)

- **GitHub Account** - [Sign up here](https://github.com/join)
- **Vercel Account** - [Sign up here](https://vercel.com/signup)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kigensky/my-first-nextjs-app.git
cd my-first-nextjs-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:3000`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your application running!

---

## 📁 Project Structure

```
my-first-nextjs-app/
├── app/                      # App directory (Next.js 14 App Router)
│   ├── favicon.ico          # Favicon
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page component
├── public/                   # Static assets
│   ├── next.svg             # Next.js logo
│   └── vercel.svg           # Vercel logo
├── node_modules/            # Dependencies (auto-generated)
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── jsconfig.json            # JavaScript configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration for Tailwind
├── README.md                # This file
└── tailwind.config.js       # Tailwind CSS configuration
```

### Key Files Explained

- **`app/page.js`** - The main homepage component
- **`app/layout.js`** - Wraps all pages, contains metadata and root HTML structure
- **`app/globals.css`** - Global styles including Tailwind CSS imports
- **`tailwind.config.js`** - Customize Tailwind theme, colors, and plugins
- **`next.config.js`** - Next.js framework configuration

---

## 💻 Usage

### Basic Development Workflow

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Edit files:**
   - Main page: `app/page.js`
   - Styles: `app/globals.css`
   - Layout: `app/layout.js`

3. **See changes instantly** - Next.js Fast Refresh automatically updates the browser

### Creating New Pages

Next.js uses file-based routing. To create a new page:

```bash
# Create a new directory in app/
mkdir app/about

# Create page.js inside
touch app/about/page.js
```

Example `app/about/page.js`:

```javascript
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="mt-4 text-lg">This is the about page!</p>
    </main>
  );
}
```

Access at: `http://localhost:3000/about`

### Using Tailwind CSS

Tailwind utility classes are available globally:

```javascript
export default function Example() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition">
      <h2 className="text-2xl font-bold">Hello Tailwind!</h2>
    </div>
  );
}
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint
npm run lint
```

---

## ⚙️ Configuration

### Tailwind CSS Customization

Edit `tailwind.config.js` to customize colors, fonts, spacing, etc:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'custom-gray': '#6b7280',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Next.js Configuration

Modify `next.config.js` for Next.js-specific settings:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization domains
  images: {
    domains: ['example.com'],
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig
```

### Environment Variables

Create `.env.local` for environment-specific variables:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your-database-url
SECRET_KEY=your-secret-key
```

Access in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

#### Method 1: Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the .next folder
```

**Custom Server:**
```bash
npm run build
npm start
```

### Continuous Deployment

Once connected to Vercel:
- Every `git push` to `main` triggers automatic deployment
- Pull requests create preview deployments
- Rollback to previous deployments with one click

---

## 🔧 Troubleshooting

### Common Issues

#### Port 3000 Already in Use

**Problem:** Error: "Port 3000 is already in use"

**Solution:**
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Or start on different port
npm run dev -- -p 3001
```

#### Module Not Found Errors

**Problem:** "Cannot find module" errors after cloning

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### Tailwind Styles Not Working

**Problem:** Tailwind classes have no effect

**Solution:**
1. Verify `globals.css` includes Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Check `tailwind.config.js` content paths are correct
3. Restart development server

#### Build Fails on Vercel

**Problem:** Build succeeds locally but fails on Vercel

**Solution:**
1. Check Node.js version compatibility in `package.json`:
   ```json
   "engines": {
     "node": ">=18.17.0"
   }
   ```
2. Clear Vercel cache and redeploy
3. Check environment variables are set in Vercel dashboard

#### Git Push Rejected

**Problem:** `! [rejected] main -> main (fetch first)`

**Solution:**
```bash
git pull origin main --rebase
git push origin main
```

### Getting Help

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Discussions**: Create an issue in this repository
- **Stack Overflow**: Tag questions with `next.js`
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

## 🤝 Contributing

Contributions are welcome! This project is designed to help beginners, so improvements to documentation and examples are especially valuable.

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-first-nextjs-app.git
   cd my-first-nextjs-app
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Write clear, commented code
   - Follow existing code style
   - Update documentation if needed

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### Contribution Guidelines

- **Code Style**: Follow ESLint rules (run `npm run lint`)
- **Commit Messages**: Use clear, descriptive commit messages
- **Documentation**: Update README.md for new features
- **Testing**: Test your changes locally before submitting

### Areas for Contribution

- 📚 Improve documentation and tutorials
- 🐛 Fix bugs and issues
- ✨ Add new example pages or components
- 🎨 Improve UI/UX design
- ♿ Enhance accessibility
- 🌐 Add internationalization support

---

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📚 Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js Learn Course](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind utility classes reference
- [Vercel Documentation](https://vercel.com/docs) - Deployment and hosting guides

### Learning Resources

- [React Documentation](https://react.dev) - Learn React fundamentals
- [JavaScript Info](https://javascript.info) - Modern JavaScript tutorial
- [MDN Web Docs](https://developer.mozilla.org) - Web development reference

### Community

- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and issues
- [Next.js Discord](https://nextjs.org/discord) - Community chat
- [Vercel Community](https://github.com/vercel/community) - Discussions and support

### Video Tutorials

- [Next.js 14 Crash Course](https://www.youtube.com/results?search_query=nextjs+14+tutorial)
- [Tailwind CSS Tutorial](https://www.youtube.com/results?search_query=tailwind+css+tutorial)

---

## 🙏 Acknowledgments

- Next.js team at Vercel for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- The open-source community for inspiration and support

---

## 📞 Contact

- **Author**: Victor Kigen
- **Email**: vickigen@gmail.com
- **GitHub**: [@kigensky](https://github.com/kigensky)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by beginners, for beginners

</div>