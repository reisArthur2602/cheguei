import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster expand richColors position="top-center" />
        <App />
      </QueryClientProvider>
    </>
  </StrictMode>
);
