import Settings from './Settings'
import { storage } from "@vendetta/plugin";
import { findByName, findByProps } from '@vendetta/metro';
import { after } from '@vendetta/patcher';
import { getAssetIDByName } from '@vendetta/ui/assets';
import { findInReactTree } from '@vendetta/utils';
import './modules/rdmFsName';

storage.nameLength ??= 8;
storage.nameChars ??= "abcdefghijklmnopqrstuvwxyz"

const ChatInput = findByName("ChatInput");
const ChatInputWrapper = findByProps("ChatInput");

let unpatch: () => boolean;

export default {
    settings: Settings,
    onLoad() {
        unpatch = after(ChatInputWrapper.ChatInput.prototype, 'render', (_, ret) => {
            const comp: any = findInReactTree(ret, searchTree => typeof searchTree.props?.canSendVoiceMessage === 'boolean');
            if (!comp) return;
            comp.props.canSendVoiceMessage = false;
        });
    },
    onUnload: unpatch
}
