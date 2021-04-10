import { combineReducers, createStore } from 'redux'
import { baiTapChonXe } from './BaiTapChonXeReducer';

const rootReducer = combineReducers({
    //chứa các state ứng dụng
    // baiTapChonXe: baiTapChonXe,
})

export const store = createStore(rootReducer);