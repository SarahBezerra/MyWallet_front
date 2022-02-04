import { React } from "react";
import { Transition } from "./style";

export default function Registry({ type, description, value, date }){
    return(
        <Transition type={type}>
            <span>
                <div className="date">{date}</div>
                <div className="description">{description}</div>
            </span>
            <div className="value">{value}</div>
        </Transition>
    )
}

