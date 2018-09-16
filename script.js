// Our variables
const key = "800bd065a56d4c168751c86e7da452a0"
const urlPopular = `https://newsapi.org/v2/everything?q="tech"&sortBy=popularity&apiKey=${key}`
const urlLatest = `https://newsapi.org/v2/everything?q="tech" AND "startup"&sortBy=publishedAt&apiKey=${key}`

// Our main function
const recievedNews = (newsdata) => {
	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					// Check if urlToImage is not null ie no image
					if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".popularNews").innerHTML +=
            `<div class="news">
            <a href="${article.url}"><img src="${article.urlToImage}"/></a>
            <a href="${article.url}"><h2 class="articleTitle">${article.title}</h2></a>
            <p class="articleDescription">${article.description}</p>
            </div>`
					}
    })
}


// Our main function
const recievedLatestNews = (newsdata) => {
	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					// Check if urlToImage is not null ie no image
					if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".latestNews").innerHTML +=
            `<div class="news">
            <h2 class="articleTitle">${article.title}</h2>
            <img src="${article.urlToImage}"/>
            <p class="articleDescription">${article.description}</p>
            <button class="readMore"><a href="${article.url}">Read more...</a></button>
            </div>`
					}
    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlPopular)
  .then(response => response.json())
  .then(recievedNews)

  fetch(urlLatest)
    .then(response => response.json())
    .then(recievedLatestNews)
