import Cart from "@/components/menu/Cart";
import Header from "@/components/menu/Header";
import Items from "@/components/menu/Items";

const Page = async ({ params }: { params: Promise<{ tableId: string }> }) => {
  const { tableId } = await params;
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Items />
    </main>
  );
};

export default Page;
