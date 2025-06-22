import React from "react";

const Singleuser = ({ id, name, work, image, see, setSelectedIndex }) => {
  const handleClick = () => {
    see(true);
    setSelectedIndex(id);
  };

  return (
    <div className="flex justify-between items-center shadow-md rounded-lg p-4 bg-gray-100 mb-4 hover:shadow-lg transition duration-300">
      <div className="flex items-center gap-4">
        <img
          className="w-[60px] h-[60px] object-cover rounded-full border-2 border-purple-500"
          src={image}
          alt={name}
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{work}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition active:scale-95"
      >
        View
      </button>
    </div>
  );
};

export default Singleuser;
