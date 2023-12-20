import mongoose, { Schema, Document } from 'mongoose';

interface IApply extends Document {
    job: number
    applicant: number,
  };

  const applicationSchema: Schema = new Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
      },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  });
  
  const ApplyModel = mongoose.model<IApply>('applications', applicationSchema);
  
  export default ApplyModel;
