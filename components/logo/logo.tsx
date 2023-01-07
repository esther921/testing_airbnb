import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className="flex gap-2 items-center md:hidden">
      <Link href={"/"}>
        <Image
          style={{ width: "auto", height: "auto" }}
          src="/images/logo.svg"
          alt="hotels logo"
          width={50}
          height={24}
        />
        <div className="font-semibold text-gray-600">Hotels&Co</div>
      </Link>
    </div>
  );
}
