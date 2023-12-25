import Link from 'next/link';

// import Contact from '@/components/Contact';
import VideoBanner from '@/components/Shared/VideoBanner';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="border-t border-base-300 w-full flex  overflow-y-auto justify-center min-h-[60vh]  max-h-screen py-12 md:pb-24 ">
      <div className=" px-4 md:px-0">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space--4 text-center">
            <div className="space-y-2 mb-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Summarize anything on a click.
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Chat TLDR helps you summarize any piece of text into concise,
                easy to digest content so you can free yourself from information
                overload ⚡.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex justify-center space-x-2">
                <Link href="/chat">
                  <Button className="bg-white text-black" type="submit">
                    Chat
                  </Button>
                </Link>
                <Link href="/bill/history">
                  <Button className="bg-transparent text-white" type="submit">
                    History
                  </Button>
                </Link>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Have more query? - {''}
                <Link
                  className="underline underline-offset-2 text-white"
                  href="https://shahriarhasan.vercel.app"
                >
                  visit here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <VideoBanner />
      </div>
    </section>
  );
}
