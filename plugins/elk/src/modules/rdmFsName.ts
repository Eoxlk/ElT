import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import randomString from "./import/rdmStr";

storage.nameLength ??= 8;

const uploadModule = findByProps("uploadLocalFiles");

export const onUnload = before("uploadLocalFiles", uploadModule, (args) => { 
    const { items: fileList } = args[0];
    if (!fileList) return;

    const rawNameLength = parseInt(storage.fileNameLength);
    const fileNameLength = isNaN(rawNameLength) ? 8 : rawNameLength;

    for (const file of fileList) {
        const fileExtensionIndex = file.filename.lastIndexOf(".");
        const fileExtension = fileExtensionIndex !== -1 ? file.filename.slice(fileExtensionIndex) : "";
        const newName = randomString(fileNameLength);
        file.filename = newName + fileExtension;
        if (file.item) file.item.filename = newName + fileExtension;
    }
});
