import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheakOut = () => {

    const data = useLoaderData();
    const { title, _id, price, img } = data;

    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price,
        }
        console.log(order)
    

        fetch('https://genius-car-server-sigma-khaki.vercel.app/bookings', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(order),
          })
            .then(res => {
              if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
            })
            .then(data => {
              console.log('Response data:', data);
              if (data.insertedId) {
                alert('Added successfully');
              }
            })
            .catch(error => {
              console.error('Error:', error);
            })

    }

    return (
        <div>
            <h1>cheak out : {title}</h1>
            <form
                onSubmit={handleBookService}
                className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input name="price" type="text" defaultValue={price} className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input type="submit" value="Order Confirm" className="btn btn-primary btn-block" />
                </div>
            </form>
        </div>
    );
};

export default CheakOut;