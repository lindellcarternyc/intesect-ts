import { useLayoutEffect } from 'react'

interface UseScrollArgs {
  onScroll(): void
}

const useScroll = ({ 
  onScroll
}: UseScrollArgs) => {
  useLayoutEffect(() => {
    window.addEventListener('scroll', () => onScroll())
  })
}

export {
  useScroll
}