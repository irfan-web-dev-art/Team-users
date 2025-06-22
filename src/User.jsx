import React, { useState } from "react";
import Singleuser from "./Singleuser";
import { userdata } from "./Userinformation";
import Usermodel from "./Usermodel";

const User = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      {show && (
        <Usermodel selectedIndex={selectedIndex} see={show} hide={setShow} />
      )}
      <div className="container mx-auto w-full md:w-[70%] xl:w-[50%] shadow-lg rounded-lg p-6 bg-white mt-10">
        <h2 className="text-center text-3xl text-purple-600 font-bold mb-5">
          Our Team
        </h2>

        {userdata.map((item) => (
          <Singleuser
            key={item.id}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            see={setShow}
            {...item}
          />
        ))}
      </div>
    </>
  );
};

export default User;
