var binft = function (r) {
  function t() {
    return b[Math.floor(Math.random() * b.length)]
  }  
  function e() {
    return String.fromCharCode(94 * Math.random() + 33)
  }
  function n(r) {
    for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
      var l = document.createElement("span");
      l.textContent = e(), l.style.color = t(), n.appendChild(l)
    }
    return n
  }
  function i() {
    var t = o[c.skillI];
    c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
  }
  var l = "",
  o = ["Welcme to myblog!", "这是CH 笔记！","努力的意义在于：", "以后的日子里放眼望去，都是你喜欢的人和事。","虽然辛苦，我还是会选择那种滚烫的人生。","心外无字，便是万语千言。","只要把最好的一面，留给那个最重要的人就好。","有付出就有回报的世界，哪里不公平了。","祝愿我们在抵达路的末端时，都不会后悔。"].map(function (r) {
  return r + ""
  }),
  /* 彩色滚动字体详细设置： a为换句时间；g为每隔多少字母换一个文字；s为显示多少字母才换一个文字；d为字母更换速度；b是字母颜色*/
  a = 2,
  g = 1,
  s = 5,
  d = 70,
  b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
  /* 彩色滚动字体详细设置： 此部分建议不要作改动! text为前缀。。。*/
  c = {
    text: "",
    prefixP: -s,
    skillI: 0,
    skillP: 0,
    direction: "forward",
    delay: a,
    step: g
  };
  i()
  };
  binft(document.getElementById('binft'));