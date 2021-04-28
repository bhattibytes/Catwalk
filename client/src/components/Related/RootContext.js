import React from 'react';
import RelatedProvider from './RelatedContext';

export const RootProvider = ({ children }) => (
  <RelatedProvider>
    {children}
  </RelatedProvider>
);
