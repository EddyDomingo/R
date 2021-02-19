import { useParams } from "react-router-dom";

const HeroDetail = (props) => {
    const heroes = props.heroes; 
   

    const { id } = useParams();
    return ( 
        <div>
            <h2>{heroes.id}</h2>
            <p>{heroes.heroName}</p>
            <p>{heroes.powers}</p>
            <p>{heroes.bio}</p>
        </div>
     );
}
 
export default HeroDetail;