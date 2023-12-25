import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    /*   where: { published: true }, */
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return NextResponse.json(
    {
      data: posts,
      message: "All Posts Fetched successfully",
      status: 200,
    },
    { status: 200 }
  );
}
