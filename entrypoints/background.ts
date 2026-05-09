export default defineBackground(() => {
  browser.action.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id!, { action: "toggle-ui" });
  });
});
