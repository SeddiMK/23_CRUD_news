export var getFromLocalStorage = function (key) {
    var data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};
export var saveToLocalStorage = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};
