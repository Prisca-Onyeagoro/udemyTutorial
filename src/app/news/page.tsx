import Link from "next/link";
import { DUMMY_NEWS } from "../../../lib/dummy-text";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>welcome to news</h1>
      <div className="flex flex-col space-y-7">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-4 ">
          {DUMMY_NEWS.map((news) => (
            <li key={news.id}>
              <Link href={`/news/${news.slug}`}>
                <Image
                  src={`/news/${news.image}`}
                  alt={news.title}
                  width={300}
                  height={300}
                  className="h-48"
                />
                <span>{news.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
