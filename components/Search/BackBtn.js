import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function BackBtn() {
  const router = useRouter();
  return (
    <div onClick={() => router.replace("/")}>
      <Image
        src=" https://img.icons8.com/ios-filled/50/000000/left.png"
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </div>
  );
}
