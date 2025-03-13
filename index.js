const freelancerArr = [
    { name: "Alice", price: 30, occupation: "Writer"},
    { name: "Bob", price: 50, occupation: "Teacher"},
    { name: "Carol", price: 70, occupation: "Programmer"}

];

const freelancersNewArr = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Prof. Goose", price: 72, occupation: "Driver" },
  ];

function init() {

    console.dir(document)

    const root = document.querySelector(`#root`)
    console.log(root)


    const h1 = document.createElement("h1")
    console.log(h1)
    h1.innerHTML = "Freelancer Forum"
    root.append(h1)


    const h2 = document.createElement("h2")
    h2.id = "averageContainer"
    console.log(h2)
    h2.innerHTML = ``
    root.append(h2)

    const freelancerContainer = document.createElement("div")
    freelancerContainer.id = "freelancerContainer"
    freelancerContainer.classList.add = "freelancers"
    root.append(freelancerContainer)




    renderFreelancers()
    calcAverage()

}

function renderFreelancers(){
    const container = document.querySelector("#freelancerContainer")
    container.innerHTML = ""

    const avContainer = document.querySelector("#averageContainer")
    avContainer.innerHTML = `Average Price: ${calcAverage()}`



    freelancerArr.forEach((freelancer) =>{
      const flanceDiv = document.createElement("div")
      flanceDiv.classList.add("freelancer")
      flanceDiv.innerHTML = `<p><strong>${freelancer.name}</strong></span>
                         <p> Occupation: ${freelancer.occupation}</span>
                         <p> Price: $${freelancer.price}</span>`
                         
      container.append(flanceDiv)  

      
                  
    })
}

function calcAverage(){
  let totalPrice = 0
  
  for(let i=0; i < freelancerArr.length; i++){
    totalPrice += freelancerArr[i].price
  }

  return totalPrice / freelancerArr.length
}

const addFreelancer = () => {
  const randomIndex = Math.floor(Math.random() * freelancersNewArr.length)
    console.log(randomIndex)
    const newFreelancer = freelancersNewArr[randomIndex]
    freelancerArr.push(newFreelancer)
    renderFreelancers()
    
}



const add = setInterval(addFreelancer, 3000)

setTimeout(()=>{
  clearInterval(add)
},10000)

init();