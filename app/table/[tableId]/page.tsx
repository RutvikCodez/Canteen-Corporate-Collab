import Header from "@/components/menu/Header";

const Page = async ({ params }: { params: Promise<{ tableId: string }> }) => {
  const { tableId } = await params;
  return (
    <main className="bg-background min-h-screen">
      <Header tableNumber={tableId} />
    </main>
  );
};

export default Page;
