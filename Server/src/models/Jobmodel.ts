import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  company: string;
   workplaceType: string,
  jobLocation: string
  description: string;
  requirements: string[];
  owner: number,
};

const jobSchema: Schema = new Schema({
  title: String,
  company: String,
  description: String,
  requirements: [String],

  jobLocation: String,
  workplaceType: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const JobModel = mongoose.model<IJob>('Job', jobSchema);

export default JobModel;
