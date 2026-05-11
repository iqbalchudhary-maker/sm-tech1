import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

export async function PATCH(
  req: Request,
  { params }: { params: any }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const isTraining = formData.get("isTraining") === "true";
    const file = formData.get("image") as File | null;

    // Yahan se 'tags' nikaal deya gaya hai kyunke aapke DB mein ye column nahi hai
    let updateData: any = { 
      title, 
      content, 
      category, 
      isTraining,
      slug: title ? title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-") : undefined
    };

    if (file && file.name && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = path.join(process.cwd(), "public/uploads");
      
      if (!fs.existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }

      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const filePath = path.join(uploadDir, filename);
      await writeFile(filePath, buffer);
      updateData.image = `/uploads/${filename}`;
    }

    // Ab ye query successful hogi kyunke fields match kar rahi hain
    const updatedPost = await prisma.post.update({
      where: { id: id },
      data: updateData,
    });

    return NextResponse.json(updatedPost, { status: 200 });

  } catch (error: any) {
    console.error("PATCH ERROR:", error);
    return NextResponse.json(
      { error: "Update failed", message: error.message }, 
      { status: 500 }
    );
  }
}

// DELETE logic pehle se theek kaam kar rahi hai
export async function DELETE(
  req: Request,
  { params }: { params: any }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    await prisma.post.delete({ where: { id: id } });
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}