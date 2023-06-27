import { storage } from '@vendetta/plugin';
storage.nameChars ??= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

export default (lenght: number, characters = storage.nameChars) => [...crypto.getRandomValues(new Uint8Array(lenght)).map(n => n % characters.length)].map(n => characters.charAt(n)).join('');
