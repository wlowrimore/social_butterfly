import { HiDotsHorizontal } from 'react-icons/hi';

const Post = () => {
  return (
    <div className='flex flex-col mx-16 max-w-[80%] bg-transparent max-h-[80%] '>
      <div className='flex w-full justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-neutral-200/50 border-2 border-emerald-500 rounded-full my-3' />
          <div>username</div>
        </div>
        <HiDotsHorizontal size='20' />
      </div>
      <div className='aspect-square bg-neutral-300/50'>

      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Post