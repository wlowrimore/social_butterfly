import { PiSpinnerGapBold } from 'react-icons/pi'

const LoadingOverlay = () => {
  return (
    <div className='absolute inset-0 z-100 w-full h-full bg-black/30 text-blue-700/50 text-6xl flex items-center justify-center'>
      <PiSpinnerGapBold className='animate-spin' />
    </div>
  )
}

export default LoadingOverlay