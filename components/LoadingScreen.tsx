import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen max-h-screen bg-dark-300">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
