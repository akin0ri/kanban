import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '@/components/header'
import TaskArea from '@/components/taskarea'

export default function Home() {
  return (
    <>
      <Header />
      <TaskArea />
    </>
  )
}
