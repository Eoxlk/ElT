import Settings from './Settings'
import { storage } from "@vendetta/plugin";
import './modules/rdmFsName';

storage.nameLength ??= 8;
storage.nameChars ??= "abcdefghijklmnopqrstuvwxyz"

export default {
    settings: Settings
}
