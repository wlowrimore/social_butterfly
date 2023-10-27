'use client'

import { useState } from 'react'
import Auth from '@/components/auth'
import Feed from '@/components/feed';

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    isAuthenticated ? <Feed /> : <Auth />
  )
}

export default HomePage

