import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
          clientType: {
            type: String,
            required: true
          }
    }
);

export default mongoose.model("Client", ClientSchema)


