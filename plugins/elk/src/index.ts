import Settings from './Settings'
import { storage } from "@vendetta/plugin";
import { findByName, findByProps } from '@vendetta/metro';
import patcher, { after } from '@vendetta/patcher';
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
        unpatch = patcher.after(ChatInputWrapper.ChatInput, 'render', (_, ret) => {
            const endpoint: any = findInReactTree(ret, r => typeof r.props?.hideGiftButton === 'boolean');
            if (!endpoint) return;
    
            endpoint.props.hideGiftButton = true;
        });
    },
    onUnload: unpatch
}
