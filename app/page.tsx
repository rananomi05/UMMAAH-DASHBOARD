import React from 'react'
import Home from './Components/Home'
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
import { redirect } from "next/navigation"
import Navbar from './Components/Navbar'


export default async function page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }
  return (
    <div>
      <Navbar />
      <Home />

    </div>
  )
}
