const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBengaliNumber(input: number | string): string {
  return String(input)
    .split("")
    .map((ch) => (/[0-9]/.test(ch) ? bengaliDigits[Number(ch)] : ch))
    .join("");
}
