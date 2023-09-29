"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const NavLinks = () => {
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState("");

    const options = [
        {
            label: "Stores",
            url: "",
        },
        {
            label: "Settings",
            url: "settings",
        },
        {
            label: "Billboard",
            url: "billboards",
        },
        {
            label: "Categories",
            url: "categories",
        },
        {
            label: "Products",
            url: "products",
        },
    ];

    useEffect(() => {
        const page = pathname.split("/")[1];
        setCurrentPage(page);
    }, [pathname]);

    return (
        <ul className="mx-4 space-x-4 text-gray-400 font-semibold">
            {options.map((option) => (
                <Link
                    className={cn(
                        "hover:text-primary",
                        currentPage === option.url && "text-primary",
                    )}
                    key={option.url}
                    href={`/${option.url}`}
                >
                    {option.label}
                </Link>
            ))}
        </ul>
    );
};
