// window.onload = function () {
//     var box=document.getElementsByClassName('box');
//     var btn=document.querySelector('.button');
//     for (let i=10;i<box.length;i++) {
//         box[i].style.display = "none";
//     }

//     var countD = 10;
//     btn.addEventListener("click", function() {
//         var box=document.getElementsByClassName('box');
//         countD += 10;
//         if (countD <= box.length){
//             for(let i=0;i<countD;i++){
//                 box[i].style.display = "block";
//             }
//         }

//     })
// }


'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelectorAll('.box'),
          btn = document.querySelector('.button');
    let i = 0;

    window.addEventListener('load', () => {
        i = 3;
        showBlock(i);
    });

    btn.addEventListener('click', () => {
        i += 3;
        showBlock(i);
    });
    
    function showBlock(i) {
        for (let y = 0; y < i; y++) {
            box[y].classList.add('show', 'fade');
        }
    }
    
});