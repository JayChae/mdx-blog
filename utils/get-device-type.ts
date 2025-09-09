'use client'

export const hasMouse = window.matchMedia('(pointer: fine)').matches

export const getHasMouse = (): boolean => {
  return hasMouse
}
