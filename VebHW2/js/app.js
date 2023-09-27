function send() {
    // ввод данных 
    //let x = parseInt(prompt("Введите х"))
    let message = document.getElementById('message').value;
    

    //логика
    //x = x + 10

    //Вывод данных
    //alert(x)
    //console.log(message)
    document.getElementById('result').value = "Привет, "+ message + "!"
    document.getElementById('talk').value = message + " сказал: привет!"
    if (message=='') {
        document.getElementById('result').value = ("Не понял (ТоТ)")
        document.getElementById('talk').value = "Тишинаа..." 
    }       
}