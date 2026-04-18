import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("WEBHOOK BODY:", JSON.stringify(body, null, 2));
    // const secret = req.headers.get("x-webhook-secret");


    // 1. Verify secret
    // if (secret !== process.env.STORYBLOK_WEBHOOK_SECRET) {
    //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }

    // 2. Extract slug from Storyblok payload
    const slug = body?.full_slug;
    console.log('---slug', slug)

    if (!slug) {
      return NextResponse.json({ message: "No slug provided" }, { status: 400 });
    }

    // 3. Convert slug to path
    // const path = `/${slug}`;
    const path = slug === "home" ? "/" : `/${slug}`;


    // 4. Revalidate only this page
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}