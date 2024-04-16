function copyTonName(){
    navigator.clipboard.writeText("telecum.ton").then(function() {
        console.log('Текст успешно скопирован!');
    })
    .catch(function(error) {
        console.error('Ошибка при копировании: ', error);
    });
}
function copyTonAddress(){
    navigator.clipboard.writeText("UQAuIP1eYuv4mEM9Nb4WStChaqAzau10ZZRI5x_Z6eOwJ_DZ").then(function() {
        console.log('Address успешно скопирован!');
        alert("Address: UQAuIP1eYuv4mEM9Nb4WStChaqAzau10ZZRI5x_Z6eOwJ_DZ  copied!")
    })
    .catch(function(error) {
        console.error('Ошибка при копировании: ', error);
    });
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burgerMenu").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("OpenMenu");
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
        alert("Address Copied!")
        });
    } else {
        console.error('Button with id "copyButton" or message with id "copiedMessage" was not found.');
    }
});
