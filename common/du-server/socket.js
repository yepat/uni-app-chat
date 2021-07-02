let UIEvents = require('./UIEvents.js')
let socket = {
	ip: '',
	sio: null,
	isPinging: false,
	connect(ip, port, callback = null) {
		var self = this;
		self.callback = callback;
		this.ip = ip + ":" + port;
		this.sio = new WebSocket("ws://" + this.ip); //wss
		console.log('ip>>>', this.ip)
		// this.sio.binaryType = "arraybuffer";
		this.sio.onopen = function(evt) {
			console.log("Connection open ");
			self.isPinging = true
			self.callback();
		};
		this.sio.onmessage = function(evt) {
			console.log("接收到消息")
			console.log(evt.data);
			let data = JSON.parse(evt.data);
			UIEvents.dispatch("talkMsg", data);
		};
		this.sio.onclose = function(evt) {
			console.log("Connection closed.");
			self.isPinging = false;
		};
		this.sio.onerror = function(evt) {
			console.log("Connection onerror." + evt.data);
			self.isPinging = false;
		};
	},
	send(event, cmd, params) {
		this.sio.send(event);
	},
	close() {
		this.sio && this.sio.close();
	},
}
module.exports = socket
