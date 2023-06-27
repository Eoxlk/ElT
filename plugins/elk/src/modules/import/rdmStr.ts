export default (len: number, chars: string) => {
  return [...crypto.getRandomValues(new Uint8Array(len)).map(n => n % chars.length)].map(n => chars.charAt(n)).join('');
};