/*
//api used: https://www.openbrewerydb.org
*/

window.onload = () => {

    let submit = document.querySelector('.submit');
    var form = document.getElementsByName('contact-form')[0];

submit.onclick = (e) => {
        e.preventDefault()

    const fetch_brew = async () => {

        let names = document.querySelector("#full_name");
        let name = `?by_name=${names.value.toLowerCase()}`

        let states = document.getElementById("states");
        let state = `&by_state=${states.options[states.selectedIndex].text}`


        let url = `https://api.openbrewerydb.org/breweries/${name}${state}`;

        console.log(url);

        let res = await fetch(url);
        let breweries = await res.json();

        for(let i in breweries) {
        let json = breweries[i];

            console.log(json)

           let info =  document.querySelector("#information");
           let name = json.name;
           let brewery_type = json.brewery_type;
           let street = json.street;
           let city = json.city;
           let state = json.state;
           let postal = json.postal_code;
           let phone = json.phone;
           let website = json.website_url;
           let address = `${street}, ${city}, ${state}, ${postal}`;

           info.innerHTML += `
        <div class="card mt-3 mb-3">
            <div class="card-header">
                <h4>${json.name}</h4> <span>Type:  ${brewery_type} </span>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    ${address} 
                </h5>

                <div class="mt-2">
                <h4> <span><a class="btn btn-primary" href="${website}" target="_blank"> Visit Website </a>
                </h4>
                </div>

                <div class="text-right">
                <h5> <i class="fa fa-phone mr-"></i>
                    <a href="tel://+1${phone}"> Call </a>
                </h5> 
                </div>
            </div>
        </div>
           `;
        };
      
    };

    fetch_brew();

    form.reset();

    document.querySelector("#information").innerHTML = '';

};

        // success();

};

// let name = document.querySelector("#full_name");

// function success() {
//     if(name.value.length == 0 || name.value.length === ''  ) { 
//            document.querySelector('.submit').disabled = true; 
//        } else { 
//            document.querySelector('.submit').disabled = false;
//        }
//    }