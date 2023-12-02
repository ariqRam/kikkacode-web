import Image from 'next/image'

import DDay from './dDay'

export default function Home() {
	return (
		<main>
			<Image className="light:brightness-0 p-4" src="./kikkacode.svg" alt="Logo" width={200} height={200}></Image>
			<section id="hero" className="flex">
				<div id="hero-text" className="w-[45%] ml-16 mt-16 dark:text-white">
					<h1 className="font-rampart text-6xl"><span className="text-blue">冬休み</span>を<span className="text-red">きっかけ</span>に、<span className="text-green">プログラム</span>を作り<span className="text-yellow">始めよう</span>。</h1>
					<p className="font-noto text-xl mt-5 leading-7 w-[75%]">プログラミング言語というのは身近なものにも役に立つことを知っていますか？授業だけじゃ足りなくてつまらないなら、一緒に本番のコードを作ったら？</p>
				</div>
				<DDay className="font-rampart text-5xl dark:text-white w-[30%]" />
			</section>
		</main>
	)
}
