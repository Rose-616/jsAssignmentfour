let list = document.getElementById("list");


function addnewoption() {
    let name = document.getElementById("new-option")
    var li = document.createElement('li')
    let litext = document.createTextNode(name.value)

    let vote = document.createElement("button")
    let votetext = document.createTextNode("VOTE")
    vote.appendChild(votetext)
    vote.setAttribute("class", "btn")
    vote.setAttribute("onclick", "addvote()")

    let voteCount = 0;

    vote.onclick = function () {
        voteCount++;
        updateVoteCount();
    };

    function updateVoteCount() {
        votetext.nodeValue = `VOTE ${voteCount} `;
    }


    li.appendChild(litext);
    li.appendChild(vote);

    list.appendChild(li);
    name.value = "";
}





let txt = "";
let count = 1;

function addvote(button) {
    count += 1;
    txt = "VOTE " + count;
    
    button.innerText = txt;
}