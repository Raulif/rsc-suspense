import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">React Server Components and Suspense</h1>
      <p>
        This demo app contains 5 simple pages that show how React and NextJS work with React Server Components and
        Suspense.
      </p>
      <p>
        The slow-loading pages have a simulated 3 second database call. Try the different versions to see how the UI
        feels when we implement <Link href="/slow/suspense">page-level Suspense (via a loading.tsx file)</Link>,
        <Link href="/slow/component-suspense">component-level Suspense (via an explicit Suspense boundary)</Link> or{" "}
        <Link href="/slow/no-suspense">no Suspense at all.</Link>
      </p>
      <ul>
        <li>
          <Link href="/fast/no-suspense">Fast page with no Suspense</Link>
        </li>
        <li>
          <Link href="/fast/suspense">Fast page with Suspense</Link>
        </li>
        <li>
          <Link href="/slow/no-suspense">Slow page with no Suspense</Link>
        </li>
        <li>
          <Link href="/slow/suspense">Slow page with Suspense (page-level)</Link>
        </li>
        <li>
          <Link href="/slow/component-suspense">Slow page with Suspense (component-level)</Link>
        </li>
      </ul>
    </div>
  );
}
