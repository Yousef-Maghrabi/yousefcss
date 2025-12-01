import type React from "react"
import Link from "next/link"
import { ArrowRight, Layers, Palette, Sparkles, Zap, Code2, Box, Copy } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Box className="h-6 w-6 text-primary" />
            <span>Yousef CSS</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/getting-started"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Getting Started
            </Link>
            <Link href="/tokens" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Tokens
            </Link>
            <Link href="/components" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Components
            </Link>
            <Link href="/utilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Utilities
            </Link>
            <Link href="/effects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Effects
            </Link>
            <Link href="/examples" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Examples
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/getting-started"
              className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32 lg:py-40">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl">
            The Token-Based CSS Framework for Modern Web
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
            A complete design system featuring 400+ design tokens, 22 components, 24 utility classes, and 15 animation
            effects. Pure CSS, no JavaScript required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-sm">
              <span className="text-muted-foreground">$</span>
              <span>npm install css-framework</span>
              <button className="ml-2 text-muted-foreground transition-colors hover:text-foreground">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What's Included?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build beautiful, consistent interfaces
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Palette className="h-6 w-6" />}
              title="Design Tokens"
              description="400+ tokens for colors, typography, spacing, shadows, and more. Organized in primitives, semantics, and component layers."
              href="/tokens"
              stats="400+ tokens"
            />
            <FeatureCard
              icon={<Layers className="h-6 w-6" />}
              title="Components"
              description="22 ready-to-use components including buttons, cards, forms, modals, and navigation elements."
              href="/components"
              stats="22 components"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Utilities"
              description="24 utility class categories for spacing, typography, flexbox, grid, and responsive layouts."
              href="/utilities"
              stats="24 categories"
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Effects"
              description="15 animation effects including fade, slide, bounce, rotate, and more for engaging interactions."
              href="/effects"
              stats="15 effects"
            />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Quick Start</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get up and running in minutes. Include the CSS files and start building.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Include the CSS</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Add the framework CSS files to your project</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Use Custom Elements</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Build with semantic custom HTML elements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Customize Tokens</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Override CSS variables to match your brand</p>
                  </div>
                </div>
              </div>
              <Link
                href="/getting-started"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                View full documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-destructive/50" />
                <div className="h-3 w-3 rounded-full bg-chart-4/50" />
                <div className="h-3 w-3 rounded-full bg-chart-2/50" />
                <span className="ml-2 text-xs text-muted-foreground">index.html</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-muted-foreground">
                  {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="globals.css">
  <link rel="stylesheet" href="components/btn.css">
</head>
<body>
  <btn data-variant="primary">
    Click me
  </btn>
  
  <card data-variant="elevated">
    <card-header>
      <card-title>Title</card-title>
    </card-header>
    <card-body>Content</card-body>
  </card>
</body>
</html>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Token System Overview */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Three-Layer Token System</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Organized for consistency, flexibility, and maintainability
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10">
                <Code2 className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Primitives</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Base values for colors (50-950 scales), typography, spacing, borders, shadows, and more.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Colors</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Typography</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Spacing</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10">
                <Layers className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Semantics</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Meaningful tokens like bg-primary, text-secondary, border-focus, and interactive states.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Background</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Text</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">States</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10">
                <Box className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Components</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Component-specific tokens for buttons, inputs, cards, modals, and navigation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Button</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Input</span>
                <span className="rounded-md bg-muted px-2 py-1 text-xs">Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Component Preview</h2>
            <p className="mt-4 text-lg text-muted-foreground">Beautiful, accessible components out of the box</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentPreview title="Buttons" href="/components#buttons">
              <div className="flex flex-wrap gap-2">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Primary
                </button>
                <button className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Secondary
                </button>
                <button className="rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-white">
                  Destructive
                </button>
              </div>
            </ComponentPreview>
            <ComponentPreview title="Badges" href="/components#badges">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Default</span>
                <span className="rounded-full bg-chart-2/10 px-3 py-1 text-xs font-medium text-chart-2">Success</span>
                <span className="rounded-full bg-chart-4/10 px-3 py-1 text-xs font-medium text-chart-4">Warning</span>
                <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                  Error
                </span>
              </div>
            </ComponentPreview>
            <ComponentPreview title="Cards" href="/components#cards">
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <h4 className="font-semibold">Card Title</h4>
                <p className="mt-1 text-sm text-muted-foreground">Card content goes here</p>
              </div>
            </ComponentPreview>
            <ComponentPreview title="Inputs" href="/components#inputs">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Default input"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </ComponentPreview>
            <ComponentPreview title="Progress" href="/components#progress">
              <div className="space-y-3">
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-1/2 rounded-full bg-chart-2" />
                </div>
              </div>
            </ComponentPreview>
            <ComponentPreview title="Avatars" href="/components#avatars">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  JD
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-2 text-xs font-medium text-white">
                  AB
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-1 text-xs font-medium text-white">
                  CD
                </div>
              </div>
            </ComponentPreview>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              View All Components
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Box className="h-5 w-5 text-primary" />
                <span>CSS Framework</span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                A token-based CSS design system for modern web development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Documentation</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/getting-started" className="text-sm text-muted-foreground hover:text-foreground">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/tokens" className="text-sm text-muted-foreground hover:text-foreground">
                    Design Tokens
                  </Link>
                </li>
                <li>
                  <Link href="/components" className="text-sm text-muted-foreground hover:text-foreground">
                    Components
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/utilities" className="text-sm text-muted-foreground hover:text-foreground">
                    Utilities
                  </Link>
                </li>
                <li>
                  <Link href="/effects" className="text-sm text-muted-foreground hover:text-foreground">
                    Effects
                  </Link>
                </li>
                <li>
                  <Link href="/examples" className="text-sm text-muted-foreground hover:text-foreground">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Community</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 CSS Framework. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  stats,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  stats: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium text-primary">{stats}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </Link>
  )
}

function ComponentPreview({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
    >
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </Link>
  )
}
