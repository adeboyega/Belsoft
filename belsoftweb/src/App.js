import secondbg from './images/secondbg.jpg'
import belsoftlogo from './images/belsoftlogo.png'
import taillogo from './images/taillogo-removebg-preview.png'
import workbg from './images/workbg.jpg'
import whitebg from './images/whitebg.png'
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='firstPage' style={{ backgroundImage: `url(${secondbg})`, backgroundSize: 'cover', height: '100vh' , display: 'flex'}}>
        <div className='darkblue'>
        <img src={belsoftlogo} alt="belsoftlogo" className='belsoftlogo' />
        </div>
        <div className='lightblue'></div>
        <div className='lightpurple'></div>
        <div className='white'></div>
      </div>
      <div className= "secondpage" style={{ backgroundImage: `url(${whitebg})`, backgroundSize: 'cover', height: '100vh' , display: 'flex'}}>
        <div className='toptag'>
          <div style={{width:'40%', height:'100%', display:"flex"}}>
            <div style={{background: '#000041', width:'80%',height:'100%'}}></div>
            <div style={{background:'#148dcc', width:'20%', height: '100%'}}></div>
          </div>
          <p> it only gets better</p>
        </div>
        <div className='middle'> 
        <h2>About Belsoft</h2>
        <p>BELSOFT SYSTEMS LTD is an organization that specilizes in creating and delivering software solutions to mee the technological needs 
          and require,emts of businesses , individuals, and other clients.
        </p>
        <p>Our principal activities encompass a wide range of tasks and responsibilities aimed at desiging. building, and 
          maintaining software aplications.
        </p>
        </div>
        <div className='bottomtag'>
          <img src={taillogo} alt= 'belsoftlogo' style = {{width:'60px', height: '35px', color: '#000041'}}/>
        </div>

      </div>

      {/* thirdpage starts here */}
      <div className= 'thirdpage' style={{backgroundImage: `url(${workbg})`, backgroundSize: 'cover', height: '100vh'}}>
      <div className='toptag'>
          <div style={{width:'40%', height:'100%', display:"flex"}}>
            <div style={{background: '#FFFFFF', width:'80%',height:'100%'}}></div>
            <div style={{background:'#148dcc', width:'20%', height: '100%'}}></div>
          </div>
          <p style= {{color: '#FFFFFF'}}> it only gets better</p>
        </div>
        <div className= 'textcontainer'>
          <h2> Our Vision:</h2>
          <p>Pursuing perfection in everycode iteration, our objectuive is to contrivute positively on a global
            scale by providing software solutions that are robust scalable, and centered around user experience.
          </p>
        </div>
        <div className='textcontainer ourmission'>
          <h2>Our Mission:</h2>
          <p> Our mission is to empower individuals and organizations globally through advanced
            software engineering, We are commited to delivering top-tier digital solutions that are 
            adaptable and user-centric, consistently meeting the evolving needs of our clients. By 
            seamlessly intergrating innovative technologies, we position ourselves as trusted partner,
            driving digital transformation with excellence and reliablityacross diverse industries.
          </p>
        </div>
        <div className='bottomtag'>
          <img src={taillogo} alt= 'belsoftlogo' style = {{width:'60px', height: '35px', color: '#000041', }}/>
        </div>

      </div>
      <div className ='forthpage'>
        
      </div>
      
      
    </div>
  );
}

export default App;
