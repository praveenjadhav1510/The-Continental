import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Book() {
  const [disp, setDisp] = useState('');
  const handleDisp = () => {
    setDisp('none');
    setErrors('');
  };

  const [RB, setRB] = useState(false);
  const [errors, setErrors] = useState('');

  const [username, setUsername] = useState('');
  const [checkin_date, setCheckinDate] = useState('');
  const [checkout_date, setCheckoutDate] = useState('');
  const [people, setPeople] = useState('');
  const [roomtype, setRoomType] = useState('');
  const [roomno, setRoomNo] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('usname') || '');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/book', {
        username,
        checkin_date,
        checkout_date,
        number_of_people: people,
        room_preference: roomtype,
        room_number: roomno
      });
      console.log('Booking successful');
      setRB(true);
      setErrors('');
    } catch (error) {
      console.log('Booking failed', error);
      setRB(false);
      setErrors('Room Number '+roomno+' is not Available');
    }
  };

  return (
    <div className='book' style={{ display: disp }}>
      <form onSubmit={handleSubmit}>
        <div onClick={handleDisp} className='xmarkbook'>
          <FontAwesomeIcon className='xm' icon={faXmark} />
        </div>
        <h1>Room Booking Form</h1>
        <h3>Username: {username}</h3>
        <br />
        <div>
          <label htmlFor="checkin-date">Check-in Date:</label>
          <input 
            type="date" 
            name="checkin_date" 
            value={checkin_date} 
            onChange={(e) => setCheckinDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="checkout-date">Check-out Date:</label>
          <input 
            type="date" 
            name="checkout_date" 
            value={checkout_date} 
            onChange={(e) => setCheckoutDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="number-of-people">Number of People:</label>
          <input 
            type="number" 
            name="number_of_people" 
            value={people} 
            onChange={(e) => setPeople(e.target.value)} 
            min="1" 
            required 
          />
        </div>
        <div>
          <label htmlFor="room-preference">Room Preference:</label>
          <select 
            id="room-preference" 
            name="room_preference" 
            value={roomtype} 
            onChange={(e) => setRoomType(e.target.value)} 
            required
          >
            <option value="">Select a room type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div>
          <label htmlFor="room-number">Room Number:</label>
          <input 
            type="number" 
            id="room-number" 
            name="room_number" 
            value={roomno} 
            onChange={(e) => setRoomNo(e.target.value)} 
            required 
          />
        </div>
        <button className='fbt' type="submit">Book Now</button>
        <div className='errormessage' style={{color: RB ? 'lime' : 'red'}}>
          {RB ? `Booking successful roomno "${roomno}"` : errors}
        </div>
      </form>
    </div>
  );
}
