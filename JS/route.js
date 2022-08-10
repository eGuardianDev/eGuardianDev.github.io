
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/Pages/404.html",
    "/": "/Pages/main.html",
    "/explore": "/Pages/explore.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-display").innerHTML = html;
    var script = document.createElement('script');
    
    script.onload = function() {
      };
    script.src= "/JS/Animation Fix.js";
    document.getElementsByTagName('body')[0].appendChild(script);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();