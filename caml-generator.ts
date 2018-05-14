//class element
class SingleElement {
    Name: string;
    Value: string;
};

//Main function 
function CamlGenerator(elements: SingleElement[]): string {

    let returnQuery = '';

    if (elements.length == 0)
        return returnQuery;

    if (elements.length == 1) {
        returnQuery +=ComposeElements(elements[0]);
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

    for (let i = 2; i < elements.length; i++) {
        returnQuery = '<And>' + returnQuery;
        returnQuery += ComposeElements(elements[i]);
        returnQuery += '</And>';
    }

    return returnQuery;

}

//Compose function
function ComposeElements(element: SingleElement): string {
    let expression = '';
    expression = '<Eq><FieldRef Name=' + element.Name + '/><Value>' + element.Value + '</Value></Eq>'
    return expression;
}

//demo function
function demo() {

    let elementArray: SingleElement[] = [];
    elementArray.push({ Name: "name1", Value: "value1" });
    elementArray.push({ Name: "name2", Value: "value2" });
    elementArray.push({ Name: "name3", Value: "value3" });
    let camlQuery = CamlGenerator(elementArray);

    let query = '<Query>';
    query += '<Where>' + camlQuery + '</Where>';
    query += '</Query>';

    console.log(query);
}

//run
demo();


