$(function() {
    var listImg = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];


    var txt = document.createElement("p");

    for (i = 0; i < listImg.length; i++) {
        console.log("helo" + i);
        var temp = document.createElement("a");
        temp.innerHTML = " image   " + (i + 1) + " ";
        //temp.attributes("href") = listImg[i];
        console.log(temp);
        temp.setAttribute("href", "#img" + i);

        txt.append(temp);


    }
    console.log(txt);
    $("#game-id").before(txt);
    console.log(listImg);

});

// clear the screen for testing
// $(function() {
//     document.body.innerHTML = '';

//     var nums = [1, 2, 3];

//     // Let's loop over the numbers in our array
//     for (var i = 0; i < nums.length; i++) {

//         // This is the number we're on...
//         var num = nums[i];

//         // We're creating a DOM element for the number
//         var elem = document.createElement('div');
//         elem.textContent = num;

//         // ... and when we click, alert the value of `num`
//         elem.addEventListener('click', (function(numCopy) {
//             return function() {
//                 alert(numCopy);
//             };
//         })(num));

//         document.body.appendChild(elem);
//     };

// });


// $(function() {
//     var noClick = 0;
//     var noClick2 = 0;
//     var calcClick = function(event, des, noClickX) {

//         console.log(noClickX);
//         // console.log(event.offsetX);
//         // console.log(event.offsetY);
//         // console.log(event);
//         des.html(noClickX);
//     }
//     $("#my-cat-id").click(function(event) {
//         noClick += 1;
//         calcClick(event, $("#my-no-click-id"), noClick);
//     });
//     $("#my-cat-2-id").click(function(event) {
//         noClick2 += 1;
//         calcClick(event, $("#my-no-click-2-id"), noClick2);
//     });
//     $("#my-reset-button-id").click(function() {
//         noClick = 0;
//         $("#my-no-click-id").html(noClick);
//     });
//     $("#my-reset-2-button-id").click(function() {
//         noClick2 = 0;
//         $("#my-no-click-2-id").html(noClick2);
//     });

// })