import DefaultLayout from "./DefaultLayout/DefaultLayout";
import SidebarLayout from "./SidebarLayout/SidebarLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = 1;
  const CurrentLayout = user === null ? DefaultLayout : SidebarLayout;

  return <CurrentLayout>{children}</CurrentLayout>;
};

export default Layout;
