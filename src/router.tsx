import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Keeps router-generated links (e.g. to "/") correct when the site is served from a
// subfolder, which is how GitHub Pages project sites work. "" means a domain root.
const basepath = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    ...(basepath === "" ? {} : { basepath }),
    context: { queryClient },
    scrollRestoration: true,
    // Lets Query own freshness; set caching defaults on the QueryClient, not the router.
    defaultPreloadStaleTime: 0,
  });

  return router;
};
