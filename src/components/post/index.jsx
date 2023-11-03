'use client'

import { HiDotsHorizontal } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import EmptyHeart from '../Hearts/EmptyHeart'
import Messages from '../Messages'
// import ShareIcon from '../ShareIcon'
import { TbLocationShare } from 'react-icons/tb';
import SaveIcon from '../SaveIcon'
import SmileyEmoji from '../SmileyEmoji'
import TextAreaAutoSize from 'react-textarea-autosize';
import LikeIcon from '../LikeIcon';
import FilledLikeIcon from '../FilledLikeIcon';
import CommentIcon from '../CommentIcon';
import { useState } from 'react';

const Post = ({ postIndex }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className='flex flex-col mx-16 max-w-[80%] bg-transparent max-h-[80%] border-b border-neutral-300'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex items-center'>
          <div className='w-8 h-8 bg-neutral-200/50 border-2 border-emerald-500 rounded-full mb-3' />
          <div className='ml-2'>username</div>
          <span><BsDot /></span>
          <div className='text-neutral-400'>3h</div>
        </div>
        <HiDotsHorizontal className='cursor-pointer' size='20' />
      </div>
      <div className='aspect-video md:aspect-square bg-neutral-300/50'></div>
      <div className='flex justify-between py-2'>
        <div className='flex gap-3'>
          <div className='cursor-pointer hover:scale-110 hover:text-blue-500'><LikeIcon /></div>
          {/* <div><FilledLikeIcon /></div> */}
          <div className='cursor-pointer hover:scale-110'><CommentIcon /></div>
          <div className='cursor-pointer hover:scale-110'><TbLocationShare size={22} opacity={0.7} /></div>
        </div>
        <div className='cursor-pointer hover:scale-110 hover:text-red-500'>
          <SaveIcon />
        </div>
      </div>
      <div>
        11 likes
      </div>
      <div className='py-2 text-sm text-neutral-400'>View (#) of comments</div>
      <div className='flex py-2'>
        <div className='w-full flex flex-col text-sm leading-tight'>
          {new Array(3).fill(0).map((_, i) => (
            <div className='font-semibold'>username
              <span className='pl-1 font-normal text-neutral-700 tracking-wide'>
                A good example of a comment to test this app!
              </span>
            </div>
          ))}
          <form onSubmit={(e) => e.preventDefault()} className='flex py-4 w-full'>
            <TextAreaAutoSize
              id={`comment ${postIndex}`}
              name={`comment ${postIndex}`}
              value={inputValue}
              onChange={handleInputChange}
              className='text-sm w-full outline-none resize-none pr-2'
              placeholder='Add a Comment...'
              style={{ boxSizing: 'border-box' }}
              minRows={1}
              maxRows={20}
            />
            <div className='flex items-center gap-2'>
              <button disabled={!inputValue} className='text-sm text-blue-600 hover:text-blue-400 disabled:hidden'>Post</button>
              <span><SmileyEmoji /></span>
            </div>
          </form>
        </div>

      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Post