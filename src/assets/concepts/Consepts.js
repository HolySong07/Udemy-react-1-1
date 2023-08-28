import Concept from "./Concept";

const Concepts = props => {

	return (
	<ul id="concepts"> 
		<Concept title={props.array[0].title} description={props.array[0].description} image={props.array[0].image}/>
		<Concept title={props.array[1].title} description={props.array[1].description} image={props.array[1].image}/>
		<Concept title={props.array[2].title} description={props.array[2].description} image={props.array[2].image}/>

	</ul>
	)
}

export default Concepts;