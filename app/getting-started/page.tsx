import { DocsLayout } from "@/components/docs-layout"
import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock, InlineCode } from "@/components/code-block"
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react"

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { href: "#installation", label: "Installation" },
      { href: "#setup", label: "Basic Setup" },
      { href: "#structure", label: "File Structure" },
      { href: "#first-component", label: "First Component" },
      { href: "#customization", label: "Customization" },
      { href: "#next-steps", label: "Next Steps" },
    ],
  },
]

export default function GettingStartedPage() {
  return (
    <DocsLayout
      title="Getting Started"
      description="Learn how to install and set up the CSS Framework in your project."
      sidebar={<DocsSidebar sections={sidebarSections} />}
    >
      <div className="space-y-16">
        {/* Installation */}
        <section id="installation">
          <h2 className="text-2xl font-bold">Installation</h2>
          <p className="mt-3 text-muted-foreground">
            Choose your preferred installation method to get started with the CSS Framework.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">NPM</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Install via npm for package management and build tool integration.
              </p>
              <div className="mt-3">
                <CodeBlock code="npm install css-framework" language="bash" filename="Terminal" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">CDN</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Include directly from a CDN for quick prototyping or simple projects.
              </p>
              <div className="mt-3">
                <CodeBlock
                  code={`<link rel="stylesheet" href="https://cdn.example.com/css-framework/tokens.css">
<link rel="stylesheet" href="https://cdn.example.com/css-framework/globals.css">
<link rel="stylesheet" href="https://cdn.example.com/css-framework/components/btn.css">`}
                  language="html"
                  filename="index.html"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Download</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Download the framework files directly and include them in your project.
              </p>
              <div className="mt-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Download CSS Framework v1.0.0
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Setup */}
        <section id="setup">
          <h2 className="text-2xl font-bold">Basic Setup</h2>
          <p className="mt-3 text-muted-foreground">
            Include the CSS files in your HTML document to start using the framework.
          </p>

          <div className="mt-6">
            <CodeBlock
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  
  <!-- Core Framework Files -->
  <link rel="stylesheet" href="css-framework/tokens.css">
  <link rel="stylesheet" href="css-framework/globals.css">
  
  <!-- Components (include only what you need) -->
  <link rel="stylesheet" href="css-framework/components/btn.css">
  <link rel="stylesheet" href="css-framework/components/card.css">
  <link rel="stylesheet" href="css-framework/components/input.css">
  
  <!-- Utilities (optional) -->
  <link rel="stylesheet" href="css-framework/utils/spacing.css">
  <link rel="stylesheet" href="css-framework/utils/flex.css">
  
  <!-- Effects (optional) -->
  <link rel="stylesheet" href="css-framework/effects/fade.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>`}
              language="html"
              filename="index.html"
              showLineNumbers
            />
          </div>

          <div className="mt-6 rounded-lg border border-chart-2/30 bg-chart-2/5 p-4">
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 shrink-0 text-chart-2" />
              <div>
                <h4 className="font-semibold text-chart-2">Pro Tip</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Only include the component and utility files you need. This keeps your CSS bundle small and improves
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section id="structure">
          <h2 className="text-2xl font-bold">File Structure</h2>
          <p className="mt-3 text-muted-foreground">
            The framework is organized into logical directories for easy navigation and modular usage.
          </p>

          <div className="mt-6">
            <CodeBlock
              code={`css-framework/
├── globals.css          # Global reset and base styles
├── tokens.css           # Complete design token system (400+ tokens)
│
├── components/          # 22 component CSS files
│   ├── accordion.css
│   ├── alert.css
│   ├── avatar.css
│   ├── badge.css
│   ├── breadcrumb.css
│   ├── btn.css
│   ├── card.css
│   ├── divider.css
│   ├── dropdown.css
│   ├── form.css
│   ├── input.css
│   ├── modal.css
│   ├── pagination.css
│   ├── progress.css
│   ├── skeleton.css
│   ├── spinner.css
│   ├── steps.css
│   ├── switch.css
│   ├── table.css
│   ├── tabs.css
│   ├── toast.css
│   └── tooltip.css
│
├── utils/               # 24 utility class files
│   ├── spacing.css
│   ├── flex.css
│   ├── grid.css
│   ├── text.css
│   ├── display.css
│   └── ... (19 more)
│
└── effects/             # 15 animation effect files
    ├── fade.css
    ├── slide.css
    ├── bounce.css
    ├── scale.css
    └── ... (11 more)`}
              language="plaintext"
              filename="Directory Structure"
            />
          </div>
        </section>

        {/* First Component */}
        <section id="first-component">
          <h2 className="text-2xl font-bold">Your First Component</h2>
          <p className="mt-3 text-muted-foreground">
            Let's create a simple card with a button to understand how the framework works.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Include the CSS</h3>
              <div className="mt-3">
                <CodeBlock
                  code={`<link rel="stylesheet" href="css-framework/tokens.css">
<link rel="stylesheet" href="css-framework/globals.css">
<link rel="stylesheet" href="css-framework/components/btn.css">
<link rel="stylesheet" href="css-framework/components/card.css">`}
                  language="html"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Write the HTML</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Components use custom HTML elements with <InlineCode>data-*</InlineCode> attributes for variants.
              </p>
              <div className="mt-3">
                <CodeBlock
                  code={`<card data-variant="elevated">
  <card-header>
    <card-title>Welcome to CSS Framework</card-title>
    <card-description>A token-based design system</card-description>
  </card-header>
  <card-body>
    <p>Build beautiful interfaces with our comprehensive CSS framework.</p>
  </card-body>
  <card-footer>
    <btn data-variant="primary">Get Started</btn>
    <btn data-variant="secondary">Learn More</btn>
  </card-footer>
</card>`}
                  language="html"
                  showLineNumbers
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Preview</h3>
              <div className="mt-3 rounded-xl border border-border bg-card p-6">
                <div className="rounded-lg border border-border bg-card p-6 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Welcome to CSS Framework</h4>
                    <p className="text-sm text-muted-foreground">A token-based design system</p>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    Build beautiful interfaces with our comprehensive CSS framework.
                  </p>
                  <div className="flex gap-2">
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                      Get Started
                    </button>
                    <button className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Patterns */}
        <section id="patterns" className="rounded-xl border border-border bg-muted/30 p-6">
          <h3 className="text-lg font-semibold">Understanding Component Patterns</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-2" />
              <div>
                <h4 className="font-medium">Custom Elements</h4>
                <p className="text-sm text-muted-foreground">
                  Components use custom HTML elements like <InlineCode>{"<btn>"}</InlineCode>,{" "}
                  <InlineCode>{"<card>"}</InlineCode>, and <InlineCode>{"<input-field>"}</InlineCode>.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-2" />
              <div>
                <h4 className="font-medium">Data Attributes for Variants</h4>
                <p className="text-sm text-muted-foreground">
                  Use <InlineCode>data-variant</InlineCode> for visual styles and <InlineCode>data-size</InlineCode> for
                  sizing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-2" />
              <div>
                <h4 className="font-medium">Data Attributes for States</h4>
                <p className="text-sm text-muted-foreground">
                  Use <InlineCode>data-state</InlineCode> for component states like success, error, or loading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section id="customization">
          <h2 className="text-2xl font-bold">Customization</h2>
          <p className="mt-3 text-muted-foreground">
            Override design tokens to match your brand without modifying the framework source files.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Override Tokens</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create a custom CSS file and override the CSS variables to customize the framework.
              </p>
              <div className="mt-3">
                <CodeBlock
                  code={`:root {
  /* Override primary color palette */
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
  
  /* Override semantic tokens */
  --bg-primary: var(--color-primary-500);
  --interactive-primary: var(--color-primary-600);
  --interactive-primary-hover: var(--color-primary-700);
  
  /* Override component tokens */
  --btn-border-radius: 9999px; /* Fully rounded buttons */
  --card-border-radius: 1rem;
  
  /* Override typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
}`}
                  language="css"
                  filename="custom.css"
                  showLineNumbers
                />
              </div>
            </div>

            <div className="rounded-lg border border-chart-4/30 bg-chart-4/5 p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-chart-4" />
                <div>
                  <h4 className="font-semibold text-chart-4">Important</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Always include your custom CSS file after the framework CSS to ensure your overrides take effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <p className="mt-3 text-muted-foreground">
            Now that you have the framework set up, explore the documentation to learn more.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="/tokens"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-semibold">Design Tokens</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore the 400+ design tokens for colors, typography, spacing, and more.
              </p>
            </a>
            <a
              href="/components"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-semibold">Components</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover 22 ready-to-use components with variants and examples.
              </p>
            </a>
            <a
              href="/utilities"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-semibold">Utilities</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn about utility classes for spacing, layout, and typography.
              </p>
            </a>
            <a
              href="/examples"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-semibold">Examples</h3>
              <p className="mt-2 text-sm text-muted-foreground">See real-world examples and complete page layouts.</p>
            </a>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
