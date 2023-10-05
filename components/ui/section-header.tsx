import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionHeaderProps = {
    className?: string;
    title: string;
    description: string;
    children?: ReactNode;
};
const SectionHeader = ({
    className,
    title,
    description,
    children,
}: SectionHeaderProps) => {
    return (
        <section className="flex w-full flex-row items-center border-b border-b-slate-300">
            <div className={cn("space-y-10", className)}>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-gray-500">{description}</p>
            </div>
            {children}
        </section>
    );
};

export default SectionHeader;
