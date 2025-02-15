import React from "react";

const Layout = ({ ...props }: React.PropsWithChildren) => {
  return (
    <div className="bg-gray-900 min-h-screen min-w-full text-white p-8">
      {props.children}
    </div>
  );
};

export default Layout;
