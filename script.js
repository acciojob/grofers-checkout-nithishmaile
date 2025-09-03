// const getSumBtn = document.createElement("button");
// const table=document.getElementById("table");
// getSumBtn.append("Get Totahttps://www.svgrepo.com/show/345221/three-dots.svgl Price");
// document.body.appendChild(getSumBtn);
// const prices=document.querySelectorAll(".price");
// let trElement=document.createElement("tr");
// table.appendChild(trElement);
// let tdElement=document.createElement("td");
// trElement.appendChild(tdElement)
// let td2Element=document.createElement("td");
// td2Element.id = "ans"
// trElement.appendChild(td2Element);

// let totalPrice=0;
// const getSum = () => {
// 	totalPrice=0
// //Add your code here
//     for(let cost of prices){
//         totalPrice+=Number(cost.innerHTML)
//     }
// 	tdElement.textContent="total price";
// 	td2Element.innerHTML=`${totalPrice}`;
// };

// getSumBtn.addEventListener("click", getSum);

document.addEventListener('DOMContentLoaded', function () {
      const getSumBtn = document.getElementById('getSumBtn');
      const prices = document.querySelectorAll('.price');
      const ansCell = document.getElementById('ans');

      const getSum = () => {
        let totalPrice = 0;
        prices.forEach(cost => {
          // Use textContent and convert to number safely, ignoring empty or invalid inputs
          const value = Number(cost.textContent.trim());
          if (!isNaN(value)) {
            totalPrice += value;
          }
        });
        ansCell.textContent = totalPrice;
      };

      getSumBtn.addEventListener('click', getSum);
    });
