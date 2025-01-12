import React from 'react';

const WithoutRoom = () => {
  return (
    <div className="items-center justify-center bg-gray-100 m-8">
      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <div className="text-lg font-bold text-gray-800 mb-4">Need a Roommate without room?</div>
        <div className="mb-4">
          <a href="#">
            <img src="src\\assets\\withoutRoommate.png" className="w-16 h-16 mx-auto" alt="Without Roommate" />
          </a>
        </div>
        <div className="text-gray-600 font-medium">
        Find your perfect match today!
        </div>
      </div>

      
    </div>
  );
};

export default WithoutRoom;
