import Image from "next/image"

export default function Benefit({ heading, description, className, src }: { heading: string, description?: string, className?: string, src: string }) {
	if (!description) {
		description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque soluta vero, saepe nihil nostrum sapiente! Odio quae rem tempora voluptatum fugiat accusantium animi."
	}
	return (
		<div className={className + " text-center max-w-[350px] mx-auto"}>
			<div className="h-[230px] mx-auto">
				<Image src={src} alt="Logo" width={300} height={300}></Image>
			</div>
			<h1 className="text-3xl font-rampart h-[110px]">{heading}</h1>
			<p className="text-lg font-noto text-white">{description}</p>
		</div>
	)
}