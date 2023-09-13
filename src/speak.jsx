import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
function Speak()
{
    return(
        <div className="spakb">
            <div className="spakco">
                <div className="spakco1">
                    <p1>We speak with our powerfull statistics</p1>
                </div>
                <div className="spakco2">
                    <div className="spakco21">
                        <h1>1M+</h1>
                        <div className="spakco211">

                        
                        <p1><BsFillPersonFill/></p1>
                        <p2>Active Users</p2>
                    </div>
                    </div>
                    <div className="spakco22">
                        <h1>30K+</h1>
                        <div className="spakco221">
                        <p1><AiFillStar/></p1>
                        <p2>5-Star Reviews</p2>
                        </div>
                    </div>
                    <div className="spakco23">
                        <h1>$252M</h1>
                        <div className="spakco231">
                        <p1><AiFillStar/></p1>
                        <p2>Transactions</p2>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Speak