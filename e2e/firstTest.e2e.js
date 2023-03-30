describe("createAccount", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should render app", async () => {
    await expect(element(by.id("view"))).toBeVisible();
    await expect(element(by.text("Title"))).toBeVisible();
    await expect(element(by.text("Test App"))).toBeVisible();
  });
  it("should show hidden text", async () => {
    await element(by.id("pressable")).tap();
    await expect(element(by.id("hidden"))).toBeVisible();
  });
});
