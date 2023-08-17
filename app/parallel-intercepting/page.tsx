import { api } from '@/lib/api'
import { ClientComp } from './clientComp'

export default async function Page() {
  const n = await api()
  return <ClientComp n={n} />
}
