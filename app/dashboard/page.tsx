import { Building2, ClipboardCheck, Home, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { PropertyCard } from "@/components/dashboard/property-card"
import { MaintenanceRequestCard } from "@/components/dashboard/maintenance-request-card"
import { AnnouncementCard } from "@/components/dashboard/announcement-card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-muted/30">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back to your strata management dashboard.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Units</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <p className="text-xs text-muted-foreground">+24 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open Maintenance Requests</CardTitle>
                  <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">-3 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Next: Apr 10, 2025</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Recent Properties</h2>
                  <p className="text-sm text-muted-foreground">Your most recently updated properties.</p>
                </div>
                <div className="space-y-4">
                  <PropertyCard
                    name="Harbour View Apartments"
                    address="123 Ocean Drive, Seaside"
                    units={48}
                    image="/placeholder.svg?height=100&width=200"
                  />
                  <PropertyCard
                    name="Mountain Terrace"
                    address="45 Alpine Road, Highland"
                    units={32}
                    image="/placeholder.svg?height=100&width=200"
                  />
                  <PropertyCard
                    name="City Central Condos"
                    address="789 Main Street, Downtown"
                    units={64}
                    image="/placeholder.svg?height=100&width=200"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Maintenance Requests</h2>
                  <p className="text-sm text-muted-foreground">Recent maintenance requests requiring attention.</p>
                </div>
                <div className="space-y-4">
                  <MaintenanceRequestCard
                    title="Water Leak in Unit 302"
                    property="Harbour View Apartments"
                    status="urgent"
                    date="Apr 2, 2025"
                    description="Water leaking from ceiling in bathroom, possible pipe issue."
                  />
                  <MaintenanceRequestCard
                    title="Broken Gate at Entrance"
                    property="Mountain Terrace"
                    status="in-progress"
                    date="Apr 1, 2025"
                    description="Main entrance gate not closing properly, security concern."
                  />
                  <MaintenanceRequestCard
                    title="Lighting Out in Parking Area"
                    property="City Central Condos"
                    status="pending"
                    date="Mar 30, 2025"
                    description="Several lights out in section B of underground parking."
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Announcements</h2>
                  <p className="text-sm text-muted-foreground">Recent community announcements and updates.</p>
                </div>
                <div className="space-y-4">
                  <AnnouncementCard
                    title="Annual General Meeting"
                    property="All Properties"
                    date="Apr 15, 2025"
                    content="The annual general meeting will be held on April 15th at 7:00 PM in the community center. All owners are encouraged to attend."
                  />
                  <AnnouncementCard
                    title="Pool Maintenance"
                    property="Harbour View Apartments"
                    date="Apr 8, 2025"
                    content="The swimming pool will be closed for maintenance from April 8th to April 10th. We apologize for any inconvenience."
                  />
                  <AnnouncementCard
                    title="New Recycling Guidelines"
                    property="All Properties"
                    date="Apr 1, 2025"
                    content="Please review the updated recycling guidelines that have been distributed to all units. The changes take effect on May 1st."
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

