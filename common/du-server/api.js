import request from './request.js'

// 退出登录
export function logout(params) {
	return request({
		url: '/user/logout',
		method: 'POST',
		params
	})
}

// 登录
export function login(params) {
	return request({
		url: '/user/login',
		method: 'POST',
		params
	})
}

//发送登录验证码
export function sendLoginVerifyCode(params) {
	return request({
		url: '/user/sendLoginVerifyCode',
		method: 'POST',
		params
	})
}

//发送修改用户信息验证码
export function sendModifyVerifyCode(params) {
	return request({
		url: '/user/sendModifyVerifyCode',
		method: 'POST',
		params
	})
}

//修改密码
export function modifyPassword(params) {
	return request({
		url: '/user/modifyPassword',
		method: 'POST',
		params
	})
}

//修改支付密码
export function modifyPayPwd(params) {
	return request({
		url: '/user/modifyPayPwd',
		method: 'POST',
		params
	})
}

//获取用户信息
export function info(params) {
	return request({
		url: '/user/info',
		method: 'GET',
		params
	})
}

//修改昵称
export function modifyNickname(params) {
	return request({
		url: '/user/modifyNickname',
		method: 'POST',
		params
	})
}

//获取发单类别
export function getCategoryList(params) {
	return request({
		url: '/bill/getCategoryList',
		method: 'POST',
		params
	})
}

//发单
export function publish(params) {
	return request({
		url: '/bill/publish',
		method: 'POST',
		params
	})
}

//订单列表
export function orderlist(params) {
	return request({
		url: '/bill/order/list',
		method: 'POST',
		params
	})
}

//所有发单列表
export function billlist(params) {
	return request({
		url: '/bill/list',
		method: 'POST',
		params
	})
}

//查看游戏账号信息
export function seeAccountInfo(params) {
	return request({
		url: '/bill/seeAccountInfo',
		method: 'GET',
		params
	})
}

//查看发单详情
export function billdetail(params) {
	return request({
		url: '/bill/detail',
		method: 'GET',
		params
	})
}

//获取订单聊天室KEY
export function getRoomKey(params) {
	return request({
		url: '/order/chat/getRoomKey',
		method: 'POST',
		params
	})
}