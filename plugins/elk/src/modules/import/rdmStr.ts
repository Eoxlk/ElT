import { storage } from "@vendetta/plugin";
export default (len: number) => [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % storage.nameChars.length)].map(n => storage.nameChars.charAt(n)).join('');
