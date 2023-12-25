import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return NextResponse.json(post);
}
