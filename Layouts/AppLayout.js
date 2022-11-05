import React from "react";

const styles = {
  wrapper: "flex flex-col items-center h-[100vh] bg-white w-[500px]",
};
export default function AppLayout({ children }) {
  return (
    <div className="flex justify-center bg-black w-[100vw] h-[100vh]">
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
