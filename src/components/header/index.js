'use client'

import localFont from 'next/font/local';
import Link from 'next/link';
import Image from 'next/image';
import Camera from 'public/assets/icons/header-camera.svg'

const lounge = localFont({
  src: [
    {
      path: '../../app/fonts/lounge.ttf',
      weight: '800'
    }
  ],
})
const Header = () => {
  return (
    <header className='w-[5rem] lg:w-[15rem] xl:w-[21rem] min-h-screen fixed flex flex-col mx-auto p-6 bg-white border-r border-neutral-400/50 shadow-md'>
      <div className={`hidden lg:block ${lounge.className} text-4xl tracking-wider pb-6 mb-5`}>
        <h2>PhotoGram</h2>
      </div>
      <div className='block lg:hidden pt-2 pb-6 mb-5 opacity-70'>
        <Image src={Camera} alt='' width={28} height={28} />
      </div>
      {/* <div className='bg-gray-100/70 items-center flex h-[2.5rem] font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-[2.3rem] p-1 rounded bg-gray-100/70 text-gray-400/70">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type='search' name='search' id='search' placeholder='Search' className='w-full h-full border-none rounded outline-none pl-2 bg-gray-100/70 focus:bg-transparent' >

          </input>
        </div> */}
      <ul className='flex flex-col gap-8'>
        <Link href='/'>
          <li className='flex font-semibold gap-4 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <span className='hidden lg:block'>Home</span>
          </li>
        </Link>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span className='hidden lg:block'>Search</span>
        </li>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" enableBackground="new 0 0 256 256" className='w-7 h-7'>

            <path fill="#000000" d="M128,246c-65.2,0-118-52.8-118-118C10,62.8,62.8,10,128,10c65.2,0,118,52.8,118,118C246,193.2,193.2,246,128,246L128,246z M128,20.1C68.4,20.1,20.1,68.4,20.1,128c0,59.6,48.3,107.9,107.9,107.9c59.6,0,107.9-48.3,107.9-107.9C235.9,68.4,187.6,20.1,128,20.1L128,20.1z M170.5,201.4l-44.7-38.5c-18.4-1.1-32.9-16.2-32.9-34.9c0-6.1,1.7-11.8,4.5-16.8L86.5,59.7l-2.1-6.9l45.7,40.4c18.4,1.1,32.9,16.2,32.9,34.9c0,6.2-1.8,12-4.6,17l10.6,51.3L170.5,201.4L170.5,201.4z M128,105.7c-12.3,0-22.3,10-22.3,22.3s10,22.3,22.3,22.3s22.3-10,22.3-22.3S140.3,105.7,128,105.7L128,105.7z" />
          </svg>
          <span className='hidden lg:block'>Explore</span>
        </li>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <span className='hidden lg:block'>Create</span>
        </li>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

          <span className='hidden lg:block'>Notifications</span>
        </li>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>

          <span className='hidden lg:block'>Messages</span>
        </li>
        <li className='flex gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg>
          <span className='hidden lg:block'>Profile</span>
        </li>
      </ul>
      <div className='mt-auto mb-20'>
        <button
          type='button'
          className='w-1/2 bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-red-400/40 disabled:scale-100'
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header