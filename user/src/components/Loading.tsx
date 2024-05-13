import { iconlogo } from "../assets";

const Loading = () => {
  return (
    <div className="h-[717px] w-full flex flex-col items-center justify-center">
      <img
        src={iconlogo}
        alt="Logo"
        className="h-[30%] animate-spin w-[30%] object-contain"
      />
    </div>
  );
};
export default Loading;
