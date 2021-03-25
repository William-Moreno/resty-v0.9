import React from 'react';

export const If = ({ condition, children }) => condition ? children : null;
export const Else = ({ condition, children }) => condition ? null : children;