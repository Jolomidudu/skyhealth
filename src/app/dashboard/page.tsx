"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Bell,
  Calendar,
  Users,
  Activity,
  Clock,
  ChevronRight,
  Plus,
  Home,
  Stethoscope,
  Settings,
  LogOut,
  Heart,
  AlertCircle,
} from "lucide-react";
import { appointments, doctors, patients, departments } from "@/lib/data";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home");
  const todayAppointments = appointments.filter((a) => a.date === "2026-09-16");
  const inProgress = todayAppointments.filter((a) => a.status === "in-progress");
  const upcoming = todayAppointments.filter((a) => a.status === "scheduled");

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col">
        <div className="p-5 flex items-center gap-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900">SkyHealth</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Hospital Admin
            </p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "home", icon: Home, label: "Dashboard" },
            { id: "appointments", icon: Calendar, label: "Appointments" },
            { id: "patients", icon: Users, label: "Patients" },
            { id: "doctors", icon: Stethoscope, label: "Doctors" },
            { id: "departments", icon: Heart, label: "Departments" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <LogOut className="w-5 h-5" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search patients, appointments or staff..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-2">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                👨‍⚕️
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">Dr. Admin</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {activeTab === "home" && (
            <div className="space-y-6">
              {/* Welcome */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Good morning 👋
                  </h2>
                  <p className="text-slate-500 mt-1">
                    Here&apos;s what&apos;s happening at SkyHealth today.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-700/20 transition">
                  <Plus className="w-4 h-4" />
                  New Appointment
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "Today's Appointments",
                    value: todayAppointments.length,
                    icon: Calendar,
                    color: "bg-blue-50 text-blue-700",
                  },
                  {
                    label: "Active Patients",
                    value: patients.filter((p) => p.status === "active").length,
                    icon: Users,
                    color: "bg-emerald-50 text-emerald-700",
                  },
                  {
                    label: "In Progress",
                    value: inProgress.length,
                    icon: Activity,
                    color: "bg-amber-50 text-amber-700",
                  },
                  {
                    label: "Critical Cases",
                    value: patients.filter((p) => p.status === "critical").length,
                    icon: AlertCircle,
                    color: "bg-red-50 text-red-700",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}
                    >
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Today's Schedule */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">
                      Today&apos;s Schedule
                    </h3>
                    <button
                      onClick={() => setActiveTab("appointments")}
                      className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline"
                    >
                      View all <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {todayAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="px-5 py-4 flex items-center gap-4 hover:bg-slate-50 transition"
                      >
                        <div className="w-12 text-center">
                          <p className="text-sm font-bold text-slate-900">
                            {apt.time.split(" ")[0]}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {apt.time.split(" ")[1]}
                          </p>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-900 truncate">
                            {apt.patientName}
                          </p>
                          <p className="text-sm text-slate-500">
                            {apt.doctorName} · {apt.department}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              apt.status === "in-progress"
                                ? "bg-amber-100 text-amber-800"
                                : apt.status === "completed"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {apt.status}
                          </span>
                          <span className="text-xs text-slate-400 capitalize hidden sm:inline">
                            {apt.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctors sidebar */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Top Doctors</h3>
                    <button
                      onClick={() => setActiveTab("doctors")}
                      className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline"
                    >
                      See all <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    {doctors.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">
                          {doc.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-900 truncate">
                            {doc.name}
                          </p>
                          <p className="text-xs text-blue-600">{doc.specialty}</p>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500">
                            <span>{doc.patients} patients</span>
                            <span>·</span>
                            <span>{doc.satisfaction}% sat.</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">
                    Browse by Department
                  </h3>
                  <button className="text-sm text-blue-600 font-medium">
                    See all
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition group"
                    >
                      <span className="text-2xl">{dept.icon}</span>
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                        {dept.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {dept.count} staff
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                All Appointments
              </h2>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500 text-left">
                    <tr>
                      <th className="px-5 py-3 font-medium">Patient</th>
                      <th className="px-5 py-3 font-medium hidden sm:table-cell">
                        Doctor
                      </th>
                      <th className="px-5 py-3 font-medium">Department</th>
                      <th className="px-5 py-3 font-medium">Time</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-slate-50">
                        <td className="px-5 py-4 font-medium text-slate-900">
                          {apt.patientName}
                        </td>
                        <td className="px-5 py-4 text-slate-600 hidden sm:table-cell">
                          {apt.doctorName}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {apt.department}
                        </td>
                        <td className="px-5 py-4 text-slate-600">{apt.time}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              apt.status === "in-progress"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {apt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Patients</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {patients.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900">{p.name}</h3>
                        <p className="text-sm text-slate-500">
                          {p.age} yrs · {p.gender}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          p.status === "critical"
                            ? "bg-red-100 text-red-800"
                            : p.status === "active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-700">
                      <span className="font-medium">Condition:</span>{" "}
                      {p.condition}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Last visit: {p.lastVisit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "doctors" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Doctors</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <div className="h-24 bg-gradient-to-br from-blue-100 to-sky-100 flex items-end justify-center pb-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow flex items-center justify-center text-3xl">
                        {doc.avatar}
                      </div>
                    </div>
                    <div className="p-5 pt-3">
                      <h3 className="font-bold text-slate-900">{doc.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">
                        {doc.specialty}
                      </p>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                        {doc.bio}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <span>{doc.patients} active patients</span>
                        <span>{doc.satisfaction}% satisfaction</span>
                      </div>
                      <button className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-xl transition">
                        Schedule Visit →
                      </button>
                      <p className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
                        🏥 {doc.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "departments" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Departments</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition flex items-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                      {dept.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{dept.name}</h3>
                      <p className="text-sm text-slate-500">
                        {dept.count} staff members
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
