import React, { useState, useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/signup';
    }, 2900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-full bg-gray-600">
      <div className="text-[20em] animate-fade text-gray-200">
        W
      </div>
    </div>
  );
};

export default Home;