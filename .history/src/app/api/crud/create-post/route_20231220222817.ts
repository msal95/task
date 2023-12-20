import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content } = body;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return NextResponse.json({
    success: 1,
    message: "create success",
    post: newPost,
  });
}
