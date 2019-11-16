//Functions for patients page
var patients_col = document.querySelector('#patients_col');


    fetch('https://junction-planreview.azurewebsites.net/api/patients')
    .then(res => res.json())
    .then(data => {

        //display the patients on the cards 
        for (i in data){
            var b = 0;
            var id = data[i];
            patients_col.innerHTML +=  `
            
            <div class="col s2">
              <div class="card blue darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Patient id: ${id}</span>
                </div>
                <div class="card-action">
                  <a href="plans.html" class="white-text" id="${i}">See plans</a>
                </div>
              </div>
            </div>
            `
            ++
        }
    })


