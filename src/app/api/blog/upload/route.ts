import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    // 1. JSON ke bajaye FormData receive karein
    const formData = await req.formData();
    
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const isTraining = formData.get("isTraining") === "true";
    const file = formData.get("image") as File | null;

    let imageUrl = "";

    // 2. Agar file hai, to usey public folder mein save karein
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // File name aur path set karein (Public folder mein)
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const filePath = path.join(process.cwd(), "public/uploads", filename);
      
      await writeFile(filePath, buffer);
      imageUrl = `/uploads/${filename}`; // Database mein save karne ke liye URL
    }

    // 3. Slug generate karein
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // 4. Prisma mein data save karein
    const post = await prisma.post.create({
      data: { 
        title, 
        slug, 
        content, 
        image: imageUrl, // Ab yahan URL save hoga
        category, 
        isTraining 
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error saving post:", error);
    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}