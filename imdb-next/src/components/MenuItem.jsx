import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        {<Icon className="text-2xl md:hidden" />}
        <p className="uppercase hidden md:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
