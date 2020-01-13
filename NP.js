const $natoPhonetics = ["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu", " ",  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "!", "@", "#", "$", "%", "^", "&", "(", ")", "_", "=", "|", ";", ":", "<", ">", "?", "/", "`"]

$("#message").on('change keydown paste input', function(){

    $result = ""
    $("#message").val().split('').forEach(function(item)
    {
        $result += `${$natoPhonetics.find(element => element.startsWith(item.toUpperCase()))} `
    });
    $("#output").text($result);
});
