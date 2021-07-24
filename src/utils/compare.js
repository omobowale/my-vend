import Notify from './notify';
import { compareItemStorageKey, compareCatStorageKey, compareCatNameStorageKey } from '../constants/constants';

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
    setLimit: function() {
        this.limit = setCompareItemLimit();
        this.catLimit = setCompareCatLimit();
    },
    save: function (cat, name) {
        const savedCompare = this.get();
        const savedCatCompare = this.getCat();
        const catItems = this.getCatInfo(cat);

        if(savedCatCompare.length >= this.catLimit){
            Notify.error('Maximum number of product category reached');
            return false;
        }
        if (!savedCatCompare.includes(cat) && savedCatCompare.length < this.catLimit) {
            localStorage.setItem(compareCatStorageKey + (savedCatCompare.length + 1), cat);
        }
        if (!savedCompare.includes(name) && catItems.length < this.limit) {
            localStorage.setItem(compareItemStorageKey + (savedCompare.length + 1), name);
            this.saveCatInfo(cat, [...catItems, name]);
            Notify.success(`${catItems.length + 1} of ${this.limit} selected!`);
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

    getCatInfo: function (name) {

        const cat = localStorage.getItem(compareCatNameStorageKey + name);
        if(cat){
            return cat.split(',');
        }
        return [];

    },

    saveCatInfo: function (name, items) {

        const cat = localStorage.getItem(compareCatNameStorageKey + name);
        if(cat){
            localStorage.removeItem(compareCatNameStorageKey + name);
        }
        localStorage.setItem(compareCatNameStorageKey + name, items.join(','));

    },
    removeItem: function (cat, name) {
        let compareStorage = [];
        const catItems = this.getCatInfo(cat);

        //Get all the saved sellers from localStorage if any
        for (let i = 1; i <= this.limit * this.catLimit; i++) {
            const item = localStorage.getItem(compareItemStorageKey + i);
            localStorage.removeItem(`${compareItemStorageKey}${i}`);
            if (item !== name && item) {
                compareStorage.push(item);
            }
        }
        for (let i = 1; i <= compareStorage.length; i++) {
            localStorage.setItem(compareItemStorageKey + i, compareStorage[i-1]);
        }
        if(catItems.length < 2){
            this.removeCat(cat);
            localStorage.removeItem(compareCatNameStorageKey + cat);
        }else{
            this.saveCatInfo(cat, catItems.filter(item => item !== name));
        }

        return compareStorage;
    },

    removeCat: function (cat) {
        let compareStorage = [];
        //Get all the saved sellers from localStorage if any
        for (let i = 1; i <= this.catLimit; i++) {
            const item = localStorage.getItem(compareCatStorageKey + i);
            localStorage.removeItem(`${compareCatStorageKey}${i}`);
            if (item !== cat && item) {
                compareStorage.push(item);
            }
        }
        for (let i = 1; i <= compareStorage.length; i++) {
            localStorage.setItem(compareCatStorageKey + i, compareStorage[i-1]);
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
                localStorage.removeItem(compareCatNameStorageKey + cat);
            }
        }

        setTimeout(() => {
            window.history.back();
        }, 500);
    },
};
