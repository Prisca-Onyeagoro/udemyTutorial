import Image from "next/image";
import { DUMMY_NEWS } from "../../../../lib/dummy-text";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);
  return (
    <>
      <div className="p-9">
        <header className="flex flex-col items-start space-y-4">
          <Image
            src={`/news/${newsItem?.image}`}
            alt={newsItem?.title as string}
            width={300}
            height={300}
            className="h-48"
          />
          <p>{newsItem?.title}</p>
          <time dateTime={newsItem?.date}>{newsItem?.date}</time>
        </header>
        <p>{newsItem?.content}</p>
      </div>
    </>
  );
}
