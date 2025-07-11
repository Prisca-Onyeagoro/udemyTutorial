import Link from "next/link";

export default function Mainheader() {
  return (
    <div>
      <ul className="flex flex-row gap-16 p-4 text-2xl cursor-pointer">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/news"}>News</Link>
        </li>
      </ul>
    </div>
  );
}
