module.exports = function (items){
    var html = '<ul>';

    for(item of items){
        html += `<li>${item}</li>`;
    }
    html += '</ul>';

    return html;
}