function gather_info(poll, title){
    labels = [];
    values = [];
    color = [];

    for(let i=0; i<poll.length; i++){
        // Data
        values.push(poll[i].querySelector(".slider-weight").querySelector(".slider").value);

        // Color
        let value = poll[i].querySelector(".slider-score").querySelector(".slider").value
        color.push(value2color[value.toString()]);

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

    return [labels, values, color]
}

function create_charts(){

    var info_1 = gather_info(poll2, "h5");
    var info_2 = gather_info(category3, "h4");

    var labels_1 = info_1[0];
    var values_1 = info_1[1];
    var colors_1 = info_1[2];

    var labels_2 = info_2[0];
    var values_2 = info_2[1];
    var colors_2 = info_2[2];

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

submitButton.addEventListener("click", create_charts);