'use client'
import { useContext, useMemo, useState } from 'react'
import AuthAnimation from '../../components/animations/AuthAnimation'
import useForm from '@/hooks/useForm'
import Image from 'next/image'
import GoogleLogo from 'public/assets/logos/google_logo.svg'
import Link from 'next/link'
import localFont from 'next/font/local'
import {
  GlobalContext,
  GlobalDispatchContext
} from '@/state/context/GlobalContext'
import { auth, db } from '../../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { handlePromise } from '@/utils/handlePromise'
import toast from 'react-hot-toast'
import LoadingOverlay from '../LoadingOverlay'
import { doc, getDoc } from "firebase/firestore";

const lounge = localFont({
  src: [
    {
      path: '../../app/fonts/lounge.ttf',
      weight: '600'
    }
  ]
})

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false)

  const { isAuthenticated, isOnboarded, isLoading, user } =
    useContext(GlobalContext)

  const dispatch = useContext(GlobalDispatchContext)

  const { form, onChangeHandler, resetForm } = useForm({
    email: '',
    password: ''
  })

  const { form: onboardingForm, onChangeHandler: onboardingFormOnChangeHandler } = useForm({
    username: '',
    fullName: ''
  })

  const isDisabled = useMemo(() => {
    return !Object.values(form).every(val => !!val)
  }, [form])

  const authenticate = async (error) => {
    if (isLoginForm) {
      const [data, loginError] = await handlePromise(signInWithEmailAndPassword(auth, form.email, form.password))
      error = loginError
    } else {
      const [data, signupError] = await handlePromise(createUserWithEmailAndPassword(auth, form.email, form.password))
      error = signupError
    }
  }

  const fetchUser = async () => {

    const currentUserRef = doc(db, "users", email);
    const currentUserSnap = await getDoc(currentUserRef);

    if (docSnap.exists()) {
      dispatch({
        type: 'SET_USER',
        payload: {
          user: currentUserSnap.data()
        }
      })
      dispatch({
        type: 'SET_IS_ONBOARDED',
        payload: {
          isOnboarded: true
        }
      })
    } else {
      toast('Please complete onboarding.')
    }
  }

  const submitHandler = async e => {
    e.preventDefault()
    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: true
      }
    })

    let error = null;

    await authenticate();

    await fetchUser();

    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: false
      }
    })
    if (error) toast.error(error.message)
    if (!error) toast.success(`you have successfully ${isLoginForm ? 'logged in' : 'signed up'}!`)
    resetForm()
  }

  return (
    <main className='min-h-screen w-screen flex items-center justify-center bg-[#fafafa] container'>
      <div className='flex justify-center'>
        <div className='flex justify-end'>
          <AuthAnimation />
        </div>
        <div className='w-1/3 flex flex-col justify-center items-center'>
          <div className='h-auto bg-white border border-gray-300 mb-2 relative'>
            {isLoading && <LoadingOverlay />}
            <form
              onSubmit={submitHandler}
              className='flex flex-col space-y-4 pt-12 pb-6 px-12 items-center'
            >
              <div
                className={`${lounge.className} tracking-wider text-5xl pb-12`}
              >
                PhotoGram
              </div>
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
                className='w-full bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-neutral-300 disabled:scale-100'
                disabled={isDisabled}
              >
                {isLoginForm ? 'Login' : 'Signup'}
              </button>
            </form>

            <form
              onSubmit={submitHandler}
              className='flex flex-col space-y-4 pt-12 pb-6 px-12 items-center'
            >
              <div
                className={`${lounge.className} tracking-wider text-5xl pb-12`}
              >
                PhotoGram
              </div>
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
                className='w-full bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-neutral-300 disabled:scale-100'
                disabled={isDisabled}
              >
                {isLoginForm ? 'Login' : 'Signup'}
              </button>
            </form>
            <div className='w-full flex justify-center items-center px-12'>
              <div className='w-full h-[0.05rem] bg-neutral-400/80' />
              <div className='text-sm font-semibold text-neutral-400/70 mx-3'>
                OR
              </div>
              <div className='w-full h-[0.05rem] bg-neutral-400/80' />
            </div>
            <div className='mt-6 mb-12 px-12'>
              <div className='flex justify-center items-center mb-3'>
                <Image src={GoogleLogo} alt='' width={28} height={28} />
                <h2 className='text-sm text-blue-900'>
                  {isLoginForm ? 'Login' : 'Signup'} with Google
                </h2>
              </div>
              {isLoginForm && (
                <h2 className='text-xs text-neutral-500 font-semibold tracking-wide text-center ml-2'>
                  Forgotten your password?
                </h2>
              )}
            </div>
          </div>
          <div className='md:w-full xl:w-4/5 h-[4rem] bg-white border border-gray-300 flex justify-center items-center'>
            <h2 className='min-w-full text-sm text-center text-neutral-700'>
              {isLoginForm
                ? "Don't have an account?"
                : 'Already have an account?'}
              <button
                onClick={() => setIsLoginForm(prev => !prev)}
                className='text-blue-600 ml-2'
              >
                {isLoginForm ? 'Signup' : 'Login'}
              </button>
            </h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Auth
