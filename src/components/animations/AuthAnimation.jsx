import Lottie from 'react-lottie-player';
import HomeAnimation from 'public/assets/home-page-animation.json'

const AuthAnimation = () => {
  return (
    <Lottie
      loop
      animationData={HomeAnimation}
      play
      className='w-[80%] h-auto lg:w-[60%]'
    />
  )
}

export default AuthAnimation