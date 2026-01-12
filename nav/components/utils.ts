export function getIcon(icon: string) {
  return icon.includes('http://') || icon.includes('https://') ? icon : `/images/nav/${icon}`
}
