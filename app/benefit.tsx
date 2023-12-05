import Image from "next/image"

export default function Benefit({ heading, description, className }: { heading: string, description?: string, className?: string }) {
	if (!description) {
		description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque soluta vero, saepe nihil nostrum sapiente! Odio quae rem tempora voluptatum fugiat accusantium animi."
	}
	return (
		<div className={className + " text-center max-w-[350px]"}>
			<Image src="./hero.svg" alt="Logo" width={500} height={500}></Image>
			<h1 className="text-4xl font-rampart h-[150px]">{heading}</h1>
			<p className="text-lg font-noto text-white">{description}</p>
		</div>
	)
}