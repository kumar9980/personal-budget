var dataSource = {
    datasets: [{
        data: [],
        backgroundColor : [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#1A5276',
            '#1ABC9C',
            '#BB8FCE',
            '#7B7D7D'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: []
};

function createChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: dataSource
    });
}

function getBudget() {
    axios.get('http://localhost:3000/budget')
    .then(function (res){
        console.log(res);

        for (var i=0; i< res.data.myBudget.length; i++){
            dataSource.datasets[0].data[i]=res.data.myBudget[i].budget;
            dataSource.labels[i]=res.data.myBudget[i].title;
        }


        createChart();
    });
}
getBudget();