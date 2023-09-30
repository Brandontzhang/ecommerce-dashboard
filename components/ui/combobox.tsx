"use client";

import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";
import { Button } from "./button";
import { Command, CommandGroup, CommandInput, CommandItem } from "./command";
import { CommandEmpty } from "cmdk";
import { PopoverContent } from "./popover";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaStore } from "react-icons/fa";

type ComboBoxProps = {
    width: string;
    data: {
        value: string;
        label: string;
    }[];
    url: string;
};

export default function ComboBox({ width, data, url }: ComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={`${width} justify-start gap-2`}
                >
                    <FaStore />
                    {value
                        ? data.find(
                              (store) => store.label.toLowerCase() == value,
                          )?.label
                        : <span className="overflow-hidden whitespace-nowrap">Select a store...</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`${width} p-0`}>
                <Command>
                    <CommandInput placeholder="Search" />
                    <CommandEmpty className="p-4">No Results</CommandEmpty>
                    <CommandGroup>
                        {data.map((d) => (
                            <Link key={d.value} href={`/${url}/${d.value}`}>
                                <CommandItem
                                    key={d.value}
                                    onSelect={(newVal: string) => {
                                        setValue(
                                            newVal === value ? "" : newVal,
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value == d.label.toLowerCase()
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                    {d.label}
                                </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
