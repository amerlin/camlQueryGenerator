//class element
var SingleElement = /** @class */ (function () {
    function SingleElement() {
    }
    return SingleElement;
}());
;
//Main function 
function CamlGenerator(elements) {
    var returnQuery = '';
    if (elements.length == 0)
        return returnQuery;
    if (elements.length == 1) {
        returnQuery += ComposeElements(elements[0]);
    }
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
//Compose function
function ComposeElements(element) {
    var expression = '';
    expression = '<Eq><FieldRef Name=' + element.Name + '/><Value>' + element.Value + '</Value></Eq>';
    return expression;
}
//demo function
function demo() {
    var elementArray = [];
    elementArray.push({ Name: "name1", Value: "value1" });
    elementArray.push({ Name: "name2", Value: "value2" });
    elementArray.push({ Name: "name3", Value: "value3" });
    var camlQuery = CamlGenerator(elementArray);
    var query = '<Query>';
    query += '<Where>' + camlQuery + '</Where>';
    query += '</Query>';
    console.log(query);
}
//run
demo();
