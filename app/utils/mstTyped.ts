import { getEnv, getRoot } from "mobx-state-tree";
import { IAnyStateTreeNode } from "mobx-state-tree/dist/internal";

import { IAppStore } from "@/app/stores/appStore/appStore.types";
import { IStoreEnv } from "@/app/stores/storeEnvironment/storeEnvironment";

function getTypedEnv(self: IAnyStateTreeNode): IStoreEnv {
  return getEnv(self) as IStoreEnv;
}
function getTypedRoot(self: IAnyStateTreeNode): IAppStore {
  return getRoot<IAppStore>(self);
}

export { getTypedEnv, getTypedRoot };
