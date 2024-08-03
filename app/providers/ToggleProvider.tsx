'use client';

import { createContext, useState } from 'react';
import type { DropdownToggle } from '../types';

const DropdownToggleContext = createContext<DropdownToggle | undefined>(
  undefined,
);

function DropdownToggleProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState(false);

  return (
    <DropdownToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </DropdownToggleContext.Provider>
  );
}

export { DropdownToggleContext, DropdownToggleProvider };
