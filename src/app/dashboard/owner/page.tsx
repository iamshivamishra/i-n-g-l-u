import { redirect } from "next/navigation";
import { getCurrentUser, dashboardPathForRole } from "@/lib/auth-server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import FormSubmission from "@/models/FormSubmission";

export default async function OwnerDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/dashboard/owner");
  }

  if (user.role !== "OWNER") {
    redirect(dashboardPathForRole(user.role));
  }

  await connectDB();
  const [users, totalSubmissions] = await Promise.all([
    User.find().sort({ createdAt: -1 }).select("-password").lean(),
    FormSubmission.countDocuments(),
  ]);

  const roleCounts = users.reduce<Record<string, number>>((acc, u) => {
    acc[u.role] = (acc[u.role] || 0) + 1;
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Full visibility &amp; control — signed in as {user.name}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {users.length}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Admins</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {(roleCounts.ADMIN || 0) + (roleCounts.SUPER_ADMIN || 0)}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Owners</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {roleCounts.OWNER || 0}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Form Submissions</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {totalSubmissions}
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          All Users
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Verified</th>
                <th className="px-4 py-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={String(u._id)} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{u.name}</td>
                  <td className="px-4 py-3 text-gray-500">{u.email}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {u.emailVerified ? "✅" : "❌"}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
