import Settings from './Settings'
import { storage } from "@vendetta/plugin";
import { findByName } from '@vendetta/metro';
import { after } from '@vendetta/patcher';
import { getAssetIDByName } from '@vendetta/ui/assets';
import { findInReactTree } from '@vendetta/utils';
import './modules/rdmFsName';

storage.nameLength ??= 8;
storage.nameChars ??= "abcdefghijklmnopqrstuvwxyz"

const ChatInput = findByName("ChatInput");

let unpatch: () => boolean;

export default {
    settings: Settings,
    onLoad() {
        const blockList = ["ic_thread_normal_24px", "ic_gift"].map(n => getAssetIDByName(n));
        unpatch = after("render", ChatInput.prototype, (_, ret) => {
            const input = findInReactTree(ret, t => "forceAnimateButtons" in t.props && t.props.actions);
            input.props.CanSendVoiceMessage = false;
            input.props.hideGiftButton = true;
        });
    },
    onUnload: unpatch
}