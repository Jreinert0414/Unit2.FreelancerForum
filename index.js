//create array of name, work, starting price called freelancers
// write a function to creat and h2 element with the average 
//  startign price as a variable 
// createa another h1 for available freelancers
//create ul for name, occupation, starting price
// create a function to run through array of freelancers
//create new Li every 3 secs to update all 3 uls\
//new entries to page will change the average starting price



const workers = [
  { name: "Basil", price: 90, occupation: "Butler" },
  { name: "Pembroke", price: 51, occupation: "Trained circus monkey" },
  { name: "Batman", price: 250, occupation: "Vigilante" },
  { name: "Ms. Frazzle ", price: 100, occupation: "Teacher" },
  { name: "Brick", price: 11, occupation: "Support Professional" },
  { name: "Dr. Gazit", price: 150, occupation: "Therapist" },
  { name: "Lil BigMan", price: 65, occupation: "Hypeman" },
  { name: "Danny Ocean", price: 120, occupation: "Heist Planner" },
];
const webPageWorkers = [

];

const averageCost =[];

let counter = 0
let maxWorkers = workers.length;
const workerJobs =document.querySelectorAll(`#occupation`);
const addWorkerIntervalId = setInterval(addWorker, 500);
const averageCostIntervalId =setInterval(averageFee,500)
console.log( `wtf`,webPageWorkers)


render();

function render(){


  const workerName = document.querySelector(`#name`)
  const liName = document.createElement("li");
     //make the text content of the liName the each name of the wpw array
    let getAName = webPageWorkers[webPageWorkers.length-1];
    liName.textContent = getAName.name;
    workerName.appendChild(liName);

  const workerJob = document.querySelector(`#occupation`);
  const liJob = document.createElement(`li`);
    let getAJob =webPageWorkers[webPageWorkers.length-1];
    liJob.textContent= getAJob.occupation;
    workerJob.appendChild(liJob);

  const workerFee =document.querySelector(`#price`);
  const liFee = document.createElement(`li`);
    let getPrice=webPageWorkers[webPageWorkers.length-1];
    liFee.textContent =getPrice.price;
    workerFee.appendChild(liFee);


  const avgStartingPrice =document.querySelector(`h2`);
    const avgPrice =document.createElement (`h2`);
    avgPrice.innerText= webPageWorkers.reduce((totalPrice, currentWorker)=>
    totalPrice + currentWorker.price,0)/webPageWorkers.length;
    avgStartingPrice.replaceChildren(avgPrice);



    

};


//this function is going to add the value of the name of the webPageWorkers 
//the function go gernerate a name to be added to the empty array
console.log(`wpw`,webPageWorkers)

function addWorker() {
webPageWorkers.push(workers[counter]);

if (webPageWorkers.length >= maxWorkers) {
  clearInterval(addWorkerIntervalId);
};
// render();
counter++;
console.log( `wl`,webPageWorkers.length)
console.log( `wpwl`,webPageWorkers)

}


function averageFee (){
  const totalFee = webPageWorkers.reduce((totalPrice, currentWorker)=>
  totalPrice + currentWorker.price,0)

  console.log(totalFee)
  if (webPageWorkers.length >= maxWorkers) {
    clearInterval(averageCostIntervalId);
  };
render();
}
//   const averagePrice = webPageWorkers.reuce((cost, thisThing)=>{
//     const {price}=thisThing;
//     return {...cost,[price]:webPageWorkers};
    
// });
// console.log(averagePrice);
// };
