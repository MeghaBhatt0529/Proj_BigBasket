
// // Coupon //

function loadCoupon() {
document.getElementById('coupon').style.visibility = 'visible';
document.getElementById('main').style.opacity = '0.7'
}

function closeCoupon() {
document.getElementById('coupon').style.visibility = 'hidden';
document.getElementById('main').style.opacity = '1'
}

// Light-Dark //

function changeMode() {
let mybody = document.body;
mybody.classList.toggle('mydark')
    
}

// Geolocation //

                        let x = document.getElementById('out');
                        let y = document.getElementById('weatherOut');

                        function geolocation() {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(showPosition)
                            } else {
                                x.innerText = "Geo Not Supported"
                            }
                        }
                        function showPosition(data) {
                            let x = document.getElementById('out');
                        let y = document.getElementById('weatherOut');
                            console.log(data)

                            let lat = data.coords.latitude;
                            let long = data.coords.longitude;
                            x.innerText = `Latitude is ${lat} and longitude is ${long}`
                            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                            //api calling
                            fetch(url, { method: 'GET' })
                                // return promise
                                .then((res) => res.json())
                                // resolve promise
                                .then((data) => {
                                    console.log(data)
                                    let cityName = data.city.name;
                                    let temp = data.list[0].temp.day;
                                    y.innerText = `Your city is ${cityName} & temp is ${temp} °C`
                                })
                                .catch((err) => {
                                    console.log(err)
                                })

                        }


