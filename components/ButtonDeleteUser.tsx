'use client'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { deleteUsers } from '@/server/users'

const ButtonDeleteUser = ({id}:{id:string}) => {
  const handleButtonDeleteUser= async ()=>{
    await deleteUsers(id)
  }
  return (
    <Button
      variant={'destructive'}
      size={'icon'}
      onClick={handleButtonDeleteUser}
    >
      <Trash2 />
    </Button>
  )
}

export default ButtonDeleteUser
