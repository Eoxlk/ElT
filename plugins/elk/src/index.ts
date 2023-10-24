import { storage } from "@vendetta/plugin";
import Settings from "./Settings";
import './modules/rdmFsName';

storage.nameLength ??= 8;
storage.nameChars ??= "abcdefghijklmnopqrstuvwxyz"


export default {
    settings: Settings
}