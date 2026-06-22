#!/bin/bash
set -e
echo "🚀 Setting up android-consultant-portfolio..."

git init
git add .
git commit -m "feat: Initial commit - Senior Android Consultant Portfolio

Built with Next.js 15, TypeScript, TailwindCSS, Framer Motion.
Pages: Home, About, Services, Case Studies, Apps, Projects, Blog, Contact.
GitHub Actions CI/CD → automatic deployment to GitHub Pages."

git branch -M main
git remote add origin https://github.com/PijushManna/android-consultant-portfolio.git

# Force push to overwrite any existing commits in the remote
git push -u origin main --force

echo ""
echo "✅ Done! GitHub Actions is now building your site."
echo "🌐 Live at: https://pijushmanna.github.io/android-consultant-portfolio/"
echo "📊 Build progress: https://github.com/PijushManna/android-consultant-portfolio/actions"
