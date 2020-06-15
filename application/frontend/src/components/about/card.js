const card = ({ img }) => {
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <img src={img} className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Card Title</h4>
                <p className='card-text text-secondary'>
                    TODO: text goes here
                </p>
                <a href='#' className='btn btn-outline-success'>
                    About Me
                </a>
            </div>
        </div>
    );
};

export default card;
