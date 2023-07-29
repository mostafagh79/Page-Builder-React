import soroushPlus from "../../assets/images/soroushPlusLogo.svg";
import React from "react";

function LoginHeader() {
  return (
    <div className="flex--basic justify-center">
      <img
        className="rounded-full h-10 w-10 self-center"
        src={soroushPlus}
        alt="soroshPlusLogo"
      />
      <p className="self-center">صفحه ساز سروش پلاس</p>
    </div>
  );
}

export default React.memo(LoginHeader);
