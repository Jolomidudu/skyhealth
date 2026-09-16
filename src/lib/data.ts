export type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  department: string;
  time: string;
  date: string;
  status: "scheduled" | "completed" | "cancelled" | "in-progress";
  type: "consultation" | "follow-up" | "procedure" | "emergency";
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
  rating: number;
  patients: number;
  satisfaction: number;
  bio: string;
  location: string;
};

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit: string;
  status: "active" | "discharged" | "critical";
};

export const appointments: Appointment[] = [
  {
    id: "a1",
    patientName: "James Okonkwo",
    doctorName: "Dr. Aisha Okoro",
    department: "Cardiology",
    time: "09:00 AM",
    date: "2026-09-16",
    status: "scheduled",
    type: "consultation",
  },
  {
    id: "a2",
    patientName: "Fatima Bello",
    doctorName: "Dr. Chinedu Eze",
    department: "Pediatrics",
    time: "10:30 AM",
    date: "2026-09-16",
    status: "in-progress",
    type: "follow-up",
  },
  {
    id: "a3",
    patientName: "David Mensah",
    doctorName: "Dr. Aisha Okoro",
    department: "Cardiology",
    time: "11:15 AM",
    date: "2026-09-16",
    status: "scheduled",
    type: "procedure",
  },
  {
    id: "a4",
    patientName: "Amara Nwosu",
    doctorName: "Dr. Sarah Adeyemi",
    department: "Emergency",
    time: "12:00 PM",
    date: "2026-09-16",
    status: "scheduled",
    type: "emergency",
  },
  {
    id: "a5",
    patientName: "Ibrahim Yusuf",
    doctorName: "Dr. Chinedu Eze",
    department: "Pediatrics",
    time: "02:00 PM",
    date: "2026-09-16",
    status: "scheduled",
    type: "consultation",
  },
  {
    id: "a6",
    patientName: "Grace Okafor",
    doctorName: "Dr. Aisha Okoro",
    department: "Cardiology",
    time: "03:30 PM",
    date: "2026-09-16",
    status: "scheduled",
    type: "follow-up",
  },
];

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Aisha Okoro",
    specialty: "Cardiology",
    avatar: "👩‍⚕️",
    rating: 4.9,
    patients: 12,
    satisfaction: 98,
    bio: "Aisha is a bright and determined cardiologist with a passion for patient-centered care and advancing cardiovascular medicine in West Africa.",
    location: "SkyHealth Hospital · Lagos",
  },
  {
    id: "d2",
    name: "Dr. Chinedu Eze",
    specialty: "Pediatrics",
    avatar: "👨‍⚕️",
    rating: 4.8,
    patients: 28,
    satisfaction: 96,
    bio: "Specialist in pediatric care with over 12 years of experience helping children thrive.",
    location: "SkyHealth Hospital · Lagos",
  },
  {
    id: "d3",
    name: "Dr. Sarah Adeyemi",
    specialty: "Emergency Medicine",
    avatar: "👩‍⚕️",
    rating: 4.7,
    patients: 45,
    satisfaction: 94,
    bio: "Board-certified emergency physician focused on rapid response and trauma care.",
    location: "SkyHealth Hospital · Abuja",
  },
];

export const patients: Patient[] = [
  {
    id: "p1",
    name: "James Okonkwo",
    age: 54,
    gender: "Male",
    condition: "Hypertension",
    lastVisit: "2026-09-10",
    status: "active",
  },
  {
    id: "p2",
    name: "Fatima Bello",
    age: 8,
    gender: "Female",
    condition: "Asthma",
    lastVisit: "2026-09-14",
    status: "active",
  },
  {
    id: "p3",
    name: "David Mensah",
    age: 67,
    gender: "Male",
    condition: "Coronary Artery Disease",
    lastVisit: "2026-09-12",
    status: "critical",
  },
  {
    id: "p4",
    name: "Amara Nwosu",
    age: 32,
    gender: "Female",
    condition: "Fracture (arm)",
    lastVisit: "2026-09-16",
    status: "active",
  },
];

export const departments = [
  { id: "cardio", name: "Cardiology", icon: "❤️", count: 24 },
  { id: "pedia", name: "Pediatrics", icon: "👶", count: 31 },
  { id: "emerg", name: "Emergency", icon: "🚨", count: 18 },
  { id: "radio", name: "Radiology", icon: "🦴", count: 12 },
  { id: "neuro", name: "Neurology", icon: "🧠", count: 9 },
  { id: "ortho", name: "Orthopedics", icon: "🦵", count: 15 },
];
