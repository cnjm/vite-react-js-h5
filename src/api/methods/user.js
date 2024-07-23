import { userAlova } from "..";

// 获取用户信息
export const getUserInfo = (id) => userAlova.Get("/user/" + id);

// 编辑用户信息
export const editUserInfo = (params) => userAlova.Post("/user", params);
