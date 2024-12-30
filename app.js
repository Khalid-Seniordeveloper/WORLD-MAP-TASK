const selectedCountries = [
    "Mexico", "Colombia", "Ecuador", "Peru", "Bolivia", "Chile",
    "Dominican Republi", "Venez", "Brazil", "Parag", 
    "Uruguay", "Argentina", "Andorra", "Spain", "Portugal",
    "Equatorial Guine", "Angola"
];

const greenCountries = [
    "Canada", "United States", "Turkey", "Greece", "Italy", 
    "Slovenia", "Austria", "Hungary", "Slovakia", "Czech Republic", 
    "Germany", "Poland", "France", "Belgium", "Netherlands", 
    "Denmark", "Sweden", "Norway", "Finland", "Estonia", 
    "United Kingdom", "Ireland", "New Zealand", "Australia", "Guyana", "Suriname"
];

const countryYears = {
    "Mexico": 1821,
    "Colombia": 1810,
    "Ecuador": 1830,
    "Peru": 1821,
    "Bolivia": 1825,
    "Chile": 1818,
    "Dominican Republi": 1844,
    "Venez": 1811,
    "Brazil": 1822,
    "Parag": 1811,
    "Uruguay": 1828,
    "Argentina": 1816,
    "Andorra": 1278,  
    "Spain": 1492,   
    "Portugal": 1139, 
    "Equatorial Guinea": 1968,
    "Angola": 1975,
};

document.querySelectorAll('.allPaths').forEach(e => {
    const countryId = e.id;
    e.style.fill = "#d3d6f2";
    e.style.cursor = "pointer";

    if (greenCountries.includes(countryId)) {
        e.style.fill = "#8ae6de"; 
    }

    if (selectedCountries.includes(countryId)) {
        e.addEventListener('mouseover', function() {
            const detailContainer = document.getElementById("detail-container");
            const rect = e.getBoundingClientRect();

            if ("Mexico".includes(countryId)) {
                detailContainer.style.top = `${rect.top + window.scrollY - 0}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 80}px`; 
            } else if ("Colombia".includes(countryId)) {
                detailContainer.style.top = `${rect.top + window.scrollY - 10}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 80}px`;
            } else if ("Ecuador".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 10}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 130}px`;
            } else if ("Peru".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 0}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 100}px`;
            } else if ("Bolivia".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 0}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 100}px`;
            } else if ("Chile".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 0}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 100}px`;
            } else if ("Dominican Republic".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 80}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 35 }px`;
            } else if ("Venez".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 80}px`;
                detailContainer.style.left = `${rect.left + window.scrollX + 20 }px`;
            } else if ("Brazil".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 60}px`;
                detailContainer.style.left = `${rect.left + window.scrollX + 80 }px`;
            } else if ("Parag".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 30}px`;
                detailContainer.style.left = `${rect.left + window.scrollX + 90 }px`;
            } else if ("Uruguay".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 20}px`;
                detailContainer.style.left = `${rect.left + window.scrollX + 40 }px`;
            } else if ("Argentina".includes(countryId)){
        detailContainer.style.top = `${rect.top + window.scrollY + 60}px`;
                detailContainer.style.left = `${rect.left + window.scrollX + 65 }px`;
            } else if ("Spain".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 60}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 65 }px`;
            } else if ("Portugal".includes(countryId)){
                detailContainer.style.top = `${rect.top + window.scrollY - 10}px`;
                detailContainer.style.left = `${rect.left + window.scrollX - 75 }px`;
            } else if ("Equatorial Guinea".includes(countryId)){
             detailContainer.style.top = `${rect.top + window.scrollY - 15}px`;
                 detailContainer.style.left = `${rect.left + window.scrollX - 95 }px`;
            } else if ("Angola".includes(countryId)){
           detailContainer.style.top = `${rect.top + window.scrollY - 5}px`;
                 detailContainer.style.left = `${rect.left + window.scrollX - 95}px`;
                       } else {
                 detailContainer.style.top = `${rect.top + window.scrollY + 70}px`;
        detailContainer.style.left = `${rect.left + window.scrollX - 60}px`;
            }

            detailContainer.style.display = "block";
            e.style.fill = "#594ee6"; 
            const countryName = countryId; 
            const year = countryYears[countryId]; 
     const imageSrc = `flags/${countryId.toLowerCase()}.png`; 
            
            detailContainer.innerHTML = `
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
                <span style="font-size: 10px; color: black; margin-bottom: 5px;">${countryName}</span>
                <img src="${imageSrc}" alt="${countryName}" style="width: 50px; height: 30px; margin: 5px 0;">
                <span style="color: black; margin-top: 5px;">${year}</span>
            </div>
            `;
        });

        e.addEventListener('mouseleave', function() {
            e.style.fill = "#d3d6f2"; 
            document.getElementById("detail-container").style.display = "none"; 
        });
    }
});

document.querySelectorAll('.allPaths').forEach(e => {
    const countryId = e.id;
    if (selectedCountries.includes(countryId)){

    
        e.addEventListener('mousemove', function(event) {
        const zoomBox = document.getElementById("zoom-box");
        const zoomSvg = document.getElementById("zoom-svg");
        const rect = e.getBoundingClientRect();
        const scale = 2;

       
        zoomSvg.innerHTML = '';

       
        const originalSvg = document.querySelector('svg');
        const clonedSvg = originalSvg.cloneNode(true);
        zoomSvg.appendChild(clonedSvg);

 
        const bbox = e.getBBox();


        const translateX = -bbox.x * scale + (zoomBox.clientWidth / 2 - bbox.width * scale / 2);
        
const translateY = -bbox.y * scale + (zoomBox.clientHeight / 2 - bbox.height * scale / 2);


         clonedSvg.setAttribute('transform', `scale(${scale}) translate(${translateX}, ${translateY})`);

        zoomBox.style.display = "block";
    })};

    e.addEventListener('mouseleave', function() {
        const zoomBox = document.getElementById("zoom-box");
        zoomBox.style.display = "none"; 
    });
});

document.querySelectorAll('.allPaths').forEach(e => {
    const countryId = e.id;
    if (selectedCountries.includes(countryId)){

    e.addEventListener('mousemove', function(event) {
        const zoomBox = document.getElementById("zoom-box");
        const zoomSvg = document.getElementById("zoom-svg");
         const rect = e.getBoundingClientRect();
       
       
         const scale = 1.5; 

           zoomSvg.innerHTML = '';

        const zoomedPath = e.cloneNode(true);
              zoomSvg.appendChild(zoomedPath);

          const bbox = e.getBBox();

        const translateX = -bbox.x + (250 / scale - bbox.width) / 2;
const translateY = -bbox.y + (200 / scale - bbox.height) / 2;

        zoomedPath.setAttribute('transform', `scale(${scale}) translate(${translateX}, ${translateY})`);

 zoomBox.style.display = "block";    })};

    e.addEventListener('mouseleave', function() {    const zoomBox = document.getElementById("zoom-box");
        zoomBox.style.display = "none";
    });});