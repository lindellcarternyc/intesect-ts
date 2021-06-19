import { useLayoutEffect } from 'react'

interface UseScrollArgs {
  onScroll(): void
}

const useScroll = ({ 
  onScroll
}: UseScrollArgs) => {
  useLayoutEffect(() => {
    console.log('add listener')
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  })
}

export {
  useScroll
}