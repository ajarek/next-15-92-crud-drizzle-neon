"use client"
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Pen} from 'lucide-react'
import UpdateUserForm from './UpdateUserForm'

export const DialogUpdateUser = (id:string, username:string, email:string, password:string) => {
  
  return (
    <Dialog>
     
        <DialogTrigger asChild>
          <Button size={'icon'} ><Pen /></Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
            <DialogDescription>
              Correct your information in the form. When finished, click &apos;Update&apos;.
            </DialogDescription>

            <UpdateUserForm user={{id, username, email, password}} />
          </DialogHeader>
         
         
        </DialogContent>
      
    </Dialog>
  )
}
