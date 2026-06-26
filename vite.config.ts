import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

// Standalone TanStack Start + Nitro config.
// Plugin order: tailwind → tsconfig paths → tanstack start → nitro (build only) → react.
export default defineConfig(({ command }) => ({
  server: { port: 8080 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Block accidental imports of server-only code into the client bundle.
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      // Route the server entry through src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    // Nitro builds the deployable server output. With no preset it auto-detects
    // the target (e.g. Vercel sets VERCEL=1 → vercel preset). Override locally
    // with the NITRO_PRESET env var if needed.
    ...(command === "build" ? [nitro()] : []),
    viteReact(),
  ],
}));
