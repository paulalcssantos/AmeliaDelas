window.addEventListener("dfMessengerLoaded", function (event) {
    const dfMessenger = document.querySelector("df-messenger"); 
    const style = document.createElement("style");

    const nonMobileMinWidth = 480;

    style.textContent = "@media screen and (min-width: " + nonMobileMinWidth + "px) { .chat-wrapper { max-height: 75% } }";

    dfMessenger.shadowRoot.querySelector("df-messenger-chat").shadowRoot.appendChild(style);

})

setTimeout(function(){ document.querySelector("df-messenger").shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input").placeholder="Mensagem" }, 1000);
