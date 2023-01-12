import React, { useState } from "react";
import { IState as Props } from "../App"

interface IProps {
    dynaman: Props['dynaman']
    setDynaman:  React.Dispatch<React.SetStateAction<Props['dynaman']>>
}

const AddToList: React.FC<IProps> = ({ dynaman, setDynaman }) => {

    const [input, setInput] = useState({
        
        title: "",
        name: "",
        numeral: "",
        dream: "",
        weapon: "",
        attack: "",
        image1983: "",
        image2011: ""
    })

    const handleChange = (eventDyna: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [eventDyna.target.name]: eventDyna.target.value
        })
    }

    const handleClick = ():void => {
        if(
            !input.title ||
            !input.name ||
            !input.numeral ||
            !input.dream ||
            !input.weapon ||
            !input.attack ||
            !input.image1983 
        ) {
            return
        }

        setDynaman([
            ...dynaman,
            {
                title: input.title,
                name: input.name,
                numeral: parseInt(input.numeral),
                dream: input.dream,
                weapon: input.weapon,
                attack: input.attack,
                image1983: input.image1983,
                image2011: input.image2011
            }
        ]);

        setInput({
            title: "",
            name: "",
            numeral: "",
            dream: "",
            weapon: "",
            attack: "",
            image1983: "",
            image2011: ""
        })

    }

    return (
        <div className="AddToList">
            <input 
            type="text" 
            placeholder="Title"
            className="AddToList-input" 
            value={input.title}
            onChange={handleChange}
            name="title"
            />
            <input 
            type="text" 
            placeholder="Name"
            className="AddToList-input" 
            value={input.name}
            onChange={handleChange}
            name="name"
            />
            <input 
            type="number" 
            placeholder="Roman Numeral (Digit Form)"
            className="AddToList-input" 
            value={input.numeral}
            onChange={handleChange}
            name="numeral"
            />
            <textarea  
            placeholder="Dream"
            className="AddToList-input" 
            value={input.dream}
            onChange={handleChange}
            name="dream"
            />
            <input 
            type="text" 
            placeholder="Weapon"
            className="AddToList-input" 
            value={input.weapon}
            onChange={handleChange}
            name="weapon"
            />
            <input 
            type="text" 
            placeholder="Attack"
            className="AddToList-input" 
            value={input.attack}
            onChange={handleChange}
            name="attack"
            />
            <input 
            type="text" 
            placeholder="1983 Image URL"
            className="AddToList-input" 
            value={input.image1983}
            onChange={handleChange}
            name="image1983"
            />
            <input 
            type="text" 
            placeholder="2011 Image URL"
            className="AddToList-input" 
            value={input.image2011}
            onChange={handleChange}
            name="image2011"
            />
            <button 
            className="AddToList-btn"
            onClick={handleClick}
            >
                Submit
            </button>
        </div>
    )
}

export default AddToList
