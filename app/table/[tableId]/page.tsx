import Header from "@/components/menu/Header";
import Items from "@/components/menu/Items";

const Page = async ({ params }: { params: Promise<{ tableId: string }> }) => {
  const { tableId } = await params;
  return (
    <main className="bg-background min-h-screen">
      <Header tableNumber={tableId} />
      <section className="grid grid-cols-[4fr_1fr] max-w-7xl mx-auto w-full gap-5 max-xl:px-4 max-lg:grid-cols-1">
        <Items />
        <div className="border-4 border-green-600">hello</div>
      </section>
    </main>
  );
};

export default Page;
