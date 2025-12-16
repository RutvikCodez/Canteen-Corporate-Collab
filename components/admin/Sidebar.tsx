import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="hidden lg:min-h-screen lg:inset-y-0 lg:flex lg:flex-col">
      <div className="flex flex-col grow bg-white border-r border-gray-200">
        <SidebarContent />
      </div>
    </div>
  );
};

export default Sidebar;
