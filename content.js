chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "toggle_red_box") {
    var style = document.createElement('style');
    style.id = 'red-box-style';
    style.innerHTML = '* { outline: 1px solid red !important; }';

    if (!document.getElementById('red-box-style')) {
        document.head.appendChild(style);
    } else {
        document.head.removeChild(document.getElementById('red-box-style'));
    }
  }
});