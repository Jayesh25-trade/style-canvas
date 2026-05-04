import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl text-primary">404</div>
        <h2 className="mt-4 font-display text-3xl">Off the page</h2>
        <p className="mt-2 text-muted-foreground italic">
          That spread isn't in this issue.
        </p>
        <Link to="/" className="mt-6 inline-block smallcaps border-b border-ink pb-1">
          Return to cover →
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ATELIER 22 — Issue 22, Autumn" },
      { name: "description", content: "A small studio making clothes the slow way. Shop the Autumn issue from ATELIER 22." },
      { property: "og:title", content: "ATELIER 22 — Issue 22, Autumn" },
      { property: "og:description", content: "A small studio making clothes the slow way. Shop the Autumn issue from ATELIER 22." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "ATELIER 22 — Issue 22, Autumn" },
      { name: "twitter:description", content: "A small studio making clothes the slow way. Shop the Autumn issue from ATELIER 22." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81f9a844-bd6b-4252-8362-57c1887990f8/id-preview-747a0355--061e247a-f33e-4d87-8a0c-8a18973df79d.lovable.app-1777899196497.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81f9a844-bd6b-4252-8362-57c1887990f8/id-preview-747a0355--061e247a-f33e-4d87-8a0c-8a18973df79d.lovable.app-1777899196497.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
