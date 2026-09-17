"use client";

import { useState, FormEvent } from "react";
import { X, Calendar, Clock, User, Stethoscope, FileText } from "lucide-react";
import { doctors, patients, departments } from "@/lib/data";
import type { Appointment } from "@/lib/data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onBook: (appointment: Appointment) => void;
};

const timeSlots = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM",
];

const appointmentTypes = [
  { value: "consultation", label: "Consultation" },
  { value: "follow-up", label: "Follow-up" },
  { value: "procedure", label: "Procedure" },
  { value: "emergency", label: "Emergency" },
] as const;

export default function BookingModal({ isOpen, onClose, onBook }: Props) {
  const [patientName, setPatientName] = useState("");
  const [customPatient, setCustomPatient] = useState(false);
  const [doctorId, setDoctorId] = useState(doctors[0]?.id || "");
  const [department, setDepartment] = useState(doctors[0]?.specialty || "Cardiology");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("09:00 AM");
  const [type, setType] = useState<"consultation" | "follow-up" | "procedure" | "emergency">("consultation");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const selectedDoctor = doctors.find((d) => d.id === doctorId);

  function handleDoctorChange(id: string) {
    setDoctorId(id);
    const doc = doctors.find((d) => d.id === id);
    if (doc) setDepartment(doc.specialty);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!patientName.trim()) {
      setError("Please select or enter a patient name.");
      return;
    }
    if (!doctorId || !date || !time) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const newAppointment: Appointment = {
      id: `a${Date.now()}`,
      patientName: patientName.trim(),
      doctorName: selectedDoctor?.name || "Unknown Doctor",
      department,
      time,
      date,
      status: "scheduled",
      type,
    };

    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAppointment),
      });
    } catch {
      // local state still works
    }

    onBook(newAppointment);
    setSubmitting(false);
    setPatientName("");
    setCustomPatient(false);
    setNotes("");
    setType("consultation");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Book Appointment</h2>
            <p className="text-sm text-slate-500">Schedule a new patient visit</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-100">
              {error}
            </div>
          )}

          {/* Patient */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
              <User className="w-4 h-4" /> Patient <span className="text-red-500">*</span>
            </label>
            {!customPatient ? (
              <select
                value={patientName}
                onChange={(e) => {
                  if (e.target.value === "__custom__") {
                    setCustomPatient(true);
                    setPatientName("");
                  } else setPatientName(e.target.value);
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition bg-white"
              >
                <option value="">Select a patient...</option>
                {patients.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.age} yrs · {p.condition})
                  </option>
                ))}
                <option value="__custom__">+ Add new patient</option>
              </select>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Enter patient full name"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                  autoFocus
                />
                <button type="button" onClick={() => { setCustomPatient(false); setPatientName(""); }} className="px-3 text-sm text-slate-500 hover:text-slate-700">
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Doctor */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
              <Stethoscope className="w-4 h-4" /> Doctor <span className="text-red-500">*</span>
            </label>
            <select
              value={doctorId}
              onChange={(e) => handleDoctorChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition bg-white"
            >
              {doctors.map((d) => (
                <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition bg-white"
            >
              {departments.map((d) => (
                <option key={d.id} value={d.name}>{d.icon} {d.name}</option>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Calendar className="w-4 h-4" /> Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Clock className="w-4 h-4" /> Time <span className="text-red-500">*</span>
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition bg-white"
              >
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
              <FileText className="w-4 h-4" /> Appointment Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {appointmentTypes.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setType(t.value)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition ${
                    type === t.value
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1.5 block">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Any special instructions or symptoms..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition">
              Cancel
            </button>
            <button type="submit" disabled={submitting} className="flex-1 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-lg shadow-blue-700/25 transition disabled:opacity-60">
              {submitting ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}