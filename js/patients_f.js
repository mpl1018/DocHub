//Functions for patients page

//reviews
var review_list = $('#review_list');
var reviews = request_api(dochub_api+"reviews/doctor/2",null,"GET");


        //display the patients on the cards 
        console.log(reviews)
        for(review in reviews){
            if (reviews[review].end_time == null)
            var review_box = `
            <div class="col s2">
              <div class="card blue darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Review Case id: ${reviews[review].id}</span>
                  <p>Patient ID: ${reviews[review].patient_id}</p>
                </div>
                <div class="card-action">
                  <a href="#" class="white-text" onclick="localStorage.setItem('currentReviewID', '${reviews[review].id}')">See review progress</a>
                </div>
              </div>
            </div>  
            `
            else 
            var review_box = `
            <div class="col s2">
              <div class="card indigo lighten-5">
                <div class="card-content black-text">
                  <span class="card-title">Review Case id: ${reviews[review].id}</span>
                  <p>Patient ID: ${reviews[review].patient_id}</p>
                </div>
                <div class="card-action">
                  <a href="#" class="black-text" onclick="localStorage.setItem('currentReviewID', '')">See finished review</a>
                </div>
              </div>
            </div>  
            `
            review_list.append(review_box);
        }

//tasks
var helping_list = $('#helping_list');
var tasks = request_api(dochub_api+"tasks/doctor/2", null, "GET");
        //display the patients on the cards 
        console.log(tasks)
        for(task in tasks){
            var type = tasks[task].task_type;
            type = type.substr(9);
            // type = type.toLowerCase();
            // type = type.split("_");
            // type [0][0] = type [0][0].toUpperCase();
            //type = Array.prototype.join(type, " ");

            if (tasks[task].end_time == null)
            var task_box = `
            <div class="col s2">
              <div class="card blue darken-2">
                <div class="card-content white-text">
                  <p class="card-title"> ${type}</p >
                  <p>Plan ID: ${tasks[task].plan_id}</p>
                </div>
                <div class="card-action">
                  <a href="#" class="white-text" onclick="localStorage.setItem('currentTaskID', '${tasks[task].id}')">See review progress</a>
                </div>
              </div>
            </div>  
            `
            else 
            var task_box = `
            <div class="col s2">
              <div class="card indigo lighten-5">
                <div class="card-content black-text">
                  <span class="card-title">Review Case id: ${tasks[task].id}</span>
                  <p>Patient ID: ${tasks[task].patient_id}</p>
                </div>
                <div class="card-action">
                  <a href="#" class="black-text" onclick="localStorage.setItem('currentTaskID', '${tasks[task].id}')">See finished review</a>
                </div>
              </div>
            </div>  
            `
            helping_list.append(task_box);
        }







