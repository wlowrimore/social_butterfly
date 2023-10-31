'use client'
import { useContext, useMemo, useState } from 'react'
import AuthAnimation from 'public/assets/animations/auth-page-animation.json';
import Lottie from 'react-lottie-player';
import useForm from '@/hooks/useForm'
import Image from 'next/image'
import GoogleLogo from 'public/assets/logos/google_logo.svg'
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
import useFetchCurrentUser from '@/utils/fetchCurrentUser'
import { collection, doc, getDocs, setDoc, where, query, serverTimestamp } from 'firebase/firestore'

const lounge = localFont({
  src: [
    {
      path: '../../app/fonts/lounge.ttf',
      weight: '600'
    }
  ]
})

// const Auth = () => {
//   const [isLoginForm, setIsLoginForm] = useState(false)

//   const { isAuthenticated, isOnboarded, isLoading, user } =
//     useContext(GlobalContext)

//   // const { fetchUser } = useFetchCurrentUser()

//   const dispatch = useContext(GlobalDispatchContext)

//   const { form, onChangeHandler, resetForm } = useForm({
//     email: '',
//     password: ''
//   })

//   const { form: onboardingForm, onChangeHandler: onboardingFormOnChangeHandler } = useForm({
//     username: '',
//     fullName: ''
//   })

//   const authenticate = async (error) => {
//     if (isLoginForm) {
//       const [data, loginError] = await handlePromise(signInWithEmailAndPassword(auth, form.email, form.password))
//       return loginError
//     } else {
//       const [data, signupError] = await handlePromise(createUserWithEmailAndPassword(auth, form.email, form.password))
//       return signupError
//     }
//   }

//   const fetchUser = async () => {
//     if (!isAuthenticated) return;

//     const currentUserRef = doc(db, "users", auth.currentUser.email);
//     const currentUserSnap = await handlePromise(getDoc(currentUserRef));

//     if (docSnap.exists()) {
//       dispatch({
//         type: 'SET_USER',
//         payload: {
//           user: currentUserSnap.data()
//         }
//       })
//       dispatch({
//         type: 'SET_IS_ONBOARDED',
//         payload: {
//           isOnboarded: true
//         }
//       })
//     } else {
//       toast('Please complete onboarding.')
//     }
//   }

//   const setUserData = async () => {
//     try {
//       const userCollection = collection(db, "users");

//       const userQuery = query(userCollection, where('username', '==', onboardingForm.username))

//       const usersSnapshot = await getDocs(userQuery);

//       if (usersSnapshot.docs.length > 0) {
//         toast.error('username already exists!');
//         return;
//       }

//       await setDoc(doc(sb, 'users', auth.currentUser.email), {
//         fullName: onboardingForm.fullName,
//         username: onboardingForm.username,
//         email: auth.currentUser.email,
//         id: auth.currentUser.uid,
//         createdAt: serverTimestamp,
//       })

//       toast.success('welcome to PhotoGram by William Lowrimore @ fakeNameDev!')

//       dispatch({
//         type: 'SET_IS_ONBOARDED',
//         payload: {
//           isOnboarded: true
//         }
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault()
//     dispatch({
//       type: 'SET_LOADING',
//       payload: {
//         isLoading: true
//       }
//     })

//     let error = null;

//     await authenticate();

//     await fetchUser();

//     dispatch({
//       type: 'SET_LOADING',
//       payload: {
//         isLoading: false
//       }
//     })
//     if (error) toast.error(error.message)
//     if (!error) toast.success(`you have successfully ${isLoginForm ? 'logged in' : 'signed up'}!`)
//     resetForm()
//   }

//   const isDisabled = useMemo(() => {
//     return !Object.values(form).every((val) => !!val);
//   }, [form]);

//   const onboardingSubmitHandler = async (e) => {
//     e.preventDefault()
//     dispatch({
//       type: 'SET_LOADING',
//       payload: {
//         isLoading: true
//       }
//     })
//     await setUserData()
//     dispatch({
//       type: 'SET_LOADING',
//       payload: {
//         isLoading: false
//       }
//     })
//   }

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const { isAuthenticated, isOnboarded, user, isLoading } =
    useContext(GlobalContext);

  const { fetchUser } = useFetchCurrentUser();

  const dispatch = useContext(GlobalDispatchContext);

  const { form, onChangeHandler, resetForm } = useForm({
    email: '',
    password: '',
  });

  const {
    form: onboardingForm,
    onChangeHandler: onboardingFormOnChangeHandler,
  } = useForm({
    username: '',
    fullName: '',
  });

  const authenticate = async () => {
    if (isLoginForm) {
      const [data, loginError] = await handlePromise(
        signInWithEmailAndPassword(auth, form.email, form.password)
      );
      return loginError;
    } else {
      const [data, signupError] = await handlePromise(
        createUserWithEmailAndPassword(auth, form.email, form.password)
      );
      return signupError;
    }
  };

  const setUserData = async () => {
    try {
      const userCollection = collection(db, 'users');

      const userQuery = query(
        userCollection,
        where('username', '==', onboardingForm.username)
      );

      const usersSnapshot = await getDocs(userQuery);

      if (usersSnapshot.docs.length > 0) {
        toast.error('username already exists');
        return;
      }

      await setDoc(doc(db, 'users', auth.currentUser.email), {
        fullName: onboardingForm.fullName,
        username: onboardingForm.username,
        email: auth.currentUser.email,
        id: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });

      toast.success('welcome to photogram by william lowrimore & fakenamedev.com');

      dispatch({
        type: 'SET_IS_ONBOARDED',
        payload: {
          isOnboarded: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: true,
      },
    });

    let error = null;

    error = await authenticate();

    // await fetchUser();
    // check if the user data exists in the db
    const userData = await fetchUser();

    if (userData) {
      dispatch({
        type: 'SET_USER',
        payload: {
          user: userData,
        },
      });
      dispatch({
        type: 'SET_IS_ONBOARDED',
        payload: {
          isOnboarded: true,
        },
      });
    }

    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: false,
      },
    });

    if (error) toast.error(error.message);
    if (!error)
      toast.success(
        `you have successfully ${isLoginForm ? 'logged in' : 'signed up'}`
      );
    resetForm();
  };

  const isDisabled = useMemo(() => {
    return !Object.values(form).every((val) => !!val);
  }, [form]);

  const onboardingSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: true,
      },
    });
    await setUserData();
    dispatch({
      type: 'SET_LOADING',
      payload: {
        isLoading: false,
      },
    });
  };

  return (
    <main className='min-h-screen w-screen flex items-center justify-center bg-[#fafafa] p-12'>
      {/* {isLoading && <LoadingOverlay />} */}
      <div className='w-4/5 flex justify-center'>
        <div className='w-[32rem] rotate-[12deg] h-auto'>
          <Lottie
            play
            loop
            animationData={AuthAnimation}
            className='w-full h-auto'
          />
        </div>
        <div className='w-1/3 flex flex-col justify-center items-center'>
          <div className='h-auto bg-white border border-gray-300 mb-2 relative'>
            {isLoading && <LoadingOverlay />}
            {!isAuthenticated && (
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
                  autoComplete='username'
                  className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'
                  placeholder='Email'
                />
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={onChangeHandler}
                  value={form.password}
                  autoComplete='current-password'
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
            )}
            {isAuthenticated && !isOnboarded && (
              <form
                onSubmit={onboardingSubmitHandler}
                className='flex flex-col space-y-4 pt-12 pb-6 px-12 items-center'
              >
                <div
                  className={`${lounge.className} tracking-wider text-5xl pb-12`}
                >
                  PhotoGram
                </div>
                <input
                  type='username'
                  name='username'
                  id='username'
                  onChange={onboardingFormOnChangeHandler}
                  value={onboardingForm.username}
                  className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'
                  placeholder='username'
                />
                <input
                  type='fullName'
                  name='fullName'
                  id='fullName'
                  onChange={onboardingFormOnChangeHandler}
                  value={onboardingForm.fullName}
                  className='bg-gray-100/70 w-full h-[2.5rem] px-2 font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'
                  placeholder='your full name'
                />
                <button
                  type='submit'
                  className='w-full bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-neutral-300 disabled:scale-100'
                  disabled={!onboardingForm.username || !onboardingForm.fullName}
                >
                  Submit
                </button>
              </form>
            )}
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
          <div className='w-[88%] xl:w-[73%] h-[4rem] bg-white mb-2 flex items-center justify-center mx-auto border border-neutral-400'>
            <h2 className='w-fit text-sm text-center text-neutral-700'>
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

