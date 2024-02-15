import {
  FocusEvent,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'

import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
}

export const TextField = forwardRef(function TextField(
  { optional, onFocus, onBlur, style, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Container style={style} data-state={isFocused ? 'focused' : 'blurred'}>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        {...rest}
      />

      {optional ? <span>Opcional</span> : null}
    </Container>
  )
})
