const getSumBtn = document.createElement("button");
const table=document.getElementById("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices=document.querySelectorAll(".price");
let trElement=document.createElement("tr");
table.appendChild(trElement);
let tdElement=document.createElement("td");
trElement.appendChild(tdElement)
let td2Element=document.createElement("td");
trElement.appendChild(td2Element);

let totalPrice=0;
const getSum = () => {
	totalPrice=0
//Add your code here
    for(let cost of prices){
        totalPrice+=Number(cost.innerHTML)
    }
	tdElement.textContent="total price";
	td2Element.innerHTML=`${totalPrice}`;
};

getSumBtn.addEventListener("click", getSum);

