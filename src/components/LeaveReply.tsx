import { styles } from "../styles";

const LeaveReply = () => {
  return (
    <div className={`${styles.padding} w-[70%] h-auto flex flex-col gap-3`}>
      <p className={`${styles.sectionSubText}`}>Leave a Reply</p>
      <p className="text-[12px] font-light">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="flex w-full justify-between">
        <div className="relative w-[45%] h-auto rounded-lg border border-slate-200">
          <input
            type="text"
            placeholder="Name"
            className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
          />
          <p className="absolute top-1 right-1">*</p>
        </div>
        <div className="relative w-[45%] h-auto rounded-lg border border-slate-200">
          <input
            type="text"
            placeholder="Email"
            className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
          />
          <p className="absolute top-1 right-1">*</p>
        </div>
      </div>
      <div className="relative w-full h-auto rounded-lg border border-slate-200">
        <input
          type="text"
          placeholder="Title"
          className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
        />
        <p className="absolute top-1 right-1">*</p>
      </div>
      <div className="relative w-full h-auto rounded-lg border border-slate-200">
        <textarea
          rows={5}
          placeholder="Write your comment here"
          className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
        />
        <p className="absolute top-1 right-1">*</p>
      </div>
      <button
        className={`${styles.primaryBgColor} text-white py-2 text-[14px] rounded-lg w-[20%]`}
      >
        Post Comment
      </button>
    </div>
  );
};
export default LeaveReply;
