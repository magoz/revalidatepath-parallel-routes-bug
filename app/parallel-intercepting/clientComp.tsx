'use client'

import action from './action'

export const ClientComp = ({ n }: { n: number }) => {
  console.log('render prop', n)

  const handleServerAction = () => {
    action()
  }

  return (
    <>
      <div>Random Num: {n}</div>
      <button onClick={handleServerAction}>Trigger Server Action</button>
    </>
  )
}
