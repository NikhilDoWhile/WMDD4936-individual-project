const request = require("request");

const linkedinUrl = "https://linkedin-jobs-search.p.rapidapi.com/";


function searchWebDeveloperJobsOnLinkedIn(){
        // request.post({
        //     method: 'POST',
        //     url: 'https://linkedin-jobs-search.p.rapidapi.com/',
        //     headers: {
        //       'content-type': 'application/json',
        //       'X-RapidAPI-Key': '2e7a4e01c0msh66d3f64080633c9p1deb56jsn147a5c6ce43b',
        //       'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com',
        //       useQueryString: true
        //     },
        //     body: {search_terms: 'Web Developer', location: 'Vancouver', page: '1'},
        //     json: true
        //   }, function(error, response){
        //     if(error){
        //         return null;
        //     }
        //     console.log(response);
        //     return response.body;

            
        // } );

        //Testing data to avoid reaching api limit
        return [{
            "job_url":"https://ca.linkedin.com/jobs/view/front-end-developer-at-conversion-3204645307?refId=YR4tl1G1vwZLyzKHbLouxA%3D%3D&trackingId=CDe1gARz7ZwxIwXBzN5QvA%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card",
            "linkedin_job_url_cleaned":"https://ca.linkedin.com/jobs/view/front-end-developer-at-conversion-3204645307",
            "company_name":"Conversion",
            "company_url":"https://ca.linkedin.com/company/widerfunnel?trk=public_jobs_jserp-result_job-search-card-subtitle",
            "linkedin_company_url_cleaned":"https://ca.linkedin.com/company/widerfunnel",
            "job_title":"Front End Developer",
            "job_location":"Vancouver, British Columbia, Canada",
            "posted_date":"2022-08-05","normalized_company_name":"Widerfunnel"
        }]


}
module.exports = {
    searchWebDeveloperJobsOnLinkedIn
}