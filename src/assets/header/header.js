const Header = props => {
	return (
		<header>
			<img src={props.imgSrc} alt={props.altImg}  />
        	<h1>Key React Concepts</h1>
        	<p>Selected key React concepts you should know about</p>
		</header>
	)
}

export default Header;