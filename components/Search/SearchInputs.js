import Image from "next/image";
import React, { useState } from "react";

const styles = {
  wrapper: "flex items-center justify-between p-3",
  line: "h-12 w-4",
  icons: "flex flex-col items-center",
  inputs: "flex flex-col space-y-3 w-full px-5",
  input:
    "bg-gray-200 w-full px-2 py-3 rounded-sm font-medium outline-none text-sm placeholder:text-gray-400",
  add: "bg-gray-200 rounded-full p-1 text-center",
};

export default function SearchInputs({
  pickLocation,
  setPickLocation,
  whereTo,
  setWhereTo,
}) {
  const Icons = () => (
    <div className={styles.icons}>
      <Image
        src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
        width={10}
        height={10}
      />
      <Image
        src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
        width={10}
        height={70}
        className={styles.line}
      />
      <Image
        src="https://img.icons8.com/windows/50/000000/square-full.png"
        width={10}
        height={10}
      />
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Icons />
      <div className={styles.inputs}>
        <input
          className={styles.input}
          placeholder="Enter pickup location"
          value={pickLocation}
          onChange={(event) => setPickLocation(event.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Where to?"
          value={whereTo}
          onChange={(event) => setWhereTo(event.target.value)}
        />
      </div>
      <div className={styles.add}>
        <Image
          src="https://img.icons8.com/ios/50/000000/plus-math.png"
          width={35}
          height={35}
        />
      </div>
    </div>
  );
}
