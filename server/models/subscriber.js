import mongoose from 'mongoose';

const subscriberSchema = mongoose.Schema({
    phoneNumber: String,
    username: String,
    password: String,
    domain: String,
    status: String,
    features: {
        callForwardNoReply: {
            provisioned: Boolean,
            destination: String
        }
    },
})

var Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;