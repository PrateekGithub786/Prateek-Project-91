function addUser(){
    var player2Name = document.getElementById("playerName2").value;
    var player1Name = document.getElementById("playerName1").value;
    localStorage.setItem("player1", player1Name);
    localStorage.setItem("player2", player2Name);
    window.location.replace("game_page.html");
}