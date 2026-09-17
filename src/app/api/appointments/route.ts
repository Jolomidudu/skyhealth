import { NextRequest, NextResponse } from "next/server";
import { appointments as seedAppointments, type Appointment } from "@/lib/data";

let store: Appointment[] = [...seedAppointments];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: store,
    count: store.length,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.patientName || !body.doctorName || !body.date || !body.time) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newAppointment: Appointment = {
      id: body.id || `a${Date.now()}`,
      patientName: body.patientName,
      doctorName: body.doctorName,
      department: body.department || "General",
      time: body.time,
      date: body.date,
      status: body.status || "scheduled",
      type: body.type || "consultation",
    };

    store = [newAppointment, ...store];

    return NextResponse.json(
      { success: true, data: newAppointment },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "id and status required" },
        { status: 400 }
      );
    }

    store = store.map((a) => (a.id === id ? { ...a, status } : a));
    const updated = store.find((a) => a.id === id);

    return NextResponse.json({ success: true, data: updated });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}