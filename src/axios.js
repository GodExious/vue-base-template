import axios from 'axios';
import { Message } from 'view-ui-plus';

// 配置 Axios 拦截器
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.data.msg == 'fail') {
            Message.error(error.response.data.data || "未知错误");
        }
        return Promise.reject(error);
    }
);

export default axios;