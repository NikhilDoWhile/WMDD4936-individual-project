const {Schema} = require("mongoose");
const ObjectId = Schema.ObjectId;
const connection = require("../db/connection");

const job = new Schema({
    "jobId": ObjectId,
    "company": {
        type: String,
        required: true,
        maxLength: 100
    },
    "jobTitle": {
        type: String,
        required: true,
        maxLength: 100
    },
    "location": {
        type: String,
        required: true,
        maxLength: 20
    },
    "employmentType": {
        type: String,
        required: true,
        maxLength: 20
    },
    "seniorityLevel": {
        type: String,
        required: true,
        maxLength: 20
    },
    "jobType": {
        type: String,
        required: true,
        maxLength: 20
    },
    "jobDescription": {
        type: String,
        maxLength: 500
    },
    "email": {
        type: String,
        required: true,
        maxLength: 100
    },
    "phoneNumber": {
        type: String,
        required: true,
        maxLength: 20
    },
    "attachmentLink" : {
        type: String,
        maxLength: 200
    }
});

const JobModel = connection.model("job", job);

module.exports = JobModel;