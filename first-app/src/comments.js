import React from "react";
import './index.css'

const Comments = (props) => {
    return (
        <div className="coment">
            <a href="/" className="avatat">
                <img className="img" src={props.avatar}  alt="" />
            </a>
            <div className="content-text">
                <div className="content">
                    <a href="/" className="author">
                       {props.authou}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">
                    <p>{props.textComment}</p>
                </div>
            </div>
        </div>
    );
}

export default Comments;