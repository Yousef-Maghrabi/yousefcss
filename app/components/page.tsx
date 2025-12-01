import type React from "react"
import { DocsLayout } from "@/components/docs-layout"
import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock } from "@/components/code-block"
import { ChevronDown, X, Check, AlertCircle, Info, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react"

const sidebarSections = [
  {
    title: "Buttons & Actions",
    items: [
      { href: "#button", label: "Button" },
      { href: "#dropdown", label: "Dropdown" },
    ],
  },
  {
    title: "Forms & Inputs",
    items: [
      { href: "#input", label: "Input" },
      { href: "#form", label: "Form" },
      { href: "#switch", label: "Switch" },
    ],
  },
  {
    title: "Layout & Containers",
    items: [
      { href: "#card", label: "Card" },
      { href: "#accordion", label: "Accordion" },
      { href: "#modal", label: "Modal" },
      { href: "#divider", label: "Divider" },
    ],
  },
  {
    title: "Feedback & Status",
    items: [
      { href: "#alert", label: "Alert" },
      { href: "#badge", label: "Badge" },
      { href: "#toast", label: "Toast" },
      { href: "#progress", label: "Progress" },
      { href: "#spinner", label: "Spinner" },
      { href: "#skeleton", label: "Skeleton" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { href: "#tabs", label: "Tabs" },
      { href: "#breadcrumb", label: "Breadcrumb" },
      { href: "#pagination", label: "Pagination" },
      { href: "#steps", label: "Steps" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { href: "#table", label: "Table" },
      { href: "#avatar", label: "Avatar" },
      { href: "#tooltip", label: "Tooltip" },
    ],
  },
]

export default function ComponentsPage() {
  return (
    <DocsLayout
      title="Components"
      description="22 ready-to-use components with variants, sizes, and states for building beautiful interfaces."
      sidebar={<DocsSidebar sections={sidebarSections} />}
    >
      <div className="space-y-20">
        {/* Button */}
        <ComponentSection
          id="button"
          title="Button"
          description="Interactive button component with multiple variants, sizes, and states."
        >
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Primary
                </button>
                <button className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted">
                  Secondary
                </button>
                <button className="rounded-lg bg-chart-2 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-chart-2/90">
                  Success
                </button>
                <button className="rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-destructive/90">
                  Error
                </button>
                <button className="rounded-lg bg-chart-4 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-chart-4/90">
                  Warning
                </button>
                <button className="rounded-lg border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Outline
                </button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                  Small
                </button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Base
                </button>
                <button className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground">
                  Large
                </button>
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">States</h4>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Normal
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-80">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading
                </button>
                <button
                  className="cursor-not-allowed rounded-lg bg-primary/50 px-4 py-2 text-sm font-medium text-primary-foreground/50"
                  disabled
                >
                  Disabled
                </button>
              </div>
            </div>

            <CodeBlock
              code={`<!-- Button variants -->
<btn data-variant="primary">Primary</btn>
<btn data-variant="secondary">Secondary</btn>
<btn data-variant="success">Success</btn>
<btn data-variant="error">Error</btn>
<btn data-variant="warning">Warning</btn>
<btn data-variant="outline">Outline</btn>

<!-- Button sizes -->
<btn data-size="sm">Small</btn>
<btn data-size="base">Base</btn>
<btn data-size="lg">Large</btn>

<!-- Button states -->
<btn data-state="loading">Loading</btn>
<btn disabled>Disabled</btn>`}
              language="html"
              filename="button.html"
            />
          </div>
        </ComponentSection>

        {/* Dropdown */}
        <ComponentSection
          id="dropdown"
          title="Dropdown"
          description="Dropdown menu component for navigation and actions."
        >
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="relative inline-block">
                <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted">
                  Options
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-border bg-card p-1 shadow-lg">
                  <button className="w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted">
                    Edit
                  </button>
                  <button className="w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted">
                    Duplicate
                  </button>
                  <div className="my-1 h-px bg-border" />
                  <button className="w-full rounded-md px-3 py-2 text-left text-sm text-destructive transition-colors hover:bg-destructive/10">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <CodeBlock
              code={`<dropdown>
  <dropdown-trigger>
    <btn data-variant="secondary">Options</btn>
  </dropdown-trigger>
  <dropdown-content>
    <dropdown-item>Edit</dropdown-item>
    <dropdown-item>Duplicate</dropdown-item>
    <dropdown-divider></dropdown-divider>
    <dropdown-item data-variant="destructive">Delete</dropdown-item>
  </dropdown-content>
</dropdown>`}
              language="html"
              filename="dropdown.html"
            />
          </div>
        </ComponentSection>

        {/* Input */}
        <ComponentSection
          id="input"
          title="Input"
          description="Form input component with variants and validation states."
        >
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Variants</h4>
              <div className="grid max-w-md gap-4">
                <input
                  type="text"
                  placeholder="Default input"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  placeholder="Filled input"
                  className="w-full rounded-lg border border-transparent bg-muted px-4 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  placeholder="Minimal input"
                  className="w-full border-b border-border bg-transparent px-1 py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">States</h4>
              <div className="grid max-w-md gap-4">
                <div>
                  <input
                    type="text"
                    value="Valid input"
                    readOnly
                    className="w-full rounded-lg border border-chart-2 bg-chart-2/5 px-4 py-2 text-sm outline-none"
                  />
                  <p className="mt-1 text-xs text-chart-2">Success message</p>
                </div>
                <div>
                  <input
                    type="text"
                    value="Invalid input"
                    readOnly
                    className="w-full rounded-lg border border-destructive bg-destructive/5 px-4 py-2 text-sm outline-none"
                  />
                  <p className="mt-1 text-xs text-destructive">Error message</p>
                </div>
                <div>
                  <input
                    type="text"
                    value="Warning input"
                    readOnly
                    className="w-full rounded-lg border border-chart-4 bg-chart-4/5 px-4 py-2 text-sm outline-none"
                  />
                  <p className="mt-1 text-xs text-chart-4">Warning message</p>
                </div>
                <input
                  type="text"
                  placeholder="Disabled input"
                  disabled
                  className="w-full cursor-not-allowed rounded-lg border border-border bg-muted px-4 py-2 text-sm text-muted-foreground opacity-50"
                />
              </div>
            </div>

            <CodeBlock
              code={`<!-- Input variants -->
<input-field placeholder="Default input"></input-field>
<input-field data-variant="filled" placeholder="Filled input"></input-field>
<input-field data-variant="minimal" placeholder="Minimal input"></input-field>

<!-- Input states -->
<input-field data-state="success" value="Valid input"></input-field>
<input-field data-state="error" value="Invalid input"></input-field>
<input-field data-state="warning" value="Warning input"></input-field>
<input-field disabled placeholder="Disabled"></input-field>`}
              language="html"
              filename="input.html"
            />
          </div>
        </ComponentSection>

        {/* Form */}
        <ComponentSection
          id="form"
          title="Form"
          description="Form container for organizing form fields with labels and validation."
        >
          <div className="space-y-8">
            <div className="max-w-md rounded-xl border border-border bg-card p-6">
              <form className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Sign In
                </button>
              </form>
            </div>

            <CodeBlock
              code={`<form>
  <form-field>
    <label>Email</label>
    <input-field type="email" placeholder="Enter your email"></input-field>
  </form-field>
  <form-field>
    <label>Password</label>
    <input-field type="password" placeholder="Enter your password"></input-field>
  </form-field>
  <btn data-variant="primary" type="submit">Sign In</btn>
</form>`}
              language="html"
              filename="form.html"
            />
          </div>
        </ComponentSection>

        {/* Switch */}
        <ComponentSection id="switch" title="Switch" description="Toggle switch component for binary on/off states.">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-6">
              <label className="flex cursor-pointer items-center gap-3">
                <div className="relative h-6 w-11 rounded-full bg-muted transition-colors">
                  <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform" />
                </div>
                <span className="text-sm">Off</span>
              </label>
              <label className="flex cursor-pointer items-center gap-3">
                <div className="relative h-6 w-11 rounded-full bg-primary transition-colors">
                  <div className="absolute left-1 top-1 h-4 w-4 translate-x-5 rounded-full bg-white shadow-sm transition-transform" />
                </div>
                <span className="text-sm">On</span>
              </label>
              <label className="flex cursor-not-allowed items-center gap-3 opacity-50">
                <div className="relative h-6 w-11 rounded-full bg-muted transition-colors">
                  <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform" />
                </div>
                <span className="text-sm">Disabled</span>
              </label>
            </div>

            <CodeBlock
              code={`<switch></switch>
<switch checked></switch>
<switch disabled></switch>`}
              language="html"
              filename="switch.html"
            />
          </div>
        </ComponentSection>

        {/* Card */}
        <ComponentSection
          id="card"
          title="Card"
          description="Container component for content sections with header, body, and footer."
        >
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Default */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="font-semibold">Default Card</h4>
                <p className="mt-2 text-sm text-muted-foreground">Basic card with border styling.</p>
              </div>
              {/* Elevated */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <h4 className="font-semibold">Elevated Card</h4>
                <p className="mt-2 text-sm text-muted-foreground">Card with shadow for elevation.</p>
              </div>
              {/* Outlined */}
              <div className="rounded-xl border-2 border-primary/20 bg-card p-6">
                <h4 className="font-semibold">Outlined Card</h4>
                <p className="mt-2 text-sm text-muted-foreground">Card with emphasized border.</p>
              </div>
            </div>

            {/* Full Card Example */}
            <div className="max-w-sm rounded-xl border border-border bg-card shadow-sm">
              <div className="border-b border-border p-4">
                <h4 className="font-semibold">Card Header</h4>
                <p className="text-sm text-muted-foreground">Card description</p>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  This is the card body content. You can add any content here.
                </p>
              </div>
              <div className="flex gap-2 border-t border-border p-4">
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  Confirm
                </button>
                <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium">Cancel</button>
              </div>
            </div>

            <CodeBlock
              code={`<!-- Card variants -->
<card data-variant="default">...</card>
<card data-variant="elevated">...</card>
<card data-variant="outlined">...</card>

<!-- Full card structure -->
<card data-variant="elevated">
  <card-header>
    <card-title>Card Title</card-title>
    <card-description>Card description</card-description>
  </card-header>
  <card-body>
    Card content goes here.
  </card-body>
  <card-footer>
    <btn data-variant="primary">Confirm</btn>
    <btn data-variant="secondary">Cancel</btn>
  </card-footer>
</card>`}
              language="html"
              filename="card.html"
            />
          </div>
        </ComponentSection>

        {/* Accordion */}
        <ComponentSection
          id="accordion"
          title="Accordion"
          description="Collapsible content sections for organizing information."
        >
          <div className="space-y-8">
            <div className="max-w-lg divide-y divide-border rounded-xl border border-border">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                  What is CSS Framework?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  CSS Framework is a token-based design system featuring 400+ design tokens, 22 components, and more.
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                  How do I get started?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  Include the CSS files in your project and start using the custom HTML elements.
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium">
                  Can I customize the styles?
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  Yes! Override the CSS variables in your custom stylesheet to match your brand.
                </div>
              </details>
            </div>

            <CodeBlock
              code={`<accordion>
  <accordion-item>
    <accordion-trigger>What is CSS Framework?</accordion-trigger>
    <accordion-content>
      CSS Framework is a token-based design system...
    </accordion-content>
  </accordion-item>
  <accordion-item>
    <accordion-trigger>How do I get started?</accordion-trigger>
    <accordion-content>
      Include the CSS files in your project...
    </accordion-content>
  </accordion-item>
</accordion>`}
              language="html"
              filename="accordion.html"
            />
          </div>
        </ComponentSection>

        {/* Modal */}
        <ComponentSection id="modal" title="Modal" description="Dialog overlay component for focused interactions.">
          <div className="space-y-8">
            <div className="relative rounded-xl border border-border bg-muted/30 p-8">
              <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Modal Title</h4>
                  <button className="rounded-md p-1 text-muted-foreground hover:bg-muted">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">This is the modal content. Add your content here.</p>
                <div className="mt-6 flex justify-end gap-2">
                  <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium">Cancel</button>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    Confirm
                  </button>
                </div>
              </div>
            </div>

            <CodeBlock
              code={`<modal>
  <modal-backdrop></modal-backdrop>
  <modal-content>
    <modal-header>
      <modal-title>Modal Title</modal-title>
      <modal-close></modal-close>
    </modal-header>
    <modal-body>
      This is the modal content.
    </modal-body>
    <modal-footer>
      <btn data-variant="secondary">Cancel</btn>
      <btn data-variant="primary">Confirm</btn>
    </modal-footer>
  </modal-content>
</modal>`}
              language="html"
              filename="modal.html"
            />
          </div>
        </ComponentSection>

        {/* Divider */}
        <ComponentSection id="divider" title="Divider" description="Visual separator for content sections.">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Content above</p>
              <hr className="border-border" />
              <p className="text-sm text-muted-foreground">Content below</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Left</p>
              <div className="h-8 w-px bg-border" />
              <p className="text-sm text-muted-foreground">Right</p>
            </div>

            <CodeBlock
              code={`<!-- Horizontal divider -->
<divider></divider>

<!-- Vertical divider -->
<divider data-orientation="vertical"></divider>

<!-- Divider with text -->
<divider>
  <divider-text>OR</divider-text>
</divider>`}
              language="html"
              filename="divider.html"
            />
          </div>
        </ComponentSection>

        {/* Alert */}
        <ComponentSection
          id="alert"
          title="Alert"
          description="Notification messages for different states and contexts."
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-chart-1/30 bg-chart-1/10 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-chart-1" />
                <div>
                  <h4 className="font-medium text-chart-1">Information</h4>
                  <p className="mt-1 text-sm text-muted-foreground">This is an informational alert message.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-chart-2/30 bg-chart-2/10 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-chart-2" />
                <div>
                  <h4 className="font-medium text-chart-2">Success</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Your action was completed successfully.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-chart-4/30 bg-chart-4/10 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-chart-4" />
                <div>
                  <h4 className="font-medium text-chart-4">Warning</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Please review before proceeding.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <div>
                  <h4 className="font-medium text-destructive">Error</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Something went wrong. Please try again.</p>
                </div>
              </div>
            </div>

            <CodeBlock
              code={`<alert data-variant="info">
  <alert-title>Information</alert-title>
  <alert-description>This is an informational alert.</alert-description>
</alert>

<alert data-variant="success">...</alert>
<alert data-variant="warning">...</alert>
<alert data-variant="error">...</alert>`}
              language="html"
              filename="alert.html"
            />
          </div>
        </ComponentSection>

        {/* Badge */}
        <ComponentSection id="badge" title="Badge" description="Small status indicators and labels.">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Default</span>
              <span className="rounded-full bg-chart-2/10 px-3 py-1 text-xs font-medium text-chart-2">Success</span>
              <span className="rounded-full bg-chart-4/10 px-3 py-1 text-xs font-medium text-chart-4">Warning</span>
              <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                Error
              </span>
              <span className="rounded-full bg-chart-1/10 px-3 py-1 text-xs font-medium text-chart-1">Info</span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">Outline</span>
            </div>

            <CodeBlock
              code={`<badge data-variant="default">Default</badge>
<badge data-variant="success">Success</badge>
<badge data-variant="warning">Warning</badge>
<badge data-variant="error">Error</badge>
<badge data-variant="info">Info</badge>
<badge data-variant="outline">Outline</badge>`}
              language="html"
              filename="badge.html"
            />
          </div>
        </ComponentSection>

        {/* Toast */}
        <ComponentSection
          id="toast"
          title="Toast"
          description="Temporary notification messages that appear and disappear."
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-lg">
                <Check className="h-5 w-5 text-chart-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Changes saved</p>
                  <p className="text-xs text-muted-foreground">Your changes have been saved successfully.</p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <CodeBlock
              code={`<toast data-variant="success">
  <toast-icon></toast-icon>
  <toast-content>
    <toast-title>Changes saved</toast-title>
    <toast-description>Your changes have been saved successfully.</toast-description>
  </toast-content>
  <toast-close></toast-close>
</toast>`}
              language="html"
              filename="toast.html"
            />
          </div>
        </ComponentSection>

        {/* Progress */}
        <ComponentSection
          id="progress"
          title="Progress"
          description="Progress indicators for loading states and completion status."
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-primary transition-all" />
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/2 rounded-full bg-chart-2 transition-all" />
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-1/4 rounded-full bg-chart-4 transition-all" />
              </div>
            </div>

            <CodeBlock
              code={`<progress value="75" max="100"></progress>
<progress data-variant="success" value="50" max="100"></progress>
<progress data-variant="warning" value="25" max="100"></progress>`}
              language="html"
              filename="progress.html"
            />
          </div>
        </ComponentSection>

        {/* Spinner */}
        <ComponentSection id="spinner" title="Spinner" description="Loading spinners for async operations.">
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>

            <CodeBlock
              code={`<spinner data-size="sm"></spinner>
<spinner data-size="base"></spinner>
<spinner data-size="lg"></spinner>
<spinner data-size="xl"></spinner>`}
              language="html"
              filename="spinner.html"
            />
          </div>
        </ComponentSection>

        {/* Skeleton */}
        <ComponentSection
          id="skeleton"
          title="Skeleton"
          description="Loading placeholder for content that is being fetched."
        >
          <div className="space-y-8">
            <div className="max-w-sm space-y-3 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                <div className="h-4 w-4/6 animate-pulse rounded bg-muted" />
              </div>
            </div>

            <CodeBlock
              code={`<skeleton data-variant="circle" data-size="lg"></skeleton>
<skeleton data-variant="text"></skeleton>
<skeleton data-variant="text" data-width="75%"></skeleton>
<skeleton data-variant="rect" data-height="200px"></skeleton>`}
              language="html"
              filename="skeleton.html"
            />
          </div>
        </ComponentSection>

        {/* Tabs */}
        <ComponentSection id="tabs" title="Tabs" description="Tab navigation for switching between content sections.">
          <div className="space-y-8">
            <div className="max-w-lg">
              <div className="flex border-b border-border">
                <button className="border-b-2 border-primary px-4 py-2 text-sm font-medium text-foreground">
                  Account
                </button>
                <button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Security
                </button>
                <button className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Notifications
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">Account settings content goes here.</p>
              </div>
            </div>

            <CodeBlock
              code={`<tabs>
  <tabs-list>
    <tabs-trigger data-value="account">Account</tabs-trigger>
    <tabs-trigger data-value="security">Security</tabs-trigger>
    <tabs-trigger data-value="notifications">Notifications</tabs-trigger>
  </tabs-list>
  <tabs-content data-value="account">
    Account settings content...
  </tabs-content>
  <tabs-content data-value="security">
    Security settings content...
  </tabs-content>
</tabs>`}
              language="html"
              filename="tabs.html"
            />
          </div>
        </ComponentSection>

        {/* Breadcrumb */}
        <ComponentSection
          id="breadcrumb"
          title="Breadcrumb"
          description="Navigation breadcrumbs showing the current page hierarchy."
        >
          <div className="space-y-8">
            <nav className="flex items-center gap-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Home
              </a>
              <span className="text-muted-foreground">/</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Products
              </a>
              <span className="text-muted-foreground">/</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Electronics
              </a>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium">Laptops</span>
            </nav>

            <CodeBlock
              code={`<breadcrumb>
  <breadcrumb-item href="/">Home</breadcrumb-item>
  <breadcrumb-separator>/</breadcrumb-separator>
  <breadcrumb-item href="/products">Products</breadcrumb-item>
  <breadcrumb-separator>/</breadcrumb-separator>
  <breadcrumb-item href="/products/electronics">Electronics</breadcrumb-item>
  <breadcrumb-separator>/</breadcrumb-separator>
  <breadcrumb-item data-current>Laptops</breadcrumb-item>
</breadcrumb>`}
              language="html"
              filename="breadcrumb.html"
            />
          </div>
        </ComponentSection>

        {/* Pagination */}
        <ComponentSection
          id="pagination"
          title="Pagination"
          description="Page navigation controls for paginated content."
        >
          <div className="space-y-8">
            <nav className="flex items-center gap-1">
              <button className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">Previous</button>
              <button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">1</button>
              <button className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">2</button>
              <button className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">3</button>
              <span className="px-2 text-muted-foreground">...</span>
              <button className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">10</button>
              <button className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">Next</button>
            </nav>

            <CodeBlock
              code={`<pagination>
  <pagination-prev>Previous</pagination-prev>
  <pagination-item data-active>1</pagination-item>
  <pagination-item>2</pagination-item>
  <pagination-item>3</pagination-item>
  <pagination-ellipsis>...</pagination-ellipsis>
  <pagination-item>10</pagination-item>
  <pagination-next>Next</pagination-next>
</pagination>`}
              language="html"
              filename="pagination.html"
            />
          </div>
        </ComponentSection>

        {/* Steps */}
        <ComponentSection id="steps" title="Steps" description="Step indicators for multi-step processes.">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Account</span>
              </div>
              <div className="h-px flex-1 bg-primary" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  2
                </div>
                <span className="text-sm font-medium">Details</span>
              </div>
              <div className="h-px flex-1 bg-muted" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted bg-background text-sm font-medium text-muted-foreground">
                  3
                </div>
                <span className="text-sm text-muted-foreground">Review</span>
              </div>
            </div>

            <CodeBlock
              code={`<steps>
  <step data-status="complete">
    <step-indicator>1</step-indicator>
    <step-label>Account</step-label>
  </step>
  <step data-status="current">
    <step-indicator>2</step-indicator>
    <step-label>Details</step-label>
  </step>
  <step data-status="pending">
    <step-indicator>3</step-indicator>
    <step-label>Review</step-label>
  </step>
</steps>`}
              language="html"
              filename="steps.html"
            />
          </div>
        </ComponentSection>

        {/* Table */}
        <ComponentSection id="table" title="Table" description="Data table component for displaying tabular data.">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-sm">John Doe</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">john@example.com</td>
                    <td className="px-4 py-3 text-sm">Admin</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-chart-2/10 px-2 py-0.5 text-xs font-medium text-chart-2">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-sm">Jane Smith</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">jane@example.com</td>
                    <td className="px-4 py-3 text-sm">Editor</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-chart-2/10 px-2 py-0.5 text-xs font-medium text-chart-2">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3 text-sm">Bob Wilson</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">bob@example.com</td>
                    <td className="px-4 py-3 text-sm">Viewer</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        Inactive
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CodeBlock
              code={`<table data-variant="default">
  <table-header>
    <table-row>
      <table-head>Name</table-head>
      <table-head>Email</table-head>
      <table-head>Role</table-head>
      <table-head>Status</table-head>
    </table-row>
  </table-header>
  <table-body>
    <table-row>
      <table-cell>John Doe</table-cell>
      <table-cell>john@example.com</table-cell>
      <table-cell>Admin</table-cell>
      <table-cell><badge data-variant="success">Active</badge></table-cell>
    </table-row>
  </table-body>
</table>`}
              language="html"
              filename="table.html"
            />
          </div>
        </ComponentSection>

        {/* Avatar */}
        <ComponentSection
          id="avatar"
          title="Avatar"
          description="User profile images with size variants and fallback initials."
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-1 text-[10px] font-medium text-white">
                XS
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chart-2 text-xs font-medium text-white">
                SM
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-chart-3 text-sm font-medium text-white">
                MD
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-4 text-sm font-medium text-white">
                LG
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-5 text-base font-medium text-white">
                XL
              </div>
            </div>

            <CodeBlock
              code={`<avatar data-size="xs">
  <avatar-image src="/user.jpg" alt="User"></avatar-image>
  <avatar-fallback>JD</avatar-fallback>
</avatar>

<avatar data-size="sm">...</avatar>
<avatar data-size="base">...</avatar>
<avatar data-size="lg">...</avatar>
<avatar data-size="xl">...</avatar>`}
              language="html"
              filename="avatar.html"
            />
          </div>
        </ComponentSection>

        {/* Tooltip */}
        <ComponentSection id="tooltip" title="Tooltip" description="Contextual information shown on hover.">
          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="relative">
                <button className="rounded-lg border border-border px-4 py-2 text-sm">Hover me</button>
                <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background">
                  Tooltip content
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                </div>
              </div>
            </div>

            <CodeBlock
              code={`<tooltip>
  <tooltip-trigger>
    <btn>Hover me</btn>
  </tooltip-trigger>
  <tooltip-content data-position="top">
    Tooltip content
  </tooltip-content>
</tooltip>`}
              language="html"
              filename="tooltip.html"
            />
          </div>
        </ComponentSection>
      </div>
    </DocsLayout>
  )
}

function ComponentSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-xl border border-border bg-card">
        <div className="p-6">{children}</div>
      </div>
    </section>
  )
}
