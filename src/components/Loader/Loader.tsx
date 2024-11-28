import Lottie from "lottie-react";
import loader from "@assets/LottieFiles/loader.json";

const Loader = () => {
  return (
    <>
      <Lottie animationData={loader} className="loader" />
    </>
  );
};

export default Loader;
