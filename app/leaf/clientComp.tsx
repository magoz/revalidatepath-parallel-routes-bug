'use client'

import action from './action'

export const ClientComp = ({ n }: { n: number }) => {
  console.log('render prop', n)

  const handleServerAction = () => {
    action()
  }

  return (
    <>
      <div className="mb-4">Random Num: {n}</div>
      <button onClick={handleServerAction} className="border-solid border border-opacity-70 p-1">
        Trigger Server Action
      </button>
    </>
  )
}
