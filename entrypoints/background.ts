export default defineBackground(() => {
  browser.action.onClicked.addListener((tab) => {
    browser.tabs.sendMessage(tab.id!, { action: "toggle-ui" });
  });

  // background.js
  browser.runtime.onMessage.addListener( async (message, sender, sendResponse) => {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    
    browser.tabs.sendMessage(tab.id!, message);
  });
});
