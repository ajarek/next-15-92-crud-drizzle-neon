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
import { DialogUpdateUser } from "./DialogUpdateUser";


const TableUsers = ({users}:{users:User[]}) => {
  return (
        <Table >
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader >
    <TableRow className=''>
      <TableHead className="">Date</TableHead>
      <TableHead className="">Id</TableHead>
      <TableHead>User Name</TableHead>
      <TableHead>User Email</TableHead>
      <TableHead className="">User Password</TableHead>
      <TableHead className="">Actions</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
    <TableRow className='' key={user.id}>
      <TableCell className="">{user.createdAt?.toLocaleString()}</TableCell>
      <TableCell className="">{user.id}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="">{user.password}</TableCell>
      <TableCell className="flex place-items-center gap-4">
        <DialogUpdateUser id={user.id} username={user.username } email={user.email} password={user.password}/>
        <ButtonDeleteUser id={user.id}/>
      </TableCell>
    </TableRow>
     ))}
  </TableBody>
</Table>
  )
}

export default TableUsers