import * as mongoose from 'mongoose';

export const DataSchema = new mongoose.Schema({
  type: String,
  title: String,
  subtitle: String,
  body: String,
  icons: [
    {
      type: String,
    },
  ],
  duration: String,
  received: String,
  position: Number,
  backgroundColor: String,
  image: String,
});
