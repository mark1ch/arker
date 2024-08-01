export function cn(
  ...args: (string | undefined | Record<string, boolean | undefined>)[]
): string {
  return args
    .reduce((acc: string, arg) => {
      if (!arg) return acc;
      if (typeof arg === "string") return `${acc.trim()} ${arg.trim()}`;
      const optionalClassNames = Object.entries(arg).reduce(
        (optionalClassNamesAcc, [key, value]) => {
          if (["undefined", "NaN", "null"].includes(key) || !value)
            return optionalClassNamesAcc;
          return `${optionalClassNamesAcc.trim()} ${key.trim()}`;
        },
        "",
      );
      return `${acc.trim()} ${optionalClassNames.trim()}`;
    }, "")
    .trim();
}
