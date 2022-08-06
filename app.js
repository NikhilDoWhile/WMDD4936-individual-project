const express = require("express");
const externalJobs = require("./controller/externalJobs");
const bodyParser = require("body-parser");
const app = express();
const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening"));
const {searchWebDeveloperJobsOnLinkedIn} = require("./controller/externalJobs");
const {postJob, getPostedJobs}= require("./controller/internalJobs");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/web-developer-jobs", function(req, res) {
    let result = searchWebDeveloperJobsOnLinkedIn();
    if(!result){
        return res.status(404).json({"msg": "no data found"});
    }
    return res.json(result);
});

app.post("/post-job", function(req, res){
    postJob(req.body);
    return res.json({"msg": "job created successfully"});
})

app.get("/posted-jobs", async function(req, res){
    let result = await getPostedJobs();
    if(!result){
        return res.status(204).json({"msg": "No Jobs Found"});
    }
    return res.json(result);
})