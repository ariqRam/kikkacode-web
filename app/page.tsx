import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<Image className="light:brightness-0 p-4" src="./kikkacode.svg" alt="Logo" width={200} height={200}></Image>
			<section id="hero">
				<h1 className="font-rampart text-6xl w-[45%] m-8 mt-16 dark:text-white"><span className="text-blue">冬休み</span>を<span className="text-red">きっかけ</span>に、<span className="text-green">プログラム</span>を作り<span className="text-yellow">始めよう</span>。</h1>
			</section>
		</main>
	)
}
