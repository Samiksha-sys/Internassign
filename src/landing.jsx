import {IoIosArrowDown} from 'react-icons/io';
import {AiFillPlayCircle} from 'react-icons/ai';
import {AiFillCheckCircle} from 'react-icons/ai';

function Landing(){
    return(
        
        <div className="abov">
            <div className="ttier">
               
            <div className="ttier1">
                <h1>AR SHAKIR</h1>
            </div>
            <div className="ttier2">
                <ul>
                   <li><p>Product <IoIosArrowDown/>
                </p>
                <ul>
                    <p>Card</p>
                    <p>Cheque</p>
                </ul>
                   
                   </li>
                    <li><p>Template <IoIosArrowDown/></p>
            <ul>
                <p>Simple</p>
                <p>Grid</p>
                <p>Flex</p>
            </ul>
                        </li>
                    <li><p>Blog </p></li>
                    <li><p>Pricing</p></li>
                </ul>
            </div>
            <div className="ttier3">
                
                <p3>Sign In</p3>
                <button>Start Free</button>
                
            </div>
            </div>
            <div className="btier">
                <div className="btierl">
                    <div className="btierl1">
                        <h1>Managing freelance payments has never been easier</h1>
                    </div>
                    <div className="btierl2">
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
                    </div>
                    <div className="btierl3">
                        <div className="btierl31">
                            <button>Get Started</button>
                        </div>
                        <div className="btierl32">
                            <p1><AiFillPlayCircle/></p1>
                            <p2>See How It Works</p2>
                        </div>
                    </div>
                    <div className="btierl4">
                    <div className="btierl41">
                        <p1><AiFillCheckCircle/></p1>
                        <p2>Free Register</p2>
                        </div>
                        <div className="btierl42">
                        <p1><AiFillCheckCircle/></p1>
                        <p2>Great Service</p2>
                        </div>
                    </div>
                </div>
                <div className="btierr">
                    <div className="btierr1">
                    <img src="images/9.png"/>
                    </div>
                   
                </div>
            </div>
            
        </div>

    )
}
export default Landing