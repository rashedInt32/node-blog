import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: { type: Date, default: Date.now},
  isPublished: {type: Boolean, default: false},
  text: String
})

const Post = mongoose.model('Post', courseSchema);

export default Post;
