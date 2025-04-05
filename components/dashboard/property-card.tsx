import Link from "next/link"
import { Home } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  name: string
  address: string
  units: number
  image: string
}

export function PropertyCard({ name, address, units, image }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Home className="h-3 w-3 mr-1" />
            <span>{units} units</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/dashboard/properties/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

