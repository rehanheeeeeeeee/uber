import Image from "next/image";
import React from "react";

const styles = {
  wrapper: "flex items-center px-3 py-2 space-x-5",
  carInfo: "flex-1 h-1/2",
  carName: "font-bold text-md",
  time: "text-blue-600 text-sm font-semibold",
  price: "font-semibold",
};

export default function Ride({ service, image, multiplier, rideDuration }) {
  return (
    <div className={styles.wrapper}>
      <Image src={image} width={70} height={70} />
      <div className={styles.carInfo}>
        <p className={styles.carName}>{service}</p>
        <p className={styles.time}>5 min away</p>
      </div>
      <p className={styles.price}>${(rideDuration * multiplier).toFixed(2)}</p>
    </div>
  );
}
