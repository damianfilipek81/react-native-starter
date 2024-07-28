import { AppNavigator } from "@/app/navigation/Navigator";
import { Providers } from "@/app/providers/providers";
import { observer } from "mobx-react-lite";
import React from "react";

const Root = () => {
  return <AppNavigator />;
};

const ObservedRoot = observer(Root);

export default function App() {
  return (
    <Providers>
      <ObservedRoot />
    </Providers>
  );
}
