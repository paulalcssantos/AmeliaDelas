window.addEventListener("dfMessengerLoaded", function (event) {
    const dfMessenger = document.querySelector("df-messenger"); 
    const style = document.createElement("style");

    const nonMobileMinWidth = 480;

    style.textContent = "@media screen and (min-width: " + nonMobileMinWidth + "px) { .chat-wrapper { max-height: 75% } }";

    dfMessenger.shadowRoot.querySelector("df-messenger-chat").shadowRoot.appendChild(style);

})
