export function convertStringToNumber(str: string): number | null {
  const num = Number(str);
  return isNaN(num) ? null : num;
}

export function formatNumber(num: any) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
