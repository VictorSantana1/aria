import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import ThemedRoot from "../utils/theme";
import SettingSession from "../components/configUi/SettingsUI";

export default defineContentScript({
  matches: ["<all_urls>"],
  // cssInjectionMode: "ui",
  async main(ctx) {
    const host = document.querySelector("#aria-root") as HTMLDivElement;
    const shadow = host.shadowRoot as ShadowRoot;

    const container = document.createElement("div") as HTMLDivElement;
    shadow.appendChild(container);

    // configura o emotion para injetar CSS no shadow root
    const cache = createCache({
      key: "aria",
      container: shadow,
    });

    const root = ReactDOM.createRoot(container);
    root.render(
      <CacheProvider value={cache}>
        <ThemedRoot>
          <SettingSession />
        </ThemedRoot>
      </CacheProvider>,
    );

    ctx.onInvalidated(() => {
      root.unmount();
      host.remove();
    });
  },
});
