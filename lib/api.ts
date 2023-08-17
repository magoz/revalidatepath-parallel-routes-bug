function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export async function api() {
  await delay(1000)
  return Math.random()
}
