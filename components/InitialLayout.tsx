import {useAuth} from '@clerk/clerk-expo';
import {useRouter, useSegments, Stack } from "expo-router";
import { useEffect } from 'react';

export default function InitialLayout() {
   const {isLoaded,isSignedIn} = useAuth()
   const segments = useSegments();
   const router = useRouter();

   useEffect(() => {
    if(!isLoaded ) return
 
   const inAuthScreen = segments[0] ==="(auth)"
   
   if (!isSignedIn) {
    if (!inAuthScreen) {
      router.replace("/(auth)/login");
    }
  } else {
    if (inAuthScreen) {
      // Add a small delay to allow Clerk to update the state properly
      setTimeout(() => {
        router.replace("/(drawer)/(tabs)");
      }, 500); // 100ms delay
    }
  }
  
   }, [isLoaded, isSignedIn, segments]) ;

    if(!isLoaded) return null ;

    return(
         <Stack screenOptions={{headerShown: false}} />
         
         
);
}
