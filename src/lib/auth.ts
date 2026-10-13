import crypto from "crypto";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET_KEY ||
  "9f3c7a1d6e4b8c2a0d5f7e1b9c3a6d8f2e4b7c1a5d9f0e3b6c8a2d4f7b1e5c9a";

/**
 * Hashes a plain-text password using PBKDF2 with a cryptographic salt.
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return `${salt}:${hash}`;
}

/**
 * Verifies a plain-text password against a stored hash string.
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  if (!storedHash || !password) return false;
  // Fallback for plain-text comparison (e.g., initial migration)
  if (!storedHash.includes(":")) {
    return password === storedHash;
  }
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
}

/**
 * Signs an admin payload into a secure JWT token.
 */
export function signAdminToken(payload: { username: string; role?: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

/**
 * Verifies and decodes an admin JWT token.
 */
export function verifyAdminToken(
  token: string
): { username: string; role?: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string; role?: string };
  } catch {
    return null;
  }
}
