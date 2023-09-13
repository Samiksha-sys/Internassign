import {BiLogoLinkedin} from 'react-icons/bi';
import {BsMessenger} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaInfinity} from 'react-icons/fa';
function Discover()
{
    return(
        <div className="def">
            <div className="deft">
                <div className="deft1">
                <h1>Discover a better way to <br/>manage spendings</h1>
                <button>Get Started Now</button>
            </div>
            </div>
            <div className="defb">
               
               <div className="defbt">
                <div className="defb1">
                    <h1>AR Shakir</h1>
                    <p>Finance helps companies manage payments easily.</p>
                    <p1><BiLogoLinkedin/><BsMessenger/><AiOutlineTwitter/><FaInfinity/></p1>
                </div>
                <div className="defb2">
                    <h1>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="defb3">
                    <h1>Resources</h1>
                    <ul>
                        <li>Proposal Template</li>
                        <li>Invoice Template</li>
                        <li>Tutorial</li>
                        <li>How to write a contract</li>
                    </ul>
                </div>
                <div className="defb4">
                    <h1>Join Our Newsletter</h1>
                    <div className="defb41">
                        <div className="defb411">
                        
                        <input placeholder='Your email address' type="Text" className="defb411"></input>
                        </div>
                        <p2><button>Subscribe</button></p2>
                    </div>
                    <p>* Will send you weekly updates for your better finance management.</p>
                </div>
            </div>
            <div className="defbb1">

            </div>
            <div className="defbb2">
                <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
            </div>
            </div>
        </div>
    )

    
}
export default Discover