import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/atoms/toaster";
import { Footer } from "@/components/molecules/footer";

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (session?.error === "RefreshAccessTokenError") {
    redirect("/logout");
  }

  if (!session) {
    redirect("/welcome");
  }

  return (
    <main className="min-h-svh bg-white p-6">
      {children}
      <Toaster />
      <Footer />
    </main>
  );
}
