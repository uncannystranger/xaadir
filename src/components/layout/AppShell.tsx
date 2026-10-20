"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import type { UserRole } from "@/lib/models";
import { mockActors, useXaadirData } from "@/components/providers/XaadirDataProvider";
import { useAuth } from "@/components/providers/AuthProvider";

export function AppShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const isAdmin = role === "ADMIN";
  const { state, setActor } = useXaadirData(); const { session } = useAuth();
  useEffect(() => { setActor(isAdmin ? mockActors.admin : { userId: session?.userId ?? "", schoolId: state.school.id, role: "TEACHER", teacherId: session?.teacherId }); }, [isAdmin, setActor, session, state.school.id]);
  useEffect(() => {
    const viewport = window.visualViewport;
    const update = () => {
      if (viewport && viewport.scale === 1) {
        document.documentElement.style.setProperty("--visible-height", `${viewport.height}px`);
        document.documentElement.style.setProperty("--visible-top", `${viewport.offsetTop}px`);
      }
    };
    update(); viewport?.addEventListener("resize", update); viewport?.addEventListener("scroll", update);
    return () => { viewport?.removeEventListener("resize", update); viewport?.removeEventListener("scroll", update); };
  }, []);
  const currentTeacher = state.teachers.find((teacher) => teacher.id === session?.teacherId); const admin = state.adminProfile;
  const section = pathname.split("/").filter(Boolean).slice(1).map(part => ({ "my-attendance":"My attendance", "classes":"Classes", "attendance":"Attendance", "reports":"Reports", "profile":"Profile" }[part] ?? part.replaceAll("-", " ")))[0] ?? "Overview";
  return <div className={`dashboard-shell app-shell role-${role.toLowerCase()}`} data-app-root>
    <a className="workspace-skip" href="#workspace-content">Skip to workspace</a>
    <Sidebar role={role} open={drawer} onClose={() => setDrawer(false)} />
    <div className="main-column">
      <Header onMenu={() => setDrawer(true)} teacher={!isAdmin} profileImage={currentTeacher?.profileImage ?? (isAdmin ? admin.profileImage : undefined)} name={currentTeacher?.fullName ?? (isAdmin ? admin.fullName : session?.name ?? "Xaadir")} email={isAdmin ? admin.email : session?.email ?? ""} />
      <main className="teacher-main" id="workspace-content" tabIndex={-1}><div className="school-masthead"><span>{state.school.name} <i aria-hidden="true">/</i> <strong>{section}</strong></span><span className="school-year">Academic year <b>{state.school.academicYear}</b></span></div><div className="workspace-view" key={pathname}>{children}</div></main>
    </div>
  </div>;
}
