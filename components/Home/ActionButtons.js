import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = {
  wrapper: "grid grid-cols-3 w-full space-x-3",
  actionBtn:
    "bg-gray-200 rounded-md flex flex-col items-center py-2 text-lg font-medium transition-transform duration-200 hover:scale-105",
};

export default function ActionButtons() {
  const actionButtons = [
    {
      name: "Ride",
      image: "https://i.ibb.co/cyvcpfF/uberx.png",
    },
    {
      name: "Wheels",
      image: "https://i.ibb.co/n776JLm/bike.png",
    },
    {
      name: "Reserve",
      image: "https://i.ibb.co/5RjchBg/uberschedule.png",
    },
  ];

  const ActionButton = ({ name, image }) => (
    <Link href={"/search"}>
      <div className={styles.actionBtn}>
        <Image src={image} width={80} height={80} />
        <p>{name}</p>
      </div>
    </Link>
  );

  return (
    <div className={styles.wrapper}>
      {actionButtons.map((actionButton, index) => (
        <ActionButton
          key={index}
          name={actionButton.name}
          image={actionButton.image}
        />
      ))}
    </div>
  );
}
