'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../header';
import EmptyHeart from '../Hearts/EmptyHeart';
import Messages from '../Messages';
import SharePost from '../SharePost';
import SavePost from '../SavePost';
import SmileyEmoji from '../SmileyEmoji';

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
      <main className='bg-orange-300 w-full h-screen ml-[5rem] lg:ml-[15rem] xl:ml-[21rem]'>
        {/* left */}
        <section className='bg-blue-300 w-[55%] h-full'>
          <div className='flex justify-center gap-6 pt-12'>
            {photos.map((photo) => (
              <div className='flex flex-col justify-center items-center'>
                <div key={photo.id} className='border-2 border-red-500 rounded-full p-[.15rem] w-20 h-20'>
                  <Image src={photo.thumbnailUrl} alt='placeholder' width={72} height={72} className='rounded-full border-2 border-black' />
                </div>
                <span className='text-xs'>username</span>
              </div>
            ))}
          </div>

          <div className='bg-green-200 mt-12 py-6 mx-auto w-[90%] xl:w-[60%] px-[6rem] flex flex-col gap-2 items-center'>
            <div className='flex gap-2 items-center justify-start w-full mb-1'>
              <Image src='https://avatars.githubusercontent.com/u/92553989?v=4' alt='' width={44} height={44} className='border border-black rounded-full' />
              <div className='flex-col'>
                <p className='text-xs font-bold'>username</p>
                <p className='text-xs'><em>Oct 28 2023 2:42 pm</em></p>
              </div>
              <div className='w-full text-3xl text-neutral-500 gap-2 flex justify-end items-center mb-4'>
                ...
              </div>
            </div>
            <div className='w-full'>
              <Image src='https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                width={600} height={400}
              />
            </div>
            <div className='w-full flex'>
              <div className='flex flex-start gap-3'>
                <EmptyHeart />
                <Messages />
                <SharePost />
              </div>
              <div className='w-full flex justify-end'>
                <SavePost />
              </div>
            </div>
            <div className='w-full flex justify-start py-1'>
              <h3 className='text-sm'>8 likes</h3>
            </div>
            <div className='text-sm w-full flex text-neutral-500'>
              <p><b className='text-neutral-600'>username writes: </b>This is where the text content (description) for the uploaded image will be...There is an awful lot going on with this application! <em>#tags #will #go #here</em></p>
            </div>
            <div className='w-full flex justify-start'>
              <p className='text-sm text-neutral-500'>View all comments</p>
            </div>
            <div className='w-full flex'>
              <div className='w-full flex justify-start'>
                <p className='text-sm text-neutral-500'>Add a comment...</p>
              </div>
              <div className='w-full flex justify-end opacity-50'>
                <SmileyEmoji />
              </div>
            </div>
          </div>
        </section>
      </main>
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


{/* <div className='w-4/5 flex gap-4'>
          {photos.map((photo) => (
            <div className='flex flex-col justify-center items-center'>
              <div key={photo.id} className='border-2 border-red-400 rounded-full p-[.15rem] w-20 h-20'>
                <Image src={photo.thumbnailUrl} alt='placeholder' width={72} height={72} className='rounded-full border-2 border-black' />
              </div>
              <span className='text-xs'>username</span>
            </div>
          ))}
        </div> */}



