.owl - carousel.owl - wrapper: after { content: ".";display: block;clear: both;visibility: hidden;line - height: 0;height: 0 }.owl - carousel { display: none;position: relative;width: 100 % ; - ms - touch - action: pan - y }.owl - carousel.owl - wrapper { display: none;position: relative; - webkit - transform: translate3d(0 px, 0 px, 0 px) }.owl - carousel.owl - wrapper - outer { overflow: hidden;position: relative;width: 100 % }.owl - carousel.owl - wrapper - outer.autoHeight {-webkit - transition: height 500 ms ease - in -out; - moz - transition: height 500 ms ease - in -out; - ms - transition: height 500 ms ease - in -out; - o - transition: height 500 ms ease - in -out;
    transition: height 500 ms ease - in -out }.owl - carousel.owl - item { float: left }.owl - controls.owl - page, .owl - controls.owl - buttons div { cursor: pointer }.owl - controls {-webkit - user - select: none; - khtml - user - select: none; - moz - user - select: none; - ms - user - select: none;
    user - select: none; - webkit - tap - highlight - color: rgba(0, 0, 0, 0) }.grabbing { cursor: url(grabbing.png) 8 8, move }.owl - carousel.owl - wrapper, .owl - carousel.owl - item {-webkit - backface - visibility: hidden; - moz - backface - visibility: hidden; - ms - backface - visibility: hidden; - webkit - transform: translate3d(0, 0, 0); - moz - transform: translate3d(0, 0, 0); - ms - transform: translate3d(0, 0, 0) }.owl - theme.owl - controls { margin - top: 10 px;
    text - align: center }.owl - theme.owl - controls.owl - buttons div { color: #FFF;display: inline - block;zoom: 1; * display: inline;margin: 5 px;padding: 3 px 10 px;font - size: 12 px; - webkit - border - radius: 30 px; - moz - border - radius: 30 px;border - radius: 30 px;background: #869791;filter:Alpha(Opacity= 50);
opacity: .5
}.owl - theme.owl - controls.clickable.owl - buttons div: hover { filter: Alpha(Opacity = 100);opacity: 1;text - decoration: none }.owl - theme.owl - controls.owl - page { display: inline - block;zoom: 1; * display: inline }.owl - theme.owl - controls.owl - page span { display: block;width: 12 px;height: 12 px;margin: 5 px 7 px;filter: Alpha(Opacity = 50);opacity: .5; - webkit - border - radius: 20 px; - moz - border - radius: 20 px;border - radius: 20 px;background: #869791}.owl-theme .owl-controls .owl-page.active span,.owl-theme .owl-controls.clickable .owl-page:hover span{filter:Alpha(Opacity= 100);
opacity: 1
}.owl - theme.owl - controls.owl - page span.owl - numbers { height: auto;width: auto;color: #FFF;padding: 2 px 10 px;font - size: 12 px; - webkit - border - radius: 30 px; - moz - border - radius: 30 px;border - radius: 30 px }.owl - item.loading { min - height: 150 px;
    background: url(AjaxLoader.gif) no - repeat center center }.owl - origin {-webkit - perspective: 1200 px; - webkit - perspective - origin - x: 50 % ; - webkit - perspective - origin - y: 50 % ; - moz - perspective: 1200 px; - moz - perspective - origin - x: 50 % ; - moz - perspective - origin - y: 50 % ;
    perspective: 1200 px }.owl - fade - out { z - index: 10; - webkit - animation: fadeOut .7 s both ease; - moz - animation: fadeOut .7 s both ease;
    animation: fadeOut .7 s both ease }.owl - fade - in {-webkit - animation: fadeIn .7 s both ease; - moz - animation: fadeIn .7 s both ease;animation: fadeIn .7 s both ease }.owl - backSlide - out {-webkit - animation: backSlideOut 1 s both ease; - moz - animation: backSlideOut 1 s both ease;
    animation: backSlideOut 1 s both ease }.owl - backSlide - in {-webkit - animation: backSlideIn 1 s both ease; - moz - animation: backSlideIn 1 s both ease;animation: backSlideIn 1 s both ease }.owl - goDown - out {-webkit - animation: scaleToFade .7 s ease both; - moz - animation: scaleToFade .7 s ease both;
    animation: scaleToFade .7 s ease both }.owl - goDown - in {-webkit - animation: goDown .6 s ease both; - moz - animation: goDown .6 s ease both;animation: goDown .6 s ease both }.owl - fadeUp - in {-webkit - animation: scaleUpFrom .5 s ease both; - moz - animation: scaleUpFrom .5 s ease both;animation: scaleUpFrom .5 s ease both }.owl - fadeUp - out {-webkit - animation: scaleUpTo .5 s ease both; - moz - animation: scaleUpTo .5 s ease both;
    animation: scaleUpTo .5 s ease both }
@ - webkit - keyframes empty { 0 % { opacity: 1 } }
@ - moz - keyframes empty { 0 % { opacity: 1 } }
@keyframes empty { 0 % { opacity: 1 } }
@ - webkit - keyframes fadeIn { 0 % { opacity: 0 }
    100 % { opacity: 1 } }
@ - moz - keyframes fadeIn { 0 % { opacity: 0 }
    100 % { opacity: 1 } }
@keyframes fadeIn { 0 % { opacity: 0 }
    100 % { opacity: 1 } }
@ - webkit - keyframes fadeOut { 0 % { opacity: 1 }
    100 % { opacity: 0 } }
@ - moz - keyframes fadeOut { 0 % { opacity: 1 }
    100 % { opacity: 0 } }
@keyframes fadeOut { 0 % { opacity: 1 }
    100 % { opacity: 0 } }
@ - webkit - keyframes backSlideOut { 25 % { opacity: .5; - webkit - transform: translateZ(-500 px) }
    75 % { opacity: .5; - webkit - transform: translateZ(-500 px) translateX(-200 % ) }
    100 % { opacity: .5; - webkit - transform: translateZ(-500 px) translateX(-200 % ) } }
@ - moz - keyframes backSlideOut { 25 % { opacity: .5; - moz - transform: translateZ(-500 px) }
    75 % { opacity: .5; - moz - transform: translateZ(-500 px) translateX(-200 % ) }
    100 % { opacity: .5; - moz - transform: translateZ(-500 px) translateX(-200 % ) } }
@keyframes backSlideOut { 25 % { opacity: .5;transform: translateZ(-500 px) }
    75 % { opacity: .5;transform: translateZ(-500 px) translateX(-200 % ) }
    100 % { opacity: .5;transform: translateZ(-500 px) translateX(-200 % ) } }
@ - webkit - keyframes backSlideIn { 0 % , 25 % { opacity: .5; - webkit - transform: translateZ(-500 px) translateX(200 % ) }
    75 % { opacity: .5; - webkit - transform: translateZ(-500 px) }
    100 % { opacity: 1; - webkit - transform: translateZ(0) translateX(0) } }
@ - moz - keyframes backSlideIn { 0 % , 25 % { opacity: .5; - moz - transform: translateZ(-500 px) translateX(200 % ) }
    75 % { opacity: .5; - moz - transform: translateZ(-500 px) }
    100 % { opacity: 1; - moz - transform: translateZ(0) translateX(0) } }
@keyframes backSlideIn { 0 % , 25 % { opacity: .5;transform: translateZ(-500 px) translateX(200 % ) }
    75 % { opacity: .5;transform: translateZ(-500 px) }
    100 % { opacity: 1;transform: translateZ(0) translateX(0) } }
@ - webkit - keyframes scaleToFade { to { opacity: 0; - webkit - transform: scale(.8) } }
@ - moz - keyframes scaleToFade { to { opacity: 0; - moz - transform: scale(.8) } }
@keyframes scaleToFade { to { opacity: 0;transform: scale(.8) } }
@ - webkit - keyframes goDown { from {-webkit - transform: translateY(-100 % ) } }
@ - moz - keyframes goDown { from {-moz - transform: translateY(-100 % ) } }
@keyframes goDown { from { transform: translateY(-100 % ) } }
@ - webkit - keyframes scaleUpFrom { from { opacity: 0; - webkit - transform: scale(1.5) } }
@ - moz - keyframes scaleUpFrom { from { opacity: 0; - moz - transform: scale(1.5) } }
@keyframes scaleUpFrom { from { opacity: 0;transform: scale(1.5) } }
@ - webkit - keyframes scaleUpTo { to { opacity: 0; - webkit - transform: scale(1.5) } }
@ - moz - keyframes scaleUpTo { to { opacity: 0; - moz - transform: scale(1.5) } }
@keyframes scaleUpTo { to { opacity: 0;transform: scale(1.5) } }