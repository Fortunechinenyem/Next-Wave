"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Card, Metric, Text } from "@tremor/react";
import { FileText, Users, Eye, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth/sign-in");
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar user={null} />
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            <p className="text-gray-600">Loading dashboard...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const stats = [
    { title: "Total Posts", value: "1,234", icon: FileText, color: "purple" },
    { title: "Active Users", value: "567", icon: Users, color: "blue" },
    { title: "Comments", value: "3,456", icon: MessageSquare, color: "green" },
    { title: "Page Views", value: "12,345", icon: Eye, color: "amber" },
  ];

  const recentActivities = [
    { id: 1, action: "New post published", time: "2 hours ago" },
    { id: 2, action: "User comment received", time: "5 hours ago" },
    { id: 3, action: "System update completed", time: "1 day ago" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar user={user} />

      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back,{" "}
              <span className="font-medium text-purple-600">
                {user?.displayName || user?.email || "User"}
              </span>
              !
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="transition hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <Text className="text-gray-500">{stat.title}</Text>
                      <Metric className="mt-1">{stat.value}</Metric>
                    </div>
                    <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-6">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
            <div className="space-y-6">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-center w-10 h-10 mr-4 bg-purple-100 rounded-full">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
