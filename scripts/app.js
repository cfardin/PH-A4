
let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total_jobs");
let interviewCount = document.getElementById("interview_count");
let rejectedCount = document.getElementById("rejected_count");

const allTab = document.getElementById("all_tab");
const interviewTab = document.getElementById("interview_tab");
const rejectedTab = document.getElementById("rejected_tab");

let allJobs = document.getElementById("all_jobs");



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
}