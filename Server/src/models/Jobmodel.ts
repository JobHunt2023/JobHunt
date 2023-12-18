import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  company: string;
  description: string;
  requirements: string[];
 
}

const jobSchema: Schema = new Schema({
  title: String,
  company: String,
  description: String,
  requirements: [String],
  
});

const JobModel = mongoose.model<IJob>('Job', jobSchema);

export default JobModel;
