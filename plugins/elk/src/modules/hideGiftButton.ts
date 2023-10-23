import { findByName, findByProps } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { findInReactTree } from "@vendetta/utils";

const ChatInput = findByName("ChatInput");

let unpatch: () => boolean;

export default {
    onLoad() {
        unpatch = after("render", ChatInput.prototype, (_, ret) => {
            const input = findInReactTree(ret, t => "canSendVoiceMessages" in t.props);
            if (input) {
              input.props.canSendVoiceMessages = false;
            }
        });
    },
    onUnload: unpatch
};