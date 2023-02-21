import React, { useEffect, useRef, useState } from 'react'
import { UserInformation } from '../interfaces/authInterfaces'

export default function useSelect (
  setSelectedOption: (value: UserInformation) => void,
  endSearch: (value: boolean) => void,
  options: UserInformation[],
) {
  const [showOptions, setShowOptions] = useState(false)
  const [cursor, setCursor] = useState(-1)
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>

  const select = (option: UserInformation) => {
    setSelectedOption(option)
    endSearch(true)
    setShowOptions(false)
  }

  const handleChange = (text: string) => {
    // setSelectedOption(text)
    setCursor(-1)
    if (!showOptions && text.length > 2) {
      setShowOptions(true)
    }
    if (text.length < 3) {
      setShowOptions(false)
    }
  }

  const moveCursorDown = () => {
    if (cursor < options?.length - 1) {
      setCursor((c) => c + 1)
    }
  }

  const moveCursorUp = () => {
    if (cursor > 0) {
      setCursor((c) => c - 1)
    }
  }

  const handleNav = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        moveCursorUp()
        break
      case 'ArrowDown':
        moveCursorDown()
        break
      case 'Enter':
        if (cursor >= 0 && cursor < options.length) {
          select(options[cursor])
        }
        break
    }
  }

  useEffect(() => {
    const listener = (e: any) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setShowOptions(false)
        setCursor(-1)
      }
    }

    document.addEventListener('click', listener)
    document.addEventListener('focusin', listener)
    return () => {
      document.removeEventListener('click', listener)
      document.removeEventListener('focusin', listener)
    }
  }, [])
  return {
    select,
    handleChange,
    handleNav,
    ref,
    cursor,
    showOptions,
  }
}
