import Card from './card';

import imgGarret from '../../assets/imgs/garrett.png';


const about = () => {
    return (
      <React.Fragment>
        <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                    <Card img={imgGarret}/>
                </div>
                <div className='col-md-4'>
                    <Card img={imgGarret}/>
                </div>
                <div className='col-md-4'>
                    <Card img={imgGarret}/>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default about;
