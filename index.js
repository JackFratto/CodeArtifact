

let comment = false;
const commentText = document.getElementById("comment_text_1");
const resolveButton = document.getElementById("resolve_button");



function undisplayCommentCard() {
  document.getElementById("comment_1").style.display = 'none';
  document.getElementById("comment_text_1").value = "";

}

function displayCommentCard() {
  let commentDiv = document.getElementById("comment_1")
  commentDiv.style.display = 'flex'
}


function removeComment() {
  undisplayCommentCard();
  
  let div = document.createElement("div");
  let mainText = document.getElementById("main1");

  mainText.removeEventListener("mouseup", highlightText)

  div.innerHTML = mainText.innerText;
  div.id = "main1";
  div.className = "main";

  document.getElementById("main1").replaceWith(div);
  document.getElementById("main1").addEventListener("mouseup", highlightText)
  comment = false;
}

function checkInput() {
  let input = document.getElementById("comment_text_1");

  if(input.value.length == 0) {
    removeComment();
  } else {
    comment = true;
  }

} 

function highlightText(e) {
  if(!comment) {
    let range = window.getSelection().getRangeAt(0);
    let selectionContents = range.extractContents();
    let div = document.createElement("div");

    div.style.backgroundColor = "#FFE76A";
    div.style.display = "inline";
    div.id = "comment_number_1";
    div.appendChild(selectionContents);
    range.insertNode(div);
  
    displayCommentCard();
  }

}

undisplayCommentCard()

document.getElementById("main1").addEventListener("mouseup", highlightText)
commentText.addEventListener("focusout", checkInput)
resolveButton.addEventListener("click", removeComment)