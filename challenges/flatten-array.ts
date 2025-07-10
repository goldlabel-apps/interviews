/**
 * Task: Recursively flatten an arbitrarily nested array of values
 * without using Array.prototype.flat().
 */

export function flattenArray(input: any[]): any[] {
  return input.reduce((acc: any[], val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}
