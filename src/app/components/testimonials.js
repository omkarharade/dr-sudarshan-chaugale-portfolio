"use client";

import { useState } from "react";
import testimonials from "@/app/testimonials.json";
import { ChevronLeft, ChevronRight, User, Quote, X } from "lucide-react";

export default function Testimonials() {
	const [index, setIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
    const len = testimonials.length;
	const next = () => setIndex((prev) => (prev + 1) % len);
	const prev = () => setIndex((prev) => (len + prev - 1 ) % len);
    const { name, rating, message } = testimonials[index];

    console.log("index value is  = ", index);

	// Trim message (e.g. 35 words max)
	const trimMessage = (text, maxWords = 35) => {
		const words = text.split(" ");
		return words.length > maxWords
			? words.slice(0, maxWords).join(" ") + "..."
			: text;
	};

	return (
		<section
			id="testimonials"
			className="max-w-6xl mx-auto py-[3rem] px-4 sm:px-6 md:px-12 lg:px-20 bg-white border-t border-gray-200"
		>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
				What Patients Say ?
			</h2>

			<div className="relative border border-sky-200 rounded-lg p-4 sm:p-6 bg-white shadow-md w-full max-w-3xl mx-auto">
				{/* Arrows */}
				<button
					onClick={prev}
					className="absolute left-1 top-1/2 transform -translate-y-1/2 text-sky-500 hover:text-sky-700"
				>
					<ChevronLeft size={24} />
				</button>

				<button
					onClick={next}
					className="absolute right-1 top-1/2 transform -translate-y-1/2 text-sky-500 hover:text-sky-700"
				>
					<ChevronRight size={24} />
				</button>

				{/* Content */}
				<div className="flex flex-col items-center text-center px-2 sm:px-4">
					{/* Avatar */}
					<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sky-600 flex items-center justify-center mb-3">
						<User className="text-sky-100 w-6 h-6" />
					</div>

					{/* Name */}
					<p className="font-medium text-gray-800 text-sm sm:text-base">{name}</p>

					{/* Rating */}
					<div className="flex items-center mt-1 mb-4 text-sm">
						{[...Array(5)].map((_, i) => (
							<span key={i} className={i < rating ? "text-orange-400" : "text-gray-300"}>
								★
							</span>
						))}
					</div>

					{/* Testimonial Box */}
					<div className="bg-sky-100 px-4 py-4 rounded-md text-gray-800 relative w-full">
						<Quote className="absolute left-2 top-2 text-sky-600 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
						<p className="text-start text-sm whitespace-pre-line px-4">
							{trimMessage(message)}
							{message.split(" ").length > 35 && (
								<span
									onClick={() => setShowModal(true)}
									className="text-sky-600 underline cursor-pointer ml-1"
								>
									Read more
								</span>
							)}
						</p>
						<Quote className="absolute right-2 bottom-2 text-sky-600 w-4 h-4 sm:w-5 sm:h-5 rotate-0" />
					</div>
				</div>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
					<div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6 relative shadow-lg">

						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-2">
								<User className="text-sky-600" />
							</div>
							<p className="font-medium text-gray-800">{name}</p>
							<div className="flex items-center mt-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<span
										key={i}
										className={i < rating ? "text-orange-400" : "text-gray-300"}
									>
										★
									</span>
								))}
							</div>
							<p className="text-start text-sm text-gray-700 whitespace-pre-line">{message}</p>
							<button
								onClick={() => setShowModal(false)}
								className="mt-6 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
