import type React from "react"
import { DocsLayout } from "@/components/docs-layout"
import { DocsSidebar } from "@/components/docs-sidebar"
import { CodeBlock, InlineCode } from "@/components/code-block"

const sidebarSections = [
  {
    title: "Layout",
    items: [
      { href: "#spacing", label: "Spacing" },
      { href: "#display", label: "Display" },
      { href: "#flex", label: "Flexbox" },
      { href: "#grid", label: "Grid" },
      { href: "#position", label: "Position" },
    ],
  },
  {
    title: "Sizing",
    items: [
      { href: "#sizing", label: "Width & Height" },
      { href: "#aspect-ratio", label: "Aspect Ratio" },
    ],
  },
  {
    title: "Typography",
    items: [{ href: "#text", label: "Text" }],
  },
  {
    title: "Borders & Effects",
    items: [
      { href: "#border", label: "Border" },
      { href: "#opacity", label: "Opacity" },
      { href: "#transform", label: "Transform" },
    ],
  },
  {
    title: "Interactivity",
    items: [
      { href: "#cursor", label: "Cursor" },
      { href: "#pointer-events", label: "Pointer Events" },
      { href: "#user-select", label: "User Select" },
      { href: "#overflow", label: "Overflow" },
      { href: "#scroll", label: "Scroll" },
    ],
  },
  {
    title: "Other",
    items: [
      { href: "#z-index", label: "Z-Index" },
      { href: "#object-fit", label: "Object Fit" },
      { href: "#list-style", label: "List Style" },
    ],
  },
]

export default function UtilitiesPage() {
  return (
    <DocsLayout
      title="Utilities"
      description="24 utility class categories for rapid styling using design tokens."
      sidebar={<DocsSidebar sections={sidebarSections} />}
    >
      <div className="space-y-16">
        {/* Introduction */}
        <section>
          <p className="text-muted-foreground">
            Utility classes provide low-level styling primitives that can be combined to build any design. All utilities
            use design tokens for consistent values.
          </p>
          <div className="mt-6">
            <CodeBlock
              code={`<!-- Using utilities -->
<div class="m-4 p-6 flex items-center gap-4 rounded-lg">
  <div class="w-12 h-12 bg-primary rounded-full"></div>
  <div class="flex-1">
    <h3 class="text-lg font-semibold">Title</h3>
    <p class="text-sm text-muted">Description</p>
  </div>
</div>`}
              language="html"
            />
          </div>
        </section>

        {/* Spacing */}
        <UtilitySection id="spacing" title="Spacing" description="Margin and padding utilities for consistent spacing.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Margin Classes</h4>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 text-left font-medium">Class</th>
                      <th className="py-2 text-left font-medium">Property</th>
                      <th className="py-2 text-left font-medium">Values</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>m-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin</td>
                      <td className="py-2 text-muted-foreground">
                        0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24...
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>mt-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-top</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>mr-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-right</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>mb-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-bottom</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>ml-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-left</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>mx-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-left & margin-right</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>my-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">margin-top & margin-bottom</td>
                      <td className="py-2 text-muted-foreground">Same scale</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Padding Classes</h4>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 text-left font-medium">Class</th>
                      <th className="py-2 text-left font-medium">Property</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>p-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">padding (all sides)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>pt-{"{size}"}</InlineCode>, <InlineCode>pr-{"{size}"}</InlineCode>,{" "}
                        <InlineCode>pb-{"{size}"}</InlineCode>, <InlineCode>pl-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">Individual sides</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>px-{"{size}"}</InlineCode>, <InlineCode>py-{"{size}"}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">Horizontal / Vertical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Visual Example</h4>
              <div className="flex flex-wrap gap-4">
                {[1, 2, 4, 6, 8].map((size) => (
                  <div key={size} className="text-center">
                    <div className="inline-block rounded border border-dashed border-primary bg-primary/10">
                      <div
                        className={`bg-primary text-primary-foreground rounded text-xs font-medium`}
                        style={{ padding: `${size * 4}px` }}
                      >
                        p-{size}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <CodeBlock
              code={`/* Spacing utilities */
.m-4 { margin: var(--spacing-4); }           /* 1rem */
.mt-2 { margin-top: var(--spacing-2); }      /* 0.5rem */
.mx-auto { margin-left: auto; margin-right: auto; }

.p-6 { padding: var(--spacing-6); }          /* 1.5rem */
.px-4 { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
.py-2 { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }`}
              language="css"
              filename="spacing.css"
            />
          </div>
        </UtilitySection>

        {/* Display */}
        <UtilitySection id="display" title="Display" description="Control the display type of elements.">
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 text-left font-medium">Class</th>
                    <th className="py-2 text-left font-medium">CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { class: "d-block", css: "display: block" },
                    { class: "d-inline", css: "display: inline" },
                    { class: "d-inline-block", css: "display: inline-block" },
                    { class: "d-flex", css: "display: flex" },
                    { class: "d-inline-flex", css: "display: inline-flex" },
                    { class: "d-grid", css: "display: grid" },
                    { class: "d-none", css: "display: none" },
                    { class: "d-contents", css: "display: contents" },
                  ].map((item) => (
                    <tr key={item.class} className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>{item.class}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">{item.css}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <CodeBlock
              code={`<div class="d-flex">Flex container</div>
<div class="d-grid">Grid container</div>
<span class="d-block">Block element</span>
<div class="d-none">Hidden element</div>`}
              language="html"
            />
          </div>
        </UtilitySection>

        {/* Flexbox */}
        <UtilitySection id="flex" title="Flexbox" description="Flexbox utilities for flexible layouts.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Flex Direction</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">flex-row</p>
                  <div className="flex gap-2">
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">1</div>
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">2</div>
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">3</div>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="mb-2 text-xs font-medium text-muted-foreground">flex-col</p>
                  <div className="flex flex-col gap-2">
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">1</div>
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">2</div>
                    <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">3</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Justify Content</h4>
              <div className="space-y-3">
                {[
                  { class: "justify-start", style: "justify-start" },
                  { class: "justify-center", style: "justify-center" },
                  { class: "justify-end", style: "justify-end" },
                  { class: "justify-between", style: "justify-between" },
                  { class: "justify-around", style: "justify-around" },
                ].map((item) => (
                  <div key={item.class} className="rounded-lg border border-border p-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">{item.class}</p>
                    <div className={`flex ${item.style}`}>
                      <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">1</div>
                      <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">2</div>
                      <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">3</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Align Items</h4>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { class: "items-start", style: "items-start" },
                  { class: "items-center", style: "items-center" },
                  { class: "items-end", style: "items-end" },
                ].map((item) => (
                  <div key={item.class} className="rounded-lg border border-border p-3">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">{item.class}</p>
                    <div className={`flex h-20 gap-2 ${item.style}`}>
                      <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">1</div>
                      <div className="rounded bg-primary px-3 py-3 text-xs text-primary-foreground">2</div>
                      <div className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground">3</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Gap</h4>
              <div className="flex flex-wrap items-center gap-6">
                {[1, 2, 4, 6, 8].map((gap) => (
                  <div key={gap} className="text-center">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">gap-{gap}</p>
                    <div className="flex rounded border border-border p-2" style={{ gap: `${gap * 4}px` }}>
                      <div className="h-6 w-6 rounded bg-primary" />
                      <div className="h-6 w-6 rounded bg-primary" />
                      <div className="h-6 w-6 rounded bg-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <CodeBlock
              code={`/* Flexbox utilities */
.d-flex { display: flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }

.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }

.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }

.gap-4 { gap: var(--spacing-4); }
.gap-x-2 { column-gap: var(--spacing-2); }
.gap-y-4 { row-gap: var(--spacing-4); }

.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: none; }`}
              language="css"
              filename="flex.css"
            />
          </div>
        </UtilitySection>

        {/* Grid */}
        <UtilitySection id="grid" title="Grid" description="CSS Grid utilities for two-dimensional layouts.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Grid Columns</h4>
              <div className="space-y-4">
                {[2, 3, 4].map((cols) => (
                  <div key={cols}>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">grid-cols-{cols}</p>
                    <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                      {Array.from({ length: cols }).map((_, i) => (
                        <div key={i} className="rounded bg-primary p-3 text-center text-xs text-primary-foreground">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <CodeBlock
              code={`/* Grid utilities */
.d-grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
.col-span-full { grid-column: 1 / -1; }

.gap-4 { gap: var(--spacing-4); }`}
              language="css"
              filename="grid.css"
            />
          </div>
        </UtilitySection>

        {/* Position */}
        <UtilitySection id="position" title="Position" description="Positioning utilities for element placement.">
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 text-left font-medium">Class</th>
                    <th className="py-2 text-left font-medium">CSS Property</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { class: "position-static", css: "position: static" },
                    { class: "position-relative", css: "position: relative" },
                    { class: "position-absolute", css: "position: absolute" },
                    { class: "position-fixed", css: "position: fixed" },
                    { class: "position-sticky", css: "position: sticky" },
                    { class: "top-0", css: "top: 0" },
                    { class: "right-0", css: "right: 0" },
                    { class: "bottom-0", css: "bottom: 0" },
                    { class: "left-0", css: "left: 0" },
                    { class: "inset-0", css: "top: 0; right: 0; bottom: 0; left: 0" },
                  ].map((item) => (
                    <tr key={item.class} className="border-b border-border">
                      <td className="py-2">
                        <InlineCode>{item.class}</InlineCode>
                      </td>
                      <td className="py-2 text-muted-foreground">{item.css}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <CodeBlock
              code={`<div class="position-relative">
  <div class="position-absolute top-0 right-0">
    Badge
  </div>
</div>

<nav class="position-sticky top-0">
  Sticky navigation
</nav>`}
              language="html"
            />
          </div>
        </UtilitySection>

        {/* Sizing */}
        <UtilitySection id="sizing" title="Width & Height" description="Utilities for controlling element dimensions.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Width</h4>
              <div className="space-y-2">
                {[
                  { class: "w-full", desc: "100%" },
                  { class: "w-1/2", desc: "50%" },
                  { class: "w-1/3", desc: "33.33%" },
                  { class: "w-1/4", desc: "25%" },
                  { class: "w-auto", desc: "auto" },
                ].map((item) => (
                  <div key={item.class} className="flex items-center gap-4">
                    <InlineCode className="w-20">{item.class}</InlineCode>
                    <div
                      className="h-6 rounded bg-primary"
                      style={{ width: item.desc === "auto" ? "80px" : item.desc }}
                    />
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <CodeBlock
              code={`/* Width utilities */
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.w-auto { width: auto; }
.w-1/2 { width: 50%; }
.w-1/3 { width: 33.333333%; }
.w-1/4 { width: 25%; }
.w-12 { width: var(--spacing-12); }
.w-24 { width: var(--spacing-24); }

.min-w-0 { min-width: 0; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }

/* Height utilities */
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.h-auto { height: auto; }
.min-h-screen { min-height: 100vh; }`}
              language="css"
              filename="sizing.css"
            />
          </div>
        </UtilitySection>

        {/* Aspect Ratio */}
        <UtilitySection
          id="aspect-ratio"
          title="Aspect Ratio"
          description="Utilities for controlling element aspect ratios."
        >
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { class: "aspect-square", ratio: "1 / 1" },
                { class: "aspect-video", ratio: "16 / 9" },
                { class: "aspect-4/3", ratio: "4 / 3" },
              ].map((item) => (
                <div key={item.class} className="text-center">
                  <div
                    className="rounded-lg bg-primary/20 border border-primary/30"
                    style={{ aspectRatio: item.ratio, width: "100%" }}
                  />
                  <p className="mt-2 text-sm font-medium">{item.class}</p>
                  <p className="text-xs text-muted-foreground">{item.ratio}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-4/3 { aspect-ratio: 4 / 3; }`}
              language="css"
            />
          </div>
        </UtilitySection>

        {/* Text */}
        <UtilitySection id="text" title="Text" description="Typography utilities for text styling.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Text Align</h4>
              <div className="space-y-2">
                <div className="rounded border border-border p-3 text-left">text-left</div>
                <div className="rounded border border-border p-3 text-center">text-center</div>
                <div className="rounded border border-border p-3 text-right">text-right</div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Font Weight</h4>
              <div className="space-y-1">
                <p className="font-light">font-light (300)</p>
                <p className="font-normal">font-normal (400)</p>
                <p className="font-medium">font-medium (500)</p>
                <p className="font-semibold">font-semibold (600)</p>
                <p className="font-bold">font-bold (700)</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Text Decoration</h4>
              <div className="space-y-1">
                <p className="underline">text-underline</p>
                <p className="line-through">text-line-through</p>
                <p className="no-underline">text-no-underline</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Text Transform</h4>
              <div className="space-y-1">
                <p className="uppercase">text-uppercase</p>
                <p className="lowercase">TEXT-LOWERCASE</p>
                <p className="capitalize">text-capitalize example</p>
              </div>
            </div>

            <CodeBlock
              code={`/* Text utilities */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

.text-underline { text-decoration: underline; }
.text-line-through { text-decoration: line-through; }

.text-uppercase { text-transform: uppercase; }
.text-lowercase { text-transform: lowercase; }
.text-capitalize { text-transform: capitalize; }

.leading-tight { line-height: 1.25; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.625; }

.tracking-tight { letter-spacing: -0.025em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.025em; }`}
              language="css"
              filename="text.css"
            />
          </div>
        </UtilitySection>

        {/* Border */}
        <UtilitySection id="border" title="Border" description="Border utilities for styling element edges.">
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Border Width</h4>
              <div className="flex flex-wrap gap-4">
                {[0, 1, 2, 4].map((width) => (
                  <div key={width} className="text-center">
                    <div className="h-16 w-16 rounded bg-muted" style={{ border: `${width}px solid var(--primary)` }} />
                    <p className="mt-2 text-xs font-medium">border-{width}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-muted-foreground">Border Radius</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { class: "rounded-none", radius: "0" },
                  { class: "rounded-sm", radius: "2px" },
                  { class: "rounded", radius: "4px" },
                  { class: "rounded-md", radius: "6px" },
                  { class: "rounded-lg", radius: "8px" },
                  { class: "rounded-xl", radius: "12px" },
                  { class: "rounded-full", radius: "9999px" },
                ].map((item) => (
                  <div key={item.class} className="text-center">
                    <div
                      className="h-16 w-16 border-2 border-primary bg-primary/10"
                      style={{ borderRadius: item.radius }}
                    />
                    <p className="mt-2 text-xs font-medium">{item.class}</p>
                  </div>
                ))}
              </div>
            </div>

            <CodeBlock
              code={`/* Border utilities */
.border { border-width: 1px; }
.border-0 { border-width: 0; }
.border-2 { border-width: 2px; }
.border-4 { border-width: 4px; }

.border-t { border-top-width: 1px; }
.border-r { border-right-width: 1px; }
.border-b { border-bottom-width: 1px; }
.border-l { border-left-width: 1px; }

.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: var(--radius-sm); }
.rounded { border-radius: var(--radius-base); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-full { border-radius: 9999px; }

.rounded-t-lg { border-top-left-radius: var(--radius-lg); border-top-right-radius: var(--radius-lg); }`}
              language="css"
              filename="border.css"
            />
          </div>
        </UtilitySection>

        {/* Opacity */}
        <UtilitySection id="opacity" title="Opacity" description="Utilities for controlling element transparency.">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {[0, 25, 50, 75, 100].map((opacity) => (
                <div key={opacity} className="text-center">
                  <div className="h-16 w-16 rounded-lg bg-primary" style={{ opacity: opacity / 100 }} />
                  <p className="mt-2 text-xs font-medium">opacity-{opacity}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`.opacity-0 { opacity: 0; }
.opacity-25 { opacity: 0.25; }
.opacity-50 { opacity: 0.5; }
.opacity-75 { opacity: 0.75; }
.opacity-100 { opacity: 1; }`}
              language="css"
            />
          </div>
        </UtilitySection>

        {/* Transform */}
        <UtilitySection
          id="transform"
          title="Transform"
          description="Transform utilities for rotating, scaling, and translating elements."
        >
          <div className="space-y-6">
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="h-16 w-16 rotate-45 rounded bg-primary" />
                <p className="mt-4 text-xs font-medium">rotate-45</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 scale-75 rounded bg-primary" />
                <p className="mt-4 text-xs font-medium">scale-75</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 scale-110 rounded bg-primary" />
                <p className="mt-4 text-xs font-medium">scale-110</p>
              </div>
            </div>

            <CodeBlock
              code={`/* Transform utilities */
.rotate-0 { transform: rotate(0deg); }
.rotate-45 { transform: rotate(45deg); }
.rotate-90 { transform: rotate(90deg); }
.rotate-180 { transform: rotate(180deg); }

.scale-75 { transform: scale(0.75); }
.scale-90 { transform: scale(0.9); }
.scale-100 { transform: scale(1); }
.scale-110 { transform: scale(1.1); }
.scale-125 { transform: scale(1.25); }

.translate-x-1 { transform: translateX(var(--spacing-1)); }
.translate-y-2 { transform: translateY(var(--spacing-2)); }
.-translate-x-1/2 { transform: translateX(-50%); }
.-translate-y-1/2 { transform: translateY(-50%); }`}
              language="css"
              filename="transform.css"
            />
          </div>
        </UtilitySection>

        {/* Cursor */}
        <UtilitySection id="cursor" title="Cursor" description="Utilities for changing the cursor style.">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                { class: "cursor-auto", cursor: "auto" },
                { class: "cursor-default", cursor: "default" },
                { class: "cursor-pointer", cursor: "pointer" },
                { class: "cursor-wait", cursor: "wait" },
                { class: "cursor-text", cursor: "text" },
                { class: "cursor-move", cursor: "move" },
                { class: "cursor-not-allowed", cursor: "not-allowed" },
                { class: "cursor-grab", cursor: "grab" },
              ].map((item) => (
                <div
                  key={item.class}
                  className="rounded-lg border border-border p-4 text-center transition-colors hover:bg-muted"
                  style={{ cursor: item.cursor }}
                >
                  <p className="text-sm font-medium">{item.class}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`.cursor-auto { cursor: auto; }
.cursor-default { cursor: default; }
.cursor-pointer { cursor: pointer; }
.cursor-wait { cursor: wait; }
.cursor-text { cursor: text; }
.cursor-move { cursor: move; }
.cursor-not-allowed { cursor: not-allowed; }
.cursor-grab { cursor: grab; }`}
              language="css"
            />
          </div>
        </UtilitySection>

        {/* Pointer Events */}
        <UtilitySection
          id="pointer-events"
          title="Pointer Events"
          description="Utilities for controlling pointer event behavior."
        >
          <CodeBlock
            code={`.pointer-events-none { pointer-events: none; }
.pointer-events-auto { pointer-events: auto; }`}
            language="css"
          />
        </UtilitySection>

        {/* User Select */}
        <UtilitySection id="user-select" title="User Select" description="Utilities for controlling text selection.">
          <CodeBlock
            code={`.select-none { user-select: none; }
.select-text { user-select: text; }
.select-all { user-select: all; }
.select-auto { user-select: auto; }`}
            language="css"
          />
        </UtilitySection>

        {/* Overflow */}
        <UtilitySection id="overflow" title="Overflow" description="Utilities for controlling content overflow.">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { class: "overflow-auto", style: "auto" },
                { class: "overflow-hidden", style: "hidden" },
                { class: "overflow-scroll", style: "scroll" },
              ].map((item) => (
                <div key={item.class} className="text-center">
                  <div
                    className="h-24 w-full rounded border border-border p-2 text-xs text-muted-foreground"
                    style={{ overflow: item.style as "auto" | "hidden" | "scroll" }}
                  >
                    <div className="h-40 w-40">
                      This content is larger than the container to demonstrate overflow behavior.
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium">{item.class}</p>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-visible { overflow: visible; }
.overflow-scroll { overflow: scroll; }

.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }
.overflow-x-hidden { overflow-x: hidden; }
.overflow-y-hidden { overflow-y: hidden; }`}
              language="css"
            />
          </div>
        </UtilitySection>

        {/* Scroll */}
        <UtilitySection id="scroll" title="Scroll" description="Utilities for scroll behavior.">
          <CodeBlock
            code={`.scroll-auto { scroll-behavior: auto; }
.scroll-smooth { scroll-behavior: smooth; }

.scroll-mt-4 { scroll-margin-top: var(--spacing-4); }
.scroll-pt-4 { scroll-padding-top: var(--spacing-4); }

.snap-start { scroll-snap-align: start; }
.snap-center { scroll-snap-align: center; }
.snap-x { scroll-snap-type: x mandatory; }
.snap-y { scroll-snap-type: y mandatory; }`}
            language="css"
          />
        </UtilitySection>

        {/* Z-Index */}
        <UtilitySection id="z-index" title="Z-Index" description="Utilities for controlling stacking order.">
          <div className="space-y-6">
            <div className="relative h-32">
              <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded bg-chart-1 text-xs font-medium text-white">
                z-0
              </div>
              <div
                className="absolute left-8 top-4 flex h-16 w-16 items-center justify-center rounded bg-chart-2 text-xs font-medium text-white"
                style={{ zIndex: 10 }}
              >
                z-10
              </div>
              <div
                className="absolute left-16 top-8 flex h-16 w-16 items-center justify-center rounded bg-chart-4 text-xs font-medium text-white"
                style={{ zIndex: 20 }}
              >
                z-20
              </div>
            </div>

            <CodeBlock
              code={`.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }
.-z-10 { z-index: -10; }`}
              language="css"
            />
          </div>
        </UtilitySection>

        {/* Object Fit */}
        <UtilitySection
          id="object-fit"
          title="Object Fit"
          description="Utilities for controlling replaced element sizing."
        >
          <CodeBlock
            code={`.object-contain { object-fit: contain; }
.object-cover { object-fit: cover; }
.object-fill { object-fit: fill; }
.object-none { object-fit: none; }
.object-scale-down { object-fit: scale-down; }

.object-center { object-position: center; }
.object-top { object-position: top; }
.object-bottom { object-position: bottom; }`}
            language="css"
          />
        </UtilitySection>

        {/* List Style */}
        <UtilitySection id="list-style" title="List Style" description="Utilities for styling lists.">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">list-disc</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Item one</li>
                  <li>Item two</li>
                  <li>Item three</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">list-decimal</p>
                <ol className="list-decimal pl-5 text-sm">
                  <li>Item one</li>
                  <li>Item two</li>
                  <li>Item three</li>
                </ol>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">list-none</p>
                <ul className="list-none text-sm">
                  <li>Item one</li>
                  <li>Item two</li>
                  <li>Item three</li>
                </ul>
              </div>
            </div>

            <CodeBlock
              code={`.list-none { list-style-type: none; }
.list-disc { list-style-type: disc; }
.list-decimal { list-style-type: decimal; }
.list-inside { list-style-position: inside; }
.list-outside { list-style-position: outside; }`}
              language="css"
            />
          </div>
        </UtilitySection>
      </div>
    </DocsLayout>
  )
}

function UtilitySection({
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
      <div className="rounded-xl border border-border bg-card p-6">{children}</div>
    </section>
  )
}
