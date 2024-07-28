import { logger as createLogger } from "react-native-logs";

const config = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: "debug",
  transportOptions: {
    colors: {
      debug: "green",
      info: "blue",
      warn: "yellow",
      error: "red",
    },
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  fixedExtLvlLength: false,
  enabled: true,
};

const log = createLogger.createLogger<"debug" | "info" | "warn" | "error">(
  config,
);
export { log };
