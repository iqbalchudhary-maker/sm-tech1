import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditFormClient from "./EditFormClient";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black uppercase italic mb-10">
          Edit <span className="text-blue-600">Research</span>
        </h1>
        <EditFormClient post={post} />
      </div>
    </div>
  );
}