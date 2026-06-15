import { Link, Outlet, useRouter, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, Package, FileText, Wallet, BarChart3, UserCog, LogOut, Factory, Beaker, IndianRupee, PieChart, BadgeIndianRupee } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/suppliers", label: "Suppliers", icon: Users },
  { to: "/materials", label: "Raw Materials", icon: Package },
  { to: "/purchases", label: "Purchases", icon: FileText },
  { to: "/production", label: "Production", icon: Beaker },
  { to: "/payments", label: "Payments", icon: Wallet },
  { to: "/hr", label: "HR & Payroll", icon: BadgeIndianRupee },
  { to: "/finance", label: "Finance", icon: IndianRupee },
  { to: "/gm-report", label: "GM Report", icon: PieChart },
  { to: "/reports", label: "Reports", icon: BarChart3 },
];

export function AppShell() {
  const { user, roles, isAdmin } = useAuth();
  const router = useRouter();
  const location = useRouterState({ select: (s) => s.location.pathname });

  async function signOut() {
    await supabase.auth.signOut();
    router.navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="w-60 shrink-0 border-r bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="px-5 py-5 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <Factory className="h-5 w-5" />
            <div>
              <div className="font-semibold text-sm leading-tight">Beverage ERP</div>
              <div className="text-xs text-muted-foreground">RM & Payables</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = location.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          {isAdmin && (
            <Link
              to="/users"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                location.startsWith("/users")
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <UserCog className="h-4 w-4" />
              Users
            </Link>
          )}
        </nav>
        <div className="p-3 border-t border-sidebar-border space-y-2">
          <div className="text-xs">
            <div className="font-medium truncate">{user?.email}</div>
            <div className="text-muted-foreground capitalize">{roles[0]?.replace("_", " ") ?? "no role"}</div>
          </div>
          <Button variant="outline" size="sm" className="w-full" onClick={signOut}>
            <LogOut className="h-3.5 w-3.5 mr-2" /> Sign out
          </Button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
