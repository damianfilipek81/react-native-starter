import { useContext } from "react";

import { IAppStore } from "@/app/stores/appStore/appStore.types";
import { StoreContext } from "@/app/providers/storeProvider";
import { IAuthStore } from "@/app/stores/authStore/authStore.types";

const useAppStore = (): IAppStore => useContext(StoreContext);
const useAuthStore = (): IAuthStore => useContext(StoreContext).AuthStore;

export { useAppStore, useAuthStore };
