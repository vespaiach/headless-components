import React from 'react'

type ReturnValue<V, E> = Exclude<V, null | undefined | '' | 0 | false> | (E extends undefined ? never : E)

interface IfTruthyElseProps<V, E> {
  value: V
  elseValue?: E
  children: (value: ReturnValue<V, E>) => React.ReactNode
}

export default function IfTruthyElse<V, E>({ value, elseValue, children }: IfTruthyElseProps<V, E>): React.ReactNode {
  if (Boolean(value)) {
    return children(value as ReturnValue<V, E>)
  } else {
    return elseValue === undefined ? null : children(elseValue as ReturnValue<V, E>)
  }
}
