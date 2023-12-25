import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("No Post Found With this id");
  }

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(post);
}
