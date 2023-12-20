import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
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

  const { title, content } = await request.json();
  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });

  return NextResponse.json({
    success: 1,
    post: updatedPost,
    message: "Update success",
  });
}
