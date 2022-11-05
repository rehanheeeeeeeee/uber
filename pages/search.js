import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BackBtn from "../components/Search/BackBtn";
import ConfirmBtn from "../components/Search/ConfirmBtn";
import SavedPlaces from "../components/Search/SavedPlaces";
import SearchInputs from "../components/Search/SearchInputs";
import { auth } from "../firebase";

const styles = {
  container: "flex flex-col w-full bg-gray-200 flex-1 items-center",
  wrapper: "bg-white p-2 w-full",
};

export default function Search() {
  const user = auth.currentUser;
  const router = useRouter();
  const [pickLocation, setPickLocation] = useState("");
  const [whereTo, setWhereTo] = useState("");
  useEffect(() => {
    !user && router.push("/login");
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <BackBtn />
        <SearchInputs
          pickLocation={pickLocation}
          setPickLocation={setPickLocation}
          whereTo={whereTo}
          setWhereTo={setWhereTo}
        />
      </div>
      <SavedPlaces />
      <ConfirmBtn pickLocation={pickLocation} whereTo={whereTo} />
    </div>
  );
}
