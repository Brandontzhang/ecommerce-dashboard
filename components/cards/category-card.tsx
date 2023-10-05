"use client";

import { Category } from "@prisma/client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

type CategoryCardProps = {
    category: Category
};

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter className="justify-end space-x-2">
            </CardFooter>
        </Card>
    );
};

export default CategoryCard;