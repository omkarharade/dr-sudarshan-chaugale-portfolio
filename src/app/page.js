import Image from "next/image";
import Testimonials from "./components/testimonials";
const surgeonNoBg = "/images/surgeon.png";
const myImage = "/images/my-image.png";
const sickIntestine = "/images/sick intestine.png";
const healthyIntestine = "/images/healthy intestine.png";
import aboutMeData from "@/app/aboutMe.json";

export default function Home() {
	return (
		<div className="w-full min-w-sm">

			{/* hero section    */}
			<section id="hero" className="bg-sky-800 w-full">
				{/* Left Text Area */}
				<div className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 pt-4 mx-auto ">
					<div className="max-w-xl py-[2rem] md:py-0 text-center md:text-left">
						<h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-10">
							Early care leads to lasting relief. <br /> Your gut deserves it.
						</h1>
						<button className="bg-sky-600 hover:bg-slate-300 hover:text-black border-2 border-sky-600 font-semibold text-slate-100 py-1 px-3 md:py-3 md:px-5 2xl:px-6 2xl:py-4 2xl:text-xl rounded cursor-pointer">
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

			{/* about me section */}
			<section
				id="about-me"
				className="bg-white py-12 px-4 md:px-10 border-t border-gray-200"
			>
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center  md:items-start gap-6">
					{/* Image */}
					<div className="w-full md:w-1/3 flex justify-center md:justify-start">
						<Image
							src={myImage}
							alt={aboutMeData.name}
							width={400}
							height={400}
							className="rounded-md shadow-md object-cover"
							priority
						/>
					</div>

					{/* Text */}
					<div className="w-full md:w-2/3 text-gray-800">
						<h2 className="text-2xl font-bold text-gray-900">
							{aboutMeData.name}
						</h2>
						<p className="text-sky-600 text-sm font-medium mt-1 whitespace-pre-line">
							{aboutMeData.title}
						</p>

						<ul className="list-disc list-outside  space-y-2 ml-4 mt-4 text-sm md:text-base">
							{aboutMeData.description.map((line, i) => (
								<li key={i}>{line}</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* testimonials section  */}
			<Testimonials />

			{/* appointment section */}
			<section
				id="appointment"
				className="bg-sky-800 py-10 px-4 md:px-12 border-t border-blue-200"
			>
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Left Image */}
					<div className="w-24 h-auto md:w-36">
						<img
							src={sickIntestine}
							alt="Sick Intestine"
							className="w-full h-auto object-contain"
						/>
					</div>

					{/* Text & Button */}
					<div className="text-center md:text-left flex flex-col items-center md:items-start">
						<p className="text-lg md:text-xl font-medium text-slate-200 mb-4 max-w-md">
							From discomfort to diagnosis - - let a specialist guide your recovery.
						</p>
						<button className="bg-white text-gray-800 font-semibold border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
							Book an Appointment
						</button>
					</div>

					{/* Right Image */}
					<div className="w-24 h-auto md:w-36">
						<img
							src={healthyIntestine}
							alt="Happy Intestine"
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
