import { About } from "@/components/About/About";
import Discount from "@/components/Discount/Discount";
import { Feactures } from "@/components/Feactures/Feactures";
import Navbar from "@/components/Navbar/Navbar";
import { Overview } from "@/components/Overview/Overview";
import Plans from "@/components/Plans/Plans";
import { Practice } from "@/components/Practice/Practice";



export default function Home() {
  return (
    <main className="px-3 lg:px-10">
     <Navbar />
     <Overview/>
     <Feactures/>
      <div className="max-w-6xl mx-auto">
        <About />
        <Practice/>
        <Plans/>
        <Discount/>
      </div>
    </main>
  );
}
