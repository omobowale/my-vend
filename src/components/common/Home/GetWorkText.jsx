import React,{ Fragment } from 'react'

function GetWorkText(props) {
    return (
        <Fragment>
            <li className={props.active ? "active" : ""}>
                <div className="number">
                    <span>{ props.id }</span>
                </div>
                <div className="text">
                    <h3 className="bold">{props.main}</h3>
                    <p>{props.sub}</p>
                </div>
            </li>
        </Fragment>
    )
}

export default GetWorkText
