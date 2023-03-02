const Loading = () => {
  return (
    <>
      <div className=" h-screen w-full absolute top-0 z-50 bg-base-100 flex flex-col gap-10 justify-center items-center">
        <img
          src="/images/logo-app.png"
          alt="iadvertise logo"
          className="w-24 animate-pulse"
        />
        <progress className="progress w-56"></progress>
      </div>
    </>
  );
};

export default Loading;
