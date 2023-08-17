import { Modal } from '@/app/shared/modal'
import { ClientComp } from './clientComp'
import { api } from '@/lib/api'
import Link from 'next/link'

export default async function Page() {
  const n = await api()
  return (
    <Modal>
      <Link
        href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals"
        target="_blank"
        className="mb-8 underline text-blue-400"
      >
        Docs on Modals With Parallel Routes
      </Link>

      <ClientComp n={n} />

      <h2 className="text-red-400 mt-4">Issues</h2>
      <p>- RevalidatePath() only works as expexted on hard navigation.</p>
      <p>
        - On soft navigation, RevalidatePath() passes the prop (see client console), but component
        doesn't rerender.
      </p>
    </Modal>
  )
}
