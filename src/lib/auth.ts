import { cookies } from "next/headers";
import { users, type User, type Role } from "./data";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
};

const COOKIE_NAME = "skyhealth_session";

export function findUser(email: string, password: string): User | null {
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
}

export function toSessionUser(user: User): SessionUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
  };
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return null;

  try {
    const data = JSON.parse(decodeURIComponent(raw)) as SessionUser;
    // validate user still exists
    const exists = users.find((u) => u.id === data.id);
    if (!exists) return null;
    return data;
  } catch {
    return null;
  }
}

export function createSessionCookie(user: SessionUser): string {
  const value = encodeURIComponent(JSON.stringify(user));
  // 7 days
  const maxAge = 60 * 60 * 24 * 7;
  return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
