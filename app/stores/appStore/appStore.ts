import {
  IDisposer,
  applySnapshot,
  flow,
  getSnapshot,
  onSnapshot,
  types,
} from "mobx-state-tree";

import { getTypedEnv } from "@/app/utils/mstTyped";
import { AuthStore } from "@/app/stores/authStore/authStore";

const APP_STORE_MODEL_NAME_KEY = "AppStore";
const AppStore = types
  .model(APP_STORE_MODEL_NAME_KEY, {
    AuthStore: types.optional(
      types.late(() => AuthStore),
      {},
    ),  })
  .volatile<{
    onSnapshotDisposer: undefined | IDisposer;
  }>(() => {
    return {
      onSnapshotDisposer: undefined,
    };
  })
  .actions((self) => {
    const { setItemWithMMKV, getItemWithMMKV } = getTypedEnv(self);
    return {
      saveSnapshot() {
        const snapshot = getSnapshot(self);
        setItemWithMMKV(APP_STORE_MODEL_NAME_KEY, JSON.stringify(snapshot));
        console.log("Saved snapshot for MST Store");
      },
      loadSnapshot() {
        const snapshotString = getItemWithMMKV(
          APP_STORE_MODEL_NAME_KEY,
        ) as string;
        if (snapshotString) {
          applySnapshot(self, JSON.parse(snapshotString));
          console.log("Loaded snapshot for MST Store");
        }
      },
      disposeOnSnapshot(): void {
        if (self.onSnapshotDisposer) self.onSnapshotDisposer();
      },
    };
  })
  .actions((self) => {
    return {
      initializeOnSnapshot(): void {
        self.disposeOnSnapshot();
        self.onSnapshotDisposer = onSnapshot(self, () => {
          self.saveSnapshot();
        });
      },
      initialize: flow(function* () {}),
      reset() {},
    };
  });

export { AppStore, APP_STORE_MODEL_NAME_KEY };
