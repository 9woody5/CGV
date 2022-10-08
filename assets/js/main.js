
    $(function(){

        $('a[href="#"]').click(function(ignore){
             ignore.preventDefault(); });


        //aside 메뉴 열기, 닫기
        $('.header .btn-menu').click(function(e){
            e.preventDefault();

            $('.menu-wrap').addClass('active');
            $('body').addClass('hide');
          });

          $('.header .btn-close').click(function(e){
            e.preventDefault();

            $('.menu-wrap').removeClass('active');
            $('body').removeClass('hide');
            });

        

          //aside 메뉴 슬라이드
          var swiper2 = new Swiper(".ad-slide", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: true,
    
            pagination: {
                el: ".fraction",
                type: "fraction",
                renderCustom: function(swiper, current, total){
                    return `<span>${current}</span>/<span>${total}</span>`
                }
              },
        
          });

        //Search 영역
        $('.btn-search').click(function(e){
            e.preventDefault();

            $('.search-wrap').addClass('on');
            $('body').addClass('hide');
        })

        $('.sub-close').click(function(e){
            e.preventDefault();

            $('.search-wrap').removeClass('on');
            $('body').removeClass('hide');
        })

        $('.sub-menu').click(function(e){
            e.preventDefault();

            $('.menu-wrap').addClass('active');
            $('body').addClass('hide');
        })



        //메인 배너 슬라이드 데이터 가져오기
        fetch('./assets/data/banner.json')
        .then((response) => response.json())
        .then((json) => {
            data = json.items;

            let html = '';
            data.forEach(el => {
                html +=`<div class="swiper-slide">
                        <a href="${el.link}">
                            <figure><img src="${el.thumbSrc}" alt="${el.title}"></figure>
                        </a>
                        <a href="${el.link}" class="btn-link">상세보기</a>
                        </div>`;
            });
            
            document.getElementById('mainBanner').innerHTML = html;

            //메인 배너 슬라이드
            var swiper = new Swiper(".sc-visual .swiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: true,
        
                pagination: {
                    el: ".fraction",
                    type: "fraction",
                    renderCustom: function(swiper, current, total){
                        return `<span>${current}</span>/<span>${total}</span>`
                    }
                  },
            
              });
        })

        //무비 차트
        $('.chart-list .chart-item').click(function(e){
            e.preventDefault();
            cateName = $(this).data('cate');

            $('.chart-list .chart-item a').removeClass('active');
            $(this).find('a').addClass('active');

            //데이터 가져오기
            fetch('./assets/data/main-movie-chart.json')
            .then((response) => response.json())
            .then((json) => {
                const data = json.items;
                const result = data.filter(function (parm) {return parm.category == cateName });

                let html = '';
                let idx = 0;
                result.forEach(el => {
                    html += `<div class="swiper-slide">
                                <a href="${el.link}" class="poster-wrap">
                                    <div class="badge-wrap">
                                        <span><img src="${el.badge}" alt="${el.age}"></span>
                                    </div>
                                    <div class="group-number">
                                        <em class="number"><img src="https://img.cgv.co.kr/WebApp/images/main/home/txt_movieInfo_count${el.rank}.png" height="39"></em>
                                        <span class="percent">${el.totalRate}%</span>
                                    </div>                                            
                                    <figure><img src="${el.thumbPoster}" alt="${el.title}"></figure>
                                </a>
                                <div class="txt-box">
                                    <strong class="title">${el.title}</strong>
                                    <p class="desc"><span class="per">${el.bookingRate}</span><span class="view">누적관객 ${el.accrueCnt}만</span></p>
                                    <a href="${el.link}" class="link-book">지금예매</a>
                                </div>
                            </div>`;

                        if(idx == 1){
                            html += `<div class="swiper-slide ad">
                                        <a href="">
                                            <figure><img src="./assets/img/images/thumb03.jpg" alt=""></figure>
                                        </a>
                                        <div class="txt-box">
                                            <strong class="title">컴백홈</strong>
                                            <span class="info">CGV무비차트 다음순위를 알려 드립니다.</span>
                                        </div>
                                    </div>`
                        }
                        idx++;

                });
                
                document.getElementById('mainMovieChart').innerHTML = html;


                //무비 차트 슬라이드 
                var swiper3 = new Swiper(".tab-contents .swiper", {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    freeMode: true,
                });
            })
        })

        $('.chart-list .chart-item').first().trigger('click');


        //상영예정
        $('.comingsoon-list .comingsoon-item').click(function(e){
            e.preventDefault();
            cateName = $(this).data('cate');

            $('.comingsoon-list .comingsoon-item a').removeClass('active');
            $(this).find('a').addClass('active');

            //데이터 가져오기
            fetch('./assets/data/main-coming-movie.json')
            .then((response) => response.json())
            .then((json) => {
                const data = json.items;
                const result = data.filter(function (parm) {return parm.category == cateName });

                let html = '';
                let idx = 0;
                result.forEach(el => {
                    html += `<div class="swiper-slide">
                                <a href="${el.link}" class="poster-wrap">
                                    <div class="badge-wrap">
                                        <span><img src="${el.badge}" alt="${el.age}"></span>
                                    </div>
                                    <div class="group-number">
                                        <em class="number"><img src="https://img.cgv.co.kr/WebApp/images/main/home/txt_movieInfo_count${el.rank}.png" height="39"></em>
                                        <span class="percent">${el.totalRate}%</span>
                                    </div>                                            
                                    <figure><img src="${el.thumbPoster}" alt="${el.title}"></figure>
                                </a>
                                <div class="txt-box">
                                    <strong class="title">${el.title}</strong>
                                    <p class="desc"><span class="per">${el.bookingRate}</span><span class="view">누적관객 ${el.accrueCnt}만</span></p>
                                    <a href="${el.link}" class="link-book">지금예매</a>
                                </div>
                            </div>`;

                        if(idx == 1){
                            html += `<div class="swiper-slide ad">
                                        <a href="">
                                            <figure><img src="./assets/img/images/thumb06.jpg" alt=""></figure>
                                        </a>
                                        <div class="txt-box">
                                            <strong class="title">컴백홈</strong>
                                            <span class="info">CGV무비차트 다음순위를 알려 드립니다.</span>
                                        </div>
                                    </div>`
                        }
                        idx++;
                
                });
                
                document.getElementById('mainComingsoon').innerHTML = html;


                //무비 차트 슬라이드 
                var swiper3 = new Swiper(".tab-contents .swiper", {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    freeMode: true,
                });
            })
        })

        


        $('.nav-list .nav-item').click(function(e){
            e.preventDefault();
            target = $(this).find('a').data('target');

            $('.nav-list .nav-item a').removeClass('active')
            $(this).find('a').addClass('active');

            $(target).addClass('active').siblings().removeClass('active')

            if($(this).find('a').data('target') == '#tab02' ){
                $('.comingsoon-list .comingsoon-item').first().trigger('click');
            }

        })


        //이벤트 배너 데이터 가져오기
        fetch('./assets/data/main-event.json')
        .then((response) => response.json())
        .then((json) => {

            item = json.items;

            let html = '';
            item.forEach(el => {
                html += `<a href="${el.link}" class="img-box">
                            <img src="${el.thumbnail}" alt="${el.title}">
                        </a>`;
            });

            document.getElementById('eventBn').innerHTML = html;
        });
        

        //ICECON 영역 데이터 가져오기
        fetch('./assets/data/main-icecon.json')
        .then((response) => response.json())
        .then((json) => {
            data = json.items;

            let html = '';
            data.forEach(el =>{
                html += `<div class="swiper-slide">
                            <a href="${el.link}">
                                <figure>
                                    <div class="img-box"><img src="${el.imgPoster}" alt="${el.title}"></div>
                                    <div class="txt-wrap">
                                        <figcaption class="title">${el.title}</figcaption>
                                        <p class="desc">${el.desc}</p>
                                    </div>
                                </figure>
                            </a>
                            <a href="${el.link}" class="link-book">지금예매</a>
                        </div>`;
            })
            document.getElementById('mainEvent').innerHTML = html;
        })

        //추천 영역 데이터 가져오기
        fetch('./assets/data/main-recomm.json')
        .then((response) => response.json())
        .then((json) => {
            data = json.items;

            let html= '';
            data.forEach(el => {
                html += `<li class="recommend-item">
                            <a href="${el.link}">
                                <figure>
                                    <div class="img-box">
                                        <img src="${el.videoThumb}" alt="${el.title}">
                                        <span class="btn-play"><span class="blind">재생</span></span>
                                    </div>
                                    <div class="txt-box">
                                        <figcaption class="title">${el.title}</figcaption>
                                        <span class="desc">${el.desc}</span>
                                    </div>
                                </figure>
                            </a>
                        </li>`;
            });
            document.getElementById('mvRecomm').innerHTML = html;
        })


        //무비차트 탭 메뉴

        // $('.nav-list .nav-item').click(function(e){
        //     e.preventDefault();

        //     //const는 재할당 불가능한 요소, let은 재할당 가능
        //     // const target = $(this).attr('href')
        //     const target = $(this).data('target')

        // })
    


    

            


            //icecon 영역 슬라이드
            var swiper4 = new Swiper(".sc-icecon .swiper", {
                slidesPerView: 1,
                // loop: true,
        
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },
            
            });

            //특별관 영역

            $('.special-item').click(function(e){
                e.preventDefault();

                if ($(this).hasClass('active')) {
                    // $(this).children('.img-box').slideUp();
                } 
                else {
                    $('.special-item').removeClass('active');
                    $('.img-box').slideUp();
                    $(this).addClass('active');
                    $(this).children('.img-box').slideDown();
                }
            })


            //top버튼

            $(window).scroll(function(){
                
                if($(this).scrollTop() > 50 ){
                    $('.btn-top').addClass('on');
                    $('.btn-ticket').addClass('on');
                } else{
                    $('.btn-top').removeClass('on');
                    $('.btn-ticket').removeClass('on');
                }
            })

            //상단으로
            $('.btn-top').click(function(){
                
                $('body,html').animate({scrollTop: 0}, 400);
                return false;
            });

            //footer영역

            $('.add-area .brand').click(function(e){
                e.preventDefault();

                if($(this).hasClass('active')){
                    $('.slide-updown').stop().slideUp();
                    $(this).removeClass('active')

                } else{
                    $(this).addClass('active')
                    $('.slide-updown').stop().slideDown();
                }
            })


    })
    
    