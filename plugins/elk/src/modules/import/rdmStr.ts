import { storage } from "@vendetta/plugin";

const chars = storage.nameChars
export default (len: number) => [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % chars.length)].map(n => chars.charAt(n)).join('');