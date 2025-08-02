import { FAQ } from "@/components/ui/FAQ";
import DarkToggler from "@/components/ui/DarkToggler";
import { Separator } from "@/components/ui/separator";
import { accordionData } from "@/data/accordionData";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-4">
      <h1 className="text-center my-8 md:my-12 lg:my-16 font-bold text-2xl text-[#8800C8] dark:text-[#2FC1FF]">
        Frequently Asked Questions
      </h1>

      <Separator />

      {/* the FAQ cmponent includes the accordions */}
      {/* defaultValue is the item to be open initialy (optional, remove if not required) */}
      <FAQ accordionData={accordionData} defaultValue="item-1" />

      <DarkToggler />

      <footer className="fixed bottom-4 inset-x-0 text-center text-gray-500 dark:text-gray-400">
        Made with ❤️ by SuccessByte (Ehsanullah)
      </footer>
    </main>
  );
}
