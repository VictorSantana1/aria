import ReactDOM from "react-dom/client";
import App from "./components/App";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createContext } from "react";
import { Extension } from "@mui/icons-material";

export default defineContentScript({
  matches: ["<all_urls>"],
  // cssInjectionMode: "ui",
  async main(ctx) {
    const host = document.createElement("div");
    host.id = "aria-root";
    document.body.appendChild(host);

    const shadow = host.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    shadow.appendChild(container);

    // configura o emotion para injetar CSS no shadow root
    const cache = createCache({
      key: "aria",
      container: shadow,
    });

    const root = ReactDOM.createRoot(container);
    root.render(
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>,
    );

    ctx.onInvalidated(() => {
      root.unmount();
      host.remove();
    });
  },
});
