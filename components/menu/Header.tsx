
const Header = ({ tableNumber, ...props }: menuHeaderProps) => {
  return (
    <header
      className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg"
      {...props}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between py-2 max-xl:px-4">
        <div>
          <h1 className="text-xl md:text-2xl font-serif font-bold">
            Restaurant Name
          </h1>
          <p className="text-primary-foreground/80 text-sm">
            Authentic Italian cuisine
          </p>
        </div>
        <div className="text-2xl font-bold max-md:hidden">Table {tableNumber}</div>
      </div>
    </header>
  );
};

export default Header;
