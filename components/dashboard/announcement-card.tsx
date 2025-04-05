import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AnnouncementCardProps {
  title: string
  property: string
  date: string
  content: string
}

export function AnnouncementCard({ title, property, date, content }: AnnouncementCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {property} • {date}
          </p>
        </div>
        <p className="text-sm line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}

