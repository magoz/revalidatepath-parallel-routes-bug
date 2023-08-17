'use server'

import { revalidatePath } from 'next/cache'

export default async function action() {
  try {
    console.log('action run')
    revalidatePath('/')
  } catch (err) {
    throw new Error()
  }
}
