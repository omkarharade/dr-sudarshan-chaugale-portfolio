import Image from "next/image";
const surgeonNoBg =  "/images/surgeon.png"; // Replace with correct path

export default function Home() {
  return (
    <>  

    <section id="hero" className="bg-sky-800 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-4">
      {/* Left Text Area */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-10">
          Early care leads to lasting relief. <br /> Your gut deserves it.
        </h1>
        <button className="bg-sky-600 hover:bg-slate-300 hover:text-black border-2 border-sky-600 font-semibold text-slate-100 py-2 px-5 rounded cursor-pointer">
          Make Appointment
        </button>
      </div>

      {/* Doctor Image */}
      <div className="mt-10 md:mt-0">
        <Image
          src={surgeonNoBg}
          alt="Doctor performing surgery"
          width={400}
          height={400}
          className="rounded-xl object-cover"
          priority
        />
      </div>
    </section>
    </>
  );
}
