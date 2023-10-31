import { PiSpinnerGapBold } from 'react-icons/pi'
import localFont from 'next/font/local'

const lounge = localFont({
  src: [
    {
      path: '../app/fonts/lounge.ttf',
      weight: '600'
    }
  ]
})

const LoadingOverlay = () => {
  return (
    <div className='absolute inset-0 z-10 w-full h-full bg-white text-red-600/70 text-4xl flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center mx-auto space-y-3'>
        <PiSpinnerGapBold className='animate-spin' />
        <p className={`${lounge.className} text-red-600/70`}>Loading PhotoGram...</p>
      </div>
    </div>
  )
}

export default LoadingOverlay