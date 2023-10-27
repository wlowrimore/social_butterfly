'use client'
import { useMemo } from 'react'
import AuthAnimation from '../../components/animations/AuthAnimation'
import useForm from '@/hooks/useForm'
import Image from 'next/image'
import GoogleLogo from 'public/assets/logos/google_logo.svg';
import Link from 'next/link'
import localFont from 'next/font/local';

const lounge = localFont({
  src: [
    {
      path: '../../app/fonts/lounge.ttf',
      weight: '600'
    }
  ],
})

const Auth = () => {
  const { form, onChangeHandler } = useForm({
    email: '',
    password: ''
  })

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
  }, [form])

  const submitHandler = async e => {
    e.preventDefault()

    console.log(form)
  }

  return (
    <main className='min-h-screen w-screen flex items-center justify-center bg-[#fafafa] container'>
      <div className='flex justify-center'>
        <div className='flex justify-end'>
          <AuthAnimation />
        </div>
        <div className='w-1/3 flex flex-col justify-center items-center'>
          <div className='h-auto bg-white border border-gray-300 mb-2'>
            <form
              onSubmit={submitHandler}
              className='flex flex-col space-y-4 pt-12 pb-6 px-12 items-center'
            >
              <div className={`${lounge.className} tracking-wider text-5xl pb-12`}>PhotoGram</div>
              <input
                type='email'
                name='email'
                id='email'
                onChange={onChangeHandler}
                value={form.email}
                className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'
                placeholder='Email'
              />
              <input
                type='password'
                name='password'
                id='password'
                onChange={onChangeHandler}
                value={form.password}
                className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'
                placeholder='Password'
              />
              <button
                type='submit'
                className='w-full bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-red-400/40 disabled:scale-100'
                disabled={isDisabled}
              >
                Log In
              </button>
            </form>
            <div className='w-full flex justify-center items-center px-12'>
              <div className='w-full h-[0.05rem] bg-neutral-400/80' />
              <div className='text-sm font-semibold text-neutral-400/70 mx-3'>OR</div>
              <div className='w-full h-[0.05rem] bg-neutral-400/80' />
            </div>
            <div className='mt-6 mb-12 px-12'>
              <div className='flex justify-center items-center mb-3'>
                <Image src={GoogleLogo} alt='' width={28} height={28} />
                <h2 className='text-sm text-blue-900'>Log in with Google</h2>
              </div>
              <h2 className='text-xs text-neutral-500 font-semibold tracking-wide text-center ml-2'>Forgotten your password?</h2>
            </div>
          </div>
          <div className='w-[22.2rem] h-[4rem] bg-white border border-gray-300 flex justify-center items-center px-12'>
            <h2 className='text-sm text-neutral-700'>Don&apos;t have an account? <Link href='' target='_blank' rel='noopener noreferrer' className='text-blue-500 font-semibold'>Sign up</Link></h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Auth