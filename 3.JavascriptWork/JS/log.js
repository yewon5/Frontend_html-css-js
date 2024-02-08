// 모듈화

function log(msg){
    const debug = document.getElementById("debugConsole"); // div id 접근

    if(debug !== null){
        debug.innerHTML += msg + "<br/>";
    }
}