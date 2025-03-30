import prisma from "@/lib/prisma";
import { isWithinExpirationDate } from "oslo";

export async function verifyEmailVerificationCode(userId: string, code: string): Promise<boolean> {
  const verificationCode = await prisma.emailVerificationCode.findFirst({
    where: { userId }
  });

  if (!verificationCode || verificationCode.code !== code) {
    return false;
  }

  if (!isWithinExpirationDate(verificationCode.expiresAt)) {
    return false;
  }

  await prisma.emailVerificationCode.delete({
    where: { id: verificationCode.id }
  });

  await prisma.user.update({
    where: { id: userId },
    data: { emailVerified: true }
  });

  return true;
}
