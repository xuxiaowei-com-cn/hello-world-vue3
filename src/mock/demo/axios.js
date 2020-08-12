import Mock from 'mockjs'

// 模拟数据
Mock.mock('/mock/demo/axios', 'post', (req) => {
    console.log('请求', req)
    console.log('请求参数', JSON.parse(req.body))
    return {
        status: '00000',
        message: '请求成功',
        data: {}
    }
})
