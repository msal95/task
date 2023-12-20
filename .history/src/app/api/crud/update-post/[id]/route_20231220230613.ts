import { NextRequest, NextResponse } from "next/server";

export async function PUT(
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
  });

  const { title, content } = await request.json();
  const updatedPost = await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: title,
      content: content,
    },
  });

  return NextResponse.json({
    success: 1,
    post: updatedPost,
    message: "Update success",
  });
}
