// import axios from 'axios'

// axios.defaults.withCredentials = true;

function AGet(url) {

	function getConfig(url) {
		let config = axios.create({
			baseURL: 'http://127.0.0.1:3000',
			timeout: 8000
		})

		return config({
			url: url
		})
	}

	return getConfig(url)

}

function Get(url, params) {

	function getConfig(url) {
		let config = axios.create({
			baseURL: 'http://127.0.0.1:3000',
			timeout: 8000
		})

		return config({
			url: url,
			params: params
		})
	}
	return getConfig(url)
}


function Post(url, data) {

	function getConfig(url) {
		let config = axios.create({
			// baseURL: 'http://127.0.0.1:3000',
			// baseURL: 'http://122.51.151.42:8092',
			baseURL: 'https://api.ranjoin.cn:6092',
			timeout: 8000
		})

		return config({
			url: url,
			method: 'post',
			data: data,
			header: {
				// "content-type": "application/x-www-form-urlencoded",
				"content-type": "application/json",
				// token: uni.getStorageSync("token")
			},
		})
	}
	return getConfig(url)
}

// export {
// 	AGet,
// 	Get,
// 	Post
// }