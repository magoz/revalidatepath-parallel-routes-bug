'use server'

import { revalidatePath } from 'next/cache'

export default async function action() {
  try {
    console.log('action run')
    revalidatePath('/parallel')
  } catch (err) {
    throw new Error()
  }
}
