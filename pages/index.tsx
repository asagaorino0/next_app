import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import React, { useContext, useState, useEffect } from 'react';
// import app, { db, collection, useUser, login, logout } from "../plugins/firebase";
import liff from '@line/liff';
// import { getAuth, signInAnonymously, db, firebaseAuth, googleProvider } from "../plugins/firebase";
// import { linkWithPopup } from 'firebase/auth'
// import FirebaseAuthUserInfo from '../src/Firebase/AuthUserInfo';
// import FirebaseAuthSigninButton from '../src/firebase/FirebaseAuthSigninButton';
// import FirebaseAuthSignupButton from '../src/firebase/FirebaseAuthSignupButton';
// import FirebaseAuthGoogleButton from '../src/firebase/FirebaseAuthGoogleButton';
// import FirebaseAuthSignoutButton from '../src/firebase/FirebaseAuthSignoutButton';
// import FirestoreAddButton from '../src/firebase/FirestoreAddButton';
// import FirestoreList from '../src/firebase/FirestoreList';

import { initializeApp, getApps } from "firebase/app"


// console.log('firebase', firebaseConfig)

const Home: NextPage = () => {

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");

  // const loginUrl = process.env.LINE_LOGINURL
  const myLiffId = "1656149559-xXM4l4Gp"
  const loginUrl = "https://access.line.me/oauth2/v2.1/authorize?app_id=1656149559-xXM4l4Gp&client_id=1656149559&scope=chat_message.write+openid+profile&state=MTSFhIGGxsff&bot_prompt=aggressive&response_type=code&code_challenge_method=S256&code_challenge=Hx-YFyPAvO9ZQIg5pQpaGQuMChsOE11Raf_3DHDGFgY&liff_sdk_version=2.11.1&type=L&redirect_uri=https%3A%2F%2Fkonoyubi.site%2F"
  // const loginUrl = "https://access.line.me/oauth2/v2.1/authorize?app_id=1656149559-xXM4l4Gp&client_id=1656149559&scope=chat_message.write+openid+profile&state=MTSFhIGGxsff&bot_prompt=aggressive&response_type=code&code_challenge_method=S256&code_challenge=Hx-YFyPAvO9ZQIg5pQpaGQuMChsOE11Raf_3DHDGFgY&liff_sdk_version=2.11.1&type=L&redirect_uri=https://next-app-theta-teal.vercel.app/%2F"

  // window.onload = function (e) {
  // const onloadd = function () {
  //   liff
  //     .init({ liffId: myLiffId })
  //     .then(() => {
  //       // 初期化完了
  //       initializeApp();
  //     })
  // };
  // function initializeApp() {
  //   // ログインチェック
  //   if (liff.isLoggedIn()) {
  //     //ログイン済
  //     // onload()
  //   } else {
  //     // 未ログイン
  //     let result = window.confirm("LINE Loginしますか？新着情報を確認する場合はキャンセルしてください。");
  //     if (result) {
  //       liff.login();
  //       // window.location.href = loginUrl;
  //     }
  //   }
  // }
  const lineClick = function () {
    // onloadd()
    console.log('succes!')
    // liff.login();
    window.location.href = loginUrl;
    onload()
  };

  const onload = function () {
    // if (liff.isLoggedIn()) {
    //   liff.getProfile()
    //     .then(profile => {
    //       setName(profile.displayName)
    //       setUid(profile.userId)
    //       setAvatar(profile.pictureUrl)
    //       console.log("{login}", `${name}`, `${avatar}`, `${uid}`);
    //       console.log('succes!')
    //     })
    // }
  }

  // const onload = function () {
  //   if (liff.isLoggedIn()) {
  //     liff.getProfile()
  //       .then(profile => {
  //         // setNName(profile.displayName)
  //         // setName(profile.userId)
  //         // setAvatar(profile.pictureUrl)
  //         // console.log("{login}", `${nName}`, `${avatar}`, `${name}`);
  //         console.log('succes!')
  //         db.collection('users').doc(`${profile.userId}`).set({
  //           name: `${profile.userId}`,
  //           nName: `${profile.displayName}`,
  //           avatar: `${profile.pictureUrl}`,
  //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //         }, { merge: true }//←上書きされないおまじない
  //         )
  //         history.push(`/Main`)
  //       })
  //   }
  // }


  // const lineClick = () => {
  //   linkWithPopup(user:User,googleProvider)
  //     .then((result) => {
  //       const user = result.user
  //       setCurrentUser({
  //         uid: user.uid,
  //         displayName: user.displayName,
  //         isAnonymus: user.isAnonymous,
  //       })
  //     })
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     .catch((error) => {
  //       // Handle Errors here.
  //     })
  // }


  // /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
    liff.init({ liffId: "1656650515-ENMoxvjb" as string })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
          // liff.getProfile()  // ユーザ情報を取得する
          //   .then(profile => {
          //     const userId: string = profile.userId
          //     const displayName: string = profile.displayName
          //     console.log(`Name: ${displayName}, userId: ${userId}`)
          //   })

        } else if (liff.isInClient()) {
          liff.getProfile()  // ユーザ情報を取得する
            .then(profile => {
              const userId: string = profile.userId
              const displayName: string = profile.displayName
              console.log(`Name: ${displayName}, userId: ${userId}`)
            }).catch(function (error) {
              window.alert('Error sending message: ' + error);
            });
        }
      })
  }








  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://konoyubi.site">konoyubi</a>
        </h1>
        <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
          <button onClick={lineClick}>
            <h1 className="mb-4 text-green-500 text-3xl">ログイン</h1></button>
          <p className="mb-2 text-center">sample text</p>
          <button className="btn-blue">Let's Start!!</button>
        </section>

        {/* <a href="https://access.line.me/oauth2/v2.1/authorize?
        app_id=1656650515-ENMoxvjb&
        client_id=1656650515&
        scope=chat_message.write+openid+profile&
        state=MTSFhIGGxsff&
        redirect_uri=https://next-app-theta-teal.vercel.app/"> */}
        <a href="https://access.line.me/oauth2/v2.1/authorize?app_id=1656650515-ENMoxvjb&client_id=1656650515&scope=chat_message.write+openid+profile&state=MTSFhIGGxsff&bot_prompt=aggressive&response_type=code&code_challenge_method=S256&code_challenge=Hx-YFyPAvO9ZQIg5pQpaGQuMChsOE11Raf_3DHDGFgY&liff_sdk_version=2.11.1&type=L&redirect_uri=https://next-app-theta-teal.vercel.app/">
          {/* <a href="https://access.line.me/oauth2/v2.1/authorize?app_id=1656149559-xXM4l4Gp&client_id=1656149559&scope=chat_message.write+openid+profile&state=MTSFhIGGxsff&bot_prompt=aggressive&response_type=code&code_challenge_method=S256&code_challenge=Hx-YFyPAvO9ZQIg5pQpaGQuMChsOE11Raf_3DHDGFgY&liff_sdk_version=2.11.1&type=L&redirect_uri=https%3A%2F%2Fkonoyubi.site%2F"> */}
          <div>
            ログイン
          </div>
        </a>

        <button className="button" onClick={getUserInfo}>show user info</button>


        {/* <FirebaseAuthGoogleButton />
        <FirebaseAuthSignoutButton />


        <FirestoreAddButton />
        <FirestoreList /> */}




        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
