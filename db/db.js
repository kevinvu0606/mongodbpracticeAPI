const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })

const db = mongoose.connection

// db . on is an event where on error it does that
db.on('error', (error) => console.log(error))

// db event where on open it does the following once
db.once('open', () => console.log('Connected to Database'))


module.exports = db