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

**Live Demo:** [https://next-js-beginner-s-toolkit-git-main-victor-kigens-projects.vercel.app/](https://next-js-beginner-s-toolkit-git-main-victor-kigens-projects.vercel.app/)

---

## 🛠️ Technology Stack & Rationale

### What Technology Did We Choose?

#### **Next.js 14**
- **What is it?** Next.js is a React-based web framework that enables server-side rendering, static site generation, and provides an exceptional developer experience with features like file-based routing and built-in optimization.

- **Why did we choose it?** 
  - **Performance**: Automatic code splitting, image optimization, and fast refresh make applications lightning-fast
  - **SEO-Friendly**: Server-side rendering improves search engine visibility
  - **Developer Experience**: Hot module replacement, TypeScript support, and intuitive API
  - **Production-Ready**: Built by Vercel with enterprise-level scalability
  - **Full-Stack Capabilities**: API routes allow building backend functionality within the same project
  - **Large Community**: Extensive documentation, plugins, and community support

- **Where is it used?**
  - E-commerce platforms (online stores, marketplaces)
  - Content management systems and blogs
  - SaaS applications and dashboards
  - Marketing websites and landing pages
  - Enterprise web applications

- **Real-World Example**: **Netflix Jobs Portal** (jobs.netflix.com) - Netflix uses Next.js to power their career site, leveraging its performance optimization and SEO capabilities to attract top talent globally. The site handles thousands of job listings with excellent load times and user experience.

#### **Tailwind CSS**
- **What is it?** Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup without writing custom CSS.

- **Why did we choose it?**
  - **Rapid Development**: Build responsive designs quickly with pre-defined utility classes
  - **Consistency**: Enforces design system constraints (spacing, colors, typography)
  - **Maintainability**: Changes are made in HTML/JSX, reducing context switching
  - **Small Bundle Size**: PurgeCSS removes unused styles in production
  - **Customizable**: Easy to extend and customize via configuration
  - **No Naming Conflicts**: No need to invent class names or worry about specificity

- **Where is it used?**
  - Modern web applications and SaaS platforms
  - Marketing websites and landing pages
  - Mobile-responsive web applications
  - Design systems and component libraries

- **Real-World Example**: **GitHub's Documentation Site** - GitHub uses Tailwind CSS for their documentation and developer resources, enabling their team to rapidly iterate on design changes while maintaining a consistent look and feel across thousands of pages.

### End Goal

**Primary Goal**: Render a beautifully styled, responsive user interface that showcases the Moringa School AI Program with:
- Professional branding using Moringa's signature orange and green colors
- Smooth animations and interactive elements
- Mobile-first responsive design
- Fast page loads and optimal performance
- SEO-optimized content for search engine visibility
- Easy deployment and continuous integration workflow

**Learning Outcomes**:
- Understand modern web development workflows
- Learn React component architecture
- Master utility-first CSS approach
- Gain experience with Git version control
- Practice professional deployment strategies

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

### System Requirements

#### **Operating System**
- **Linux**: Ubuntu 20.04+, Debian 10+, Fedora 34+, or any modern Linux distribution
- **macOS**: macOS 10.15 (Catalina) or higher
- **Windows**: Windows 10 (version 1903+) or Windows 11
  - **Note**: Windows users should consider using WSL2 (Windows Subsystem for Linux) for the best experience

#### **Hardware Requirements**
- **RAM**: Minimum 4GB (8GB recommended for smooth development)
- **Storage**: At least 2GB free space for Node.js, dependencies, and project files
- **Processor**: Any modern CPU (Intel Core i3/AMD Ryzen 3 or better)

### Required Software & Tools

#### **1. Node.js & npm**
- **Version Required**: Node.js 18.17 or higher
- **What it includes**: npm (Node Package Manager) comes bundled with Node.js
- **Download**: [nodejs.org](https://nodejs.org)
- **Installation**:
  ```bash
  # Linux (Ubuntu/Debian)
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  
  # macOS (using Homebrew)
  brew install node
  
  # Windows
  # Download the installer from nodejs.org and run it
  ```
- **Verify Installation**:
  ```bash
  node --version    # Should show v18.17.0 or higher
  npm --version     # Should show 9.x.x or higher
  ```

#### **2. Git Version Control**
- **Version Required**: Git 2.x or higher
- **What it's for**: Version control, tracking changes, pushing to GitHub
- **Download**: [git-scm.com](https://git-scm.com)
- **Installation**:
  ```bash
  # Linux (Ubuntu/Debian)
  sudo apt-get update
  sudo apt-get install git
  
  # macOS (using Homebrew)
  brew install git
  
  # Windows
  # Download Git for Windows from git-scm.com
  ```
- **Verify Installation**:
  ```bash
  git --version     # Should show 2.x.x or higher
  ```
- **Configure Git** (first time only):
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

#### **3. Code Editor - Visual Studio Code (Recommended)**
- **Why VS Code?** 
  - Free, open-source, and cross-platform
  - Excellent JavaScript/React support
  - Built-in terminal and Git integration
  - Massive extension ecosystem
- **Download**: [code.visualstudio.com](https://code.visualstudio.com)
- **Alternative Editors**: 
  - WebStorm (paid, feature-rich)
  - Sublime Text (lightweight)
  - Atom (discontinued but still usable)
  - Vim/Neovim (for terminal enthusiasts)

### Required Packages & Dependencies

#### **npm Packages (Installed Automatically)**
When you run `npm install`, these packages are automatically installed from `package.json`:

**Core Framework**:
- `next` (v14.x) - Next.js framework
- `react` (v18.x) - React library
- `react-dom` (v18.x) - React DOM bindings

**Styling**:
- `tailwindcss` (v3.x) - Utility-first CSS framework
- `postcss` (v8.x) - CSS transformation tool
- `autoprefixer` (v10.x) - Adds vendor prefixes to CSS

**Development Tools**:
- `eslint` (v8.x) - JavaScript linter
- `eslint-config-next` - Next.js-specific ESLint rules

**No additional global packages required!** Everything is project-scoped.

### Optional but Recommended Tools

#### **VS Code Extensions**
Install these for a better development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Provides React code snippets
   - Command: `ext install dsznajder.es7-react-js-snippets`

2. **Tailwind CSS IntelliSense**
   - Autocomplete for Tailwind classes
   - Command: `ext install bradlc.vscode-tailwindcss`

3. **Prettier - Code Formatter**
   - Automatic code formatting
   - Command: `ext install esbenp.prettier-vscode`

4. **GitLens**
   - Enhanced Git capabilities in VS Code
   - Command: `ext install eamodio.gitlens`

5. **Auto Rename Tag**
   - Automatically rename paired HTML/JSX tags
   - Command: `ext install formulahendry.auto-rename-tag`

6. **Path Intellisense**
   - Autocomplete for file paths
   - Command: `ext install christian-kohler.path-intellisense`

#### **Browser DevTools**
- **Chrome DevTools** (built into Chrome)
- **React Developer Tools** - Browser extension for debugging React
  - [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

#### **Terminal Alternatives**
- **iTerm2** (macOS) - Enhanced terminal
- **Windows Terminal** (Windows) - Modern terminal app
- **Hyper** (Cross-platform) - Electron-based terminal

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
git clone https://github.com/YOUR-USERNAME/my-first-nextjs-app.git
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

Copyright (c) 2024 [VICTOR KIGEN]

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

## 🤖 AI Prompt Journal for Learning

As part of the Moringa School AI Program, we've documented our learning process using AI-assisted prompts. This section demonstrates how to effectively use AI tools (like ChatGPT, Claude, or GitHub Copilot) to accelerate your learning.

### Example: Understanding Next.js Routing

**Learning Goal**: "I want to improve my understanding of routing in NextJS"

#### 1. **Could you explain this feature with simple examples?**

**AI Response Summary**:
Next.js uses file-based routing where the file structure in the `app/` directory automatically creates routes:

```
app/
├── page.js           → route: /
├── about/
│   └── page.js       → route: /about
├── blog/
│   ├── page.js       → route: /blog
│   └── [slug]/
│       └── page.js   → route: /blog/my-post (dynamic)
└── dashboard/
    └── settings/
        └── page.js   → route: /dashboard/settings
```

**Simple Example**:
```javascript
// app/about/page.js
export default function About() {
  return <h1>About Page</h1>;
}
// This automatically creates the /about route
```

#### 2. **Show me 3 practical use cases where this would be valuable**

**Use Case 1: Blog with Dynamic Posts**
```
app/blog/[slug]/page.js
```
Creates routes like `/blog/my-first-post`, `/blog/learning-nextjs`

**Use Case 2: E-commerce Product Pages**
```
app/products/[category]/[id]/page.js
```
Creates routes like `/products/electronics/laptop-123`

**Use Case 3: User Profile Pages**
```
app/profile/[username]/page.js
```
Creates routes like `/profile/johndoe`, `/profile/janedoe`

#### 3. **Provide a small project idea that would help me practice this feature**

**Project: Personal Portfolio with Blog**

```
app/
├── page.js                    # Home page
├── about/
│   └── page.js               # About me
├── projects/
│   ├── page.js               # Projects listing
│   └── [id]/
│       └── page.js           # Individual project details
├── blog/
│   ├── page.js               # Blog listing
│   └── [slug]/
│       └── page.js           # Blog post
└── contact/
    └── page.js               # Contact form
```

**Practice Tasks**:
- Create static routes for home, about, contact
- Implement dynamic routes for blog posts using slugs
- Add project detail pages with dynamic IDs
- Create a 404 page (`app/not-found.js`)
- Add navigation between pages using `<Link>`

#### 4. **What common mistakes should I avoid when using this feature?**

**Mistake 1: Wrong File Names**
```bash
❌ app/about/About.js         # Won't work
✅ app/about/page.js           # Correct
```

**Mistake 2: Forgetting to Export Default**
```javascript
❌ export function About() { }  # Named export won't work
✅ export default function About() { }  # Correct
```

**Mistake 3: Incorrect Dynamic Route Syntax**
```bash
❌ app/blog/slug/page.js       # Static route, not dynamic
✅ app/blog/[slug]/page.js     # Correct dynamic route
```

**Mistake 4: Not Using the Link Component**
```javascript
❌ <a href="/about">About</a>  # Causes full page reload
✅ <Link href="/about">About</Link>  # Client-side navigation
```

**Mistake 5: Accessing Params Incorrectly**
```javascript
// app/blog/[slug]/page.js
❌ export default function BlogPost() {
     const slug = params.slug; // params is undefined
   }

✅ export default function BlogPost({ params }) {
     const slug = params.slug; // Correct way
   }
```

### How to Use This Learning Method

1. **Identify a concept** you want to learn (e.g., "Next.js data fetching")
2. **Ask these 4 questions** to an AI assistant
3. **Practice the examples** provided
4. **Build the suggested project** to solidify understanding
5. **Document your learnings** in your own AI prompt journal

### Why This Works

- **Structured Learning**: The 4-question framework covers theory, practice, and pitfalls
- **Active Learning**: You're not just reading, you're building
- **Mistake Prevention**: Learning common mistakes saves debugging time
- **Iterative Process**: You can drill deeper into any aspect by asking follow-up questions

### Your Turn: Practice Prompts

Try these prompts for other Next.js concepts:

```
Topic: "I want to improve my understanding of [SERVER COMPONENTS] in NextJS"
Topic: "I want to improve my understanding of [DATA FETCHING] in NextJS"
Topic: "I want to improve my understanding of [API ROUTES] in NextJS"
Topic: "I want to improve my understanding of [MIDDLEWARE] in NextJS"
```

Replace the bracketed text and use the same 4-question framework!

---

## 📚 Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js Learn Course](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind utility classes reference
- [Vercel Documentation](https://vercel.com/docs) - Deployment and hosting guides
- [MORINGA SCHOOL](https://moringaschool.com/) - AI Prompts

### Learning Resources

- [React Documentation](https://react.dev) - Learn React fundamentals
- [JavaScript Info](https://javascript.info) - Modern JavaScript tutorial
- [MDN Web Docs](https://developer.mozilla.org) - Web development reference

### AI Learning Tools

- [ChatGPT](https://chat.openai.com) - Conversational AI for learning
- [Claude](https://claude.ai) - AI assistant for in-depth explanations
- [GitHub Copilot](https://github.com/features/copilot) - AI pair programmer
- [Phind](https://phind.com) - AI search engine for developers

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
- Moringa School For providing a learning platform to learn more on AI prompting 

---

## 📞 Contact

- **Author**: [VICTOR KIGEN]
- **Email**: vickigen@gmail.com
- **GitHub**: [@kigensky](https://github.com/kigensky)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

</div>