import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

import { AuthStore } from "@/app/stores/authStore/authStore";

export interface IAuthStore extends Instance<typeof AuthStore> {}
export interface IAuthStoreSnapshotIn extends SnapshotIn<typeof AuthStore> {}
export interface IAuthStoreSnapshotOut extends SnapshotOut<typeof AuthStore> {}
