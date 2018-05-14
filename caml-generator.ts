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

    if (elementArray.length == 2) {
        returnQuery += '<And>';
        returnQuery += ComposeElements(elements[0]);
        returnQuery += ComposeElements(elements[1]);
        returnQuery += '</And>';
        return returnQuery;
    } 

    returnQuery +="<And>";
    returnQuery += ComposeElements(elements[0]);
    returnQuery += ComposeElements(elements[1]);
    returnQuery += '</And>';

    for (let i = 3; i < elements.length; i++) {
        returnQuery ='<And>'+returnQuery;
        returnQuery += ComposeElements(elements[i]);
        returnQuery +='</And>';
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
elementArray.push({ Name: "name2", Value: "value2" });
elementArray.push({ Name: "name3", Value: "value3" });
let result = CreateCamlQuery(elementArray);
console.log(result);


