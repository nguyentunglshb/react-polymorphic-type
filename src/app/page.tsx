import { Typography } from "@/components/typography/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography as="a" href="https://google.com">
        google
      </Typography>
    </main>
  );
}
