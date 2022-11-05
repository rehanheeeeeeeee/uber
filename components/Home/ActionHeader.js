import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { auth } from "../../firebase";

const styles = {
  wrapper: "flex flex-row items-center justify-between w-full pr-7",
  profile: "flex items-center space-x-5 text-md font-medium capitalize",
};

const signout = () => {
  signOut(auth);
};

export default function ActionHeader() {
  const user = auth.currentUser;
  const Profile = ({ name, photoUrl }) => (
    <div className={styles.profile}>
      <p>{name}</p>
      <Image src={photoUrl} width={40} height={40} className="rounded-full" />
    </div>
  );
  return (
    <div className={styles.wrapper}>
      <Image
        className="cursor-pointer"
        onClick={signout}
        src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
        width={160}
        height={100}
      />
      <Profile name={user?.displayName} photoUrl={user?.photoURL} />
    </div>
  );
}
