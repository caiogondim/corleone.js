function create(string) {
    var div = document.createElement('div');
    div.innerHTML = string.trim();
    return div.firstChild;
}

var index = {
    create: create
}

export default index;
//# sourceMappingURL=corleone.m.js.map
