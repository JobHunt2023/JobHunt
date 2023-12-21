import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  company: string;
  workplaceType: string;
  jobType: string;
  jobLocation: string;
  description: string;
  requirements: string[];
  responsibilities: string;
  applicationProcess: string;
  owner: number;
};

const jobSchema: Schema = new Schema({
  title: String,
  company: String,
  description: String,
  requirements: [String],
  jobLocation: String,
  jobType: String,
  responsibilities: String,
  workplaceType: String,
  applicationProcess: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const JobModel = mongoose.model<IJob>('Job', jobSchema);

export default JobModel;
