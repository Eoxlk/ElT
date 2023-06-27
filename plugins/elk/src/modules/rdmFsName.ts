import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import randomString from "./import/rdmStr";
const uploadModule = findByProps("uploadLocalFiles");

export const onUnload = before('uploadLocalFiles', uploadModule, files => {
  if (!files[0]) return;
  const { items: fileList } = files[0];

  const rawNameLength = parseInt(storage.nameLength),
    fileNameLength = isNaN(rawNameLength) ? 8 : rawNameLength;

  for (const file of fileList) {
    const fileExtensionIndex = file.filename.lastIndexOf('.'),
      fileExtension = fileExtensionIndex !== -1 ? file.filename.slice(fileExtensionIndex) : '',
      newName = randomString(fileNameLength);
    file.filename = newName + fileExtension;
    if (file.item) file.item.filename = newName + fileExtension;
  }
});
