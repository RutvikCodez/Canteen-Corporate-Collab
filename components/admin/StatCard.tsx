import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const StatCard = ({ title, value, Icon, desc, ...props }: statCardProps) => {
  return (
    <Card className="flex flex-col gap-2" {...props}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {desc}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
