import { storage } from '@vendetta/plugin';

let chars = storage.nameChars !== undefined ? storage.nameChars : "abcdefghijklmnopqrstuvwxyz";
export default (len: number) => [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % chars.length)].map(n => chars.charAt(n)).join('');