import css from './Header.module.scss'

export default function Header(props) {
	return (
	 <header className={css.header}>
		<h1>{props.title}</h1>
		<p>{props.description}</p>
	 </header>
  )
}
