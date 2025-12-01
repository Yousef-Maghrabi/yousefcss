import { DocsLayout } from "@/components/docs-layout"
import { CodeBlock } from "@/components/code-block"

export default function ExamplesPage() {
  return (
    <DocsLayout>
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Examples</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Real-world implementation examples showing how to build common UI patterns with the framework.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { name: "Registration Form", href: "#registration-form" },
            { name: "Dashboard Layout", href: "#dashboard" },
            { name: "Product Cards", href: "#product-cards" },
            { name: "Navigation", href: "#navigation" },
            { name: "Modal Dialog", href: "#modal" },
            { name: "Data Table", href: "#data-table" },
            { name: "Notifications", href: "#notifications" },
            { name: "Multi-Step Form", href: "#multi-step" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="bg-muted/50 hover:bg-muted border rounded-lg p-3 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Registration Form Example */}
        <section id="registration-form" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">User Registration Form</h2>
          <p className="text-muted-foreground mb-6">
            A complete registration form with validation states, loading indicators, and responsive layout.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-6">
              <div className="max-w-md mx-auto bg-background border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-1">Create Account</h3>
                <p className="text-sm text-muted-foreground mb-6">Enter your details to get started</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Password</label>
                    <input
                      type="password"
                      placeholder="Min. 8 characters"
                      className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <button className="w-full h-10 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                    Create Account
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Already have an account?{" "}
                    <a href="#" className="text-primary hover:underline">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<card data-variant="elevated" class="max-w-md mx-auto">
  <card-header>
    <card-title>Create Account</card-title>
    <card-description>Enter your details to get started</card-description>
  </card-header>
  
  <card-body>
    <form class="d-flex flex-col gap-4">
      <div class="d-grid grid-cols-2 gap-4">
        <form-field>
          <label>First Name</label>
          <input-field placeholder="John"></input-field>
        </form-field>
        <form-field>
          <label>Last Name</label>
          <input-field placeholder="Doe"></input-field>
        </form-field>
      </div>
      
      <form-field>
        <label>Email</label>
        <input-field type="email" placeholder="john@example.com"></input-field>
      </form-field>
      
      <form-field>
        <label>Password</label>
        <input-field type="password" placeholder="Min. 8 characters"></input-field>
      </form-field>
      
      <btn data-variant="primary" class="w-full">Create Account</btn>
      
      <p class="text-sm text-center text-muted">
        Already have an account? <a href="/login">Sign in</a>
      </p>
    </form>
  </card-body>
</card>`}
            language="html"
          />
        </section>

        {/* Dashboard Layout Example */}
        <section id="dashboard" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Layout</h2>
          <p className="text-muted-foreground mb-6">
            A responsive dashboard with sidebar navigation, header, and content area.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-4">
              <div className="bg-background border rounded-lg overflow-hidden shadow-sm">
                {/* Mini Dashboard Preview */}
                <div className="flex h-64">
                  {/* Sidebar */}
                  <div className="w-48 bg-muted/30 border-r p-3 hidden md:block">
                    <div className="font-semibold text-sm mb-4">Dashboard</div>
                    <div className="space-y-1">
                      {["Overview", "Analytics", "Reports", "Settings"].map((item, i) => (
                        <div
                          key={item}
                          className={`text-xs px-2 py-1.5 rounded ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="h-10 border-b px-4 flex items-center justify-between">
                      <span className="text-xs font-medium">Overview</span>
                      <div className="w-6 h-6 rounded-full bg-muted"></div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-muted/50 rounded-lg p-3">
                            <div className="text-xs text-muted-foreground mb-1">Metric {i}</div>
                            <div className="text-lg font-semibold">{i * 1234}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-muted/30 rounded-lg h-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<div class="d-flex min-h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-surface-secondary border-r p-4">
    <div class="font-bold mb-6">Dashboard</div>
    
    <nav class="d-flex flex-col gap-1">
      <a href="#" class="nav-link active">Overview</a>
      <a href="#" class="nav-link">Analytics</a>
      <a href="#" class="nav-link">Reports</a>
      <a href="#" class="nav-link">Settings</a>
    </nav>
  </aside>
  
  <!-- Main Content -->
  <main class="flex-1 d-flex flex-col">
    <!-- Header -->
    <header class="h-16 border-b px-6 d-flex items-center justify-between">
      <h1 class="text-xl font-semibold">Overview</h1>
      <avatar data-size="sm"></avatar>
    </header>
    
    <!-- Content -->
    <div class="flex-1 p-6">
      <!-- Stats Cards -->
      <div class="d-grid grid-cols-3 gap-4 mb-6">
        <card>
          <card-body>
            <div class="text-muted text-sm">Total Revenue</div>
            <div class="text-2xl font-bold">$45,231</div>
          </card-body>
        </card>
        <!-- More cards... -->
      </div>
      
      <!-- Chart Area -->
      <card>
        <card-header>
          <card-title>Analytics</card-title>
        </card-header>
        <card-body>
          <!-- Chart content -->
        </card-body>
      </card>
    </div>
  </main>
</div>`}
            language="html"
          />
        </section>

        {/* Product Cards Example */}
        <section id="product-cards" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Product Card Grid</h2>
          <p className="text-muted-foreground mb-6">
            An e-commerce product grid with responsive layout, badges, and hover effects.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Wireless Headphones", price: "$199", badge: "New", image: "/wireless-headphones.png" },
                  { name: "Smart Watch Pro", price: "$349", badge: "Sale", image: "/smartwatch-product.png" },
                  { name: "Portable Speaker", price: "$79", badge: null, image: "/portable-speaker.png" },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="bg-background border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[3/2] bg-muted/50">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <span
                          className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded-full ${product.badge === "Sale" ? "bg-red-500 text-white" : "bg-primary text-primary-foreground"}`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">{product.name}</h3>
                      <p className="text-lg font-semibold text-primary">{product.price}</p>
                      <button className="w-full mt-3 h-9 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<div class="d-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <card class="overflow-hidden group hover:shadow-lg transition-shadow">
    <div class="position-relative aspect-3/2">
      <img src="product.jpg" alt="Product" class="w-full h-full object-cover">
      <badge data-variant="primary" class="position-absolute top-2 left-2">New</badge>
    </div>
    
    <card-body>
      <card-title>Wireless Headphones</card-title>
      <p class="text-lg font-bold text-primary">$199</p>
      <btn data-variant="primary" class="w-full mt-3">Add to Cart</btn>
    </card-body>
  </card>
  
  <!-- More products... -->
</div>`}
            language="html"
          />
        </section>

        {/* Navigation Example */}
        <section id="navigation" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
          <p className="text-muted-foreground mb-6">
            A responsive navigation header with dropdown menus and mobile toggle.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-4">
              <div className="bg-background border rounded-lg shadow-sm">
                <div className="h-14 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className="font-bold">Brand</span>
                    <nav className="hidden md:flex items-center gap-6">
                      {["Products", "Solutions", "Pricing", "Docs"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm text-muted-foreground hover:text-foreground">Sign In</button>
                    <button className="h-8 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<nav class="h-16 border-b bg-surface-primary">
  <div class="container h-full d-flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="font-bold text-xl">Brand</a>
    
    <!-- Desktop Navigation -->
    <div class="d-none md:d-flex items-center gap-8">
      <a href="#" class="nav-link">Products</a>
      <dropdown>
        <dropdown-trigger>Solutions</dropdown-trigger>
        <dropdown-content>
          <dropdown-item>For Teams</dropdown-item>
          <dropdown-item>For Enterprise</dropdown-item>
          <dropdown-item>For Startups</dropdown-item>
        </dropdown-content>
      </dropdown>
      <a href="#" class="nav-link">Pricing</a>
      <a href="#" class="nav-link">Docs</a>
    </div>
    
    <!-- Actions -->
    <div class="d-flex items-center gap-4">
      <btn data-variant="secondary" data-size="sm">Sign In</btn>
      <btn data-variant="primary" data-size="sm">Get Started</btn>
    </div>
    
    <!-- Mobile Menu Toggle -->
    <btn data-variant="secondary" class="md:d-none" aria-label="Menu">
      <icon name="menu"></icon>
    </btn>
  </div>
</nav>`}
            language="html"
          />
        </section>

        {/* Modal Dialog Example */}
        <section id="modal" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Modal Dialog</h2>
          <p className="text-muted-foreground mb-6">
            A confirmation modal with backdrop, header, body, and action buttons.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-6 flex items-center justify-center min-h-64">
              <div className="bg-background border rounded-xl shadow-xl max-w-sm w-full">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Delete Item?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This action cannot be undone. The item will be permanently removed.
                  </p>
                </div>
                <div className="p-4 flex justify-end gap-3">
                  <button className="h-9 px-4 border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                    Cancel
                  </button>
                  <button className="h-9 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<modal data-open="true">
  <modal-backdrop></modal-backdrop>
  
  <modal-content>
    <modal-header>
      <modal-title>Delete Item?</modal-title>
      <modal-description>
        This action cannot be undone. The item will be permanently removed.
      </modal-description>
    </modal-header>
    
    <modal-footer>
      <btn data-variant="secondary" data-action="close">Cancel</btn>
      <btn data-variant="error">Delete</btn>
    </modal-footer>
  </modal-content>
</modal>

<!-- Trigger -->
<btn data-variant="error" data-modal-trigger="delete-modal">
  Delete Item
</btn>`}
            language="html"
          />
        </section>

        {/* Data Table Example */}
        <section id="data-table" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Data Table</h2>
          <p className="text-muted-foreground mb-6">
            A styled data table with sorting indicators, status badges, and actions.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-4">
              <div className="bg-background border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium">Name</th>
                      <th className="text-left p-3 text-sm font-medium">Email</th>
                      <th className="text-left p-3 text-sm font-medium">Status</th>
                      <th className="text-left p-3 text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { name: "John Doe", email: "john@example.com", status: "Active" },
                      { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
                      { name: "Bob Johnson", email: "bob@example.com", status: "Inactive" },
                    ].map((user) => (
                      <tr key={user.email} className="hover:bg-muted/30">
                        <td className="p-3 text-sm font-medium">{user.name}</td>
                        <td className="p-3 text-sm text-muted-foreground">{user.email}</td>
                        <td className="p-3">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : user.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="text-sm text-primary hover:underline">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<table data-variant="striped" data-hover="true">
  <thead>
    <tr>
      <th data-sortable="true">Name</th>
      <th data-sortable="true">Email</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td><badge data-variant="success">Active</badge></td>
      <td>
        <btn data-variant="secondary" data-size="sm">Edit</btn>
      </td>
    </tr>
    <!-- More rows... -->
  </tbody>
</table>

<!-- With Pagination -->
<pagination 
  data-total="100" 
  data-per-page="10" 
  data-current="1">
</pagination>`}
            language="html"
          />
        </section>

        {/* Notifications Example */}
        <section id="notifications" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Alert Notifications</h2>
          <p className="text-muted-foreground mb-6">
            Different types of alert and toast notifications for user feedback.
          </p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-6 space-y-4">
              {[
                {
                  type: "info",
                  title: "Information",
                  message: "Your profile has been updated successfully.",
                  bg: "bg-blue-50 border-blue-200",
                  icon: "text-blue-500",
                },
                {
                  type: "success",
                  title: "Success",
                  message: "Your changes have been saved.",
                  bg: "bg-green-50 border-green-200",
                  icon: "text-green-500",
                },
                {
                  type: "warning",
                  title: "Warning",
                  message: "Your subscription will expire in 3 days.",
                  bg: "bg-yellow-50 border-yellow-200",
                  icon: "text-yellow-500",
                },
                {
                  type: "error",
                  title: "Error",
                  message: "Failed to process your request. Please try again.",
                  bg: "bg-red-50 border-red-200",
                  icon: "text-red-500",
                },
              ].map((alert) => (
                <div key={alert.type} className={`${alert.bg} border rounded-lg p-4 flex items-start gap-3`}>
                  <div
                    className={`w-5 h-5 rounded-full ${alert.icon} flex items-center justify-center text-xs font-bold`}
                  >
                    {alert.type === "info"
                      ? "i"
                      : alert.type === "success"
                        ? "✓"
                        : alert.type === "warning"
                          ? "!"
                          : "×"}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CodeBlock
            code={`<!-- Alert Component -->
<alert data-variant="info">
  <alert-title>Information</alert-title>
  <alert-description>Your profile has been updated.</alert-description>
</alert>

<alert data-variant="success">
  <alert-title>Success</alert-title>
  <alert-description>Your changes have been saved.</alert-description>
</alert>

<alert data-variant="warning">
  <alert-title>Warning</alert-title>
  <alert-description>Your subscription expires soon.</alert-description>
</alert>

<alert data-variant="error">
  <alert-title>Error</alert-title>
  <alert-description>Failed to process request.</alert-description>
</alert>

<!-- Toast Notifications -->
<toast data-variant="success" data-position="top-right">
  File uploaded successfully!
</toast>`}
            language="html"
          />
        </section>

        {/* Multi-Step Form Example */}
        <section id="multi-step" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">Multi-Step Form</h2>
          <p className="text-muted-foreground mb-6">A wizard-style form with step indicators and navigation.</p>

          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted/30 p-6">
              <div className="bg-background border rounded-xl p-6 max-w-lg mx-auto">
                {/* Steps Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {["Account", "Profile", "Review"].map((step, i) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span className={`ml-2 text-sm ${i === 0 ? "font-medium" : "text-muted-foreground"}`}>
                        {step}
                      </span>
                      {i < 2 && <div className="w-12 h-px bg-border mx-4"></div>}
                    </div>
                  ))}
                </div>

                {/* Form Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Password</label>
                    <input
                      type="password"
                      placeholder="Create a strong password"
                      className="w-full h-10 px-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button className="h-9 px-4 border rounded-lg text-sm font-medium text-muted-foreground" disabled>
                    Previous
                  </button>
                  <button className="h-9 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            code={`<card class="max-w-lg mx-auto">
  <card-body>
    <!-- Steps Component -->
    <steps data-current="1">
      <step data-status="complete">Account</step>
      <step data-status="current">Profile</step>
      <step data-status="upcoming">Review</step>
    </steps>
    
    <!-- Step 1: Account -->
    <div data-step="1">
      <form-field>
        <label>Email Address</label>
        <input-field type="email" placeholder="you@example.com"></input-field>
      </form-field>
      
      <form-field>
        <label>Password</label>
        <input-field type="password" placeholder="Create a password"></input-field>
      </form-field>
    </div>
    
    <!-- Step 2: Profile (hidden initially) -->
    <div data-step="2" class="d-none">
      <form-field>
        <label>Full Name</label>
        <input-field placeholder="John Doe"></input-field>
      </form-field>
      
      <form-field>
        <label>Company</label>
        <input-field placeholder="Acme Inc"></input-field>
      </form-field>
    </div>
    
    <!-- Navigation -->
    <div class="d-flex justify-between mt-6">
      <btn data-variant="secondary" data-action="prev" disabled>Previous</btn>
      <btn data-variant="primary" data-action="next">Next Step</btn>
    </div>
  </card-body>
</card>`}
            language="html"
          />
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>

          <div className="grid gap-4">
            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Use Semantic Structure</h4>
              <p className="text-sm text-muted-foreground">
                Always use semantic HTML elements and ARIA attributes for accessibility. The framework's custom elements
                are designed to work with screen readers.
              </p>
            </div>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Combine Components Wisely</h4>
              <p className="text-sm text-muted-foreground">
                Components are designed to work together. Use cards to group related content, forms for user input, and
                modals for focused interactions.
              </p>
            </div>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Leverage Utilities</h4>
              <p className="text-sm text-muted-foreground">
                Use utility classes for spacing, layout, and responsive design. This keeps your markup clean and
                maintainable.
              </p>
            </div>

            <div className="bg-muted/50 border rounded-lg p-4">
              <h4 className="font-medium mb-2">Progressive Enhancement</h4>
              <p className="text-sm text-muted-foreground">
                The framework is pure CSS, so all components work without JavaScript. Add JavaScript only for
                interactive behaviors like form validation or modal triggers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
