import { Modal } from '@/app/shared/modal'
import { ClientComp } from './clientComp'
import { api } from '@/lib/api'
import Link from 'next/link'

export default async function Page() {
  const n = await api()
  return (
    <Modal>
      <Link
        href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals"
        target="_blank"
        className="mb-8 underline text-blue-400"
      >
        Docs on Modals With Intercepting + Parallel Routes
      </Link>
      <ClientComp n={n} />

      <h2 className="text-red-400 mt-4">Issues</h2>
      <p>
        - RevalidatePath() passes the prop (see client console), but component doesn't rerender.
      </p>
    </Modal>
  )
}
