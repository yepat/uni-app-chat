// import store from '../../../store/index.js';	//vuex
const defurl = 'http://172.25.111.95:9093'
const url_all = {'DEV':defurl,'BUILD':'https://****api'}	 // Request baseUrl
let server_url = '';
let token = '';

process.env.NODE_ENV === 'development' ? server_url = url_all['DEV'] : server_url = url_all['BUILD'];

function service(options = {}) {
	// store.state.token && (token = store.state.token);
	token = uni.getStorageSync('uni_id_token')
	console.log('token>>',token)
	
	// Default configuration
	options.url = `${server_url}${options.url}`;
	
	options.data = options.params;
	
	options.header = {
		// 'content-type': 'application/x-www-form-urlencoded',	
		// 'accessToken': `${token}` 
		'dlj-token': `${token}` 
	};
		
	return new Promise((resolved, rejected) => {

		options.success = (res) => {
			let code = Number(res.data.code);
			// Do something with response data
			switch (code) {	
				case 0:	
				case 200:
					resolved(res.data.data);
					break;
				case 402:	
					rejected(res.data.msg);
					break;
				default:	
					rejected(res.data.msg);
					break;
			}

		}
		options.fail = (err) => {
			//Do something with request error
			rejected(err)
		}
		uni.request(options);

	});
}
export default service;
