import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreModalContextProvider } from "@/context/StoreModalContext";
import prismadb from "@/lib/prismadb";
import { ToasterProvider } from "@/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Commerce Admin Dashboard",
    description: "E-Commerce Admin Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <StoreModalContextProvider>
                <html lang="en">
                    <body className={inter.className}>
                        <ToasterProvider />
                        {children}
                    </body>
                </html>
            </StoreModalContextProvider>
        </ClerkProvider>
    );
}
