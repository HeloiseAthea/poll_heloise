// Function definition
function create_poll1(category1){
    for (let i=0;i<category1.length;i++){
        id = category1[i].id;
        category1[i].insertAdjacentHTML("beforeend",
        `
                <div style="width: 100%; height: 100%; box-sizing: border-box;" class="inputcontainer">
                    <textarea style="width: 100%; height: 100%; box-sizing: border-box;" id='input-container-${id}' name="multiliner"></textarea>
                </div>
                                        `);
    }
  }

function create_poll2(polls2){

    for(let i=0;i<polls2.length;i++){

        id = polls2[i].id;
        polls2[i].insertAdjacentHTML("beforeend",
        `
                <div class="slidecontainer slider-score">
                    <label> Score </label>
                    <br>
                    <input type="range" min="-3" max="3" value="0" step="1" class="slider" id='range-score-${id}-slider'>
                    <p>Value: <span class="output"></span></p>
                </div>

                <div class="slidecontainer slider-weight">
                    <label> Weight </label>
                    <br>
                    <input type="range" min="0" max="3" value="0" step="0.1" class="slider" id='range-weight-${id}--slider'>
                    <p>Value: <span class="output"></span></p>
                </div>

                <div class="inputcontainer">
                    <label> Comments </label>
                    <br>
                    <textarea id='input-container-${id}' name="multiliner"></textarea>
                </div>
                                        `);
    }
}


function create_poll3(category3){

    for(let i=0;i<category3.length;i++){

        id = category3[i].id;
        category3[i].insertAdjacentHTML("beforeend",
        `
                <div class="slidecontainer slider-score">
                    <label> Score </label>
                    <br>
                    <input type="range" min="-3" max="3" value="0" step="1" class="slider" id='range-score-${id}-slider'>
                    <p>Value: <span class="output"></span></p>
                </div>

                <div class="slidecontainer slider-weight">
                    <label> Weight </label>
                    <br>
                    <input type="range" min="0" max="3" value="0" step="0.1" class="slider" id='range-weight-${id}--slider'>
                    <p>Value: <span class="output"></span></p>
                </div>

                <div class="inputcontainer">
                    <label> Comments </label>
                    <br>
                    <textarea id='input-container-${id}' name="multiliner"></textarea>
                </div>
                                        `);
    }
}

function link_sliders(poll){

    for (let i=0;i<poll.length;i++){


       let score = poll[i].querySelector(".slider-score");
       let weight = poll[i].querySelector(".slider-weight");


       let slider_score = score.querySelector(".slider");
       let output_score = score.querySelector(".output");


       let slider_weight = weight.querySelector(".slider");
       let output_weight = weight.querySelector(".output");

       slider_weight.value = 1.5;
       slider_score.value = 0;
       output_weight.innerHTML = "1.5";
       output_score.innerHTML = "0";

       slider_weight.oninput = function() {
                                 output_weight.innerHTML = this.value;
                               }

       slider_score.oninput = function() {
                                output_score.innerHTML = this.value;
                              }

    }
}

function add_category_2(){

        var container = document.getElementById('other-category');
        var id = "other-" + poll2_counter.toString();
        console.log(id);
        poll2_counter +=1 ;


        container.insertAdjacentHTML("beforebegin",

        `
        <div class="category2">
            <h4>Other category</h4>
                <div class="poll2 other-poll2" style="float:center; width:100%;" id="${id}">
                    <h5><input class="input-category" type="text" id="input-${id}"></h5>
                    <div class="slidecontainer slider-score">
                        <label> Score </label>
                        <br>
                        <input type="range" min="-3" max="3" value="0" step="1" class="slider" id='range-score-${id}-slider'>
                        <p>Value: <span class="output"></span></p>
                    </div>

                    <div class="slidecontainer slider-weight">
                        <label> Weight </label>
                        <br>
                        <input type="range" min="0" max="3" value="0" step="0.1" class="slider" id='range-weight-${id}--slider'>
                        <p>Value: <span class="output"></span></p>
                    </div>

                    <div class="inputcontainer">
                        <label> Comments </label>
                        <br>
                        <textarea id='input-container-${id}' name="multiliner"></textarea>
                    </div>
                </div>
        </div>
                                        `);
        link_sliders(poll2);
}


// Create their structure
create_poll1(category1);
create_poll2(poll2);
create_poll3(category3);

//Link text to their respective sliders
link_sliders(poll2);
link_sliders(category3);

const addCategoryButton = document.querySelector("#add-category");


addCategoryButton.addEventListener("click", add_category_2);
