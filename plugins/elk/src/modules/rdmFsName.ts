import { findByProps } from '@vendetta/metro';
import { before } from '@vendetta/patcher';
import { storage } from '@vendetta/plugin';
import randomString from './import/rdmStr';
let fileUploadModule = findByProps('uploadLocalFiles');

storage.nameLength ??= 8;
storage.nameChars ??= "abcdefghijklmnopqrstuvwxyz"; 

export const onUnload = before('uploadLocalFiles', fileUploadModule, files => {
  if (!files[0]) return;

  let { fileItems } = files[0],
    parsedNameLength = parseInt(storage.nameLength),
    length = isNaN(parsedNameLength) ? 8 : parsedNameLength,
    charsSet = storage.nameChars; 

  for (const index of fileItems) {
    let extensionIndex = index.filename.lastIndexOf('.'),
      fileExtension = extensionIndex !== -1 ? index.filename.slice(extensionIndex) : '',
      randomFileName = randomString(length, charsSet);
      
    index.filename = randomFileName + fileExtension;
    if (index.item) index.item.filename = randomFileName + fileExtension;
  }
});
