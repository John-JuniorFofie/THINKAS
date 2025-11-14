import { FiArrowRightCircle } from "react-icons/fi";
// import { FiArrowLeftCircle } from "react-icons/fi";

function Latest() { 
    return(
        <section className="latest-section">
            <h4>Finished the latest <br />environmental projects</h4>
            <div className="latest-cards" >  
                  {/* <div className="latest-item1"><FiArrowLeftCircle className="text-5xl" /></div> */}
                <div className="latest-item" >
                <img src="public\Images\team-volunteers-planting-trees-preserve-natural-ecosystem-forest.jpg" alt="" />
                </div>
                <div className="latest-item">
                <img src="public\Images\pleased-energetic-group-conservationists-team-up-help-preserve-ecosystems.jpg" alt="" />
                </div>
                <div className="icons">
                <div className="latest-item1"><FiArrowRightCircle className="text-5xl"/></div></div>
                </div>
                </section>
    )
}
export default Latest;