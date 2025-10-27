import React, { useEffect } from 'react'
import { UseBooking } from '../../contexts/Useboooking.jsx'
import '../../App.css'
import './final.css'


const Final = () => {

    const { bookingData } = UseBooking();

    console.log(bookingData);

    //will directly store the booking data to the backend from here 
    useEffect(() => {
        // Make an API call to store booking data
        const storeBookingData = async () => {
            try {
                const response = await fetch('/api/bookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                });

                if (!response.ok) {
                    throw new Error('Failed to store booking data');
                }
                alert("Booking Successful!");
                const data = await response.json();
                console.log('Booking data stored successfully:', data);
            } catch (error) {
                console.error('Error storing booking data:', error);
            }
        };

        storeBookingData();
    }, [bookingData]);

    

    return (
      <div className="container mx-auto p-6 space-y-6 ">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-white/80">Final Booking Summary</h1>

                {/* User Information */}
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">User Information</h2>
                    {bookingData.user.map((item, index) => (
                    <div key={index} className="space-y-1 border-b border-gray-200 last:border-b-0 pb-2 mb-2">
                        <p><span className="font-medium text-gray-600">Name:</span> {item.name}</p>
                        <p><span className="font-medium text-gray-600">Age:</span> {item.age}</p>
                        <p><span className="font-medium text-gray-600">Gender:</span> {item.gender}</p>
                    </div>
                    ))}
                </div>

                {/* Flight Information */}
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Selected Flight</h2>
                    <p><span className="font-medium text-gray-600">Flight Name:</span> {bookingData.selectedFlight.flightName}</p>
                    <p><span className="font-medium text-gray-600">From:</span> {bookingData.selectedFlight.source}</p>
                    <p><span className="font-medium text-gray-600">To:</span> {bookingData.selectedFlight.destination}</p>
                    <p><span className="font-medium text-gray-600">Date:</span> {bookingData.selectedFlight.date}</p>

                    {/* Seats */}
                    <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Selected Seats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {bookingData.seats.map((s, idx) => (
                        <div key={idx} className="bg-green-50 border border-green-200 rounded-md p-3 shadow-sm">
                            <p><span className="font-medium text-gray-600">Seat:</span> {s.label}</p>
                            <p><span className="font-medium text-gray-600">Category:</span> {s.category}</p>
                            <p><span className="font-medium text-gray-600">Price:</span> ₹{s.price}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Total Price */}
                <div className="bg-gray-100 p-4 rounded-md text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-800">
                    Total Price: <span className="text-green-600">₹{bookingData.totalPrice}</span>
                    </h2>
                </div>
                </div>


    )
}

export default Final