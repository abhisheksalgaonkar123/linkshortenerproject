import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  BarChart3,
  Clock,
  Link2,
  QrCode,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant link shortening",
    description:
      "Paste any long URL and get a clean, compact short link in milliseconds. No sign-up required to get started.",
  },
  {
    icon: Link2,
    title: "Custom aliases",
    description:
      "Create branded, memorable short links with your own custom slug – perfect for sharing on social media or print.",
  },
  {
    icon: BarChart3,
    title: "Click analytics",
    description:
      "Track every click in real time. See total visits, referrers, countries, and device types from a clean dashboard.",
  },
  {
    icon: QrCode,
    title: "QR code generation",
    description:
      "Every short link automatically gets a downloadable QR code so you can share it anywhere – even offline.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    description:
      "All redirects are served over HTTPS. Links are stored durably with high availability so they never go down.",
  },
  {
    icon: Clock,
    title: "Link expiration",
    description:
      "Set links to expire after a date or a maximum number of clicks, and manage or disable them any time.",
  },
];

const steps = [
  {
    step: "01",
    title: "Paste your long URL",
    description: "Drop any URL – no matter how long – into the input box.",
  },
  {
    step: "02",
    title: "Get your short link",
    description:
      "We generate a compact link instantly. Optionally set a custom alias.",
  },
  {
    step: "03",
    title: "Share & track",
    description:
      "Copy and share your link anywhere, then watch the click stats roll in.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight">Link Shortener</h1>
        <div className="flex items-center gap-3">
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <Button variant="outline">Sign in</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign up</Button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
          <Badge variant="secondary">Links, analytics, and QR codes in one place</Badge>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Shorten links. Track clicks. Grow smarter.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Turn long, unwieldy URLs into short, branded links you can share anywhere,
            then see exactly how they perform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SignUpButton mode="modal">
              <Button size="lg">Get started for free</Button>
            </SignUpButton>
            <Button size="lg" variant="outline" render={<a href="#features" />}>
              See features
            </Button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight">
              Everything you need in a link shortener
            </h3>
            <p className="mt-3 text-muted-foreground">
              From instant shortening to deep analytics, powerful tools to make every link count.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="mt-3 text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight">How it works</h3>
            <p className="mt-3 text-muted-foreground">
              Three steps and you&apos;re done – no account needed to try it out.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="text-center sm:text-left">
                <span className="text-sm font-semibold text-primary">{step}</span>
                <h4 className="mt-2 text-lg font-medium">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <Card className="px-8 py-12 text-center">
            <CardHeader className="items-center gap-2 justify-items-center">
              <CardTitle className="text-2xl">Ready to make your links work harder?</CardTitle>
              <CardDescription>
                Create a free account and start sharing smarter links today.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <SignUpButton mode="modal">
                <Button size="lg">Create your account</Button>
              </SignUpButton>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Link Shortener. All rights reserved.</p>
          <p>Built with Next.js and Clerk.</p>
        </div>
      </footer>
    </div>
  );
}
