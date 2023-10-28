'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../header';

const Feed = ({ setIsAuthenticated }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await res.json();
      const useableData = data.slice(0, 8);
      setPhotos(useableData)
      // console.log(useableData)
    }
    fetchData();
  }, [])
  console.log(photos);

  return (
    <>
      <Header />
      <div className='my-12 ml-[32%] w-fit grid grid-cols-3 gap-20'>
        <div className='col-span-2 w-fit'>
          <div className='flex gap-4'>
            {photos.map((photo) => (
              <div className='flex flex-col justify-center items-center'>
                <div key={photo.id} className='border-2 border-red-400 rounded-full p-[.15rem]'>
                  <Image src={photo.thumbnailUrl} alt='placeholder' width={54} height={54} className='rounded-full border-2 border-black' />
                </div>
                <span className='text-xs'>username</span>
              </div>
            ))}
          </div>
          <section className='flex flex-col mx-[5rem] mt-12 bg-red-200'>
            stories
          </section>
        </div>

        {/* right column */}

        <section className='flex flex-col w-[120%] p-3'>
          <div className='flex w-full gap-2'>
            <Image src='https://avatars.githubusercontent.com/u/92553989?v=4' alt='' width={44} height={44} className='rounded-full border-2 border-black' />
            <div className='w-full flex justify-between items-center'>
              <div className='flex flex-col leading-tight'>
                <p className='text-sm tracking-wide font-bold'>willlowrimore</p>
                <p className='text-xs tracking-wider'>William Lowrimore</p>
              </div>
              <div className=''>
                <p className='text-xs font-semibold text-blue-400'>Switch</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center w-full mt-6 mb-3'>
            <h2 className='text-sm'>Suggested for you</h2>
            <p className='text-xs font-semibold'>See All</p>
          </div>

        </section>
      </div>
    </>
  )
}

export default Feed





{/* <div className='pt-24 text-center'>

            <button
              type='button'
              onClick={(e) => setIsAuthenticated(false)}
              className='w-fit py-1 px-2 border-none rounded bg-black text-white'
            >
              Logout
            </button>
          </div> */}


