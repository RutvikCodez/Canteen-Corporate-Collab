const TopItem = ({
  name,
  orders,
  revenue,
  number,
  ...props
}: topItemsProps) => {
  return (
    <div className="flex items-center justify-between" {...props}>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
          {number}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{orders} orders</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">₹{revenue}</p>
      </div>
    </div>
  );
};

export default TopItem;
