export function HomeMain({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="pt-[80px]">
        <div className="grid px-0 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-6 mb-16 grid-cols-4 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
