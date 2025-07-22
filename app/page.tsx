import React from 'react'
import { getUsers } from '@/server/users'
import TableUsers from '@/components/TableUsers'
import { DialogAddUser } from '@/components/DialogAddUser'



const Home = async () => {
  const users = await getUsers()
  return (
    <div className='min-h-screen flex flex-col justify-start items-center gap-4 p-4'>
      <div className='flex items-center gap-8'>

      <h1 className='text-2xl font-semibold '>List Users</h1>
      <DialogAddUser/>

      </div>
  <TableUsers users={users}/>
      
    </div>
  )
}

export default Home
