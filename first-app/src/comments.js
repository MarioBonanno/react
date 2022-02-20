import React from "react";
import faker from 'faker';
import './index.css'

const Comments = () => {
    return (
        <div className="coment">
            <a href="/" className="avatat">
                <img className="img" src={faker.image.image()}  alt="" />
            </a>
            <div className="content-text">
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">Today at 6:00</span>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default Comments;