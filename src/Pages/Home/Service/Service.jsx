import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-server-sigma-khaki.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-6">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500 text-center">Services</h3>
                <h1 className="text-6xl font-bold text-center">Our services</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard service={service} key={service._id}/>)
                }
            </div>

        </div>
    );
};

export default Service;