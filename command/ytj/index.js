const axios = require('axios');
const fs = require('fs');
const { YAPIBASEHOST } = require('../../config');
const { firstWord, Logger } = require('../../utils');
const instance = axios.create({
    baseURL: YAPIBASEHOST,
    timeout: 1000 * 10,
  });
instance.interceptors.response.use(function (response) {
// Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
    if(response.status === 200 && response.data.errcode === 0) {
        return response.data.data;
    }
}, function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
    return Promise.reject(error);
});



// 获取某项目分类列表
const getCatMenu = (params) => {
    return instance.get('api/interface/getCatMenu',{
        params
    })
}
// 获取某项目所有分类接口信息
// const getListMenu = (params) => {
//     return instance.get('api/interface/list_menu',{
//         params
//     })
// }
const getCatList = (params) => {
    return instance.get('api/interface/list_cat',{
        params
    })
}

function fn(list) {
    let str = ''
    for(let item of list) {
        str += 
    `req${firstWord(item)}(params) {
        return HttpRequest.post({ url: '${item}', params });
    },
    `
    }
    return`import { HttpRequest } from '@ipalfish/h5-axios';
export default {
    ${str}
}
`
}
function checkArgs(args) {
    if(!args.token) {
        Logger.error(' 😞 请输入token，如--token 123456 😞 '.error)
        return
    }
    // if(!args.id) {
    //     Logger.error('请输入id，如--id 123456'.error)
    //     return
    // }
    if(!args.name) {
        Logger.error(' 😞 请输入接口分类，如--name 转介绍工具接口 😞 '.error)
        return
    }
    return true
}
const writeFileRecursive = function(path, buffer, callback){
    let lastPath = path.substring(0, path.lastIndexOf("/"));
    fs.mkdir(lastPath, {recursive: true}, (err) => {
        if (err) return callback(err);
        fs.writeFile(path, buffer, function(err){
            if (err) return callback(err);
            return callback(null);
        });
    });
}

const main = async (args) => {
    if(!checkArgs(args)) return 
    const getCatMenuParams = {
        token: args.token,
        // project_id: args.id,
    }
    const res = await getCatMenu(getCatMenuParams);
    if(!res) {
        Logger.error(' 😞 请检查token是否正确 😞 '.error)
        return
    }
    let getCatListParams = {
        token: args.token,
        // project_id: args.id,
    }
    const target = res.find(item => item.name === args.name);
    if(!target) {
        Logger.error(' 😞 请检查接口分类是否正确 😞 '.error)
        return
    }
    getCatListParams.catid = target._id;
    const catList = await getCatList(getCatListParams)
    const fsData = catList.list.map(item => item.path)
    writeFileRecursive(args.path || './api.js', fn(fsData),function(err) {
        if(err) {
            return console.log(err.error);
        }
        console.log('🎉 少年，万事具备，请开始你的表演！'.success);
    })
}
module.exports = {
    main
};