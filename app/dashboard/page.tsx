import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 px-6 py-6 text-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Dashboard</h1>
        <UserButton />
      </header>
    </main>
  );
}
