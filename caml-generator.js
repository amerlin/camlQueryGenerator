var SingleElement = /** @class */ (function () {
    function SingleElement() {
    }
    return SingleElement;
}());
;
function CreateCamlQuery(elements) {
    var returnQuery = '';
    if (elements.length == 0)
        return returnQuery;
    if (elements.length == 1) {
        returnQuery += ComposeElements(elements[0]);
    }
    console.log(elements.length);
    if (elements.length == 2) {
        returnQuery += '<And>';
        returnQuery += ComposeElements(elements[0]);
        returnQuery += ComposeElements(elements[1]);
        returnQuery += '</And>';
        return returnQuery;
    }
    returnQuery += '<And>';
    returnQuery += ComposeElements(elements[0]);
    returnQuery += ComposeElements(elements[1]);
    returnQuery += '</And>';
    for (var i = 2; i < elements.length; i++) {
        returnQuery = '<And>' + returnQuery;
        returnQuery += ComposeElements(elements[i]);
        returnQuery += '</And>';
    }
    return returnQuery;
}
function ComposeElements(element) {
    var expression = '';
    expression = '<Eq><FieldRef Name=' + element.Name + '/><Value>' + element.Value + '</Value></Eq>';
    return expression;
}
var elementArray = [];
elementArray.push({ Name: "name1", Value: "value1" });
elementArray.push({ Name: "name2", Value: "value2" });
elementArray.push({ Name: "name3", Value: "value3" });
var result = CreateCamlQuery(elementArray);
console.log(result);
