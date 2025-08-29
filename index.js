// // // Initial Counts
// let heartTotal = 0;
// let copyTotal = 0;
// let coins = 100;

// // DOM Elements
// const loveCount = document.getElementById("love-count");
// const copyCount = document.getElementById("copy-count");
// const coinDisplay = document.getElementById("coin");
// const historyList = document.getElementById("call-history");

// // 💗 Love Button Logic
// document.querySelectorAll(".love-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     heartTotal++;
//     loveCount.textContent = heartTotal;
//   });
// });


// // =======================
// // Coins
// // =======================
// let coins = parseInt(document.getElementById('love-count').innerText);

// // =======================
// // Heart Icon Functionality
// // =======================
// let loveCount = 0;
// document.querySelectorAll('.love-btn').forEach(btn => {
//     btn.addEventListener('click', function() {
//         loveCount++;
//         document.getElementById('love-count').innerText = loveCount;
//         this.classList.toggle('text-red-500'); // heart color toggle
//     });
// });


// ❤ Love Button
const loveCount = document.getElementById("love-count");
const loveBtn = document.querySelectorAll(".love-btn"); 
let count1 = 0;
loveBtn.forEach(button => {
  button.addEventListener("click", () => {
    count1++;
    loveCount.textContent = count1;
  });
});

// 📋 Copy Button
const copyCount = document.getElementById("copy-count");
const copyBtn = document.querySelectorAll(".copy-btn"); 
let count2 = 0;
copyBtn.forEach(button => {
  button.addEventListener("click", () => {
    count2++;
    copyCount.textContent = count2;
  });
});

// 🪙 Call Button
let coins = 100;
const coin = document.getElementById("coin");
const callBtn = document.querySelectorAll(".call-btn");
callBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (coins >= 20) {
      coins -= 20;
      coin.textContent = coins;
    } else {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে  ২০ কয়েন লাগবে। ");
    }
  });
});

