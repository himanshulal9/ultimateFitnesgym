// <!-- script for creating the charts  -->

// monthly revenu graph 
var ctx = document.getElementById('monthlyRevenu').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'sep', "oct", 'nov', 'dec'],
        datasets: [{
            label: 'Monthly Revenu',
            backgroundColor: '#c0c0c0',
            borderColor: '#3399FF',
            borderWidth: 2,
            hoverborderColor: '#6688FF',
            hoverborderWidth: 4,
            data: [0, 10, 5, 2, 20, 30, 10, 25, 15, 17, 22, 100]
        }]
    },
    // Configuration options go here
    options: {
        // animation: {
        //     duration: 3000,
        //     easing: 'easeInSine',
        // }
    }
});

//newAdmission
var ctx = document.getElementById('newAdmission').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1st week', '2nd week', '3rd week', '4th week', '5th week'],
        datasets: [{
            label: 'New Admission',
            backgroundColor: '#66ccff',
            borderColor: '#3366cc',
            data: ['10', '15', '5', '12', '2']
        }]
    },
    // Configuration options go here
    options: {
        // animation: {
        //     duration: 3000,
        //     easing: 'easeInSine',
        // }
    }
});