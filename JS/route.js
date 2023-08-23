
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "./Pages/404.html",
    "/": "./Pages/main.html",
    "/explore": "./Pages/explore.html",
    "/about": "./Pages/aboutme.html",
    "/projects": "./Pages/projects.html",
    "/contact": "./Pages/contact.html",
};

const handleLocation = async () => {
    
    const path = window.location.pathname;
    console.log(path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-display").innerHTML = html;
    if(path == "/"){    
        console.log("Main Page");
        if(document.getElementById('AnimationScript') == null){
            var script = document.createElement('script');
            script.setAttribute("id", "AnimationScript");
            script.onload = function() {
              };
            script.src= "/JS/Animation Fix.js";
          document.getElementsByTagName('body')[0].appendChild(script);
        }else{
            fix();

        }
    }
    // if(path =="/projects"){
    //     console.log("projects");
    //     readTextFile("/ProjectsFiles/Data.json", function(text){
    //             console.log("Main Page");
        
    //         var data = JSON.parse(text);
    //         for(let project in data["projects"]){
    //             var mainForm = document.createElement('div');
    //             mainForm.setAttribute("class","projectForm");
    //             for (const key in data["projects"][project]) {
    //                 if(key == "github"){
    //                     name = document.createElement('input');
    //                     _form = document.createElement('form');
    //                     _form.setAttribute("action", data["projects"][project][key])
    //                     name.innerHTML = "GitHub";
    //                     name.setAttribute("type", "submit");
    //                     name.setAttribute("id","btn");    name.setAttribute("value","Github");
    //                     _form.appendChild(name);
    //                     mainForm.appendChild(_form);
                    

    //                 }else{
                        
    //                     var name = document.createElement(key);
    //                     name.innerHTML  =data["projects"][project][key];
    //                     mainForm.appendChild(name);

    //                 }
    //             }
    //             document.getElementById("listOfProjects").appendChild(mainForm);
    //             console.log(data["projects"][project]);
    //         }
    //     });
    // }
    

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage: