import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from '../db';
import posts from '../routes/api/posts';
import user from '../routes/api/users';

const dbUri = 'mongodb://localhost/playground';

// Initialize express
const app = express();

app.use(cors());

// Connectingto mongodb
db.connect(dbUri, { useNewUrlParser: true });

// Initialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Posts and User routes handler
app.use('/api/posts', posts);
app.use('/api/user', user);

// PORT
const PORT = process.env.PORT || 3900;
// Listen server
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`))
