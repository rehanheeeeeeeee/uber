import React from "react";

const styles = {
  wrapper: "sticky bottom-0 bg-white border-t border-gray-300 p-3 w-full",
  confirmBtn:
    "bg-black border-sm text-white text-center p-3 font-medium text-lg",
};

export default function ConfirmButton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.confirmBtn}>Confirm UberX</div>
    </div>
  );
}
