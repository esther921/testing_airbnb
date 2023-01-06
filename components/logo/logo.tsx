import Image from "next/image";

export function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        style={{ width: "auto", height: "auto" }}
        src="/images/logo.svg"
        alt="vercel log"
        width={50}
        height={24}
      />
      <div className="font-semibold text-gray-600">Hotels&Co</div>
    </div>
  );
}
