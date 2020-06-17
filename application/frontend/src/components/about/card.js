import '../../sass/App.scss'

const card = ({ img, name, page }) => {
    return(
        <div className="card mt-5 text-center shadow">
            <div className="embed-responsive embed-responsive-1by1 overflow">
                <img src={img} className='card-img-top embed-responsive-item img-fluid'/>
            </div>
            <div className="card-body p-3 text-dark">
                <h4 className="card-title">{name}</h4>
                <a href={page} className="btn btn-outline-success stretched-link">
                    About Me
                </a>
            </div>
        </div>
    );
};

export default card;
