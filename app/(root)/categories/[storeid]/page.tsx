import { ToggleAddCategoryModalButton } from "@/components/modals/add-category-modal";
import SectionHeader from "@/components/ui/section-header";

export default async function CategoriesPage() {

    return (
        <main>
            <SectionHeader title={`Categories`} description="Manage categories for your store">
                <ToggleAddCategoryModalButton className="ml-auto" />
            </SectionHeader>
        </main>
    )
}