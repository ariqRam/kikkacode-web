'use client'

import './page.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Link from "next/link";
import Image from "next/image";

import Benefit from "./benefit";

export default function Home() {
	return (
		<main>
			<Image
				className="light:brightness-0 p-8 m-auto"
				src="./kikkacode.svg"
				alt="Logo"
				width={200}
				height={200}
			></Image>
			<section id="hero" className="flex mb-20">
				<div id="hero-text" className="w-[70%] mx-auto md:ml-16 mt-16 md:w-[45%] dark:text-white">
					<h1 className="font-rampart text-5xl md:text-6xl">
						<span className="text-blue">冬休み</span>を
						<span className="text-red">きっかけ</span>に、
						<span className="text-green">プログラム</span>を作り
						<span className="text-yellow">始めよう</span>。
					</h1>
					<p className="font-noto mt-5 w-[75%] text-xl leading-7">
						プログラミング言語というのは身近なものにも役に立つことを知っていますか？授業で学んだことをアプリにしよう！
					</p>
				</div>
				<div id="hero-image" className="m-auto hidden md:flex w-[55%] justify-center">
					<Image src="./hero.svg" alt="Logo" width={500} height={500}></Image>
				</div>
			</section>
			<div className="block mb-10 md:m-0 md:hidden">
				<Swiper
					id="benefits-mobile"
					modules={[Pagination, FreeMode]}
					spaceBetween={50}
					pagination={true}
				>
					<SwiperSlide>
						<Benefit
							className="text-blue"
							src="/benefit-1.png"
							heading="JASSOにいるうちに、完全なプロジェクトを作らない？"
							description="進学したら先生やクラスメートに見せるものがあるように、このイベントをきっかけにプロジェクトを始めることができる。"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Benefit
							className="text-red"
							src="/benefit-2.png"
							heading="実用的なコードはどう学べばいいの？"
							description="理論的な授業が良い参考にはなれますが、どうやって実用するか見てみましょう！"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Benefit
							className="text-yellow"
							src="/benefit-3.png"
							heading="この学校に同じ興味を持つ人がいるかな？"
							description="プロジェクトを始めたいなら、このようなイベントで同じ興味を持つ人々と出会えます。一緒にすればいいんじゃない？"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<section
				id="benefits"
				className="m-10 hidden md:flex justify-center gap-20 dark:text-white"
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
					src="/benefit-3.png"
					heading="この学校に同じ興味を持つ人がいるかな？"
					description="プロジェクトを始めたいと思っても、誰かと一緒にする人がいればいいんじゃない？このイベントに参加してみたら、他の同じ興味を持つ人と会うことができる。"
				/>
			</section>
			<section id="registration" className="flex justify-center mb-20">
				<Link className=" bg-blue border-2 rounded-xl border-red p-2 hover:bg-yellow" href="https://forms.gle/EiCWUVsV6NZPnf239">
					登録フォームへ
				</Link>
			</section>
			<section id="footer" className=" text-gray-400 flex justify-center m-5"><p>by <Link className="underline hover:text-blue" href="https://www.github.com/ariqRam">Ariq Ramdhany</Link></p></section>
		</main>
	);
}
