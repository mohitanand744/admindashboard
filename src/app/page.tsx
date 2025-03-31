import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Change this to your preferred page
  return null;
}
