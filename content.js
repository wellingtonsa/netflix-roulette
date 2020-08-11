const interval = setInterval(() => {

    const header = document.querySelector('.tabbed-primary-navigation');

    if(header){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "Random";
        button.classList.add("btn-random");
        button.addEventListener('click', handleChoose);

        const navigationOption = document.createElement("li");
        navigationOption.classList.add("navigation-tab");   
        navigationOption.appendChild(button);

        header.appendChild(navigationOption);

    }

}, 1000)


function handleChoose(){
    let items = document.querySelectorAll(".slider-item a");
    
    let item = Math.floor(Math.random() * (items.length - 1)); 

    window.location.href = items[item].href;
    
}