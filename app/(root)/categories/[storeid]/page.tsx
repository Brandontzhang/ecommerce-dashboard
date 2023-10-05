import CategoryCard from "@/components/cards/category-card";
import { ToggleAddCategoryModalButton } from "@/components/modals/add-category-modal";
import SectionHeader from "@/components/ui/section-header";
import { auth } from "@clerk/nextjs";
import { Category } from "@prisma/client";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function CategoriesPage({
    params,
}: {
    params: { storeid: string };
}) {
    const user = auth();

    if (!user.userId) {
        redirect("/sign-in");
    }

    const token = await user.getToken();
    const { data: categories } = await axios(
        `http://localhost:3000/api/stores/${params.storeid}/categories`,
        {
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    return (
        <main>
            <SectionHeader
                title={`Categories`}
                description="Manage categories for your store"
            >
                <ToggleAddCategoryModalButton className="ml-auto" />
            </SectionHeader>
            <section className="grid grid-cols-4">
                {categories.map((category : Category) => <CategoryCard key={category.id} category={category} />)}
            </section>
        </main>
    );
}