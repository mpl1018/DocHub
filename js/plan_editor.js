content = document.querySelector("#content");
function organ_c(name){

    content.innerHTML = `
    <h4 class="center blue-text text-darken-2">${name}</h4>
    <div class="row">
            <div class="col s6">
                    <div class="card blue darken-2">
                      <div class="card-content white-text">
                        <p class="card-title">This is important information for the experts</p >
                      </div>
                    </div>
            </div>  
            <div class="col s6">
                    <div class='input-field col s12'>
                            <input  type='text' id='dochubid' />
                            <label for='dochubid'>This is a comment section</label>
                    </div>
            </div>
    </div>  
    <div class="row center-align">
        <div class="col s12 center-align">
                <div class="col s2 offset-s3 green">Looks good</div>
                <div class="col s2 yellow">Needs revision</div>
                <div class="col s2 red">This is a sh**</div>
        </div>
    </div>
    `
}



