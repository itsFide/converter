let word = document.querySelector('.word');
let wrapper = document.querySelector('.wrapper');
let obj = {
    'п': 'https://nevseoboi.com.ua/uploads/posts/2012-05/1338409175-1888934-0103121_www.nevseoboi.com.ua.jpg',
    'р':'https://get.wallhere.com/photo/landscape-mountains-lake-water-rock-nature-reflection-grass-sky-snow-cliff-river-national-park-fjord-wilderness-Bank-mount-scenery-tundra-Formation-Terrain-tree-leaf-mountain-tarn-1920x1080-px-geology-computer-wallpaper-mountain-range-moraine-glacial-landform-fell-larch-elevation-escarpment-828915.jpg',
    'и': 'https://avatars.mds.yandex.net/get-zen_doc/1945976/pub_602ceb4aae93e667d22817df_602ceb993ad6ee787cefffa0/scale_1200',
    'в': 'https://c.wallhere.com/photos/4a/05/1280x744_px_Abstract_Field_Abstract_Mountain_Nature_Wallpaper_Image_cool_hs_photos_field_photos_hd_images_for_desktop_hd_wallpapers_landscapes-801761.jpg!d',
    'е' : 'https://img1.akspic.ru/originals/5/3/6/2/0/102635-pejzazhi_gor-dikaya_mestnost-gora-gornyj_relef-nebo-2048x1152.jpg',
    'т' : 'https://img2.goodfon.ru/wallpaper/nbig/f/37/ozero-el-priroda.jpg',
    ' ' : 'https://im0-tub-ua.yandex.net/i?id=a3798cc47d977b3973683e4fdafb263f&n=13'
}
let generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click',()=>{
    let str = word.value;
    let strSplit = str.split('');
    for(let key in obj){
        
        for(let i = 0; i < strSplit.length; i++){
            let letters = strSplit[i];
            if(letters == key){
                let img = `<img src="${obj[key]}" alt="">`
                wrapper.insertAdjacentHTML('beforeend',img )
            }
        }
        
    }
})
