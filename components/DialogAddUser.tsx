'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { PlusCircle } from 'lucide-react'
import UserForm from './UserForm'

export const DialogAddUser = () => {
  
  return (
    <Dialog>
     
        <DialogTrigger asChild>
          <Button className='rounded-sm'>
            Add User <PlusCircle />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription>
              Enter your details in the form. Click `Submit` when you&apos;re
              finished.
            </DialogDescription>

            <UserForm/>
          </DialogHeader>
         
         
        </DialogContent>
      
    </Dialog>
  )
}
