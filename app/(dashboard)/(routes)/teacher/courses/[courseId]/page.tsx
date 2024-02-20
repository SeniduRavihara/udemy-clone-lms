import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function CourseIdPage({ params }: { params: { courseId: string } }) {
  
  const {userId} = auth()

  if(!userId){
    return redirect("/")
  }
  
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  if(!course){
    return redirect("/")
  }

  return <div>CourseIdPage: {params.courseId}</div>;
}
export default CourseIdPage;
