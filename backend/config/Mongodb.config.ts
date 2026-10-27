import mongoose from 'mongoose';

const connectdb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODBURI!);
    console.log('The DB is connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;