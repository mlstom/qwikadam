import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/header/header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

type MyStateProps = {
  openCart: boolean
}

export const MyState = createContextId<MyStateProps>('global-state')

export default component$(() => {
  const globalState = useStore({
    openCart: false,
  })
  useContextProvider(MyState, globalState)

  return <>
    <Header />
    <Slot />;
  </>
});
