$(function() {
    var model = {

        cats: [],
        currentCat: 0,
        init: function() {
            model.cats.push({ img: "cat1.jpg", score: 0 });
            model.cats.push({ img: "cat2.jpg", score: 0 });
            model.cats.push({ img: "cat3.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
            model.cats.push({ img: "cat4.jpg", score: 0 });
        },
        add: function(catx) {
            cats.push(catx);
        }

    };
    var view = {
        renderListCats: function() {

            var t;
            //  var temp = $("#my-game-id");
            for (t in model.cats) {
                var b = document.createElement("button");
                var c = document.createTextNode("cat " + t);
                b.appendChild(c);
                b.addEventListener("click", (function(cat) {
                    return function() {
                        model.currentCat = cat;
                        view.renderCat();
                    };
                })(t));

                $("#my-list-cats-id").append(b);

            };
        },
        renderCat: function() {
            $("#my-game-id").empty();
            var t1 = document.createElement("img");
            t1.setAttribute("src", model.cats[model.currentCat].img);
            //t1.setAttribute("id", model.cats[model.currentCat].img);
            t1.setAttribute("width", "400px");
            t1.addEventListener("click", function() {
                octopus.tapScore();
                console.log("click here");
            });
            var t2 = document.createTextNode("score: " + model.cats[model.currentCat].score);
            var t3 = document.createElement("div");
            t3.appendChild(t2);
            var t4 = document.createElement("button");

            t4.addEventListener("click", function() {
                octopus.resetScore();
            });
            t4.appendChild(document.createTextNode("reset"));
            t3.appendChild(t4);
            $("#my-game-id").append(t1);
            $("#my-game-id").append(t3);


        }
    };
    var octopus = {
        init: function() {
            model.init();
            view.renderListCats();
            model.currentCat = 0;
            view.renderCat();

        },
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },
        tapScore: function() {
            model.cats[model.currentCat].score++;
            view.renderCat();
        },
        resetScore: function() {
            model.cats[model.currentCat].score = 0;
            view.renderCat();
        }
    };
    octopus.init();

});