const interval = setInterval(() => {

    const header = document.querySelector('.tabbed-primary-navigation');

    if(header){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "Random";
        button.classList.add("btn-random");

        const navigationOption = document.createElement("li");
        navigationOption.classList.add("navigation-tab");   
        navigationOption.appendChild(button);

        header.appendChild(navigationOption);

    }

}, 1000)