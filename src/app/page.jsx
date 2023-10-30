'use client'

import { useContext, useState } from 'react'
import Auth from '@/components/auth'
import Feed from '@/components/feed';
import { GlobalContext } from '@/state/context/GlobalContext';

const HomePage = () => {
  const { isAuthenticated, isOnboarded } = useContext(GlobalContext)

  return (
    isAuthenticated && isOnboarded ? <Feed /> : <Auth />
  )
}

export default HomePage

