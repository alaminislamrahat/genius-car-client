import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img className=""
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold text-red-600">Price : ${price}</p>
                <div className="card-actions justify-start">
                   <Link to={`/cheakout/${_id}`}> <button className="btn btn-outline btn-error">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;