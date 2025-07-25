'use client'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {createUsers} from '@/server/users'
import Form from 'next/form'
const UserForm = () => {
  return (
    <Form action={async (formData) => { await createUsers(formData); }}>
       <div className='grid gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='name-1'>User Name</Label>
              <Input
                type='text'
                id='name'
                name='username'
                defaultValue='Pedro Duarte'
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Email</Label>
              <Input
                type='email'
                id='email'
                name='email'
                defaultValue='pedro@wp.pl'
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='username-1'>Password</Label>
              <Input
                type='password'
                id='password'
                name='password'
                defaultValue='pedro123'
              />
            </div>
            <Button type='submit'>Submit</Button>
          </div>
    </Form>
  )
}

export default UserForm