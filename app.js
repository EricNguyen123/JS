const music = new Audio('vande.mp3')
// music.play();

const posters = [
    {
        poster: "img/1.png",
    },
    {
        poster: "img/2.png",
    },
    {
        poster: "img/3.png",
    },
    {
        poster: "img/4.png",
    },
    {
        poster: "img/5.png",
    },
    {
        poster: "img/6.png",
    },
    {
        poster: "img/7.png",
    },
    {
        poster: "img/8.png",
    },
    {
        poster: "img/9.png",
    },
    {
        poster: "img/10.png",
    },
    {
        poster: "img/11.png",
    },
    {
        poster: "img/12.png",
    },
    {
        poster: "img/13.png",
    },
    {
        poster: "img/14.png",
    },
]

const songs = [
    {
        id: '1',
        songName: `
        On My Way
        <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.png",
    },
    {
        id: '2',
        songName: `
        Fade
        <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.png",
    },
    {
        id: '3',
        songName: `
        Cầu Hôn
        <br>
        <div class="subtitle">Văn Mai Hương</div>`,
        poster: "img/3.png",
    },
    {
        id: '4',
        songName: `
        Liên Khúc Đón Xuân 
        <br>
        <div class="subtitle">Cẩm Ly</div>`,
        poster: "img/4.png",
    },
    {
        id: '5',
        songName: `
        Lời Tỏ Tình Của Mùa Xuân
        <br>
        <div class="subtitle">Hồ Trung Dũng</div>`,
        poster: "img/5.png",
    },
    {
        id: '6',
        songName: `
        Mừng Tuổi Mẹ Cha
        <br>
        <div class="subtitle">Đan Trường, Hồ Ngọc Hà</div>`,
        poster: "img/6.png",
    },
    {
        id: '7',
        songName: `
        Long Phụng Sum Vầy
        <br>
        <div class="subtitle">Lam Truòng</div>`,
        poster: "img/7.png",
    },
    {
        id: '8',
        songName: `
        Nắm Lấy Tay Anh
        <br>
        <div class="subtitle">Tuấn Hưng</div>`,
        poster: "img/8.png",
    },
    {
        id: '9',
        songName: `
        Ngày Chung Đôi 
        <br>
        <div class="subtitle">Văn Mai Hương</div>`,
        poster: "img/3.png",
    },
    {
        id: '10',
        songName: `
        Ngày Tết Quê Em 
        <br>
        <div class="subtitle">Mây Trắng</div>`,
        poster: "img/9.png",
    },
    {
        id: '11',
        songName: `
        Một Nhà 
        <br>
        <div class="subtitle">Da LAB</div>`,
        poster: "img/10.png",
    },
    {
        id: '12',
        songName: `
        Muốn Yêu Ai Đó Cả cuộc Đời
        <br>
        <div class="subtitle">Hoàng Yến, Tino</div>`,
        poster: "img/11.png",
    },
    {
        id: '13',
        songName: `
        Có Em Chờ 
        <br>
        <div class="subtitle">Min</div>`,
        poster: "img/12.png",
    },
    {
        id: '14',
        songName: `
        I Wanna Be Your Love
        <br>
        <div class="subtitle">Đông Nhi, Ông Cao Thắng</div>`,
        poster: "img/13.png",
    },
    {
        id: '15',
        songName: `
        Say Do You
        <br>
        <div class="subtitle">Tiên Tiên</div>`,
        poster: "img/14.png",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

Array.from(document.getElementsByClassName('artists')).forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = posters[i].poster
})

let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementsByClassName('wave')[0]

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play()
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        wave.classList.add('active2')
    }
    else{
        music.pause()
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
            element.classList.add('bi-play-circle-fill')
            element.classList.remove('bi-pause-circle-fill')
    })
}

const makeAllBackgounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
            element.style.background = "rgb(105, 105, 170, 0)"
    })
}

let index = 0
let poster_master_play = document.getElementById('poster_master_play')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id
        makeAllPlays()
        e.target.classList.remove('bi-play-circle-fill')
        e.target.classList.add('bi-pause-circle-fill')
        music.src = `audio/${index}.mp3`
        music.play()
        let song_title = songs.filter((ele) => {
            return ele.id == index
        })

        song_title.forEach((ele) => {
            let {songName} = ele
            poster_master_play.src = ele.poster
            title.innerHTML = songName
        })

        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        music.addEventListener('ended', ()=>{
            masterPlay.classList.add('bi-play-fill')
            masterPlay.classList.remove('bi-pause-fill')
            wave.classList.remove('active2')
        })

        makeAllBackgounds()
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)"
    })
})

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime
    let music_dur = music.duration

    let min = Math.floor(music_dur / 60)
    let sec = Math.floor(music_dur % 60)

    if(sec < 10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`
    

    let min1 = Math.floor(music_curr / 60)
    let sec1 = Math.floor(music_curr % 60)

    if(sec1 < 10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`


    let progressbar = parseInt((music.currentTime / music.duration) * 100)
    seek.value = progressbar
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = music.duration * seek.value / 100
})

music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill')
    masterPlay.classList.remove('bi-pause-fill')
    wave.classList.remove('active2')
})

let vol_icon = document.getElementById('vol_icon')
let vol = document.getElementById('vol')
let vol_dot = document.getElementById('vol_dot')
let vol_bar = document.getElementsByClassName('vol_bar')[0]

vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-up-fill')
    }
    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.remove('bi-volume-up-fill')
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
        vol_icon.classList.add('bi-volume-up-fill')
    }

    let vol_a = vol.value
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})

let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click',()=>{
    index -= 1
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    let index_id = songs.filter((e)=>{
        return e.id == index
    })
    index_id.forEach((e)=>{
        music.src = `audio/${e.id}.mp3`
        poster_master_play.src = e.poster
    })
    // music.src = `audio/${index}.mp3`
    // poster_master_play.src = `img/${index}.png`
    music.play()
    let song_title = songs.filter((ele) => {
        return ele.id == index
    })

    song_title.forEach((ele) => {
        let songName = ele.songName
        title.innerHTML = songName
    })
    makeAllPlays()
    document.getElementById(`${index}`).classList.remove('bi-play-fill')
    document.getElementById(`${index}`).classList.add('bi-pause-fill')
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active2')
    makeAllBackgounds()
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)"
})
next.addEventListener('click',()=>{
    index += 1
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1
    }
    let index_id = songs.filter((e)=>{
        return e.id == index
    })
    index_id.forEach((e)=>{
        music.src = `audio/${e.id}.mp3`
        poster_master_play.src = e.poster
    })
    // music.src = `audio/${index}.mp3`
    // poster_master_play.src = `img/${index}.png`
    music.play()
    let song_title = songs.filter((ele) => {
        return ele.id == index
    })

    song_title.forEach((ele) => {
        let songName = ele.songName
        title.innerHTML = songName
    })
    makeAllPlays()
    document.getElementById(`${index}`).classList.remove('bi-play-fill')
    document.getElementById(`${index}`).classList.add('bi-pause-fill')
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    wave.classList.add('active2')
    makeAllBackgounds()
    Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)"
})

let left_scroll = document.getElementById('left_scroll')
let right_scroll = document.getElementById('right_scroll')
let pop_song = document.getElementsByClassName('pop_song')[0]

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330
})

right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330
})


let left_scrolls = document.getElementById('left_scrolls')
let right_scrolls = document.getElementById('right_scrolls')
let item = document.getElementsByClassName('item')[0]

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330
})

right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330
})