'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Header from '../header'
import EmptyHeart from '../Hearts/EmptyHeart'
import Messages from '../Messages'
import SharePost from '../SharePost'
import SavePost from '../SavePost'
import SmileyEmoji from '../SmileyEmoji'
import Post from '../post'

const Feed = ({ setIsAuthenticated }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()
      const useableData = data.slice(0, 8)
      setPhotos(useableData)
      // console.log(useableData)
    }
    fetchData()
  }, [])

  const submitHandler = async e => {
    e.preventDefault()

    console.log()
  }

  return (
    <>
      <Header />
      <div className='flex w-full max-w-screen-lg ml-[35rem] mt-16 gap-6'>
        <div className='flex flex-col w-full space-y-5'>
          <section className='flex mb-8 space-x-4 bg-transparent'>
            {new Array(8).fill(0).map((_, i) => (
              <div
                key={i}
                className="rounded-full w-14 ring-[2px] ring-emerald-500 ring-offset-2 h-14 bg-neutral-200/60 flex-none"
              />
            ))}
          </section>
          <section className='flex flex-col gap-y-6'>
            {
              new Array(5).fill(1).map((_, i) => (
                <Post key={i} />
              ))
            }
          </section>
        </div>

        {/* right */}
        <div className='relative max-w-full'>
          <div className='flex'>
            Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. To watch the dancing is a breathtaking experience. Lombok has some impressive points of interest – the majestic Gunung Rinjani is an active volcano. It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings and carved statues make popular souvenirs. Artists can be seen whittling and painting on the streets, particularly in Ubud. It is easy to appreciate each island as an attractive tourist destination. Majestic scenery; rich culture; white sands and warm, azure waters draw visitors like magnets every year. Snorkelling and diving around the nearby Gili Islands is magnificent. Marine fish, starfish, turtles and coral reef are present in abundance. Bali and Lombok are part of the Indonesian archipelago. Bali has some spectacular temples. The most significant is the Mother Temple, Besakih. The inhabitants of Lombok are mostly Muslim with a Hindu minority. Lombok remains the most understated of the two islands. Lombok has several temples worthy of a visit, though they are less prolific. Bali and Lombok are neighbouring islands.
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed




{
  /* <div className='w-4/5 flex gap-4'>
          {photos.map((photo) => (
            <div className='flex flex-col justify-center items-center'>
              <div key={photo.id} className='border-2 border-red-400 rounded-full p-[.15rem] w-20 h-20'>
                <Image src={photo.thumbnailUrl} alt='placeholder' width={72} height={72} className='rounded-full border-2 border-black' />
              </div>
              <span className='text-xs'>username</span>
            </div>
          ))}
        </div> */
}



{/* <main className='w-full h-screen ml-[5rem] lg:ml-[15rem] xl:ml-[21rem] flex'>
        <section className='w-[55%] h-full pl-32'>
          <div className='flex justify-center gap-6 pt-12'>
            {photos.map(photo => (
              <div key={photo.id} className='flex flex-col justify-center items-center'>
                <div

                  className='border-2 border-red-500 rounded-full p-[.15rem] w-20 h-20'
                >
                  <Image
                    src={photo.thumbnailUrl}
                    alt='placeholder'
                    width={72}
                    height={72}
                    className='rounded-full border-2 border-black'
                  />
                </div>
                <span className='text-xs'>username</span>
              </div>
            ))}
          </div>

          <div className='mt-12 py-6 mx-auto w-[90%] xl:w-[60%] px-[6rem] flex flex-col gap-2 items-center border-b border-neutral-300'>
            <div className='flex gap-2 items-center justify-start w-full mb-1'>
              <Image
                src='https://avatars.githubusercontent.com/u/92553989?v=4'
                alt=''
                width={44}
                height={44}
                className='border border-black rounded-full'
              />
              <div className='flex-col w-full'>
                <p className='text-xs font-bold'>username</p>
                <p className='text-xs'>
                  <em>Oct 28 2023 2:42 pm</em>
                </p>
              </div>
              <div className='w-full text-3xl text-neutral-500 gap-2 flex justify-end items-center mb-4'>
                ...
              </div>
            </div>
            <div className='max-w-full max-w-auto'>
              <Image
                src='https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                width={600}
                height={400}
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
              <p>
                <b className='text-neutral-600'>username writes: </b>This is
                where the text content (description) for the uploaded image will
                be...There is an awful lot going on with this application!{' '}
                <em>#tags #will #go #here</em>
              </p>
            </div>
            <div className='w-full flex justify-start'>
              <p className='text-sm text-neutral-500'>View all comments</p>
            </div>
            <form onSubmit={submitHandler} className='w-full flex'>
              <div className='w-full flex'>
                <textarea

                  className='w-full placholder:text-sm placeholder:text-neutral-500 outline-none resize-none'
                  rows='1'
                  placeholder='Add a comment...'
                ></textarea>
              </div>
              <div className='flex items-center gap-1 justify-end opacity-50'>
                <button
                  type='submit'
                  className='text-sm font-bold text-blue-700'

                >
                  Post
                </button>
                <SmileyEmoji />
              </div>
            </form>
          </div>
        </section>

        <section className='w-[40%]'>
          <div className='w-full flex flex-col pt-16'>
            <div className='w-full flex'>
              <div className='w-full flex gap-2 items-center'>
                <Image
                  src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/237346155_10223541384276443_6350195451288871944_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qM56gBgb72EAX8IeTPz&_nc_ht=scontent-atl3-2.xx&oh=00_AfC5lnwv2euPVc4IqZefNGlbsFdrowHjZtBmBG_cQfD9cg&oe=6542515F'
                  alt=''
                  width={52}
                  height={52}
                  className='border-2 border-black rounded-full'
                />
                <div className='flex flex-col leading-tight'>
                  <p className='text-sm font-bold'>username</p>
                  <p className='text-sm'>User Name</p>
                </div>
                <div className='w-44 flex justify-end'>
                  <p className='text-sm tracking-wider text-blue-500'>Switch</p>
                </div>
              </div>
            </div>
            <div className='flex items-center pt-6 pb-4'>
              <p className='text-sm'>Suggested for you</p>
              <div className='w-[12.4rem] flex justify-end'>
                <p className='text-sm text-neutral-600 font-semibold'>
                  See All
                </p>
              </div>
            </div>
            <div className='w-full flex'>
              <div className='w-full flex gap-2 items-center py-2'>
                <Image
                  src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/237346155_10223541384276443_6350195451288871944_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qM56gBgb72EAX8IeTPz&_nc_ht=scontent-atl3-2.xx&oh=00_AfC5lnwv2euPVc4IqZefNGlbsFdrowHjZtBmBG_cQfD9cg&oe=6542515F'
                  alt=''
                  width={52}
                  height={52}
                  className='rounded-full'
                />
                <div className='flex flex-col leading-tight'>
                  <p className='text-sm font-bold'>username</p>
                  <p className='text-sm'>User Name</p>
                </div>
                <div className='w-44 flex justify-end'>
                  <p className='text-sm tracking-wider text-blue-500'>Follow</p>
                </div>
              </div>
            </div>
            <div className='w-full flex gap-2 items-center py-2'>
              <Image
                src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/237346155_10223541384276443_6350195451288871944_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qM56gBgb72EAX8IeTPz&_nc_ht=scontent-atl3-2.xx&oh=00_AfC5lnwv2euPVc4IqZefNGlbsFdrowHjZtBmBG_cQfD9cg&oe=6542515F'
                alt=''
                width={52}
                height={52}
                className='rounded-full'
              />
              <div className='flex flex-col leading-tight'>
                <p className='text-sm font-bold'>username</p>
                <p className='text-sm'>User Name</p>
              </div>
              <div className='w-44 flex justify-end'>
                <p className='text-sm tracking-wider text-blue-500'>Follow</p>
              </div>
            </div>
          </div>
          <div className='w-full flex gap-2 items-center py-2'>
            <Image
              src='https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/237346155_10223541384276443_6350195451288871944_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qM56gBgb72EAX8IeTPz&_nc_ht=scontent-atl3-2.xx&oh=00_AfC5lnwv2euPVc4IqZefNGlbsFdrowHjZtBmBG_cQfD9cg&oe=6542515F'
              alt=''
              width={52}
              height={52}
              className='rounded-full'
            />
            <div className='flex flex-col leading-tight'>
              <p className='text-sm font-bold'>username</p>
              <p className='text-sm'>User Name</p>
            </div>
            <div className='w-44 flex justify-end'>
              <p className='text-sm tracking-wider text-blue-500'>Follow</p>
            </div>
          </div>
        </section>
      </main> */}
