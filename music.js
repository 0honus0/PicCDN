let dic=document.creatElement('player')
div.id='player'
document.body.appendChild(div)
const ap=new Aplayer({
    container: document.getElementById('player'),
    fixed:true,
    lrcType: 3,
    audio: [{
        name: "Almost Lover",
        artist: "A Fine Frenzy",
        url: "https://sharelist.honus.top/honus/music/song/A%20Fine%20Frenzy%20-%20Almost%20Lover.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/A%20Fine%20Frenzy%20-%20Almost%20Lover.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/A%20Fine%20Frenzy%20-%20Almost%20Lover.lrc"
        },
        {
        name: "Legends Never Die",
        artist: "Against the Current",
        url: "https://sharelist.honus.top/honus/music/song/Against%20the%20Current%20-%20Legends%20Never%20Die.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Against%20the%20Current%20-%20Legends%20Never%20Die.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Against%20the%20Current%20-%20Legends%20Never%20Die.lrc"
        },
        {
        name: "なんでもないや 没什么大不了的（Cover：Radwimps）",
        artist: "Akie秋绘",
        url: "https://sharelist.honus.top/honus/music/song/Akie%E7%A7%8B%E7%BB%98%20-%20%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84%C2%A0%E6%B2%A1%E4%BB%80%E4%B9%88%E5%A4%A7%E4%B8%8D%E4%BA%86%E7%9A%84%EF%BC%88Cover%EF%BC%9ARadwimps%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Akie%E7%A7%8B%E7%BB%98%20-%20%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84%C2%A0%E6%B2%A1%E4%BB%80%E4%B9%88%E5%A4%A7%E4%B8%8D%E4%BA%86%E7%9A%84%EF%BC%88Cover%EF%BC%9ARadwimps%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Akie%E7%A7%8B%E7%BB%98%20-%20%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82%E3%81%AA%E3%81%84%E3%82%84%C2%A0%E6%B2%A1%E4%BB%80%E4%B9%88%E5%A4%A7%E4%B8%8D%E4%BA%86%E7%9A%84%EF%BC%88Cover%EF%BC%9ARadwimps%EF%BC%89.lrc"
        },
        {
        name: "On My Way",
        artist: "Alan Walker Sabrina Carpenter Farruko",
        url: "https://sharelist.honus.top/honus/music/song/Alan%20Walker%20Sabrina%20Carpenter%20Farruko%20-%20On%20My%20Way.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Alan%20Walker%20Sabrina%20Carpenter%20Farruko%20-%20On%20My%20Way.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Alan%20Walker%20Sabrina%20Carpenter%20Farruko%20-%20On%20My%20Way.lrc"
        },
        {
        name: "Outrunning Karma",
        artist: "Alec Benjamin",
        url: "https://sharelist.honus.top/honus/music/song/Alec%20Benjamin%20-%20Outrunning%20Karma.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Alec%20Benjamin%20-%20Outrunning%20Karma.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Alec%20Benjamin%20-%20Outrunning%20Karma.lrc"
        },
        {
        name: "Let Me Down Slowly",
        artist: "Alec Benjamin Alessia Cara",
        url: "https://sharelist.honus.top/honus/music/song/Alec%20Benjamin%20Alessia%20Cara%20-%20Let%20Me%20Down%20Slowly.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Alec%20Benjamin%20Alessia%20Cara%20-%20Let%20Me%20Down%20Slowly.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Alec%20Benjamin%20Alessia%20Cara%20-%20Let%20Me%20Down%20Slowly.lrc"
        },
        {
        name: "Burn",
        artist: "Angelika Vee",
        url: "https://sharelist.honus.top/honus/music/song/Angelika%20Vee%20-%20Burn.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/Angelika%20Vee%20-%20Burn.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Angelika%20Vee%20-%20Burn.lrc"
        },
        {
        name: "Best of 2017 Medley",
        artist: "Anthem Lights",
        url: "https://sharelist.honus.top/honus/music/song/Anthem%20Lights%20-%20Best%20of%202017%20Medley.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Anthem%20Lights%20-%20Best%20of%202017%20Medley.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Anthem%20Lights%20-%20Best%20of%202017%20Medley.lrc"
        },
        {
        name: "Something Just Like This",
        artist: "Anthony Keyrouz Romy Wave",
        url: "https://sharelist.honus.top/honus/music/song/Anthony%20Keyrouz%20Romy%20Wave%20-%20Something%20Just%20Like%20This.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Anthony%20Keyrouz%20Romy%20Wave%20-%20Something%20Just%20Like%20This.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Anthony%20Keyrouz%20Romy%20Wave%20-%20Something%20Just%20Like%20This.lrc"
        },
        {
        name: "Innocence",
        artist: "Avril Lavigne",
        url: "https://sharelist.honus.top/honus/music/song/Avril%20Lavigne%20-%20Innocence.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Avril%20Lavigne%20-%20Innocence.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Avril%20Lavigne%20-%20Innocence.lrc"
        },
        {
        name: "Annie's Wonderland",
        artist: "Bandari",
        url: "https://sharelist.honus.top/honus/music/song/Bandari%20-%20Annie%27s%20Wonderland.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Bandari%20-%20Annie%27s%20Wonderland.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Bandari%20-%20Annie%27s%20Wonderland.lrc"
        },
        {
        name: "Summertime Sadness (Basic Tape Remix)",
        artist: "Basic Tape Lana Del Rey",
        url: "https://sharelist.honus.top/honus/music/song/Basic%20Tape%20Lana%20Del%20Rey%20-%20Summertime%20Sadness%20%28Basic%20Tape%20Remix%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Basic%20Tape%20Lana%20Del%20Rey%20-%20Summertime%20Sadness%20%28Basic%20Tape%20Remix%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Basic%20Tape%20Lana%20Del%20Rey%20-%20Summertime%20Sadness%20%28Basic%20Tape%20Remix%29.lrc"
        },
        {
        name: "Open Your Eyes (Deep Blue Songspell)",
        artist: "Bea Miller",
        url: "https://sharelist.honus.top/honus/music/song/Bea%20Miller%20-%20Open%20Your%20Eyes%20%28Deep%20Blue%20Songspell%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Bea%20Miller%20-%20Open%20Your%20Eyes%20%28Deep%20Blue%20Songspell%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Bea%20Miller%20-%20Open%20Your%20Eyes%20%28Deep%20Blue%20Songspell%29.lrc"
        },
        {
        name: "i hate u i love u",
        artist: "Biscuits",
        url: "https://sharelist.honus.top/honus/music/song/Biscuits%20-%20i%20hate%20u%20i%20love%20u.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Biscuits%20-%20i%20hate%20u%20i%20love%20u.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Biscuits%20-%20i%20hate%20u%20i%20love%20u.lrc"
        },
        {
        name: "Let Her Go",
        artist: "Biscuits",
        url: "https://sharelist.honus.top/honus/music/song/Biscuits%20-%20Let%20Her%20Go.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Biscuits%20-%20Let%20Her%20Go.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Biscuits%20-%20Let%20Her%20Go.lrc"
        },
        {
        name: "We Can't Stop",
        artist: "Boyce Avenue Bea Miller",
        url: "https://sharelist.honus.top/honus/music/song/Boyce%20Avenue%20Bea%20Miller%20-%20We%20Can%27t%20Stop.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/Boyce%20Avenue%20Bea%20Miller%20-%20We%20Can%27t%20Stop.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Boyce%20Avenue%20Bea%20Miller%20-%20We%20Can%27t%20Stop.lrc"
        },
        {
        name: "Falling Into A Dream",
        artist: "Brian Tyler",
        url: "https://sharelist.honus.top/honus/music/song/Brian%20Tyler%20-%20Falling%20Into%20A%20Dream.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Brian%20Tyler%20-%20Falling%20Into%20A%20Dream.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Brian%20Tyler%20-%20Falling%20Into%20A%20Dream.lrc"
        },
        {
        name: "类少年爱情故事（钢琴版）",
        artist: "CANT太子",
        url: "https://sharelist.honus.top/honus/music/song/CANT%E5%A4%AA%E5%AD%90%20-%20%E7%B1%BB%E5%B0%91%E5%B9%B4%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88%E9%92%A2%E7%90%B4%E7%89%88%EF%BC%89.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/CANT%E5%A4%AA%E5%AD%90%20-%20%E7%B1%BB%E5%B0%91%E5%B9%B4%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88%E9%92%A2%E7%90%B4%E7%89%88%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/CANT%E5%A4%AA%E5%AD%90%20-%20%E7%B1%BB%E5%B0%91%E5%B9%B4%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88%E9%92%A2%E7%90%B4%E7%89%88%EF%BC%89.lrc"
        },
        {
        name: "Attention",
        artist: "Charlie Puth",
        url: "https://sharelist.honus.top/honus/music/song/Charlie%20Puth%20-%20Attention.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Charlie%20Puth%20-%20Attention.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Charlie%20Puth%20-%20Attention.lrc"
        },
        {
        name: "Without Him",
        artist: "Christina Grimmie",
        url: "https://sharelist.honus.top/honus/music/song/Christina%20Grimmie%20-%20Without%20Him.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Christina%20Grimmie%20-%20Without%20Him.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Christina%20Grimmie%20-%20Without%20Him.lrc"
        },
        {
        name: "一百万个可能",
        artist: "Christine Welch",
        url: "https://sharelist.honus.top/honus/music/song/Christine%20Welch%20-%20%E4%B8%80%E7%99%BE%E4%B8%87%E4%B8%AA%E5%8F%AF%E8%83%BD.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Christine%20Welch%20-%20%E4%B8%80%E7%99%BE%E4%B8%87%E4%B8%AA%E5%8F%AF%E8%83%BD.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Christine%20Welch%20-%20%E4%B8%80%E7%99%BE%E4%B8%87%E4%B8%AA%E5%8F%AF%E8%83%BD.lrc"
        },
        {
        name: "Hello",
        artist: "Conor Maynard",
        url: "https://sharelist.honus.top/honus/music/song/Conor%20Maynard%20-%20Hello.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Conor%20Maynard%20-%20Hello.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Conor%20Maynard%20-%20Hello.lrc"
        },
        {
        name: "Stitches",
        artist: "Conor Maynard",
        url: "https://sharelist.honus.top/honus/music/song/Conor%20Maynard%20-%20Stitches.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Conor%20Maynard%20-%20Stitches.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Conor%20Maynard%20-%20Stitches.lrc"
        },
        {
        name: "Closer (Conor Maynard Cover)",
        artist: "Conor Maynard Alex Aiono The Chainsmokers Halsey",
        url: "https://sharelist.honus.top/honus/music/song/Conor%20Maynard%20Alex%20Aiono%20The%20Chainsmokers%20Halsey%20-%20Closer%20%28Conor%20Maynard%20Cover%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Cubi%20%E5%A4%9A%E5%A4%9AAydos%20-%20BINGBIAN%E7%97%85%E5%8F%98%EF%BC%88prodjurrivh%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Conor%20Maynard%20Alex%20Aiono%20The%20Chainsmokers%20Halsey%20-%20Closer%20%28Conor%20Maynard%20Cover%29.lrc"
        },
        {
        name: "Take me hand",
        artist: "DAISHI DANCE Cecile Corbel",
        url: "https://sharelist.honus.top/honus/music/song/DAISHI%20DANCE%20Cecile%20Corbel%20-%20Take%20me%20hand.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/DAISHI%20DANCE%20Cecile%20Corbel%20-%20Take%20me%20hand.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/DAISHI%20DANCE%20Cecile%20Corbel%20-%20Take%20me%20hand.lrc"
        },
        {
        name: "Time Travel (Moonnight Remix)",
        artist: "Daley",
        url: "https://sharelist.honus.top/honus/music/song/Daley%20-%20Time%20Travel%20%28Moonnight%20Remix%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Daley%20-%20Time%20Travel%20%28Moonnight%20Remix%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Daley%20-%20Time%20Travel%20%28Moonnight%20Remix%29.lrc"
        },
        {
        name: "Booty Music",
        artist: "Deep Side",
        url: "https://sharelist.honus.top/honus/music/song/Deep%20Side%20-%20Booty%20Music.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Deep%20Side%20-%20Booty%20Music.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Deep%20Side%20-%20Booty%20Music.lrc"
        },
        {
        name: "Purple Passion",
        artist: "Diana Boncheva",
        url: "https://sharelist.honus.top/honus/music/song/Diana%20Boncheva%20-%20Purple%20Passion.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/Diana%20Boncheva%20-%20Purple%20Passion.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Diana%20Boncheva%20-%20Purple%20Passion.lrc"
        },
        {
        name: "全部都是你",
        artist: "DP龙猪 宝楽CNBALLER CLOUDWANG 王云",
        url: "https://sharelist.honus.top/honus/music/song/DP%E9%BE%99%E7%8C%AA%20%E5%AE%9D%E6%A5%BDCNBALLER%20CLOUDWANG%20%E7%8E%8B%E4%BA%91%20-%20%E5%85%A8%E9%83%A8%E9%83%BD%E6%98%AF%E4%BD%A0.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/DP%E9%BE%99%E7%8C%AA%20%E5%AE%9D%E6%A5%BDCNBALLER%20CLOUDWANG%20%E7%8E%8B%E4%BA%91%20-%20%E5%85%A8%E9%83%A8%E9%83%BD%E6%98%AF%E4%BD%A0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/DP%E9%BE%99%E7%8C%AA%20%E5%AE%9D%E6%A5%BDCNBALLER%20CLOUDWANG%20%E7%8E%8B%E4%BA%91%20-%20%E5%85%A8%E9%83%A8%E9%83%BD%E6%98%AF%E4%BD%A0.lrc"
        },
        {
        name: "Love Me Like You Do",
        artist: "Ellie Goulding",
        url: "https://sharelist.honus.top/honus/music/song/Ellie%20Goulding%20-%20Love%20Me%20Like%20You%20Do.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Ellie%20Goulding%20-%20Love%20Me%20Like%20You%20Do.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Ellie%20Goulding%20-%20Love%20Me%20Like%20You%20Do.lrc"
        },
        {
        name: "嚣张",
        artist: "en",
        url: "https://sharelist.honus.top/honus/music/song/en%20-%20%E5%9A%A3%E5%BC%A0.flac",
        cover: "https://sharelist.honus.top/honus/music/image/en%20-%20%E5%9A%A3%E5%BC%A0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/en%20-%20%E5%9A%A3%E5%BC%A0.lrc"
        },
        {
        name: "Calling You",
        artist: "Eva The Heartmaker",
        url: "https://sharelist.honus.top/honus/music/song/Eva%20The%20Heartmaker%20-%20Calling%20You.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Eva%20The%20Heartmaker%20-%20Calling%20You.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Eva%20The%20Heartmaker%20-%20Calling%20You.lrc"
        },
        {
        name: "月光 (Moonlight)",
        artist: "M",
        url: "https://sharelist.honus.top/honus/music/song/EXO-M%20-%20%E6%9C%88%E5%85%89%20%28Moonlight%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/EXO-M%20-%20%E6%9C%88%E5%85%89%20%28Moonlight%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/EXO-M%20-%20%E6%9C%88%E5%85%89%20%28Moonlight%29.lrc"
        },
        {
        name: "We Won't Be Alone (feat",
        artist: "Feint Laura Brehm",
        url: "https://sharelist.honus.top/honus/music/song/Feint%20Laura%20Brehm%20-%20We%20Won%27t%20Be%20Alone%20%28feat%20Laura%20Brehm%29.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Feint%20Laura%20Brehm%20-%20We%20Won%27t%20Be%20Alone%20%28feat%20Laura%20Brehm%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Feint%20Laura%20Brehm%20-%20We%20Won%27t%20Be%20Alone%20%28feat%20Laura%20Brehm%29.lrc"
        },
        {
        name: "Hurricane",
        artist: "Fleurie",
        url: "https://sharelist.honus.top/honus/music/song/Fleurie%20-%20Hurricane.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Fleurie%20-%20Hurricane.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Fleurie%20-%20Hurricane.lrc"
        },
        {
        name: "光年之外",
        artist: "G.E.M.邓紫棋",
        url: "https://sharelist.honus.top/honus/music/song/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.flac",
        cover: "https://sharelist.honus.top/honus/music/image/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.lrc"
        },
        {
        name: "来自天堂的魔鬼",
        artist: "G.E.M.邓紫棋",
        url: "https://sharelist.honus.top/honus/music/song/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.flac",
        cover: "https://sharelist.honus.top/honus/music/image/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/GEM%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.lrc"
        },
        {
        name: "Anyone Of Us (Stupid Mistake)",
        artist: "Gareth Gates",
        url: "https://sharelist.honus.top/honus/music/song/Gareth%20Gates%20-%20Anyone%20Of%20Us%20%28Stupid%20Mistake%29.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Gareth%20Gates%20-%20Anyone%20Of%20Us%20%28Stupid%20Mistake%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Gareth%20Gates%20-%20Anyone%20Of%20Us%20%28Stupid%20Mistake%29.lrc"
        },
        {
        name: "With You All The Time",
        artist: "Gareth Gates",
        url: "https://sharelist.honus.top/honus/music/song/Gareth%20Gates%20-%20With%20You%20All%20The%20Time.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Gareth%20Gates%20-%20With%20You%20All%20The%20Time.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Gareth%20Gates%20-%20With%20You%20All%20The%20Time.lrc"
        },
        {
        name: "Far Away From Home",
        artist: "Groove Coverage",
        url: "https://sharelist.honus.top/honus/music/song/Groove%20Coverage%20-%20Far%20Away%20From%20Home.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Groove%20Coverage%20-%20Far%20Away%20From%20Home.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Groove%20Coverage%20-%20Far%20Away%20From%20Home.lrc"
        },
        {
        name: "Control",
        artist: "Halsey",
        url: "https://sharelist.honus.top/honus/music/song/Halsey%20-%20Control.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Halsey%20-%20Control.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Halsey%20-%20Control.lrc"
        },
        {
        name: "Gasoline",
        artist: "Halsey",
        url: "https://sharelist.honus.top/honus/music/song/Halsey%20-%20Gasoline.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Halsey%20-%20Gasoline.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Halsey%20-%20Gasoline.lrc"
        },
        {
        name: "복숭아",
        artist: "IU",
        url: "https://sharelist.honus.top/honus/music/song/IU%20-%20%EB%B3%B5%EC%88%AD%EC%95%84.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/IU%20-%20%EB%B3%B5%EC%88%AD%EC%95%84.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/IU%20-%20%EB%B3%B5%EC%88%AD%EC%95%84.lrc"
        },
        {
        name: "The Last String",
        artist: "Jacoo",
        url: "https://sharelist.honus.top/honus/music/song/Jacoo%20-%20The%20Last%20String.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/Jacoo%20-%20The%20Last%20String.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Jacoo%20-%20The%20Last%20String.lrc"
        },
        {
        name: "Shy",
        artist: "Jai Waetford",
        url: "https://sharelist.honus.top/honus/music/song/Jai%20Waetford%20-%20Shy.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Jai%20Waetford%20-%20Shy.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Jai%20Waetford%20-%20Shy.lrc"
        },
        {
        name: "As Long As You Love Me",
        artist: "Justin Bieber Big Sean",
        url: "https://sharelist.honus.top/honus/music/song/Justin%20Bieber%20Big%20Sean%20-%20As%20Long%20As%20You%20Love%20Me.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Justin%20Bieber%20Big%20Sean%20-%20As%20Long%20As%20You%20Love%20Me.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Justin%20Bieber%20Big%20Sean%20-%20As%20Long%20As%20You%20Love%20Me.lrc"
        },
        {
        name: "Take Me Away",
        artist: "Kazlo Alexa Lusader",
        url: "https://sharelist.honus.top/honus/music/song/Kazlo%20Alexa%20Lusader%20-%20Take%20Me%20Away.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Kazlo%20Alexa%20Lusader%20-%20Take%20Me%20Away.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Kazlo%20Alexa%20Lusader%20-%20Take%20Me%20Away.lrc"
        },
        {
        name: "Advice",
        artist: "Kehlani",
        url: "https://sharelist.honus.top/honus/music/song/Kehlani%20-%20Advice.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Kehlani%20-%20Advice.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Kehlani%20-%20Advice.lrc"
        },
        {
        name: "Despacito (Remix)",
        artist: "Luis Fonsi Daddy Yankee Justin Bieber",
        url: "https://sharelist.honus.top/honus/music/song/Luis%20Fonsi%20Daddy%20Yankee%20Justin%20Bieber%20-%20Despacito%20%28Remix%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Luis%20Fonsi%20Daddy%20Yankee%20Justin%20Bieber%20-%20Despacito%20%28Remix%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Luis%20Fonsi%20Daddy%20Yankee%20Justin%20Bieber%20-%20Despacito%20%28Remix%29.lrc"
        },
        {
        name: "The Day You Went Away",
        artist: "M2M",
        url: "https://sharelist.honus.top/honus/music/song/M2M%20-%20The%20Day%20You%20Went%20Away.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/M2M%20-%20The%20Day%20You%20Went%20Away.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/M2M%20-%20The%20Day%20You%20Went%20Away.lrc"
        },
        {
        name: "Dusk Till Dawn",
        artist: "MADILYN",
        url: "https://sharelist.honus.top/honus/music/song/MADILYN%20-%20Dusk%20Till%20Dawn.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/MADILYN%20-%20Dusk%20Till%20Dawn.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/MADILYN%20-%20Dusk%20Till%20Dawn.lrc"
        },
        {
        name: "Safe and Sound",
        artist: "MADILYN",
        url: "https://sharelist.honus.top/honus/music/song/MADILYN%20-%20Safe%20and%20Sound.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/MADILYN%20-%20Safe%20and%20Sound.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/MADILYN%20-%20Safe%20and%20Sound.lrc"
        },
        {
        name: "I Need Your Love",
        artist: "MADILYN Jake Coco",
        url: "https://sharelist.honus.top/honus/music/song/MADILYN%20Jake%20Coco%20-%20I%20Need%20Your%20Love.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/MADILYN%20Jake%20Coco%20-%20I%20Need%20Your%20Love.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/MADILYN%20Jake%20Coco%20-%20I%20Need%20Your%20Love.lrc"
        },
        {
        name: "Burning",
        artist: "Maria Arredondo",
        url: "https://sharelist.honus.top/honus/music/song/Maria%20Arredondo%20-%20Burning.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Maria%20Arredondo%20-%20Burning.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Maria%20Arredondo%20-%20Burning.lrc"
        },
        {
        name: "First Day Of My Life",
        artist: "Melanie C",
        url: "https://sharelist.honus.top/honus/music/song/Melanie%20C%20-%20First%20Day%20Of%20My%20Life.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Melanie%20C%20-%20First%20Day%20Of%20My%20Life.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Melanie%20C%20-%20First%20Day%20Of%20My%20Life.lrc"
        },
        {
        name: "病名は愛だった",
        artist: "Neru 鏡音リン 鏡音レン",
        url: "https://sharelist.honus.top/honus/music/song/Neru%20%E9%8F%A1%E9%9F%B3%E3%83%AA%E3%83%B3%20%E9%8F%A1%E9%9F%B3%E3%83%AC%E3%83%B3%20-%20%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Neru%20%E9%8F%A1%E9%9F%B3%E3%83%AA%E3%83%B3%20%E9%8F%A1%E9%9F%B3%E3%83%AC%E3%83%B3%20-%20%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Neru%20%E9%8F%A1%E9%9F%B3%E3%83%AA%E3%83%B3%20%E9%8F%A1%E9%9F%B3%E3%83%AC%E3%83%B3%20-%20%E7%97%85%E5%90%8D%E3%81%AF%E6%84%9B%E3%81%A0%E3%81%A3%E3%81%9F.lrc"
        },
        {
        name: "That Girl",
        artist: "Olly Murs",
        url: "https://sharelist.honus.top/honus/music/song/Olly%20Murs%20-%20That%20Girl.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Olly%20Murs%20-%20That%20Girl.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Olly%20Murs%20-%20That%20Girl.lrc"
        },
        {
        name: "The Saltwater Room",
        artist: "Owl City Breanne Düren",
        url: "https://sharelist.honus.top/honus/music/song/Owl%20City%20Breanne%20D%C3%BCren%20-%20The%20Saltwater%20Room.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Owl%20City%20Breanne%20D%C3%BCren%20-%20The%20Saltwater%20Room.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Owl%20City%20Breanne%20D%C3%BCren%20-%20The%20Saltwater%20Room.lrc"
        },
        {
        name: "The truth that you leave",
        artist: "Pianoboy高至豪",
        url: "https://sharelist.honus.top/honus/music/song/Pianoboy%E9%AB%98%E8%87%B3%E8%B1%AA%20-%20The%C2%A0truth%C2%A0that%C2%A0you%C2%A0leave.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Pianoboy%E9%AB%98%E8%87%B3%E8%B1%AA%20-%20The%C2%A0truth%C2%A0that%C2%A0you%C2%A0leave.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Pianoboy%E9%AB%98%E8%87%B3%E8%B1%AA%20-%20The%C2%A0truth%C2%A0that%C2%A0you%C2%A0leave.lrc"
        },
        {
        name: "Waking up (Acoustic)",
        artist: "PVRIS",
        url: "https://sharelist.honus.top/honus/music/song/PVRIS%20-%20Waking%20up%20%28Acoustic%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/PVRIS%20-%20Waking%20up%20%28Acoustic%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/PVRIS%20-%20Waking%20up%20%28Acoustic%29.lrc"
        },
        {
        name: "Wildest Dreams (R3hab Extended Remix)",
        artist: "R3hab Taylor Swift",
        url: "https://sharelist.honus.top/honus/music/song/R3hab%20Taylor%20Swift%20-%20Wildest%20Dreams%20%28R3hab%20Extended%20Remix%29.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/R3hab%20Taylor%20Swift%20-%20Wildest%20Dreams%20%28R3hab%20Extended%20Remix%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/R3hab%20Taylor%20Swift%20-%20Wildest%20Dreams%20%28R3hab%20Extended%20Remix%29.lrc"
        },
        {
        name: "前前前世 (movie ver",
        artist: "RADWIMPS",
        url: "https://sharelist.honus.top/honus/music/song/RADWIMPS%20-%20%E5%89%8D%E5%89%8D%E5%89%8D%E4%B8%96%20%28movie%20ver%29.flac",
        cover: "https://sharelist.honus.top/honus/music/image/RADWIMPS%20-%20%E5%89%8D%E5%89%8D%E5%89%8D%E4%B8%96%20%28movie%20ver%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/RADWIMPS%20-%20%E5%89%8D%E5%89%8D%E5%89%8D%E4%B8%96%20%28movie%20ver%29.lrc"
        },
        {
        name: "Scarborough Fair",
        artist: "Sarah Brightman",
        url: "https://sharelist.honus.top/honus/music/song/Sarah%20Brightman%20-%20Scarborough%20Fair.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Sarah%20Brightman%20-%20Scarborough%20Fair.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Sarah%20Brightman%20-%20Scarborough%20Fair.lrc"
        },
        {
        name: "My Dilemma",
        artist: "Selena Gomez & The Scene",
        url: "https://sharelist.honus.top/honus/music/song/Selena%20Gomez%20%26%20The%20Scene%20-%20My%20Dilemma.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Selena%20Gomez%20%26%20The%20Scene%20-%20My%20Dilemma.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Selena%20Gomez%20%26%20The%20Scene%20-%20My%20Dilemma.lrc"
        },
        {
        name: "Honest",
        artist: "Shawn Mendes",
        url: "https://sharelist.honus.top/honus/music/song/Shawn%20Mendes%20-%20Honest.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/Shawn%20Mendes%20-%20Honest.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Shawn%20Mendes%20-%20Honest.lrc"
        },
        {
        name: "Breathless",
        artist: "Shayne Ward",
        url: "https://sharelist.honus.top/honus/music/song/Shayne%20Ward%20-%20Breathless.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Shayne%20Ward%20-%20Breathless.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Shayne%20Ward%20-%20Breathless.lrc"
        },
        {
        name: "Until You",
        artist: "Shayne Ward",
        url: "https://sharelist.honus.top/honus/music/song/Shayne%20Ward%20-%20Until%20You.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Shayne%20Ward%20-%20Until%20You.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Shayne%20Ward%20-%20Until%20You.lrc"
        },
        {
        name: "Illusionary Daytime",
        artist: "Shirfine",
        url: "https://sharelist.honus.top/honus/music/song/Shirfine%20-%20Illusionary%20Daytime.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Shirfine%20-%20Illusionary%20Daytime.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Shirfine%20-%20Illusionary%20Daytime.lrc"
        },
        {
        name: "우리의 밤",
        artist: "Sondia",
        url: "https://sharelist.honus.top/honus/music/song/Sondia%20-%20%EC%9A%B0%EB%A6%AC%EC%9D%98%20%EB%B0%A4.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Sondia%20-%20%EC%9A%B0%EB%A6%AC%EC%9D%98%20%EB%B0%A4.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Sondia%20-%20%EC%9A%B0%EB%A6%AC%EC%9D%98%20%EB%B0%A4.lrc"
        },
        {
        name: "Back To December Apologize You're Not Sorry (Live 2011 Medley)",
        artist: "Taylor Swift",
        url: "https://sharelist.honus.top/honus/music/song/Taylor%20Swift%20-%20Back%20To%20December%20Apologize%20You%27re%20Not%20Sorry%20%28Live%202011%20Medley%29.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Taylor%20Swift%20-%20Back%20To%20December%20Apologize%20You%27re%20Not%20Sorry%20%28Live%202011%20Medley%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Taylor%20Swift%20-%20Back%20To%20December%20Apologize%20You%27re%20Not%20Sorry%20%28Live%202011%20Medley%29.lrc"
        },
        {
        name: "Safe And Sound",
        artist: "Taylor Swift The Civil Wars",
        url: "https://sharelist.honus.top/honus/music/song/Taylor%20Swift%20The%20Civil%20Wars%20-%20Safe%20And%20Sound.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Taylor%20Swift%20The%20Civil%20Wars%20-%20Safe%20And%20Sound.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Taylor%20Swift%20The%20Civil%20Wars%20-%20Safe%20And%20Sound.lrc"
        },
        {
        name: "伊卡洛斯的翅膀",
        artist: "TGG",
        url: "https://sharelist.honus.top/honus/music/song/TGG%20-%20%E4%BC%8A%E5%8D%A1%E6%B4%9B%E6%96%AF%E7%9A%84%E7%BF%85%E8%86%80.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/TGG%20-%20%E4%BC%8A%E5%8D%A1%E6%B4%9B%E6%96%AF%E7%9A%84%E7%BF%85%E8%86%80.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/TGG%20-%20%E4%BC%8A%E5%8D%A1%E6%B4%9B%E6%96%AF%E7%9A%84%E7%BF%85%E8%86%80.lrc"
        },
        {
        name: "RISE",
        artist: "The Glitch Mob Mako The Word Alive",
        url: "https://sharelist.honus.top/honus/music/song/The%20Glitch%20Mob%20Mako%20The%20Word%20Alive%20-%20RISE.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/The%20Glitch%20Mob%20Mako%20The%20Word%20Alive%20-%20RISE.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/The%20Glitch%20Mob%20Mako%20The%20Word%20Alive%20-%20RISE.lrc"
        },
        {
        name: "Hesitate",
        artist: "The Spacies",
        url: "https://sharelist.honus.top/honus/music/song/The%20Spacies%20-%20Hesitate.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/The%20Spacies%20-%20Hesitate.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/The%20Spacies%20-%20Hesitate.lrc"
        },
        {
        name: "无冕之王",
        artist: "OST",
        url: "https://sharelist.honus.top/honus/music/song/THE.A-OST%20-%20%E2%98%86THE.A%E2%98%85%E6%97%A0%E5%86%95%E4%B9%8B%E7%8E%8B%EF%BC%88%E5%A4%AA%E9%9A%BE%E7%9B%B8%E5%A4%84%E6%9C%B4%E7%81%BF%E7%83%88%E4%B8%BB%E9%A2%98%E6%9B%B2%EF%BC%89%EF%BC%88Cover%20%E6%9C%B4%E6%99%BA%E6%95%8F%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/THEA-OST%20-%20%E2%98%86THEA%E2%98%85%E6%97%A0%E5%86%95%E4%B9%8B%E7%8E%8B%EF%BC%88%E5%A4%AA%E9%9A%BE%E7%9B%B8%E5%A4%84%E6%9C%B4%E7%81%BF%E7%83%88%E4%B8%BB%E9%A2%98%E6%9B%B2%EF%BC%89%EF%BC%88Cover%20%E6%9C%B4%E6%99%BA%E6%95%8F%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/THEA-OST%20-%20%E2%98%86THEA%E2%98%85%E6%97%A0%E5%86%95%E4%B9%8B%E7%8E%8B%EF%BC%88%E5%A4%AA%E9%9A%BE%E7%9B%B8%E5%A4%84%E6%9C%B4%E7%81%BF%E7%83%88%E4%B8%BB%E9%A2%98%E6%9B%B2%EF%BC%89%EF%BC%88Cover%20%E6%9C%B4%E6%99%BA%E6%95%8F%EF%BC%89.lrc"
        },
        {
        name: "Empire of Angels",
        artist: "Thomas Bergersen",
        url: "https://sharelist.honus.top/honus/music/song/Thomas%20Bergersen%20-%20Empire%20of%20Angels.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Thomas%20Bergersen%20-%20Empire%20of%20Angels.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Thomas%20Bergersen%20-%20Empire%20of%20Angels.lrc"
        },
        {
        name: "矛盾体",
        artist: "Tiya Manson M R U O RED8红八",
        url: "https://sharelist.honus.top/honus/music/song/Tiya%20Manson%20M%20R%20U%20O%20RED8%E7%BA%A2%E5%85%AB%20-%20%E7%9F%9B%E7%9B%BE%E4%BD%93.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Tiya%20Manson%20M%20R%20U%20O%20RED8%E7%BA%A2%E5%85%AB%20-%20%E7%9F%9B%E7%9B%BE%E4%BD%93.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Tiya%20Manson%20M%20R%20U%20O%20RED8%E7%BA%A2%E5%85%AB%20-%20%E7%9F%9B%E7%9B%BE%E4%BD%93.lrc"
        },
        {
        name: "多谢失恋",
        artist: "Twins",
        url: "https://sharelist.honus.top/honus/music/song/Twins%20-%20%E5%A4%9A%E8%B0%A2%E5%A4%B1%E6%81%8B.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Twins%20-%20%E5%A4%9A%E8%B0%A2%E5%A4%B1%E6%81%8B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Twins%20-%20%E5%A4%9A%E8%B0%A2%E5%A4%B1%E6%81%8B.lrc"
        },
        {
        name: "Never Back Down",
        artist: "Two Steps From Hell",
        url: "https://sharelist.honus.top/honus/music/song/Two%20Steps%20From%20Hell%20-%20Never%20Back%20Down.flac",
        cover: "https://sharelist.honus.top/honus/music/image/Two%20Steps%20From%20Hell%20-%20Never%20Back%20Down.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Two%20Steps%20From%20Hell%20-%20Never%20Back%20Down.lrc"
        },
        {
        name: "Victory",
        artist: "Two Steps From Hell",
        url: "https://sharelist.honus.top/honus/music/song/Two%20Steps%20From%20Hell%20-%20Victory.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Two%20Steps%20From%20Hell%20-%20Victory.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Two%20Steps%20From%20Hell%20-%20Victory.lrc"
        },
        {
        name: "Only You",
        artist: "Vigel Sartek",
        url: "https://sharelist.honus.top/honus/music/song/Vigel%20Sartek%20-%20Only%20You.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/Vigel%20Sartek%20-%20Only%20You.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Vigel%20Sartek%20-%20Only%20You.lrc"
        },
        {
        name: "Звезда",
        artist: "Vitas",
        url: "https://sharelist.honus.top/honus/music/song/Vitas%20-%20%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/Vitas%20-%20%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/Vitas%20-%20%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%B0.lrc"
        },
        {
        name: "ブルーバード",
        artist: "いきものがかり",
        url: "https://sharelist.honus.top/honus/music/song/%E3%81%84%E3%81%8D%E3%82%82%E3%81%AE%E3%81%8C%E3%81%8B%E3%82%8A%20-%20%E3%83%96%E3%83%AB%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E3%81%84%E3%81%8D%E3%82%82%E3%81%AE%E3%81%8C%E3%81%8B%E3%82%8A%20-%20%E3%83%96%E3%83%AB%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E3%81%84%E3%81%8D%E3%82%82%E3%81%AE%E3%81%8C%E3%81%8B%E3%82%8A%20-%20%E3%83%96%E3%83%AB%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89.lrc"
        },
        {
        name: "ツキアカリのミチシルベ（Cover stereopony）",
        artist: "三无MarBlue",
        url: "https://sharelist.honus.top/honus/music/song/%E4%B8%89%E6%97%A0MarBlue%20-%20%E3%83%84%E3%82%AD%E3%82%A2%E3%82%AB%E3%83%AA%E3%81%AE%E3%83%9F%E3%83%81%E3%82%B7%E3%83%AB%E3%83%99%EF%BC%88Cover%20stereopony%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%B8%89%E6%97%A0MarBlue%20-%20%E3%83%84%E3%82%AD%E3%82%A2%E3%82%AB%E3%83%AA%E3%81%AE%E3%83%9F%E3%83%81%E3%82%B7%E3%83%AB%E3%83%99%EF%BC%88Cover%20stereopony%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%B8%89%E6%97%A0MarBlue%20-%20%E3%83%84%E3%82%AD%E3%82%A2%E3%82%AB%E3%83%AA%E3%81%AE%E3%83%9F%E3%83%81%E3%82%B7%E3%83%AB%E3%83%99%EF%BC%88Cover%20stereopony%EF%BC%89.lrc"
        },
        {
        name: "参商(纯歌版)",
        artist: "不才",
        url: "https://sharelist.honus.top/honus/music/song/%E4%B8%8D%E6%89%8D%20-%20%E5%8F%82%E5%95%86%28%E7%BA%AF%E6%AD%8C%E7%89%88%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%B8%8D%E6%89%8D%20-%20%E5%8F%82%E5%95%86%28%E7%BA%AF%E6%AD%8C%E7%89%88%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%B8%8D%E6%89%8D%20-%20%E5%8F%82%E5%95%86%28%E7%BA%AF%E6%AD%8C%E7%89%88%29.lrc"
        },
        {
        name: "鸿崖之末 （钟无艳填词）",
        artist: "云の泣",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BA%91%E3%81%AE%E6%B3%A3%20-%20%E9%B8%BF%E5%B4%96%E4%B9%8B%E6%9C%AB%C2%A0%EF%BC%88%E9%92%9F%E6%97%A0%E8%89%B3%E5%A1%AB%E8%AF%8D%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BA%91%E3%81%AE%E6%B3%A3%20-%20%E9%B8%BF%E5%B4%96%E4%B9%8B%E6%9C%AB%C2%A0%EF%BC%88%E9%92%9F%E6%97%A0%E8%89%B3%E5%A1%AB%E8%AF%8D%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BA%91%E3%81%AE%E6%B3%A3%20-%20%E9%B8%BF%E5%B4%96%E4%B9%8B%E6%9C%AB%C2%A0%EF%BC%88%E9%92%9F%E6%97%A0%E8%89%B3%E5%A1%AB%E8%AF%8D%EF%BC%89.lrc"
        },
        {
        name: "世界之外",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E4%B8%96%E7%95%8C%E4%B9%8B%E5%A4%96.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E4%B8%96%E7%95%8C%E4%B9%8B%E5%A4%96.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E4%B8%96%E7%95%8C%E4%B9%8B%E5%A4%96.lrc"
        },
        {
        name: "凉城",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E5%87%89%E5%9F%8E.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E5%87%89%E5%9F%8E.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E5%87%89%E5%9F%8E.lrc"
        },
        {
        name: "外愈",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E5%A4%96%E6%84%88.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E5%A4%96%E6%84%88.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E5%A4%96%E6%84%88.lrc"
        },
        {
        name: "山外小楼夜听雨",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E5%B1%B1%E5%A4%96%E5%B0%8F%E6%A5%BC%E5%A4%9C%E5%90%AC%E9%9B%A8.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E5%B1%B1%E5%A4%96%E5%B0%8F%E6%A5%BC%E5%A4%9C%E5%90%AC%E9%9B%A8.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E5%B1%B1%E5%A4%96%E5%B0%8F%E6%A5%BC%E5%A4%9C%E5%90%AC%E9%9B%A8.lrc"
        },
        {
        name: "情绪挑拨",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E6%83%85%E7%BB%AA%E6%8C%91%E6%8B%A8.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E6%83%85%E7%BB%AA%E6%8C%91%E6%8B%A8.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E6%83%85%E7%BB%AA%E6%8C%91%E6%8B%A8.lrc"
        },
        {
        name: "空空如也",
        artist: "任然",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BB%BB%E7%84%B6%20-%20%E7%A9%BA%E7%A9%BA%E5%A6%82%E4%B9%9F.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BB%BB%E7%84%B6%20-%20%E7%A9%BA%E7%A9%BA%E5%A6%82%E4%B9%9F.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BB%BB%E7%84%B6%20-%20%E7%A9%BA%E7%A9%BA%E5%A6%82%E4%B9%9F.lrc"
        },
        {
        name: "遇到恶作剧（Cover 王蓝茵）",
        artist: "伦桑",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BC%A6%E6%A1%91%20-%20%E9%81%87%E5%88%B0%E6%81%B6%E4%BD%9C%E5%89%A7%EF%BC%88Cover%20%E7%8E%8B%E8%93%9D%E8%8C%B5%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BC%A6%E6%A1%91%20-%20%E9%81%87%E5%88%B0%E6%81%B6%E4%BD%9C%E5%89%A7%EF%BC%88Cover%20%E7%8E%8B%E8%93%9D%E8%8C%B5%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BC%A6%E6%A1%91%20-%20%E9%81%87%E5%88%B0%E6%81%B6%E4%BD%9C%E5%89%A7%EF%BC%88Cover%20%E7%8E%8B%E8%93%9D%E8%8C%B5%EF%BC%89.lrc"
        },
        {
        name: "自难忘",
        artist: "佑可猫",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BD%91%E5%8F%AF%E7%8C%AB%20-%20%E8%87%AA%E9%9A%BE%E5%BF%98.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BD%91%E5%8F%AF%E7%8C%AB%20-%20%E8%87%AA%E9%9A%BE%E5%BF%98.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BD%91%E5%8F%AF%E7%8C%AB%20-%20%E8%87%AA%E9%9A%BE%E5%BF%98.lrc"
        },
        {
        name: "HEAL ME（病变Remix）（HeFeng remix）",
        artist: "Cubi   Fi9江澈",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BD%95%E6%9E%AB%20-%20Cubi%20%20%20Fi9%E6%B1%9F%E6%BE%88-HEAL%20ME%EF%BC%88%E7%97%85%E5%8F%98Remix%EF%BC%89%EF%BC%88HeFeng%20remix%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BD%95%E6%9E%AB%20-%20Cubi%20%20%20Fi9%E6%B1%9F%E6%BE%88-HEAL%20ME%EF%BC%88%E7%97%85%E5%8F%98Remix%EF%BC%89%EF%BC%88HeFeng%20remix%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BD%95%E6%9E%AB%20-%20Cubi%20%20%20Fi9%E6%B1%9F%E6%BE%88-HEAL%20ME%EF%BC%88%E7%97%85%E5%8F%98Remix%EF%BC%89%EF%BC%88HeFeng%20remix%EF%BC%89.lrc"
        },
        {
        name: "我想",
        artist: "余佳运",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BD%99%E4%BD%B3%E8%BF%90%20-%20%E6%88%91%E6%83%B3.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BD%99%E4%BD%B3%E8%BF%90%20-%20%E6%88%91%E6%83%B3.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BD%99%E4%BD%B3%E8%BF%90%20-%20%E6%88%91%E6%83%B3.lrc"
        },
        {
        name: "刺猬（Cover 白智英《火花》）",
        artist: "余半声",
        url: "https://sharelist.honus.top/honus/music/song/%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E5%88%BA%E7%8C%AC%EF%BC%88Cover%20%E7%99%BD%E6%99%BA%E8%8B%B1%E3%80%8A%E7%81%AB%E8%8A%B1%E3%80%8B%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E5%88%BA%E7%8C%AC%EF%BC%88Cover%20%E7%99%BD%E6%99%BA%E8%8B%B1%E3%80%8A%E7%81%AB%E8%8A%B1%E3%80%8B%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E5%88%BA%E7%8C%AC%EF%BC%88Cover%20%E7%99%BD%E6%99%BA%E8%8B%B1%E3%80%8A%E7%81%AB%E8%8A%B1%E3%80%8B%EF%BC%89.lrc"
        },
        {
        name: "化身孤岛的鲸",
        artist: "兔裹煎蛋卷",
        url: "https://sharelist.honus.top/honus/music/song/%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E5%8C%96%E8%BA%AB%E5%AD%A4%E5%B2%9B%E7%9A%84%E9%B2%B8.lrc"
        },
        {
        name: "一分之二",
        artist: "凯瑟喵",
        url: "https://sharelist.honus.top/honus/music/song/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E4%B8%80%E5%88%86%E4%B9%8B%E4%BA%8C.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E4%B8%80%E5%88%86%E4%B9%8B%E4%BA%8C.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E4%B8%80%E5%88%86%E4%B9%8B%E4%BA%8C.lrc"
        },
        {
        name: "写给我第一个喜欢的女孩的歌",
        artist: "凯瑟喵",
        url: "https://sharelist.honus.top/honus/music/song/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E5%86%99%E7%BB%99%E6%88%91%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E5%AD%A9%E7%9A%84%E6%AD%8C.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E5%86%99%E7%BB%99%E6%88%91%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E5%AD%A9%E7%9A%84%E6%AD%8C.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E5%86%99%E7%BB%99%E6%88%91%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%96%9C%E6%AC%A2%E7%9A%84%E5%A5%B3%E5%AD%A9%E7%9A%84%E6%AD%8C.lrc"
        },
        {
        name: "永无乡",
        artist: "凯瑟喵",
        url: "https://sharelist.honus.top/honus/music/song/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E6%B0%B8%E6%97%A0%E4%B9%A1.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E6%B0%B8%E6%97%A0%E4%B9%A1.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E6%B0%B8%E6%97%A0%E4%B9%A1.lrc"
        },
        {
        name: "谎（无念白版）",
        artist: "凯瑟喵",
        url: "https://sharelist.honus.top/honus/music/song/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E%EF%BC%88%E6%97%A0%E5%BF%B5%E7%99%BD%E7%89%88%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E%EF%BC%88%E6%97%A0%E5%BF%B5%E7%99%BD%E7%89%88%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E%EF%BC%88%E6%97%A0%E5%BF%B5%E7%99%BD%E7%89%88%EF%BC%89.lrc"
        },
        {
        name: "谎",
        artist: "凯瑟喵",
        url: "https://sharelist.honus.top/honus/music/song/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%87%AF%E7%91%9F%E5%96%B5%20-%20%E8%B0%8E.lrc"
        },
        {
        name: "疏远",
        artist: "刘初寻 (二逗)",
        url: "https://sharelist.honus.top/honus/music/song/%E5%88%98%E5%88%9D%E5%AF%BB%20%28%E4%BA%8C%E9%80%97%29%20-%20%E7%96%8F%E8%BF%9C.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%88%98%E5%88%9D%E5%AF%BB%20%28%E4%BA%8C%E9%80%97%29%20-%20%E7%96%8F%E8%BF%9C.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%88%98%E5%88%9D%E5%AF%BB%20%28%E4%BA%8C%E9%80%97%29%20-%20%E7%96%8F%E8%BF%9C.lrc"
        },
        {
        name: "儿时",
        artist: "刘昊霖",
        url: "https://sharelist.honus.top/honus/music/song/%E5%88%98%E6%98%8A%E9%9C%96%20-%20%E5%84%BF%E6%97%B6.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%88%98%E6%98%8A%E9%9C%96%20-%20%E5%84%BF%E6%97%B6.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%88%98%E6%98%8A%E9%9C%96%20-%20%E5%84%BF%E6%97%B6.lrc"
        },
        {
        name: "烟火里的尘埃",
        artist: "华晨宇",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E7%83%9F%E7%81%AB%E9%87%8C%E7%9A%84%E5%B0%98%E5%9F%83.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E7%83%9F%E7%81%AB%E9%87%8C%E7%9A%84%E5%B0%98%E5%9F%83.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E7%83%9F%E7%81%AB%E9%87%8C%E7%9A%84%E5%B0%98%E5%9F%83.lrc"
        },
        {
        name: "齐天",
        artist: "华晨宇",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E9%BD%90%E5%A4%A9.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E9%BD%90%E5%A4%A9.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8D%8E%E6%99%A8%E5%AE%87%20-%20%E9%BD%90%E5%A4%A9.lrc"
        },
        {
        name: "一生所爱",
        artist: "卢冠廷",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8D%A2%E5%86%A0%E5%BB%B7%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8D%A2%E5%86%A0%E5%BB%B7%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8D%A2%E5%86%A0%E5%BB%B7%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.lrc"
        },
        {
        name: "别赋（Cover 慕寒）",
        artist: "双笙",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8F%8C%E7%AC%99%20-%20%E5%88%AB%E8%B5%8B%EF%BC%88Cover%20%E6%85%95%E5%AF%92%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8F%8C%E7%AC%99%20-%20%E5%88%AB%E8%B5%8B%EF%BC%88Cover%20%E6%85%95%E5%AF%92%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8F%8C%E7%AC%99%20-%20%E5%88%AB%E8%B5%8B%EF%BC%88Cover%20%E6%85%95%E5%AF%92%EF%BC%89.lrc"
        },
        {
        name: "大鱼  （Cover 周深）",
        artist: "双笙",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8F%8C%E7%AC%99%20-%20%E5%A4%A7%E9%B1%BC%C2%A0%C2%A0%EF%BC%88Cover%20%E5%91%A8%E6%B7%B1%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8F%8C%E7%AC%99%20-%20%E5%A4%A7%E9%B1%BC%C2%A0%C2%A0%EF%BC%88Cover%20%E5%91%A8%E6%B7%B1%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8F%8C%E7%AC%99%20-%20%E5%A4%A7%E9%B1%BC%C2%A0%C2%A0%EF%BC%88Cover%20%E5%91%A8%E6%B7%B1%EF%BC%89.lrc"
        },
        {
        name: "葬花吟",
        artist: "双笙",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8F%8C%E7%AC%99%20-%20%E8%91%AC%E8%8A%B1%E5%90%9F.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8F%8C%E7%AC%99%20-%20%E8%91%AC%E8%8A%B1%E5%90%9F.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8F%8C%E7%AC%99%20-%20%E8%91%AC%E8%8A%B1%E5%90%9F.lrc"
        },
        {
        name: "记狠人大帝（Cover 张杰）",
        artist: "葬仙",
        url: "https://sharelist.honus.top/honus/music/song/%E5%8F%B6%E9%87%8C%20%E8%8B%91%E8%88%8D%20-%20%E8%91%AC%E4%BB%99-%E8%AE%B0%E7%8B%A0%E4%BA%BA%E5%A4%A7%E5%B8%9D%EF%BC%88Cover%20%E5%BC%A0%E6%9D%B0%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%8F%B6%E9%87%8C%20%E8%8B%91%E8%88%8D%20-%20%E8%91%AC%E4%BB%99-%E8%AE%B0%E7%8B%A0%E4%BA%BA%E5%A4%A7%E5%B8%9D%EF%BC%88Cover%20%E5%BC%A0%E6%9D%B0%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%8F%B6%E9%87%8C%20%E8%8B%91%E8%88%8D%20-%20%E8%91%AC%E4%BB%99-%E8%AE%B0%E7%8B%A0%E4%BA%BA%E5%A4%A7%E5%B8%9D%EF%BC%88Cover%20%E5%BC%A0%E6%9D%B0%EF%BC%89.lrc"
        },
        {
        name: "路人甲",
        artist: "吕蔷Amuyi",
        url: "https://sharelist.honus.top/honus/music/song/%E5%90%95%E8%94%B7Amuyi%20-%20%E8%B7%AF%E4%BA%BA%E7%94%B2.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%90%95%E8%94%B7Amuyi%20-%20%E8%B7%AF%E4%BA%BA%E7%94%B2.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%90%95%E8%94%B7Amuyi%20-%20%E8%B7%AF%E4%BA%BA%E7%94%B2.lrc"
        },
        {
        name: "别亦难",
        artist: "吴静",
        url: "https://sharelist.honus.top/honus/music/song/%E5%90%B4%E9%9D%99%20-%20%E5%88%AB%E4%BA%A6%E9%9A%BE.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%90%B4%E9%9D%99%20-%20%E5%88%AB%E4%BA%A6%E9%9A%BE.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%90%B4%E9%9D%99%20-%20%E5%88%AB%E4%BA%A6%E9%9A%BE.lrc"
        },
        {
        name: "感谢你曾来过",
        artist: "周思涵 Ayo97",
        url: "https://sharelist.honus.top/honus/music/song/%E5%91%A8%E6%80%9D%E6%B6%B5%20Ayo97%20-%20%E6%84%9F%E8%B0%A2%E4%BD%A0%E6%9B%BE%E6%9D%A5%E8%BF%87.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%91%A8%E6%80%9D%E6%B6%B5%20Ayo97%20-%20%E6%84%9F%E8%B0%A2%E4%BD%A0%E6%9B%BE%E6%9D%A5%E8%BF%87.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%91%A8%E6%80%9D%E6%B6%B5%20Ayo97%20-%20%E6%84%9F%E8%B0%A2%E4%BD%A0%E6%9B%BE%E6%9D%A5%E8%BF%87.lrc"
        },
        {
        name: "说好不哭",
        artist: "周杰伦",
        url: "https://sharelist.honus.top/honus/music/song/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD.lrc"
        },
        {
        name: "大鱼",
        artist: "周深",
        url: "https://sharelist.honus.top/honus/music/song/%E5%91%A8%E6%B7%B1%20-%20%E5%A4%A7%E9%B1%BC.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%91%A8%E6%B7%B1%20-%20%E5%A4%A7%E9%B1%BC.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%91%A8%E6%B7%B1%20-%20%E5%A4%A7%E9%B1%BC.lrc"
        },
        {
        name: "漂洋过海来看你",
        artist: "周深",
        url: "https://sharelist.honus.top/honus/music/song/%E5%91%A8%E6%B7%B1%20-%20%E6%BC%82%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%91%A8%E6%B7%B1%20-%20%E6%BC%82%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%91%A8%E6%B7%B1%20-%20%E6%BC%82%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0.lrc"
        },
        {
        name: "最美的期待",
        artist: "周笔畅",
        url: "https://sharelist.honus.top/honus/music/song/%E5%91%A8%E7%AC%94%E7%95%85%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E6%9C%9F%E5%BE%85.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%91%A8%E7%AC%94%E7%95%85%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E6%9C%9F%E5%BE%85.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%91%A8%E7%AC%94%E7%95%85%20-%20%E6%9C%80%E7%BE%8E%E7%9A%84%E6%9C%9F%E5%BE%85.lrc"
        },
        {
        name: "如风过境",
        artist: "哎哟蔚蔚",
        url: "https://sharelist.honus.top/honus/music/song/%E5%93%8E%E5%93%9F%E8%94%9A%E8%94%9A%20-%20%E5%A6%82%E9%A3%8E%E8%BF%87%E5%A2%83.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%93%8E%E5%93%9F%E8%94%9A%E8%94%9A%20-%20%E5%A6%82%E9%A3%8E%E8%BF%87%E5%A2%83.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%93%8E%E5%93%9F%E8%94%9A%E8%94%9A%20-%20%E5%A6%82%E9%A3%8E%E8%BF%87%E5%A2%83.lrc"
        },
        {
        name: "承欢殿( 灿白《承欢》OST）（Cover：香香）",
        artist: "哭笑不得得得颖儿",
        url: "https://sharelist.honus.top/honus/music/song/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20-%20%E6%89%BF%E6%AC%A2%E6%AE%BF%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E6%89%BF%E6%AC%A2%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%EF%BC%9A%E9%A6%99%E9%A6%99%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20-%20%E6%89%BF%E6%AC%A2%E6%AE%BF%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E6%89%BF%E6%AC%A2%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%EF%BC%9A%E9%A6%99%E9%A6%99%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20-%20%E6%89%BF%E6%AC%A2%E6%AE%BF%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E6%89%BF%E6%AC%A2%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%EF%BC%9A%E9%A6%99%E9%A6%99%EF%BC%89.lrc"
        },
        {
        name: "Please( 灿白《要命》OST）（Cover Skylar Grey）",
        artist: "哭笑不得得得颖儿 夹＿zZ",
        url: "https://sharelist.honus.top/honus/music/song/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20%E5%A4%B9%EF%BC%BFzZ%20-%20Please%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E8%A6%81%E5%91%BD%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%20Skylar%20Grey%EF%BC%89.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20%E5%A4%B9%EF%BC%BFzZ%20-%20Please%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E8%A6%81%E5%91%BD%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%20Skylar%20Grey%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%93%AD%E7%AC%91%E4%B8%8D%E5%BE%97%E5%BE%97%E5%BE%97%E9%A2%96%E5%84%BF%20%E5%A4%B9%EF%BC%BFzZ%20-%20Please%28%20%E7%81%BF%E7%99%BD%E3%80%8A%E8%A6%81%E5%91%BD%E3%80%8BOST%EF%BC%89%EF%BC%88Cover%20Skylar%20Grey%EF%BC%89.lrc"
        },
        {
        name: "褪变无路",
        artist: "夏天播放",
        url: "https://sharelist.honus.top/honus/music/song/%E5%A4%8F%E5%A4%A9%E6%92%AD%E6%94%BE%20-%20%E8%A4%AA%E5%8F%98%E6%97%A0%E8%B7%AF.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%A4%8F%E5%A4%A9%E6%92%AD%E6%94%BE%20-%20%E8%A4%AA%E5%8F%98%E6%97%A0%E8%B7%AF.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%A4%8F%E5%A4%A9%E6%92%AD%E6%94%BE%20-%20%E8%A4%AA%E5%8F%98%E6%97%A0%E8%B7%AF.lrc"
        },
        {
        name: "因果（《魔道祖师》薛洋角色歌）（Cover 《地尽头》）",
        artist: "大白的菠萝包",
        url: "https://sharelist.honus.top/honus/music/song/%E5%A4%A7%E7%99%BD%E7%9A%84%E8%8F%A0%E8%90%9D%E5%8C%85%20-%20%E5%9B%A0%E6%9E%9C%EF%BC%88%E3%80%8A%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%8B%E8%96%9B%E6%B4%8B%E8%A7%92%E8%89%B2%E6%AD%8C%EF%BC%89%EF%BC%88Cover%20%E3%80%8A%E5%9C%B0%E5%B0%BD%E5%A4%B4%E3%80%8B%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%A4%A7%E7%99%BD%E7%9A%84%E8%8F%A0%E8%90%9D%E5%8C%85%20-%20%E5%9B%A0%E6%9E%9C%EF%BC%88%E3%80%8A%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%8B%E8%96%9B%E6%B4%8B%E8%A7%92%E8%89%B2%E6%AD%8C%EF%BC%89%EF%BC%88Cover%20%E3%80%8A%E5%9C%B0%E5%B0%BD%E5%A4%B4%E3%80%8B%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%A4%A7%E7%99%BD%E7%9A%84%E8%8F%A0%E8%90%9D%E5%8C%85%20-%20%E5%9B%A0%E6%9E%9C%EF%BC%88%E3%80%8A%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%8B%E8%96%9B%E6%B4%8B%E8%A7%92%E8%89%B2%E6%AD%8C%EF%BC%89%EF%BC%88Cover%20%E3%80%8A%E5%9C%B0%E5%B0%BD%E5%A4%B4%E3%80%8B%EF%BC%89.lrc"
        },
        {
        name: "遇见",
        artist: "孙燕姿",
        url: "https://sharelist.honus.top/honus/music/song/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.lrc"
        },
        {
        name: "十二（Cover 留声玩具）",
        artist: "安白",
        url: "https://sharelist.honus.top/honus/music/song/%E5%AE%89%E7%99%BD%20-%20%E5%8D%81%E4%BA%8C%EF%BC%88Cover%20%E7%95%99%E5%A3%B0%E7%8E%A9%E5%85%B7%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%AE%89%E7%99%BD%20-%20%E5%8D%81%E4%BA%8C%EF%BC%88Cover%20%E7%95%99%E5%A3%B0%E7%8E%A9%E5%85%B7%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%AE%89%E7%99%BD%20-%20%E5%8D%81%E4%BA%8C%EF%BC%88Cover%20%E7%95%99%E5%A3%B0%E7%8E%A9%E5%85%B7%EF%BC%89.lrc"
        },
        {
        name: "野狼disco",
        artist: "宝石Gem",
        url: "https://sharelist.honus.top/honus/music/song/%E5%AE%9D%E7%9F%B3Gem%20-%20%E9%87%8E%E7%8B%BCdisco.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%AE%9D%E7%9F%B3Gem%20-%20%E9%87%8E%E7%8B%BCdisco.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%AE%9D%E7%9F%B3Gem%20-%20%E9%87%8E%E7%8B%BCdisco.lrc"
        },
        {
        name: "（少年抖音完整版）（翻自 群星）",
        artist: "少年",
        url: "https://sharelist.honus.top/honus/music/song/%E5%AE%AB%E6%A5%9A%20-%20%E5%B0%91%E5%B9%B4%20-%EF%BC%88%E5%B0%91%E5%B9%B4%E6%8A%96%E9%9F%B3%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%89%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%BE%A4%E6%98%9F%EF%BC%89.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%AE%AB%E6%A5%9A%20-%20%E5%B0%91%E5%B9%B4%20-%EF%BC%88%E5%B0%91%E5%B9%B4%E6%8A%96%E9%9F%B3%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%89%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%BE%A4%E6%98%9F%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%AE%AB%E6%A5%9A%20-%20%E5%B0%91%E5%B9%B4%20-%EF%BC%88%E5%B0%91%E5%B9%B4%E6%8A%96%E9%9F%B3%E5%AE%8C%E6%95%B4%E7%89%88%EF%BC%89%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%BE%A4%E6%98%9F%EF%BC%89.lrc"
        },
        {
        name: "大眠 (完整版)",
        artist: "小乐哥",
        url: "https://sharelist.honus.top/honus/music/song/%E5%B0%8F%E4%B9%90%E5%93%A5%20-%20%E5%A4%A7%E7%9C%A0%20%28%E5%AE%8C%E6%95%B4%E7%89%88%29.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%B0%8F%E4%B9%90%E5%93%A5%20-%20%E5%A4%A7%E7%9C%A0%20%28%E5%AE%8C%E6%95%B4%E7%89%88%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%B0%8F%E4%B9%90%E5%93%A5%20-%20%E5%A4%A7%E7%9C%A0%20%28%E5%AE%8C%E6%95%B4%E7%89%88%29.lrc"
        },
        {
        name: "偕天同苍(苍云)",
        artist: "小曲儿",
        url: "https://sharelist.honus.top/honus/music/song/%E5%B0%8F%E6%9B%B2%E5%84%BF%20-%20%E5%81%95%E5%A4%A9%E5%90%8C%E8%8B%8D%28%E8%8B%8D%E4%BA%91%29.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%B0%8F%E6%9B%B2%E5%84%BF%20-%20%E5%81%95%E5%A4%A9%E5%90%8C%E8%8B%8D%28%E8%8B%8D%E4%BA%91%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%B0%8F%E6%9B%B2%E5%84%BF%20-%20%E5%81%95%E5%A4%A9%E5%90%8C%E8%8B%8D%28%E8%8B%8D%E4%BA%91%29.lrc"
        },
        {
        name: "EXEC_COSMOFLIPS（四人唱见双声道 ShakingHigh Remix）（ShakingHigh 少年霜 Sol Ciel 毕啵腾 吉田亚纪子 Remix）",
        artist: "KOKIA",
        url: "https://sharelist.honus.top/honus/music/song/%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20ShakingHigh%20-%20KOKIA-EXEC_COSMOFLIPS%EF%BC%88%E5%9B%9B%E4%BA%BA%E5%94%B1%E8%A7%81%E5%8F%8C%E5%A3%B0%E9%81%93%20ShakingHigh%C2%A0Remix%EF%BC%89%EF%BC%88ShakingHigh%20%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20%E6%AF%95%E5%95%B5%E8%85%BE%20%E5%90%89%E7%94%B0%E4%BA%9A%E7%BA%AA%E5%AD%90%20Remix%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20ShakingHigh%20-%20KOKIA-EXEC_COSMOFLIPS%EF%BC%88%E5%9B%9B%E4%BA%BA%E5%94%B1%E8%A7%81%E5%8F%8C%E5%A3%B0%E9%81%93%20ShakingHigh%C2%A0Remix%EF%BC%89%EF%BC%88ShakingHigh%20%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20%E6%AF%95%E5%95%B5%E8%85%BE%20%E5%90%89%E7%94%B0%E4%BA%9A%E7%BA%AA%E5%AD%90%20Remix%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20ShakingHigh%20-%20KOKIA-EXEC_COSMOFLIPS%EF%BC%88%E5%9B%9B%E4%BA%BA%E5%94%B1%E8%A7%81%E5%8F%8C%E5%A3%B0%E9%81%93%20ShakingHigh%C2%A0Remix%EF%BC%89%EF%BC%88ShakingHigh%20%E5%B0%91%E5%B9%B4%E9%9C%9C%20Sol%20Ciel%20%E6%AF%95%E5%95%B5%E8%85%BE%20%E5%90%89%E7%94%B0%E4%BA%9A%E7%BA%AA%E5%AD%90%20Remix%EF%BC%89.lrc"
        },
        {
        name: "谁 (Live版)",
        artist: "廖俊涛",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BB%96%E4%BF%8A%E6%B6%9B%20-%20%E8%B0%81%20%28Live%E7%89%88%29.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BB%96%E4%BF%8A%E6%B6%9B%20-%20%E8%B0%81%20%28Live%E7%89%88%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BB%96%E4%BF%8A%E6%B6%9B%20-%20%E8%B0%81%20%28Live%E7%89%88%29.lrc"
        },
        {
        name: "雨一直下",
        artist: "张宇",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E5%AE%87%20-%20%E9%9B%A8%E4%B8%80%E7%9B%B4%E4%B8%8B.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E5%AE%87%20-%20%E9%9B%A8%E4%B8%80%E7%9B%B4%E4%B8%8B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E5%AE%87%20-%20%E9%9B%A8%E4%B8%80%E7%9B%B4%E4%B8%8B.lrc"
        },
        {
        name: "听",
        artist: "张杰",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E6%9D%B0%20-%20%E5%90%AC.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E6%9D%B0%20-%20%E5%90%AC.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E6%9D%B0%20-%20%E5%90%AC.lrc"
        },
        {
        name: "往事随风",
        artist: "张杰",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E6%9D%B0%20-%20%E5%BE%80%E4%BA%8B%E9%9A%8F%E9%A3%8E.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E6%9D%B0%20-%20%E5%BE%80%E4%BA%8B%E9%9A%8F%E9%A3%8E.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E6%9D%B0%20-%20%E5%BE%80%E4%BA%8B%E9%9A%8F%E9%A3%8E.lrc"
        },
        {
        name: "量身订做",
        artist: "张杰",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E6%9D%B0%20-%20%E9%87%8F%E8%BA%AB%E8%AE%A2%E5%81%9A.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E6%9D%B0%20-%20%E9%87%8F%E8%BA%AB%E8%AE%A2%E5%81%9A.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E6%9D%B0%20-%20%E9%87%8F%E8%BA%AB%E8%AE%A2%E5%81%9A.lrc"
        },
        {
        name: "只要平凡",
        artist: "张杰 张碧晨",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E6%9D%B0%20%E5%BC%A0%E7%A2%A7%E6%99%A8%20-%20%E5%8F%AA%E8%A6%81%E5%B9%B3%E5%87%A1.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E6%9D%B0%20%E5%BC%A0%E7%A2%A7%E6%99%A8%20-%20%E5%8F%AA%E8%A6%81%E5%B9%B3%E5%87%A1.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E6%9D%B0%20%E5%BC%A0%E7%A2%A7%E6%99%A8%20-%20%E5%8F%AA%E8%A6%81%E5%B9%B3%E5%87%A1.lrc"
        },
        {
        name: "破晓以后",
        artist: "张靓颖",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E7%A0%B4%E6%99%93%E4%BB%A5%E5%90%8E.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E7%A0%B4%E6%99%93%E4%BB%A5%E5%90%8E.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E7%A0%B4%E6%99%93%E4%BB%A5%E5%90%8E.lrc"
        },
        {
        name: "可不可以勇敢",
        artist: "张韵鸷",
        url: "https://sharelist.honus.top/honus/music/song/%E5%BC%A0%E9%9F%B5%E9%B8%B7%20-%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E5%8B%87%E6%95%A2.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E5%BC%A0%E9%9F%B5%E9%B8%B7%20-%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E5%8B%87%E6%95%A2.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E5%BC%A0%E9%9F%B5%E9%B8%B7%20-%20%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5%E5%8B%87%E6%95%A2.lrc"
        },
        {
        name: "清明上河图",
        artist: "排骨教主",
        url: "https://sharelist.honus.top/honus/music/song/%E6%8E%92%E9%AA%A8%E6%95%99%E4%B8%BB%20-%20%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%8E%92%E9%AA%A8%E6%95%99%E4%B8%BB%20-%20%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%8E%92%E9%AA%A8%E6%95%99%E4%B8%BB%20-%20%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE.lrc"
        },
        {
        name: "四重罪孽",
        artist: "易世樊花 双笙 汉南蛮久",
        url: "https://sharelist.honus.top/honus/music/song/%E6%98%93%E4%B8%96%E6%A8%8A%E8%8A%B1%20%E5%8F%8C%E7%AC%99%20%E6%B1%89%E5%8D%97%E8%9B%AE%E4%B9%85%20-%20%E5%9B%9B%E9%87%8D%E7%BD%AA%E5%AD%BD.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%98%93%E4%B8%96%E6%A8%8A%E8%8A%B1%20%E5%8F%8C%E7%AC%99%20%E6%B1%89%E5%8D%97%E8%9B%AE%E4%B9%85%20-%20%E5%9B%9B%E9%87%8D%E7%BD%AA%E5%AD%BD.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%98%93%E4%B8%96%E6%A8%8A%E8%8A%B1%20%E5%8F%8C%E7%AC%99%20%E6%B1%89%E5%8D%97%E8%9B%AE%E4%B9%85%20-%20%E5%9B%9B%E9%87%8D%E7%BD%AA%E5%AD%BD.lrc"
        },
        {
        name: "天亮以前说再见",
        artist: "曲肖冰",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9B%B2%E8%82%96%E5%86%B0%20-%20%E5%A4%A9%E4%BA%AE%E4%BB%A5%E5%89%8D%E8%AF%B4%E5%86%8D%E8%A7%81.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9B%B2%E8%82%96%E5%86%B0%20-%20%E5%A4%A9%E4%BA%AE%E4%BB%A5%E5%89%8D%E8%AF%B4%E5%86%8D%E8%A7%81.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9B%B2%E8%82%96%E5%86%B0%20-%20%E5%A4%A9%E4%BA%AE%E4%BB%A5%E5%89%8D%E8%AF%B4%E5%86%8D%E8%A7%81.lrc"
        },
        {
        name: "可能否",
        artist: "木小雅",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9C%A8%E5%B0%8F%E9%9B%85%20-%20%E5%8F%AF%E8%83%BD%E5%90%A6.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9C%A8%E5%B0%8F%E9%9B%85%20-%20%E5%8F%AF%E8%83%BD%E5%90%A6.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9C%A8%E5%B0%8F%E9%9B%85%20-%20%E5%8F%AF%E8%83%BD%E5%90%A6.lrc"
        },
        {
        name: "为爱追寻",
        artist: "朱婧汐Akini Jing",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9C%B1%E5%A9%A7%E6%B1%90Akini%20Jing%20-%20%E4%B8%BA%E7%88%B1%E8%BF%BD%E5%AF%BB.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9C%B1%E5%A9%A7%E6%B1%90Akini%20Jing%20-%20%E4%B8%BA%E7%88%B1%E8%BF%BD%E5%AF%BB.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9C%B1%E5%A9%A7%E6%B1%90Akini%20Jing%20-%20%E4%B8%BA%E7%88%B1%E8%BF%BD%E5%AF%BB.lrc"
        },
        {
        name: "月半小夜曲",
        artist: "李克勤",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9D%8E%E5%85%8B%E5%8B%A4%20-%20%E6%9C%88%E5%8D%8A%E5%B0%8F%E5%A4%9C%E6%9B%B2.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9D%8E%E5%85%8B%E5%8B%A4%20-%20%E6%9C%88%E5%8D%8A%E5%B0%8F%E5%A4%9C%E6%9B%B2.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9D%8E%E5%85%8B%E5%8B%A4%20-%20%E6%9C%88%E5%8D%8A%E5%B0%8F%E5%A4%9C%E6%9B%B2.lrc"
        },
        {
        name: "离人愁",
        artist: "李袁杰",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9D%8E%E8%A2%81%E6%9D%B0%20-%20%E7%A6%BB%E4%BA%BA%E6%84%81.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9D%8E%E8%A2%81%E6%9D%B0%20-%20%E7%A6%BB%E4%BA%BA%E6%84%81.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9D%8E%E8%A2%81%E6%9D%B0%20-%20%E7%A6%BB%E4%BA%BA%E6%84%81.lrc"
        },
        {
        name: "【余半声版】眉冬（Cover 地尽头）",
        artist: "林鹿森 余半声",
        url: "https://sharelist.honus.top/honus/music/song/%E6%9E%97%E9%B9%BF%E6%A3%AE%20%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E3%80%90%E4%BD%99%E5%8D%8A%E5%A3%B0%E7%89%88%E3%80%91%E7%9C%89%E5%86%AC%EF%BC%88Cover%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%9E%97%E9%B9%BF%E6%A3%AE%20%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E3%80%90%E4%BD%99%E5%8D%8A%E5%A3%B0%E7%89%88%E3%80%91%E7%9C%89%E5%86%AC%EF%BC%88Cover%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%9E%97%E9%B9%BF%E6%A3%AE%20%E4%BD%99%E5%8D%8A%E5%A3%B0%20-%20%E3%80%90%E4%BD%99%E5%8D%8A%E5%A3%B0%E7%89%88%E3%80%91%E7%9C%89%E5%86%AC%EF%BC%88Cover%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.lrc"
        },
        {
        name: "男孩",
        artist: "梁博 陶孟童 肖和东 高誉容",
        url: "https://sharelist.honus.top/honus/music/song/%E6%A2%81%E5%8D%9A%20%E9%99%B6%E5%AD%9F%E7%AB%A5%20%E8%82%96%E5%92%8C%E4%B8%9C%20%E9%AB%98%E8%AA%89%E5%AE%B9%20-%20%E7%94%B7%E5%AD%A9.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%A2%81%E5%8D%9A%20%E9%99%B6%E5%AD%9F%E7%AB%A5%20%E8%82%96%E5%92%8C%E4%B8%9C%20%E9%AB%98%E8%AA%89%E5%AE%B9%20-%20%E7%94%B7%E5%AD%A9.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%A2%81%E5%8D%9A%20%E9%99%B6%E5%AD%9F%E7%AB%A5%20%E8%82%96%E5%92%8C%E4%B8%9C%20%E9%AB%98%E8%AA%89%E5%AE%B9%20-%20%E7%94%B7%E5%AD%A9.lrc"
        },
        {
        name: "不染",
        artist: "毛不易",
        url: "https://sharelist.honus.top/honus/music/song/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E4%B8%8D%E6%9F%93.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E4%B8%8D%E6%9F%93.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E4%B8%8D%E6%9F%93.lrc"
        },
        {
        name: "消愁",
        artist: "毛不易",
        url: "https://sharelist.honus.top/honus/music/song/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E6%B6%88%E6%84%81.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E6%B6%88%E6%84%81.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E6%B6%88%E6%84%81.lrc"
        },
        {
        name: "没有理由",
        artist: "effie）",
        url: "https://sharelist.honus.top/honus/music/song/%E6%B0%B8%E5%BD%ACRyanB%20%E5%91%A8%E5%BB%B6%E8%8B%B1%EF%BC%88%E8%8B%B1%E5%AD%90-effie%EF%BC%89%20-%20%E6%B2%A1%E6%9C%89%E7%90%86%E7%94%B1.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%B0%B8%E5%BD%ACRyanB%20%E5%91%A8%E5%BB%B6%E8%8B%B1%EF%BC%88%E8%8B%B1%E5%AD%90-effie%EF%BC%89%20-%20%E6%B2%A1%E6%9C%89%E7%90%86%E7%94%B1.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%B0%B8%E5%BD%ACRyanB%20%E5%91%A8%E5%BB%B6%E8%8B%B1%EF%BC%88%E8%8B%B1%E5%AD%90-effie%EF%BC%89%20-%20%E6%B2%A1%E6%9C%89%E7%90%86%E7%94%B1.lrc"
        },
        {
        name: "雾都孤儿",
        artist: "汪苏泷",
        url: "https://sharelist.honus.top/honus/music/song/%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E9%9B%BE%E9%83%BD%E5%AD%A4%E5%84%BF.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E9%9B%BE%E9%83%BD%E5%AD%A4%E5%84%BF.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%B1%AA%E8%8B%8F%E6%B3%B7%20-%20%E9%9B%BE%E9%83%BD%E5%AD%A4%E5%84%BF.lrc"
        },
        {
        name: "虚无赞美诗",
        artist: "沃特艾文尔 兔裹煎蛋卷",
        url: "https://sharelist.honus.top/honus/music/song/%E6%B2%83%E7%89%B9%E8%89%BE%E6%96%87%E5%B0%94%20%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E8%99%9A%E6%97%A0%E8%B5%9E%E7%BE%8E%E8%AF%97.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%B2%83%E7%89%B9%E8%89%BE%E6%96%87%E5%B0%94%20%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E8%99%9A%E6%97%A0%E8%B5%9E%E7%BE%8E%E8%AF%97.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%B2%83%E7%89%B9%E8%89%BE%E6%96%87%E5%B0%94%20%E5%85%94%E8%A3%B9%E7%85%8E%E8%9B%8B%E5%8D%B7%20-%20%E8%99%9A%E6%97%A0%E8%B5%9E%E7%BE%8E%E8%AF%97.lrc"
        },
        {
        name: "为龙",
        artist: "河图",
        url: "https://sharelist.honus.top/honus/music/song/%E6%B2%B3%E5%9B%BE%20-%20%E4%B8%BA%E9%BE%99.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%B2%B3%E5%9B%BE%20-%20%E4%B8%BA%E9%BE%99.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%B2%B3%E5%9B%BE%20-%20%E4%B8%BA%E9%BE%99.lrc"
        },
        {
        name: "倘若无我",
        artist: "洛少爷 封茗囧菌",
        url: "https://sharelist.honus.top/honus/music/song/%E6%B4%9B%E5%B0%91%E7%88%B7%20%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C%20-%20%E5%80%98%E8%8B%A5%E6%97%A0%E6%88%91.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%B4%9B%E5%B0%91%E7%88%B7%20%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C%20-%20%E5%80%98%E8%8B%A5%E6%97%A0%E6%88%91.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%B4%9B%E5%B0%91%E7%88%B7%20%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C%20-%20%E5%80%98%E8%8B%A5%E6%97%A0%E6%88%91.lrc"
        },
        {
        name: "不负相负（Cover 原曲   地尽头）",
        artist: "漆柚",
        url: "https://sharelist.honus.top/honus/music/song/%E6%BC%86%E6%9F%9A%20-%20%E4%B8%8D%E8%B4%9F%E7%9B%B8%E8%B4%9F%EF%BC%88Cover%20%E5%8E%9F%E6%9B%B2%20%20%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E6%BC%86%E6%9F%9A%20-%20%E4%B8%8D%E8%B4%9F%E7%9B%B8%E8%B4%9F%EF%BC%88Cover%20%E5%8E%9F%E6%9B%B2%20%20%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E6%BC%86%E6%9F%9A%20-%20%E4%B8%8D%E8%B4%9F%E7%9B%B8%E8%B4%9F%EF%BC%88Cover%20%E5%8E%9F%E6%9B%B2%20%20%20%E5%9C%B0%E5%B0%BD%E5%A4%B4%EF%BC%89.lrc"
        },
        {
        name: "飞",
        artist: "王恩信Est 二胖u",
        url: "https://sharelist.honus.top/honus/music/song/%E7%8E%8B%E6%81%A9%E4%BF%A1Est%20%E4%BA%8C%E8%83%96u%20-%20%E9%A3%9E.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%8E%8B%E6%81%A9%E4%BF%A1Est%20%E4%BA%8C%E8%83%96u%20-%20%E9%A3%9E.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%8E%8B%E6%81%A9%E4%BF%A1Est%20%E4%BA%8C%E8%83%96u%20-%20%E9%A3%9E.lrc"
        },
        {
        name: "像鱼",
        artist: "王贰浪",
        url: "https://sharelist.honus.top/honus/music/song/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%83%8F%E9%B1%BC.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%83%8F%E9%B1%BC.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%83%8F%E9%B1%BC.lrc"
        },
        {
        name: "往后余生",
        artist: "王贰浪",
        url: "https://sharelist.honus.top/honus/music/song/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F.lrc"
        },
        {
        name: "爱你（Cover 陈芳语）",
        artist: "王贰浪",
        url: "https://sharelist.honus.top/honus/music/song/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E7%88%B1%E4%BD%A0%EF%BC%88Cover%20%E9%99%88%E8%8A%B3%E8%AF%AD%EF%BC%89.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E7%88%B1%E4%BD%A0%EF%BC%88Cover%20%E9%99%88%E8%8A%B3%E8%AF%AD%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%8E%8B%E8%B4%B0%E6%B5%AA%20-%20%E7%88%B1%E4%BD%A0%EF%BC%88Cover%20%E9%99%88%E8%8A%B3%E8%AF%AD%EF%BC%89.lrc"
        },
        {
        name: "弱水三千",
        artist: "石头 张晓棠",
        url: "https://sharelist.honus.top/honus/music/song/%E7%9F%B3%E5%A4%B4%20%E5%BC%A0%E6%99%93%E6%A3%A0%20-%20%E5%BC%B1%E6%B0%B4%E4%B8%89%E5%8D%83.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%9F%B3%E5%A4%B4%20%E5%BC%A0%E6%99%93%E6%A3%A0%20-%20%E5%BC%B1%E6%B0%B4%E4%B8%89%E5%8D%83.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%9F%B3%E5%A4%B4%20%E5%BC%A0%E6%99%93%E6%A3%A0%20-%20%E5%BC%B1%E6%B0%B4%E4%B8%89%E5%8D%83.lrc"
        },
        {
        name: "一人留",
        artist: "石欣卉",
        url: "https://sharelist.honus.top/honus/music/song/%E7%9F%B3%E6%AC%A3%E5%8D%89%20-%20%E4%B8%80%E4%BA%BA%E7%95%99.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%9F%B3%E6%AC%A3%E5%8D%89%20-%20%E4%B8%80%E4%BA%BA%E7%95%99.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%9F%B3%E6%AC%A3%E5%8D%89%20-%20%E4%B8%80%E4%BA%BA%E7%95%99.lrc"
        },
        {
        name: "我的世界（Cover：陈姿彤）",
        artist: "祖娅纳惜",
        url: "https://sharelist.honus.top/honus/music/song/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%EF%BC%88Cover%EF%BC%9A%E9%99%88%E5%A7%BF%E5%BD%A4%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%EF%BC%88Cover%EF%BC%9A%E9%99%88%E5%A7%BF%E5%BD%A4%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%EF%BC%88Cover%EF%BC%9A%E9%99%88%E5%A7%BF%E5%BD%A4%EF%BC%89.lrc"
        },
        {
        name: "血腥爱情故事（Cover：Amit）",
        artist: "祖娅纳惜",
        url: "https://sharelist.honus.top/honus/music/song/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E8%A1%80%E8%85%A5%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88Cover%EF%BC%9AAmit%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E8%A1%80%E8%85%A5%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88Cover%EF%BC%9AAmit%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%A5%96%E5%A8%85%E7%BA%B3%E6%83%9C%20-%20%E8%A1%80%E8%85%A5%E7%88%B1%E6%83%85%E6%95%85%E4%BA%8B%EF%BC%88Cover%EF%BC%9AAmit%EF%BC%89.lrc"
        },
        {
        name: "11：40",
        artist: "祝涵SONAM",
        url: "https://sharelist.honus.top/honus/music/song/%E7%A5%9D%E6%B6%B5SONAM%20-%2011%EF%BC%9A40.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%A5%9D%E6%B6%B5SONAM%20-%2011%EF%BC%9A40.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%A5%9D%E6%B6%B5SONAM%20-%2011%EF%BC%9A40.lrc"
        },
        {
        name: "我的一个道姑朋友（Cover タイナカ彩智   Lon）",
        artist: "纱琉璃Shelley",
        url: "https://sharelist.honus.top/honus/music/song/%E7%BA%B1%E7%90%89%E7%92%83Shelley%20-%20%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B%EF%BC%88Cover%20%E3%82%BF%E3%82%A4%E3%83%8A%E3%82%AB%E5%BD%A9%E6%99%BA%20%20%20Lon%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%BA%B1%E7%90%89%E7%92%83Shelley%20-%20%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B%EF%BC%88Cover%20%E3%82%BF%E3%82%A4%E3%83%8A%E3%82%AB%E5%BD%A9%E6%99%BA%20%20%20Lon%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%BA%B1%E7%90%89%E7%92%83Shelley%20-%20%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B%EF%BC%88Cover%20%E3%82%BF%E3%82%A4%E3%83%8A%E3%82%AB%E5%BD%A9%E6%99%BA%20%20%20Lon%EF%BC%89.lrc"
        },
        {
        name: "片羽吉光",
        artist: "结梦原创音乐团队",
        url: "https://sharelist.honus.top/honus/music/song/%E7%BB%93%E6%A2%A6%E5%8E%9F%E5%88%9B%E9%9F%B3%E4%B9%90%E5%9B%A2%E9%98%9F%20-%20%E7%89%87%E7%BE%BD%E5%90%89%E5%85%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%BB%93%E6%A2%A6%E5%8E%9F%E5%88%9B%E9%9F%B3%E4%B9%90%E5%9B%A2%E9%98%9F%20-%20%E7%89%87%E7%BE%BD%E5%90%89%E5%85%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%BB%93%E6%A2%A6%E5%8E%9F%E5%88%9B%E9%9F%B3%E4%B9%90%E5%9B%A2%E9%98%9F%20-%20%E7%89%87%E7%BE%BD%E5%90%89%E5%85%89.lrc"
        },
        {
        name: "最后的旅行——记《龙族》",
        artist: "绘梨衣",
        url: "https://sharelist.honus.top/honus/music/song/%E7%BB%98%E6%A2%A8%E8%A1%A3%20-%20%E6%9C%80%E5%90%8E%E7%9A%84%E6%97%85%E8%A1%8C%E2%80%94%E2%80%94%E8%AE%B0%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E7%BB%98%E6%A2%A8%E8%A1%A3%20-%20%E6%9C%80%E5%90%8E%E7%9A%84%E6%97%85%E8%A1%8C%E2%80%94%E2%80%94%E8%AE%B0%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E7%BB%98%E6%A2%A8%E8%A1%A3%20-%20%E6%9C%80%E5%90%8E%E7%9A%84%E6%97%85%E8%A1%8C%E2%80%94%E2%80%94%E8%AE%B0%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B.lrc"
        },
        {
        name: "浪人琵琶",
        artist: "胡66",
        url: "https://sharelist.honus.top/honus/music/song/%E8%83%A166%20-%20%E6%B5%AA%E4%BA%BA%E7%90%B5%E7%90%B6.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%83%A166%20-%20%E6%B5%AA%E4%BA%BA%E7%90%B5%E7%90%B6.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%83%A166%20-%20%E6%B5%AA%E4%BA%BA%E7%90%B5%E7%90%B6.lrc"
        },
        {
        name: "你要的全拿走",
        artist: "胡彦斌",
        url: "https://sharelist.honus.top/honus/music/song/%E8%83%A1%E5%BD%A6%E6%96%8C%20-%20%E4%BD%A0%E8%A6%81%E7%9A%84%E5%85%A8%E6%8B%BF%E8%B5%B0.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%83%A1%E5%BD%A6%E6%96%8C%20-%20%E4%BD%A0%E8%A6%81%E7%9A%84%E5%85%A8%E6%8B%BF%E8%B5%B0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%83%A1%E5%BD%A6%E6%96%8C%20-%20%E4%BD%A0%E8%A6%81%E7%9A%84%E5%85%A8%E6%8B%BF%E8%B5%B0.lrc"
        },
        {
        name: "一生所爱",
        artist: "舒淇",
        url: "https://sharelist.honus.top/honus/music/song/%E8%88%92%E6%B7%87%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%88%92%E6%B7%87%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%88%92%E6%B7%87%20-%20%E4%B8%80%E7%94%9F%E6%89%80%E7%88%B1.lrc"
        },
        {
        name: "我好想你",
        artist: "苏打绿",
        url: "https://sharelist.honus.top/honus/music/song/%E8%8B%8F%E6%89%93%E7%BB%BF%20-%20%E6%88%91%E5%A5%BD%E6%83%B3%E4%BD%A0.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%8B%8F%E6%89%93%E7%BB%BF%20-%20%E6%88%91%E5%A5%BD%E6%83%B3%E4%BD%A0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%8B%8F%E6%89%93%E7%BB%BF%20-%20%E6%88%91%E5%A5%BD%E6%83%B3%E4%BD%A0.lrc"
        },
        {
        name: "同罪者（Cover：关淑怡）",
        artist: "苏格小樱桃",
        url: "https://sharelist.honus.top/honus/music/song/%E8%8B%8F%E6%A0%BC%E5%B0%8F%E6%A8%B1%E6%A1%83%20-%20%E5%90%8C%E7%BD%AA%E8%80%85%EF%BC%88Cover%EF%BC%9A%E5%85%B3%E6%B7%91%E6%80%A1%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%8B%8F%E6%A0%BC%E5%B0%8F%E6%A8%B1%E6%A1%83%20-%20%E5%90%8C%E7%BD%AA%E8%80%85%EF%BC%88Cover%EF%BC%9A%E5%85%B3%E6%B7%91%E6%80%A1%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%8B%8F%E6%A0%BC%E5%B0%8F%E6%A8%B1%E6%A1%83%20-%20%E5%90%8C%E7%BD%AA%E8%80%85%EF%BC%88Cover%EF%BC%9A%E5%85%B3%E6%B7%91%E6%80%A1%EF%BC%89.lrc"
        },
        {
        name: "薛晓同人［草木］（Cover：三代目J Soul Brothers）",
        artist: "魔道祖师",
        url: "https://sharelist.honus.top/honus/music/song/%E8%8B%A5%E4%BB%A5%E6%AD%A2%E7%99%BD%20-%20%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88-%E8%96%9B%E6%99%93%E5%90%8C%E4%BA%BA%EF%BC%BB%E8%8D%89%E6%9C%A8%EF%BC%BD%EF%BC%88Cover%EF%BC%9A%E4%B8%89%E4%BB%A3%E7%9B%AEJ%20Soul%20Brothers%EF%BC%89.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%8B%A5%E4%BB%A5%E6%AD%A2%E7%99%BD%20-%20%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88-%E8%96%9B%E6%99%93%E5%90%8C%E4%BA%BA%EF%BC%BB%E8%8D%89%E6%9C%A8%EF%BC%BD%EF%BC%88Cover%EF%BC%9A%E4%B8%89%E4%BB%A3%E7%9B%AEJ%20Soul%20Brothers%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%8B%A5%E4%BB%A5%E6%AD%A2%E7%99%BD%20-%20%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88-%E8%96%9B%E6%99%93%E5%90%8C%E4%BA%BA%EF%BC%BB%E8%8D%89%E6%9C%A8%EF%BC%BD%EF%BC%88Cover%EF%BC%9A%E4%B8%89%E4%BB%A3%E7%9B%AEJ%20Soul%20Brothers%EF%BC%89.lrc"
        },
        {
        name: "星愿",
        artist: "茶理理",
        url: "https://sharelist.honus.top/honus/music/song/%E8%8C%B6%E7%90%86%E7%90%86%20-%20%E6%98%9F%E6%84%BF.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%8C%B6%E7%90%86%E7%90%86%20-%20%E6%98%9F%E6%84%BF.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%8C%B6%E7%90%86%E7%90%86%20-%20%E6%98%9F%E6%84%BF.lrc"
        },
        {
        name: "左手指月",
        artist: "萨顶顶",
        url: "https://sharelist.honus.top/honus/music/song/%E8%90%A8%E9%A1%B6%E9%A1%B6%20-%20%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%90%A8%E9%A1%B6%E9%A1%B6%20-%20%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%90%A8%E9%A1%B6%E9%A1%B6%20-%20%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88.lrc"
        },
        {
        name: "停格",
        artist: "蔡健雅",
        url: "https://sharelist.honus.top/honus/music/song/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20%E5%81%9C%E6%A0%BC.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20%E5%81%9C%E6%A0%BC.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%94%A1%E5%81%A5%E9%9B%85%20-%20%E5%81%9C%E6%A0%BC.lrc"
        },
        {
        name: "I Love The Sky",
        artist: "蔡恩雨",
        url: "https://sharelist.honus.top/honus/music/song/%E8%94%A1%E6%81%A9%E9%9B%A8%20-%20I%C2%A0Love%C2%A0The%C2%A0Sky.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%94%A1%E6%81%A9%E9%9B%A8%20-%20I%C2%A0Love%C2%A0The%C2%A0Sky.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%94%A1%E6%81%A9%E9%9B%A8%20-%20I%C2%A0Love%C2%A0The%C2%A0Sky.lrc"
        },
        {
        name: "我好像在哪见过你",
        artist: "薛之谦",
        url: "https://sharelist.honus.top/honus/music/song/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%96%9B%E4%B9%8B%E8%B0%A6%20-%20%E6%88%91%E5%A5%BD%E5%83%8F%E5%9C%A8%E5%93%AA%E8%A7%81%E8%BF%87%E4%BD%A0.lrc"
        },
        {
        name: "说散就散",
        artist: "袁娅维",
        url: "https://sharelist.honus.top/honus/music/song/%E8%A2%81%E5%A8%85%E7%BB%B4%20-%20%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%A2%81%E5%A8%85%E7%BB%B4%20-%20%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%A2%81%E5%A8%85%E7%BB%B4%20-%20%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3.lrc"
        },
        {
        name: "一些规律",
        artist: "许飞 姚晨",
        url: "https://sharelist.honus.top/honus/music/song/%E8%AE%B8%E9%A3%9E%20%E5%A7%9A%E6%99%A8%20-%20%E4%B8%80%E4%BA%9B%E8%A7%84%E5%BE%8B.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%AE%B8%E9%A3%9E%20%E5%A7%9A%E6%99%A8%20-%20%E4%B8%80%E4%BA%9B%E8%A7%84%E5%BE%8B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%AE%B8%E9%A3%9E%20%E5%A7%9A%E6%99%A8%20-%20%E4%B8%80%E4%BA%9B%E8%A7%84%E5%BE%8B.lrc"
        },
        {
        name: "借我",
        artist: "谢春花",
        url: "https://sharelist.honus.top/honus/music/song/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E5%80%9F%E6%88%91.lrc"
        },
        {
        name: "我从崖边跌落",
        artist: "谢春花",
        url: "https://sharelist.honus.top/honus/music/song/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E6%88%91%E4%BB%8E%E5%B4%96%E8%BE%B9%E8%B7%8C%E8%90%BD.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E6%88%91%E4%BB%8E%E5%B4%96%E8%BE%B9%E8%B7%8C%E8%90%BD.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%B0%A2%E6%98%A5%E8%8A%B1%20-%20%E6%88%91%E4%BB%8E%E5%B4%96%E8%BE%B9%E8%B7%8C%E8%90%BD.lrc"
        },
        {
        name: "无人之境",
        artist: "谣君 白昼星BZX",
        url: "https://sharelist.honus.top/honus/music/song/%E8%B0%A3%E5%90%9B%20%E7%99%BD%E6%98%BC%E6%98%9FBZX%20-%20%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%A2%83.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%B0%A3%E5%90%9B%20%E7%99%BD%E6%98%BC%E6%98%9FBZX%20-%20%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%A2%83.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%B0%A3%E5%90%9B%20%E7%99%BD%E6%98%BC%E6%98%9FBZX%20-%20%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%A2%83.lrc"
        },
        {
        name: "LOVE Theme from TIGA",
        artist: "迪迦奥特曼",
        url: "https://sharelist.honus.top/honus/music/song/%E8%B1%86%E6%B2%99%E5%9B%A2%E5%AD%90AnDango%20-%20%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E8%BF%AA%E8%BF%A6%E5%A5%A5%E7%89%B9%E6%9B%BC%C2%A0-%C2%A0LOVE%C2%A0Theme%C2%A0from%C2%A0TIGA.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%B1%86%E6%B2%99%E5%9B%A2%E5%AD%90AnDango%20-%20%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E8%BF%AA%E8%BF%A6%E5%A5%A5%E7%89%B9%E6%9B%BC%C2%A0-%C2%A0LOVE%C2%A0Theme%C2%A0from%C2%A0TIGA.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%B1%86%E6%B2%99%E5%9B%A2%E5%AD%90AnDango%20-%20%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E8%BF%AA%E8%BF%A6%E5%A5%A5%E7%89%B9%E6%9B%BC%C2%A0-%C2%A0LOVE%C2%A0Theme%C2%A0from%C2%A0TIGA.lrc"
        },
        {
        name: "尽头",
        artist: "赵方婧",
        url: "https://sharelist.honus.top/honus/music/song/%E8%B5%B5%E6%96%B9%E5%A9%A7%20-%20%E5%B0%BD%E5%A4%B4.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%B5%B5%E6%96%B9%E5%A9%A7%20-%20%E5%B0%BD%E5%A4%B4.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%B5%B5%E6%96%B9%E5%A9%A7%20-%20%E5%B0%BD%E5%A4%B4.lrc"
        },
        {
        name: "红尘轻剑—记【魔道祖师】忘羡 双道长 部分群像（Cover：松本恵奈）",
        artist: "轩寞",
        url: "https://sharelist.honus.top/honus/music/song/%E8%BD%A9%E5%AF%9E%20-%20%E7%BA%A2%E5%B0%98%E8%BD%BB%E5%89%91%E2%80%94%E8%AE%B0%E3%80%90%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%91%E5%BF%98%E7%BE%A1%20%E5%8F%8C%E9%81%93%E9%95%BF%20%E9%83%A8%E5%88%86%E7%BE%A4%E5%83%8F%EF%BC%88Cover%EF%BC%9A%E6%9D%BE%E6%9C%AC%E6%81%B5%E5%A5%88%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E8%BD%A9%E5%AF%9E%20-%20%E7%BA%A2%E5%B0%98%E8%BD%BB%E5%89%91%E2%80%94%E8%AE%B0%E3%80%90%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%91%E5%BF%98%E7%BE%A1%20%E5%8F%8C%E9%81%93%E9%95%BF%20%E9%83%A8%E5%88%86%E7%BE%A4%E5%83%8F%EF%BC%88Cover%EF%BC%9A%E6%9D%BE%E6%9C%AC%E6%81%B5%E5%A5%88%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E8%BD%A9%E5%AF%9E%20-%20%E7%BA%A2%E5%B0%98%E8%BD%BB%E5%89%91%E2%80%94%E8%AE%B0%E3%80%90%E9%AD%94%E9%81%93%E7%A5%96%E5%B8%88%E3%80%91%E5%BF%98%E7%BE%A1%20%E5%8F%8C%E9%81%93%E9%95%BF%20%E9%83%A8%E5%88%86%E7%BE%A4%E5%83%8F%EF%BC%88Cover%EF%BC%9A%E6%9D%BE%E6%9C%AC%E6%81%B5%E5%A5%88%EF%BC%89.lrc"
        },
        {
        name: "山丘 （Cover 李宗盛）",
        artist: "金玟岐",
        url: "https://sharelist.honus.top/honus/music/song/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B1%B1%E4%B8%98%20%EF%BC%88Cover%20%E6%9D%8E%E5%AE%97%E7%9B%9B%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B1%B1%E4%B8%98%20%EF%BC%88Cover%20%E6%9D%8E%E5%AE%97%E7%9B%9B%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B1%B1%E4%B8%98%20%EF%BC%88Cover%20%E6%9D%8E%E5%AE%97%E7%9B%9B%EF%BC%89.lrc"
        },
        {
        name: "岁月神偷",
        artist: "金玟岐",
        url: "https://sharelist.honus.top/honus/music/song/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B2%81%E6%9C%88%E7%A5%9E%E5%81%B7.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B2%81%E6%9C%88%E7%A5%9E%E5%81%B7.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E5%B2%81%E6%9C%88%E7%A5%9E%E5%81%B7.lrc"
        },
        {
        name: "爱呀",
        artist: "金玟岐",
        url: "https://sharelist.honus.top/honus/music/song/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E7%88%B1%E5%91%80.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E7%88%B1%E5%91%80.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%87%91%E7%8E%9F%E5%B2%90%20-%20%E7%88%B1%E5%91%80.lrc"
        },
        {
        name: "腐草为萤",
        artist: "银临",
        url: "https://sharelist.honus.top/honus/music/song/%E9%93%B6%E4%B8%B4%20-%20%E8%85%90%E8%8D%89%E4%B8%BA%E8%90%A4.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%93%B6%E4%B8%B4%20-%20%E8%85%90%E8%8D%89%E4%B8%BA%E8%90%A4.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%93%B6%E4%B8%B4%20-%20%E8%85%90%E8%8D%89%E4%B8%BA%E8%90%A4.lrc"
        },
        {
        name: "橙光《末生》朴灿烈角色歌【等不及】（Cover Ailee）",
        artist: "阿YueYue",
        url: "https://sharelist.honus.top/honus/music/song/%E9%98%BFYueYue%20-%20%E6%A9%99%E5%85%89%E3%80%8A%E6%9C%AB%E7%94%9F%E3%80%8B%E6%9C%B4%E7%81%BF%E7%83%88%E8%A7%92%E8%89%B2%E6%AD%8C%E3%80%90%E7%AD%89%E4%B8%8D%E5%8F%8A%E3%80%91%EF%BC%88Cover%20Ailee%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%98%BFYueYue%20-%20%E6%A9%99%E5%85%89%E3%80%8A%E6%9C%AB%E7%94%9F%E3%80%8B%E6%9C%B4%E7%81%BF%E7%83%88%E8%A7%92%E8%89%B2%E6%AD%8C%E3%80%90%E7%AD%89%E4%B8%8D%E5%8F%8A%E3%80%91%EF%BC%88Cover%20Ailee%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%98%BFYueYue%20-%20%E6%A9%99%E5%85%89%E3%80%8A%E6%9C%AB%E7%94%9F%E3%80%8B%E6%9C%B4%E7%81%BF%E7%83%88%E8%A7%92%E8%89%B2%E6%AD%8C%E3%80%90%E7%AD%89%E4%B8%8D%E5%8F%8A%E3%80%91%EF%BC%88Cover%20Ailee%EF%BC%89.lrc"
        },
        {
        name: "青鸟 (Live)",
        artist: "陈乐一",
        url: "https://sharelist.honus.top/honus/music/song/%E9%99%88%E4%B9%90%E4%B8%80%20-%20%E9%9D%92%E9%B8%9F%20%28Live%29.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%99%88%E4%B9%90%E4%B8%80%20-%20%E9%9D%92%E9%B8%9F%20%28Live%29.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%99%88%E4%B9%90%E4%B8%80%20-%20%E9%9D%92%E9%B8%9F%20%28Live%29.lrc"
        },
        {
        name: "战争世界",
        artist: "陈姿彤",
        url: "https://sharelist.honus.top/honus/music/song/%E9%99%88%E5%A7%BF%E5%BD%A4%20-%20%E6%88%98%E4%BA%89%E4%B8%96%E7%95%8C.flac",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%99%88%E5%A7%BF%E5%BD%A4%20-%20%E6%88%98%E4%BA%89%E4%B8%96%E7%95%8C.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%99%88%E5%A7%BF%E5%BD%A4%20-%20%E6%88%98%E4%BA%89%E4%B8%96%E7%95%8C.lrc"
        },
        {
        name: "故梦 双声道 陵易 双笙（Cover 橙翼）",
        artist: "陵易_Line 双笙",
        url: "https://sharelist.honus.top/honus/music/song/%E9%99%B5%E6%98%93_Line%20%E5%8F%8C%E7%AC%99%20-%20%E6%95%85%E6%A2%A6%C2%A0%E5%8F%8C%E5%A3%B0%E9%81%93%C2%A0%E9%99%B5%E6%98%93%20%E5%8F%8C%E7%AC%99%EF%BC%88Cover%20%E6%A9%99%E7%BF%BC%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%99%B5%E6%98%93_Line%20%E5%8F%8C%E7%AC%99%20-%20%E6%95%85%E6%A2%A6%C2%A0%E5%8F%8C%E5%A3%B0%E9%81%93%C2%A0%E9%99%B5%E6%98%93%20%E5%8F%8C%E7%AC%99%EF%BC%88Cover%20%E6%A9%99%E7%BF%BC%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%99%B5%E6%98%93_Line%20%E5%8F%8C%E7%AC%99%20-%20%E6%95%85%E6%A2%A6%C2%A0%E5%8F%8C%E5%A3%B0%E9%81%93%C2%A0%E9%99%B5%E6%98%93%20%E5%8F%8C%E7%AC%99%EF%BC%88Cover%20%E6%A9%99%E7%BF%BC%EF%BC%89.lrc"
        },
        {
        name: "冷暴力",
        artist: "韦星弟 任然",
        url: "https://sharelist.honus.top/honus/music/song/%E9%9F%A6%E6%98%9F%E5%BC%9F%20%E4%BB%BB%E7%84%B6%20-%20%E5%86%B7%E6%9A%B4%E5%8A%9B.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%9F%A6%E6%98%9F%E5%BC%9F%20%E4%BB%BB%E7%84%B6%20-%20%E5%86%B7%E6%9A%B4%E5%8A%9B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%9F%A6%E6%98%9F%E5%BC%9F%20%E4%BB%BB%E7%84%B6%20-%20%E5%86%B7%E6%9A%B4%E5%8A%9B.lrc"
        },
        {
        name: "飞云之下",
        artist: "韩红 林俊杰",
        url: "https://sharelist.honus.top/honus/music/song/%E9%9F%A9%E7%BA%A2%20%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%A3%9E%E4%BA%91%E4%B9%8B%E4%B8%8B.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%9F%A9%E7%BA%A2%20%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%A3%9E%E4%BA%91%E4%B9%8B%E4%B8%8B.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%9F%A9%E7%BA%A2%20%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%A3%9E%E4%BA%91%E4%B9%8B%E4%B8%8B.lrc"
        },
        {
        name: "红昭愿",
        artist: "音阙诗听",
        url: "https://sharelist.honus.top/honus/music/song/%E9%9F%B3%E9%98%99%E8%AF%97%E5%90%AC%20-%20%E7%BA%A2%E6%98%AD%E6%84%BF.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%9F%B3%E9%98%99%E8%AF%97%E5%90%AC%20-%20%E7%BA%A2%E6%98%AD%E6%84%BF.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%9F%B3%E9%98%99%E8%AF%97%E5%90%AC%20-%20%E7%BA%A2%E6%98%AD%E6%84%BF.lrc"
        },
        {
        name: "浮生未歇",
        artist: "音频怪物",
        url: "https://sharelist.honus.top/honus/music/song/%E9%9F%B3%E9%A2%91%E6%80%AA%E7%89%A9%20-%20%E6%B5%AE%E7%94%9F%E6%9C%AA%E6%AD%87.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%9F%B3%E9%A2%91%E6%80%AA%E7%89%A9%20-%20%E6%B5%AE%E7%94%9F%E6%9C%AA%E6%AD%87.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%9F%B3%E9%A2%91%E6%80%AA%E7%89%A9%20-%20%E6%B5%AE%E7%94%9F%E6%9C%AA%E6%AD%87.lrc"
        },
        {
        name: "青い夜の記憶",
        artist: "须藤ひとみ",
        url: "https://sharelist.honus.top/honus/music/song/%E9%A1%BB%E8%97%A4%E3%81%B2%E3%81%A8%E3%81%BF%20-%20%E9%9D%92%E3%81%84%E5%A4%9C%E3%81%AE%E8%A8%98%E6%86%B6.FLAC",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%A1%BB%E8%97%A4%E3%81%B2%E3%81%A8%E3%81%BF%20-%20%E9%9D%92%E3%81%84%E5%A4%9C%E3%81%AE%E8%A8%98%E6%86%B6.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%A1%BB%E8%97%A4%E3%81%B2%E3%81%A8%E3%81%BF%20-%20%E9%9D%92%E3%81%84%E5%A4%9C%E3%81%AE%E8%A8%98%E6%86%B6.lrc"
        },
        {
        name: "困在",
        artist: "魏如萱",
        url: "https://sharelist.honus.top/honus/music/song/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E5%9B%B0%E5%9C%A8.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E5%9B%B0%E5%9C%A8.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%AD%8F%E5%A6%82%E8%90%B1%20-%20%E5%9B%B0%E5%9C%A8.lrc"
        },
        {
        name: "需要人陪（Cover：王力宏）",
        artist: "鱼大仙儿",
        url: "https://sharelist.honus.top/honus/music/song/%E9%B1%BC%E5%A4%A7%E4%BB%99%E5%84%BF%20-%20%E9%9C%80%E8%A6%81%E4%BA%BA%E9%99%AA%EF%BC%88Cover%EF%BC%9A%E7%8E%8B%E5%8A%9B%E5%AE%8F%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%B1%BC%E5%A4%A7%E4%BB%99%E5%84%BF%20-%20%E9%9C%80%E8%A6%81%E4%BA%BA%E9%99%AA%EF%BC%88Cover%EF%BC%9A%E7%8E%8B%E5%8A%9B%E5%AE%8F%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%B1%BC%E5%A4%A7%E4%BB%99%E5%84%BF%20-%20%E9%9C%80%E8%A6%81%E4%BA%BA%E9%99%AA%EF%BC%88Cover%EF%BC%9A%E7%8E%8B%E5%8A%9B%E5%AE%8F%EF%BC%89.lrc"
        },
        {
        name: "9420",
        artist: "麦小兜",
        url: "https://sharelist.honus.top/honus/music/song/%E9%BA%A6%E5%B0%8F%E5%85%9C%20-%209420.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%BA%A6%E5%B0%8F%E5%85%9C%20-%209420.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%BA%A6%E5%B0%8F%E5%85%9C%20-%209420.lrc"
        },
        {
        name: "月光 （Cover 金弦）",
        artist: "黄诗扶",
        url: "https://sharelist.honus.top/honus/music/song/%E9%BB%84%E8%AF%97%E6%89%B6%20-%20%E6%9C%88%E5%85%89%20%EF%BC%88Cover%20%E9%87%91%E5%BC%A6%EF%BC%89.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%BB%84%E8%AF%97%E6%89%B6%20-%20%E6%9C%88%E5%85%89%20%EF%BC%88Cover%20%E9%87%91%E5%BC%A6%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%BB%84%E8%AF%97%E6%89%B6%20-%20%E6%9C%88%E5%85%89%20%EF%BC%88Cover%20%E9%87%91%E5%BC%A6%EF%BC%89.lrc"
        },
        {
        name: "痒",
        artist: "黄龄",
        url: "https://sharelist.honus.top/honus/music/song/%E9%BB%84%E9%BE%84%20-%20%E7%97%92.MP3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%BB%84%E9%BE%84%20-%20%E7%97%92.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%BB%84%E9%BE%84%20-%20%E7%97%92.lrc"
        },
        {
        name: "Attention Acoustic ver",
        artist: "黑崎子",
        url: "https://sharelist.honus.top/honus/music/song/%E9%BB%91%E5%B4%8E%E5%AD%90%20-%20Attention(Acoustic%20ver.)%EF%BC%88Cover%20Charlie%20Puth%EF%BC%89.mp3",
        cover: "https://sharelist.honus.top/honus/music/image/%E9%BB%91%E5%B4%8E%E5%AD%90%20-%20Attention(Acoustic%20ver)%EF%BC%88Cover%20Charlie%20Puth%EF%BC%89.jpg",
        lrc: "https://sharelist.honus.top/honus/music/lrc/%E9%BB%91%E5%B4%8E%E5%AD%90%20-%20Attention(Acoustic%20ver)%EF%BC%88Cover%20Charlie%20Puth%EF%BC%89.lrc"
        }]
