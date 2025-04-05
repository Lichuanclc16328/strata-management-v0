"use client"

import { useState } from "react"
import { Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { MaintenanceRequestCard } from "@/components/dashboard/maintenance-request-card"
import { NewMaintenanceRequestDialog } from "@/components/maintenance/new-maintenance-request-dialog"

export default function MaintenancePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 bg-muted/30">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Maintenance Requests</h1>
                <p className="text-muted-foreground">
                  Manage and track all maintenance requests across your properties.
                </p>
              </div>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                New Request
              </Button>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search requests..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Requests</TabsTrigger>
                <TabsTrigger value="urgent">Urgent</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <MaintenanceRequestCard
                    title="Elevator Maintenance"
                    property="Harbour View Apartments"
                    status="scheduled"
                    date="Apr 5, 2025"
                    description="Scheduled maintenance for elevator #2, will be out of service from 9am-12pm."
                  />
                  <MaintenanceRequestCard
                    title="HVAC Repair in Unit 105"
                    property="City Central Condos"
                    status="completed"
                    date="Mar 28, 2025"
                    description="Air conditioning unit repaired and tested, working properly now."
                  />
                  <MaintenanceRequestCard
                    title="Landscaping - Fallen Tree"
                    property="Mountain Terrace"
                    status="in-progress"
                    date="Mar 31, 2025"
                    description="Tree fell during storm, blocking side entrance. Removal in progress."
                  />
                </div>
              </TabsContent>
              <TabsContent value="urgent" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <MaintenanceRequestCard
                    title="Water Leak in Unit 302"
                    property="Harbour View Apartments"
                    status="urgent"
                    date="Apr 2, 2025"
                    description="Water leaking from ceiling in bathroom, possible pipe issue."
                  />
                </div>
              </TabsContent>
              <TabsContent value="in-progress" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <MaintenanceRequestCard
                    title="Broken Gate at Entrance"
                    property="Mountain Terrace"
                    status="in-progress"
                    date="Apr 1, 2025"
                    description="Main entrance gate not closing properly, security concern."
                  />
                  <MaintenanceRequestCard
                    title="Landscaping - Fallen Tree"
                    property="Mountain Terrace"
                    status="in-progress"
                    date="Mar 31, 2025"
                    description="Tree fell during storm, blocking side entrance. Removal in progress."
                  />
                </div>
              </TabsContent>
              <TabsContent value="pending" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <MaintenanceRequestCard
                    title="Lighting Out in Parking Area"
                    property="City Central Condos"
                    status="pending"
                    date="Mar 30, 2025"
                    description="Several lights out in section B of underground parking."
                  />
                </div>
              </TabsContent>
              <TabsContent value="completed" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <MaintenanceRequestCard
                    title="HVAC Repair in Unit 105"
                    property="City Central Condos"
                    status="completed"
                    date="Mar 28, 2025"
                    description="Air conditioning unit repaired and tested, working properly now."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <NewMaintenanceRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

