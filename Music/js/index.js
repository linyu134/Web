// 事件中心，监听全局事件
const EventListener = {
    on: function (type, handler) {
        $(document).on(type, handler)
    },
    fire: function (type, data) {
        $(document).trigger(type, data)
    }
}


let Footer = {
    //初始化
    init: function () {
        //获取当前footer
        this.$footer = $('footer')
        this.$box = $('footer .box')
        this.$ul = $('footer ul')
        this.$backBtn = $('.icon-back')
        this.$forwardBtn = $('.icon-forward')
        this.isToStart = true
        this.isToEnd = false
        this.isAnimate = false
        this.render()
        this.bind()
    },
    //绑定事件
    bind: function () {
        let _this = this
        //箭头减去一个box除以li进行切换
        //left大于容器的宽度就会完成不切屏
        this.$forwardBtn.on('click', function () {
            if (_this.isAnimate) {
                return
            }
            _this.forward()
        })
        this.$backBtn.on('click', function () {
            if (_this.isAnimate) {
                return
            }
            _this.back()
        })
        this.$footer.on('click', 'li', function () {
            $(this).addClass('active')
                .siblings()
                .removeClass('active')
            EventListener.fire('select-chanel', {
                channel_id: $(this).attr('data-channel-id'),
                //标签的name
                channel_name: $(this).attr('data-channel-name')
            })
        })
    },
    //渲染当前页面
    render: function () {
        let _this = this
        //json,调用接口,获取json数据
        $.getJSON('http://api.jirengu.com/fm/getChannels.php')
            .done(function (res) {
                _this.renderFooter(res.channels)
            })
    },
    //渲染数据
    renderFooter: function (data) {
        let _this = this
        //生成对应的html，放到url里面
        data.forEach(function (item) {
            let $item = $(`<li data-channel-id="${item.channel_id}" data-channel-name="${item.name}">
                            <div class="cover"
                                
                                style="background-image: url(https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3c71bc94532c11dfded1b8255b1c05ed/bd3eb13533fa828bf8b6e694f91f4134970a5a2b.jpg);">
                            </div>
                            <h3>怀旧金曲</h3>
                        </li>`)
                //找到ul，放进去html       
            $item.find('h3').text(item.name)
            $item.find('.cover').css({
                backgroundImage: `url(${item.cover_small})`
            })
            _this.$ul.append($item)
        })
        this.setStyle()
    },
    //设置底部图片的样式,给ul设置css样式,找到图片的宽度乘以个数，漏出箭头的地方隐藏掉，用overflow：hidden
    setStyle: function () {
        let itemWidth = this.$ul.find('li').outerWidth(true)
        let count = this.$ul.find('li').length
        // console.log(itemWidth, count)
        this.$ul.css({
            width: itemWidth * count
        })
    },
    back: function () {
        // console.log(this)
        let _this = this
        this.isToEnd = false
        let itemWidth = _this.$ul.find('li').outerWidth(true)
        let itemCount = Math.floor(_this.$box.width() / itemWidth)
        //变成数字
        let ulLeft = parseFloat(_this.$ul.css('left'))
        console.log(itemCount, itemWidth, ulLeft)
        if ((ulLeft + itemCount * itemWidth) > -10) {
            console.log('over')
            _this.isToStart = true
            _this.isAnimate = true
            _this.$ul.animate({
                left: 0
            }, 400, function () {
                _this.isAnimate = false
            })
        }
        if (!_this.isToStart) {
            console.log('sss')
            _this.isAnimate = true
            _this.$ul.animate({
                left: '+=' + itemCount * itemWidth
            }, 400, function () {
                _this.isAnimate = false
            })
        }
        console.log(parseFloat(_this.$ul.css('left')))
    },
    forward: function () {
        // console.log(this)
        let _this = this
        _this.isToStart = false
        let itemWidth = _this.$ul.find('li').outerWidth(true)
        let itemCount = Math.floor(_this.$box.width() / itemWidth)
        // console.log(itemCount, itemWidth)
        let boxWidth = parseFloat(_this.$box.width())
        let ulLeft = parseFloat(_this.$ul.css('left'))
        if ((boxWidth - ulLeft >= _this.$ul.width())) {
            console.log('over')
            _this.isToEnd = true
        }
        if (!_this.isToEnd) {
            _this.isAnimate = true
            _this.$ul.animate({
                left: '-=' + itemCount * itemWidth

            }, 400, function () {
                _this.isAnimate = false
            })
        }
    }
}

let Fm = {
    init: function () {
        this.$container = $('#page-music')
        this.audio = new Audio()
        this.audio.autoplay = true
        this.statusInterval = null
        this.bind()
    },
    bind: function () {
        let _this = this
        EventListener.on('select-chanel', function (e, data) {
            console.log(data)
            _this.channel_id = data.channel_id
            _this.channel_name = data.channel_name
            _this.loadMusic()
        })
        //播放按钮事件
        this.$container.find('.btn-play').on('click', function () {
            //如果有播放的class，改成暂停状态  用hasClass
            if ($(this).hasClass('icon-play')) {
                $(this).removeClass('icon-play').addClass('icon-pause')
                //播放
                _this.audio.play()
            } else {
                $(this).removeClass('icon-pause').addClass('icon-play')
                _this.audio.pause()
            }
        })
        //下一曲，获取localMUsic，setmusic
        this.$container.find('.btn-next').on('click', function () {
            _this.loadMusic()
        })
        //绑定事件
        this.$container.find('.progress-bar').on('click', function (e) {
            let currentX = e.offsetX
            let width = parseFloat($(this).css('width'))
            let percent = Math.floor(currentX / width * 100)
            // console.log(percent)
            $(this).find('.current-bar').css('width', percent + '%')
            _this.audio.currentTime = _this.audio.duration * percent / 100
        })
        //如果在播放
        this.audio.addEventListener('play', function () {
            if (_this.statusInterval) {
                clearInterval(_this.statusInterval)
            }
            _this.statusInterval = setInterval(function () {
                _this.updateStatus()
            }, 500)
        })
        //如果在暂停
        this.audio.addEventListener('pause', function () {
            if (_this.statusInterval) {
                clearInterval(_this.statusInterval)
            }
            clearInterval(_this.statusInterval)
        })
        this.audio.addEventListener('ended', function () {
            _this.loadMusic()
        })
    },
    loadMusic() {
        let _this = this
        //获得歌曲对象，根据id
        $.getJSON('//api.jirengu.com/fm/getSong.php', {
            channel: _this.channel_id
        }).done(function (res) {
            // console.log(res)
            _this.song = res.song[0]
            console.log(_this.song)
            _this.setMusic()
            _this.loadLyric()
        }).fail(function () {
            console.log('song fail...')
        })
    },
    //设置数据 ，给音乐一个对象，audio audio.play=true 音乐播放src等于song的url
    setMusic() {
        //给音乐一个对象，audio audio.play=true 音乐播放src等于song的url
        this.audio.src = this.song.url
        //标签
        this.$container.find('.tag').text(this.channel_name)
        //标题
        this.$container.find('.detail h1').text(this.song.title)
        //作者
        this.$container.find('.author').text(this.song.artist)
        //上面的图片更改
        this.$container.find('figure').css('background-image', `url(${this.song.picture})`)
        //背景图片改成song的背景图片
        $('.bg').css('background-image', `url(${this.song.picture})`)
        //重置按钮的状态
        this.$container.find('.btn-play').removeClass('icon-play').addClass('icon-pause')
    },
    //歌词,当前时间和对应的字符串对应，对歌词进行切分 字符串切成key——value
    //key就是当前的时间 ,匹配秒的时间
    loadLyric() {
        let _this = this
        $.getJSON('//api.jirengu.com/fm/getLyric.php', {
            sid: _this.song.sid
        }).done(function (res) {
            // console.log(res)
            _this.lyric = res.lyric
            // console.log(_this.lyric)
            _this.setLyricObj()
        }).fail(function () {
            console.log('lyric fail...')
            _this.lyricObj = {
                '00:00': '该歌曲暂无歌词'
            }
        })
    },
    setLyricObj() {
        //切分,把字符串解析成一个对象，对象的key就是时间
        let lyric = this.lyric.split('\n')
        let lyricObj = {}
        lyric.forEach(function (line) {
            // [01:22][02:22]
            // console.log(line)
            //match取出数组时间
            let times = line.match(/\d{2}:\d{2}/g)
            //repalce去掉中括号里面的东西
            let str = line.replace(/\[.+?\]/g, '')
            // console.log(str)
            if (Array.isArray(times)) {
                lyricObj[times] = str
            }
            // console.log(times)
        })
        this.lyricObj = lyricObj
    },
    //更新播放的状态
    updateStatus() {
        let min = Math.floor(this.audio.currentTime / 60)
        let seconds = Math.floor(this.audio.currentTime % 60)
        seconds = seconds.toString().length === 2 ? seconds.toString() : '0' + seconds.toString()
        let timeStr = min + ':' + seconds
        // console.log(timeStr)
        //时间
        this.$container.find('.current-time').text(timeStr)
        //时间条宽度，currentTime是当前时间，duration时间总长度
        //用transition： width .8s 进行渐变
        let percent = Math.floor((this.audio.currentTime / this.audio.duration) * 100)
        this.$container.find('.current-bar').css({
            width: percent + '%'
        })

        //显示歌词
        let lyric = this.lyricObj['0' + timeStr] || 'undefined'
        if (lyric !== 'undefined') {
            console.log(this.lyricObj['0' + timeStr])
            //插入boomText插件
            this.$container.find('.lyric').text(lyric).boomText()
        }
    }
}



const App = {
    init: function () {
        Fm.init()
        Footer.init()
    }
}

App.init()


//炫酷插件，把每一个字进行拆分，用span标签，然后返回一个数组，用join('')变成字符串
$.fn.boomText = function (type = 'rotateInDownLeft') {
    $(this).html(function () {
        let arr = $(this).text().split('').map(function (e) {
            return `<span class="boomText">${e}</span>`
        })
        return arr.join('')
    })
    let index = 0
    let $boomText = $(this).find('span')
    //每过300毫秒加一个class  如果大于字的大小就停掉
    let clock = setInterval(function () {
        $boomText.eq(index).addClass('animated ' + type)
        index++
        if (index > $boomText.length) {
            //clearInterval停止执行
            clearInterval(clock)
        }
    }, 300)
}