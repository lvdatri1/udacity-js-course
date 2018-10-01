$(function () { 
    var model = {
        init: function () {
            localStorage.notesx = JSON.stringify([]);
            console.log(localStorage.notesx);

        },
        add: function (str1) {
            console.log("add obj", str1.content);
            var data = JSON.parse(localStorage.notesx);
            data.push(str1);
            localStorage.notesx = JSON.stringify(data);

           
        },
        getAllNotes: function () {
            var temp1 = localStorage.notesx;
            var temp2 = JSON.parse(temp1);
            return temp2;
        }
    };
    var view = {
        init: function () { 
            var i;
            var temp = JSON.parse(localStorage.notesx);
            console.log(temp);
            for (i in temp) { 
                console.log("for i");
                var t1 = document.createTextNode(temp[i].content);
                var t2 = document.createElement("DIV");
                t2.appendChild(t1);
                t2.setAttribute("class", "card");
                var t3 = document.createElement("DIV");
                t3.setAttribute("class", "col-6 col-md-4 col-xl-2");
                t3.appendChild(t2);
                console.log(t3);
                $("#my-all-notes-id").append(t3);
            }
        },
    };
    model.init();
    model.add({ content: "he 1" });
    model.add({ content: "he 2" });

    view.init();

});