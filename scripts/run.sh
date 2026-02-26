#!/bin/bash

# ─────────────────────────────────────────────────────────────────────────────
# SIU Dubai – Next.js App Setup & Run Script
# Usage: chmod +x scripts/run.sh && ./scripts/run.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e  # Exit on error

echo ""
echo "🎓 ══════════════════════════════════════════════════"
echo "   SIU Dubai – MBA Platform Setup"
echo "   Symbiosis International University Dubai"
echo "══════════════════════════════════════════════════"
echo ""

# ── Check Node.js ──────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
  exit 1
fi

NODE_VERSION=$(node -v | cut -d. -f1 | tr -d 'v')
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "⚠️  Node.js version 18+ is required. Current: $(node -v)"
  exit 1
fi

echo "✅ Node.js $(node -v) detected"

# ── Install dependencies ──────────────────────────────────────────────────
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed successfully"

# ── Optional: Run lint ─────────────────────────────────────────────────────
if [ "$1" == "--lint" ]; then
  echo ""
  echo "🔍 Running ESLint..."
  npm run lint
  echo "✅ Lint passed"
fi

# ── Optional: Run build check ──────────────────────────────────────────────
if [ "$1" == "--build" ]; then
  echo ""
  echo "🏗️  Building for production..."
  npm run build
  echo "✅ Production build complete"
  echo ""
  echo "▶️  Starting production server..."
  npm run start
  exit 0
fi

# ── Start dev server ───────────────────────────────────────────────────────
echo ""
echo "🚀 Starting development server..."
echo "   URL: http://localhost:3000"
echo "   Press Ctrl+C to stop"
echo ""

npm run dev
