import Card from './card';

// images must be square (nxn pixels)
import imgGarrett from '../../assets/imgs/garrett.png';
// import imgBuu from '../../assets/imgs/garrett.png';
// import imgNick from '../../assets/imgs/garrett.png';
 import imgSarah from '../../assets/imgs/Sarah.png';
// import imgKamelia from '../../assets/imgs/garrett.png';
import imgKamelia from '../../assets/imgs/kamelia.png';
import imgMantasha from '../../assets/imgs/imgMantasha.jpeg'
// import imgMantahsa from '../../assets/imgs/garrett.png';

// import imgKamelia from '../../assets/imgs/garrett.png';





const about = () => {
    return (
      <React.Fragment>
        <div>
            CSC648 Summer 2020, Team 5
        </div>
        <div className='card-deck container-fluid align-item-center justify-content-center'>
            <div className='row pt-5'>
                <div className='col-md-4 mx-auto'>
                    <Card img={imgGarrett} name={'Garrett Johnson'} page={'/garrett'}/>
                    <Card img={imgKamelia} name={'Kamelia Shaharova'} page={'/kamelia'}/>
                </div>
                <div className='col-md-4 mx-auto'>
                    <Card img={imgSarah} name={'Sarah Nafees'} page={'/sarah'}/>
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                </div>
                <div className='col-md-4 mx-auto'>
                   
                    <Card img={imgMantasha} name={'Mantasha Khan'} page={'/about/mantasha'}/>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default about;
