import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 ">
		<div className="flex gap-16 flex-col sm:flex-row">
			<div className="sm:w-6/12">
				<h1>
					<Image
						src="/logo.svg"
						alt="Sake Wolf"
						width={360}
						height={180}
						className="mb-16"
					/>
				</h1>
				<p className="text-xl mb-4">
					I&apos;m Chris Wolf, an <a target="_blank" href="https://sakeeducationcouncil.net/">SEC Certified Sake Professional</a> living, drinking, and pouring sake in Los Angeles.
				</p>
				<p className="text-xl mb-4">
					I have a passion for introducing people to sake and creating new sake fanatics! I'd love to host a sake tasting at your venue or next event.
				</p>
				<p className="text-xl">
					<a href="mailto:chris@sakewolf.com" target="_blank">chris@sakewolf.com</a><br/>
					<a href="https://www.instagram.com/sakewolf_la/" target="_blank">@sakewolf_la</a>
				</p>
			</div>
			<div className="sm:w-6/12 text-center justify-center flex">
				<Image
					src="/pouring.jpg"
					className="rounded-full self-center"
					width={400}
					height={400}
					alt="Photo of me pouring sake from a blue bottle in front of a glass window."
				/>
			</div>
		</div>
        </main>
    </div>
  );
}
