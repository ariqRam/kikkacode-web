import styles from './dDat.module.css';

export default function DDay({ className }: { className?: string }) {
	return (
		<div className={styles.card + " " + className}>
			<h1>12月<br></br>21日</h1>
		</div>
	)
}