import type { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="grow flex">{children}</main>
      <footer className="text-sm text-gray-200 text-center p-2">
        <a href="https://github.com/Mansi1/parcellab" target="_blank">
          ©{new Date().getFullYear()} Michael Mannseicher - github repo
        </a>
      </footer>
    </>
  );
};

export default Layout;
