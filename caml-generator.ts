class SingleElement {
    Name: string;
    Value: string;
};

function CreateCamlQuery(elements: SingleElement[]): string {

    let returnQuery = '';

    if (elements.length == 0)
        return returnQuery;

    if (elementArray.length == 1) {
        returnQuery +=ComposeElements(elements[0]);
    }

    return returnQuery;

}

function ComposeElements(element: SingleElement): string {
    let expression = '';
    expression = '<Eq><FieldRef Name=' + element.Name + '/><Value>' + element.Value + '</Value></Eq>'
    return expression;
}




let elementArray: SingleElement[] = [];
elementArray.push({ Name: "name1", Value: "value1" });
// elementArray.push({ Name: "name2", Value: "value2" });
let result = CreateCamlQuery(elementArray);
console.log(result);


