import {
  FocusEvent,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

import { Box, Container, ErrorMessage } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
}

export const TextField = forwardRef(function TextField(
  { optional, error, onFocus, onBlur, style, ...rest }: Props,
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
    <Box style={style}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null}
      </Container>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  )
})
