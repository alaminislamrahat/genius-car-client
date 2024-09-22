import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookServiceRow from "./BookServiceRow";

import useAxiosSecure from "../../hooks/useAxiosSecure";


const BookService = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure();
   
 
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
        .then(res => {
           setBookings(res.data)
        })
     
    }, [ url,axiosSecure])

    const handleDelete = id => {
        const proceed = confirm('Are you sure')

        if (proceed) {
            fetch(`https://genius-car-server-sigma-khaki.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successfully0')
                        const remainning = bookings.filter(booking => booking._id !== id)
                        setBookings(remainning)
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`https://genius-car-server-sigma-khaki.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remainning = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remainning];
                    setBookings(newBooking);
                }

            })
    }

    return (
        <div>
            <h1>book service</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookServiceRow
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                key={booking._id}
                                booking={booking}
                            ></BookServiceRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookService;