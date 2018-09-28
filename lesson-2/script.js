
$(function () { 
    var gameScore = [];
    var currentCat = ""; 
    var imgList = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];
    console.log("helloword");
    function drawNav() { 
        console.log("hello 1",imgList.length);
        for (var i = 0; i < imgList.length;i++) { 

            var temp = document.createElement("a");
            temp.setAttribute("id", imgList[i]);
            temp.setAttribute("href", "#" + imgList[i]);
         
            var temp2 = document.createTextNode("----Cat "  + (i+1) + "  >");
            temp.appendChild(temp2);
            console.log(temp);
            temp.addEventListener("click", function (event) { 
                var pos = this.toString();
                var t = pos.indexOf("#");
                var fName = pos.substr(t+1, pos.length - t);
                console.log("click event" + fName);

                console.log("Event event" + event); 
                drawCat(fName);
            })
            $("#navigation-id").append(temp);

        }
    }
    drawNav();


    function drawCat(catImg) { 
        currentCat = catImg;
        var temp = document.createElement("img");
        temp.setAttribute("src", catImg);
        temp.setAttribute("id", "cat-img-id");
        temp.setAttribute("width", "400px");
       
        $("#game-id").empty();
        $("#game-id").append(temp);
        var gameP = document.createElement("p");
        var btnRS = document.createElement("button");
        btnRS.setAttribute("id", "btn-reset-id");
        btnRS.appendChild(document.createTextNode("Reset"));
        var text1 = document.createTextNode("Result:");
        var textResult = document.createElement("label");
        console.log(gameScore[currentCat]);
        if (gameScore[currentCat] == undefined) {
            console.log("cat 0 here");
            textResult.appendChild(document.createTextNode("0"));

        }
        else {
            console.log("Print cat score here:");
            textResult.appendChild(document.createTextNode(gameScore[currentCat]));
        }

        textResult.setAttribute("id", "result-lb-id");
        gameP.appendChild(text1);
        gameP.appendChild(textResult);
        gameP.appendChild(btnRS);
        $("#game-id").append(gameP);
        $("#cat-img-id").click(function () { 
            if (gameScore[currentCat] == undefined) gameScore[currentCat] = 0;
            gameScore[currentCat]++;
            $("#result-lb-id").html(gameScore[currentCat]);
        });
        $("#btn-reset-id").click(function () { 
            gameScore[currentCat] = 0;
            $("#result-lb-id").html(gameScore[currentCat]);
        });
       
        


    }

})
