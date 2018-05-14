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
    if (elementArray.length == 1) {
        returnQuery += ComposeElements(elements[0]);
    }
    if (elementArray.length == 2) {
        returnQuery += '<And>';
        returnQuery += ComposeElements(elements[0]);
        returnQuery += ComposeElements(elements[1]);
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
var result = CreateCamlQuery(elementArray);
console.log(result);
