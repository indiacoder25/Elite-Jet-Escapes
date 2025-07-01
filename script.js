
function updateService2ButtonLayout() {
    const container = document.querySelector(".service-2-content-headings");
    const originalBtn = document.querySelector("#service-2-content-btn");

    if (window.innerWidth <= 790 && window.innerWidth >= 640) {
        originalBtn.style.display = "none";
        
        if (!document.querySelector(".inserted-service-2-btn")) {
            const newBtn = document.createElement("button");
            newBtn.textContent = "Request Your Access";
            newBtn.className = "inserted-service-2-btn";

            const h3 = container.querySelector("h3");
            const h1 = container.querySelector("h1");
            const flexWrap = document.createElement("div");
            flexWrap.className = "service-2-heading-flex";

            flexWrap.appendChild(h3);
            flexWrap.appendChild(h1);
            flexWrap.appendChild(newBtn);

            container.appendChild(flexWrap);
        }
    } else {
        originalBtn.style.display = "inline-block";

        const insertedBtn = document.querySelector(".inserted-service-2-btn");
        const flexWrap = document.querySelector(".service-2-heading-flex");
        const h1 = flexWrap?.querySelector("h1");
        const h3 = flexWrap?.querySelector("h3");

        if (insertedBtn && flexWrap && h3 && h1) {
            container.appendChild(h3);
            container.appendChild(h1);
            flexWrap.remove();
        }
    }
}

window.addEventListener("resize", updateService2ButtonLayout);
window.addEventListener("DOMContentLoaded", updateService2ButtonLayout);


// ----------------------------------------------

function updateFeaturesLayout() {
    const container = document.querySelector(".features-contents-heading");
    const originalBtn = document.querySelector("#features-request-btn");

    if (window.innerWidth <= 790 && window.innerWidth >= 640) {
        originalBtn.style.display = "none";

        if (!document.querySelector(".inserted-features-btn")) {
            const newBtn = document.createElement("button");
            newBtn.textContent = "Request Your Access";
            newBtn.className = "inserted-features-btn";

            const h3 = container.querySelector("h3");
            const h1 = container.querySelector("h1");
            const p = document.querySelector(".features-contents-para p");

            const flexWrap = document.createElement("div");
            flexWrap.className = "features-headings-para-flex";

            flexWrap.appendChild(h3);
            flexWrap.appendChild(h1);
            flexWrap.appendChild(p);
            flexWrap.appendChild(newBtn);

            container.appendChild(flexWrap);
        }
    } else {
        originalBtn.style.display = "inline-block";

        const insertedBtn = document.querySelector(".inserted-features-btn");
        const flexWrap = document.querySelector(".features-headings-para-flex");
        const h3 = flexWrap?.querySelector("h3");
        const h1 = flexWrap?.querySelector("h1");
        const p = flexWrap?.querySelector("p");

        if (insertedBtn && flexWrap && h3 && h1 && p) {
            container.appendChild(h3); // move h3 back
            container.appendChild(h1); // move h1 back
            document.querySelector(".features-contents-para").appendChild(p); // move p back
            flexWrap.remove();         // remove the flex wrap
        }
    }
}

window.addEventListener("resize", updateFeaturesLayout);
window.addEventListener("DOMContentLoaded", updateFeaturesLayout);