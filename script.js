function getResult()
{
    var bookName = document.getElementById("bookName").value;
    var pages = document.getElementById("pages").value;
    var time = document.getElementById("time").value;

    var result = document.getElementById("results");

    result.style.display = "block";

    var text = document.getElementById("text");
    text.innerHTML = "You can finish " + bookName 
                    + " in " + time + " days if you" +
                        " read " + Math.ceil(pages/time) + " pages a day.";

}




