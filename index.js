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
{ name: "Cotton Eye Joe", price: 90, occupation: "Farmer" },
{ name: "Ash", price: 85, occupation: "Animal Control" },
];

const averageCost =[];

let counter = 0
let maxWorkers = workers.length+2;
const workerJobs =document.querySelectorAll(`#occupation`);
const addWorkerIntervalId = setInterval(addWorker, 3000);
const averageCostIntervalId =setInterval(averageFee,3000)



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


  const avgStartingPrice =document.querySelector(`#priceavg`);
    const avgPrice =document.createElement (`h3`);
    avgPrice.innerText= webPageWorkers.reduce((totalPrice, currentWorker)=>
    totalPrice + currentWorker.price,0)/webPageWorkers.length;
    avgStartingPrice.replaceChildren(avgPrice);



    

};


//this function is going to add the value of the name of the webPageWorkers 
//the function go gernerate a name to be added to the empty array

function addWorker() {
webPageWorkers.push(workers[counter]); // I was ablet to use the Math.random
                                      // to generate a random index to pull from 
                                      //the workers array but it repeated so I
                                      //thought it was cleaner to go down the each index

if (webPageWorkers.length >= maxWorkers) {
  clearInterval(addWorkerIntervalId);
};
// render();
counter++;
}


function averageFee (){
  const totalFee = webPageWorkers.reduce((totalPrice, currentWorker)=>
  totalPrice + currentWorker.price,0)


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
