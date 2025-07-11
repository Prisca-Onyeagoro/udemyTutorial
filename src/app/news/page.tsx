import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>welcome to news</h1>
      <div className="flex flex-col space-y-7">
        <Link href={"/news/french"}>French news</Link>
      </div>
    </>
  );
}
