import { DocsLayout } from "@/components/docs-layout"
import { CodeBlock } from "@/components/code-block"

export default function EffectsPage() {
  return (
    <DocsLayout title="">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Animation Effects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          15 CSS animation effect files providing smooth, performant animations and transitions.
        </p>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            The effects system provides pre-built CSS animations that can be applied to any element. All animations are
            hardware-accelerated and respect user preferences for reduced motion.
          </p>

          <div className="bg-muted/50 border rounded-lg p-4 mb-6">
            <h4 className="font-medium mb-2">Usage Pattern</h4>
            <CodeBlock
              code={`<!-- Include the effect CSS file -->
<link rel="stylesheet" href="effects/fade.css">

<!-- Apply via custom element or class -->
<fade-in>Content fades in</fade-in>
<div class="bounce-gentle">Bouncing content</div>`}
              language="html"
            />
          </div>
        </section>

        {/* Effects List */}
        <section className="space-y-12">
          {/* Bounce */}
          <div id="bounce" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Bounce</h2>
            <p className="text-muted-foreground mb-4">Bouncing animations for attention-grabbing effects.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {["bounce", "bounce-gentle", "bounce-strong", "bounce-in", "bounce-out"].map((variant) => (
                <div
                  key={variant}
                  className="bg-muted/50 border rounded-lg p-4 flex flex-col items-center justify-center min-h-24"
                >
                  <div
                    className="w-8 h-8 bg-primary rounded-lg mb-2"
                    style={{
                      animation:
                        variant === "bounce"
                          ? "bounce 1s infinite"
                          : variant === "bounce-gentle"
                            ? "bounce 2s ease-in-out infinite"
                            : variant === "bounce-strong"
                              ? "bounce 0.5s infinite"
                              : "bounce 1s ease-out",
                    }}
                  />
                  <span className="text-xs text-muted-foreground">{variant}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`<div class="bounce">Default bounce</div>
<div class="bounce-gentle">Gentle bounce</div>
<div class="bounce-strong">Strong bounce</div>
<div class="bounce-in">Bounce in on load</div>
<div class="bounce-out">Bounce out on exit</div>`}
              language="html"
            />
          </div>

          {/* Fade */}
          <div id="fade" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Fade</h2>
            <p className="text-muted-foreground mb-4">Fade in/out animations with directional variants.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { name: "fade-in", desc: "Fade in" },
                { name: "fade-out", desc: "Fade out" },
                { name: "fade-in-up", desc: "Fade in from bottom" },
                { name: "fade-in-down", desc: "Fade in from top" },
                { name: "fade-in-left", desc: "Fade in from right" },
                { name: "fade-in-right", desc: "Fade in from left" },
                { name: "fade-out-up", desc: "Fade out to top" },
                { name: "fade-out-down", desc: "Fade out to bottom" },
              ].map((variant) => (
                <div
                  key={variant.name}
                  className="bg-muted/50 border rounded-lg p-4 flex flex-col items-center justify-center min-h-20"
                >
                  <span className="text-sm font-medium mb-1">{variant.name}</span>
                  <span className="text-xs text-muted-foreground text-center">{variant.desc}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`<!-- Custom element syntax -->
<fade-in>Content fades in</fade-in>
<fade-in-up>Fades in from bottom</fade-in-up>

<!-- Class syntax -->
<div class="fade-in">Fade in</div>
<div class="fade-in-up">Fade in from bottom</div>
<div class="fade-in-down">Fade in from top</div>
<div class="fade-in-left">Fade in from right</div>
<div class="fade-in-right">Fade in from left</div>`}
              language="html"
            />
          </div>

          {/* Slide */}
          <div id="slide" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Slide</h2>
            <p className="text-muted-foreground mb-4">Sliding animations for smooth entrance and exit transitions.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "slide-in-up",
                "slide-in-down",
                "slide-in-left",
                "slide-in-right",
                "slide-out-up",
                "slide-out-down",
                "slide-out-left",
                "slide-out-right",
              ].map((variant) => (
                <div key={variant} className="bg-muted/50 border rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">{variant}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`<div class="slide-in-up">Slides in from bottom</div>
<div class="slide-in-down">Slides in from top</div>
<div class="slide-in-left">Slides in from left</div>
<div class="slide-in-right">Slides in from right</div>

<div class="slide-out-up">Slides out to top</div>
<div class="slide-out-down">Slides out to bottom</div>`}
              language="html"
            />
          </div>

          {/* Scale */}
          <div id="scale" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Scale</h2>
            <p className="text-muted-foreground mb-4">Scaling animations for zoom effects.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["scale-in", "scale-out", "scale-up", "scale-down"].map((variant) => (
                <div
                  key={variant}
                  className="bg-muted/50 border rounded-lg p-4 flex flex-col items-center justify-center min-h-20"
                >
                  <div
                    className="w-6 h-6 bg-primary rounded mb-2"
                    style={{
                      animation: variant === "scale-up" ? "pulse 2s ease-in-out infinite" : undefined,
                    }}
                  />
                  <span className="text-sm font-medium">{variant}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`<div class="scale-in">Scales in from 0</div>
<div class="scale-out">Scales out to 0</div>
<div class="scale-up">Scales up slightly</div>
<div class="scale-down">Scales down slightly</div>`}
              language="html"
            />
          </div>

          {/* Rotate */}
          <div id="rotate" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Rotate</h2>
            <p className="text-muted-foreground mb-4">Rotation animations for spinning and turning effects.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["rotate", "rotate-90", "rotate-180", "rotate-reverse"].map((variant) => (
                <div
                  key={variant}
                  className="bg-muted/50 border rounded-lg p-4 flex flex-col items-center justify-center min-h-24"
                >
                  <div
                    className="w-8 h-8 bg-primary rounded-lg mb-2"
                    style={{
                      animation:
                        variant === "rotate"
                          ? "spin 2s linear infinite"
                          : variant === "rotate-reverse"
                            ? "spin 2s linear infinite reverse"
                            : undefined,
                      transform:
                        variant === "rotate-90"
                          ? "rotate(90deg)"
                          : variant === "rotate-180"
                            ? "rotate(180deg)"
                            : undefined,
                    }}
                  />
                  <span className="text-xs text-muted-foreground">{variant}</span>
                </div>
              ))}
            </div>

            <CodeBlock
              code={`<div class="rotate">Continuous rotation</div>
<div class="rotate-90">Rotates to 90°</div>
<div class="rotate-180">Rotates to 180°</div>
<div class="rotate-reverse">Reverse rotation</div>`}
              language="html"
            />
          </div>

          {/* Pulse */}
          <div id="pulse" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Pulse</h2>
            <p className="text-muted-foreground mb-4">Pulsing animations for attention and loading states.</p>

            <div className="flex gap-6 mb-6">
              <div className="bg-muted/50 border rounded-lg p-6 flex flex-col items-center">
                <div
                  className="w-10 h-10 bg-primary rounded-full mb-3"
                  style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                />
                <span className="text-sm text-muted-foreground">pulse</span>
              </div>
              <div className="bg-muted/50 border rounded-lg p-6 flex flex-col items-center">
                <div
                  className="w-10 h-10 bg-primary/60 rounded-full mb-3"
                  style={{ animation: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                />
                <span className="text-sm text-muted-foreground">pulse-fast</span>
              </div>
            </div>

            <CodeBlock
              code={`<div class="pulse">Pulsing element</div>
<div class="pulse-fast">Fast pulse</div>
<div class="pulse-slow">Slow pulse</div>`}
              language="html"
            />
          </div>

          {/* Shake */}
          <div id="shake" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Shake</h2>
            <p className="text-muted-foreground mb-4">Shaking animations for error states and attention.</p>

            <CodeBlock
              code={`<div class="shake">Horizontal shake</div>
<div class="shake-vertical">Vertical shake</div>
<div class="shake-rotate">Rotational shake</div>`}
              language="html"
            />

            <div className="bg-muted/50 border rounded-lg p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Tip:</strong> Use shake animations sparingly, typically for form validation errors or to draw
                attention to important elements.
              </p>
            </div>
          </div>

          {/* Flip */}
          <div id="flip" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Flip</h2>
            <p className="text-muted-foreground mb-4">3D flipping animations for card effects.</p>

            <CodeBlock
              code={`<div class="flip-x">Flip on X axis</div>
<div class="flip-y">Flip on Y axis</div>
<div class="flip-in">Flip in on load</div>
<div class="flip-out">Flip out on exit</div>`}
              language="html"
            />
          </div>

          {/* Float */}
          <div id="float" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Float</h2>
            <p className="text-muted-foreground mb-4">Floating animations for hover and ambient effects.</p>

            <div className="flex gap-6 mb-6">
              <div className="bg-muted/50 border rounded-lg p-6 flex flex-col items-center">
                <div
                  className="w-10 h-10 bg-primary rounded-lg mb-3"
                  style={{
                    animation: "float 3s ease-in-out infinite",
                  }}
                />
                <span className="text-sm text-muted-foreground">float</span>
              </div>
            </div>

            <CodeBlock
              code={`<div class="float">Gentle floating</div>
<div class="float-slow">Slow float</div>
<div class="float-fast">Fast float</div>`}
              language="html"
            />
          </div>

          {/* Glow */}
          <div id="glow" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Glow</h2>
            <p className="text-muted-foreground mb-4">Glowing effects for emphasis and highlights.</p>

            <CodeBlock
              code={`<div class="glow">Glowing effect</div>
<div class="glow-pulse">Pulsing glow</div>
<div class="glow-primary">Primary color glow</div>
<div class="glow-success">Success color glow</div>`}
              language="html"
            />
          </div>

          {/* Breathe */}
          <div id="breathe" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Breathe</h2>
            <p className="text-muted-foreground mb-4">Breathing animations for calm, ambient effects.</p>

            <CodeBlock
              code={`<div class="breathe">Breathing animation</div>
<div class="breathe-slow">Slow breathing</div>
<div class="breathe-fast">Fast breathing</div>`}
              language="html"
            />
          </div>

          {/* Morph */}
          <div id="morph" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Morph</h2>
            <p className="text-muted-foreground mb-4">Morphing animations for shape transitions.</p>

            <CodeBlock
              code={`<div class="morph">Morphing shape</div>
<div class="morph-blob">Blob morphing</div>`}
              language="html"
            />
          </div>

          {/* Zoom */}
          <div id="zoom" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Zoom</h2>
            <p className="text-muted-foreground mb-4">Zoom animations for modal and image effects.</p>

            <CodeBlock
              code={`<div class="zoom-in">Zoom in on load</div>
<div class="zoom-out">Zoom out on exit</div>
<div class="zoom-in-up">Zoom in from bottom</div>
<div class="zoom-in-down">Zoom in from top</div>`}
              language="html"
            />
          </div>

          {/* Swipe */}
          <div id="swipe" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Swipe</h2>
            <p className="text-muted-foreground mb-4">Swiping animations for carousel and gesture effects.</p>

            <CodeBlock
              code={`<div class="swipe-left">Swipe to left</div>
<div class="swipe-right">Swipe to right</div>
<div class="swipe-up">Swipe up</div>
<div class="swipe-down">Swipe down</div>`}
              language="html"
            />
          </div>

          {/* Typewriter */}
          <div id="typewriter" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">Typewriter</h2>
            <p className="text-muted-foreground mb-4">Typewriter text effect for hero sections and emphasis.</p>

            <CodeBlock
              code={`<typewriter>This text types out character by character</typewriter>

<!-- With custom timing -->
<typewriter data-speed="fast">Fast typing</typewriter>
<typewriter data-speed="slow">Slow typing</typewriter>

<!-- With cursor -->
<typewriter data-cursor="true">With blinking cursor</typewriter>`}
              language="html"
            />

            <div className="bg-muted/50 border rounded-lg p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> The typewriter effect may require JavaScript for dynamic text. The CSS provides
                the cursor animation and character reveal styling.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>

          <div className="grid gap-4">
            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Respect User Preferences</h4>
              <p className="text-sm text-muted-foreground mb-3">
                All effects automatically respect the prefers-reduced-motion media query.
              </p>
              <CodeBlock
                code={`@media (prefers-reduced-motion: reduce) {
  .bounce, .fade-in, .slide-in-up {
    animation: none;
    transition: none;
  }
}`}
                language="css"
              />
            </div>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Performance Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Use transform and opacity for smooth 60fps animations</li>
                <li>Avoid animating layout properties (width, height, top, left)</li>
                <li>Use will-change sparingly for complex animations</li>
                <li>Prefer CSS animations over JavaScript when possible</li>
              </ul>
            </div>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Combining Effects</h4>
              <p className="text-sm text-muted-foreground mb-3">Effects can be combined for complex animations:</p>
              <CodeBlock
                code={`<!-- Combine fade and slide -->
<div class="fade-in slide-in-up">Fades and slides in</div>

<!-- Combine with utilities -->
<div class="fade-in hover:scale-up transition-base">
  Interactive element
</div>`}
                language="html"
              />
            </div>
          </div>
        </section>

        {/* Complete Effects Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Complete Effects Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 border-b font-medium">Effect File</th>
                  <th className="text-left p-3 border-b font-medium">Classes/Elements</th>
                  <th className="text-left p-3 border-b font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  {
                    file: "bounce.css",
                    classes: "bounce, bounce-gentle, bounce-strong, bounce-in, bounce-out",
                    desc: "Bouncing animations",
                  },
                  {
                    file: "breathe.css",
                    classes: "breathe, breathe-slow, breathe-fast",
                    desc: "Breathing/pulsing effects",
                  },
                  {
                    file: "fade.css",
                    classes: "fade-in, fade-out, fade-in-up, fade-in-down, etc.",
                    desc: "Fade transitions",
                  },
                  { file: "flip.css", classes: "flip-x, flip-y, flip-in, flip-out", desc: "3D flip animations" },
                  { file: "float.css", classes: "float, float-slow, float-fast", desc: "Floating effects" },
                  {
                    file: "glow.css",
                    classes: "glow, glow-pulse, glow-primary, glow-success",
                    desc: "Glowing effects",
                  },
                  { file: "morph.css", classes: "morph, morph-blob", desc: "Shape morphing" },
                  { file: "pulse.css", classes: "pulse, pulse-fast, pulse-slow", desc: "Pulsing animations" },
                  {
                    file: "rotate.css",
                    classes: "rotate, rotate-90, rotate-180, rotate-reverse",
                    desc: "Rotation animations",
                  },
                  {
                    file: "scale.css",
                    classes: "scale-in, scale-out, scale-up, scale-down",
                    desc: "Scaling animations",
                  },
                  { file: "shake.css", classes: "shake, shake-vertical, shake-rotate", desc: "Shaking animations" },
                  { file: "slide.css", classes: "slide-in-*, slide-out-*", desc: "Sliding transitions" },
                  {
                    file: "swipe.css",
                    classes: "swipe-left, swipe-right, swipe-up, swipe-down",
                    desc: "Swiping animations",
                  },
                  { file: "typewriter.css", classes: "typewriter element", desc: "Typewriter text effect" },
                  { file: "zoom.css", classes: "zoom-in, zoom-out, zoom-in-up, zoom-in-down", desc: "Zoom animations" },
                ].map((effect) => (
                  <tr key={effect.file}>
                    <td className="p-3 font-mono text-sm">{effect.file}</td>
                    <td className="p-3 text-sm text-muted-foreground">{effect.classes}</td>
                    <td className="p-3 text-sm text-muted-foreground">{effect.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
