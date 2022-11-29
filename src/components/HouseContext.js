import React, { useState, useEffect, createContext } from 'react';

import { houseData } from '../data';
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  return (
    <HouseContext.Provider value={console.log('this is the context')}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
