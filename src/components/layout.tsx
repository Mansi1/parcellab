import type { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav></nav>
      <main className="grow">{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
