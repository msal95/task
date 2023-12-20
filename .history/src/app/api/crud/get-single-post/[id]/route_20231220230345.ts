import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: String } }
) {
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { message: "Invalid Post ID", status: 400 },
      { status: 400 }
    );
  }

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(post);
}
