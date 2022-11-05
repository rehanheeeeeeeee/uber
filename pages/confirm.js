import React, { useEffect, useState } from "react";
import ChooseRide from "../components/Confirm/ChooseRide";
import ConfirmButton from "../components/Confirm/ConfirmButton";
import Map from "../components/Home/Map";
import { useRouter } from "next/router";
import Image from "next/image";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const getServerSideProps = (context) => {
  return {
    props: {
      pickUpLocation: context.query.pickUp || "Manama",
      dropOffLocation: context.query.dropOff || "Hamad Town",
    },
  };
};

const styles = {
  wrapper: "flex flex-col relative items-center w-full h-full",
  back: "absolute top-5 left-5 bg-white rounded-full",
};

export default function Confirm({ pickUpLocation, dropOffLocation }) {
  const router = useRouter();
  const user = auth.currentUser;
  !user && router.push("/login");
  const [pickUp, setPickUp] = useState([]);
  const [dropOff, setDropOff] = useState([]);

  useEffect(() => {
    getCoordinates(pickUpLocation, true);
    getCoordinates(dropOffLocation, false);
  }, []);

  const getCoordinates = (location, pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicmVoYW50b3NpZiIsImEiOiJjbGEycjloZzkwajg2M3Bxdm1rM2diNHlqIn0.SrZTiiNtWGhlAVHKqLQIiA",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        pickup
          ? setPickUp(data.features[0].center)
          : setDropOff(data.features[0].center);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Map pickUp={pickUp} dropOff={dropOff} />
      <div className={styles.back} onClick={() => router.replace("/search")}>
        <Image
          src=" https://img.icons8.com/ios-filled/50/000000/left.png"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <ChooseRide pickUp={pickUp} dropOff={dropOff} />
      <ConfirmButton />
    </div>
  );
}
