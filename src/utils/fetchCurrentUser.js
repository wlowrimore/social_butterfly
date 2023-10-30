'use client'
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const useFetchCurrentUser = () => {
  const fetchUser = async () => {
    const currentUserRef = doc(db, "users", email);
    const currentUserSnap = await getDoc(currentUserRef);

    if (docSnap.exists()) {
      dispatch({
        type: 'SET_USER',
        payload: {
          user: currentUserSnap.data()
        }
      })
      dispatch({
        type: 'SET_IS_ONBOARDED',
        payload: {
          isOnboarded: true
        }
      })
    } else {
      toast('Please complete onboarding.')
    }
  }
  return { fetchUser };
}

export default useFetchCurrentUser
