import { findByProps } from '@vendetta/metro';
import { before } from '@vendetta/patcher';
import { storage } from '@vendetta/plugin';
import randomString from './import/rdmStr';
let fileUploadModule = findByProps('uploadLocalFiles');

storage.nameLength ??= 8;

export const onUnload = before('uploadLocalFiles', fileUploadModule, files => {
  if (!files[0]) return;

  let { fileItems } = files[0],
    parsedNameLength = parseInt(storage.nameLength),
    length = isNaN(parsedNameLength) ? 8 : parsedNameLength;

  for (const index of fileItems) {
    let extensionIndex = index.filename.lastIndexOf('.'),
      fileExtension = extensionIndex !== -1 ? index.filename.slice(extensionIndex) : '',
      randomFileName = randomString(length);
    index.filename = randomFileName + fileExtension;
    if (index.item) index.item.filename = randomFileName + fileExtension;
  }
});

export { default as settings } from "../Settings";