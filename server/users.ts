'use server'

import { db } from '@/db/drizzle'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const getUsers = async () => {
  try {
    const allUsers = await db.select().from(users)
    return allUsers
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createUsers = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const newUsers = await db
      .insert(users)
      .values({ email, username, password })
    return newUsers
  } catch (error) {
    console.error(error)
    return { error: 'Failed to create user' }
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.email, email))
    return user
  } catch (error) {
    console.error(error)
    return { error: 'Failed to get user' }
  }
}

export const updateUser = async (
  id: string,
  email: string,
  username: string,
  password: string
) => {
  try {
    const updatedUser = await db
      .update(users)
      .set({ email, username, password })
      .where(eq(users.id, id))
    return updatedUser
  } catch (error) {
    console.error(error)
    return { error: 'Failed to update user' }
  }
}

export const deleteUsers = async (id: string) => {
  try {
    const deletedUser = await db.delete(users).where(eq(users.id, id))
    return deletedUser
  } catch (error) {
    console.error(error)
    return { error: 'Failed to delete user' }
  }
}
