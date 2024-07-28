import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

import { AppStore } from "@/app/stores/appStore/appStore";

export interface IAppStore extends Instance<typeof AppStore> {}
export interface IAppStoreSnapshotIn extends SnapshotIn<typeof AppStore> {}
export interface IAppStoreSnapshotOut extends SnapshotOut<typeof AppStore> {}
