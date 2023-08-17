import { api } from '@/lib/api'
import { ClientComp } from './clientComp'

export default async function Page() {
  const n = await api()
  return (
    <>
      <h1 className="text-3xl font-bold">Leaf</h1>
      <ClientComp n={n} />
    </>
  )
}
