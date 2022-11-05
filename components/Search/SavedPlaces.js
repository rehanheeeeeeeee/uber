import Image from "next/image";
import React from "react";

const styles = {
  wrapper:
    "flex items-center bg-white my-2 px-4 py-2  w-full text-lg space-x-2 font-semibold",
  icon: "bg-gray-400 p-2 rounded-full",
};

export default function SavedPlaces() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Image
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          height={23}
          width={23}
        />
      </div>
      <p>Saved Places</p>
    </div>
  );
}
