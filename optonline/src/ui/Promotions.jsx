import React from 'react';


export default function Promotions() {
    return (
        <div className="bg-white p-4 h-[400px] w-80 rounded shadow-md text-center max-w-sm">
        <h3 className="text-3xl font-normal mb-2 font-orbit">Optimum Mobile</h3>
        <p className="text-sm text-gray-700 mb-4 w-[80%] mx-auto">
          Save up to 50% on your Mobile bills vs Verizon / AT&T, and enjoy America's largest 5G network.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition">
          Learn more
        </button>
      </div>

    );
}


