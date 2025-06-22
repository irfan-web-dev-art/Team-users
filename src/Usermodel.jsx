import React from "react";
import { IoMdClose } from "react-icons/io";
import { userdata } from "./Userinformation";

const Usermodel = ({ see, hide, selectedIndex }) => {
  const user = userdata.find((u) => u.id === selectedIndex);

  if (!user) return null;

  return (
    <div className="w-full min-h-screen fixed top-0 left-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] xl:w-[35%] bg-white p-6 rounded-xl relative shadow-xl animate-fadeIn">
        <IoMdClose
          onClick={() => hide(false)}
          className="text-3xl cursor-pointer absolute right-4 top-4 text-gray-600 hover:text-red-500 transition"
        />

        <img
          src={user.image}
          alt={user.name}
          className="w-[150px] h-[150px] rounded-full shadow-lg block mx-auto border-4 border-purple-300"
        />

        <h2 className="text-center text-2xl font-bold text-purple-700 mt-4">
          {user.name}
        </h2>
        <p className="text-center text-sm text-gray-500">{user.work}</p>

        <div className="flex justify-center gap-4 mt-4">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
            DOB: {user.dob}
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
            Salary: ${user.salery}
          </span>
        </div>

        <p className="text-gray-600 mt-4 text-center px-2">{user.desc}</p>
      </div>
    </div>
  );
};

export default Usermodel;
