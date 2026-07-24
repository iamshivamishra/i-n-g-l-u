import { redirect } from "next/navigation";
import { getCurrentUser, dashboardPathForRole } from "@/lib/auth-server";

export default async function UserDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/dashboard/user");
  }

  // Not a plain user? Bounce them to the dashboard that matches their role.
  if (user.role !== "USER") {
    redirect(dashboardPathForRole(user.role));
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {user.name}
        </h1>
        <p className="mt-1 text-gray-500">Your INGLU dashboard</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Your Profile</h2>
            <p className="mt-2 text-sm text-gray-500">
              Email: {user.email}
              <br />
              College: {user.college || "Not added"}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">Activity</h2>
            <p className="mt-2 text-sm text-gray-500">
              Nothing to show yet. This is where your events, submissions,
              and updates will appear.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
