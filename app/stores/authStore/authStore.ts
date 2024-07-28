import {
  flow,
  types,
} from "mobx-state-tree";

import { getTypedEnv } from "@/app/utils/mstTyped";
import { log } from "@/app/services/logger";

const AuthStore = types
  .model("AuthStore", {})
  .actions((self) => {
    const { supabase } = getTypedEnv(self);
    return {
      signUp: flow(function* (email: string, password: string) {
        const { user, error } = yield supabase.auth.signUp({ email, password });
        if (error) {
          log.error("Error signing up:", error.message);
          return { error };
        }
        log.info("User signed up:", user);
        return { user };
      }),
      signIn: flow(function* (email: string, password: string) {
        const { user, error } = yield supabase.auth.signInWithPassword({ email, password });
        if (error) {
          log.error("Error signing in:", error.message);
          return { error };
        }
        log.info("User signed in:", user);
        return { user };
      }),
      signInWithGoogle: flow(function* () {
        const { user, error } = yield supabase.auth.signInWithOAuth({
          provider: "google",
        });
        if (error) {
          log.error("Error signing in with Google:", error.message);
          return { error };
        }
        log.info("User signed in with Google:", user);
        return { user };
      }),
    };
  })
  .actions(() => {
    return {
      initialize: flow(function* () {}),
      reset() {},
    };
  });

export { AuthStore };
