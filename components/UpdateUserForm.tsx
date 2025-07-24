
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { updateUser} from '@/server/users'
import Form from 'next/form'
const UpdateUserForm =   ({user}:{user:{id:string, username:string, email:string, password:string}}) => {
  
  return (
    <Form action={async (formData) => { await updateUser(formData); }}>
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
  )
}

export default UpdateUserForm