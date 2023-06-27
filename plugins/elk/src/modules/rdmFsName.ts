import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import randomString from "./import/rdmStr";

// Default settings
storage.nameLength ??= 8;

const uploadModule = findByProps("uploadLocalFiles");

export const onUnload = before("uploadLocalFiles", uploadModule, (args) => { 
    const { items } = args[0];
    if (!items) return;

    const rawLength = parseInt(storage.nameLength);
    const length = isNaN(rawLength) ? 8 : rawLength;

    for (const i of items) {
        const extIdx = i.filename.lastIndexOf(".");
        const ext = extIdx !== -1 ? i.filename.slice(extIdx) : "";
        const name = randomString(length);
        i.filename = name + ext;
        if (i.item) i.item.filename = name + ext;
    }
});
