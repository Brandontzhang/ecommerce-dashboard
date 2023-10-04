"use client";
import useSearchBox from "@/hooks/stores/useSearchBox";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const NavLinks = () => {
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState("");
    const [storeid, setStoreid] = useState("");
    const { setValue: setSearchBarValue } = useSearchBox();

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
        const params = pathname.split("/");
        setCurrentPage(params[1]);
        setStoreid(params[2]);
    }, [pathname]);

    const navCheck = (url : string) => {
        if (url.length == 0) {
            setSearchBarValue("");
        }
    }

    return (
        <ul className="mx-4 space-x-4 text-gray-400 font-semibold">
            {options.map((option) => (
                <Link
                    onClick={() => navCheck(option.url)}
                    className={cn(
                        "hover:text-primary",
                        !storeid && "hidden",
                        currentPage === option.url && "text-primary",
                    )}
                    key={option.url}
                    href={option.url.length > 0 ? `/${option.url}/${storeid}` : "/"}
                    
                >
                    {option.label}
                </Link>
            ))}
        </ul>
    );
};
