
let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total_jobs");
let interviewCount = document.getElementById("interview_count");
let rejectedCount = document.getElementById("rejected_count");

const allTab = document.getElementById("all_tab");
const interviewTab = document.getElementById("interview_tab");
const rejectedTab = document.getElementById("rejected_tab");

let allJobs = document.getElementById("all_jobs");

const mainContainer = document.querySelector("main");

const filterSection = document.getElementById("filter_section");

function calculateJobs(){
    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateJobs();

// for changing tab sections button colors 
function toggleBtn(id){
    allTab.classList.remove('bg-primary', 'text-white');
    interviewTab.classList.remove('bg-primary', 'text-white');
    rejectedTab.classList.remove('bg-primary', 'text-white');

    const selectedTab = document.getElementById(id);
    selectedTab.classList.add('bg-primary', 'text-white');

    if(id == "interview_tab"){
        filterSection.classList.remove('hidden');
        allJobs.classList.add('hidden');
    } else if(id == 'all_tab'){
        filterSection.classList.add('hidden');
        allJobs.classList.remove('hidden');
    }
}


mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview_btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job_name').innerText;
        const jobSub = parentNode.querySelector('.job_subtitle').innerText;
        const jobInfo = parentNode.querySelector('.job_info').innerText;
        const jobDis = parentNode.querySelector('.job_dis').innerText;

        

        const cardInfo = {
            jobName,
            jobSub,
            jobInfo,
            jobDis
        };


        const jobExist = interviewList.find(items => items.jobName == cardInfo.jobName);

        parentNode.querySelector('.status_btn').innerText = `Applied`;

        if (!jobExist) {
            interviewList.push(cardInfo);
        }


        renderInterview();
    }


});


function renderInterview(){
    console.log('worked');
    filterSection.innerText = '';
    for (let inter of interviewList) {
        let div = document.createElement('div');
        div.className = `job_cards pb-4`;
        div.innerHTML = `
            <div class="jobs bg-base-100 p-6 rounded-lg space-y-2">
                    <div class="flex justify-between">
                        <h3 class="job_name text-[18px] font-semibold">${inter.jobName}</h3>
                        <button class="delete_btn btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                   
                    <p class="job_subtitle text-[#64748B]">${inter.jobSub}</p>
                    <br>
                    <p class="job_info text-[#64748B]">${inter.jobInfo}</p>
                    <button class="status_btn btn btn-outline">Not Applied</button>
                    <p class="job_dis text-[#64748B]">${inter.jobDis}</p>

                    <div class="buttons">
                        <button class="interview_btn btn btn-outline btn-success">Interview</button>
                        <button class="reject_btn btn btn-outline btn-error">Reject</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div);
    }
}