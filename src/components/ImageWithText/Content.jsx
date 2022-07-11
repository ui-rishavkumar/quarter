import React from "react";
import './content.css';

const Content = ({arrayData}) =>{
    return(
        <>
        {arrayData.map((items)=>{
            return(<>
                <div className="main-heading">
            <h6 className="about-us">{items.about}</h6>
            <h1 class="section-title">{items.sectionTitle}</h1>
            <p className="text">{items.titleText}</p>
        </div>
            </>);
        })
        }
        
        </>
    );
};
export default Content;
