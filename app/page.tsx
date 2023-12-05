import Benefit from './benefit'

import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<Image className="light:brightness-0 p-4" src="./kikkacode.svg" alt="Logo" width={200} height={200}></Image>
			<section id="hero" className="flex">
				<div id="hero-text" className="w-[45%] ml-16 mt-16 dark:text-white">
					<h1 className="font-rampart text-6xl"><span className="text-blue">冬休み</span>を<span className="text-red">きっかけ</span>に、<span className="text-green">プログラム</span>を作り<span className="text-yellow">始めよう</span>。</h1>
					<p className="font-noto text-xl mt-5 leading-7 w-[75%]">プログラミング言語というのは身近なものにも役に立つことを知っていますか？授業で並んだことをアプリにしよう！</p>
				</div>
				<div id="hero-image" className="w-[55%] flex m-auto justify-center">
					<Image src="./hero.svg" alt="Logo" width={500} height={500}></Image>
				</div>
			</section>
			<section id="benefits" className="flex dark:text-white gap-16 justify-center m-20">
				<Benefit className="text-blue" heading="進学しないうちに、完全のプロジェクトを作らない？" description="進学したら先生やクラスメートに見せるものがあるように、このイベントをきっかけにプロジェクトを始めることができる。" />
				<Benefit className="text-red" heading="実用的のコードはどう学べばいいの？" description="理論的な授業が良い参考にはなれますが、どうやって実用するか見てみましょう！" />
				<Benefit className="text-yellow" heading="この学校に同じ興味を持つ人がいるかな？" description="プロジェクトを始めたいと思っても、誰かと一緒にする人がいればいいんじゃない？このイベントに参加してみたら、他の同じ興味を持つ人と会うことができる。" />
			</section>
		</main>
	)
}
