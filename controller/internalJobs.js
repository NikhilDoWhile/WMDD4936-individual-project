const JobModel = require("../models/job");


function postJob(jobPost){
    console.log(jobPost)
    const m = new JobModel(jobPost);
    m.save();
    
}

async function getPostedJobs(){
    const result = await JobModel.find({});
    console.log(result);
    return result;
}

module.exports = {
    postJob, 
    getPostedJobs
}