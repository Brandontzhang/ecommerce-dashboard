"use client";

import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { Label } from "@radix-ui/react-label";

export default function SetupPage() {
    return (
        <div>
            <p>ECommerce Website</p>
            <UserButton afterSignOutUrl="/" />
            <Modal
                title={"Create Store"}
                description={
                    "Add a new store to manage products and categories."
                }
                isOpen={false}
                onClose={() => {}}
            >
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" />
                </div>
            </Modal>
        </div>
    );
}
