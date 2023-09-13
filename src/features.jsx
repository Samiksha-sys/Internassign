import {useTypewriter,Cursor} from 'react-simple-typewriter'
function Features() {
  const[typeEffect]= useTypewriter({
    words:['Features that blows mind'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40, 
  })
  return (
    <div className="fourth">
      <div className="topcon">
        <h1> 
          {typeEffect}
        </h1>
          
        <p>
          We so opinion friend me message as delight.Whole front do of plate
          heard <br /> oh ought.His defective nor convinced residence own.
        </p>
      </div>
      <div className="bottomcon">
        <div className="leftcon">
          <div className="leftcon1">
            <div className="outcard1">
              <img src="images/1.jpg" />
              <h2>Really boy law county she unable her sister</h2>
              <p>
                We so opinion friends me message as delight.Whole front do of
                plate heard oh ought.
              </p>
            </div>
            <div className="leftcon2">
              <div className="outcard2">
                <img src="images/2.jpg" />
                <h2>Among sex are leave law built now</h2>
                <p>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought.
                </p>
              </div>
            </div>
          </div>
          <div className="rightcon">
            <div className="rightcon1">
              <div className="card1">
                <h3>Merits behind on afraid or warmly</h3>
              </div>
              <div className="card2">
                <h3>Believing neglected so so allowance existence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features
