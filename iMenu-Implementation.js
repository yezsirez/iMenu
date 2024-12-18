class ifrMenu {
            constructor(id) {
                this.id = id;
            }
            init() {
                let fc = document.createElement("div");
                fc.id = "iMenu";
                document.body.appendChild(fc);
                fc.innerHTML = ` <button id="menuButton" onclick="openMenu('${this.id}');">                     <i class="fa-solid fa-bars fa-3x"></i>                 </button>
<div id="menu" hidden>
    <h1 id="h1">Menu</h1> <button id="bttn" onclick="home();">                         <i class="fa-solid fa-house fa-3x"></i>                     </button> <button id="bttn" onclick="refreshIframe('${this.id}');">                         <i class="fa-solid fa-rotate-right fa-3x"></i>                     </button> <button id="bttn" onclick="ab('${this.id}');">                         <i class="fa-regular fa-window-restore fa-3x"></i>                     </button> <button id="bttn" onclick="closeMenu('${this.id}');">                         <i class="fa-solid fa-x fa-3x"></i>                     </button> </div> `;
                document.head.innerHTML += `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"> `;
                const iframeStyles = ` #menuButton { float:right; width:50px; height:50px; position:fixed; right:0px; border:none; border-radius:12px; background-color:rgba(255,255,255,0.2); } #bttn { text-align:center; border:none; border-radius:10px; width:75px; height:60px; margin:10px; background-color:rgba(200,200,200); cursor:pointer; } #menu { position:absolute; top:40%; left:36%; background-color:rgb(50,50,50); border-radius:20px; } #h1 { text-align:center; font-family:'Nunito'; color:white; font-size:43px; height:40px; } #${this.id} { position: absolute; height: 100%; width: 100%; margin: 0; border: none; } `;
                const styleSheet = document.createElement("style");
                styleSheet.innerText = iframeStyles;
                document.head.appendChild(styleSheet);
                var mousePosition;
                var offset = [0, 0];
                var div;
                var isDown = false;
                div = document.getElementById("menu");
                div.addEventListener('mousedown', function(e) {
                    div.style.cursor = "move";
                    isDown = true;
                    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
                }, true);
                document.addEventListener('mouseup', function() {
                    isDown = false;
                    div.style.cursor = "";
                }, true);
                document.addEventListener('mousemove', function(event) {
                    event.preventDefault();
                    if (isDown) {
                        mousePosition = {
                            x: event.clientX,
                            y: event.clientY
                        };
                        div.style.left = (mousePosition.x + offset[0]) + 'px';
                        div.style.top = (mousePosition.y + offset[1]) + 'px';
                    }
                }, true);
            }
        }

        function openMenu(id) {
            document.getElementById("menu").hidden = false;
        }

        function closeMenu(id) {
            document.getElementById("menu").hidden = true;
        }

        function refreshIframe(id) {
            var iframe = document.getElementById(id);
            iframe.src = iframe.src;
        }

        function ab(id) {
            var iframeSrc = document.getElementById(id).src;
            var win = window.open();
            win.document.body.style.margin = "0";
            win.document.body.style.height = "100vh";
            var iFrame = win.document.createElement("iframe");
            iFrame.style.height = "100%";
            iFrame.style.width = "100%";
            iFrame.style.margin = "0";
            iFrame.style.border = "none";
            iFrame.src = iframeSrc;
            win.document.body.appendChild(iFrame);
        }
