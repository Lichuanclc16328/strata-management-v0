import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-muted-foreground/50 mb-4" />
        <p className="text-lg italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </CardFooter>
    </Card>
  )
}

