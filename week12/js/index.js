const API_KEY = 'ZrawkFJPUqlhZ3YOLuKH4j4TwyKG011ccAadyJpl'
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

const previousWeatherToggle = document.querySelector('.show-previous-weather');
const previousWeather = document.querySelector('.previous-weather')

const currentSolElement = document.querySelector('[data-current-sol]')
const currentDateElement = document.querySelector('[data-current-date]')
const currentTempHighElement = document.querySelector('[data-current-temp-high]')
const currentTempLowElement = document.querySelector('[data-current-temp-low]')
const windSpeedElement = document.querySelector('[data-wind-speed]')
const windDirectionText = document.querySelector('[data-wind-direction-text]')
const windDirectionArrow = document.querySelector('[data-wind-direction-arrow]')

const previousSolTemplate = document.querySelector('[data-previous-sol-template]')
const previousSolContainer = document.querySelector('[data-previous-sols]')

const unitToggle = document.querySelector('[data-unit-toggle]')
const metricRadio = document.getElementById('cel')
const imperialRadio = document.getElementById('fah')

previousWeatherToggle.addEventListener('click', () => {
	previousWeather.classList.toggle('show-weather')
})

let selectedSolIndex

getWeather().then(sols => {
	selectedSolIndex = sols.length - 1
	displaySelectedSol(sols)
	displayPreviousSols(sols)
	updateUnits()

	unitToggle.addEventListener('click', () => {
		let metricUnits = !isMetric()
		metricRadio.checked = metricUnits
		imperialRadio.checked = !metricUnits
		displaySelectedSol(sols)
		displayPreviousSols(sols)
		updateUnits()
	})

	metricRadio.addEventListener('change', () => {
		displaySelectedSol(sols)
		displayPreviousSols(sols)
		updateUnits()
	})

	imperialRadio.addEventListener('change', () => {
		displaySelectedSol(sols)
		displayPreviousSols(sols)
		updateUnits()
	})
})

function displaySelectedSol(sols) {
	const selectedSol = sols[selectedSolIndex]
	// currentSolElement.innerText = selectedSol.sol
	currentSolElement.innerText = "300"
	currentDateElement.innerText = displayDate(selectedSol.date)
	currentTempHighElement.innerText = displayTemperature(selectedSol.maxTemp)
	currentTempLowElement.innerText = displayTemperature(selectedSol.minTemp)
	windSpeedElement.innerText = displaySpeed(selectedSol.windSpeed)
	windDirectionArrow.style.setProperty('--direction', `${selectedSol.windDirectionDegrees}deg`)
	windDirectionText.innerText = selectedSol.windDirectionCardinal
}

function displayPreviousSols(sols) {
	previousSolContainer.innerHTML = ''
	sols.forEach((solData, index) => {
		const solContainer = previousSolTemplate.content.cloneNode(true)
		solContainer.querySelector('[data-sol]').innerText = solData.sol
		solContainer.querySelector('[data-date]').innerText = displayDate(solData.date)
		solContainer.querySelector('[data-temp-high]').innerText = displayTemperature(solData.maxTemp)
		solContainer.querySelector('[data-temp-low]').innerText = displayTemperature(solData.minTemp)
		solContainer.querySelector('[data-select-button]').addEventListener('click', () => {
			selectedSolIndex = index
			displaySelectedSol(sols)
		})
		previousSolContainer.appendChild(solContainer)
	})
}

function displayDate(date) {
	return date.toLocaleDateString(
		undefined,
		{ day: 'numeric', month: 'long' }
	)
}

function displayTemperature(temperature) {
	let returnTemp = temperature
	if (!isMetric()) {
		returnTemp = (temperature - 32) * (5 / 9)
	}
	return Math.round(returnTemp)
}

function displaySpeed(speed) {
	let returnSpeed = speed
	if (!isMetric()) {
		returnSpeed = speed / 1.609
	}
	return Math.round(returnSpeed)
}


function getWeather() {
	return fetch(API_URL)
		.then(res => res.json())
		.then(data => {
			const {
				sol_keys,
				validity_checks,
				...solData
			} = data
			return Object.entries(solData).map(([sol, data]) => {
				return {
					sol: sol,
					maxTemp: data.AT.mx,
					minTemp: data.AT.mn,
					windSpeed: data.HWS?.av,
					windDirectionDegrees: data.WD.most_common?.compass_degrees,
					windDirectionCardinal: data.WD.most_common?.compass_point,
					date: new Date(data.First_UTC)
				}
			})
		})
}

function updateUnits() {
	const speedUnits = document.querySelectorAll('[data-speed-unit]')
	const tempUnits = document.querySelectorAll('[data-temp-unit]')
	speedUnits.forEach(unit => {
		unit.innerText = isMetric() ? 'kph' : 'mph'
	})
	tempUnits.forEach(unit => {
		unit.innerText = isMetric() ? 'C' : 'F'
	})
}

function isMetric() {
	return metricRadio.checked
}

// https://stackoverflow.com/questions/34152419/elements-not-resizing-properly
// https://stackoverflow.com/questions/34094499/background-color-not-visible-when-set
// https://stackoverflow.com/questions/29420851/css-style-not-applying
// https://blog.professorbeekums.com/2021/aws-went-down-now-what/
// https://www.atera.com/lp/sfg/remote-it-management-v2/?utm_source=sourceforge&utm_campaign=sourceforge&utm_adgroup=Profile&utm_adname=view_website&utm_medium=rvw
// https://www.accelevents.com/?utm_campaign=Review%20Site&utm_source=SourceForge&utm_medium=Listing&utm_content=Visit%20Site
// https://webplatform.github.io/docs/wiki/Main_Page
// https://stackoverflow.com/questions/68385282/beginner-web-dev-what-may-be-the-issue-with-float-not-working-properly-in-webpa
// https://stackoverflow.com/questions/65643564/guidance-for-c-python-developer-to-understand-the-web-dev-world
// https://stackoverflow.com/questions/70321178/deploy-jquery-or-javascript-front-end-project
// https://www.crockford.com/videos.html
// https://news.ycombinator.com
// https://traditionalkyoto.com/culture/kintsugi/
// https://stackoverflow.com/questions/70321325/error-occurring-while-installing-react-reveal-for-animations
// https://www.crockford.com/solitaire.html
// https://stackoverflow.com/questions/70290281/how-to-connect-code-with-carcassonne-board-game
// https://stackoverflow.com/questions/70332711/android-studio-app-development2021-12-13-113922-715-27115-27115-e-com-andro
// https://stackoverflow.com/questions/tagged/mobile-application
// https://stackoverflow.com/questions/64624879/mobile-application-dev-or-web-dev
// https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html
// https://www.codemag.com/article/0203041/Understanding-the-Crypto-API
// http://qnimate.com/post-series/web-cryptography-api-tutorial/
// https://voracious.dev/a-practical-guide-to-the-web-cryptography-api
// https://getstream.io/blog/web-crypto-api-chat/
// https://www.youtube.com/watch?v=d-2GoqQbagI
// https://www.youtube.com/watch?v=rvhnz1yBHgQ
// https://towardsdatascience.com/top-5-best-cryptocurrency-apis-for-developers-32475d2eb749
// https://coinmarketcap.com/api/
// https://www.primetrust.com/products?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNJZdE3n1QCoUxGnEUQ76N7dggzKjtrojntvv6vurBRLO2VvwNpZtuRoCii8QAvD_BwE
// https://www.coinbase.com/prime?utm_source=google_search_nb&utm_medium=cpc&utm_campaign=12422071841&utm_content=117545643839&utm_term=api%20crypto%20trading&utm_creative=552849081301&utm_device=c&utm_placement=&utm_network=g&utm_location=9023686&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNCigkQv6fYYKA3DHGmfqLCSA5Dh1SF1V_TP_DptzVG4cVkudJO09AxoCpQYQAvD_BwE
// https://polygon.io/crypto?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNFzoiLQbLJ_4sd42nGtCgkHgNa5IGUI0ojPvbNzvNYO7ZMJpDxiTaBoC2roQAvD_BwE
// https://schadokar.dev/posts/create-a-cryptocurrency-exchange-rate-in-html-part-1/
// https://unsplash.com/photos/yJpjLD3c9bU
// https://devdocs.io
// https://codemyui.com
// https://www.frontendwiz.co.uk
// https://github.com/JasonVolkoff/Crypto_at_a_Glance/blob/main/css/styles.css
// https://webgems.io
// https://github.com/mdn/beginner-html-site-styled
// https://css-tricks.com
// https://gist.github.com/old-campos/3870308
// https://matkat99.github.io/wdd330-portfolio-example/week1/
// https://www.freecodecamp.org/news/the-css-handbook-a-handy-guide-to-css-for-developers-b56695917d11/ 
// https://www.w3.org/Style/CSS/Overview.en.html
// https://towardsdatascience.com/obtaining-historical-and-real-time-crypto-data-with-very-simple-web-programming-7b481f153630