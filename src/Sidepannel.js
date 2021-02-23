import React  from "react";

const deviceType = ["All","Speaker","Headphone"]

const Sidepannel=(props)=>{
    const onItemSelection=(e)=>{
       props.updateItems(e)
    }
    return(
        <div className="side-container">
                <h3>SPEAKER TYPE</h3>
                    {
                        deviceType.map((e)=>{
                            return <button className="btn" onClick={()=>onItemSelection(e)}>{e}</button> 
                        })
                    }
        </div>
    );
}
export default Sidepannel;