import React from "react";
import Singup from "../../components/sing-up.component/singup.component";
import Singin from "../../components/singin/singin.component";

import "./sing-in-singup.componet.scss";

const SingInAndSingupPage = () => {
  return (
    <div className="sing-in-sing-up">
      <Singin />
      <Singup />
    </div>
  );
};

export default SingInAndSingupPage;
