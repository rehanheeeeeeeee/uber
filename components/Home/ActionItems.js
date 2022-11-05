import React from "react";
import ActionButtons from "./ActionButtons";
import ActionHeader from "./ActionHeader";
import ActionInfoBtn from "./ActionInfoBtn";

const styles = {
  wrapper: "flex-1 text-black w-full flex flex-col items-center",
};

export default function ActionItems() {
  return (
    <div className={styles.wrapper}>
      <ActionHeader />
      <div className="flex flex-col items-center w-full px-4">
        <ActionButtons />
        <ActionInfoBtn />
      </div>
    </div>
  );
}
