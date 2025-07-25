'use server'

import { db } from '@/db/drizzle'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
export const getUsers = async () => {
  try {
    const allUsers = await db.select().from(users)
    return allUsers
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createUsers = async (formData: FormData) => {
  
  const email =formData?.get('email') as string
  const password =formData.get('password')as string
  const username =formData.get('username') as string
  
  try {
    const newUsers = await db
      .insert(users)
      .values( {email, username, password })
      console.log('new User', newUsers)
      revalidatePath('/') 
      revalidateTag('/')
  } catch (error) {
    console.error(error)
    return { error: 'Failed to create user' }
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, id))
    return user
  } catch (error) {
    console.error(error)
    return { error: 'Failed to get user' }
  }
}

export const updateUser = async (formData: FormData) => {
  const id = formData.get('id') as string
  const email =formData?.get('email') as string
  const password =formData.get('password')as string
  const username =formData.get('username') as string
  try {
    const updatedUser = await db
      .update(users)
      .set({ email, username, password })
      .where(eq(users.id, id))
    console.log('update', updatedUser)
     revalidatePath('/') 
      revalidateTag('/')
      redirect('/')
  } catch (error) {
    console.error(error)
    return { error: 'Failed to update user' }
  }
}

export const deleteUsers = async (id: string) => {
  try {
    const deletedUser = await db.delete(users).where(eq(users.id, id))
    console.log('delete', deletedUser)
     revalidatePath('/') 
      revalidateTag('/')
  } catch (error) {
    console.error(error)
    return { error: 'Failed to delete user' }
  }
}
