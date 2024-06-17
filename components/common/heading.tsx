export default function Heading({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
