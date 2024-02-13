// 모듈화 <script src="./../JS/log.js"></script>
// <div id="debugConsole" style="border: 1px solid skyblue"></div>

function log(msg){
    const debug = document.getElementById("debugConsole"); // div id 접근

    if(debug !== null){
        debug.innerHTML += msg + "<br/>";
    }
}