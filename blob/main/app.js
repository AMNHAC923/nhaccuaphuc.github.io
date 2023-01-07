const  $  =  tài liệu . truy vấnSelector . ràng buộc ( tài liệu )
const  $$  =  tài liệu . querySelectorAll . ràng buộc ( tài liệu )

const  songTitle  =  $ ( '.music-play__info marquee' )
const  songSinger  =  $ ( '.music-play__info .song-item--singer' )
const  menuSide  =  $ ( '.menu-side' )
const  btnCloseMenuSide  =  $ ( '.menu-side__logo i' )
const  btnOpenMenuSide  =  $ ( '.mobile__heading--menu' )
const  menuSongPlaylist  =  $ ( '.menu-side__song' )
const  menuSongPlaylistUSUK  =  $ ( '.menu-side__song.us-uk' )
const  menuSongPlaylistEDM  =  $ ( '.menu-side__song.edm' )
const  PersonalSongPlaylist  =  $ ( '.personal__song--list' )
const  cdThumb  =  $ ( '.music-play__image' )
const  noteMusicAnimate  =  $$ ( '.box-note-icon i' )
const  âm thanh  =  $ ( '#audio' )
const  wave  =  $ ( '.music-play__left .music-play__wave' )
const  timeEnd  =  $ ( '.music-play__progress--end' )
const  timeStart  =  $ ( '.music-play__progress--start' )
const  btnPlay  =  $ ( '.music-play__control .btn-toggle-play .bi-play-circle' )
const  btnNext  =  $ ( '.music-play__control .btn-next .bi-skip-forward' )
const  btnPrev  =  $ ( '.music-play__control .btn-prev .bi-skip-backward' )
const  btnRepeat  =  $ ( '.music-play__control .btn-repeat' )
const  btnRandom  =  $ ( '.music-play__control .btn-random' )
 tiến trình  const =  $ ( '.music-play__progress--seek .progress' )
const  seekbar  =  $ ( '.music-play__progress--seek .seek__bar' )
const  seekdot  =  $ ( '.music-play__progress--seek .seek__dot' )
 âm lượng  const =  $ ( '.music-play__volume .volume' )
const  iconVolume  =  $ ( '.music-play__volume i' )
const  seekbarVolume  =  $ ( '.music-play__volume .seek__bar' )
const  seekdotVolume  =  $ ( '.music-play__volume .seek__dot' )
const  btnPlayAll  =  $ ( '.personal__title--nút bên phải' )
const  themeModal  =  $ ( '.theme-modal__content' )
const  playlistPersonal  =  $ ( '.container__personal--wrapper-item .song-side__playlist--carousel.playlist' )
const  albumPersonal  =  $ ( '.container__personal--wrapper-item .song-side__playlist--carousel.album' )
const  mvPersonal  =  $ ( '.song-side__playlist--carousel.mv' )
const  SingerPersonal  =  $ ( '.song-side__playlist--carousel.singer' )
const  video  =  $ ( '.playlist__mv-item--video' )
const  chartLegendBox  =  $ ( '.chart__legend-box' )

const  songSide  =  $ ( '.song-side' )
const  bannerTitle  =  $ ( '.song-side__banner--title' )
const  bannerContent  =  $ ( '.song-side__banner--content' )
 tiêu đề  const =  $ ( '.song-side__heading' )
const  tab  =  $$ ( '.song-side__heading--tabs .tab-item' )
const  songSideContainer  =  $$ ( '.song-side__container' )
const  songSideContainerActive  =  $ ( '.song-side__container.active' )
const  listSlide  =  $$ ( '.song__animate-img--item' )
const  leftScrollPlaylist  =  $ ( '#left-scroll-playlist' )
const  rightScrollPlaylist  =  $ ( '#right-scroll-playlist' )
const  leftScrollSinger  =  $ ( '#left-scroll-singer' )
const  rightScrollSinger  =  $ ( '#right-scroll-singer' )
const  carouselPlaylist  =  $ ( '.song-side__playlist .song-side__playlist--carousel' )
const  carouselSinger  =  $ ( '.song-side__singer .song-side__playlist--carousel' )
const  carouselNewRelease  =  $ ( '.swiper__new-release .swiper-wrapper' )
const  btnTheme  =  $ ( '.song-side__heading--theme' )
const  modalTheme  =  $ ( '.theme-modal' )
const  btnCloseTheme  =  $ ( '.theme-modal__heading i' )
const  mainPage  =  $ ( 'tiêu đề' )
const  leftScrollPlaylistPersonal  =  $ ( '.playlist-personal .bi-arrow-left' )
const  rightScrollPlaylistPersonal  =  $ ( '.playlist-personal .bi-arrow-right' )
const  leftScrollAlbumPersonal  =  $ ( '.album-personal .bi-arrow-left' )
const  rightScrollAlbumPersonal  =  $ ( '.album-personal .bi-arrow-right' )
const  leftScrollMVPersonal  =  $ ( '.mv-personal .bi-arrow-left' )
const  rightScrollMVPersonal  =  $ ( '.mv-personal .bi-arrow-right' )
const  leftScrollSingerPersonal  =  $ ( '.singer-personal .bi-arrow-left' )
const  rightScrollSingerPersonal  =  $ ( '.singer-personal .bi-arrow-right' )
const  searchContainer  =  $ ( '.search__result' ) ;
const  searchInput  =  $ ( '#search-song' ) ;

const  PLAYER_STORAGE_KEY  =  'ZING_MP3_DEVELOPER'
const  songAPI  =  'https://615950a6601e6f0017e5a15b.mockapi.io/api/songs'
const  SingerAPI  =  'https://615950a6601e6f0017e5a15b.mockapi.io/api/singers'
const  playlistAPI  =  'https://615950a6601e6f0017e5a15b.mockapi.io/api/playlist'
const  videoAPI  =  'https://615950a6601e6f0017e5a15b.mockapi.io/api/videos'
const  songUSUKAPI  =  'https://6260ea02f429c20deb979e8a.mockapi.io/USUK'
const  songEDMAPI  =  'https://6260ea02f429c20deb979e8a.mockapi.io/EDM'
const  rankTableAPI  =  'https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1'
var  songData  =  [ ]
var  ca sĩData  =  [ ]
var  playlistData  =  [ ]
var  videoData  =  [ ]
var  songDataUSUK  =  [ ]
var  songDataEDM  =  [ ]
var  rankTableData  =  [ ]

getData  =  ( api )  => {
    trả lại  Lời hứa mới  ( ( giải quyết , từ chối ) => { 
         yêu cầu  var =  XMLHttpRequest mới  ( )
        yêu cầu . mở ( 'NHẬN' ,  api )
        yêu cầu . đang tải  =  ( )  => {
            nếu ( yêu cầu . trạng thái  ==  200 ) {
                giải quyết ( yêu cầu . phản hồi )
            }
            khác {
                từ chối ( Lỗi ( request . statusText ) )
            }
        }
        yêu cầu . onerror  =  ( ) => {
            trả về  Lỗi ( 'Tìm nạp dữ liệu không thành công' )
        }
        yêu cầu . gửi ( )
    } )
}

Lời hứa . tất cả ( [ getData ( songAPI ) ,  getData ( SingerAPI ) ,  getData ( playlistAPI ) ,  getData ( videoAPI ) ,  getData ( songUSUKAPI ) ,  getData ( songEDMAPI ) ,  getData ( rankTableAPI ) ] )
. sau đó ( ( [ bài hát ,  ca sĩ ,  danh sách phát ,  video ,  bài hátUSUK ,  bài hátEDM ,  bảng xếp hạng ] )  => {
    songData  =  JSON . phân tích ( bài hát )
    ca sĩData  =  JSON . phân tích ( ca sĩ )
    playlistData  =  JSON . phân tích cú pháp ( danh sách phát )
    videoData  =  JSON . phân tích ( video )
    songDataUSUK  =  JSON . phân tích cú pháp ( bài hátUSUK )
    songDataEDM  =  JSON . phân tích cú pháp ( bài hátEDM )
    rankTableData  =  JSON . phân tích cú pháp ( rankTable )
} )
. sau đó ( ( ) => ứng dụng . bắt đầu ( ) )
. sau đó ( ( ) => console . log ( rankTableData . data . song . length ) )
. bắt ( ( err ) => cảnh báo ( err ) )

 ứng dụng  const =  {
    hiện tại Index : 0 ,
    isPlaying : sai ,
    isRepeat : sai ,
    isRandom : sai ,
    isMute : sai ,
    isPlayPersonalSong : sai ,
    isPlayUSUK : sai ,
    isPlayEDM : sai ,
    cấu hình : JSON . phân tích cú pháp ( localStorage . getItem ( PLAYER_STORAGE_KEY ) )  ||  { } ,
    cdThumbRotate : cdThumb . sinh động ( [
        {  biến đổi : 'xoay (360deg)' }
    ] ,  {
        thời lượng : 8000 ,
        lặp lại : Vô cực
    } ) ,
    swiperNewRelease : setTimeout ( ( )  =>  {
        trình vuốt mới  ( " .swiper__new -release" , { 
            slidePerView : 3 ,
            khoảng cáchBetween : 30 ,
            slidePerGroup : 3 ,
            vòng lặp : đúng ,
            loopFillGroupWithBlank : true ,
            điều hướng : {
                nextEl : ".swiper-button-next" ,
                prevEl : ".swiper-button-prev" ,
            } ,
            điểm ngắt : {
                // khi chiều rộng cửa sổ >= 320px
                320 : {
                  slidePerView : 1 ,
                  khoảng cáchBetween : 10 ,
                  slidePerGroup : 1 ,
                } ,
                740 : {
                  slidePerView : 2 ,
                  khoảng cáchBetween : 20 ,
                  slidePerGroup : 2
                } ,
                1024 : {
                    slidePerView : 3 ,
                    khoảng cáchBetween : 30 ,
                    slidePerGroup : 3
                } ,
              } ,
            tự động phát : {
                độ trễ : 3000 ,
                disableOnInteraction : sai ,
            } ,
            tốc độ : 1000 ,
        } )
    } ,  3000 ) ,
    swiperBanner : Swiper mới  ( ".swiper__banner" , { 
        GrabCursor : true ,
        hiệu ứng : "sáng tạo" ,
        hiệu ứng sáng tạo : {
          trước : {
            bóng tối : đúng ,
            dịch : [ 0 ,  0 ,  - 400 ] ,
          } ,
          tiếp theo : {
            dịch : [ "100%" ,  0 ,  0 ] ,
          } ,
        } ,
        vòng lặp : đúng ,
        phân trang : {
          el : '.swiper-pagination' ,
        } ,
        điều hướng : {
          nextEl : '.swiper-button-next' ,
          prevEl : '.swiper-button-prev' ,
        } ,
        tự động phát : {
            độ trễ : 4000 ,
            disableOnInteraction : sai ,
        } ,
        tốc độ : 1000 ,
    } ) ,
    setConfiguration : ( key ,  value ) => {
        ứng dụng . cấu hình [ key ]  =  giá trị
        localStorage . setItem ( PLAYER_STORAGE_KEY ,  JSON . stringify ( app . configuration ) )
    } ,
    loadConfiguration : ( ) => {
        ứng dụng . isRandom  =  ứng dụng . cấu hình . là ngẫu nhiên
        ứng dụng . isRepeat  =  ứng dụng . cấu hình . isRepeat
         màu  const =  ứng dụng . cấu hình . chủ đề
        nếu ( màu sắc ) {
            tài liệu . tài liệuElement . phong cách . setProperty ( '--primary-bg ' ,  colors .PrimaryBg )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--menu-side-bg' ,  màu sắc . menuSideBg )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--music-play-bg' ,  màu sắc . musicPlayBg )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--theme-modal-bg' ,  màu sắc . themeModalBg )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--text-color' ,  colors . textColor )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--active-color' ,  colors . activeColor )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--none-active-color' ,  colors . noneActiveColor )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--bố cục viền' ,  màu sắc . viềnLayout )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--background-image' ,  colors . backgroundImage )
            tài liệu . tài liệuElement . phong cách . setProperty ( '--sub-text-color' ,  colors . subTextColor )
        }
    } ,
    xác địnhProperties : ( )  => {
        đối tượng . defineProperty ( app ,  'currentSong' ,  {
            nhận : ( ) => ( songData [ app . currentIndex ] )
        } )
        đối tượng . defineProperty ( ứng dụng ,  'currentPlaylist' ,  {
            nhận : ( ) => ( rankTableData . data . song [ app . currentIndex ] )
        } )
        đối tượng . defineProperty ( app ,  'currentSongUSUK' ,  {
            nhận : ( ) => ( songDataUSUK [ app . currentIndex ] )
        } )
        đối tượng . defineProperty ( app ,  'currentSongEDM' ,  {
            nhận : ( ) => ( songDataEDM [ app . currentIndex ] )
        } )
    } ,
    kết xuất chủ đề : ( ) => {
        const  dataRender  =  chủ đề . bản đồ ( ( chủ đề ,  chỉ mục ) => {
            trở lại  `
                <div class="theme-modal__content--item" data-type=" ${ index } ">
                    <h3 class="content__item--title"> ${ chủ đề . gõ } </h3>
                    <div class="content__item--container">
                    ${ chủ đề . danh sách . bản đồ ( ( mục ,  chỉ mục ) => {
                        trở lại  `
                            <div class="content__item--theme" data-index=" ${ index } ">
                                <div class="item__theme--display">
                                    <img
                                        src=" ${ item . thumbnail } "
                                        thay thế = ""
                                    />
                                    <div class="item__theme--actions">
                                        <button class="item__theme--apply">Áp Dụng</button>
                                        <button class="item__theme--preview">Xem Trước</button>
                                    </div>
                                </div>
                                <h4> ${ mục . tên } </h4>
                            </div>`
                    } ) }
                    </div>
                </div>`
        } )

        hãy để  html  =  ''
        Mảng . từ ( dataRender ) . forEach ( ( item ,  index ) => {
            htmls  =  htmls . concat ( mục . thay thế ( / , / g ,  "" ) )
        } )
        chủ đềModal . bên trongHTML  =  html
    } ,
    renderMenuSong : ( ) => {
        
        const  htmls  =  rankTableData . dữ liệu . bài hát . bản đồ ( ( mục ,  chỉ mục ) => {
            trở lại  `
            <div class="menu-side__song-item ${ app . currentIndex  ===  index ? 'active' : '' } " data-index=" ${ index } ">
                <div class="menu-side__song-item--number"> ${ item . đặt hàng } </div>
                <div class="menu-side__song-item--image">
                    <div class="music-play__wave active">
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                    </div>
                    <img src= ${ mục . hình thu nhỏ } />
                </div>
                <div class="menu-side__song-item--info">
                    <div class="song-item--title"> ${ item . tên } </div>
                    <div class="song-item--singer"> ${ item . artist_names } </div>
                </div>
                <div class="menu-side__song-item--play">
                    <i class="bi bi-play-circle-fill"></i>
                </div>
            </div>`
        } )
        menuSongPlaylist . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderMenuSongUSUK : ( )  => {
        const  htmls  =  songDataUSUK . bản đồ ( ( bài hát ,  chỉ mục ) => {
            trở lại  `
            <div class="menu-side__song-item ${ app . currentIndex  ===  index ? 'active' : '' } " data-index=" ${ index } ">
                <div class="menu-side__song-item--number"> ${ bài hát . id  <=  9 ? '0'  +  bài hát . id : bài hát . id  } </div>
                <div class="menu-side__song-item--image">
                    <div class="music-play__wave active">
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                    </div>
                    <img src= ${ bài hát . hình thu nhỏ } />
                </div>
                <div class="menu-side__song-item--info">
                    <div class="song-item--title"> ${ bài hát . tên } </div>
                    <div class="song-item--singer"> ${ bài hát . ca sĩ } </div>
                </div>
                <div class="menu-side__song-item--play">
                    <i class="bi bi-play-circle-fill"></i>
                </div>
            </div>`
        } )
        menuBài hátPlaylistUSUK . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderMenuSongEDM : ( )  => {
        const  htmls  =  songDataEDM . bản đồ ( ( bài hát ,  chỉ mục ) => {
            trở lại  `
            <div class="menu-side__song-item ${ app . currentIndex  ===  index ? 'active' : '' } " data-index=" ${ index } ">
                <div class="menu-side__song-item--number"> ${ bài hát . id  <=  9 ? '0'  +  bài hát . id : bài hát . id  } </div>
                <div class="menu-side__song-item--image">
                    <div class="music-play__wave active">
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                    </div>
                    <img src= ${ bài hát . hình thu nhỏ } />
                </div>
                <div class="menu-side__song-item--info">
                    <div class="song-item--title"> ${ bài hát . tên } </div>
                    <div class="song-item--singer"> ${ bài hát . ca sĩ } </div>
                </div>
                <div class="menu-side__song-item--play">
                    <i class="bi bi-play-circle-fill"></i>
                </div>
            </div>`
        } )
        menuBài hátPlaylistEDM . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderPersonalSong : ( ) => {
        const  PersonalSongList  =  $ ( '.personal__song--list' )
        const  htmls  =  songData . bản đồ ( ( bài hát ,  chỉ mục ) => {
            trở lại  `
                <div class="personal__song--list-item " data-index=" ${ index } ">
                  <div class="song__list-item--left">
                    <i class="bi-nhạc-nốt-chùm"></i>
                    <div class="song__list-item--left-thumbnail">
                      <div class="music-play__wave active">
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                        <div class="music-play__wave-item"></div>
                      </div>
                      <img src= ${ bài hát . hình thu nhỏ } alt="#" />
                    </div>
                    <div class="list-item__left--card-info">
                      <span class="card-info__title"> ${ bài hát . tên } </span>
                      <span class="card-info__subtitle"> ${ bài hát . ca sĩ } </span>
                    </div>
                  </div>
                  <div class="song__list-item--content">
                    <span> ${ bài hát . album } </span>
                  </div>
                  <div class="song__list-item--right">
                    <span>04:50</span>
                  </div>
                </div>
            `
        } )
        Danh sách bài hát cá nhân . bên trongHTML  =  htmls . tham gia ( '' )   
    } ,
    renderCarouselPlaylist : ( ) => {
        const  htmls  =  songData . bản đồ ( ( bài hát ,  chỉ mục ) => {
            trở lại  `
            <a href="." class="playlist__carousel-item" id= ${ index } >
                <div class="playlist__carousel-item--img">
                    <img src= ${ bài hát . hình thu nhỏ } alt="#" />
                    <i class="bi bi-play-circle"></i>
                </div>
                <div class="playlist__carousel-item--title">
                    ${ bài hát . album }
                </div>
                <div class="playlist__carousel-item--subtitle">
                    ${ bài hát . ca sĩ }
                </div>
            </a>`
        } )
        carouselPlaylist . bên trongHTML  =  htmls . tham gia ( '' )  
    } ,
    renderCarouselSinger : ( ) => {
        const  htmls  =  ca sĩData . bản đồ ( ( ca sĩ ,  chỉ mục ) => {
            trở lại  `
            <a class="playlist__carousel-item--circle">
            <div class="carousel-item__circle--img">
              <img
                src= ${ ca sĩ . hình ảnh }
                thay thế = "#"
              />
              <i class="bi bi-play-circle"></i>
            </div>
            <div class="carousel-item__circle--name"> ${ ca sĩ . tên } </div>
          </a>
            `
        } )
        carouselCa sĩ . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderNewRelease : ( ) => {
        const  htmls  =  playlistData . lát ( ) . đảo ngược ( ) . lát ( 1 ) . bản đồ ( ( mục ,  chỉ mục ) => {
            trở lại  `
            <div class="song-side__new-release--item swiper-slide">
                <div class="song-side__new-release--thumbnail">
                    <img src= ${ mục . hình thu nhỏ } >
                    <i class="bi bi-play-circle"></i>
                </div>
                <div class="song-side__new-release--content">
                    <div class="new-release__info">
                        <div class="new-release__info--title"> ${ item . tên } </div>
                        <div class="new-release__info--subtitle"> ${ item . ca sĩ } </div>
                    </div>
                    <div class="new-release__time">
                        <div class="new-release__time--rank"># ${ index + 1 } </div>
                        <div class="new-release__time--date">26.04.2022</div>
                    </div>
                </div>
            </div>
            `
        } )
        băng chuyềnNewRelease . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderPlaylistPersonal : ( ) => {
        const  htmls  =  playlistData . bản đồ ( ( danh sách phát ,  chỉ mục ) => {
            trở lại  `
            <a href="." class="playlist__carousel-item" id= ${ index } >
                <div class="playlist__carousel-item--img">
                    <img src= ${ danh sách phát . hình thu nhỏ } alt="#" />
                    <i class="bi bi-play-circle"></i>
                </div>
                <div class="playlist__carousel-item--title">
                    ${ danh sách phát . album }
                </div>
                <div class="playlist__carousel-item--subtitle">
                    ${ danh sách phát . ca sĩ }
                </div>
            </a>`
        } )
        danh sách phátCá nhân . bên trongHTML  =  htmls . tham gia ( '' )  
    } ,
    renderAlbumPersonal : ( ) => {
        const  htmls  =  playlistData . lát ( ) . đảo ngược ( ) . bản đồ ( ( danh sách phát ,  chỉ mục ) => {
            trở lại  `
            <a href="." class="playlist__carousel-item" id= ${ index } >
                <div class="playlist__carousel-item--img">
                    <img src= ${ danh sách phát . hình thu nhỏ } alt="#" />
                    <i class="bi bi-play-circle"></i>
                </div>
                <div class="playlist__carousel-item--title">
                    ${ danh sách phát . album }
                </div>
            </a>`
        } )
        albumCá nhân . bên trongHTML  =  htmls . tham gia ( '' )  
    } ,
    kết xuất MVPersonal : ( ) => {
        const  htmls  =  videoData . bản đồ ( ( mv ,  chỉ mục ) => {
            trở lại  `
                <div class="playlist__mv-item">
                    <div class="playlist__mv-item--video">
                        <video
                        src= ${ mv . con đường } 
                        chiều rộng="330"
                        chiều cao="186"
                        áp phích = ${ mv . áp phích } >
                        </video>
                    </div>
                    <div class="playlist__mv-item--info">
                        <div class="mv-item__info--thumbnail">
                            <img src= ${ mv . hình đại diện } alt="">
                        </div>
                        <div class="mv-item__info--content">
                            <div class="info__content-title"> ${ mv . tên } </div>
                            <div class="info__content-subtitle"> ${ mv . ca sĩ } </div>
                        </div>
                    </div>
                </div>
            `
        } )
        mvPersonal . bên trongHTML  =  htmls . tham gia ( '' )
    } ,
    renderZingChart : ( ) => {
        const  htmls  =  rankTableData . dữ liệu . bài hát . lát ( 0 ,  3 ) . bản đồ ( ( mục ,  chỉ mục ) => {
            trở lại  `
            <div class="chart__legend-box--item">
                <div class="legend-box__item-number"> ${ item . vị trí }
                </div>
                <div class="legend-box__item-song">
                    <div class="legend-box__item-song--thumbnail">
                        <img src= ${ mục . hình thu nhỏ } width="50px">
                    </div>
                    <div class="legend-box__item-song--info">
                        <div class="song__info-title">
                            ${ mục . tiêu đề }
                        </div>
                        <div class="song__info-subtitle">
                            ${ mục . artist_names }
                        </div>
                    </div>
                    <div class="legend-box__item-song--percent">
                    ${ mục . tổng cộng }
                    </div>
                </div>
            </div>
            `
        } )
        const  btnElement  =  `<div class="chart__legend--show-more">
                                <a href="#">Xem Thêm</a>
                            </div>`
        biểu đồLegendBox . bên trongHTML  =  htmls . concat ( btnElement ) . tham gia ( '' )
    } ,
    handleHoverVideo : ( ) => {
        Mảng . từ ( $$ ( '.playlist__mv-item--video video' ) ) . forEach ( ( item ,  index ) => {
            mục . onmouseover  =  ( )  => {
                mục . điều khiển  =  đúng
            }
            mục . onmouseout  =  ( )  => {
                mục . điều khiển  =  sai
            }
        } )
    } ,
    loadZingChart : ( )  => {
        var  xValues  ​​=  [ '17:00' , '19:00' , '21:00' , '23:00' , '01:00' , '03:00' , '05:00' , '07:00 ' , '09:00' , '11:00' ,  '13:00' ,  '15:00' ] ;
        const  ctx  =  tài liệu . getElementById ( 'myChart' ) . getContext ( '2d' ) ;
        const  myChart  =  Biểu đồ mới  ( ctx , { 
        gõ : "dòng" ,
        dữ liệu : {
            nhãn : xValues ​​,
            bộ dữ liệu : [ {
            nhãn : rankTableData . dữ liệu . bài hát [ 0 ] . tiêu đề , 
            dữ liệu : [ 860 , 1140 , 1060 , 1060 , 1070 , 1110 , 1330 , 2210 , 7830 , 2478 ,  4000 ,  4800 ] ,
            viềnColor : "đỏ" ,
            điền : sai ,
            màu nền : 'rgba(255, 0, 0, 0.6)' ,
            pointHoverBackgroundColor : "#fff" ,
            hoverBorderColor : "#fff"
            
            } ,  { 
            nhãn : rankTableData . dữ liệu . bài hát [ 1 ] . tiêu đề , 
            dữ liệu : [ 1600 , 1700 , 1700 , 1900 , 2000 , 2700 , 4000 , 5000 , 6000 , 7000 ,  5000 ,  6600 ] ,
            borderColor : "vàng" ,
            điền : sai ,
            màu nền : 'rgba(216, 250, 8, 0,6)'
            } ,  { 
            nhãn : rankTableData . dữ liệu . bài hát [ 2 ] . tiêu đề , 
            dữ liệu : [ 300 , 700 , 2000 , 5000 , 6000 , 4000 , 2000 , 1000 , 200 , 100 ,  1200 ,  2000 ] ,
            viềnColor : "xanh" ,
            điền : sai ,
            màu nền : 'rgba(0, 0, 255, 0,6)'
            } ]
        } ,
        tùy chọn : {
            căng thẳng : 0,4 ,
            plugin : {
                huyền thoại : {
                hiển thị : sai
                } ,
                chú giải công cụ : {
                chế độ : 'chỉ mục' ,
                giao nhau : sai
                }
            } ,
            di chuột : {
                chế độ : 'gần nhất' ,
                giao nhau : sai
                }
            } ,
            
        } ) ;
        const  songItemLegend  =  $$ ( '.chart__legend-box--item' )
        songItemLegend . forEach ( ( item ,  index ) => {
                mục . phong cách . nềnColor  =  myChart . dữ liệu . bộ dữ liệu [ chỉ mục ] . màu nền
            }
        )
        songItemLegend . forEach ( ( item ,  index ) => {
            mục . onclick  =  ( )  => {
                chuyển đổi dữ liệu ( chỉ mục )
            }
        } )

        toggleData  =  ( giá trị )  => {
            const  visibilityData  =  myChart . isDatasetVisible ( giá trị )
            nếu ( sibilityData ) {
                myChart . ẩn ( giá trị )
            }
            khác {
                myChart . hiển thị ( giá trị )
            }
        }
    } ,
    loadCurrentSong : ( )  => {
        nếu ( ứng dụng . isPlayPersonalSong ) {
            tên bài hát . InternalText  =  ứng dụng . bài hát hiện tại . Tên
            bài hátCa sĩ . InternalText  =  ứng dụng . bài hát hiện tại . ca sỹ
            cdThumb . phong cách . backgroundImage  =  `url(' ${ app . currentSong . thumbnail } ')`
            âm thanh . src  =  ứng dụng . bài hát hiện tại . đường dẫn
        }
        khác  nếu ( ứng dụng . isPlayUSUK ) {
            ứng dụng . bài hát hiện tạiUSUK  =  0
            tên bài hát . InternalText  =  ứng dụng . bài hát hiện tạiUSUK . Tên
            bài hátCa sĩ . InternalText  =  ứng dụng . bài hát hiện tạiUSUK . ca sỹ
            cdThumb . phong cách . backgroundImage  =  `url(' ${ app . currentSongUSUK . thumbnail } ')`
            âm thanh . src  =  ứng dụng . bài hát hiện tạiUSUK . đường dẫn
        }
        khác  nếu ( ứng dụng . isPlayEDM ) {
            ứng dụng . bài hát hiện tạiEDM  =  0
            tên bài hát . InternalText  =  ứng dụng . bài hát hiện tạiEDM . Tên
            bài hátCa sĩ . InternalText  =  ứng dụng . bài hát hiện tạiEDM . ca sỹ
            cdThumb . phong cách . backgroundImage  =  `url(' ${ app . currentSongEDM . thumbnail } ')`
            âm thanh . src  =  ứng dụng . bài hát hiện tạiEDM . đường dẫn
        }
        khác {
            ứng dụng . danh sách phát hiện tại  =  0
            tên bài hát . InternalText  =  ứng dụng . danh sách phát hiện tại . Tên
            bài hátCa sĩ . InternalText  =  ứng dụng . danh sách phát hiện tại . nghệ sĩ_names
            cdThumb . phong cách . backgroundImage  =  `url(' ${ app . currentPlaylist . thumbnail } ')`
            âm thanh . src  =  `http://api.mp3.zing.vn/api/streaming/audio/$ { app . danh sách phát hiện tại . id } /320`
        }
    
    } ,
    ưa thíchTimeFormat : ( thời lượng ) => {
        var  giờ  =  ~ ~ ( thời lượng  /  3600 )
        var  phút  =  ~ ~ ( ( thời lượng  %  3600 )  /  60 )
        var  giây  =  ~ ~ thời lượng  %  60
        // Đầu ra như "1:01" hoặc "4:03:59" hoặc "123:03:59"
        varret  =  "  "
        nếu  ( giờ  >  0 )  {
            ret  +=  ""  +  giờ  +  ":"  +  ( phút  <  10 ? "0" : "" )
        }
        ret  +=  ""  +  phút  +  ":"  +  ( giây  <  10 ? "0" : "" )
        ret  +=  ""  +  giây
        trả  lại
    } ,
    bài hát ngẫu nhiên : ( ) => {
 
 
        để  maxLength
        nếu ( ứng dụng . isPlayPersonalSong ) {
            maxLength  =  songData . chiều dài
            
        }
        khác  nếu ( ứng dụng . isPlayUSUK ) {
            maxLength  =  songDataUSUK . chiều dài
        }
        khác  nếu ( ứng dụng . isPlayEDM ) {
            maxLength  =  songDataEDM . chiều dài
        }
        khác {
            maxLength  =  danh sách phátDữ liệu . chiều dài
        }
        hãy để  new Index  
        làm {
            new Index  =  Toán học . tầng ( Math . ngẫu nhiên ( )  *  maxLength )
        } trong khi ( new Index  ===  this . current Index )
        ứng dụng . hiện tại Index  =  new Index
        nếu ( ứng dụng . isPlayPersonalSong ) {
            Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                    mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                    mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                    mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
            } )
            const  itemCurrent  =  $$ ( '.personal__song--list-item' ) [ app . hiện tại ]
            itemHiện tại . danh sách lớp . thêm ( 'hoạt động' )
            const  waveActiveSong  =  itemCurrent . firstElementChild . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
            const  thumbnailActiveSong  =  itemCurrent . firstElementChild . firstElementChild . nextElementSibling . lastElementCon
            waveActiveSong . phong cách . hiển thị  =  'linh hoạt'
            thumbnailActiveSong . phong cách . bộ lọc  =  'độ sáng (50%)'
            ứng dụng . loadCurrentSong ( ) ;
            âm thanh . chơi ( )
        }
        khác  nếu ( ứng dụng . isPlayUSUK ) {
            ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.us-uk .menu-side__song-item' ) )
        }
        khác  nếu ( ứng dụng . isPlayEDM ) {
            ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.edm .menu-side__song-item' ) )
        }
        khác {
            ứng dụng . activeItem WhenChangingPlaylist ( $$ ( '.menu-side__song-item' ) )
        }
        
    } ,
    hoạt hìnhCD : ( ) => {
        
    } ,
    removeSongItemActive : ( ElementNodeList ) => {
        Mảng . từ ( elementNodeList ) . forEach ( ( mục ) => {
            nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                 biểu tượng  const =  mục . lastElementChild . yếu tố đầu tiênCon
                 sóng  const =  vật phẩm . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
                const  thumbnail  =  item . firstElementChild . nextElementSibling . lastElementCon
                biểu tượng . danh sách lớp . thay thế ( 'bi-pause-circle-fill' ,  'bi-play-circle-fill' )
                làn sóng . phong cách . hiển thị  =  'không'
                hình thu nhỏ . phong cách . bộ lọc  =  'độ sáng (100%)'
            }
        } )
    } ,
    activeItem WhenChangingPersonal : ( listItemSong ) => {
        Mảng . từ ( listItemSong ) . forEach ( ( mục ) => {
            nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
            }
        } )
        const  waveActiveSong  =  listItemSong [ app . hiện tại Index ] . firstElementChild . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
        const  imgActiveSong  =  listItemSong [ ứng dụng . hiện tại Index ] . firstElementChild . firstElementChild . nextElementSibling . lastElementCon
        waveActiveSong . phong cách . hiển thị  =  'linh hoạt'
        imgActiveSong . phong cách . bộ lọc  =  'độ sáng (50%)'
    } ,
    activeItem WhenChangingPlaylist : ( listItemSong ) => {
        ứng dụng . removeSongItemActive ( listItemSong )
        listItemSong [ ứng dụng . hiện tại Index ] . danh sách lớp . thêm ( 'hoạt động' )
        const  iconElement  =  listItemSong [ app . hiện tại Index ] . lastElementChild . yếu tố đầu tiênCon
        iconElement . danh sách lớp . thay thế ( 'bi-play-circle-fill' ,  'bi-pause-circle-fill' )
        ứng dụng . loadCurrentSong ( )
        âm thanh . chơi ( )
        const  waveActiveSong  =  listItemSong [ app . hiện tại Index ] . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
        const  imgActiveSong  =  listItemSong [ ứng dụng . hiện tại Index ] . firstElementChild . nextElementSibling . lastElementCon
        waveActiveSong . phong cách . hiển thị  =  'linh hoạt'
        imgActiveSong . phong cách . bộ lọc  =  'độ sáng (50%)'
    } ,
    chọnChủ đề : ( ) => {
        chủ đềModal . onclick  =  e  =>  {
             loại  const =  e . mục tiêu . gần nhất ( '.theme-modal__content--item' ) . tập dữ liệu . loại
            const  indexOfType  =  e . mục tiêu . gần nhất ( '.content__item--theme' ) . tập dữ liệu . mục lục
            const  colors  =  chủ đề [ loại ] . danh sách [ indexOfType ] . thông tin chi tiết   
            ứng dụng . setConfiguration ( 'chủ đề' ,  màu sắc )
            if ( e . target . classList . contains ( 'item__theme--apply' ) ) {
                tài liệu . tài liệuElement . phong cách . setProperty ( '--primary-bg ' ,  colors .PrimaryBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--menu-side-bg' ,  màu sắc . menuSideBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--music-play-bg' ,  màu sắc . musicPlayBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--theme-modal-bg' ,  màu sắc . themeModalBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--text-color' ,  colors . textColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--active-color' ,  colors . activeColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--none-active-color' ,  colors . noneActiveColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--bố cục viền' ,  màu sắc . viềnLayout )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--background-image' ,  colors . backgroundImage )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--sub-text-color' ,  colors . subTextColor )
                btnCloseTheme . bấm vào ( )
            }
            khác  nếu ( e . target . classList . contains ( 'item__theme--preview' ) ) {
                tài liệu . tài liệuElement . phong cách . setProperty ( '--primary-bg ' ,  colors .PrimaryBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--menu-side-bg' ,  màu sắc . menuSideBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--music-play-bg' ,  màu sắc . musicPlayBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--theme-modal-bg' ,  màu sắc . themeModalBg )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--text-color' ,  colors . textColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--active-color' ,  colors . activeColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--none-active-color' ,  colors . noneActiveColor )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--background-image' ,  colors . backgroundImage )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--bố cục viền' ,  màu sắc . viềnLayout )
                tài liệu . tài liệuElement . phong cách . setProperty ( '--sub-text-color' ,  colors . subTextColor )
            }
        }
    } ,
    selectSongPlaylist : ( ) => {
        menuSongPlaylist . onclick  =  e  => {
            ứng dụng . isPlayPersonalSong  =  sai
            ứng dụng . isPlayEDM  =  sai
            ứng dụng . isPlayUSUK  =  sai
            Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                    mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                    mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                    mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
            } )
            ứng dụng . removeSongItemActive ( $$ ( '.menu-side__song-item' ) )
            const  songItem  =  e . mục tiêu . gần nhất ( '.menu-side__song-item' )
            bài hátItem . danh sách lớp . thêm ( 'hoạt động' )
             biểu tượng  const =  songItem . lastElementChild . yếu tố đầu tiênCon
            const  wavePlaylist  =  songItem . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
            const  thumbnail  =  songItem . firstElementChild . nextElementSibling . lastElementCon
            biểu tượng . danh sách lớp . thay thế ( 'bi-play-circle-fill' ,  'bi-pause-circle-fill' )
            wavePlaylist . phong cách . hiển thị  =  'linh hoạt'
            hình thu nhỏ . phong cách . bộ lọc  =  'độ sáng (50%)'
            ứng dụng . hiện tại Index = songItem  . getAttribute ( 'chỉ mục dữ liệu' ) 
            ứng dụng . loadCurrentSong ( )
            âm thanh . chơi ( )
            ứng dụng . cdThumbRotate . chơi ( )
            Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                mục . phong cách . hiển thị  =  'khối'
            } )
            
        }
    } ,
    selectSongPlaylistUSUK : ( ) => {
        menuBài hátPlaylistUSUK . onclick  =  e  => {
            ứng dụng . isPlayPersonalSong  =  false ,
            ứng dụng . isPlayUSUK  =  true
            ứng dụng . isPlayEDM  =  sai
            Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                    mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                    mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                    mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
            } )
            ứng dụng . removeSongItemActive ( $$ ( '.menu-side__song-item' ) )
            const  songItem  =  e . mục tiêu . gần nhất ( '.menu-side__song-item' )
            bài hátItem . danh sách lớp . thêm ( 'hoạt động' )
             biểu tượng  const =  songItem . lastElementChild . yếu tố đầu tiênCon
            const  wavePlaylist  =  songItem . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
            const  thumbnail  =  songItem . firstElementChild . nextElementSibling . lastElementCon
            biểu tượng . danh sách lớp . thay thế ( 'bi-play-circle-fill' ,  'bi-pause-circle-fill' )
            wavePlaylist . phong cách . hiển thị  =  'linh hoạt'
            hình thu nhỏ . phong cách . bộ lọc  =  'độ sáng (50%)'
            ứng dụng . hiện tại Index = songItem  . getAttribute ( 'chỉ mục dữ liệu' ) 
            ứng dụng . loadCurrentSong ( )
            âm thanh . chơi ( )
            ứng dụng . cdThumbRotate . chơi ( )
            Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                mục . phong cách . hiển thị  =  'khối'
            } )
            
        }
    } ,
    selectSongPlaylistEDM : ( ) => {
        menuBài hátPlaylistEDM . onclick  =  e  => {
            ứng dụng . isPlayPersonalSong  =  false ,
            ứng dụng . isPlayUSUK  =  sai
            ứng dụng . isPlayEDM  =  đúng
            Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                    mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                    mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                    mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
            } )
            ứng dụng . removeSongItemActive ( $$ ( '.menu-side__song-item' ) )
            const  songItem  =  e . mục tiêu . gần nhất ( '.menu-side__song-item' )
            bài hátItem . danh sách lớp . thêm ( 'hoạt động' )
             biểu tượng  const =  songItem . lastElementChild . yếu tố đầu tiênCon
            const  wavePlaylist  =  songItem . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
            const  thumbnail  =  songItem . firstElementChild . nextElementSibling . lastElementCon
            biểu tượng . danh sách lớp . thay thế ( 'bi-play-circle-fill' ,  'bi-pause-circle-fill' )
            wavePlaylist . phong cách . hiển thị  =  'linh hoạt'
            hình thu nhỏ . phong cách . bộ lọc  =  'độ sáng (50%)'
            ứng dụng . hiện tại Index = songItem  . getAttribute ( 'chỉ mục dữ liệu' ) 
            ứng dụng . loadCurrentSong ( )
            âm thanh . chơi ( )
            ứng dụng . cdThumbRotate . chơi ( )
            Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                mục . phong cách . hiển thị  =  'khối'
            } )
            
        }
    } ,
    selectSongPersonal : ( ) => {
        cá nhânSongPlaylist . onclick  =  e  =>  {
            ứng dụng . isPlayPersonalSong  =  true
            ứng dụng . isPlayUSUK  =  sai
            ứng dụng . isPlayEDM  =  sai
            ứng dụng . removeSongItemActive ( $$ ( '.menu-side__song-item' ) )
            Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                    mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                    mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                    mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
            } )

            const  songItem  =  e . mục tiêu . gần nhất ( '.personal__song--list-item' )
            bài hátItem . danh sách lớp . thêm ( 'hoạt động' )
            bài hátItem . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'linh hoạt'
            bài hátItem . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (50%)'
            ứng dụng . hiện tại Index = songItem  . getAttribute ( 'chỉ mục dữ liệu' ) 
            ứng dụng . loadCurrentSong ( )
            âm thanh . chơi ( )
            ứng dụng . cdThumbRotate . chơi ( )
            Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                mục . phong cách . hiển thị  =  'khối'
            } )
        }
    } ,
    handleEvent : ( ) => {
        
        const  listItemSong  =  $$ ( '.menu-side__song-item' )
        const  listItemSongPersonal  =  $$ ( '.personal__song--list-item' )
        ứng dụng . cdThumbRotate . tạm dừng ( )
        Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
            mục . phong cách . hiển thị  =  'không'
        } )
        btnPlay . onclick  =  ( )  =>  {
            
            if ( ! app . isPlaying  &&  audio . pause ) {
                âm thanh . chơi ( )
                Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                    mục . phong cách . hiển thị  =  'khối'
                } )
                ứng dụng . cdThumbRotate . chơi ( )
                nếu ( ! app . isPlayPersonalSong ) {
                    const  wavePlaylist  =  listItemSong [ ứng dụng . hiện tại Index ] . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
                    const  thumbnailPlaylist  =  listItemSong [ app . hiện tại Index ] . firstElementChild . nextElementSibling . lastElementCon
                    const  iconPlaylist  =  listItemSong [ app . hiện tại Index ] . lastElementChild . yếu tố đầu tiênCon
                    biểu tượngDanh sách phát . danh sách lớp . thay thế ( 'bi-play-circle-fill' ,  'bi-pause-circle-fill' )
                    wavePlaylist . phong cách . hiển thị  =  'linh hoạt'
                    thumbnailPlaylist . phong cách . bộ lọc  =  'độ sáng (50%)'
                }
                khác {
                    const  wavePersonal  =  listItemSongPersonal [ app . hiện tại Index ] . firstElementChild . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
                    wavePersonal . danh sách lớp . thêm ( 'hoạt động' )
                }
            }
            khác {
                âm thanh . tạm dừng ( )
                ứng dụng . cdThumbRotate . tạm dừng ( )
                Mảng . từ ( noteMusicAnimate ) . forEach ( ( mục ) => {
                    mục . phong cách . hiển thị  =  'không'
                } )
                nếu ( ! app . isPlayPersonalSong ) {
                    const  wavePlaylist  =  listItemSong [ ứng dụng . hiện tại Index ] . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
                    const  thumbnailPlaylist  =  listItemSong [ app . hiện tại Index ] . firstElementChild . nextElementSibling . lastElementCon
                    const  iconPlaylist  =  listItemSong [ app . hiện tại Index ] . lastElementChild . yếu tố đầu tiênCon
                    biểu tượngDanh sách phát . danh sách lớp . thay thế ( 'bi-pause-circle-fill' ,  'bi-play-circle-fill' )
                    wavePlaylist . phong cách . hiển thị  =  'không'
                    thumbnailPlaylist . phong cách . bộ lọc  =  'độ sáng (100%)'
                }
                khác {
                    const  wavePersonal  =  listItemSongPersonal [ app . hiện tại Index ] . firstElementChild . firstElementChild . nextElementSibling . yếu tố đầu tiênCon
                    wavePersonal . danh sách lớp . loại bỏ ( 'đang hoạt động' )      
                }
                btnPlayAll . firstElementChild . danh sách lớp . thay thế ( 'bi-pause-fill' ,  'bi-play-fill' )
            }
            
        }
        btnTiếp theo . onclick  =  ( )  =>  {
            nếu ( ứng dụng . isRandom ) {
                ứng dụng . Bài hát ngẫu nhiên ( )
            }
            khác {
                var  maxLength
                nếu ( ứng dụng . isPlayPersonalSong ) {
                    maxLength  =  songData . chiều dài  -  1
                }
                khác  nếu ( ứng dụng . isPlayUSUK ) {
                    maxLength  =  songDataUSUK . chiều dài  -  1
                }
                khác  nếu ( ứng dụng . isPlayEDM ) {
                    maxLength  =  songDataEDM . chiều dài  -  1
                }
                khác {
                    maxLength  =  danh sách phátDữ liệu . chiều dài  -  1
                }
                ứng dụng . current Index  >=  maxLength 
                ? ứng dụng . hiện tại Index  =  0 
                : ứng dụng . hiện tại Index ++
                nếu ( ứng dụng . isPlayPersonalSong ) {
                    Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                        nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                            mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                            mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                            mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                        }
                    } )
                    const  itemCurrent  =  $$ ( '.personal__song--list-item' ) [ app . hiện tại ]
                    itemHiện tại . danh sách lớp . thêm ( 'hoạt động' )
                    itemHiện tại . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'linh hoạt'
                    itemHiện tại . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (50%)'
                    ứng dụng . loadCurrentSong ( )
                    âm thanh . chơi ( )
                } khác  nếu ( ứng dụng . isPlayUSUK ) {
                    ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.us-uk .menu-side__song-item' ) )
                }
                khác  nếu ( ứng dụng . isPlayEDM ) {
                    ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.edm .menu-side__song-item' ) )
                }
                khác {    
                    

                    ứng dụng . activeItem WhenChangingPlaylist ( $$ ( '.menu-side__song-item' ) )
                }
                
            }
        }
        btnTrước . onclick  =  ( )  =>  {
            để  maxLength
            nếu ( ứng dụng . isPlayPersonalSong ) {
                maxLength  =  songData . chiều dài  -  1
            }
            khác  nếu ( ứng dụng . isPlayUSUK ) {
                maxLength  =  songDataUSUK . chiều dài  -  1
            }
            khác  nếu ( ứng dụng . isPlayEDM ) {
                maxLength  =  songDataEDM . chiều dài  -  1
            }
            khác {
                maxLength  =  danh sách phátDữ liệu . chiều dài  -  1
            }
            ứng dụng . hiện tại Index  <=  0 ? ứng dụng . hiện tại Index  =  maxLength : ứng dụng . hiện tại Index --
            nếu ( ứng dụng . isPlayPersonalSong ) {
                Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                    nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                        mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                        mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                        mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                    }
                } )
                const  itemCurrent  =  $$ ( '.personal__song--list-item' ) [ app . hiện tại ]
                itemHiện tại . danh sách lớp . thêm ( 'hoạt động' )
                itemHiện tại . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'linh hoạt'
                itemHiện tại . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (50%)'
                ứng dụng . loadCurrentSong ( )
                âm thanh . chơi ( )
            }
            khác  nếu ( ứng dụng . isPlayUSUK ) {
                ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.us-uk .menu-side__song-item' ) )
            }
            khác  nếu ( ứng dụng . isPlayEDM ) {
                ứng dụng . activeItem WhenChangingPlaylist ( $$ ( ' .menu-side__song.edm .menu-side__song-item' ) )
            }
            khác {
                ứng dụng . activeItem WhenChangingPlaylist ( $$ ( '.menu-side__song-item' ) )
            }
        }
        btnLặp lại . onclick  =  ( )  =>  {
            ứng dụng . làLặp lại  =  ! ứng dụng . isRepeat
            ứng dụng . setConfiguration ( 'isRepeat' ,  ứng dụng . isRepeat )
            btnLặp lại . danh sách lớp . chuyển đổi ( 'hoạt động' ,  ứng dụng . isRepeat )
        }
        btnNgẫu nhiên . onclick  =  ( )  =>  {
            ứng dụng . isRandom  =  ! ứng dụng . là ngẫu nhiên
            ứng dụng . setConfiguration ( 'isRandom' ,  ứng dụng . isRandom )
            btnNgẫu nhiên . danh sách lớp . chuyển đổi ( 'hoạt động' ,  ứng dụng . isRandom )
        }
        btnPlayAll . onclick  =  ( )  =>  {
            ứng dụng . isPlayPersonalSong  =  ! ứng dụng . isPlayPersonalSong
            ứng dụng . hiện tại Index  =  0
            nếu ( ứng dụng . isPlayPersonalSong ) {
                btnPlayAll . firstElementChild . danh sách lớp . thay thế ( 'bi-play-fill' ,  'bi-pause-fill' )
                ứng dụng . removeSongItemActive ( $$ ( '.menu-side__song-item' ) )
                ứng dụng . activeItem WhenChangingPersonal ( $$ ( '.personal__song--list-item' ) )
                ứng dụng . activeItem WhenChangingPlaylist ( $$ ( '.personal__song--list-item' ) )
            }
            khác {
                btnPlayAll . firstElementChild . danh sách lớp . thay thế ( 'bi-pause-fill' ,  'bi-play-fill' )
                Mảng . từ ( $$ ( '.personal__song--list-item' ) ) . forEach ( ( mục ) => {
                    nếu ( mục . classList . chứa ( 'hoạt động' ) ) {
                        mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
                        mục . firstElementChild . firstElementChild . nextElementSibling . firstElementChild . phong cách . hiển thị  =  'không'
                        mục . firstElementChild . firstElementChild . nextElementSibling . lastElementChild . phong cách . bộ lọc  =  'độ sáng (100%)'
                    }
                } )
                âm thanh . tạm dừng ( )
            }
            
        }
        tiến bộ . onchange  =  e  =>  {
            var  seekTime  =  ( e . target . value  /  100 )  *  audio . khoảng thời gian
            âm thanh . currentTime  =  seekTime 
        }
        khối lượng . onchange  =  e  =>  {
            var  seekVolume  =  e . mục tiêu . giá trị  /  100
            âm thanh . âm lượng  =  seekVolume
            seekbarVolume . phong cách . chiều rộng  =  ` ${ seekVolume  *  100 } %`
            seekdotVolume . phong cách . trái  =  ` ${ seekVolume  *  100 } %`
        }
        iconVolume . onclick  =  ( )  =>  {
            ứng dụng . isMute  =  ! ứng dụng . là tắt tiếng
            nếu ( ứng dụng . isMute ) {
                âm thanh . khối lượng  =  0
                iconVolume . danh sách lớp . thay thế ( 'bi-volume-down' ,  'bi-volume-mute-fill' )
            }
            khác {
                var  currentVolume  =  seekbarVolume . bù Chiều rộng
                âm thanh . âm lượng  =  hiện tạiVolume  /  100
                iconVolume . danh sách lớp . thay thế ( 'bi-volume-mute-fill' ,  'bi-volume-down' )
            }
        }
        âm thanh . onplay  =  ( )  =>  {
            ứng dụng . isPlaying  =  true
            làn sóng . danh sách lớp . thêm ( 'hoạt động' )
            btnPlay . danh sách lớp . thay thế ( 'bi-play-circle' ,  'bi-pause-circle' )
        }
        âm thanh . tạm dừng  =  ( )  =>  {
            ứng dụng . isPlaying  =  sai
            làn sóng . danh sách lớp . loại bỏ ( 'đang hoạt động' )
            btnPlay . danh sách lớp . thay thế ( 'bi-pause-circle' ,  'bi-play-circle' )
        }
        âm thanh . onloadedmetadata  =  function ( )  {
            timeEnd . InternalText  =  ứng dụng . ưa thíchTimeFormat ( âm thanh . thời lượng )
        }
        âm thanh . ontimeupdate  =  ( )  =>  {
            var  processTime  =  Math . tầng ( âm thanh . currentTime )
            nếu ( âm thanh . thời lượng ) {
                var  phần trămProgress  =  ( thời gian tiến trình / âm thanh . thời lượng ) * 100
                thanh tìm kiếm . phong cách . chiều rộng  =  ` ${ phần trămProgress } %`
                tìm kiếm . phong cách . trái  =  ` ${ phần trămProgress } %`
                tiến bộ . giá trị  =  phần trămProgress
            }
            
            thời gian Bắt đầu . InternalText  =  ứng dụng . ưa thíchTimeFormat ( thời gian tiến trình )
            
        }
        âm thanh . đã kết thúc  =  ( )  =>  {
            ứng dụng . lặp lại ? âm thanh . chơi ( ) : btnNext . bấm vào ( )
            nếu ( app . isRandom  &&  ! app . isRepeat ) {
                ứng dụng . Bài hát ngẫu nhiên ( )
            }
        }
        btnLặp lại . danh sách lớp . chuyển đổi ( 'hoạt động' ,  ứng dụng . isRepeat )
        btnNgẫu nhiên . danh sách lớp . chuyển đổi ( 'hoạt động' ,  ứng dụng . isRandom )
    } ,
    renderSearchResult : ( dữ liệu )  => {
        const  htmls  =  dữ liệu . bản đồ ( ( mục ,  chỉ mục ) => {
            trở lại  `
            <a href="# ${ index } " class="search__result--item">
              <div class="result__item--img">
                <img src= ${ mục . hình thu nhỏ } alt="Hình ảnh bài hát">
              </div>
              <div class="result__item--content">
                <h3 class="content__title">
                  ${ mục . tên }
                </h3>
                <h4 class="content__subtitle">
                    ${ mục . artist_names }
                </h4>
              </div>
            </a>`
        } )
        tìm kiếmContainer . bên trongHTML  =  htmls . tham gia ( '' )  
    } ,
    onSearch : ( ) => {
        
        tìm kiếmĐầu vào . addEventListener ( 'keyup' ,  ( e ) => {
          
            if ( searchInput . value . trim ( ) . length  >  0 ) {
                tìm kiếmContainer . phong cách . hiển thị  =  'linh hoạt'
                var  dataRender  =  ứng dụng . handleSearch ( e . target . value ,  rankTableData . data . song )
                ứng dụng . renderSearchResult ( dataRender )
            }
            khác {
                tìm kiếmContainer . phong cách . hiển thị  =  'không'
            }
        } )
        songSide . onclick  =  ( )  => {
            tìm kiếmContainer . phong cách . hiển thị  =  'không'
        }
    
        
    } ,
    xử lýTìm kiếm : ( giá trị ,  dữ liệu )  => {
         kết quả  var =  [ ]
        for ( var  i  =  0 ;  i < data . length ;  i ++ ) {
            giá trị  =  giá trị . toLowerCase ( )
             tên  var =  dữ liệu [ i ] . tên . toLowerCase ( )
            nếu ( tên . bao gồm ( giá trị ) ) {
                kết quả . đẩy ( dữ liệu [ i ] )
            }
        }
        trả về  kết quả
    } ,
    bắt đầu : ( ) => {
        ứng dụng . trênTìm kiếm ( )
        ứng dụng . tảiCấu hình ( )
        ứng dụng . định nghĩaProperties ( )
        ứng dụng . kết xuất chủ đề ( )
        ứng dụng . renderMenuSong ( )
        ứng dụng . renderMenuSongUSUK ( )
        ứng dụng . renderMenuSongEDM ( )
        ứng dụng . renderPersonalSong ( )
        ứng dụng . renderCarouselPlaylist ( )
        ứng dụng . renderCarouselSinger ( )
        ứng dụng . renderNewRelease ( )
        ứng dụng . renderPlaylistPersonal ( )
        ứng dụng . kết xuấtAlbumCá nhân ( )
        ứng dụng . kết xuấtMVPersonal ( )
        ứng dụng . renderZingChart ( )
        ứng dụng . loadCurrentSong ( )
        ứng dụng . tảiZingChart ( )
        ứng dụng . handleEvent ( )
        ứng dụng . chọnChủ đề ( )
        ứng dụng . selectSongPlaylist ( )
        ứng dụng . selectSongPlaylistUSUK ( )
        ứng dụng . chọnSongPlaylistEDM ( )
        ứng dụng . selectSongPersonal ( )
        ứng dụng . xử lýHoverVideo ( )
    }
}

/*-----CUỘN TRANG MẠNG-----*/
songSide . onscroll  =  ( e )  => {
    tiêu đề . danh sách lớp . chuyển đổi ( 'dính' ,  e . target . scrollTop  >  0 )
    biểu ngữTiêu đề . danh sách lớp . chuyển đổi ( 'mờ dần' ,  e . target . scrollTop  >  0 )
    bannerNội dung . danh sách lớp . chuyển đổi ( 'mờ dần' ,  e . target . scrollTop  >  0 )
}

/*-----TRANG TRANG CHÍNH ĐÃ CHỌN TAB-----*/
tab . forEach ( ( tab ,  chỉ mục ) => {
    const  songSideContainerItem  =  songSideContainer [ chỉ mục ]
    tab . onclick  =  ( )  =>  {
        $ ( '.song-side__heading--tabs .tab-item.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
        $ ( '.song-side__container.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
        tab . danh sách lớp . thêm ( 'hoạt động' )
        songSideContainerItem . danh sách lớp . thêm ( 'hoạt động' )
    }
} )

/*-----Trình chiếu tự động-----*/
để  chỉ số  =  2
showSlides  =  ( )  => {
    const  slideFirst  =  $ ( '.song__animate-img--item.first' )
    const  slideSecond  =  $ ( '.song__animate-img--item.second' )
    const  sildeThird  =  listSlide [ index  ===  listSlide . chiều dài  -  1 ? 0 : chỉ mục + 1 ]
    trượtĐầu tiên . danh sách lớp . thay thế ( 'đầu tiên' ,  'thứ ba' )
    trượt Thứ hai . danh sách lớp . thay thế ( 'thứ hai' ,  'thứ nhất' )
    sildeThird . danh sách lớp . thay thế ( 'thứ ba' ,  'thứ hai' )
    chỉ số ++
    if ( index  >=  listSlide . length ) {
        chỉ số  =  0
    }
    setTimeout ( showSlides ,  2000 )
}
trình chiếu ( )

/*-----Mũi tên nút xử lý----*/
leftScrollPlaylist . onclick  =  ( )  =>  carouselPlaylist . cuộnLeft  -=  300
rightScrollPlaylist . onclick  =  ( )  =>  carouselPlaylist . cuộnLeft  +=  300
leftScrollSinger . onclick  =  ( )  =>  carouselSinger . cuộnLeft  -=  300
rightScrollSinger . onclick  =  ( )  =>  carouselSinger . cuộnLeft  +=  300
leftScrollPlaylistPersonal . onclick  =  ( )  =>  playlistPersonal . cuộnLeft  -=  300
rightScrollPlaylistPersonal . onclick  =  ( )  =>  playlistPersonal . cuộnLeft  +=  300
leftScrollAlbumPersonal . onclick  =  ( )  =>  albumPersonal . cuộnLeft  -=  300
rightScrollAlbumPersonal . onclick  =  ( )  =>  albumPersonal . cuộnLeft  +=  300
leftScrollMVPersonal . onclick  =  ( )  =>  mvPersonal . cuộnLeft  -=  400
rightScrollMVPersonal . onclick  =  ( )  =>  mvPersonal . cuộnLeft  +=  400
leftScrollSingerPersonal . onclick  =  ( )  =>  ca sĩPersonal . cuộnLeft  -=  300
rightScrollSingerPersonal . onclick  =  ( )  =>  ca sĩPersonal . cuộnLeft  +=  300

/*------Xử lý Click Cài đặt menu----*/
btnTheme . onclick  =  ( )  => {
    modalTheme . phong cách . hiển thị  =  'khối'
    trang chính . phong cách . bộ lọc  =  'độ sáng (50%)'
}
btnCloseTheme . onclick  =  ( )  =>  {
    modalTheme . phong cách . hiển thị  =  'không'
    trang chính . phong cách . bộ lọc  =  'độ sáng (100%)'
}

/*------CÁ NHÂN ĐÃ CHỌN TAB-----*/
const  tabPersonal  =  $$ ( '.personal__navbar-item' )
const  tabContentPersonal  =  $$ ( '.container__personal--wrapper-item' )

tabCá nhân . forEach ( ( tab ,  chỉ mục ) => {
    const  tabContent  =  tabContentPersonal [ chỉ mục - 1 ]
    const  gridContainer  =  $$ ( '.container__personal--wrapper-item .song-side__playlist--carousel' )
    const  arrowPersonal  =  $$ ( '.container__personal--control .personal__title--right' )
    tab . onclick  =  ( )  => {
        nếu ( chỉ số  ==  0 ) {
            $ ( '.personal__song--animate' ) . phong cách . hiển thị = 'khối'
            $ ( '.personal__song--list' ) . phong cách . chiều rộng  =  'tự động'
            $ ( '.personal__song--list' ) . phong cách . tràn  =  'ẩn'
            $ ( '.personal__song--list' ) . phong cách . trànY  =  'tự động'
            $ ( '.container__personal--wrapper-item.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
            $$ ( '.container__personal--wrapper-item' ) . forEach ( ( mục ) => {
                mục . danh sách lớp . thêm ( 'hoạt động' )
            } )
            Mảng . từ ( gridContainer ) . forEach ( ( item ,  index ) => {
                mục . phong cách . hiển thị  =  'linh hoạt'
                mục . phong cách . gridTemplateColumns  =  'bỏ đặt'
                mục . phong cách . gridGap =  '0px'
            } )
            Mảng . từ ( arrowPersonal ) . forEach ( ( item ,  index ) => {
                mục . phong cách . hiển thị  =  'khối'
            } )
        }
        khác {
            nếu ( chỉ số  ==  1 ) {
                $ ( '.personal__song--animate' ) . phong cách . hiển thị = 'không'
                $ ( '.personal__song--list' ) . phong cách . chiều rộng  =  '100%'
                $ ( '.personal__song--list' ) . phong cách . tràn  =  'bỏ đặt'
                $ ( '.personal__song--list' ) . phong cách . trànY  =  'bỏ đặt'
            }
            $$ ( '.container__personal--wrapper-item.active' ) . forEach ( ( mục ) => {
                mục . danh sách lớp . loại bỏ ( 'đang hoạt động' )
            } )
            
            tabNội dung . danh sách lớp . thêm ( 'hoạt động' )
            Mảng . từ ( gridContainer ) . forEach ( ( item ,  index ) => {
                nếu ( mục . classList . chứa ( 'mv' ) ) {
                    mục . phong cách . gridTemplateColumns  =  'repeat(auto-fit, minmax(300px, 1fr))'          
                }
                khác {
                    
                    mục . phong cách . gridTemplateColumns  =  'repeat(auto-fit, minmax(150px, 1fr))'
                }
                mục . phong cách . hiển thị  =  'lưới'
                mục . phong cách . gridGap =  '20px'
                
            } )

            Mảng . từ ( arrowPersonal ) . forEach ( ( item ,  index ) => {
                mục . phong cách . hiển thị  =  'không'
            } )
        }
        $ ( '.personal__navbar-item.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
        tab . danh sách lớp . thêm ( 'hoạt động' )
        
    }
} )

/*----- TAB CHỌN MENU BÀI HÁT-----*/
const  menuPlaylist  =  $$ ( '.menu-side__playlist h4' )
const  menuSideSong  =  $$ ( '.menu-side__song' )
menuDanh sách phát . forEach ( ( menu ,  chỉ mục ) => {
    const  side  =  menuSideSong [ chỉ số ]
    thực đơn . onclick  =  ( )  => {
        $ ( '.menu-side__playlist h4.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
        $ ( '.menu-side__song.active' ) . danh sách lớp . loại bỏ ( 'đang hoạt động' )
        thực đơn . danh sách lớp . thêm ( 'hoạt động' )
        bên . danh sách lớp . thêm ( 'hoạt động' )
    }
} )


/*-----PHẢN ỨNG NHANH NHẸN-----*/
btnOpenMenuSide . onclick  =  ( )  =>  {
    menuSide . phong cách . chiều rộng  =  '100%'
    menuSide . phong cách . hiển thị  =  'khối'
}
btnCloseMenuSide . onclick  =  ( )  =>  {
    menuSide . phong cách . hiển thị  =  'không'
}



