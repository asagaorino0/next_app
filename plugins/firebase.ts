// v9 compat packages are API compatible with v8 code
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp, getApps } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithRedirect, signOut, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BAKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// const app = getApps
// if (!app.length) {
//     initializeApp(firebaseConfig)
// }





console.log('firebase:', firebaseConfig)
const db = getFirestore()
// import { getAuth, signInAnonymously } from "firebase/auth";
const firebaseAuth = getAuth()
const googleProvider = new GoogleAuthProvider()
export { firebaseAuth, db, googleProvider, firebaseConfig }

// export const auth = getAuth();
// signInAnonymously(auth)
//     .then(() => {
//         // Signed in..
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ...
//     });


// import { useEffect, useState } from "react";
// import { atom, useRecoilValue, useSetRecoilState } from "recoil";
// import {
//     User,
//     getAuth,
//     signInWithRedirect,
//     signOut,
//     onAuthStateChanged,
//     GoogleAuthProvider,
// } from "firebase/auth";

// type UserState = User | null;

// const userState = atom<UserState>({
//     key: "userState",
//     default: null,
//     dangerouslyAllowMutability: true,
// });

// export const login = (): Promise<void> => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth(app);
//     return signInWithRedirect(auth, provider);
// };

// export const logout = (): Promise<void> => {
//     const auth = getAuth(app);
//     return signOut(auth);
// };

// export const useAuth = (): boolean => {
//     const [isLoading, setIsLoading] = useState(true);
//     const setUser = useSetRecoilState(userState);

//     useEffect(() => {
//         const auth = getAuth(app);
//         return onAuthStateChanged(auth, (user) => {
//             setUser(user);
//             setIsLoading(false);
//         });
//     }, [setUser]);

//     return isLoading;
// };

// export const useUser = (): UserState => {
//     return useRecoilValue(userState);
// };