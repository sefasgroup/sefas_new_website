export type Widen<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : T extends (...args: never[]) => unknown
      ? T
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { [K in keyof T]: Widen<T[K]> };
