
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
const rejectSection = document.getElementById('rejected_section');

const interview_status = "Applied";
const rejected_status = "Rejected"

function calculateJobs() {
    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateJobs();

// for changing tab sections button colors 
function toggleBtn(id) {
    allTab.classList.remove('bg-primary', 'text-white');
    interviewTab.classList.remove('bg-primary', 'text-white');
    rejectedTab.classList.remove('bg-primary', 'text-white');

    const selectedTab = document.getElementById(id);
    selectedTab.classList.add('bg-primary', 'text-white');

    if (id == "interview_tab") {
        filterSection.classList.remove('hidden');
        allJobs.classList.add('hidden');
        rejectSection.classList.add('hidden');
    } else if (id == 'all_tab') {
        allJobs.classList.remove('hidden');
        filterSection.classList.add('hidden');
        rejectSection.classList.add('hidden');
    } else if(id == 'reject_tab'){
        rejectSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        allJobs.classList.add('hidden');    
    }
}


mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview_btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job_name').innerText;
        const jobSub = parentNode.querySelector('.job_subtitle').innerText;
        const jobInfo = parentNode.querySelector('.job_info').innerText;
        const jobDis = parentNode.querySelector('.job_dis').innerText;

        parentNode.querySelector('.status_btn').innerText = interview_status;

        const jobStatus = interview_status;
        const cardInfo = {
            jobName,
            jobSub,
            jobStatus,
            jobInfo,
            jobDis
        };

        const jobExist = interviewList.find(items => items.jobName == cardInfo.jobName);

        if (!jobExist) {
            interviewList.push(cardInfo);
        }
        renderInterview('i');
    }
    else if (event.target.classList.contains('reject_btn')) {
            const parentNode = event.target.parentNode.parentNode;
            const jobName = parentNode.querySelector('.job_name').innerText;
            const jobSub = parentNode.querySelector('.job_subtitle').innerText;
            const jobInfo = parentNode.querySelector('.job_info').innerText;
            const jobDis = parentNode.querySelector('.job_dis').innerText;

            parentNode.querySelector('.status_btn').innerText = "rejected";
            const jobStatus = rejected_status;
            const cardInfo = {
                jobName,
                jobSub,
                jobStatus,
                jobInfo,
                jobDis
            };

            const jobExist = rejectedList.find(items => items.jobName == cardInfo.jobName);

            if (!jobExist) {
                rejectedList.push(cardInfo);
            }
            renderInterview('r');
    }


});

function renderInterview() {
    filterSection.innerHTML = '';
    rejectSection.innerHTML = '';

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
                <button class="status_btn btn btn-outline">${inter.jobStatus}</button>
                <p class="job_dis text-[#64748B]">${inter.jobDis}</p>
                <div class="buttons">
                    <button class="interview_btn btn btn-outline btn-success">Interview</button>
                    <button class="reject_btn btn btn-outline btn-error">Reject</button>
                </div>
            </div>
        `;
        filterSection.appendChild(div);
    }

    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = `job_cards pb-4`;
        div.innerHTML = `
            <div class="jobs bg-base-100 p-6 rounded-lg space-y-2">
                <div class="flex justify-between">
                    <h3 class="job_name text-[18px] font-semibold">${rejected.jobName}</h3>
                    <button class="delete_btn btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <p class="job_subtitle text-[#64748B]">${rejected.jobSub}</p>
                <br>
                <p class="job_info text-[#64748B]">${rejected.jobInfo}</p>
                <button class="status_btn btn btn-outline">${rejected.jobStatus}</button>
                <p class="job_dis text-[#64748B]">${rejected.jobDis}</p>
                <div class="buttons">
                    <button class="interview_btn btn btn-outline btn-success">Interview</button>
                    <button class="reject_btn btn btn-outline btn-error">Reject</button>
                </div>
            </div>
        `;
        rejectSection.appendChild(div);
    }

    calculateJobs();
}