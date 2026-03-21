import DefaultLayout from "./DefaultLayout/DefaultLayout";
import SidebarLayout from "./SidebarLayout/SidebarLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const CurrentLayout = SidebarLayout;

  return <CurrentLayout>{children}</CurrentLayout>;
};

export default Layout;
