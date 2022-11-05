import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const styles = {
  signIn: "font-medium bg-black text-white text-lg w-full my-5 p-3 rounded-sm",
  wrapper: "h-full px-3 flex flex-col justify-start",
  header: "text-5xl",
};

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        router.push("/");
      } else {
        router.push("/login");
      }
    });
  }, []);
  const signIn = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className={styles.wrapper}>
      <Image
        src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
        width={125}
        height={100}
        className="-ml-2"
      />
      <p className={styles.header}>Log in to Access your Accont</p>
      <Image
        src="https://i.ibb.co/CsV9RYZ/login-image.png"
        width={450}
        height={400}
        className="object-contain"
      />
      <button onClick={signIn} className={styles.signIn}>
        Sign In With Google
      </button>
    </div>
  );
}
