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

  const deletePost = await prisma.post.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(
    {
      data: updatedPost,
      message: "Post Updated successfully",
      status: 200,
    },
    { status: 200 }
  );
}
