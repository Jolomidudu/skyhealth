import Link from "next/link";
import { doctors } from "@/lib/data";
import { ArrowLeft, Calendar, Star, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);
  if (!doctor) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-100 to-sky-200 h-48 relative">
          <Link
            href="/dashboard"
            className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow"
          >
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </Link>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-28 h-28 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-5xl">
              {doctor.avatar}
            </div>
          </div>
        </div>

        <div className="pt-16 px-6 pb-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Education
            </p>
            <h1 className="text-2xl font-bold text-slate-900 mt-1">
              {doctor.name}
            </h1>
            <p className="text-blue-600 font-medium">{doctor.specialty}</p>
            <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto">
              {doctor.bio}
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {doctor.patients}
              </p>
              <p className="text-xs text-slate-500">Active patients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {doctor.satisfaction}%
              </p>
              <p className="text-xs text-slate-500">Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
                {doctor.rating} <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              </p>
              <p className="text-xs text-slate-500">Rating</p>
            </div>
          </div>

          <div className="mt-6 h-2 bg-slate-100 rounded-full overflow-hidden max-w-xs mx-auto">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${doctor.satisfaction}%` }}
            />
          </div>

          <button className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-700/20 flex items-center justify-center gap-2 transition">
            <Calendar className="w-5 h-5" />
            Schedule Visit
          </button>

          <div className="mt-8 p-5 bg-white rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-900">About the doctor</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {doctor.bio} Committed to delivering compassionate, evidence-based
              care and mentoring the next generation of physicians.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4" />
              {doctor.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
