import { redirect } from "next/navigation";
import { getCurrentUser, dashboardPathForRole } from "@/lib/auth-server";

// This route is just a traffic router: hit /dashboard and get bounced to
// the dashboard that matches your role.
export default async function DashboardRedirectPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/dashboard");
  }

  redirect(dashboardPathForRole(user.role));
}
