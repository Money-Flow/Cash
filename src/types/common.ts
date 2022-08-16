export type Nullable<T> = T | null | undefined

export type RefType<T> =
    | ((instance: T | null) => void)
    | React.MutableRefObject<T | null>
    | null
