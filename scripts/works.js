

function total_jobs(){
    const jobs = document.getElementById("total_jobs");
    const jobs_count = Number(jobs.innerText);
    jobs_count -= 1;
    jobs.innerText = jobs_count;
}

