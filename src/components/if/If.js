import React from 'react';

export const If = ({ condition, children }) => condition ? children : null;
export const IsObjectEmpty = (object) => !!Object.keys(object).length;
