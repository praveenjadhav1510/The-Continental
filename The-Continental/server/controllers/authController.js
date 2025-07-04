const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err, result) => {
            if (err) throw err;
            res.status(201).json({ message: 'User registered successfully!' });
        });
    });
};

const book = (req, res) => {
    const { username, checkin_date, checkout_date, number_of_people, room_preference, room_number } = req.body;

    if (!username || !checkin_date || !checkout_date || !number_of_people || !room_preference || !room_number) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    db.query('INSERT INTO bookinginfo (username, checkin_date, checkout_date, number_of_people, room_preference, room_number) VALUES (?, ?, ?, ?, ?, ?)', 
        [username, checkin_date, checkout_date, number_of_people, room_preference, room_number], 
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Booking failed' });
            }
            res.status(201).json({ message: 'Booking successful!' });
        });
};


const login = (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, match) => {
                if (err) throw err;
                if (match) {
                    const token = jwt.sign({ id: results[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
};

module.exports = { register, login , book };
