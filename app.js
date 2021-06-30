
console.log("likes is it working")

var LikeCount = 3;
var LikeSpan = document.querySelector("#post");

function Like(){
    LikeCount++;
    LikeSpan.innerText = LikeCount + "like(s)";
}Like()