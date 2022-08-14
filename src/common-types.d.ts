declare type Nullable<T> = T | null | undefined

declare type RefType<T> =
    | ((instance: T | null) => void)
    | React.MutableRefObject<T | null>
    | null
