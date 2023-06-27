import { storage } from '@vendetta/plugin';
// storage.nameChars ??= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

const chars = "abcdefghijklmnopqrstuvwxyz";
export default (len: number) => [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % chars.length)].map(n => chars.charAt(n)).join('');