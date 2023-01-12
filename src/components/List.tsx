import React from "react";
import { IState as IProps } from "../App"


const List: React.FC<IProps> = ({ dynaman} ) => {

    const renderList = () => {
        return dynaman.map((dynamanhero) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img src={dynamanhero.image1983} alt="" className="List-img" />
                        <h2>{dynamanhero.title}</h2>
                        <h2>{dynamanhero.name}</h2>
                        <h3>Roman Numeral {dynamanhero.numeral}</h3>
                    </div>
                    <p> <b>Dream:</b> <br /> {dynamanhero.dream} </p>
                    <p>  <b>Weapon:</b> <br /> {dynamanhero.weapon} </p>
                    <p> <b>Attack:</b> <br /> {dynamanhero.attack} </p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List