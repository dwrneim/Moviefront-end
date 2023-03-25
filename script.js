let continueWatchingContainer = document.querySelector('.continue_watching_container')
let popularMovies = document.querySelector('#popular_movies');
let comedyMovies = document.querySelector('#comedy_movies')
let actionMovies = document.querySelector('#action_movies')
let img_path = 'https://image.tmdb.org/t/p/w500'
let popularMoviesRightİcon = document.querySelector('.popular_movies_right_icon')
let popularMoviesLeftİcon = document.querySelector('.popular_movies_left_icon')
let comedyMoviesRightİcon = document.querySelector('.comedy_movies_right_icon')
let comedyMoviesLeftİcon = document.querySelector('.comedy_movies_left_icon')
let actionMoviesRightİcon = document.querySelector('.action_movies_right_icon')
let actionMoviesLeftİcon = document.querySelector('.action_movies_left_icon')
let loaderContainer = document.querySelector('.loader_container')
let arrowTop = document.querySelector('.arrow_top')
let loggedInUserName = document.querySelector('.logged_in_user p')
let loggedInUserIcon = document.querySelector('.logged_in_user i')

window.addEventListener('load', () => {
    if (!localStorage.getItem('loggedInUser')) {
        window.location.href = './enterance/enterance.html'
    }
})

loggedInUserName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).name
loggedInUserIcon.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser')
    window.location.href = './enterance/enterance.html'
})



fetch('./dataBase/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        loaderContainer.style.display = 'none'
        continueWatchingContainer.innerHTML = ''
        data.forEach(obj => {
            continueWatchingContainer.innerHTML += `
        <div class="watching_card">
            <div class="video_card">
                <video controls src="${obj.video}"></video>
                <div> 
                    <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                    <svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
                </div>
            </div>
            <p>${obj.title}</p>
        </div>
        `
        })
        let playIcon = document.querySelectorAll('.play')
        let pauseIcon = document.querySelectorAll('.pause')
        let video = document.querySelectorAll('.video_card video')

        for (let i = 0; i < playIcon.length; i++) {
            playIcon[i].addEventListener('click', () => {
                playIcon[i].style.display = 'none'
                pauseIcon[i].style.display = 'block'
                video[i].play()

            })
        }
        for (let i = 0; i < pauseIcon.length; i++) {
            pauseIcon[i].addEventListener('click', () => {
                pauseIcon[i].style.display = 'none'
                playIcon[i].style.display = 'block'
                video[i].pause()
            })
        }
        for (let i = 0; i < video.length; i++) {
            video[i].addEventListener('click', () => {
                if (video[i].played) {
                    pauseIcon[i].style.display = 'block'
                    playIcon[i].style.display = 'none'
                } else if (video[i].paused) {
                    pauseIcon[i].style.display = 'none'
                    playIcon[i].style.display = 'block'
                }
            })
        }
    })

async function apiOne() {
    await fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard%27;')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            data.results.forEach(slider => {
                popularMovies.innerHTML += `
                <div class="grid_card">
                    <img src="${img_path}${slider.poster_path}" alt="">
                    <h4>${slider.title}</h4>
                </div>
        `
            })
            let count = 0;
            function slider() {
                for (let i = 0; i < popularMovies.children.length; i++) {
                    popularMovies.children[i].style.transform = `translateX(${-300 * count}px)`
                }
            }

            setInterval(() => {
                if (count < popularMovies.children.length - 4) {
                    count++
                    slider()
                } else {
                    count = 0
                    slider()
                }
            }, 2000);
            popularMoviesRightİcon.addEventListener('click', () => {
                if (count < popularMovies.children.length - 4) {
                    count++
                    slider()
                } else {
                    count = 0
                    slider()
                }
                popularMoviesLeftİcon.addEventListener('click', () => {
                    if (count > 0) {
                        count--
                        slider()
                    } else {
                        count = 0
                        slider()
                    }
                })
            })
        })
}
fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy%27;')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.results.forEach(slider => {
            comedyMovies.innerHTML += `
                <div class="grid_card">
                    <img src="${img_path}${slider.poster_path}" alt="">
                    <h4>${slider.title}</h4>
                </div>
        `
        })
        let count1 = 0;
        function slider() {
            for (let i = 0; i < comedyMovies.children.length; i++) {
                comedyMovies.children[i].style.transform = `translateX(${-300 * count1}px)`
            }
        }

        setInterval(() => {
            if (count1 < comedyMovies.children.length - 4) {
                count1++
                slider()
            } else {
                count1 = 0
                slider()
            }
        }, 2000);
        comedyMoviesRightİcon.addEventListener('click', () => {
            if (count1 < comedyMovies.children.length - 4) {
                count1++
                slider()
            } else {
                count1 = 0
                slider()
            }
            comedyMoviesLeftİcon.addEventListener('click', () => {
                if (count1 > 0) {
                    count1--
                    slider()
                } else {
                    count1 = 0
                    slider()
                }
            })
        })
    })
fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action%27;')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.results.forEach(slider => {
            console.log(slider.poster_path);
            actionMovies.innerHTML += `
                <div class="grid_card">
                    <img src="${slider.poster_path === null ? './image/image 10.png' : img_path + slider.poster_path}" alt="">
                    <h4>${slider.title}</h4>
                </div>
        `
        })
        let count2 = 0;
        function slider() {
            for (let i = 0; i < actionMovies.children.length; i++) {
                actionMovies.children[i].style.transform = `translateX(${-300 * count2}px)`
            }
        }

        setInterval(() => {
            if (count2 < actionMovies.children.length - 4) {
                count2++
                slider()
            } else {
                count2 = 0
                slider()
            }
        }, 2000);
        actionMoviesRightİcon.addEventListener('click', () => {
            if (count2 < actionMovies.children.length - 4) {
                count2++
                slider()
            } else {
                count2 = 0
                slider()
            }
            actionMoviesLeftİcon.addEventListener('click', () => {
                if (count2 > 0) {
                    count2--
                    slider()
                } else {
                    count2 = 0
                    slider()
                }
            })
        })
    })


let barsIcon = document.querySelector('.bars_icon')
let navList = document.querySelector('.nav_list')

barsIcon.addEventListener('click', () => {
    navList.classList.toggle('active')
})


window.addEventListener('load', () => {
    apiOne()
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrowTop.style.display = 'flex'
    } else {
        arrowTop.style.display = 'none'
    }
})

arrowTop.addEventListener('click',()=>{
    window.CSS.supports('scroll-behavior', 'smooth')
    window.scrollTo({
        top: 0,
        behavior:  'smooth',
        
    })
})   