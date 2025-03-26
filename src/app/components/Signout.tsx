"use client";
import { signOut } from 'next-auth/react';
import React from 'react'


const Signout = () => {
  return (
    <button onClick={()=>signOut()}>Sign out</button>
  )
}

export default Signout