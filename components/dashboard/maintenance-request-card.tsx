import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface MaintenanceRequestCardProps {
  title: string
  property: string
  status: "urgent" | "in-progress" | "pending" | "completed"
  date: string
  description: string
}

export function MaintenanceRequestCard({ title, property, status, date, description }: MaintenanceRequestCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{title}</h3>
          <Badge
            variant={
              status === "urgent"
                ? "destructive"
                : status === "in-progress"
                  ? "default"
                  : status === "pending"
                    ? "secondary"
                    : "outline"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {property} • {date}
        </p>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

