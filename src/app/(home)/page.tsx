import { HydrateClient, trpc } from "@/trpc/server";
import React, { Suspense } from "react";
import { Page } from "./client";
import { ErrorBoundary } from "react-error-boundary";

const Home = async () => {
  void trpc.hello.prefetch({ text: "Software Engineer Anshal Ali" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading....</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};

export default Home;
