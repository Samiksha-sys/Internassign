import { AiOutlinePlus } from 'react-icons/ai';
import {BiSolidMessage} from 'react-icons/bi';
import React,{useState} from 'react';

function Frequent(){
    const [one,setone]=useState(false)
    const [two,settwo]=useState(false)
    const [three,setthree]=useState(false)
    const [four,setfour]=useState(false)
    const [five,setfive]=useState(false)
    return(

        <div className="abo">
            <div className="abot">
                <h1>Frequently asked questions</h1>
            </div>
            <div className="abob">
                <div className="abobl">
                    <div className="abobl1" >
                        <h2>The expense windows adapted sir. Wrong widen drawn.<span onClick={()=>setone(!one)}><AiOutlinePlus/></span></h2>
                        {
                            one===true &&
                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                        }


                       
                    </div>
                    <div className="abobl2">
                        <h2>Six curiosity day assurance bed necessary? <span onClick={()=>settwo(!two)}><AiOutlinePlus/></span></h2>
                      { 
                      two===true &&
                       
                        <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                      }
                        </div>
                    <div className="abobl3">
                        <h2>Produce say the ten moments parties?<span onClick={()=>setthree(!three)}><AiOutlinePlus/></span></h2>
                        {
                        
                        
                        three===true &&
                       
                       <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                   
                            }    </div>
                    <div className="abobl4">
                        <h2>Simple innate summer fat appear basket his desire joy?<span onClick={()=>setfour(!four)}><AiOutlinePlus/></span></h2>
                        {
                            four===true &&

                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                        }
                        </div>
                    <div className="abobl5">
                        <h2>Outward clothes promise at gravity do excited?<span onClick={()=>setfive(!five)}><AiOutlinePlus/></span></h2>
                        {
                            five===true &&
                            <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                    
                                }        </div>
                </div>
                <div className="abobr">
                    <div className="abobr1">
                        <div className="abobr2">
                        <h2><BiSolidMessage/></h2>
                        </div> 
                        <div className="abobr3">
                        <h1>Do you have more questions?</h1>
                        </div>
                        <div className="abobr4">
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        </div>
                        <div className="abobr5">
                            <button>Shoot a Direct Mail</button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Frequent