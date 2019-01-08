import request from '../utils/request';

// 查询文章列表
export function listArticle(params) {
    return request({
        url: `/web/article`,
        method: 'get',
        params
    });
}

// 查询文章详情
export function getArticle(id) {
    return request({
        url: `/web/article/${id}`,
        method: 'get'
    });
}