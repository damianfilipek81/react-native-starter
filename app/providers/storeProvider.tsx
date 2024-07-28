import { isEmpty } from "lodash";
import React, {
  createContext,
  useEffect,
  useState,
  FC,
  PropsWithChildren,
} from "react";

import { IAppStore } from "@/app/stores/appStore/appStore.types";
import { setupAppStore } from "@/app/stores/setupAppStore";

const StoreContext = createContext<IAppStore>({} as IAppStore);

const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [appStore, setAppStore] = useState<IAppStore | null>(null);

  useEffect(() => {
    (async (): Promise<void> => {
      const store = await setupAppStore();
      setAppStore(store);
    })();
  }, []);

  if (!appStore || isEmpty(appStore)) return null;

  return (
    <StoreContext.Provider value={appStore}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
