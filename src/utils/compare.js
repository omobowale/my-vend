import Notify from './notify';
import { compareItemStorageKey, compareCatStorageKey } from '../constants/constants';

const setCompareCatLimit = () => {
    const w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    if (width < 576) {
        return 2;
    } else if (width < 992) {
        return 3;
    } else {
        return 4;
    }
};

const setCompareItemLimit = () => {
    const w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    if (width < 576) {
        return 2;
    } else if (width < 992) {
        return 3;
    } else {
        return 4;
    }
};


export const compare = {
    limit: setCompareItemLimit(),
    catLimit: setCompareCatLimit(),

    save: function (cat, name) {
        const savedCompare = this.get();
        const savedCatCompare = this.getCat();

        if (!savedCompare.includes(name) && savedCompare.length < this.limit) {
            localStorage.setItem(compareItemStorageKey + (savedCompare.length + 1), name);
            Notify.success(`${savedCompare.length + 1} of ${this.limit} selected!`);
            if (!savedCatCompare.includes(cat) && savedCatCompare.length < this.limit) {
                localStorage.setItem(compareCatStorageKey + (savedCatCompare.length + 1), cat);
            }
            return true;
        } else if (savedCompare.includes(name)) {
            Notify.error('Product already selected');
            return false;
        } else {
            Notify.error('Maximum number reached');
            return false;
        }

        
    },

    get: function () {
        let compareStorage = [];

        //Get all the saved sellers from localStorage if any
        for (let i = 1; i <= this.limit * this.catLimit; i++) {
            const item = localStorage.getItem(compareItemStorageKey + i);
            if (item) {
                compareStorage.push(item);
            }
        }
        return compareStorage;
    },

    getCat: function () {
        let compareStorage = [];

        for (let i = 1; i <= this.catLimit; i++) {
            const cat = localStorage.getItem(compareCatStorageKey + i);
            if (cat) {
                compareStorage.push(cat);
            }
        }
        return compareStorage;
    },

    clearAll: function () {
        for (let i = 1; i <= this.limit * this.catLimit; i++) {
            const item = localStorage.getItem(`${compareItemStorageKey}${i}`);
            if (item) {
                localStorage.removeItem(`${compareItemStorageKey}${i}`);
            }
        }

        for (let i = 1; i <= this.catLimit; i++) {
            const cat = localStorage.getItem(`${compareCatStorageKey}${i}`);
            if (cat) {
                localStorage.removeItem(`${compareCatStorageKey}${i}`);
            }
        }

        setTimeout(() => {
            window.history.back();
        }, 500);
    },
};
