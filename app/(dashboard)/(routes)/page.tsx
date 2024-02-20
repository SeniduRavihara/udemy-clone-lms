import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" p-5 h-full">
      <h1 className="text-3xl">Hello, This is a Protected page</h1>
      <Button variant="destructive" size="sm" className="">Click Me</Button>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
