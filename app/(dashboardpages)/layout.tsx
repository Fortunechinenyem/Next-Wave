"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  HelpCircle,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { User } from "firebase/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User | null;
}

export default function DashboardLayout({
  children,
  user,
}: DashboardLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0 z-10">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex items-center justify-center h-16 px-4 bg-white">
            <h1 className="text-xl font-bold text-purple-600">NextWave</h1>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
            <div className="flex items-center px-4 py-3 mb-6 space-x-4 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full text-white">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user?.displayName || user?.email || "User"}
                </p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>

            <nav className="flex-1 space-y-2">
              <SidebarLink
                icon={<LayoutDashboard className="w-5 h-5" />}
                active
                label="Dashboard"
                href="/dashboard"
              />
              <SidebarLink
                icon={<FileText className="w-5 h-5" />}
                label="Posts"
                href="/posts"
              />
              <SidebarLink
                icon={<Users className="w-5 h-5" />}
                label="Users"
                href="/users"
              />
              <SidebarLink
                icon={<Settings className="w-5 h-5" />}
                label="Settings"
                href="/settings"
              />
              <SidebarLink
                icon={<HelpCircle className="w-5 h-5" />}
                label="Help"
                href="/help"
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-bold text-purple-600">NextWave</h1>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1 rounded-md text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          <div className="flex items-center px-4 py-3 mb-6 space-x-4 bg-gray-100 rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full text-white">
              {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {user?.displayName || user?.email || "User"}
              </p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarLink
              icon={<LayoutDashboard className="w-5 h-5" />}
              active
              label="Dashboard"
              href="/dashboard"
            />
            <SidebarLink
              icon={<FileText className="w-5 h-5" />}
              label="Posts"
              href="/posts"
            />
            <SidebarLink
              icon={<Users className="w-5 h-5" />}
              label="Users"
              href="/users"
            />
            <SidebarLink
              icon={<Settings className="w-5 h-5" />}
              label="Settings"
              href="/settings"
            />
            <SidebarLink
              icon={<HelpCircle className="w-5 h-5" />}
              label="Help"
              href="/help"
            />
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-col flex-1 overflow-hidden z-0">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-1 rounded-md text-gray-500 hover:text-gray-700 md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-2 pl-10 pr-3 text-sm bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-0"
                placeholder="Search anything..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-500 rounded-full hover:text-gray-700 focus:outline-none">
              <Bell className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full text-purple-600">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
              </div>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 overflow-y-auto md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

function SidebarLink({ icon, label, active = false, href }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
        active
          ? "bg-purple-50 text-purple-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  );
}
