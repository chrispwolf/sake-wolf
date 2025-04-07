import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex justify-center">
      <main className="flex flex-col gap-8 row-start-2 items-center lg:w-8/12 lg:mt-5 lg:mb-5">
	  		<h1 className="self-start">
					<Image
						src="/logo.svg"
						alt="Sake Wolf"
						width={180}
						height={90}
						className="mb-16"
					/>
			</h1>
		<div className="flex gap-16 flex-col">
			<div>
				<div className="text-center justify-center flex mb-6">
					<Image
						src="/pouring.jpg"
						className="block rounded-full self-center circle-shadow"
						width={400}
						height={400}
						alt="Photo of me pouring sake from a large bottle at a bar. The bar is wood. Behind me is an exposed brick wall. I'm a man in my 30s with a mustache and glasses. I'm wearing a beige baseball cap, glasses, and a grey short-sleeve button down."
					/>
				</div>
				<h2 className="text-2xl font-bold mb-6">Howdy 🍶 こんにちは</h2>
				<p className="text-xl mb-4">
					I&apos;m Chris Wolf, a full-time sake obsessive living and drinking in Los Angeles.
				</p>
				<p className="text-xl mb-4">
					I&apos;ve studied Japanese sake behind the bar here in LA, and while visiting breweries with renowned experts in Japan. I want to share the richness, versatility, and delight of sake with you.
				</p>
				<h2 className="text-2xl font-bold mb-6 mt-6">Get in touch 🍶 連絡</h2>
				<p className="text-xl mb-4">
						Let&apos;s host a sake tasting at your next event, or arrange a sake pop-up night at your venue!
				</p>
				<p className="text-xl mb-4">
					<a href="mailto:chris@sakewolf.com" target="_blank">chris@sakewolf.com</a><br/>
					<a href="https://www.instagram.com/sakewolf_la/" target="_blank">@sakewolf_la</a>
				</p>
				<h2 className="text-2xl font-bold mt-6 mb-6">Certifications 🍶 証明書</h2>
				<p className="text-xl mb-4">I&apos;m an <a href="https://sakeeducationcouncil.net/certification/" target="_blank">SEC Advanced Sake Professional</a> and a <a href="https://www.sakescholar.com/" target="_blank">Sake Scholar</a>.</p>
			</div>
		</div>
        </main>
    </div>
  );
}
