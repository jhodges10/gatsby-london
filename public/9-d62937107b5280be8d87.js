;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    204: function(e, t, r) {
      "use strict"
      r(31),
        r(14),
        r(39),
        r(41),
        r(30),
        r(50),
        r(52),
        r(68),
        r(94),
        r(13),
        r(134),
        r(67),
        r(29),
        r(51),
        r(38),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 })
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              },
        o = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(n = (i = l.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (u) {
                  ;(o = !0), (a = u)
                } finally {
                  try {
                    !n && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return r
              })(e, t)
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            )
          }
        })()
      ;(t.parseStartTime = function(e) {
        return y(e, c)
      }),
        (t.parseEndTime = function(e) {
          return y(e, f)
        }),
        (t.randomString = function() {
          return Math.random()
            .toString(36)
            .substr(2, 5)
        }),
        (t.queryString = function(e) {
          return Object.keys(e)
            .map(function(t) {
              return t + "=" + e[t]
            })
            .join("&")
        }),
        (t.getSDK = function(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function() {
                    return !0
                  },
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : a.default
          if (window[t] && n(window[t])) return Promise.resolve(window[t])
          return new Promise(function(n, a) {
            if (h[e]) h[e].push(n)
            else {
              h[e] = [n]
              var i = function(t) {
                h[e].forEach(function(e) {
                  return e(t)
                })
              }
              if (r) {
                var l = window[r]
                window[r] = function() {
                  l && l(), i(window[t])
                }
              }
              o(e, function(e) {
                e && a(e), r || i(window[t])
              })
            }
          })
        }),
        (t.getConfig = function(e, t, r) {
          var n = (0, i.default)(t.config, e.config),
            o = !0,
            a = !1,
            u = void 0
          try {
            for (
              var c, f = l.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();
              !(o = (c = f.next()).done);
              o = !0
            ) {
              var p = c.value
              if (e[p]) {
                var d = p.replace(/Config$/, "")
                if (((n = (0, i.default)(n, s({}, d, e[p]))), r)) {
                  var y =
                    "ReactPlayer: %c" +
                    p +
                    " %cis deprecated, please use the config prop instead – https://github.com/CookPete/react-player#config-prop"
                  console.warn(y, "font-weight: bold", "")
                }
              }
            }
          } catch (h) {
            ;(a = !0), (u = h)
          } finally {
            try {
              !o && f.return && f.return()
            } finally {
              if (a) throw u
            }
          }
          return n
        }),
        (t.omit = function(e) {
          for (
            var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o]
          var a = (t = []).concat.apply(t, n),
            i = {},
            l = Object.keys(e),
            u = !0,
            s = !1,
            c = void 0
          try {
            for (
              var f, p = l[Symbol.iterator]();
              !(u = (f = p.next()).done);
              u = !0
            ) {
              var d = f.value
              ;-1 === a.indexOf(d) && (i[d] = e[d])
            }
          } catch (y) {
            ;(s = !0), (c = y)
          } finally {
            try {
              !u && p.return && p.return()
            } finally {
              if (s) throw c
            }
          }
          return i
        }),
        (t.callPlayer = function(e) {
          var t
          if (!this.player || !this.player[e]) {
            var r =
              "ReactPlayer: " +
              this.constructor.displayName +
              " player could not call %c" +
              e +
              "%c – "
            return (
              this.player
                ? this.player[e] || (r += "The method was not available")
                : (r += "The player was not available"),
              console.warn(r, "font-weight: bold", ""),
              null
            )
          }
          for (
            var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            o[a - 1] = arguments[a]
          return (t = this.player)[e].apply(t, o)
        }),
        (t.isObject = v),
        (t.isEqual = function e(t, r) {
          if ("function" == typeof t && "function" == typeof r) return !0
          if (t instanceof Array && r instanceof Array) {
            if (t.length !== r.length) return !1
            for (var n = 0; n !== t.length; n++) if (!e(t[n], r[n])) return !1
            return !0
          }
          if (v(t) && v(r)) {
            if (Object.keys(t).length !== Object.keys(r).length) return !1
            var o = !0,
              a = !1,
              i = void 0
            try {
              for (
                var l, u = Object.keys(t)[Symbol.iterator]();
                !(o = (l = u.next()).done);
                o = !0
              ) {
                var s = l.value
                if (!e(t[s], r[s])) return !1
              }
            } catch (c) {
              ;(a = !0), (i = c)
            } finally {
              try {
                !o && u.return && u.return()
              } finally {
                if (a) throw i
              }
            }
            return !0
          }
          return t === r
        }),
        (t.isMediaStream = function(e) {
          return (
            "undefined" != typeof window &&
            void 0 !== window.MediaStream &&
            e instanceof window.MediaStream
          )
        })
      var a = u(r(230)),
        i = u(r(231)),
        l = r(212)
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var c = /[?&#](?:start|t)=([0-9hms]+)/,
        f = /[?&#]end=([0-9hms]+)/,
        p = /(\d+)(h|m|s)/g,
        d = /^\d+$/
      function y(e, t) {
        var r = e.match(t)
        if (r) {
          var n = r[1]
          if (n.match(p))
            return (function(e) {
              var t = 0,
                r = p.exec(e)
              for (; null !== r; ) {
                var n = r,
                  a = o(n, 3),
                  i = a[1],
                  l = a[2]
                "h" === l && (t += 60 * parseInt(i, 10) * 60),
                  "m" === l && (t += 60 * parseInt(i, 10)),
                  "s" === l && (t += parseInt(i, 10)),
                  (r = p.exec(e))
              }
              return t
            })(n)
          if (d.test(n)) return parseInt(n)
        }
      }
      var h = {}
      function v(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : n(e))
      }
    },
    206: function(e, t, r) {
      "use strict"
      r(29),
        r(30),
        r(13),
        r(50),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 })
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })()
      t.default = function(e) {
        var t, r
        return (
          (r = t = (function(t) {
            function r() {
              var e, t, n
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              })(this, r)
              for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                a[i] = arguments[i]
              return (
                (n = f(
                  this,
                  (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                    e,
                    [this].concat(a)
                  )
                )),
                (t = n),
                (n.config = (0, u.getConfig)(n.props, l.defaultProps, !0)),
                (n.getDuration = function() {
                  return n.player ? n.player.getDuration() : null
                }),
                (n.getCurrentTime = function() {
                  return n.player ? n.player.getCurrentTime() : null
                }),
                (n.getSecondsLoaded = function() {
                  return n.player ? n.player.getSecondsLoaded() : null
                }),
                (n.getInternalPlayer = function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "player"
                  return n.player ? n.player.getInternalPlayer(e) : null
                }),
                (n.seekTo = function(e, t) {
                  if (!n.player) return null
                  n.player.seekTo(e, t)
                }),
                (n.ref = function(e) {
                  n.player = e
                }),
                f(n, t)
              )
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t))
              })(r, t),
              o(r, [
                {
                  key: "shouldComponentUpdate",
                  value: function(e) {
                    return !(0, u.isEqual)(this.props, e)
                  },
                },
                {
                  key: "componentWillUpdate",
                  value: function(e) {
                    this.config = (0, u.getConfig)(e, l.defaultProps)
                  },
                },
                {
                  key: "render",
                  value: function() {
                    var t = this.config.file,
                      r = t.forceVideo,
                      o = t.forceAudio,
                      a = t.forceHLS,
                      c = t.forceDASH,
                      f = r || o || a || c
                    if (!e.canPlay(this.props.url) && !f) return null
                    var d = this.props,
                      y = d.style,
                      h = d.width,
                      v = d.height,
                      m = d.wrapper,
                      g = (0, u.omit)(this.props, p, l.DEPRECATED_CONFIG_PROPS)
                    return i.default.createElement(
                      m,
                      n({ style: n({}, y, { width: h, height: v }) }, g),
                      i.default.createElement(
                        s.default,
                        n({}, this.props, {
                          ref: this.ref,
                          activePlayer: e,
                          config: this.config,
                        })
                      )
                    )
                  },
                },
              ]),
              r
            )
          })(a.Component)),
          (t.displayName = e.displayName + "Player"),
          (t.propTypes = l.propTypes),
          (t.defaultProps = l.defaultProps),
          (t.canPlay = e.canPlay),
          r
        )
      }
      var a = r(0),
        i = c(a),
        l = r(212),
        u = r(204),
        s = c(r(218))
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var p = Object.keys(l.propTypes)
    },
    212: function(e, t, r) {
      "use strict"
      r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEPRECATED_CONFIG_PROPS = t.defaultProps = t.propTypes = void 0)
      var n,
        o = r(53),
        a = (n = o) && n.__esModule ? n : { default: n }
      var i = a.default.string,
        l = a.default.bool,
        u = a.default.number,
        s = a.default.array,
        c = a.default.oneOfType,
        f = a.default.shape,
        p = a.default.object,
        d = a.default.func
      ;(t.propTypes = {
        url: c([i, s, p]),
        playing: l,
        loop: l,
        controls: l,
        volume: u,
        muted: l,
        playbackRate: u,
        width: c([i, u]),
        height: c([i, u]),
        style: p,
        progressInterval: u,
        playsinline: l,
        pip: l,
        light: c([l, i]),
        wrapper: c([i, d, f({ render: d.isRequired })]),
        config: f({
          soundcloud: f({ options: p, preload: l }),
          youtube: f({ playerVars: p, embedOptions: p, preload: l }),
          facebook: f({ appId: i }),
          dailymotion: f({ params: p, preload: l }),
          vimeo: f({ playerOptions: p, preload: l }),
          file: f({
            attributes: p,
            tracks: s,
            forceVideo: l,
            forceAudio: l,
            forceHLS: l,
            forceDASH: l,
            hlsOptions: p,
            hlsVersion: i,
            dashVersion: i,
          }),
          wistia: f({ options: p }),
          mixcloud: f({ options: p }),
          twitch: f({ options: p }),
        }),
        onReady: d,
        onStart: d,
        onPlay: d,
        onPause: d,
        onBuffer: d,
        onBufferEnd: d,
        onEnded: d,
        onError: d,
        onDuration: d,
        onSeek: d,
        onProgress: d,
        onEnablePIP: d,
        onDisablePIP: d,
      }),
        (t.defaultProps = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          light: !1,
          wrapper: "div",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              preload: !1,
            },
            facebook: { appId: "1309697205772819" },
            dailymotion: {
              params: { api: 1, "endscreen-enable": !1 },
              preload: !1,
            },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
              preload: !1,
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              hlsOptions: {},
              hlsVersion: "0.10.1",
              dashVersion: "2.9.2",
            },
            wistia: { options: {} },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {} },
          },
          onReady: function() {},
          onStart: function() {},
          onPlay: function() {},
          onPause: function() {},
          onBuffer: function() {},
          onBufferEnd: function() {},
          onEnded: function() {},
          onError: function() {},
          onDuration: function() {},
          onSeek: function() {},
          onProgress: function() {},
          onEnablePIP: function() {},
          onDisablePIP: function() {},
        }),
        (t.DEPRECATED_CONFIG_PROPS = [
          "soundcloudConfig",
          "youtubeConfig",
          "facebookConfig",
          "dailymotionConfig",
          "vimeoConfig",
          "fileConfig",
          "wistiaConfig",
        ])
    },
    214: function(e, t, r) {
      "use strict"
      r(29), r(30), r(13), r(93), r(136), r(215)
      var n = r(15)
      ;(t.__esModule = !0), (t.default = void 0)
      var o,
        a = n(r(70)),
        i = n(r(72)),
        l = n(r(138)),
        u = n(r(139)),
        s = n(r(0)),
        c = n(r(53)),
        f = function(e) {
          var t = (0, u.default)({}, e),
            r = t.resolutions,
            n = t.sizes,
            o = t.critical
          return (
            r && ((t.fixed = r), delete t.resolutions),
            n && ((t.fluid = n), delete t.sizes),
            o && (t.loading = "eager"),
            t.fluid && (t.fluid = P([].concat(t.fluid))),
            t.fixed && (t.fixed = P([].concat(t.fixed))),
            t
          )
        },
        p = function(e) {
          var t = e.fluid,
            r = e.fixed
          return ((t && t[0]) || (r && r[0])).src
        },
        d = Object.create({}),
        y = function(e) {
          var t = f(e),
            r = p(t)
          return d[r] || !1
        },
        h =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        v = "undefined" != typeof window,
        m = v && window.IntersectionObserver,
        g = new WeakMap()
      function b(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.srcSet,
            n = e.srcSetWebp,
            o = e.media,
            a = e.sizes
          return s.default.createElement(
            s.default.Fragment,
            { key: t },
            n &&
              s.default.createElement("source", {
                type: "image/webp",
                media: o,
                srcSet: n,
                sizes: a,
              }),
            s.default.createElement("source", { media: o, srcSet: r, sizes: a })
          )
        })
      }
      function P(e) {
        var t = [],
          r = []
        return (
          e.forEach(function(e) {
            return (e.media ? t : r).push(e)
          }),
          t.concat(r)
        )
      }
      function w(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            n = e.tracedSVG
          return s.default.createElement("source", {
            key: t,
            media: r,
            srcSet: n,
          })
        })
      }
      function k(e) {
        return e.map(function(e) {
          var t = e.src,
            r = e.media,
            n = e.base64
          return s.default.createElement("source", {
            key: t,
            media: r,
            srcSet: n,
          })
        })
      }
      function O(e, t) {
        var r = e.srcSet,
          n = e.srcSetWebp,
          o = e.media,
          a = e.sizes
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (o ? 'media="' + o + '" ' : "") +
          'srcset="' +
          (t ? n : r) +
          '" ' +
          (a ? 'sizes="' + a + '" ' : "") +
          "/>"
        )
      }
      var E = function(e, t) {
          var r =
            (void 0 === o &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (o = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (g.has(e.target)) {
                      var t = g.get(e.target)
                      ;(e.isIntersecting || e.intersectionRatio > 0) &&
                        (o.unobserve(e.target), g.delete(e.target), t())
                    }
                  })
                },
                { rootMargin: "200px" }
              )),
            o)
          return (
            r && (r.observe(e), g.set(e, t)),
            function() {
              r.unobserve(e), g.delete(e)
            }
          )
        },
        S = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            r = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            o = e.title ? 'title="' + e.title + '" ' : "",
            a = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            i = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            u = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            s = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : ""
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? O(e, !0) : "") + O(e)
              })
              .join("") +
            "<img " +
            s +
            i +
            l +
            r +
            n +
            t +
            a +
            o +
            u +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        _ = function(e) {
          var t = e.src,
            r = e.imageVariants,
            n = e.generateSources,
            o = e.spreadProps,
            a = s.default.createElement(j, (0, u.default)({ src: t }, o))
          return r.length > 1
            ? s.default.createElement("picture", null, n(r), a)
            : a
        },
        j = s.default.forwardRef(function(e, t) {
          var r = e.sizes,
            n = e.srcSet,
            o = e.src,
            a = e.style,
            i = e.onLoad,
            c = e.onError,
            f = e.loading,
            p = e.draggable,
            d = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
            ])
          return s.default.createElement(
            "img",
            (0, u.default)({ sizes: r, srcSet: n, src: o }, d, {
              onLoad: i,
              onError: c,
              ref: t,
              loading: f,
              draggable: p,
              style: (0, u.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                },
                a
              ),
            })
          )
        })
      j.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      }
      var T = (function(e) {
        function t(t) {
          var r
          ;((r = e.call(this, t) || this).seenBefore = v && y(t)),
            (r.addNoScript = !(t.critical && !t.fadeIn)),
            (r.useIOSupport = !h && m && !t.critical && !r.seenBefore)
          var n = t.critical || (v && (h || !r.useIOSupport))
          return (
            (r.state = {
              isVisible: n,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !r.seenBefore && t.fadeIn,
            }),
            (r.imageRef = s.default.createRef()),
            (r.handleImageLoaded = r.handleImageLoaded.bind(
              (0, i.default)((0, i.default)(r))
            )),
            (r.handleRef = r.handleRef.bind((0, i.default)((0, i.default)(r)))),
            r
          )
        }
        ;(0, a.default)(t, e)
        var r = t.prototype
        return (
          (r.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: y(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (r.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners()
          }),
          (r.handleRef = function(e) {
            var t = this
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = E(e, function() {
                var e = y(t.props)
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    return t.setState({
                      imgLoaded: e,
                      imgCached: !!t.imageRef.current.currentSrc,
                    })
                  })
              }))
          }),
          (r.handleImageLoaded = function() {
            var e, t, r
            ;(e = this.props),
              (t = f(e)),
              (r = p(t)),
              (d[r] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (r.render = function() {
            var e = f(this.props),
              t = e.title,
              r = e.alt,
              n = e.className,
              o = e.style,
              a = void 0 === o ? {} : o,
              i = e.imgStyle,
              l = void 0 === i ? {} : i,
              c = e.placeholderStyle,
              p = void 0 === c ? {} : c,
              d = e.placeholderClassName,
              y = e.fluid,
              h = e.fixed,
              v = e.backgroundColor,
              m = e.durationFadeIn,
              g = e.Tag,
              P = e.itemProp,
              O = e.loading,
              E = e.draggable,
              T = !1 === this.state.fadeIn || this.state.imgLoaded,
              L = !0 === this.state.fadeIn && !this.state.imgCached,
              R = (0, u.default)(
                {
                  opacity: T ? 1 : 0,
                  transition: L ? "opacity " + m + "ms" : "none",
                },
                l
              ),
              C = "boolean" == typeof v ? "lightgray" : v,
              I = { transitionDelay: m + "ms" },
              D = (0, u.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                L && I,
                l,
                p
              ),
              A = {
                title: t,
                alt: this.state.isVisible ? "" : r,
                style: D,
                className: d,
              }
            if (y) {
              var M = y,
                x = M[0]
              return s.default.createElement(
                g,
                {
                  className: (n || "") + " gatsby-image-wrapper",
                  style: (0, u.default)(
                    { position: "relative", overflow: "hidden" },
                    a
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(x.srcSet),
                },
                s.default.createElement(g, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / x.aspectRatio + "%",
                  },
                }),
                C &&
                  s.default.createElement(g, {
                    title: t,
                    style: (0, u.default)(
                      {
                        backgroundColor: C,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      L && I
                    ),
                  }),
                x.base64 &&
                  s.default.createElement(_, {
                    src: x.base64,
                    spreadProps: A,
                    imageVariants: M,
                    generateSources: k,
                  }),
                x.tracedSVG &&
                  s.default.createElement(_, {
                    src: x.tracedSVG,
                    spreadProps: A,
                    imageVariants: M,
                    generateSources: w,
                  }),
                this.state.isVisible &&
                  s.default.createElement(
                    "picture",
                    null,
                    b(M),
                    s.default.createElement(j, {
                      alt: r,
                      title: t,
                      sizes: x.sizes,
                      src: x.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: x.srcSet,
                      style: R,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: P,
                      loading: O,
                      draggable: E,
                    })
                  ),
                this.addNoScript &&
                  s.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: S(
                        (0, u.default)({ alt: r, title: t, loading: O }, x, {
                          imageVariants: M,
                        })
                      ),
                    },
                  })
              )
            }
            if (h) {
              var V = h,
                N = V[0],
                F = (0, u.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: N.width,
                    height: N.height,
                  },
                  a
                )
              return (
                "inherit" === a.display && delete F.display,
                s.default.createElement(
                  g,
                  {
                    className: (n || "") + " gatsby-image-wrapper",
                    style: F,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(N.srcSet),
                  },
                  C &&
                    s.default.createElement(g, {
                      title: t,
                      style: (0, u.default)(
                        {
                          backgroundColor: C,
                          width: N.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: N.height,
                        },
                        L && I
                      ),
                    }),
                  N.base64 &&
                    s.default.createElement(_, {
                      src: N.base64,
                      spreadProps: A,
                      imageVariants: V,
                      generateSources: k,
                    }),
                  N.tracedSVG &&
                    s.default.createElement(_, {
                      src: N.tracedSVG,
                      spreadProps: A,
                      imageVariants: V,
                      generateSources: w,
                    }),
                  this.state.isVisible &&
                    s.default.createElement(
                      "picture",
                      null,
                      b(V),
                      s.default.createElement(j, {
                        alt: r,
                        title: t,
                        width: N.width,
                        height: N.height,
                        sizes: N.sizes,
                        src: N.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: N.srcSet,
                        style: R,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: P,
                        loading: O,
                        draggable: E,
                      })
                    ),
                  this.addNoScript &&
                    s.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: S(
                          (0, u.default)({ alt: r, title: t, loading: O }, N, {
                            imageVariants: V,
                          })
                        ),
                      },
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(s.default.Component)
      T.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      }
      var L = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        }),
        R = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        })
      T.propTypes = {
        resolutions: L,
        sizes: R,
        fixed: c.default.oneOfType([L, c.default.arrayOf(L)]),
        fluid: c.default.oneOfType([R, c.default.arrayOf(R)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool,
      }
      var C = T
      t.default = C
    },
    215: function(e, t, r) {
      "use strict"
      r(216)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "")
        }
      })
    },
    216: function(e, t, r) {
      var n = r(1),
        o = r(7),
        a = r(32),
        i = /"/g,
        l = function(e, t, r, n) {
          var o = String(a(e)),
            l = "<" + t
          return (
            "" !== r &&
              (l += " " + r + '="' + String(n).replace(i, "&quot;") + '"'),
            l + ">" + o + "</" + t + ">"
          )
        }
      e.exports = function(e, t) {
        var r = {}
        ;(r[e] = t(l)),
          n(
            n.P +
              n.F *
                o(function() {
                  var t = ""[e]('"')
                  return t !== t.toLowerCase() || t.split('"').length > 3
                }),
            "String",
            r
          )
      }
    },
    217: function(e, t, r) {
      "use strict"
      r(134),
        r(133),
        r(92),
        r(67),
        r(51),
        r(38),
        r(29),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTube = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(n = (i = l.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (u) {
                  ;(o = !0), (a = u)
                } finally {
                  try {
                    !n && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return r
              })(e, t)
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            )
          }
        })(),
        i = r(0),
        l = c(i),
        u = r(204),
        s = c(r(206))
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var p = "YT",
        d = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,
        y = /list=([a-zA-Z0-9_-]+)/
      function h(e) {
        if (y.test(e)) {
          var t = e.match(y)
          return { listType: "playlist", list: a(t, 2)[1] }
        }
        return {}
      }
      var v = (t.YouTube = (function(e) {
        function t() {
          var e, r, n
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i]
          return (
            (r = n = f(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
            (n.callPlayer = u.callPlayer),
            (n.onStateChange = function(e) {
              var t = e.data,
                r = n.props,
                o = r.onPlay,
                a = r.onPause,
                i = r.onBuffer,
                l = r.onBufferEnd,
                u = r.onEnded,
                s = r.onReady,
                c = r.loop,
                f = window[p].PlayerState,
                d = f.PLAYING,
                y = f.PAUSED,
                h = f.BUFFERING,
                v = f.ENDED,
                m = f.CUED
              if (
                (t === d && (o(), l()), t === y && a(), t === h && i(), t === v)
              ) {
                var g = !!n.callPlayer("getPlaylist")
                c && !g && n.play(), u()
              }
              t === m && s()
            }),
            (n.mute = function() {
              n.callPlayer("mute")
            }),
            (n.unmute = function() {
              n.callPlayer("unMute")
            }),
            (n.ref = function(e) {
              n.container = e
            }),
            f(n, r)
          )
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, i.Component),
          o(t, [
            {
              key: "load",
              value: function(e, t) {
                var r = this,
                  o = this.props,
                  a = o.playing,
                  i = o.muted,
                  l = o.playsinline,
                  s = o.controls,
                  c = o.loop,
                  f = o.config,
                  v = o.onError,
                  m = f.youtube,
                  g = m.playerVars,
                  b = m.embedOptions,
                  P = e && e.match(d)[1]
                if (t)
                  return y.test(e)
                    ? void this.player.loadPlaylist(h(e))
                    : void this.player.cueVideoById({
                        videoId: P,
                        startSeconds: (0, u.parseStartTime)(e) || g.start,
                        endSeconds: (0, u.parseEndTime)(e) || g.end,
                      })
                ;(0, u.getSDK)(
                  "https://www.youtube.com/iframe_api",
                  p,
                  "onYouTubeIframeAPIReady",
                  function(e) {
                    return e.loaded
                  }
                ).then(function(t) {
                  r.container &&
                    (r.player = new t.Player(
                      r.container,
                      n(
                        {
                          width: "100%",
                          height: "100%",
                          videoId: P,
                          playerVars: n(
                            {
                              autoplay: a ? 1 : 0,
                              mute: i ? 1 : 0,
                              controls: s ? 1 : 0,
                              start: (0, u.parseStartTime)(e),
                              end: (0, u.parseEndTime)(e),
                              origin: window.location.origin,
                              playsinline: l,
                            },
                            h(e),
                            g
                          ),
                          events: {
                            onReady: function() {
                              c && r.player.setLoop(!0), r.props.onReady()
                            },
                            onStateChange: r.onStateChange,
                            onError: function(e) {
                              return v(e.data)
                            },
                          },
                        },
                        b
                      )
                    ))
                }, v)
              },
            },
            {
              key: "play",
              value: function() {
                this.callPlayer("playVideo")
              },
            },
            {
              key: "pause",
              value: function() {
                this.callPlayer("pauseVideo")
              },
            },
            {
              key: "stop",
              value: function() {
                document.body.contains(this.callPlayer("getIframe")) &&
                  this.callPlayer("stopVideo")
              },
            },
            {
              key: "seekTo",
              value: function(e) {
                this.callPlayer("seekTo", e), this.props.playing || this.pause()
              },
            },
            {
              key: "setVolume",
              value: function(e) {
                this.callPlayer("setVolume", 100 * e)
              },
            },
            {
              key: "setPlaybackRate",
              value: function(e) {
                this.callPlayer("setPlaybackRate", e)
              },
            },
            {
              key: "setLoop",
              value: function(e) {
                this.callPlayer("setLoop", e)
              },
            },
            {
              key: "getDuration",
              value: function() {
                return this.callPlayer("getDuration")
              },
            },
            {
              key: "getCurrentTime",
              value: function() {
                return this.callPlayer("getCurrentTime")
              },
            },
            {
              key: "getSecondsLoaded",
              value: function() {
                return (
                  this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                )
              },
            },
            {
              key: "render",
              value: function() {
                return l.default.createElement(
                  "div",
                  { style: { width: "100%", height: "100%" } },
                  l.default.createElement("div", { ref: this.ref })
                )
              },
            },
          ]),
          t
        )
      })())
      ;(v.displayName = "YouTube"),
        (v.canPlay = function(e) {
          return d.test(e)
        }),
        (t.default = (0, s.default)(v))
    },
    218: function(e, t, r) {
      "use strict"
      r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 })
      var n,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        a = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        i = r(0),
        l = (n = i) && n.__esModule ? n : { default: n },
        u = r(212),
        s = r(204)
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = (function(e) {
        function t() {
          var e, r, n
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i]
          return (
            (r = n = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
            p.call(n),
            c(n, r)
          )
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, i.Component),
          a(t, [
            {
              key: "componentDidMount",
              value: function() {
                ;(this.mounted = !0),
                  this.player.load(this.props.url),
                  this.progress()
              },
            },
            {
              key: "componentWillUnmount",
              value: function() {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady && this.player.stop(),
                  this.player.disablePIP && this.player.disablePIP(),
                  (this.mounted = !1)
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                var t = this,
                  r = this.props,
                  n = r.url,
                  o = r.playing,
                  a = r.volume,
                  i = r.muted,
                  l = r.playbackRate,
                  u = r.pip,
                  c = r.loop
                if (!(0, s.isEqual)(n, e.url)) {
                  if (this.isLoading)
                    return (
                      console.warn(
                        "ReactPlayer: the attempt to load " +
                          e.url +
                          " is being deferred until the player has loaded"
                      ),
                      void (this.loadOnReady = e.url)
                    )
                  ;(this.isLoading = !0),
                    (this.startOnPlay = !0),
                    (this.onDurationCalled = !1),
                    this.player.load(e.url, this.isReady)
                }
                o || !e.playing || this.isPlaying || this.player.play(),
                  o && !e.playing && this.isPlaying && this.player.pause(),
                  !u && e.pip && this.player.enablePIP
                    ? this.player.enablePIP()
                    : u &&
                      !e.pip &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                  a !== e.volume &&
                    null !== e.volume &&
                    this.player.setVolume(e.volume),
                  i !== e.muted &&
                    (e.muted
                      ? this.player.mute()
                      : (this.player.unmute(),
                        null !== e.volume &&
                          setTimeout(function() {
                            return t.player.setVolume(e.volume)
                          }))),
                  l !== e.playbackRate &&
                    this.player.setPlaybackRate &&
                    this.player.setPlaybackRate(e.playbackRate),
                  c !== e.loop &&
                    this.player.setLoop &&
                    this.player.setLoop(e.loop)
              },
            },
            {
              key: "getDuration",
              value: function() {
                return this.isReady ? this.player.getDuration() : null
              },
            },
            {
              key: "getCurrentTime",
              value: function() {
                return this.isReady ? this.player.getCurrentTime() : null
              },
            },
            {
              key: "getSecondsLoaded",
              value: function() {
                return this.isReady ? this.player.getSecondsLoaded() : null
              },
            },
            {
              key: "seekTo",
              value: function(e, t) {
                var r = this
                if (!this.isReady && 0 !== e)
                  return (
                    (this.seekOnPlay = e),
                    void setTimeout(function() {
                      r.seekOnPlay = null
                    }, 5e3)
                  )
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var n = this.player.getDuration()
                  return n
                    ? void this.player.seekTo(n * e)
                    : void console.warn(
                        "ReactPlayer: could not seek using fraction – duration not yet available"
                      )
                }
                this.player.seekTo(e)
              },
            },
            {
              key: "render",
              value: function() {
                var e = this.props.activePlayer
                return e
                  ? l.default.createElement(
                      e,
                      o({}, this.props, {
                        ref: this.ref,
                        onReady: this.onReady,
                        onPlay: this.onPlay,
                        onPause: this.onPause,
                        onEnded: this.onEnded,
                        onLoaded: this.onLoaded,
                        onError: this.onError,
                      })
                    )
                  : null
              },
            },
          ]),
          t
        )
      })()
      ;(f.displayName = "Player"),
        (f.propTypes = u.propTypes),
        (f.defaultProps = u.defaultProps)
      var p = function() {
        var e = this
        ;(this.mounted = !1),
          (this.isReady = !1),
          (this.isPlaying = !1),
          (this.isLoading = !0),
          (this.loadOnReady = null),
          (this.startOnPlay = !0),
          (this.seekOnPlay = null),
          (this.onDurationCalled = !1),
          (this.getInternalPlayer = function(t) {
            return e.player ? e.player[t] : null
          }),
          (this.progress = function() {
            if (e.props.url && e.player && e.isReady) {
              var t = e.getCurrentTime() || 0,
                r = e.getSecondsLoaded(),
                n = e.getDuration()
              if (n) {
                var o = { playedSeconds: t, played: t / n }
                null !== r && ((o.loadedSeconds = r), (o.loaded = r / n)),
                  (o.playedSeconds === e.prevPlayed &&
                    o.loadedSeconds === e.prevLoaded) ||
                    e.props.onProgress(o),
                  (e.prevPlayed = o.playedSeconds),
                  (e.prevLoaded = o.loadedSeconds)
              }
            }
            e.progressTimeout = setTimeout(
              e.progress,
              e.props.progressFrequency || e.props.progressInterval
            )
          }),
          (this.onReady = function() {
            if (e.mounted) {
              ;(e.isReady = !0), (e.isLoading = !1)
              var t = e.props,
                r = t.onReady,
                n = t.playing,
                o = t.volume,
                a = t.muted
              r(),
                a || null === o || e.player.setVolume(o),
                e.loadOnReady
                  ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                  : n && e.player.play(),
                e.onDurationCheck()
            }
          }),
          (this.onPlay = function() {
            ;(e.isPlaying = !0), (e.isLoading = !1)
            var t = e.props,
              r = t.onStart,
              n = t.onPlay,
              o = t.playbackRate
            e.startOnPlay &&
              (e.player.setPlaybackRate && e.player.setPlaybackRate(o),
              r(),
              (e.startOnPlay = !1)),
              n(),
              e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
              e.onDurationCheck()
          }),
          (this.onPause = function(t) {
            ;(e.isPlaying = !1), e.isLoading || e.props.onPause(t)
          }),
          (this.onEnded = function() {
            var t = e.props,
              r = t.activePlayer,
              n = t.loop,
              o = t.onEnded
            r.loopOnEnded && n && e.seekTo(0), n || ((e.isPlaying = !1), o())
          }),
          (this.onError = function() {
            var t
            ;(e.isLoading = !1), (t = e.props).onError.apply(t, arguments)
          }),
          (this.onDurationCheck = function() {
            clearTimeout(e.durationCheckTimeout)
            var t = e.getDuration()
            t
              ? e.onDurationCalled ||
                (e.props.onDuration(t), (e.onDurationCalled = !0))
              : (e.durationCheckTimeout = setTimeout(e.onDurationCheck, 100))
          }),
          (this.onLoaded = function() {
            e.isLoading = !1
          }),
          (this.ref = function(t) {
            t && (e.player = t)
          })
      }
      t.default = f
    },
    219: function(e, t, r) {
      "use strict"
      r(69),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SoundCloud = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = /(soundcloud\.com|snd\.sc)\/.+$/,
        p = (t.SoundCloud = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = l.callPlayer),
              (n.duration = null),
              (n.currentTime = null),
              (n.fractionLoaded = null),
              (n.mute = function() {
                n.setVolume(0)
              }),
              (n.unmute = function() {
                null !== n.props.volume && n.setVolume(n.props.volume)
              }),
              (n.ref = function(e) {
                n.iframe = e
              }),
              c(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, a.Component),
            o(t, [
              {
                key: "load",
                value: function(e, t) {
                  var r = this
                  ;(0, l.getSDK)(
                    "https://w.soundcloud.com/player/api.js",
                    "SC"
                  ).then(function(o) {
                    if (r.iframe) {
                      var a = o.Widget.Events,
                        i = a.PLAY,
                        l = a.PLAY_PROGRESS,
                        u = a.PAUSE,
                        s = a.FINISH,
                        c = a.ERROR
                      t ||
                        ((r.player = o.Widget(r.iframe)),
                        r.player.bind(i, r.props.onPlay),
                        r.player.bind(u, r.props.onPause),
                        r.player.bind(l, function(e) {
                          ;(r.currentTime = e.currentPosition / 1e3),
                            (r.fractionLoaded = e.loadedProgress)
                        }),
                        r.player.bind(s, function() {
                          return r.props.onEnded()
                        }),
                        r.player.bind(c, function(e) {
                          return r.props.onError(e)
                        })),
                        r.player.load(
                          e,
                          n({}, r.props.config.soundcloud.options, {
                            callback: function() {
                              r.player.getDuration(function(e) {
                                ;(r.duration = e / 1e3), r.props.onReady()
                              })
                            },
                          })
                        )
                    }
                  })
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              { key: "stop", value: function() {} },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("seekTo", 1e3 * e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", 100 * e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.duration
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.currentTime
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return this.fractionLoaded * this.duration
                },
              },
              {
                key: "render",
                value: function() {
                  return i.default.createElement("iframe", {
                    ref: this.ref,
                    src:
                      "https://w.soundcloud.com/player/?url=" +
                      encodeURIComponent(this.props.url),
                    style: { width: "100%", height: "100%" },
                    frameBorder: 0,
                    allow: "autoplay",
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(p.displayName = "SoundCloud"),
        (p.canPlay = function(e) {
          return f.test(e)
        }),
        (p.loopOnEnded = !0),
        (t.default = (0, u.default)(p))
    },
    220: function(e, t, r) {
      "use strict"
      r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Vimeo = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = /vimeo\.com\/.+/,
        p = /vimeo\.com\/external\/[0-9]+\..+/,
        d = (t.Vimeo = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = l.callPlayer),
              (n.duration = null),
              (n.currentTime = null),
              (n.secondsLoaded = null),
              (n.mute = function() {
                n.setVolume(0)
              }),
              (n.unmute = function() {
                null !== n.props.volume && n.setVolume(n.props.volume)
              }),
              (n.ref = function(e) {
                n.container = e
              }),
              c(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, a.Component),
            o(t, [
              {
                key: "load",
                value: function(e) {
                  var t = this
                  ;(this.duration = null),
                    (0, l.getSDK)(
                      "https://player.vimeo.com/api/player.js",
                      "Vimeo"
                    ).then(function(r) {
                      t.container &&
                        ((t.player = new r.Player(
                          t.container,
                          n(
                            {
                              url: e,
                              autoplay: t.props.playing,
                              muted: t.props.muted,
                              loop: t.props.loop,
                              playsinline: t.props.playsinline,
                            },
                            t.props.config.vimeo.playerOptions
                          )
                        )),
                        t.player
                          .ready()
                          .then(function() {
                            var e = t.container.querySelector("iframe")
                            ;(e.style.width = "100%"), (e.style.height = "100%")
                          })
                          .catch(t.props.onError),
                        t.player.on("loaded", function() {
                          t.props.onReady(), t.refreshDuration()
                        }),
                        t.player.on("play", function() {
                          t.props.onPlay(), t.refreshDuration()
                        }),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", function(e) {
                          return t.props.onSeek(e.seconds)
                        }),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function(e) {
                          var r = e.seconds
                          t.currentTime = r
                        }),
                        t.player.on("progress", function(e) {
                          var r = e.seconds
                          t.secondsLoaded = r
                        }))
                    }, this.props.onError)
                },
              },
              {
                key: "refreshDuration",
                value: function() {
                  var e = this
                  this.player.getDuration().then(function(t) {
                    e.duration = t
                  })
                },
              },
              {
                key: "play",
                value: function() {
                  var e = this.callPlayer("play")
                  e && e.catch(this.props.onError)
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              {
                key: "stop",
                value: function() {
                  this.callPlayer("unload")
                },
              },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("setCurrentTime", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", e)
                },
              },
              {
                key: "setLoop",
                value: function(e) {
                  this.callPlayer("setLoop", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.duration
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.currentTime
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return this.secondsLoaded
                },
              },
              {
                key: "render",
                value: function() {
                  return i.default.createElement("div", {
                    key: this.props.url,
                    ref: this.ref,
                    style: {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      backgroundColor: "black",
                    },
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(d.displayName = "Vimeo"),
        (d.canPlay = function(e) {
          return !p.test(e) && f.test(e)
        }),
        (t.default = (0, u.default)(d))
    },
    221: function(e, t, r) {
      "use strict"
      r(134),
        r(133),
        r(92),
        r(67),
        r(51),
        r(38),
        r(29),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DailyMotion = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(n = (i = l.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (u) {
                  ;(o = !0), (a = u)
                } finally {
                  try {
                    !n && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return r
              })(e, t)
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            )
          }
        })(),
        a = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        i = r(0),
        l = c(i),
        u = r(204),
        s = c(r(206))
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var p = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,
        d = (t.DailyMotion = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = f(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = u.callPlayer),
              (n.onDurationChange = function() {
                var e = n.getDuration()
                n.props.onDuration(e)
              }),
              (n.mute = function() {
                n.callPlayer("setMuted", !0)
              }),
              (n.unmute = function() {
                n.callPlayer("setMuted", !1)
              }),
              (n.ref = function(e) {
                n.container = e
              }),
              f(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, i.Component),
            a(t, [
              {
                key: "load",
                value: function(e) {
                  var t = this,
                    r = this.props,
                    a = r.controls,
                    i = r.config,
                    l = r.onError,
                    s = r.playing,
                    c = e.match(p),
                    f = o(c, 2)[1]
                  this.player
                    ? this.player.load(f, {
                        start: (0, u.parseStartTime)(e),
                        autoplay: s,
                      })
                    : (0, u.getSDK)(
                        "https://api.dmcdn.net/all.js",
                        "DM",
                        "dmAsyncInit",
                        function(e) {
                          return e.player
                        }
                      ).then(function(r) {
                        if (t.container) {
                          var o = r.player
                          t.player = new o(t.container, {
                            width: "100%",
                            height: "100%",
                            video: f,
                            params: n(
                              {
                                controls: a,
                                autoplay: t.props.playing,
                                mute: t.props.muted,
                                start: (0, u.parseStartTime)(e),
                                origin: window.location.origin,
                              },
                              i.dailymotion.params
                            ),
                            events: {
                              apiready: t.props.onReady,
                              seeked: function() {
                                return t.props.onSeek(t.player.currentTime)
                              },
                              video_end: t.props.onEnded,
                              durationchange: t.onDurationChange,
                              pause: t.props.onPause,
                              playing: t.props.onPlay,
                              waiting: t.props.onBuffer,
                              error: function(e) {
                                return l(e)
                              },
                            },
                          })
                        }
                      }, l)
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              { key: "stop", value: function() {} },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("seek", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.player.duration || null
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.player.currentTime
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return this.player.bufferedTime
                },
              },
              {
                key: "render",
                value: function() {
                  return l.default.createElement(
                    "div",
                    {
                      style: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                      },
                    },
                    l.default.createElement("div", { ref: this.ref })
                  )
                },
              },
            ]),
            t
          )
        })())
      ;(d.displayName = "DailyMotion"),
        (d.canPlay = function(e) {
          return p.test(e)
        }),
        (d.loopOnEnded = !0),
        (t.default = (0, s.default)(d))
    },
    222: function(e, t, r) {
      "use strict"
      r(133),
        r(92),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Facebook = void 0)
      var n = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        o = r(0),
        a = u(o),
        i = r(204),
        l = u(r(206))
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var c = "//connect.facebook.net/en_US/sdk.js",
        f = /facebook\.com\/([^\/?].+\/)?video(s|\.php)[\/?].*$/,
        p = "facebook-player-",
        d = (t.Facebook = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
              a[l] = arguments[l]
            return (
              (r = n = s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = i.callPlayer),
              (n.playerID = p + (0, i.randomString)()),
              (n.mute = function() {
                n.callPlayer("mute")
              }),
              (n.unmute = function() {
                n.callPlayer("unmute")
              }),
              s(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, o.Component),
            n(t, [
              {
                key: "load",
                value: function(e, t) {
                  var r = this
                  t
                    ? (0, i.getSDK)(c, "FB", "fbAsyncInit").then(function(e) {
                        return e.XFBML.parse()
                      })
                    : (0, i.getSDK)(c, "FB", "fbAsyncInit").then(function(e) {
                        e.init({
                          appId: r.props.config.facebook.appId,
                          xfbml: !0,
                          version: "v2.5",
                        }),
                          e.Event.subscribe("xfbml.render", function(e) {
                            r.props.onLoaded()
                          }),
                          e.Event.subscribe("xfbml.ready", function(e) {
                            "video" === e.type &&
                              e.id === r.playerID &&
                              ((r.player = e.instance),
                              r.player.subscribe(
                                "startedPlaying",
                                r.props.onPlay
                              ),
                              r.player.subscribe("paused", r.props.onPause),
                              r.player.subscribe(
                                "finishedPlaying",
                                r.props.onEnded
                              ),
                              r.player.subscribe(
                                "startedBuffering",
                                r.props.onBuffer
                              ),
                              r.player.subscribe(
                                "finishedBuffering",
                                r.props.onBufferEnd
                              ),
                              r.player.subscribe("error", r.props.onError),
                              r.props.muted || r.callPlayer("unmute"),
                              r.props.onReady(),
                              (document
                                .getElementById(r.playerID)
                                .querySelector("iframe").style.visibility =
                                "visible"))
                          })
                      })
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              { key: "stop", value: function() {} },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("seek", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.callPlayer("getDuration")
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.callPlayer("getCurrentPosition")
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return null
                },
              },
              {
                key: "render",
                value: function() {
                  return a.default.createElement("div", {
                    style: {
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                    },
                    id: this.playerID,
                    className: "fb-video",
                    "data-href": this.props.url,
                    "data-autoplay": this.props.playing ? "true" : "false",
                    "data-allowfullscreen": "true",
                    "data-controls": this.props.controls ? "true" : "false",
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(d.displayName = "Facebook"),
        (d.canPlay = function(e) {
          return f.test(e)
        }),
        (d.loopOnEnded = !0),
        (t.default = (0, l.default)(d))
    },
    223: function(e, t, r) {
      "use strict"
      r(134),
        r(133),
        r(92),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Streamable = void 0)
      var n = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        o = r(0),
        a = u(o),
        i = r(204),
        l = u(r(206))
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var c = /streamable\.com\/([a-z0-9]+)$/,
        f = (t.Streamable = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), l = 0; l < o; l++)
              a[l] = arguments[l]
            return (
              (r = n = s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = i.callPlayer),
              (n.duration = null),
              (n.currentTime = null),
              (n.secondsLoaded = null),
              (n.mute = function() {
                n.callPlayer("mute")
              }),
              (n.unmute = function() {
                n.callPlayer("unmute")
              }),
              (n.ref = function(e) {
                n.iframe = e
              }),
              s(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, o.Component),
            n(t, [
              {
                key: "load",
                value: function(e) {
                  var t = this
                  ;(0, i.getSDK)(
                    "//cdn.embed.ly/player-0.1.0.min.js",
                    "playerjs"
                  ).then(function(e) {
                    t.iframe &&
                      ((t.player = new e.Player(t.iframe)),
                      t.player.setLoop(t.props.loop),
                      t.player.on("ready", t.props.onReady),
                      t.player.on("play", t.props.onPlay),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", t.props.onSeek),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", function(e) {
                        var r = e.duration,
                          n = e.seconds
                        ;(t.duration = r), (t.currentTime = n)
                      }),
                      t.player.on("buffered", function(e) {
                        var r = e.percent
                        t.duration && (t.secondsLoaded = t.duration * r)
                      }),
                      t.props.muted && t.player.mute())
                  }, this.props.onError)
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              { key: "stop", value: function() {} },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("setCurrentTime", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", 100 * e)
                },
              },
              {
                key: "setLoop",
                value: function(e) {
                  this.callPlayer("setLoop", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.duration
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.currentTime
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return this.secondsLoaded
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.url.match(c)[1]
                  return a.default.createElement("iframe", {
                    ref: this.ref,
                    src: "https://streamable.com/o/" + e,
                    frameBorder: "0",
                    scrolling: "no",
                    style: { width: "100%", height: "100%" },
                    allowFullScreen: !0,
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(f.displayName = "Streamable"),
        (f.canPlay = function(e) {
          return c.test(e)
        }),
        (t.default = (0, l.default)(f))
    },
    224: function(e, t, r) {
      "use strict"
      r(69),
        r(134),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Wistia = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,
        p = (t.Wistia = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = l.callPlayer),
              (n.mute = function() {
                n.callPlayer("mute")
              }),
              (n.unmute = function() {
                n.callPlayer("unmute")
              }),
              c(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, a.Component),
            o(t, [
              {
                key: "getID",
                value: function(e) {
                  return e && e.match(f)[1]
                },
              },
              {
                key: "load",
                value: function(e) {
                  var t = this,
                    r = this.props,
                    o = r.playing,
                    a = r.muted,
                    i = r.controls,
                    u = r.onReady,
                    s = r.onPlay,
                    c = r.onPause,
                    f = r.onSeek,
                    p = r.onEnded,
                    d = r.config,
                    y = r.onError
                  ;(0, l.getSDK)(
                    "//fast.wistia.com/assets/external/E-v1.js",
                    "Wistia"
                  ).then(function() {
                    ;(window._wq = window._wq || []),
                      window._wq.push({
                        id: t.getID(e),
                        options: n(
                          {
                            autoPlay: o,
                            silentAutoPlay: "allow",
                            muted: a,
                            controlsVisibleOnLoad: i,
                          },
                          d.wistia.options
                        ),
                        onReady: function(e) {
                          ;(t.player = e),
                            t.unbind(),
                            t.player.bind("play", s),
                            t.player.bind("pause", c),
                            t.player.bind("seek", f),
                            t.player.bind("end", p),
                            u()
                        },
                      })
                  }, y)
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              {
                key: "unbind",
                value: function() {
                  var e = this.props,
                    t = e.onPlay,
                    r = e.onPause,
                    n = e.onSeek,
                    o = e.onEnded
                  this.player.unbind("play", t),
                    this.player.unbind("pause", r),
                    this.player.unbind("seek", n),
                    this.player.unbind("end", o)
                },
              },
              {
                key: "stop",
                value: function() {
                  this.unbind(), this.callPlayer("remove")
                },
              },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("time", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("volume", e)
                },
              },
              {
                key: "setPlaybackRate",
                value: function(e) {
                  this.callPlayer("playbackRate", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.callPlayer("duration")
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.callPlayer("time")
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return null
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.getID(this.props.url),
                    t = "wistia_embed wistia_async_" + e
                  return i.default.createElement("div", {
                    key: e,
                    className: t,
                    style: { width: "100%", height: "100%" },
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(p.displayName = "Wistia"),
        (p.canPlay = function(e) {
          return f.test(e)
        }),
        (p.loopOnEnded = !0),
        (t.default = (0, u.default)(p))
    },
    225: function(e, t, r) {
      "use strict"
      r(134),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Twitch = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
        p = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,
        d = "twitch-player-",
        y = (t.Twitch = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = l.callPlayer),
              (n.playerID = d + (0, l.randomString)()),
              (n.mute = function() {
                n.callPlayer("setMuted", !0)
              }),
              (n.unmute = function() {
                n.callPlayer("setMuted", !1)
              }),
              c(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, a.Component),
            o(t, [
              {
                key: "load",
                value: function(e, t) {
                  var r = this,
                    o = this.props,
                    a = o.playsinline,
                    i = o.onError,
                    u = o.config,
                    s = p.test(e),
                    c = s ? e.match(p)[1] : e.match(f)[1]
                  t
                    ? s
                      ? this.player.setChannel(c)
                      : this.player.setVideo("v" + c)
                    : (0, l.getSDK)(
                        "https://player.twitch.tv/js/embed/v1.js",
                        "Twitch"
                      ).then(function(e) {
                        r.player = new e.Player(
                          r.playerID,
                          n(
                            {
                              video: s ? "" : c,
                              channel: s ? c : "",
                              height: "100%",
                              width: "100%",
                              playsinline: a,
                              autoplay: r.props.playing,
                              muted: r.props.muted,
                            },
                            u.twitch.options
                          )
                        )
                        var t = e.Player,
                          o = t.READY,
                          i = t.PLAYING,
                          l = t.PAUSE,
                          f = t.ENDED,
                          p = t.ONLINE,
                          d = t.OFFLINE
                        r.player.addEventListener(o, r.props.onReady),
                          r.player.addEventListener(i, r.props.onPlay),
                          r.player.addEventListener(l, r.props.onPause),
                          r.player.addEventListener(f, r.props.onEnded),
                          r.player.addEventListener(p, r.props.onLoaded),
                          r.player.addEventListener(d, r.props.onLoaded)
                      }, i)
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              {
                key: "stop",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("seek", e)
                },
              },
              {
                key: "setVolume",
                value: function(e) {
                  this.callPlayer("setVolume", e)
                },
              },
              {
                key: "getDuration",
                value: function() {
                  return this.callPlayer("getDuration")
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.callPlayer("getCurrentTime")
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return null
                },
              },
              {
                key: "render",
                value: function() {
                  return i.default.createElement("div", {
                    style: { width: "100%", height: "100%" },
                    id: this.playerID,
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(y.displayName = "Twitch"),
        (y.canPlay = function(e) {
          return f.test(e) || p.test(e)
        }),
        (y.loopOnEnded = !0),
        (t.default = (0, u.default)(y))
    },
    226: function(e, t, r) {
      "use strict"
      r(134),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Mixcloud = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f = /mixcloud\.com\/([^\/]+\/[^\/]+)/,
        p = (t.Mixcloud = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.callPlayer = l.callPlayer),
              (n.duration = null),
              (n.currentTime = null),
              (n.secondsLoaded = null),
              (n.mute = function() {}),
              (n.unmute = function() {}),
              (n.ref = function(e) {
                n.iframe = e
              }),
              c(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, a.Component),
            o(t, [
              {
                key: "load",
                value: function(e) {
                  var t = this
                  ;(0, l.getSDK)(
                    "//widget.mixcloud.com/media/js/widgetApi.js",
                    "Mixcloud"
                  ).then(function(e) {
                    ;(t.player = e.PlayerWidget(t.iframe)),
                      t.player.ready.then(function() {
                        t.player.events.play.on(t.props.onPlay),
                          t.player.events.pause.on(t.props.onPause),
                          t.player.events.ended.on(t.props.onEnded),
                          t.player.events.error.on(t.props.error),
                          t.player.events.progress.on(function(e, r) {
                            ;(t.currentTime = e), (t.duration = r)
                          }),
                          t.props.onReady()
                      })
                  }, this.props.onError)
                },
              },
              {
                key: "play",
                value: function() {
                  this.callPlayer("play")
                },
              },
              {
                key: "pause",
                value: function() {
                  this.callPlayer("pause")
                },
              },
              { key: "stop", value: function() {} },
              {
                key: "seekTo",
                value: function(e) {
                  this.callPlayer("seek", e)
                },
              },
              { key: "setVolume", value: function(e) {} },
              {
                key: "getDuration",
                value: function() {
                  return this.duration
                },
              },
              {
                key: "getCurrentTime",
                value: function() {
                  return this.currentTime
                },
              },
              {
                key: "getSecondsLoaded",
                value: function() {
                  return null
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.url,
                    r = e.config,
                    o = t.match(f)[1],
                    a = (0, l.queryString)(
                      n({}, r.mixcloud.options, { feed: "/" + o + "/" })
                    )
                  return i.default.createElement("iframe", {
                    key: o,
                    ref: this.ref,
                    style: { width: "100%", height: "100%" },
                    src: "https://www.mixcloud.com/widget/iframe/?" + a,
                    frameBorder: "0",
                  })
                },
              },
            ]),
            t
          )
        })())
      ;(p.displayName = "Mixcloud"),
        (p.canPlay = function(e) {
          return f.test(e)
        }),
        (p.loopOnEnded = !0),
        (t.default = (0, u.default)(p))
    },
    227: function(e, t, r) {
      "use strict"
      r(52),
        r(14),
        r(51),
        r(38),
        r(29),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FilePlayer = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(0),
        i = s(a),
        l = r(204),
        u = s(r(206))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var f =
          "undefined" != typeof navigator &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        p = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
        d = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,
        y = /\.(m3u8)($|\?)/i,
        h = /\.(mpd)($|\?)/i,
        v = /www\.dropbox\.com\/.+/
      function m(e) {
        if (e instanceof Array) {
          var t = !0,
            r = !1,
            n = void 0
          try {
            for (
              var o, a = e[Symbol.iterator]();
              !(t = (o = a.next()).done);
              t = !0
            ) {
              var i = o.value
              if ("string" == typeof i && m(i)) return !0
              if (m(i.src)) return !0
            }
          } catch (u) {
            ;(r = !0), (n = u)
          } finally {
            try {
              !t && a.return && a.return()
            } finally {
              if (r) throw n
            }
          }
          return !1
        }
        return (
          !!(0, l.isMediaStream)(e) ||
          (p.test(e) || d.test(e) || y.test(e) || h.test(e))
        )
      }
      var g = (t.FilePlayer = (function(e) {
        function t() {
          var e, r, o
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, t)
          for (var a = arguments.length, l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u]
          return (
            (r = o = c(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(l)
              )
            )),
            (o.onDisablePIP = function(e) {
              var t = o.props,
                r = t.onDisablePIP,
                n = t.playing
              r(e), n && o.play()
            }),
            (o.onSeek = function(e) {
              o.props.onSeek(e.target.currentTime)
            }),
            (o.mute = function() {
              o.player.muted = !0
            }),
            (o.unmute = function() {
              o.player.muted = !1
            }),
            (o.renderSourceElement = function(e, t) {
              return "string" == typeof e
                ? i.default.createElement("source", { key: t, src: e })
                : i.default.createElement("source", n({ key: t }, e))
            }),
            (o.renderTrack = function(e, t) {
              return i.default.createElement("track", n({ key: t }, e))
            }),
            (o.ref = function(e) {
              o.player = e
            }),
            c(o, r)
          )
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, a.Component),
          o(t, [
            {
              key: "componentDidMount",
              value: function() {
                this.addListeners(), f && this.player.load()
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                  this.removeListeners()
              },
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                  this.addListeners()
              },
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.removeListeners()
              },
            },
            {
              key: "addListeners",
              value: function() {
                var e = this.props,
                  t = e.onReady,
                  r = e.onPlay,
                  n = e.onBuffer,
                  o = e.onBufferEnd,
                  a = e.onPause,
                  i = e.onEnded,
                  l = e.onError,
                  u = e.playsinline,
                  s = e.onEnablePIP
                this.player.addEventListener("canplay", t),
                  this.player.addEventListener("play", r),
                  this.player.addEventListener("waiting", n),
                  this.player.addEventListener("playing", o),
                  this.player.addEventListener("pause", a),
                  this.player.addEventListener("seeked", this.onSeek),
                  this.player.addEventListener("ended", i),
                  this.player.addEventListener("error", l),
                  this.player.addEventListener("enterpictureinpicture", s),
                  this.player.addEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  ),
                  u &&
                    (this.player.setAttribute("playsinline", ""),
                    this.player.setAttribute("webkit-playsinline", ""),
                    this.player.setAttribute("x5-playsinline", ""))
              },
            },
            {
              key: "removeListeners",
              value: function() {
                var e = this.props,
                  t = e.onReady,
                  r = e.onPlay,
                  n = e.onBuffer,
                  o = e.onBufferEnd,
                  a = e.onPause,
                  i = e.onEnded,
                  l = e.onError,
                  u = e.onEnablePIP
                this.player.removeEventListener("canplay", t),
                  this.player.removeEventListener("play", r),
                  this.player.removeEventListener("waiting", n),
                  this.player.removeEventListener("playing", o),
                  this.player.removeEventListener("pause", a),
                  this.player.removeEventListener("seeked", this.onSeek),
                  this.player.removeEventListener("ended", i),
                  this.player.removeEventListener("error", l),
                  this.player.removeEventListener("enterpictureinpicture", u),
                  this.player.removeEventListener(
                    "leavepictureinpicture",
                    this.onDisablePIP
                  )
              },
            },
            {
              key: "shouldUseAudio",
              value: function(e) {
                return (
                  !e.config.file.forceVideo &&
                  (!e.config.file.attributes.poster &&
                    (p.test(e.url) || e.config.file.forceAudio))
                )
              },
            },
            {
              key: "shouldUseHLS",
              value: function(e) {
                return (y.test(e) && !f) || this.props.config.file.forceHLS
              },
            },
            {
              key: "shouldUseDASH",
              value: function(e) {
                return h.test(e) || this.props.config.file.forceDASH
              },
            },
            {
              key: "load",
              value: function(e) {
                var t = this,
                  r = this.props.config.file,
                  n = r.hlsVersion,
                  o = r.dashVersion
                if (
                  (this.shouldUseHLS(e) &&
                    (0, l.getSDK)(
                      "https://cdnjs.cloudflare.com/ajax/libs/hls.js/VERSION/hls.min.js".replace(
                        "VERSION",
                        n
                      ),
                      "Hls"
                    ).then(function(r) {
                      ;(t.hls = new r(t.props.config.file.hlsOptions)),
                        t.hls.on(r.Events.ERROR, function(e, n) {
                          t.props.onError(e, n, t.hls, r)
                        }),
                        t.hls.loadSource(e),
                        t.hls.attachMedia(t.player)
                    }),
                  this.shouldUseDASH(e) &&
                    (0, l.getSDK)(
                      "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                        "VERSION",
                        o
                      ),
                      "dashjs"
                    ).then(function(r) {
                      ;(t.dash = r.MediaPlayer().create()),
                        t.dash.initialize(t.player, e, t.props.playing),
                        t.dash.getDebug().setLogToBrowserConsole(!1)
                    }),
                  e instanceof Array)
                )
                  this.player.load()
                else if ((0, l.isMediaStream)(e))
                  try {
                    this.player.srcObject = e
                  } catch (a) {
                    this.player.src = window.URL.createObjectURL(e)
                  }
              },
            },
            {
              key: "play",
              value: function() {
                var e = this.player.play()
                e && e.catch(this.props.onError)
              },
            },
            {
              key: "pause",
              value: function() {
                this.player.pause()
              },
            },
            {
              key: "stop",
              value: function() {
                this.player.removeAttribute("src"),
                  this.hls && this.hls.destroy(),
                  this.dash && this.dash.reset()
              },
            },
            {
              key: "seekTo",
              value: function(e) {
                this.player.currentTime = e
              },
            },
            {
              key: "setVolume",
              value: function(e) {
                this.player.volume = e
              },
            },
            {
              key: "enablePIP",
              value: function() {
                this.player.requestPictureInPicture &&
                  document.pictureInPictureElement !== this.player &&
                  this.player.requestPictureInPicture()
              },
            },
            {
              key: "disablePIP",
              value: function() {
                document.exitPictureInPicture &&
                  document.pictureInPictureElement === this.player &&
                  document.exitPictureInPicture()
              },
            },
            {
              key: "setPlaybackRate",
              value: function(e) {
                this.player.playbackRate = e
              },
            },
            {
              key: "getDuration",
              value: function() {
                if (!this.player) return null
                var e = this.player,
                  t = e.duration,
                  r = e.seekable
                return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t
              },
            },
            {
              key: "getCurrentTime",
              value: function() {
                return this.player ? this.player.currentTime : null
              },
            },
            {
              key: "getSecondsLoaded",
              value: function() {
                if (!this.player) return null
                var e = this.player.buffered
                if (0 === e.length) return 0
                var t = e.end(e.length - 1),
                  r = this.getDuration()
                return t > r ? r : t
              },
            },
            {
              key: "getSource",
              value: function(e) {
                var t = this.shouldUseHLS(e),
                  r = this.shouldUseDASH(e)
                if (!(e instanceof Array || (0, l.isMediaStream)(e) || t || r))
                  return v.test(e)
                    ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                    : e
              },
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.url,
                  r = e.playing,
                  o = e.loop,
                  a = e.controls,
                  l = e.muted,
                  u = e.config,
                  s = e.width,
                  c = e.height,
                  f = this.shouldUseAudio(this.props) ? "audio" : "video",
                  p = {
                    width: "auto" === s ? s : "100%",
                    height: "auto" === c ? c : "100%",
                  }
                return i.default.createElement(
                  f,
                  n(
                    {
                      ref: this.ref,
                      src: this.getSource(t),
                      style: p,
                      preload: "auto",
                      autoPlay: r || void 0,
                      controls: a,
                      muted: l,
                      loop: o,
                    },
                    u.file.attributes
                  ),
                  t instanceof Array && t.map(this.renderSourceElement),
                  u.file.tracks.map(this.renderTrack)
                )
              },
            },
          ]),
          t
        )
      })())
      ;(g.displayName = "FilePlayer"),
        (g.canPlay = m),
        (g.canEnablePIP = function(e) {
          return m(e) && !!document.pictureInPictureEnabled && !p.test(e)
        }),
        (t.default = (0, u.default)(g))
    },
    229: function(e, t, r) {
      "use strict"
      r(142),
        r(29),
        r(30),
        r(13),
        r(50),
        r(133),
        r(92),
        r(93),
        r(140),
        r(67),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FilePlayer = t.Mixcloud = t.DailyMotion = t.Twitch = t.Wistia = t.Streamable = t.Facebook = t.Vimeo = t.SoundCloud = t.YouTube = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        a = r(217)
      Object.defineProperty(t, "YouTube", {
        enumerable: !0,
        get: function() {
          return O(a).default
        },
      })
      var i = r(219)
      Object.defineProperty(t, "SoundCloud", {
        enumerable: !0,
        get: function() {
          return O(i).default
        },
      })
      var l = r(220)
      Object.defineProperty(t, "Vimeo", {
        enumerable: !0,
        get: function() {
          return O(l).default
        },
      })
      var u = r(222)
      Object.defineProperty(t, "Facebook", {
        enumerable: !0,
        get: function() {
          return O(u).default
        },
      })
      var s = r(223)
      Object.defineProperty(t, "Streamable", {
        enumerable: !0,
        get: function() {
          return O(s).default
        },
      })
      var c = r(224)
      Object.defineProperty(t, "Wistia", {
        enumerable: !0,
        get: function() {
          return O(c).default
        },
      })
      var f = r(225)
      Object.defineProperty(t, "Twitch", {
        enumerable: !0,
        get: function() {
          return O(f).default
        },
      })
      var p = r(221)
      Object.defineProperty(t, "DailyMotion", {
        enumerable: !0,
        get: function() {
          return O(p).default
        },
      })
      var d = r(226)
      Object.defineProperty(t, "Mixcloud", {
        enumerable: !0,
        get: function() {
          return O(d).default
        },
      })
      var y = r(227)
      Object.defineProperty(t, "FilePlayer", {
        enumerable: !0,
        get: function() {
          return O(y).default
        },
      })
      var h = r(0),
        v = O(h),
        m = r(212),
        g = r(204),
        b = O(r(232)),
        P = O(r(218)),
        w = O(r(233)),
        k = O(r(234))
      function O(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function E(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]
          return r
        }
        return Array.from(e)
      }
      function S(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var _ = Object.keys(m.propTypes),
        j = [],
        T = (function(e) {
          function t() {
            var e, r, n
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (r = n = S(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
              (n.config = (0, g.getConfig)(n.props, m.defaultProps, !0)),
              (n.state = { showPreview: !!n.props.light }),
              (n.onClickPreview = function() {
                n.setState({ showPreview: !1 })
              }),
              (n.getDuration = function() {
                return n.player ? n.player.getDuration() : null
              }),
              (n.getCurrentTime = function() {
                return n.player ? n.player.getCurrentTime() : null
              }),
              (n.getSecondsLoaded = function() {
                return n.player ? n.player.getSecondsLoaded() : null
              }),
              (n.getInternalPlayer = function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "player"
                return n.player ? n.player.getInternalPlayer(e) : null
              }),
              (n.seekTo = function(e, t) {
                if (!n.player) return null
                n.player.seekTo(e, t)
              }),
              (n.onReady = function() {
                n.props.onReady(n)
              }),
              (n.wrapperRef = function(e) {
                n.wrapper = e
              }),
              (n.activePlayerRef = function(e) {
                n.player = e
              }),
              S(n, r)
            )
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                )
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t))
            })(t, h.Component),
            o(t, [
              {
                key: "componentDidMount",
                value: function() {
                  if (this.props.progressFrequency) {
                    console.warn(
                      "ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead",
                      "font-weight: bold",
                      "",
                      "font-weight: bold",
                      ""
                    )
                  }
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                  return (
                    !(0, g.isEqual)(this.props, e) ||
                    !(0, g.isEqual)(this.state, t)
                  )
                },
              },
              {
                key: "componentWillUpdate",
                value: function(e) {
                  ;(this.config = (0, g.getConfig)(e, m.defaultProps)),
                    !this.props.light &&
                      e.light &&
                      this.setState({ showPreview: !0 })
                },
              },
              {
                key: "getActivePlayer",
                value: function(e) {
                  for (
                    var t = [].concat(E(j), E(b.default)), r = 0;
                    r < t.length;
                    r++
                  ) {
                    var n = t[r]
                    if (n.canPlay(e)) return n
                  }
                  return y.FilePlayer
                },
              },
              {
                key: "renderActivePlayer",
                value: function(e, t) {
                  return e
                    ? v.default.createElement(
                        P.default,
                        n({}, this.props, {
                          key: t.displayName,
                          ref: this.activePlayerRef,
                          config: this.config,
                          activePlayer: t,
                          onReady: this.onReady,
                        })
                      )
                    : null
                },
              },
              {
                key: "sortPlayers",
                value: function(e, t) {
                  return e && t ? (e.key < t.key ? -1 : 1) : 0
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.url,
                    r = e.controls,
                    o = e.style,
                    a = e.width,
                    i = e.height,
                    l = e.light,
                    u = e.wrapper,
                    s = this.state.showPreview && t,
                    c = (0, g.omit)(this.props, _, m.DEPRECATED_CONFIG_PROPS),
                    f = this.getActivePlayer(t),
                    p = this.renderActivePlayer(t, f),
                    d = (0, k.default)(t, r, this.config),
                    y = [p].concat(E(d)).sort(this.sortPlayers),
                    h = v.default.createElement(w.default, {
                      url: t,
                      light: l,
                      onClick: this.onClickPreview,
                    })
                  return v.default.createElement(
                    u,
                    n(
                      {
                        ref: this.wrapperRef,
                        style: n({}, o, { width: a, height: i }),
                      },
                      c
                    ),
                    s ? h : y
                  )
                },
              },
            ]),
            t
          )
        })()
      ;(T.addCustomPlayer = function(e) {
        j.push(e)
      }),
        (T.removeCustomPlayers = function() {
          j = []
        }),
        (T.displayName = "ReactPlayer"),
        (T.propTypes = m.propTypes),
        (T.defaultProps = m.defaultProps),
        (T.canPlay = function(e) {
          for (
            var t = [].concat(E(j), E(b.default)), r = 0;
            r < t.length;
            r++
          ) {
            if (t[r].canPlay(e)) return !0
          }
          return !1
        }),
        (T.canEnablePIP = function(e) {
          for (
            var t = [].concat(E(j), E(b.default)), r = 0;
            r < t.length;
            r++
          ) {
            var n = t[r]
            if (n.canEnablePIP && n.canEnablePIP(e)) return !0
          }
          return !1
        }),
        (t.default = T)
    },
    230: function(e, t) {
      function r(e, t) {
        ;(e.onload = function() {
          ;(this.onerror = this.onload = null), t(null, e)
        }),
          (e.onerror = function() {
            ;(this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e)
          })
      }
      function n(e, t) {
        e.onreadystatechange = function() {
          ;("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e))
        }
      }
      e.exports = function(e, t, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script")
        "function" == typeof t && ((o = t), (t = {})),
          (t = t || {}),
          (o = o || function() {}),
          (i.type = t.type || "text/javascript"),
          (i.charset = t.charset || "utf8"),
          (i.async = !("async" in t) || !!t.async),
          (i.src = e),
          t.attrs &&
            (function(e, t) {
              for (var r in t) e.setAttribute(r, t[r])
            })(i, t.attrs),
          t.text && (i.text = "" + t.text),
          ("onload" in i ? r : n)(i, o),
          i.onload || r(i, o),
          a.appendChild(i)
      }
    },
    231: function(e, t, r) {
      r(135),
        r(39),
        r(29),
        r(30),
        r(50),
        r(71),
        r(52),
        r(67),
        r(51),
        r(38),
        r(68),
        r(94),
        r(13),
        (e.exports = (function() {
          "use strict"
          var e = function(e) {
              return (
                (function(e) {
                  return !!e && "object" == typeof e
                })(e) &&
                !(function(e) {
                  var r = Object.prototype.toString.call(e)
                  return (
                    "[object RegExp]" === r ||
                    "[object Date]" === r ||
                    (function(e) {
                      return e.$$typeof === t
                    })(e)
                  )
                })(e)
              )
            },
            t =
              "function" == typeof Symbol && Symbol.for
                ? Symbol.for("react.element")
                : 60103
          function r(e, t) {
            return !1 !== t.clone && t.isMergeableObject(e)
              ? i(((r = e), Array.isArray(r) ? [] : {}), e, t)
              : e
            var r
          }
          function n(e, t, n) {
            return e.concat(t).map(function(e) {
              return r(e, n)
            })
          }
          function o(e) {
            return Object.keys(e).concat(
              (function(e) {
                return Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(e).filter(function(t) {
                      return e.propertyIsEnumerable(t)
                    })
                  : []
              })(e)
            )
          }
          function a(e, t, n) {
            var a = {}
            return (
              n.isMergeableObject(e) &&
                o(e).forEach(function(t) {
                  a[t] = r(e[t], n)
                }),
              o(t).forEach(function(o) {
                n.isMergeableObject(t[o]) && e[o]
                  ? (a[o] = (function(e, t) {
                      if (!t.customMerge) return i
                      var r = t.customMerge(e)
                      return "function" == typeof r ? r : i
                    })(o, n)(e[o], t[o], n))
                  : (a[o] = r(t[o], n))
              }),
              a
            )
          }
          function i(t, o, i) {
            ;((i = i || {}).arrayMerge = i.arrayMerge || n),
              (i.isMergeableObject = i.isMergeableObject || e)
            var l = Array.isArray(o),
              u = Array.isArray(t),
              s = l === u
            return s ? (l ? i.arrayMerge(t, o, i) : a(t, o, i)) : r(o, i)
          }
          return (
            (i.all = function(e, t) {
              if (!Array.isArray(e))
                throw new Error("first argument should be an array")
              return e.reduce(function(e, r) {
                return i(e, r, t)
              }, {})
            }),
            i
          )
        })())
    },
    232: function(e, t, r) {
      "use strict"
      r(91), Object.defineProperty(t, "__esModule", { value: !0 })
      var n = r(217),
        o = r(219),
        a = r(220),
        i = r(222),
        l = r(223),
        u = r(224),
        s = r(225),
        c = r(221),
        f = r(226),
        p = r(227)
      t.default = [
        n.YouTube,
        o.SoundCloud,
        a.Vimeo,
        i.Facebook,
        l.Streamable,
        u.Wistia,
        s.Twitch,
        c.DailyMotion,
        f.Mixcloud,
        p.FilePlayer,
      ]
    },
    233: function(e, t, r) {
      "use strict"
      r(14),
        r(133),
        r(92),
        r(23),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 })
      var n,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          },
        a = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        })(),
        i = r(0),
        l = (n = i) && n.__esModule ? n : { default: n }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      var s = (function(e) {
        function t() {
          var e, r, n
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
            a[i] = arguments[i]
          return (
            (r = n = u(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(a)
              )
            )),
            (n.mounted = !1),
            (n.state = { image: null }),
            u(n, r)
          )
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, i.Component),
          a(t, [
            {
              key: "componentDidMount",
              value: function() {
                ;(this.mounted = !0), this.fetchImage(this.props)
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                var t = this.props,
                  r = t.url,
                  n = t.light
                ;(r === e.url && n === e.light) || this.fetchImage(e)
              },
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.mounted = !1
              },
            },
            {
              key: "fetchImage",
              value: function(e) {
                var t = this,
                  r = e.url,
                  n = e.light
                if ("string" != typeof n)
                  return (
                    this.setState({ image: null }),
                    window
                      .fetch("https://noembed.com/embed?url=" + r)
                      .then(function(e) {
                        return e.json()
                      })
                      .then(function(e) {
                        if (e.thumbnail_url && t.mounted) {
                          var r = e.thumbnail_url.replace(
                            "height=100",
                            "height=480"
                          )
                          t.setState({ image: r })
                        }
                      })
                  )
                this.setState({ image: n })
              },
            },
            {
              key: "render",
              value: function() {
                var e = this.props.onClick,
                  t = this.state.image,
                  r = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  n = {
                    preview: o(
                      {
                        width: "100%",
                        height: "100%",
                        backgroundImage: t ? "url(" + t + ")" : void 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer",
                      },
                      r
                    ),
                    shadow: o(
                      {
                        background:
                          "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                        borderRadius: "64px",
                        width: "64px",
                        height: "64px",
                      },
                      r
                    ),
                    playIcon: {
                      borderStyle: "solid",
                      borderWidth: "16px 0 16px 26px",
                      borderColor: "transparent transparent transparent white",
                      marginLeft: "7px",
                    },
                  }
                return l.default.createElement(
                  "div",
                  {
                    style: n.preview,
                    className: "react-player__preview",
                    onClick: e,
                  },
                  l.default.createElement(
                    "div",
                    { style: n.shadow, className: "react-player__shadow" },
                    l.default.createElement("div", {
                      style: n.playIcon,
                      className: "react-player__play-icon",
                    })
                  )
                )
              },
            },
          ]),
          t
        )
      })()
      t.default = s
    },
    234: function(e, t, r) {
      "use strict"
      r(51),
        r(38),
        r(29),
        r(91),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function(e, t, r) {
          var a = [],
            i = !0,
            l = !1,
            u = void 0
          try {
            for (
              var s, f = c[Symbol.iterator]();
              !(i = (s = f.next()).done);
              i = !0
            ) {
              var p = s.value
              !p.Player.canPlay(e) &&
                r[p.configKey].preload &&
                a.push(
                  n.default.createElement(o.default, {
                    key: p.Player.displayName,
                    activePlayer: p.Player,
                    url: p.url,
                    controls: t,
                    playing: !0,
                    muted: !0,
                    style: { display: "none" },
                  })
                )
            }
          } catch (d) {
            ;(l = !0), (u = d)
          } finally {
            try {
              !i && f.return && f.return()
            } finally {
              if (l) throw u
            }
          }
          return a
        })
      var n = s(r(0)),
        o = s(r(218)),
        a = r(217),
        i = r(219),
        l = r(220),
        u = r(221)
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var c = [
        {
          Player: a.YouTube,
          configKey: "youtube",
          url: "https://www.youtube.com/watch?v=GlCmAC4MHek",
        },
        {
          Player: i.SoundCloud,
          configKey: "soundcloud",
          url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version",
        },
        {
          Player: l.Vimeo,
          configKey: "vimeo",
          url: "https://vimeo.com/300970506",
        },
        {
          Player: u.DailyMotion,
          configKey: "dailymotion",
          url: "http://www.dailymotion.com/video/xqdpyk",
        },
      ]
    },
  },
])
//# sourceMappingURL=9-d62937107b5280be8d87.js.map
