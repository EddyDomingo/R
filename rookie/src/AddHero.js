import { useState } from "react";

const AddHero = () => {
    const [heroName, setHeroName] = useState('');

    handleHeroAdd = ((event) => {
        setHeroName()
    });
    return ( 
        <form>
            <div>
                <label>Hero Name:</label>
                <input type="text" value={heroName} onChange={handleHeroAdd}/>
            </div>
        </form>
     );
}
 
export default AddHero;