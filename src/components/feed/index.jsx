import localFont from 'next/font/local';
const lounge = localFont({
  src: [
    {
      path: '../../app/fonts/lounge.ttf',
      weight: '600'
    }
  ],
})
const Feed = () => {
  return (
    <div className='w-full h-full bg-[#fafafa]'>
      <header className='w-full h-[5rem] fixed flex justify-around items-center mx-auto py-6 bg-white shadow-md'>
        <div className={`${lounge.className} text-4xl tracking-wider font-semibold`}>PhotoGram</div>
        <div className='bg-gray-100/70 items-center flex h-[2.5rem] font-light tracking-wide outline-none border border-gray-200/60 focus:border-gray-200 focus:bg-transparent rounded placeholder:text-sm transition'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-[2.3rem] p-1 rounded bg-gray-100/70 text-gray-400/70">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type='search' name='search' id='search' placeholder='Search' className='w-full h-full border-none rounded outline-none pl-2 bg-gray-100/70 focus:bg-transparent' >

          </input>
        </div>
        <div className='flex items-center gap-4'>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
            </svg>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neutral-800 hover:text-neutral-400/70 transition duration-400">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </div>
          <button
            type='submit'
            className='w-full bg-red-400/70 text-white text-sm font-semibold py-1 px-6 border-none rounded active:scale-95 transform transition disabled:bg-red-400/40 disabled:scale-100'
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  )
}

export default Feed




// <div className={`${lounge.className} w-screen flex justify-center mt-24 text-5xl text-red-500`}>This will be the 'Feed' page!</div>