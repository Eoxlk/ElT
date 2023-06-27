import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello world!");
        logger.log("Works!")
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}