const defaultChars = "abcdefghijklmnopqrstuvwxyz";

export default (len: number, chars: string) => {
  chars = chars || defaultChars;
  return [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % chars.length)].map(n => chars.charAt(n)).join('');
};
