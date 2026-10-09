
import { Suspense } from "react";
import Hero from "./Components/Hero/Hero";
import HomeContent from "./home/page";

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        {/* main page - section 1 - increase */}
        <Suspense fallback={<div>Loading...</div>}>
          <HomeContent/>
        </Suspense>
      </main>
    </>
  );
}
