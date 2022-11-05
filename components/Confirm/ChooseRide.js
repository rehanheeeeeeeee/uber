import React, { useEffect, useState } from "react";
import { carList } from "../../public/assets/carList";
import Ride from "./Ride";

const styles = {
  wrapper: "w-full h-[40vh] overflow-y-scroll scrollbar-hide",
  rideHeader:
    "p-2 border-b-2 w-full text-center text-xs font-medium text-gray-600",
};

export default function ChooseRide({ pickUp, dropOff }) {
  const [rideDuration, setRideDuration] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUp[0]},${pickUp[1]};${dropOff[0]},${dropOff[1]}?access_token=pk.eyJ1IjoicmVoYW50b3NpZiIsImEiOiJjbGEycjloZzkwajg2M3Bxdm1rM2diNHlqIn0.SrZTiiNtWGhlAVHKqLQIiA
      `
    )
      .then((res) => res.json())
      .then((data) => {
        try {
          setRideDuration(data?.routes[0]?.duration / 100);
        } catch (error) {
          console.log(error.message);
        }
      });
  }, [pickUp, dropOff]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.rideHeader}>Choose a ride or swipe up for me</div>
      {carList.map((car, index) => (
        <Ride
          rideDuration={rideDuration}
          key={index}
          image={car.imgUrl}
          multiplier={car.multiplier}
          service={car.service}
        />
      ))}
    </div>
  );
}
