import axios from 'axios'

import {HOST} from '../common/js/config'
//注册
export function logon(phone,captcha,password){
    const url = HOST + `/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=user${captcha}`
    return axios.get(url)
}
//发送验证码
export function captcha(phone){
    const url = HOST + `/captcha/sent?phone=${phone}`
    return axios.get(url)
}
//判断用户是否已注册
export function hasPassword(phone){
    const url = HOST + `/cellphone/existence/check?phone=${phone}`
    return axios.get(url)
}

//登录
export function login(phone,password){
    const url = HOST + `/login/cellphone?phone=${phone}&password=${password}`
    return axios.get(url)
}