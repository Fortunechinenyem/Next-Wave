"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Card, Metric, Text } from "@tremor/react";
import { FileText } from "lucide-react";
import DashboardLayout from "../layout";

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
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, {user?.displayName || user?.email || "User"}!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <Text>Total Posts</Text>
          <Metric>1,234</Metric>
        </Card>
        <Card>
          <Text>Active Users</Text>
          <Metric>567</Metric>
        </Card>
        <Card>
          <Text>Comments</Text>
          <Metric>3,456</Metric>
        </Card>
        <Card>
          <Text>Page Views</Text>
          <Metric>12,345</Metric>
        </Card>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-start pb-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center justify-center w-10 h-10 mr-3 bg-purple-100 rounded-full">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  New post published
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
