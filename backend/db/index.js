import mongoose from 'mongoose';

const db = {
  connect: (url, option) => {
    return mongoose.connect(url, option)
      .then(() => console.log('DB connected'))
      .catch(err => console.log(err));
  }
};

export default db;
