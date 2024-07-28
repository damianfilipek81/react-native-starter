import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// eslint-disable-next-line no-shadow
export enum StackScreens {
  SignUpScreen = "SignUpScreen",
}

export type StackParamList = {
  [StackScreens.SignUpScreen]: undefined;
};

type ScreenProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};

export type SignUpScreenProps = ScreenProps<StackScreens.SignUpScreen>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
