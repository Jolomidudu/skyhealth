# SkyHealth — Smarter Care. Better Outcomes. Together.

Full-stack healthcare management web application inspired by the SkyHealth design.

## Features

- **Beautiful Landing Page** matching the provided mockup (slogan, phone previews, features)
- **Hospital Admin Dashboard** with:
  - Today's schedule & appointments
  - Patient management
  - Doctor profiles & directories
  - Real-time style stats cards
- **Doctor Profile Pages** (e.g. Dr. Aisha Okoro — Cardiology)
- **Login / Auth UI** (demo credentials)
- **API Route** for appointments (`/api/appointments`)
- Responsive design with Tailwind CSS
- Lucide icons

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React**

## Getting Started

```bash
cd skyhealth
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Demo Login
- Email: `admin@skyhealth.com`
- Password: `demo1234`
(or just click "Skip to Dashboard")

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/page.tsx        # Login
│   ├── dashboard/page.tsx    # Main dashboard
│   ├── doctors/[id]/page.tsx # Doctor profiles
│   └── api/appointments/     # API example
├── lib/
│   └── data.ts               # Mock data (appointments, doctors, patients)
└── components/               # (ready for shared UI)
```

## Next Steps (to make it production-ready)

1. Add a real database (Prisma + PostgreSQL / Supabase)
2. Implement NextAuth / Clerk for authentication & roles (patient / doctor / admin)
3. Add appointment booking form + calendar
4. Patient records & medical history
5. Real-time notifications (Pusher / Ably)
6. File uploads for documents / lab results

---

Built with ❤️ for better healthcare outcomes.
