import Card from './card';

// images must be square (nxn pixels)
import imgGarrett from '../../assets/imgs/garrett.png';
// import imgBuu from '../../assets/imgs/garrett.png';
// import imgNick from '../../assets/imgs/garrett.png';
// import imgSarah from '../../assets/imgs/garrett.png';
// import imgKamelia from '../../assets/imgs/garrett.png';
// import imgMantahsa from '../../assets/imgs/garrett.png';



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
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                </div>
                <div className='col-md-4 mx-auto'>
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                </div>
                <div className='col-md-4 mx-auto'>
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                    <Card img={imgGarrett} name={'Your Name'} page={'/name'}/>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default about;
