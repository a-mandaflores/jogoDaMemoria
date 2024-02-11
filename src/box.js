import React from "react";

export default function Box(props){

    const style = {backgroundColor: props.on ? props.color: "#333"}
    return (
        <div className="box">
            <div style={style} onClick={()=>{props.onClick(props.id)}} className="box" ></div>
        </div>
    )

}