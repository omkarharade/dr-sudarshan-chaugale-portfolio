import Image from "next/image";
const surgeonNoBg =  "/images/surgeon.png"; // Replace with correct path

export default function Home() {
  return (
    <>  

    <section id="hero" className="bg-sky-800 w-full ">
      {/* Left Text Area */}
      <div className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 pt-4 mx-auto ">
        <div className="max-w-xl py-[2rem] md:py-0">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-10">
          Early care leads to lasting relief. <br /> Your gut deserves it.
        </h1>
        <button className="bg-sky-600 hover:bg-slate-300 hover:text-black border-2 border-sky-600 font-semibold text-slate-100 py-1 px-3 rounded cursor-pointer">
          Make Appointment
        </button>
      </div>

      {/* Doctor Image */}
      <div className="mt-4 md:mt-0">
        <Image
          src={surgeonNoBg}
          alt="Doctor performing surgery"
          width={400}
          height={400}
          className="object-cover md:w-full w-[14rem]"
          priority
        />
      </div>
      </div>
    </section>
    </>
  );
}
