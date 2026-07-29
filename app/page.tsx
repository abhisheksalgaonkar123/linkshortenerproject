import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-100">Link Shortener</h1>
        <div className="flex items-center gap-3">
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <button className="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">
                  Sign up
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-16">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-sm md:p-12">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">Authentication ready</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
            Create your first account and start shortening links.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Use the sign-in and sign-up actions in the top-right corner. Once you are authenticated,
            your profile icon appears there automatically.
          </p>
        </div>
      </main>
    </div>
  );
}
