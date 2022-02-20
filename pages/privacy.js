import React from "react";
import PrivacyPolicyDetails from "../components/privacyPolicyDetails";

const PrivacyPolicy = () => {
  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>
      <PrivacyPolicyDetails />
    </div>
  );
};

export default PrivacyPolicy;
