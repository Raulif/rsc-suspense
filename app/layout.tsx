import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //we don't actually care about headers, this is just to get Next JS to treat all of our pages as
  //dynamic. Otherwise, when we create a production build all of our pages will be statically generated
  //and the demo won't show anything as it will all just load instantly as static HTML.
  const pageHeaders = headers();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative isolate flex min-h-svh w-full flex-col bg-white">
          <TopMenu />
          <main className="flex flex-1 flex-col pb-2 lg:px-2">
            <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
              <div className="mx-auto max-w-6xl">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

function TopMenu() {
  return (
    <header className="flex items-left justify-start gap-4 px-4 py-2">
      <NavLink href="/">Home</NavLink>

      <NavLink href="/component-suspense">Slow, component-level Suspense</NavLink>

    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="border-blue-500 border rounded-md px-4 py-2 bg-slate-100 hover:bg-slate-400" href={href}>
      {children}
    </a>
  );
}
