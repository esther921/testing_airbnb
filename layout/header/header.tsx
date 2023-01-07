export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bg-white px-3 w-full z-[100]">
      <div className="border-b border-gray-100">
        <div className="flex lg:px-3 items-center py-4 justify-between max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
