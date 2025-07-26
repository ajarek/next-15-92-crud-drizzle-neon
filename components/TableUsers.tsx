'use client'
import type { User } from '@/db/schema'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ButtonDeleteUser from './ButtonDeleteUser'
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
import { updateUser } from '@/server/users'
import Form from 'next/form'
import { Eye, Pen } from 'lucide-react'
import { useState } from 'react'

const TableUsers = ({ users }: { users: User[] }) => {
  const [toggleTypeInput, setToggleTypeInput] = useState(false)
  return (
    <Table>
      <TableCaption>Current user list.</TableCaption>
      <TableHeader>
        <TableRow className=''>
          <TableHead className=''>Date</TableHead>
          <TableHead className='max-lg:hidden'>Id</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead className='max-lg:hidden'>User Password</TableHead>
          <TableHead className=''>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow
            className=''
            key={user.id}
          >
            <TableCell className=''>
              {user.createdAt?.toLocaleString().slice(0, 10)}
            </TableCell>
            <TableCell className='max-lg:hidden'>{user.id}</TableCell>
            <TableCell className=''>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className='max-lg:hidden'>{user.password}</TableCell>
            <TableCell className='flex place-items-center gap-4'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={'icon'}>
                    <Pen />
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Update User</DialogTitle>
                    <DialogDescription>
                      Correct your information in the form. When finished, click
                      &apos;Update&apos;.
                    </DialogDescription>

                    <Form
                      action={async (formData) => {
                        await updateUser(formData)
                      }}
                      className='grid gap-4'
                    >
                      <div className='grid gap-4'>
                        <input
                          type='hidden'
                          name='id'
                          value={user.id}
                        />
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
                        <div className=' grid gap-3 '>
                          <Label htmlFor='username-1'>Password</Label>
                          <div className='relative '>
                            <Input
                              type={toggleTypeInput ? 'text' : 'password'}
                              id='password'
                              name='password'
                              defaultValue={user.password}
                            />
                            <Eye className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10' onClick={() => setToggleTypeInput(!toggleTypeInput)} />
                          </div>
                        </div>
                        <Button
                          className='cursor-pointer'
                          type='submit'
                        >
                          Update
                        </Button>
                      </div>
                    </Form>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <ButtonDeleteUser id={user.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableUsers
