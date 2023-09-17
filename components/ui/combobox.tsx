"use client";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { useState } from "react";
import { Button } from "./button";
import { Command, CommandGroup, CommandInput, CommandItem } from "./command";
import { CommandEmpty } from "cmdk";
import { PopoverContent } from "./popover";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ComboBoxProps = {
    name: string,
    width: string,
    data: [
        {
            value: string;
            label: string;
        },
    ];
};

export default function ComboBox({ name, width, data }: ComboBoxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={`${width} justify-between`}
                >
                    {value
                        ? data.find((d) => (d.value = value))?.label
                        : `Select ${name}...`}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`${width} p-0`}>
                <Command>
                    <CommandInput placeholder="Search" />
                    <CommandEmpty className="p-4">No Results</CommandEmpty>
                    <CommandGroup>
                        {data.map((d) => (
                            <CommandItem
                                key={d.value}
                                onSelect={(newVal: string) => {
                                    setValue(newVal === value ? "" : newVal);
                                    setOpen(false);
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === d.value
                                            ? "opacity-100"
                                            : "opacity-0",
                                    )}
                                />
                                {d.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
