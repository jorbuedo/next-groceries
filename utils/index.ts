export const throttle = (callback: () => void, wait: number) => {
  let time = Date.now()
  let last: NodeJS.Timeout
  return () => {
    clearTimeout(last)
    if (time + wait - Date.now() < 0) {
      callback()
      time = Date.now()
    } else {
      last = setTimeout(callback, wait)
    }
  }
}
