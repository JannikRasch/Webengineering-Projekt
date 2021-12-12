var currentdata = []
var currentlabels = []


function apple() {
    async function getApiData(){
        const apiUrl = 'https://financialmodelingprep.com/api/v3/historical-daily-discounted-cash-flow/AAPL?limit=100&apikey=af8f594febb387c6a4ef3560e0e9b351'

        const response = await fetch(apiUrl)
        const chartdata = await response.json()
    
        const value = chartdata.slice(0).reverse().map( (x) => x.dcf)
        const date = chartdata.slice(0).reverse().map( (x) => x.date)

        currentlabels = date
        currentdata = value
    }

    async function getChart(){
        await getApiData()

        var ctx = document.getElementById('myChart').getContext("2d")

        let gradient = ctx.createLinearGradient(0,0,0,400)
        gradient.addColorStop(0, "rgba(58,123,213,1")
        gradient.addColorStop(1, "rgba(0,210,255,0.3)")

        var data = {
            labels: currentlabels,
            datasets: [
                {
                    data: currentdata,
                    label: "Aktienkurs (dcf)",
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: "rgb(189, 195, 199)",
                    pointBackgroundColor: "rgb(189, 195, 199)",
                }
            ]
        }

        var config = {
            type: "line",
            data: data,
            options: {
                radius: 4,
                responsive: true,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value){
                                return "$"+value
                            }
                        }
                    }
                }
            }
        }
        var myChart = new Chart(ctx, config)
    }
    getChart()
}
function microsoft() {
    async function getApiData(){
        const apiUrl = 'https://financialmodelingprep.com/api/v3/historical-daily-discounted-cash-flow/MSFT?limit=100&apikey=af8f594febb387c6a4ef3560e0e9b351'
    
        const response = await fetch(apiUrl)
        const chartdata = await response.json()
        
        const value = chartdata.slice(0).reverse().map( (x) => x.dcf)
        const date = chartdata.slice(0).reverse().map( (x) => x.date)
    
        currentlabels = date
        currentdata = value
    }
    
    async function getChart(){
        await getApiData()
        var ctx = document.getElementById('myChart1').getContext("2d")

        let gradient = ctx.createLinearGradient(0,0,0,400)
        gradient.addColorStop(0, "rgba(58,123,213,1")
        gradient.addColorStop(1, "rgba(0,210,255,0.3)")

        var data = {
            labels: currentlabels,
            datasets: [
                {
                    data: currentdata,
                    label: "Aktienkurs (dcf)",
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: "rgb(189, 195, 199)",
                    pointBackgroundColor: "rgb(189, 195, 199)",
                }
            ]
        }

        var config = {
            type: "line",
            data: data,
            options: {
                radius: 4,
                responsive: true,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value){
                                return "$"+value
                            }
                        }
                    }
                }
            }
        }
        var myChart = new Chart(ctx, config)
    }
    getChart()
}
function google() {
    async function getApiData(){
        const apiUrl = 'https://financialmodelingprep.com/api/v3/historical-daily-discounted-cash-flow/GOOG?limit=100&apikey=af8f594febb387c6a4ef3560e0e9b351'
    
        const response = await fetch(apiUrl)
        const chartdata = await response.json()
        
        const value = chartdata.slice(0).reverse().map( (x) => x.dcf)
        const date = chartdata.slice(0).reverse().map( (x) => x.date)
    
        currentlabels = date
        currentdata = value
    }
    
    async function getChart(){
        await getApiData()
        var ctx = document.getElementById('myChart2').getContext("2d")

        let gradient = ctx.createLinearGradient(0,0,0,400)
        gradient.addColorStop(0, "rgba(58,123,213,1")
        gradient.addColorStop(1, "rgba(0,210,255,0.3)")

        var data = {
            labels: currentlabels,
            datasets: [
                {
                    data: currentdata,
                    label: "Aktienkurs (dcf)",
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: "rgb(189, 195, 199)",
                    pointBackgroundColor: "rgb(189, 195, 199)",
                }
            ]
        }

        var config = {
            type: "line",
            data: data,
            options: {
                radius: 4,
                responsive: true,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value){
                                return "$"+value
                            }
                        }
                    }
                }
            }
        }
        var myChart = new Chart(ctx, config)
    }
    getChart()
}
apple()
microsoft()
google()