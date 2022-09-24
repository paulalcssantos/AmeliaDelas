window.addEventListener("dfMessengerLoaded", function (event) {
    const dfMessenger = document.querySelector("df-messenger"); 
    const style = document.createElement("style");

    const nonMobileMinWidth = 768;

    style.textContent = "@media screen and (min-width: " + nonMobileMinWidth + "px) { .chat-wrapper { max-height: 80% } }";

    dfMessenger.shadowRoot.querySelector("df-messenger-chat").shadowRoot.appendChild(style);

})
