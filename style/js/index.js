function copyTonName(){
    navigator.clipboard.writeText("@telecum.ton").then(function() {
        console.log('Текст успешно скопирован!');
    })
    .catch(function(error) {
        console.error('Ошибка при копировании: ', error);
    });
}
function copyTonAddress(){
    navigator.clipboard.writeText("UQAuIP1eYuv4mEM9Nb4WStChaqAzau10ZZRI5x_Z6eOwJ_DZ").then(function() {
        console.log('Address успешно скопирован!');
    })
    .catch(function(error) {
        console.error('Ошибка при копировании: ', error);
    });
}
