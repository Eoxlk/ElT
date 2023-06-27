import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import randomString from "./import/rdmStr";
const fileUploadModule = findByProps("uploadLocalFiles");

storage.nameLength ??= 8;

export const onUnload = before('uploadLocalFiles', fileUploadModule, files => {
  const { fileItems } = files[0];
  if (!fileItems) return;

  const parsedNameLength = parseInt(storage.nameLength);
  const length = isNaN(parsedNameLength) ? 8 : parsedNameLength;

  for (const index of fileItems) {
    const extensionIndex = index.filename.lastIndexOf('.');
    const fileExtension = extensionIndex !== -1 ? index.filename.slice(extensionIndex) : '';

    const randomFileName = randomString(length);
    index.filename = randomFileName + fileExtension;
    if (index.item) index.item.filename = randomFileName + fileExtension;
  }
});
