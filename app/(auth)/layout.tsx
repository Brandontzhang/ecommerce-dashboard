export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center items-center h-full">
      {children}
    </div>
  )
}
