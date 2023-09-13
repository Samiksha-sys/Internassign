import { AiOutlineArrowRight} from 'react-icons/ai';

function Blogs()
{
    return(
        <div className="back">
            <div className="ab1">
                <h1>Recent Blogs</h1>
            
            </div>
            <div className="ab2">
                <div className="ncard">
                    <div className="ncardl">
                    <h2>BEST PRACTICES</h2>
                    <p>In design active temper be uneasy.Thirty for remove plenty regard.</p>
                    <h3>Read more< AiOutlineArrowRight/> </h3>
                    </div> 
                    <div className="ncardr">
                        <img src="images/4.png"/>
                    </div>

                </div>
            </div>
            <div className="ab3">
                <div className="ocard1">
                <h2>BEST PRACTICES</h2>
                <p>Partiality on or continuing particular principles as.</p>
                <img src="images/5.jpg"/>
                </div>
                <div className="ocard2">
                <h2>BEST PRACTICES</h2>
                <p>Village did removed enjoyed explain</p>
                <img src="images/6.png"/>
                </div>
                <div className="ocard3">
                <h2>BEST PRACTICES</h2>
                <p>Wise busy past both park when an ye no. Nay likely her length.</p>
                <img src="images/7.png"/>
                </div>
            </div>
        </div>
    )

}
export default Blogs