const features = [
  {
    icon: "⚡",
    title: "Instant Link Shortening",
    description:
      "Paste any long URL and get a clean, compact short link in milliseconds. No sign-up required to get started.",
  },
  {
    icon: "✏️",
    title: "Custom Aliases",
    description:
      "Create branded, memorable short links with your own custom slug – perfect for sharing on social media or print.",
  },
  {
    icon: "📊",
    title: "Click Analytics",
    description:
      "Track every click in real time. See total visits, referrers, countries, and device types from a clean dashboard.",
  },
  {
    icon: "📷",
    title: "QR Code Generation",
    description:
      "Every short link automatically gets a downloadable QR code so you can share it anywhere – even offline.",
  },
  {
    icon: "🗂️",
    title: "Link Management",
    description:
      "Organize all your short links in one place. Edit destinations, set expiry dates, or disable links at any time.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description:
      "All redirects are served over HTTPS. Links are stored durably with high availability so they never go down.",
  },
];

const steps = [
  {
    number: "1",
    title: "Paste your long URL",
    description: "Drop any URL – no matter how long – into the input box.",
  },
  {
    number: "2",
    title: "Get your short link",
    description:
      "We generate a compact link instantly. Optionally set a custom alias.",
  },
  {
    number: "3",
    title: "Share & track",
    description:
      "Copy and share your link anywhere, then watch the click stats roll in.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Nav */}
      <header className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
            LinkSnap
          </span>
          <a
            href="/shorten"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="flex flex-col flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">
            Shorten links.{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Amplify reach.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            LinkSnap turns unwieldy URLs into clean, shareable short links –
            complete with analytics, custom aliases, and QR codes, all in one
            place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/shorten"
              className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-colors shadow-md"
            >
              Shorten a URL – it&apos;s free
            </a>
            <a
              href="#features"
              className="rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-base font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              See features ↓
            </a>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="bg-zinc-50 dark:bg-zinc-900 py-20 px-6"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              Everything you need in a link shortener
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
              From instant shortening to deep analytics, LinkSnap gives you
              powerful tools to make every link count.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white dark:bg-zinc-800 p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col gap-3"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              How it works
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
              Three steps and you&apos;re done – no account needed to try it
              out.
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="text-center flex flex-col items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-indigo-600 py-16 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to make your links work harder?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-indigo-100">
            Join users around the world who rely on LinkSnap to manage and
            measure their links every day.
          </p>
          <a
            href="/shorten"
            className="inline-block rounded-full bg-white text-indigo-600 font-semibold px-8 py-3 hover:bg-indigo-50 transition-colors shadow-md"
          >
            Start shortening for free
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 py-8 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} LinkSnap. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
