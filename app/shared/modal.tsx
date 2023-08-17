'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back()
    }
  }

  return (
    <Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />

        <Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="p-40 bg-neutral-600">{children}</div>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
