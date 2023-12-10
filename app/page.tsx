import Benefit from "./benefit";

import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Image
				className="light:brightness-0 p-4"
				src="./kikkacode.svg"
				alt="Logo"
				width={200}
				height={200}
			></Image>
			<section id="hero" className="flex">
				<div id="hero-text" className="ml-16 mt-16 w-[45%] dark:text-white">
					<h1 className="font-rampart text-6xl">
						<span className="text-blue">冬休み</span>を
						<span className="text-red">きっかけ</span>に、
						<span className="text-green">プログラム</span>を作り
						<span className="text-yellow">始めよう</span>。
					</h1>
					<p className="font-noto mt-5 w-[75%] text-xl leading-7">
						プログラミング言語というのは身近なものにも役に立つことを知っていますか？授業で学んだことをアプリにしよう！
					</p>
				</div>
				<div id="hero-image" className="m-auto flex w-[55%] justify-center">
					<Image src="./hero.svg" alt="Logo" width={500} height={500}></Image>
				</div>
			</section>
			<section
				id="benefits"
				className="m-10 flex justify-center gap-20 dark:text-white"
			>
				<Benefit
					className="text-blue"
					src="/benefit-1.png"
					heading="JASSOにいるうちに、完全なプロジェクトを作らない？"
					description="進学したら先生やクラスメートに見せるものがあるように、このイベントをきっかけにプロジェクトを始めることができる。"
				/>
				<Benefit
					className="text-red"
					src="/benefit-2.png"
					heading="実用的なコードはどう学べばいいの？"
					description="理論的な授業が良い参考にはなれますが、どうやって実用するか見てみましょう！"
				/>
				<Benefit
					className="text-yellow"
					src="/benefit-2.png"
					heading="この学校に同じ興味を持つ人がいるかな？"
					description="プロジェクトを始めたいと思っても、誰かと一緒にする人がいればいいんじゃない？このイベントに参加してみたら、他の同じ興味を持つ人と会うことができる。"
				/>
			</section>
			<section id="registration" className="flex justify-center mb-20">
				<button className=" bg-blue border-2 rounded-xl border-red p-2 hover:bg-yellow">
					登録フォームへ
				</button>
			</section>
		</main>
	);
}
