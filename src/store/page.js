import { makeAutoObservable } from "mobx";
import { AppOutline, UserOutline } from "antd-mobile-icons";
import { makePersistable, isHydrated } from "mobx-persist-store";

class PageStore {
  disabledIndex = 0;
  count = 0;
  menu = [
    {
      key: "/",
      title: "首页",
      icon: AppOutline,
    },
    {
      key: "/mine",
      title: "我的",
      icon: UserOutline,
    },
  ];
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "page",
      properties: ["count"],
      storage: window.localStorage,
    });
  }
  get isHydrated() {
    return isHydrated(this);
  }
  get getMenu() {
    return this.menu;
  }
  addCount() {
    this.count += 1;
  }
  setDisabledIndex() {
    this.disabledIndex = 1;
  }
}

const pageStore = new PageStore();

export default pageStore;

export const usePageStore = () => pageStore;
