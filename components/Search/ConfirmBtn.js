import React from "react";
import { useRouter } from "next/router";

const styles = {
  btn: (pickLocation, whereTo) =>
    `${
      pickLocation && whereTo ? "bg-black" : "bg-gray-400"
    } text-white text-lg w-11/12 font-medium p-2 my-2 w-full text-center`,
};

export default function ConfirmBtn({ pickLocation, whereTo }) {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        router.push(`/confirm?pickUp=${pickLocation}&dropOff=${whereTo}`)
      }
      className={styles.btn(pickLocation, whereTo)}
      disabled={!pickLocation && !whereTo}
    >
      Confirm Locations
    </button>
  );
}
