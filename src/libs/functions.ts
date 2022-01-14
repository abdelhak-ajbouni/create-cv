
export function toCamelCase(str: string): string {
  return str.toLowerCase().replace(/\s(.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/\s/g, '');
}