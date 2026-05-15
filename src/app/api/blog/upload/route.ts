import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null; // Frontend se "file" key aa rahi hai
    const title = formData.get("title") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 1. File ko Buffer mein convert karein
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 2. Folder ensure karein (public/uploads)
    const uploadDir = path.join(process.cwd(), "public/uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      // Folder pehle se mojood hai
    }

    // 3. Unique File Name banayein
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = path.join(uploadDir, filename);
    
    // 4. File save karein
    await writeFile(filePath, buffer);
    const imageUrl = `/uploads/${filename}`;

    // 5. CHECK: Kya ye Editor Image hai ya Main Cover?
    if (!title) {
      // Editor Image Case: Sirf URL return karein taake editor mein pic lag jaye
      return NextResponse.json({ url: imageUrl });
    }

    // 6. Main Cover Image Case: Slug generate karein
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Sirf URL aur Slug wapas bhejein, Database ka kaam /api/blog/route.ts karega
    return NextResponse.json({ url: imageUrl, slug });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}