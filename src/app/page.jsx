'use client'
import { useMemo } from 'react'
import AuthAnimation from '../components/animations/AuthAnimation'
import useForm from '@/hooks/useForm'

const HomePage = () => {
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
    <main className='w-screen h-screen flex items-center justify-center bg-[#fafafa]'>
      <div className='flex w-4/5 h-4/5'>
        <div className='w-full h-full flex justify-center items-center'>
          <AuthAnimation />
        </div>
        <div className='lg:w-1/2 h-auto bg-white border border-gray-300'>
          <form
            onSubmit={submitHandler}
            className='flex flex-col space-y-4 pt-12 pb-6 px-12 items-center'
          >
            <div className='tracking-wider text-4xl mb-4'>PhotoGram</div>
            <input
              type='email'
              name='email'
              id='email'
              onChange={onChangeHandler}
              value={form.email}
              className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm'
              placeholder='Email'
            />
            <input
              type='password'
              name='password'
              id='password'
              onChange={onChangeHandler}
              value={form.password}
              className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm'
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
        </div>
      </div>
    </main>
  )
}

export default HomePage
