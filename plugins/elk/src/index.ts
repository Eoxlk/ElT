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
        unpatch = after("componentDidUpdate", ChatInput.prototype, function () {
            this.props.CanSendVoiceMessage = false;
        });
    },
    onUnload: unpatch
}