import React from 'react';

const WithRoom = () => {
  return (
    <div className="items-center justify-center  bg-gray-100 m-8">
      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <div className="text-lg font-bold text-gray-800 mb-4">Looking for a Room with Roommates?</div>
        <div className="mb-4">
          <a href="#">
            <img src="src\assets\withRoommate.png" className="w-16 h-16 mx-auto" alt="With Roommate" />
          </a>
        </div>
        <div className="text-gray-600 font-medium">
          Find your perfect match today!
        </div>
      </div>
    </div>
  );
};

export default WithRoom;
