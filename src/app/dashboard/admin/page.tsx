import { redirect } from "next/navigation";
import { getCurrentUser, dashboardPathForRole } from "@/lib/auth-server";
import { connectDB } from "@/lib/db";
import FormSubmission from "@/models/FormSubmission";
import User from "@/models/User";

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/dashboard/admin");
  }

  if (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN") {
    redirect(dashboardPathForRole(user.role));
  }

  await connectDB();
  const [submissions, totalUsers] = await Promise.all([
    FormSubmission.find().sort({ createdAt: -1 }).limit(20).lean(),
    User.countDocuments(),
  ]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-gray-500">
          Signed in as {user.name} ({user.role})
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {totalUsers}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Recent Submissions</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {submissions.length}
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          Recent Form Submissions
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Discord</th>
                <th className="px-4 py-3">Sheet</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={String(s._id)} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{s.formType}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-gray-500">
                    {JSON.stringify(s.data)}
                  </td>
                  <td className="px-4 py-3">{s.discordSent ? "✅" : "❌"}</td>
                  <td className="px-4 py-3">{s.sheetSent ? "✅" : "❌"}</td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(s.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
              {submissions.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                    No submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
