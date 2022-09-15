function gather_info(poll, title){
    labels = [];
    weights = [];
    values = [];

    for(let i=0; i<poll.length; i++){
        // Data
        weights.push(poll[i].querySelector(".slider-weight").querySelector(".slider").value);

        // Color
        let value = poll[i].querySelector(".slider-score").querySelector(".slider").value
        values.push(value);

        // Label
        // If the category is custom then you fetch the value of the input
        if (poll[i].querySelector(title).getElementsByClassName("input-category").length > 0){
            var label = poll[i].querySelector(title).getElementsByClassName("input-category")[0].value
        }
        else{
            var label = poll[i].querySelector(title).innerHTML;
        }

        labels.push(label);

        // else you just fetch the html written

    }

    return [labels, weights, values]
}

function create_charts(){

    var info_1 = gather_info(poll2, "h5");
    var info_2 = gather_info(category3, "h4");

    var labels_1 = info_1[0];
    var values_1 = info_1[1];
    var colors_1 = []

    for (let i =0;i<info_1[2].length;i++){
    colors_1.push(value2color[info_1[2][i].toString()]);
    }

    var labels_2 = info_2[0];
    var values_2 = info_2[1];

    var colors_2 = []

    for (let i =0;i<info_2[2].length;i++){
    colors_2.push(value2color[info_2[2][i].toString()]);
    }

    var data_1 = {
      labels: labels_1,
      datasets: [{
        label: 'Quality of your setup',
        data: values_1,
        backgroundColor: colors_1,
        hoverOffset: 4
      }]
    };

    var data_2 = {
      labels: labels_2,
      datasets: [{
        label: 'Quality of your setup',
        data: values_2,
        backgroundColor: colors_2,
        hoverOffset: 4
      }]
    };

    const config_1 = {
        type: 'doughnut',
        data: data_1,
        options: {
            plugins : {
                labels : {
                    render : 'label'
                }
            },
            responsive: true,
            }
    }

    const config_2 = {
        type: 'doughnut',
        data: data_2,
        options: {
            plugins : {
                labels : {
                    render : 'label'
                }
            },
            responsive: true,
            }
    }

    chart_1.destroy();
    chart_2.destroy();
    chart_1 = new Chart(ctx_1, config_1);
    chart_2 = new Chart(ctx_2, config_2);
}

function create_recap(){

    // Gather goal of research
    var goal_div = document.querySelector("#input-container-goal")

    // Gather scale of interest
    var scale_div = document.querySelector("#input-container-scale-of-interest");

    // Gather Type of model
    var type_div = document.querySelector("#input-container-type-of-model");

    // Gather well known technique in the lab
    var technique_div = document.querySelector("#input-container-lab-technic");

    // Generate Recap
    html_recap = `
        <h4>Goal</h4>
        <p style="margin-left:10px;">${goal_div.value} </p>
        <br>

        <h4>Scale of interest</h4>
        <p style="margin-left:10px;"> ${scale_div.value} </p>
        <br>

        <h4>Type of model</h4>
        <p style="margin-left:10px;"> ${type_div.value} </p>
        <br>

        <h4>Theoretical and practical background</h4>
        <p style="margin-left:10px;"> ${technique_div.value} </p>
    `

    document.querySelector("#written-recap").innerHTML = html_recap;
}

function create_table(){

    // Get the values of category 2
    let category2_values = gather_info(poll2, "h5");

    // Get the values of category 3
    let category3_values = gather_info(category3, "h4");

    // Generate a table accordingly
    html_table_1 = `
        <h4> Category 2 scores </h4>
         <table id="result-table-category-2" class="styled-table" style="width:100%">
            <thead style="width:100%">
            <tr>
                <th class="category" colspan="1" scope="colgroup"> Label</th>
                <th class="category" colspan="1" scope="colgroup"> Weight</th>
                <th class="category" colspan="1" scope="colgroup"> Score</th>
            </tr>
            </thead>

            <tbody style="width:100%">
            </tbody>
        </table>
    `

    html_table_2 = `
        <h4> Category 3 scores </h4>
         <table id="result-table-category-3" class="styled-table" style="width:100%">
            <thead style="width:100%">
            <tr>
                <th class="category" colspan="1" scope="colgroup"> Label</th>
                <th class="category" colspan="1" scope="colgroup"> Weight</th>
                <th class="category" colspan="1" scope="colgroup"> Score</th>
            </tr>
            </thead>

            <tbody style="width:100%">
            </tbody>
        </table>
    `

    document.querySelector("#result-table").innerHTML = html_table_1 + html_table_2;

    var total_score_2 = 0;
    var total_weight_2 = 0;

    for (let i =0; i<category2_values[0].length; i++){
        var tbodyRef_2 = document.getElementById("result-table-category-2").getElementsByTagName('tbody')[0];
        let tmp_row = tbodyRef_2.insertRow();

        let tmp_cell_label = tmp_row.insertCell();
        tmp_cell_label.innerHTML = category2_values[0][i];


        let tmp_cell_weight = tmp_row.insertCell();
        tmp_cell_weight.innerHTML = category2_values[1][i];
        total_weight_2 += Number(category2_values[1][i]);

        let tmp_cell_score = tmp_row.insertCell();
        tmp_cell_score.innerHTML = category2_values[2][i];
        total_score_2 += category2_values[1][i] * category2_values[2][i];
    }

    final_row = tbodyRef_2.insertRow();
    let tmp_cell_label = final_row.insertCell();
    tmp_cell_label.innerHTML = "Total";


    let tmp_cell_weight = final_row.insertCell();
    tmp_cell_weight.innerHTML = total_weight_2.toString();

    let tmp_cell_score = final_row.insertCell();
    tmp_cell_score.innerHTML = total_score_2.toString() + "/" + (category2_values[0].length * 6).toString();


    var total_score_3 = 0;
    var total_weight_3 = 0;

    for (let i =0; i<category3_values[0].length; i++){
        var tbodyRef_3 = document.getElementById("result-table-category-3").getElementsByTagName('tbody')[0];
        let tmp_row = tbodyRef_3.insertRow();

        let tmp_cell_label = tmp_row.insertCell();
        tmp_cell_label.innerHTML = category3_values[0][i];

        let tmp_cell_weight = tmp_row.insertCell();
        tmp_cell_weight.innerHTML = category3_values[1][i];
        total_weight_3 += Number(category3_values[1][i]);

        let tmp_cell_score = tmp_row.insertCell();
        tmp_cell_score.innerHTML = category3_values[2][i];
        total_score_3 += Number(category3_values[1][i]) * Number(category3_values[2][i]);
    }

    final_row = tbodyRef_3.insertRow();
    tmp_cell_label = final_row.insertCell();
    tmp_cell_label.innerHTML = "Total";


    tmp_cell_weight = final_row.insertCell();
    tmp_cell_weight.innerHTML = total_weight_3.toString() ;

    tmp_cell_score = final_row.insertCell();
    tmp_cell_score.innerHTML = total_score_3.toString()+ "/" + (category3_values[0].length * 6).toString();
}

function add_send_form(){
    var results_panel = document.querySelector(".results-panel");
    send_button = `<div style="vertical-align:middle" id="send-results">
                        <input id="send-results-button" style="vertical-align:middle; text-align:center; width:100%; height:100%;" type="submit" value="Send results">
                    </div>
                    `
    results_panel.insertAdjacentHTML("beforeend",send_button);
}

function on_click_send(){

    window.open("http://google.com");
}

function configure_button(){
    var button = document.querySelector("#send-results-button");
    button.addEventListener("click", on_click_send);

}

submitButton = document.querySelector("#action-button")

submitButton.addEventListener("click", create_charts);
submitButton.addEventListener("click", create_recap);
submitButton.addEventListener("click", create_table);
submitButton.addEventListener("click", add_send_form);
submitButton.addEventListener("click", configure_button);
