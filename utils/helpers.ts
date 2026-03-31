export function getRandomString(length: number = 5): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getRandomEmail(): string {
  return `test_${Date.now()}@example.com`;
}

export function getRandomNumber(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}