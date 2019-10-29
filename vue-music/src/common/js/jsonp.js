import Jsonp from 'jsonp'

/**
 * 
 * @param {*} url 请求地址
 * @param {*} data 请求数据 params
 * @param {*} option 回调函数
 */
export default function jsonp(url,data,option){
    url += (URL.indexOf('?')< 0 ? '?' : '&') + param(data)
    return new Promise((resolve, reject) => {
        Jsonp(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

function param(data){
    let url = ''
    for (var k in data){
        let value = data[k] != undefined ? data[k] : ''
        //将获取到的data转换成url格式
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}