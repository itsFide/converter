let word = document.querySelector('.word');
let wrapper = document.querySelector('.wrapper');
let obj = {
    'а': 'https://github.com/itsFide/converter/blob/master/img/а.png?raw=true',
    'А': 'https://github.com/itsFide/converter/blob/master/img/а.png?raw=true',
    'б':'https://github.com/itsFide/converter/blob/master/img/б.png?raw=true',
    'Б':'https://github.com/itsFide/converter/blob/master/img/б.png?raw=true',
    'в': 'https://github.com/itsFide/converter/blob/master/img/в.png?raw=true',
    'В': 'https://github.com/itsFide/converter/blob/master/img/в.png?raw=true',
    'г': 'https://github.com/itsFide/converter/blob/master/img/г.png?raw=true',
    'Г': 'https://github.com/itsFide/converter/blob/master/img/г.png?raw=true',
    'д' : 'https://github.com/itsFide/converter/blob/master/img/д.png?raw=true',
    'Д' : 'https://github.com/itsFide/converter/blob/master/img/д.png?raw=true',
    'е' : 'https://github.com/itsFide/converter/blob/master/img/е.png?raw=true',
    'Е' : 'https://github.com/itsFide/converter/blob/master/img/е.png?raw=true',
    'ё' : 'https://github.com/itsFide/converter/blob/master/img/ё.png?raw=true',
    'Ё' : 'https://github.com/itsFide/converter/blob/master/img/ё.png?raw=true',
    'ж' : 'https://github.com/itsFide/converter/blob/master/img/ж.png?raw=true',
    'Ж' : 'https://github.com/itsFide/converter/blob/master/img/ж.png?raw=true',
    'з' : 'https://github.com/itsFide/converter/blob/master/img/з.png?raw=true',
    'З' : 'https://github.com/itsFide/converter/blob/master/img/з.png?raw=true',
    'и' : 'https://github.com/itsFide/converter/blob/master/img/и.png?raw=true',
    'И' : 'https://github.com/itsFide/converter/blob/master/img/и.png?raw=true',
    'й' : 'https://github.com/itsFide/converter/blob/master/img/й.png?raw=true',
    'Й' : 'https://github.com/itsFide/converter/blob/master/img/й.png?raw=true',
    'к' : 'https://github.com/itsFide/converter/blob/master/img/к.png?raw=true',
    'К' : 'https://github.com/itsFide/converter/blob/master/img/к.png?raw=true',
    'л' : 'https://github.com/itsFide/converter/blob/master/img/л.png?raw=true',
    'Л' : 'https://github.com/itsFide/converter/blob/master/img/л.png?raw=true',
    'м' : 'https://github.com/itsFide/converter/blob/master/img/м.png?raw=true',
    'М' : 'https://github.com/itsFide/converter/blob/master/img/м.png?raw=true',
    'н' : 'https://github.com/itsFide/converter/blob/master/img/н.png?raw=true',
    'Н' : 'https://github.com/itsFide/converter/blob/master/img/Н.png?raw=true',
    'о' : 'https://github.com/itsFide/converter/blob/master/img/о.png?raw=true',
    'О' : 'https://github.com/itsFide/converter/blob/master/img/о.png?raw=true',
    'п' : 'https://github.com/itsFide/converter/blob/master/img/п.png?raw=true',
    'П' : 'https://github.com/itsFide/converter/blob/master/img/п.png?raw=true',
    'р' : 'https://github.com/itsFide/converter/blob/master/img/р.png?raw=true',
    'Р' : 'https://github.com/itsFide/converter/blob/master/img/р.png?raw=true',
    'с' : 'https://github.com/itsFide/converter/blob/master/img/с.png?raw=true',
    'С' : 'https://github.com/itsFide/converter/blob/master/img/с.png?raw=true',
    'т' : 'https://github.com/itsFide/converter/blob/master/img/т.png?raw=true',
    'Т' : 'https://github.com/itsFide/converter/blob/master/img/т.png?raw=true',
    'у' : 'https://github.com/itsFide/converter/blob/master/img/у.png?raw=true',
    'У' : 'https://github.com/itsFide/converter/blob/master/img/у.png?raw=true',
    'ф' : 'https://github.com/itsFide/converter/blob/master/img/ф.png?raw=true',
    'Ф' : 'https://github.com/itsFide/converter/blob/master/img/ф.png?raw=true',
    'х' : 'https://github.com/itsFide/converter/blob/master/img/х.png?raw=true',
    'Х' : 'https://github.com/itsFide/converter/blob/master/img/х.png?raw=true',
    'ц' : 'https://github.com/itsFide/converter/blob/master/img/ц.png?raw=true',
    'Ц' : 'https://github.com/itsFide/converter/blob/master/img/ц.png?raw=true',
    'ч' : 'https://github.com/itsFide/converter/blob/master/img/ч.png?raw=true',
    'Ч' : 'https://github.com/itsFide/converter/blob/master/img/ч.png?raw=true',
    'ш' : 'https://github.com/itsFide/converter/blob/master/img/ш.png?raw=true',
    'Ш' : 'https://github.com/itsFide/converter/blob/master/img/ш.png?raw=true',
    'щ' : 'https://github.com/itsFide/converter/blob/master/img/щ.png?raw=true',
    'Щ' : 'https://github.com/itsFide/converter/blob/master/img/щ.png?raw=true',
    'ъ' : 'https://github.com/itsFide/converter/blob/master/img/ъ.png?raw=true',
    'Ъ' : 'https://github.com/itsFide/converter/blob/master/img/ъ.png?raw=true',
    'ы' : 'https://github.com/itsFide/converter/blob/master/img/ы.png?raw=true',
    'Ы' : 'https://github.com/itsFide/converter/blob/master/img/ы.png?raw=true',
    'ь' : 'https://github.com/itsFide/converter/blob/master/img/ь.png?raw=true',
    'Ь' : 'https://github.com/itsFide/converter/blob/master/img/ь.png?raw=true',
    'э' : 'https://github.com/itsFide/converter/blob/master/img/э.png?raw=true',
    'Э' : 'https://github.com/itsFide/converter/blob/master/img/э.png?raw=true',
    'ю' : 'https://github.com/itsFide/converter/blob/master/img/ю.png?raw=true',
    'Ю' : 'https://github.com/itsFide/converter/blob/master/img/ю.png?raw=true',
    'я' : 'https://github.com/itsFide/converter/blob/master/img/я.png?raw=true',
    'Я' : 'https://github.com/itsFide/converter/blob/master/img/я.png?raw=true',
}
let generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click',()=>{
    let str = word.value;
    let strSplit = str.split('');
    for(let key in obj){
        
        for(let i = 0; i < strSplit.length; i++){
            let letters = strSplit[i];
            wrapper.innerHTML = Array
            .from(word.value, n => obj[n] ? `<img src="${obj[n]}">` : '')
            .join('');
        }
        
    }
})
