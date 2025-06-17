export function pathMapper(str: string): string {
  const pathMap: { [key: string]: string } = {
    "san-pham": "sản phẩm",
    nem: "nệm",
    "phu-kien": "phụ kiện",
  };

  return pathMap[str] || str;
}
