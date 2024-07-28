import { AppStore } from "@/app/stores/appStore/appStore";
import { IAppStore } from "@/app/stores/appStore/appStore.types";
import { storeEnvironment } from "@/app/stores/storeEnvironment/storeEnvironment";

const setupAppStore = async (): Promise<IAppStore> => {
  const appStore = AppStore.create({}, storeEnvironment);

  // Load the initial snapshot if available
  appStore.loadSnapshot();

  // Save snapshot on every change
  appStore.saveSnapshot();

  appStore.reset();
  await appStore.initialize();
  appStore.initializeOnSnapshot();
  return appStore as IAppStore;
};

export { setupAppStore };
