import { NextApiRequest, NextApiResponse } from "next";
import { verifyEmailVerificationCode } from "@/lib/email-verification";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, userId } = req.body;

  try {
    const success = await verifyEmailVerificationCode(userId, code);
    if (success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: "Invalid or expired verification code" });
    }
  } catch (error) {
    console.error("Verification error: ", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}
