const selectedCountries = [
    "Mexico", "Colombia", "Ecuador", "Peru", "Bolivia", "Chile",
    "Dominican Republic", "Venez", "Brazil", "Parag", 
    "Uruguay", "Argentina", "Andorra", "Spain", "Portugal",
    "Equatorial Guinea", "Angola"
];

const greenCountries = [
    "Canada", "United States", "Turkey", "Greece", "Italy", 
    "Slovenia", "Austria", "Hungary", "Slovakia", "Czech Republic", 
    "Germany", "Poland", "France", "Belgium", "Netherlands", 
    "Denmark", "Sweden", "Norway", "Finland", "Estonia", 
    "United Kingdom", "Ireland", "New Zealand", "Australia"
];

const countryYears = {
    "Mexico": 1821,
    "Colombia": 1810,
    "Ecuador": 1830,
    "Peru": 1821,
    "Bolivia": 1825,
    "Chile": 1818,
    "Dominican Republic": 1844,
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
        e.style.fill = "#d3d6f2";  

        e.addEventListener('mouseover', function() {
            window.onmousemove = function(event) {
                const x = event.clientX;
         const y = event.clientY;
                   document.getElementById("detail-container").style.top = (y - 40) + "px"; 
        
        
                   document.getElementById("detail-container").style.left = (x + 20) + "px";
    };

              e.style.fill =    "#594ee6";  

            const year = countryYears[countryId];
           
 document.getElementById("detail-container").style.display = "block"; 
 
               document.querySelector('.name').innerHTML = `${countryId}<br>${year}`;

    if (countryId === "Dominican Republic") {
                document.getElementById("country-flag").src = `flags/Dominican Republic.png`;
            } else if (countryId === "Equatorial Guinea") {
                document.getElementById("country-flag").src = `flags/Equatorial Guinea.png`;
            } else {
              
              
                document.getElementById("country-flag").src = `flags/${countryId.toLowerCase().replace(/\s/g, '')}.png`;
    }
         });

     
     
         e.addEventListener('mouseleave', function() {
                      e.style.fill = "#d3d6f2";
                 document.getElementById("detail-container").style.display = "none"; 
        }); }
});
