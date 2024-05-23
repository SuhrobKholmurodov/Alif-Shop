import React from "react";
import TextField from "@mui/material/TextField";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contact = () => {
  return (
    <div className="all">
      <div className="pb-[20px]">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      <section className="pt-[10px] flex justify-between gap-[40px] pb-[50px]">
        <div className="shadow shadow-slate-300 p-[30px] bg-gray-100">
          <div className="flex flex-col pb-[30px] border-b-2 gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="border p-[7px] bg-gray-500 rounded-full">
                <LocalPhoneOutlinedIcon className="text-white" />
              </div>
              <p className="font-[500] text-[20px]">Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="flex flex-col pb-[30px] pt-[30px] gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="border p-[7px] bg-gray-500 rounded-full">
                <EmailOutlinedIcon className="text-white" />
              </div>
              <p className="font-[500] text-[20px]">Write To US</p>
            </div>
            <p>
              Fill out our form and we will contact<br></br> you within 24
              hours.
            </p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="shadow shadow-slate-300 p-[30px] bg-gray-100">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-[25px]">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
          </div>
          <div>
            <input
              className="h-[220px] pb-[175px] pl-[10px] border-[1.5px] border-[#d4d2d2] focus:outline-[#325fc6] rounded-[5px] text-[#000000] w-[100%] mt-[20px]"
              type="text"
              placeholder="Your Massage"
            />
          </div>
          <div className="pt-[50px]">
            <button className=" bg-gray-500 hover:bg-gray-600 w-[100%] text-white rounded-[4px] h-[50px]">
              Send Massage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
