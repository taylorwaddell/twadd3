export function camelToHuman(camel: string): string {
  return camel
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .join(" ");
}
