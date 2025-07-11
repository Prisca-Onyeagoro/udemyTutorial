export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <p>welcome to the {slug} Page</p>
    </>
  );
}
