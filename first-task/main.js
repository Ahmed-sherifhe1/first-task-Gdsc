function multinum() {
    let numb = document.getElementById("num").value;
    if(numb>50)
    {document.getElementById("num_place").innerHTML = numb*2;}
    else{document.getElementById("num_place").innerHTML = numb;};
}
