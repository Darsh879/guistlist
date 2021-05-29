name_of_people=[];

function submit() {
    var name_from_text_input=document.getElementById("name").value;
    name_of_people.push(name_from_text_input);
    console.log(name_of_people);
    document.getElementById("write_names").innerHTML=name_of_people;
}

function show_everything() {
    document.getElementById("show_names").innerHTML=name_of_people;
}
function sort_everything() {
    name_of_people.sort();
    document.getElementById("sort_names").innerHTML=name_of_people;
}

function search_button() {
    var searched= document.getElementById("show_names").value;
    var found=0;
    var k;
    for(k=0; k<names_of_people; k++)
    {
        if(s==name_of_people[k]){
            found=found+1;
        }
    }
    document.getElementById("search_name").innerHTML="name found"+found+"time/s";
    console.log("name found"+found+"time/s");
}