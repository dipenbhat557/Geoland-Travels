import { useState } from "react";
import { styles } from "../styles";

import * as emailjs from "emailjs-com";

const LeaveReply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    title: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    console.log("on change data is ", form);
  };

  const handleSubmit = (e: any) => {
    console.log("DAta is ", form);
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_htp2klw",
        "template_a9c3yzv",
        {
          from_name: form.name,
          to_name: "Geoland Travels",
          from_email: form.email,
          to_email: "bhattadipen557@gmail.com",
          message: form.comment,
        },
        "70gtdMrv58XYFp0DP"
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            comment: "",
            title: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div
      className={`${styles.padding} w-full sm:w-[70%] h-auto flex flex-col gap-3`}
    >
      <p className={`${styles.sectionSubText}`}>Leave a Reply</p>
      <p className="text-[12px] font-light">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="flex w-full justify-between">
        <div className="relative w-[45%] h-auto rounded-lg border border-slate-200">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
          />
          <p className="absolute top-1 right-1">*</p>
        </div>
        <div className="relative w-[45%] h-auto rounded-lg border border-slate-200">
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
          />
          <p className="absolute top-1 right-1">*</p>
        </div>
      </div>
      <div className="relative w-full h-auto rounded-lg border border-slate-200">
        <input
          name="title"
          value={form?.title}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Title"
          className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
        />
        <p className="absolute top-1 right-1">*</p>
      </div>
      <div className="relative w-full h-auto rounded-lg border border-slate-200">
        <textarea
          name="comment"
          value={form?.comment}
          onChange={(e) => handleChange(e)}
          rows={5}
          placeholder="Write your comment here"
          className="w-[98%] focus:outline-none p-2 placeholder:text-[14px] "
        />
        <p className="absolute top-1 right-1">*</p>
      </div>
      <button
        onClick={handleSubmit}
        className={`${styles.primaryBgColor} text-white py-2 text-[14px] rounded-lg w-[40%] sm:w-[20%]`}
      >
        {loading ? "Posting Comment..." : "Post Comment"}
      </button>
    </div>
  );
};
export default LeaveReply;
