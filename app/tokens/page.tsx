import { DocsLayout } from "@/components/docs-layout"
import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock, InlineCode } from "@/components/code-block"

const sidebarSections = [
  {
    title: "Overview",
    items: [
      { href: "#introduction", label: "Introduction" },
      { href: "#architecture", label: "Token Architecture" },
    ],
  },
  {
    title: "Primitives",
    items: [
      { href: "#colors", label: "Colors" },
      { href: "#typography", label: "Typography" },
      { href: "#spacing", label: "Spacing" },
      { href: "#borders", label: "Borders" },
      { href: "#shadows", label: "Shadows" },
      { href: "#z-index", label: "Z-Index" },
      { href: "#transitions", label: "Transitions" },
      { href: "#opacity", label: "Opacity" },
    ],
  },
  {
    title: "Semantics",
    items: [
      { href: "#background", label: "Background" },
      { href: "#surface", label: "Surface" },
      { href: "#text-colors", label: "Text" },
      { href: "#border-colors", label: "Border" },
      { href: "#interactive", label: "Interactive" },
      { href: "#states", label: "States" },
    ],
  },
  {
    title: "Component Tokens",
    items: [{ href: "#component-tokens", label: "Component Tokens" }],
  },
]

export default function TokensPage() {
  return (
    <DocsLayout
      title="Design Tokens"
      description="A comprehensive token system with 400+ tokens organized in primitives, semantics, and component layers."
      sidebar={<DocsSidebar sections={sidebarSections} />}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <section id="introduction">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="mt-3 text-muted-foreground">
            Design tokens are the foundation of our CSS framework. They provide a consistent set of values for colors,
            typography, spacing, and other design properties that can be used throughout your project.
          </p>
          <div className="mt-6">
            <CodeBlock
              code={`/* Using tokens in your CSS */
.my-element {
  color: var(--text-primary);
  background: var(--bg-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}`}
              language="css"
              filename="styles.css"
            />
          </div>
        </section>

        {/* Token Architecture */}
        <section id="architecture">
          <h2 className="text-2xl font-bold">Token Architecture</h2>
          <p className="mt-3 text-muted-foreground">
            The token system is organized in three layers, each building on the previous.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-chart-1">1. Primitives</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Raw values like color scales (50-950), font sizes, and spacing units.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-chart-2">2. Semantics</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Meaningful tokens that reference primitives, like <InlineCode>bg-primary</InlineCode>.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-chart-3">3. Components</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Component-specific tokens like <InlineCode>btn-padding</InlineCode>.
              </p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section id="colors">
          <h2 className="text-2xl font-bold">Colors</h2>
          <p className="mt-3 text-muted-foreground">
            The color system includes primary, secondary, success, warning, error, and gray palettes with 50-950 scale.
          </p>

          <div className="mt-6 space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-semibold">Primary</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch key={shade} color={`--color-primary-${shade}`} label={shade.toString()} />
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3 className="text-lg font-semibold">Secondary</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch
                    key={shade}
                    color={`--color-secondary-${shade}`}
                    label={shade.toString()}
                    variant="secondary"
                  />
                ))}
              </div>
            </div>

            {/* Success Colors */}
            <div>
              <h3 className="text-lg font-semibold">Success</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch
                    key={shade}
                    color={`--color-success-${shade}`}
                    label={shade.toString()}
                    variant="success"
                  />
                ))}
              </div>
            </div>

            {/* Warning Colors */}
            <div>
              <h3 className="text-lg font-semibold">Warning</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch
                    key={shade}
                    color={`--color-warning-${shade}`}
                    label={shade.toString()}
                    variant="warning"
                  />
                ))}
              </div>
            </div>

            {/* Error Colors */}
            <div>
              <h3 className="text-lg font-semibold">Error</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch key={shade} color={`--color-error-${shade}`} label={shade.toString()} variant="error" />
                ))}
              </div>
            </div>

            {/* Gray Colors */}
            <div>
              <h3 className="text-lg font-semibold">Gray</h3>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <ColorSwatch key={shade} color={`--color-gray-${shade}`} label={shade.toString()} variant="gray" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CodeBlock
              code={`/* Color token examples */
:root {
  /* Primary palette */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;
  
  /* Success palette */
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  
  /* Warning palette */
  --color-warning-500: #f59e0b;
  
  /* Error palette */
  --color-error-500: #ef4444;
}`}
              language="css"
              filename="tokens.css"
            />
          </div>
        </section>

        {/* Typography */}
        <section id="typography">
          <h2 className="text-2xl font-bold">Typography</h2>
          <p className="mt-3 text-muted-foreground">
            Typography tokens cover font families, sizes, weights, line heights, and letter spacing.
          </p>

          <div className="mt-6 space-y-8">
            {/* Font Families */}
            <div>
              <h3 className="text-lg font-semibold">Font Families</h3>
              <div className="mt-3 overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium">Token</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Value</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        <InlineCode>--font-sans</InlineCode>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">system-ui, sans-serif</td>
                      <td className="px-4 py-3 font-sans">The quick brown fox</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3">
                        <InlineCode>--font-mono</InlineCode>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">ui-monospace, monospace</td>
                      <td className="px-4 py-3 font-mono">The quick brown fox</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Font Sizes */}
            <div>
              <h3 className="text-lg font-semibold">Font Sizes</h3>
              <div className="mt-3 overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium">Token</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Size</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { token: "--font-size-xs", size: "0.75rem", preview: "text-xs" },
                      { token: "--font-size-sm", size: "0.875rem", preview: "text-sm" },
                      { token: "--font-size-base", size: "1rem", preview: "text-base" },
                      { token: "--font-size-lg", size: "1.125rem", preview: "text-lg" },
                      { token: "--font-size-xl", size: "1.25rem", preview: "text-xl" },
                      { token: "--font-size-2xl", size: "1.5rem", preview: "text-2xl" },
                      { token: "--font-size-3xl", size: "1.875rem", preview: "text-3xl" },
                      { token: "--font-size-4xl", size: "2.25rem", preview: "text-4xl" },
                    ].map((item) => (
                      <tr key={item.token} className="border-t border-border">
                        <td className="px-4 py-3">
                          <InlineCode>{item.token}</InlineCode>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{item.size}</td>
                        <td className="px-4 py-3" style={{ fontSize: item.size }}>
                          Sample Text
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Font Weights */}
            <div>
              <h3 className="text-lg font-semibold">Font Weights</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {[
                  { weight: 100, name: "Thin" },
                  { weight: 200, name: "Extra Light" },
                  { weight: 300, name: "Light" },
                  { weight: 400, name: "Regular" },
                  { weight: 500, name: "Medium" },
                  { weight: 600, name: "Semi Bold" },
                  { weight: 700, name: "Bold" },
                  { weight: 800, name: "Extra Bold" },
                  { weight: 900, name: "Black" },
                ].map((item) => (
                  <div key={item.weight} className="rounded-lg border border-border bg-card p-3 text-center">
                    <span style={{ fontWeight: item.weight }} className="text-lg">
                      Aa
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground">{item.weight}</p>
                    <p className="text-xs font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing">
          <h2 className="text-2xl font-bold">Spacing</h2>
          <p className="mt-3 text-muted-foreground">
            A comprehensive spacing scale from 0 to 96 for consistent layouts.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] overflow-hidden rounded-lg border border-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium">Token</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Value</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Pixels</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Visual</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { token: "0", rem: "0", px: "0px" },
                  { token: "0.5", rem: "0.125rem", px: "2px" },
                  { token: "1", rem: "0.25rem", px: "4px" },
                  { token: "2", rem: "0.5rem", px: "8px" },
                  { token: "3", rem: "0.75rem", px: "12px" },
                  { token: "4", rem: "1rem", px: "16px" },
                  { token: "5", rem: "1.25rem", px: "20px" },
                  { token: "6", rem: "1.5rem", px: "24px" },
                  { token: "8", rem: "2rem", px: "32px" },
                  { token: "10", rem: "2.5rem", px: "40px" },
                  { token: "12", rem: "3rem", px: "48px" },
                  { token: "16", rem: "4rem", px: "64px" },
                  { token: "20", rem: "5rem", px: "80px" },
                  { token: "24", rem: "6rem", px: "96px" },
                ].map((item) => (
                  <tr key={item.token} className="border-t border-border">
                    <td className="px-4 py-2">
                      <InlineCode>--spacing-{item.token}</InlineCode>
                    </td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">{item.rem}</td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">{item.px}</td>
                    <td className="px-4 py-2">
                      <div className="h-4 rounded bg-primary" style={{ width: item.px === "0px" ? "2px" : item.px }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Borders */}
        <section id="borders">
          <h2 className="text-2xl font-bold">Borders</h2>
          <p className="mt-3 text-muted-foreground">Border radius and width tokens for consistent component styling.</p>

          <div className="mt-6 space-y-8">
            {/* Border Radius */}
            <div>
              <h3 className="text-lg font-semibold">Border Radius</h3>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {[
                  { token: "none", value: "0", radius: "0" },
                  { token: "sm", value: "0.125rem", radius: "2px" },
                  { token: "base", value: "0.25rem", radius: "4px" },
                  { token: "md", value: "0.375rem", radius: "6px" },
                  { token: "lg", value: "0.5rem", radius: "8px" },
                  { token: "xl", value: "0.75rem", radius: "12px" },
                  { token: "2xl", value: "1rem", radius: "16px" },
                  { token: "3xl", value: "1.5rem", radius: "24px" },
                  { token: "full", value: "9999px", radius: "9999px" },
                ].map((item) => (
                  <div key={item.token} className="text-center">
                    <div
                      className="mx-auto h-16 w-16 border-2 border-primary bg-primary/10"
                      style={{ borderRadius: item.radius }}
                    />
                    <p className="mt-2 text-sm font-medium">{item.token}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Border Width */}
            <div>
              <h3 className="text-lg font-semibold">Border Width</h3>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-5">
                {[
                  { token: "0", value: "0px" },
                  { token: "1", value: "1px" },
                  { token: "2", value: "2px" },
                  { token: "4", value: "4px" },
                  { token: "8", value: "8px" },
                ].map((item) => (
                  <div key={item.token} className="text-center">
                    <div
                      className="mx-auto h-16 w-16 rounded-lg bg-muted"
                      style={{ border: `${item.value} solid var(--primary)` }}
                    />
                    <p className="mt-2 text-sm font-medium">border-{item.token}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section id="shadows">
          <h2 className="text-2xl font-bold">Shadows</h2>
          <p className="mt-3 text-muted-foreground">Box shadow tokens for depth and elevation.</p>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              { token: "sm", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
              { token: "base", shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
              { token: "md", shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
              { token: "lg", shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" },
              { token: "xl", shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" },
              { token: "2xl", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
              { token: "inner", shadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
            ].map((item) => (
              <div key={item.token} className="text-center">
                <div className="mx-auto h-20 w-20 rounded-lg bg-card" style={{ boxShadow: item.shadow }} />
                <p className="mt-3 text-sm font-medium">shadow-{item.token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Z-Index */}
        <section id="z-index">
          <h2 className="text-2xl font-bold">Z-Index</h2>
          <p className="mt-3 text-muted-foreground">Z-index tokens for managing stacking order.</p>

          <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium">Token</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Value</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { token: "0", value: "0", useCase: "Base level elements" },
                  { token: "10", value: "10", useCase: "Dropdowns" },
                  { token: "20", value: "20", useCase: "Sticky elements" },
                  { token: "30", value: "30", useCase: "Fixed navigation" },
                  { token: "40", value: "40", useCase: "Overlays" },
                  { token: "50", value: "50", useCase: "Modals, dialogs" },
                  { token: "auto", value: "auto", useCase: "Natural stacking" },
                ].map((item) => (
                  <tr key={item.token} className="border-t border-border">
                    <td className="px-4 py-3">
                      <InlineCode>--z-{item.token}</InlineCode>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{item.value}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{item.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transitions */}
        <section id="transitions">
          <h2 className="text-2xl font-bold">Transitions</h2>
          <p className="mt-3 text-muted-foreground">Transition duration tokens for consistent animations.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { token: "fast", duration: "150ms", desc: "Quick micro-interactions" },
              { token: "base", duration: "200ms", desc: "Standard transitions" },
              { token: "slow", duration: "300ms", desc: "Emphasis animations" },
            ].map((item) => (
              <div key={item.token} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.token}</span>
                  <span className="text-sm text-muted-foreground">{item.duration}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                <button
                  className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  style={{ transition: `all ${item.duration} ease` }}
                >
                  Hover me
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Opacity */}
        <section id="opacity">
          <h2 className="text-2xl font-bold">Opacity</h2>
          <p className="mt-3 text-muted-foreground">Opacity tokens for transparency effects.</p>

          <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
            {[0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].map((opacity) => (
              <div key={opacity} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-md bg-primary" style={{ opacity: opacity / 100 }} />
                <p className="mt-2 text-xs font-medium">{opacity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Semantic Background */}
        <section id="background">
          <h2 className="text-2xl font-bold">Background Colors</h2>
          <p className="mt-3 text-muted-foreground">Semantic background color tokens for consistent theming.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { token: "bg-primary", desc: "Primary background" },
              { token: "bg-secondary", desc: "Secondary background" },
              { token: "bg-tertiary", desc: "Tertiary background" },
              { token: "bg-inverse", desc: "Inverse background" },
              { token: "bg-overlay", desc: "Overlay/modal backdrop" },
            ].map((item) => (
              <div key={item.token} className="rounded-lg border border-border p-4">
                <div className="h-16 rounded-md bg-primary/20" />
                <p className="mt-3 font-medium">{item.token}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Surface Colors */}
        <section id="surface">
          <h2 className="text-2xl font-bold">Surface Colors</h2>
          <p className="mt-3 text-muted-foreground">Surface tokens for cards, panels, and container backgrounds.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              { token: "surface-primary", desc: "Primary surface" },
              { token: "surface-secondary", desc: "Secondary surface" },
              { token: "surface-tertiary", desc: "Tertiary surface" },
              { token: "surface-elevated", desc: "Elevated surface" },
            ].map((item) => (
              <div key={item.token} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="font-medium">{item.token}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Text Colors */}
        <section id="text-colors">
          <h2 className="text-2xl font-bold">Text Colors</h2>
          <p className="mt-3 text-muted-foreground">Semantic text color tokens for typography.</p>

          <div className="mt-6 space-y-3">
            {[
              { token: "text-primary", class: "text-foreground", sample: "Primary text for main content" },
              {
                token: "text-secondary",
                class: "text-muted-foreground",
                sample: "Secondary text for supporting content",
              },
              {
                token: "text-tertiary",
                class: "text-muted-foreground/70",
                sample: "Tertiary text for less important content",
              },
              { token: "text-muted", class: "text-muted-foreground/50", sample: "Muted text for placeholders" },
              { token: "text-disabled", class: "text-muted-foreground/30", sample: "Disabled text" },
            ].map((item) => (
              <div key={item.token} className="flex items-center gap-4 rounded-lg border border-border p-4">
                <InlineCode>{item.token}</InlineCode>
                <span className={item.class}>{item.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Border Colors */}
        <section id="border-colors">
          <h2 className="text-2xl font-bold">Border Colors</h2>
          <p className="mt-3 text-muted-foreground">Semantic border color tokens for outlines and dividers.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { token: "border-primary", color: "border-border" },
              { token: "border-secondary", color: "border-border/70" },
              { token: "border-focus", color: "border-primary" },
              { token: "border-error", color: "border-destructive" },
              { token: "border-success", color: "border-chart-2" },
              { token: "border-warning", color: "border-chart-4" },
            ].map((item) => (
              <div key={item.token} className={`rounded-lg border-2 ${item.color} p-4 text-center`}>
                <p className="font-medium">{item.token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Colors */}
        <section id="interactive">
          <h2 className="text-2xl font-bold">Interactive Colors</h2>
          <p className="mt-3 text-muted-foreground">Tokens for interactive elements with hover and active states.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-semibold">Interactive Primary</h4>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Default
                </button>
                <button className="rounded-md bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground">
                  Hover
                </button>
                <button className="rounded-md bg-primary/80 px-4 py-2 text-sm font-medium text-primary-foreground">
                  Active
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="font-semibold">Interactive Secondary</h4>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Default
                </button>
                <button className="rounded-md border border-border bg-muted px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Hover
                </button>
                <button className="rounded-md border border-border bg-muted/80 px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Active
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* State Colors */}
        <section id="states">
          <h2 className="text-2xl font-bold">State Colors</h2>
          <p className="mt-3 text-muted-foreground">Semantic color tokens for different UI states.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-chart-2/30 bg-chart-2/10 p-4">
              <h4 className="font-semibold text-chart-2">Success</h4>
              <p className="mt-1 text-sm text-muted-foreground">Positive actions and confirmations</p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4">
              <h4 className="font-semibold text-destructive">Error</h4>
              <p className="mt-1 text-sm text-muted-foreground">Errors and destructive actions</p>
            </div>
            <div className="rounded-lg border border-chart-4/30 bg-chart-4/10 p-4">
              <h4 className="font-semibold text-chart-4">Warning</h4>
              <p className="mt-1 text-sm text-muted-foreground">Warnings and cautions</p>
            </div>
            <div className="rounded-lg border border-chart-1/30 bg-chart-1/10 p-4">
              <h4 className="font-semibold text-chart-1">Info</h4>
              <p className="mt-1 text-sm text-muted-foreground">Informational messages</p>
            </div>
          </div>
        </section>

        {/* Component Tokens */}
        <section id="component-tokens">
          <h2 className="text-2xl font-bold">Component Tokens</h2>
          <p className="mt-3 text-muted-foreground">Component-specific tokens for consistent component styling.</p>

          <div className="mt-6">
            <CodeBlock
              code={`/* Button tokens */
--btn-padding-x: var(--spacing-4);
--btn-padding-y: var(--spacing-2);
--btn-font-size: var(--font-size-sm);
--btn-border-radius: var(--radius-md);
--btn-transition: var(--transition-base);

/* Input tokens */
--input-padding-x: var(--spacing-3);
--input-padding-y: var(--spacing-2);
--input-border-radius: var(--radius-md);
--input-height: 2.5rem;

/* Card tokens */
--card-padding: var(--spacing-6);
--card-border-radius: var(--radius-lg);
--card-shadow: var(--shadow-sm);

/* Modal tokens */
--modal-padding: var(--spacing-6);
--modal-border-radius: var(--radius-xl);
--modal-shadow: var(--shadow-xl);
--modal-backdrop: rgba(0, 0, 0, 0.5);
--modal-z-index: var(--z-50);

/* Navigation tokens */
--nav-height: 4rem;
--nav-padding: var(--spacing-4);
--nav-shadow: var(--shadow-sm);
--nav-z-index: var(--z-30);

/* Avatar sizes */
--avatar-xs: 1.5rem;
--avatar-sm: 2rem;
--avatar-base: 2.5rem;
--avatar-lg: 3rem;
--avatar-xl: 4rem;

/* Badge tokens */
--badge-padding-x: var(--spacing-2);
--badge-padding-y: var(--spacing-0-5);
--badge-border-radius: var(--radius-full);
--badge-font-size: var(--font-size-xs);
--badge-font-weight: 500;`}
              language="css"
              filename="tokens.css"
              showLineNumbers
            />
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

function ColorSwatch({ color, label, variant = "primary" }: { color: string; label: string; variant?: string }) {
  const bgColors: Record<string, string[]> = {
    primary: [
      "bg-chart-1/10",
      "bg-chart-1/20",
      "bg-chart-1/30",
      "bg-chart-1/40",
      "bg-chart-1/50",
      "bg-chart-1/60",
      "bg-chart-1/70",
      "bg-chart-1/80",
      "bg-chart-1/90",
      "bg-chart-1",
      "bg-chart-1",
    ],
    secondary: [
      "bg-muted/20",
      "bg-muted/30",
      "bg-muted/40",
      "bg-muted/50",
      "bg-muted/60",
      "bg-muted/70",
      "bg-muted/80",
      "bg-muted/90",
      "bg-muted",
      "bg-foreground/80",
      "bg-foreground",
    ],
    success: [
      "bg-chart-2/10",
      "bg-chart-2/20",
      "bg-chart-2/30",
      "bg-chart-2/40",
      "bg-chart-2/50",
      "bg-chart-2/60",
      "bg-chart-2/70",
      "bg-chart-2/80",
      "bg-chart-2/90",
      "bg-chart-2",
      "bg-chart-2",
    ],
    warning: [
      "bg-chart-4/10",
      "bg-chart-4/20",
      "bg-chart-4/30",
      "bg-chart-4/40",
      "bg-chart-4/50",
      "bg-chart-4/60",
      "bg-chart-4/70",
      "bg-chart-4/80",
      "bg-chart-4/90",
      "bg-chart-4",
      "bg-chart-4",
    ],
    error: [
      "bg-destructive/10",
      "bg-destructive/20",
      "bg-destructive/30",
      "bg-destructive/40",
      "bg-destructive/50",
      "bg-destructive/60",
      "bg-destructive/70",
      "bg-destructive/80",
      "bg-destructive/90",
      "bg-destructive",
      "bg-destructive",
    ],
    gray: [
      "bg-muted/10",
      "bg-muted/20",
      "bg-muted/30",
      "bg-muted/40",
      "bg-muted/50",
      "bg-muted/60",
      "bg-muted/70",
      "bg-muted/80",
      "bg-muted/90",
      "bg-foreground/70",
      "bg-foreground/90",
    ],
  }

  const shadeIndex = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"].indexOf(label)
  const bgClass = bgColors[variant]?.[shadeIndex] || "bg-primary"

  return (
    <div className="text-center">
      <div className={`h-10 w-full rounded-md ${bgClass}`} />
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
