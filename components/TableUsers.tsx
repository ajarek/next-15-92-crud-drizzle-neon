'use client'
import type { User } from "@/db/schema";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ButtonDeleteUser from "./ButtonDeleteUser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { updateUser} from '@/server/users'
import Form from 'next/form'
import { Pen} from 'lucide-react'


const TableUsers = ({users}:{users:User[]}) => {
  return (
        <Table >
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader >
    <TableRow className=''>
      <TableHead className="">Date</TableHead>
      <TableHead className="max-lg:hidden">Id</TableHead>
      <TableHead>User Name</TableHead>
      <TableHead>User Email</TableHead>
      <TableHead className="max-lg:hidden">User Password</TableHead>
      <TableHead className="">Actions</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
    <TableRow className='' key={user.id}>
      <TableCell className="">{user.createdAt?.toLocaleString().slice(0,10)}</TableCell>
      <TableCell className="max-lg:hidden">{user.id}</TableCell>
      <TableCell className="">{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="max-lg:hidden">{user.password}</TableCell>
      <TableCell className="flex place-items-center gap-4">
        
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

            <Form action={async (formData) => { await updateUser(formData); }} className='grid gap-4'>
       <div className='grid gap-4'>
           <input type='hidden' name='id' value={user.id}/>
            <div className='grid gap-3'>
              <Label htmlFor='name-1'>User Name</Label>
              <Input
                type='text'
                id='name'
                name='username'
                defaultValue={user.username}
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Email</Label>
              <Input
                type='email'
                id='email'
                name='email'
                defaultValue={user.email}
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
                defaultValue={user.password}
              />
            </div>
            <Button type='submit'>Update</Button>
          </div>
    </Form>
          </DialogHeader>
         
         
        </DialogContent>
      
    </Dialog>


        <ButtonDeleteUser id={user.id}/>
      </TableCell>
    </TableRow>
     ))}
  </TableBody>
</Table>
  )
}

export default TableUsers