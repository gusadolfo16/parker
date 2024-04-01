import { signOut } from "next-auth/react";

export default async function signout(req, res) {
  await signOut(req);
  res.status(200).json({ message: "Signed out successfully" });
}
