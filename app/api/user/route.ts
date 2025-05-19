import prisma from "@/lib/server/prisma";
import { generatePasswordHash } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: { id: string };
}

export async function POST(req: NextRequest, ctx: Context) {
  const { email, password } = await req.json();
  const passwordHash = generatePasswordHash(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });

  if (user) {
    return NextResponse.json({
      ok: true,
    });
  }

  return NextResponse.json({
    ok: false,
  });
}
