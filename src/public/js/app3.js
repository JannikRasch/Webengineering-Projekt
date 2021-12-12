var c1info = document.querySelector('.c1info');

//var c1news1 = document.querySelector('.c1news1');var c1news2 = document.querySelector('.c1news2');var c1news3 = document.querySelector('.c1news3');var c1news4 = document.querySelector('.c1news4');var c1news5 = document.querySelector('.c1news5');var c1news6 = document.querySelector('.c1news6');var c1news7 = document.querySelector('.c1news7');var c1news8 = document.querySelector('.c1news8');var c1news9 = document.querySelector('.c1news9');var c1news10 = document.querySelector('.c1news10');

var c1title1 = document.querySelector('.c1title1');var c1title2 = document.querySelector('.c1title2');var c1title3 = document.querySelector('.c1title3');var c1title4 = document.querySelector('.c1title4');var c1title5 = document.querySelector('.c1title5');var c1title6 = document.querySelector('.c1title6');var c1title7 = document.querySelector('.c1title7');var c1title8 = document.querySelector('.c1title8');var c1title9 = document.querySelector('.c1title9');var c1title10 = document.querySelector('.c1title10');

var c1date1 = document.querySelector('.c1date1');var c1date2 = document.querySelector('.c1date2');var c1date3 = document.querySelector('.c1date3');var c1date4 = document.querySelector('.c1date4');var c1date5 = document.querySelector('.c1date5');var c1date6 = document.querySelector('.c1date6');var c1date7 = document.querySelector('.c1date7');var c1date8 = document.querySelector('.c1date8');var c1date9 = document.querySelector('.c1date9');var c1date10 = document.querySelector('.c1date10');

var c1text1 = document.querySelector('.c1text1');var c1text2 = document.querySelector('.c1text2');var c1text3 = document.querySelector('.c1text3');var c1text4 = document.querySelector('.c1text4');var c1text5 = document.querySelector('.c1text5');var c1text6 = document.querySelector('.c1text6');var c1text7 = document.querySelector('.c1text7');var c1text8 = document.querySelector('.c1text8');var c1text9 = document.querySelector('.c1text9');var c1text10 = document.querySelector('.c1text10');

var c1link1 = document.querySelector('.c1link1');var c1link2 = document.querySelector('.c1link2');var c1link3 = document.querySelector('.c1link3');var c1link4 = document.querySelector('.c1link4');var c1link5 = document.querySelector('.c1link5');var c1link6 = document.querySelector('.c1link6');var c1link7 = document.querySelector('.c1link7');var c1link8 = document.querySelector('.c1link8');var c1link9 = document.querySelector('.c1link9');var c1link10 = document.querySelector('.c1link10');

var c1img1 = document.querySelector('.c1img1');var c1img2 = document.querySelector('.c1img2');var c1img3 = document.querySelector('.c1img3');var c1img4 = document.querySelector('.c1img4');var c1img5 = document.querySelector('.c1img5');var c1img6 = document.querySelector('.c1img6');var c1img7 = document.querySelector('.c1img7');var c1img8 = document.querySelector('.c1img8');var c1img9 = document.querySelector('.c1img9');var c1img10 = document.querySelector('.c1img10');

var c2info = document.querySelector('.c2info');

//var c2news1 = document.querySelector('.c2news1');var c2news2 = document.querySelector('.c2news2');var c2news3 = document.querySelector('.c2news3');var c2news4 = document.querySelector('.c2news4');var c2news5 = document.querySelector('.c2news5');var c2news6 = document.querySelector('.c2news6');var c2news7 = document.querySelector('.c2news7');var c2news8 = document.querySelector('.c2news8');var c2news9 = document.querySelector('.c2news9');var c2news10 = document.querySelector('.c2news10');

var c2title1 = document.querySelector('.c2title1');var c2title2 = document.querySelector('.c2title2');var c2title3 = document.querySelector('.c2title3');var c2title4 = document.querySelector('.c2title4');var c2title5 = document.querySelector('.c2title5');var c2title6 = document.querySelector('.c2title6');var c2title7 = document.querySelector('.c2title7');var c2title8 = document.querySelector('.c2title8');var c2title9 = document.querySelector('.c2title9');var c2title10 = document.querySelector('.c2title10');

var c2date1 = document.querySelector('.c2date1');var c2date2 = document.querySelector('.c2date2');var c2date3 = document.querySelector('.c2date3');var c2date4 = document.querySelector('.c2date4');var c2date5 = document.querySelector('.c2date5');var c2date6 = document.querySelector('.c2date6');var c2date7 = document.querySelector('.c2date7');var c2date8 = document.querySelector('.c2date8');var c2date9 = document.querySelector('.c2date9');var c2date10 = document.querySelector('.c2date10');

var c2text1 = document.querySelector('.c2text1');var c2text2 = document.querySelector('.c2text2');var c2text3 = document.querySelector('.c2text3');var c2text4 = document.querySelector('.c2text4');var c2text5 = document.querySelector('.c2text5');var c2text6 = document.querySelector('.c2text6');var c2text7 = document.querySelector('.c2text7');var c2text8 = document.querySelector('.c2text8');var c2text9 = document.querySelector('.c2text9');var c2text10 = document.querySelector('.c2text10');

var c2link1 = document.querySelector('.c2link1');var c2link2 = document.querySelector('.c2link2');var c2link3 = document.querySelector('.c2link3');var c2link4 = document.querySelector('.c2link4');var c2link5 = document.querySelector('.c2link5');var c2link6 = document.querySelector('.c2link6');var c2link7 = document.querySelector('.c2link7');var c2link8 = document.querySelector('.c2link8');var c2link9 = document.querySelector('.c2link9');var c2link10 = document.querySelector('.c2link10');

var c2img1 = document.querySelector('.c2img1');var c2img2 = document.querySelector('.c2img2');var c2img3 = document.querySelector('.c2img3');var c2img4 = document.querySelector('.c2img4');var c2img5 = document.querySelector('.c2img5');var c2img6 = document.querySelector('.c2img6');var c2img7 = document.querySelector('.c2img7');var c2img8 = document.querySelector('.c2img8');var c2img9 = document.querySelector('.c2img9');var c2img10 = document.querySelector('.c2img10');

fetch('https://www.tagesschau.de/xml/rss2/')
.then(response1 => response1.text())
.then(data1 => {
    let parser = new DOMParser()
    let news1 = parser.parseFromString(data1, "application/xml")
    console.log(news1)
    buildNews1(news1)
})

fetch('https://www.heise.de/rss/heise-atom.xml')
.then(response2 => response2.text())
.then(data2 => {
    let parser = new DOMParser()
    let news2 = parser.parseFromString(data2, "application/xml")
    console.log(news2)
    buildNews2(news2)
})

function buildNews1(x){

    /*
    let titles = x.getElementsByTagName('title')
    let el = document.createElement('el')
    let title = titles[0].firstChild.nodeValue
    c1info.textContent = title
    c1info.appendChild(el)
    */

    let titles = x.getElementsByTagName('title')
    c1info.textContent = titles[0].firstChild.nodeValue
    c1title1.textContent = titles[1].firstChild.nodeValue
    c1title2.textContent = titles[2].firstChild.nodeValue
    c1title3.textContent = titles[3].firstChild.nodeValue
    c1title4.textContent = titles[4].firstChild.nodeValue
    c1title5.textContent = titles[5].firstChild.nodeValue
    c1title6.textContent = titles[6].firstChild.nodeValue
    c1title7.textContent = titles[7].firstChild.nodeValue
    c1title8.textContent = titles[8].firstChild.nodeValue
    c1title9.textContent = titles[9].firstChild.nodeValue
    c1title10.textContent = titles[10].firstChild.nodeValue
    
    let dates = x.getElementsByTagName('pubDate')
    c1date1.textContent = dates[0].firstChild.nodeValue
    c1date2.textContent = dates[1].firstChild.nodeValue
    c1date3.textContent = dates[2].firstChild.nodeValue
    c1date4.textContent = dates[3].firstChild.nodeValue
    c1date5.textContent = dates[4].firstChild.nodeValue
    c1date6.textContent = dates[5].firstChild.nodeValue
    c1date7.textContent = dates[6].firstChild.nodeValue
    c1date8.textContent = dates[7].firstChild.nodeValue
    c1date9.textContent = dates[8].firstChild.nodeValue
    c1date10.textContent = dates[9].firstChild.nodeValue

    let texts = x.getElementsByTagName('description')
    c1text1.textContent = texts[1].firstChild.nodeValue
    c1text2.textContent = texts[2].firstChild.nodeValue
    c1text3.textContent = texts[3].firstChild.nodeValue
    c1text4.textContent = texts[4].firstChild.nodeValue
    c1text5.textContent = texts[5].firstChild.nodeValue
    c1text6.textContent = texts[6].firstChild.nodeValue
    c1text7.textContent = texts[7].firstChild.nodeValue
    c1text8.textContent = texts[8].firstChild.nodeValue
    c1text9.textContent = texts[9].firstChild.nodeValue
    c1text10.textContent = texts[10].firstChild.nodeValue

    let links = x.getElementsByTagName('link')
    c1link1.textContent = links[1].firstChild.nodeValue
    c1link2.textContent = links[2].firstChild.nodeValue
    c1link3.textContent = links[3].firstChild.nodeValue
    c1link4.textContent = links[4].firstChild.nodeValue
    c1link5.textContent = links[5].firstChild.nodeValue
    c1link6.textContent = links[6].firstChild.nodeValue
    c1link7.textContent = links[7].firstChild.nodeValue
    c1link8.textContent = links[8].firstChild.nodeValue
    c1link9.textContent = links[9].firstChild.nodeValue
    c1link10.textContent = links[10].firstChild.nodeValue

    for(let i=0;i<10;i++){
        var cdata = String(x.firstChild.getElementsByTagName('item')[i].getElementsByTagName('content:encoded')[0].childNodes[0].nodeValue)

        var imageUrlStart = cdata.search("img src=") + 9;
        var imageUrlEnd = cdata.search(".jpg") + 4;
        var imageUrl = cdata.substring(imageUrlStart, imageUrlEnd)
        
        if(i==0)c1img1.src = imageUrl
        if(i==1)c1img2.src = imageUrl
        if(i==2)c1img3.src = imageUrl
        if(i==3)c1img4.src = imageUrl
        if(i==4)c1img5.src = imageUrl
        if(i==5)c1img6.src = imageUrl
        if(i==6)c1img7.src = imageUrl
        if(i==7)c1img8.src = imageUrl
        if(i==8)c1img9.src = imageUrl
        if(i==9)c1img10.src = imageUrl

    }
}

function buildNews2(x){

    let titles = x.getElementsByTagName('title')
    c2info.textContent = titles[0].firstChild.nodeValue
    c2title1.textContent = titles[1].firstChild.nodeValue
    c2title2.textContent = titles[2].firstChild.nodeValue
    c2title3.textContent = titles[3].firstChild.nodeValue
    c2title4.textContent = titles[4].firstChild.nodeValue
    c2title5.textContent = titles[5].firstChild.nodeValue
    c2title6.textContent = titles[6].firstChild.nodeValue
    c2title7.textContent = titles[7].firstChild.nodeValue
    c2title8.textContent = titles[8].firstChild.nodeValue
    c2title9.textContent = titles[9].firstChild.nodeValue
    c2title10.textContent = titles[10].firstChild.nodeValue
    
    let dates = x.getElementsByTagName('published')
    c2date1.textContent = dates[0].firstChild.nodeValue
    c2date2.textContent = dates[1].firstChild.nodeValue
    c2date3.textContent = dates[2].firstChild.nodeValue
    c2date4.textContent = dates[3].firstChild.nodeValue
    c2date5.textContent = dates[4].firstChild.nodeValue
    c2date6.textContent = dates[5].firstChild.nodeValue
    c2date7.textContent = dates[6].firstChild.nodeValue
    c2date8.textContent = dates[7].firstChild.nodeValue
    c2date9.textContent = dates[8].firstChild.nodeValue
    c2date10.textContent = dates[9].firstChild.nodeValue

    let texts = x.getElementsByTagName('summary')
    c2text1.textContent = texts[0].firstChild.nodeValue
    c2text2.textContent = texts[1].firstChild.nodeValue
    c2text3.textContent = texts[2].firstChild.nodeValue
    c2text4.textContent = texts[3].firstChild.nodeValue
    c2text5.textContent = texts[4].firstChild.nodeValue
    c2text6.textContent = texts[5].firstChild.nodeValue
    c2text7.textContent = texts[6].firstChild.nodeValue
    c2text8.textContent = texts[7].firstChild.nodeValue
    c2text9.textContent = texts[8].firstChild.nodeValue
    c2text10.textContent = texts[9].firstChild.nodeValue

    let links = x.getElementsByTagName('link')
    c2link1.textContent = links[1].firstChild.nodeValue
    c2link2.textContent = links[2].firstChild.nodeValue
    c2link3.textContent = links[3].firstChild.nodeValue
    c2link4.textContent = links[4].firstChild.nodeValue
    c2link5.textContent = links[5].firstChild.nodeValue
    c2link6.textContent = links[6].firstChild.nodeValue
    c2link7.textContent = links[7].firstChild.nodeValue
    c2link8.textContent = links[8].firstChild.nodeValue
    c2link9.textContent = links[9].firstChild.nodeValue
    c2link10.textContent = links[10].firstChild.nodeValue

    for(let i=0;i<10;i++){
        var cdata = String(x.firstChild.getElementsByTagName('entry')[i].getElementsByTagName('content')[0].childNodes[0].nodeValue)

        var imageUrlStart = cdata.search("img src=") + 9;
        var imageUrlEnd = cdata.search(".jpg") + 4;
        var imageUrl = cdata.substring(imageUrlStart, imageUrlEnd)

        console.log(imageUrl)
        
        if(i==0)c2img1.src = imageUrl
        if(i==1)c2img2.src = imageUrl
        if(i==2)c2img3.src = imageUrl
        if(i==3)c2img4.src = imageUrl
        if(i==4)c2img5.src = imageUrl
        if(i==5)c2img6.src = imageUrl
        if(i==6)c2img7.src = imageUrl
        if(i==7)c2img8.src = imageUrl
        if(i==8)c2img9.src = imageUrl
        if(i==9)c2img10.src = imageUrl

    }
}
