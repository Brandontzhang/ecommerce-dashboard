import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div>
      <p>ECommerce Website</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
