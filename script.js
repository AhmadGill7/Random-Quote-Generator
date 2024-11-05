
const generate = () => {


 
    const settings = {
        async: true,
        crossDomain: true,
        url: "https://api.quotable.io/quotes/random",
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "47fad9205amshaabf4694159358fp1b7854jsne35ba97a7c0e",
            "X-RapidAPI-Host": "timshim-quotes-v1.p.rapidapi.com",
        },
    };

    fetch(settings).done(function (response) {
        // Assuming response is an array of quotes
        if (response[0].length > 0) {
            // const randomQuote = response[Math.floor(Math.random() * response.length)];
            document.getElementById("quote").innerHTML = response[0].content;
            document.getElementById("author").innerHTML = "- " + response[0].author;
        }
    });
}
generate()
