import {
  ChevronsRight,
  ListTodo,
  CalendarDays,
  StickyNote,
  MoreHorizontal,
  Plus,
  User2,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuAction,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { SidebarFooter } from "../ui/sidebar";

const items = [
  {
    url: "#",
    icon: ChevronsRight,
    title: "Upcoming",
  },
  {
    url: "#",
    icon: ListTodo,
    title: "Today",
  },
  {
    url: "#",
    icon: CalendarDays,
    title: "Calendar",
  },
  {
    url: "#",
    icon: StickyNote,
    title: "Sticky Wall",
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      {/* Header Area */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuItem className="hover:bg-primary-100 p-2 rounded-lg transition-all ease-linear active:bg-zinc-800">
              <img
                className="w-40"
                src="/Login_Page_Logo_white.png"
                alt="Logo"
              />
            </SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content Area */}
      <SidebarContent className="mt-16">
        <SidebarGroup className="text-white px-2">
          <SidebarGroupLabel className="text-grey text-sm">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="py-5">
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <hr className="w-[90%] ml-3 border-zinc-400" />

        <SidebarGroup className="text-white px-2 list-none">
          <SidebarGroupLabel className="text-grey text-sm">
            List
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="#"
                  className="flex justify-start items-center px-2 "
                >
                  <div className="w-3 h-3 bg-slate-50 rounded-sm"></div>
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction>
                    <MoreHorizontal />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span>Edit Project</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Delete Project</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>

            <SidebarMenuButton
              asChild
              className="flex justify-start items-center px-4 py-5"
            >
              <div>
                <Plus />
                <span>Add New List</span>
              </div>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footbar Area */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu className="text-white">
              <DropdownMenuTrigger asChild className="text-white">
                <SidebarMenuButton className="py-5">
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Setting</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
