if (function(a) {
        function c() {
            for (var c, d, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; c = a.shift();)
                if (
                    "undefined" != typeof b.dumy.style[c] &&
                    (b.dumy.style.position = "absolute", d = b.dumy.getBoundingClientRect().left,
                        b.dumy.style[c] = "translate3d(500px, 0px, 0px)",
                        d = Math.abs(b.dumy.getBoundingClientRect().left - d), d > 100 && d < 900)
                ) {
                    try {
                        document.documentElement.removeChild(b.dumy)
                    } catch (a) {}
                    return !0
                } try {
                document.documentElement.removeChild(b.dumy)
            } catch (a) {}
            return !1
        }

        function d() {
            for (
                var c,
                    a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; c = a.shift();
            )
                if ("undefined" != typeof b.dumy.style[c]) return !0;
            try {
                document.documentElement.removeChild(b.dumy)
            } catch (a) {}
            return !1
        }
        var b = function() {};
        b.dumy = document.createElement("div"),
            b.trim = function(a) {
                return a.replace(/\s/gi, "")
            },
            b.splitAndTrim = function(a, c) {
                for (var d = a.split(","), e = d.length, f = 0; f < e; f++) c && (d[f] = b.trim(d[f]));
                return d
            }, b.indexOfArray = function(a, b) {
                for (var c = a.length, d = 0; d < c; d++)
                    if (a[d] === b) return d;
                return -1
            }, b.randomizeArray = function(a) {
                for (var b = [], c = a.concat(), d = c.length, e = 0; e < d; e++) {
                    var f = Math.floor(Math.random() * c.length);
                    b.push(c[f]), c.splice(f, 1)
                }
                return b
            }, b.removeArrayDuplicates = function(a, b) {
                var e, f, g, c = [],
                    d = a.length;
                for (f = 0; f < d; f++) {
                    for (e = void 0, g = 0; g < c.length; g++)
                        if (a[f][b] === c[g][b]) {
                            e = !0;
                            break
                        } e || c.push(a[f])
                }
                return c
            }, b.parent = function(a, b) {
                for (void 0 === b && (b = 1); b-- && a;) a = a.parentNode;
                return a && 1 === a.nodeType ? a : null
            }, b.sibling = function(a, b) {
                for (; a && 0 !== b;)
                    if (b > 0) {
                        if (a.nextElementSibling) a = a.nextElementSibling;
                        else
                            for (var a = a.nextSibling; a && 1 !== a.nodeType; a = a.nextSibling);
                        b--
                    } else {
                        if (a.previousElementSibling) a = a.previousElementSibling;
                        else
                            for (var a = a.previousSibling; a && 1 !== a.nodeType; a = a.previousSibling);
                        b++
                    } return a
            }, b.getChildAt = function(a, c) {
                var d = b.getChildren(a);
                return c < 0 && (c += d.length), c < 0 ? null : d[c]
            }, b.getChildById = function(a) {
                return document.getElementById(a) || void 0
            }, b.getChildren = function(a, b) {
                for (var c = [], d = a.firstChild; null != d; d = d.nextSibling) b ? c.push(d) : 1 === d.nodeType && c.push(d);
                return c
            }, b.getChildrenFromAttribute = function(a, c, d) {
                for (var e = [], f = a.firstChild; null != f; f = f.nextSibling) d && b.hasAttribute(f, c) ? e.push(f) : 1 === f.nodeType && b.hasAttribute(f, c) && e.push(f);
                return 0 == e.length ? void 0 : e
            }, b.getChildFromNodeListFromAttribute = function(a, c, d) {
                for (var e = a.firstChild; null != e; e = e.nextSibling) {
                    if (d && b.hasAttribute(e, c)) return e;
                    if (1 === e.nodeType && b.hasAttribute(e, c)) return e
                }
            }, b.getAttributeValue = function(a, c) {
                if (b.hasAttribute(a, c)) return a.getAttribute(c)
            }, b.hasAttribute = function(a, b) {
                if (a.hasAttribute) return a.hasAttribute(b);
                var c = a.getAttribute(b);
                return !!c
            }, b.insertNodeAt = function(a, c, d) {
                var e = b.children(a);
                if (d < 0 || d > e.length) throw new Error("invalid index!");
                a.insertBefore(c, e[d])
            }, b.hasCanvas = function() {
                return Boolean(document.createElement("canvas"))
            }, b.hitTest = function(a, b, c) {
                if (!a) throw Error("Hit test target is null!");
                var e = a.getBoundingClientRect();
                return b >= e.left && b <= e.left + (e.right - e.left) && c >= e.top && c <= e.top + (e.bottom - e.top)
            }, b.getScrollOffsets = function() {
                return null != a.pageXOffset ? {
                    x: a.pageXOffset,
                    y: a.pageYOffset
                } : "CSS1Compat" == document.compatMode ? {
                    x: document.documentElement.scrollLeft,
                    y: document.documentElement.scrollTop
                } : void 0
            }, b.getViewportSize = function() {
                return b.hasPointerEvent && navigator.msMaxTouchPoints > 1 ? {
                    w: document.documentElement.clientWidth || a.innerWidth,
                    h: document.documentElement.clientHeight || a.innerHeight
                } : b.isMobile ? {
                    w: a.innerWidth,
                    h: a.innerHeight
                } : {
                    w: document.documentElement.clientWidth || a.innerWidth,
                    h: document.documentElement.clientHeight || a.innerHeight
                }
            }, b.getViewportMouseCoordinates = function(a) {
                var c = b.getScrollOffsets();
                return a.touches ? {
                    screenX: void 0 == a.touches[0] ? a.touches.pageX - c.x : a.touches[0].pageX - c.x,
                    screenY: void 0 == a.touches[0] ? a.touches.pageY - c.y : a.touches[0].pageY - c.y
                } : {
                    screenX: void 0 == a.clientX ? a.pageX - c.x : a.clientX,
                    screenY: void 0 == a.clientY ? a.pageY - c.y : a.clientY
                }
            }, b.hasPointerEvent = function() {
                return Boolean(a.navigator.msPointerEnabled) || Boolean(a.navigator.pointerEnabled)
            }(), b.isMobile = function() {
                if (b.hasPointerEvent && navigator.msMaxTouchPoints > 1 || b.hasPointerEvent && navigator.maxTouchPoints > 1) return !0;
                var a = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
                for (i in a)
                    if (String(navigator.userAgent).toLowerCase().indexOf(String(a[i]).toLowerCase()) != -1) return !0;
                return !1
            }(), b.isAndroid = function() {
                return navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1
            }(), b.isChrome = function() {
                return navigator.userAgent.toLowerCase().indexOf("chrome") != -1
            }(), b.isSafari = function() {
                return navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
            }(), b.isOpera = function() {
                return navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
            }(), b.isFirefox = function() {
                return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
            }(), b.isIE = function() {
                var a = Boolean(navigator.userAgent.toLowerCase().indexOf("msie") != -1) || Boolean(navigator.userAgent.toLowerCase().indexOf("edge") != -1);
                return Boolean(a || document.documentElement.msRequestFullscreen)
            }(), b.isIE11 = function() {
                return Boolean(!b.isIE && document.documentElement.msRequestFullscreen)
            }(), b.isIEAndLessThen9 = function() {
                return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
            }(), b.isIEAndLessThen10 = function() {
                return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 9") != -1
            }(), b.isIE7 = function() {
                return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1
            }(), b.isIOS = function() {
                return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
            }(), b.isIphone = function() {
                return navigator.userAgent.match(/(iPhone|iPod)/g)
            }(), b.isApple = function() {
                return navigator.appVersion.toLowerCase().indexOf("mac") != -1
            }(), b.isAndroidAndWebkit = function() {
                return (b.isOpera || b.isChrome) && b.isAndroid
            }(), b.isLocal = function() {
                return location.href.indexOf("file:") != -1
            }(), b.hasFullScreen = function() {
                return b.dumy.requestFullScreen || b.dumy.mozRequestFullScreen || b.dumy.webkitRequestFullScreen || b.dumy.msieRequestFullScreen
            }(), b.onReady = function(a) {
                document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                    b.checkIfHasTransofrms(), a()
                }) : document.onreadystatechange = function() {
                    b.checkIfHasTransofrms(), "complete" == document.readyState && a()
                }
            }, b.checkIfHasTransofrms = function() {
                document.documentElement.appendChild(b.dumy), b.hasTransform3d = c(), b.hasTransform2d = d(), b.isReadyMethodCalled_bl = !0
            }, b.disableElementSelection = function(a) {
                try {
                    a.style.userSelect = "none"
                } catch (a) {}
                try {
                    a.style.MozUserSelect = "none"
                } catch (a) {}
                try {
                    a.style.webkitUserSelect = "none"
                } catch (a) {}
                try {
                    a.style.khtmlUserSelect = "none"
                } catch (a) {}
                try {
                    a.style.oUserSelect = "none"
                } catch (a) {}
                try {
                    a.style.msUserSelect = "none"
                } catch (a) {}
                try {
                    a.msUserSelect = "none"
                } catch (a) {}
                a.onselectstart = function() {
                    return !1
                }
            }, b.getSearchArgs = function() {
                for (var a = {}, b = location.href.substr(location.href.indexOf("?") + 1), c = b.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f = c[d].substring(0, e),
                        g = c[d].substring(e + 1);
                    g = decodeURIComponent(g), a[f] = g
                }
                return a
            }, b.getHashArgs = function(a) {
                for (var b = {}, c = a.substr(a.indexOf("#") + 1) || location.hash.substring(1), d = c.split("&"), e = 0; e < d.length; e++) {
                    var f = d[e].indexOf("="),
                        g = d[e].substring(0, f),
                        h = d[e].substring(f + 1);
                    h = decodeURIComponent(h), b[g] = h
                }
                return b
            }, b.isReadyMethodCalled_bl = !1, a.FWDRLR3DUtils = b
    }(window), function(a) {
        var b = function(a, c, d, e, f, g, h, i) {
            var j = this,
                k = b.prototype;
            j.id = a, j.normalWidth = 2 * h, j.selectedWidth = 2 * i, j.totalWidthAndHeight = j.totalHeight = Math.max(j.normalWidth, j.selectedWidth), this.backgroundNormalColor_str1 = c, this.backgroundSelectedColor_str1 = d, this.backgroundNormalColor_str2 = e, this.backgroundSelectedColor_str2 = f, this.bulletsShadow = g, j.isShowed_bl = !0, this.isMobile_bl = FWDRLR3DUtils.isMobile, j.init = function() {
                j.setupMainContainers(), j.setWidth(j.totalWidthAndHeight), j.setHeight(j.totalWidthAndHeight), j.setButtonMode(!0), j.setNormalState()
            }, j.setupMainContainers = function() {
                j.n_sdo = new FWDR3DCarSimpleDisplayObject("div"), j.n_sdo.setWidth(j.normalWidth), j.n_sdo.setHeight(j.normalWidth), j.n_sdo.setBkColor(j.backgroundNormalColor_str1), j.n_sdo.setCSSGradient(j.backgroundNormalColor_str1, j.backgroundSelectedColor_str1), j.n_sdo.setX(parseInt((j.totalWidthAndHeight - j.normalWidth) / 2)), j.n_sdo.getStyle().boxShadow = j.bulletsShadow, j.n_sdo.setY(j.n_sdo.x), FWDRLR3DUtils.isIEAndLessThen9 || (j.n_sdo.getStyle().borderRadius = "50%"), j.addChild(j.n_sdo), j.s_sdo = new FWDR3DCarSimpleDisplayObject("div"), j.s_sdo.setWidth(j.selectedWidth), j.s_sdo.setHeight(j.selectedWidth), j.s_sdo.setCSSGradient(j.backgroundNormalColor_str2, j.backgroundSelectedColor_str2), j.s_sdo.setX(parseInt((j.totalWidthAndHeight - j.selectedWidth) / 2)), j.s_sdo.setY(j.s_sdo.x), j.s_sdo.setBkColor(j.backgroundSelectedColor_str1), FWDRLR3DUtils.isIEAndLessThen9 || (j.s_sdo.getStyle().borderRadius = "50%"), j.addChild(j.s_sdo), j.setWidth(j.totalWidth), j.setHeight(j.totalHeight), j.screen.style.yellowOverlayPointerEvents = "none", j.isMobile_bl ? j.hasPointerEvent_bl ? (j.screen.addEventListener("pointerup", j.onMouseUp), j.screen.addEventListener("pointerover", j.onMouseOver), j.screen.addEventListener("pointerout", j.onMouseOut)) : j.screen.addEventListener("touchend", j.onMouseUp) : j.screen.addEventListener ? (j.screen.addEventListener("mouseover", j.onMouseOver), j.screen.addEventListener("mouseout", j.onMouseOut), j.screen.addEventListener("mouseup", j.onMouseUp)) : j.screen.attachEvent && (j.screen.attachEvent("onmouseover", j.onMouseOver), j.screen.attachEvent("onmouseout", j.onMouseOut), j.screen.attachEvent("onmouseup", j.onMouseUp))
            }, j.onMouseOver = function(a) {
                if (j.dispatchEvent(b.SHOW_TOOLTIP, {
                        e: a
                    }), !(j.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                    if (j.isDisabled_bl || j.isSelectedFinal_bl) return;
                    j.dispatchEvent(b.MOUSE_OVER, {
                        e: a
                    }), j.setSelectedState()
                }
            }, j.onMouseOut = function(a) {
                if (!(j.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                    if (j.isDisabled_bl || j.isSelectedFinal_bl) return;
                    j.dispatchEvent(b.MOUSE_OUT, {
                        e: a
                    }), j.setNormalState()
                }
            }, j.onMouseUp = function(a) {
                j.isDisabledForGood_bl || (a.preventDefault && a.preventDefault(), j.isDisabled_bl || 2 == a.button || j.dispatchEvent(b.MOUSE_UP, {
                    id: j.id
                }))
            }, j.setSelected = function() {
                j.isSelectedFinal_bl = !0, j.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(j.s_sdo), FWDR3DCarModTweenMax.to(j.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, j.setUnselected = function() {
                j.isSelectedFinal_bl = !1, j.s_sdo && FWDR3DCarModTweenMax.to(j.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, this.setNormalState = function() {
                j.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(j.s_sdo), FWDR3DCarModTweenMax.to(j.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function() {
                j.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(j.s_sdo), FWDR3DCarModTweenMax.to(j.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }))
            }, this.setDisabledState = function() {
                j.isSetToDisabledState_bl || (j.isSetToDisabledState_bl = !0, j.d_sdo && j.d_sdo.setX(0))
            }, this.setEnabledState = function() {
                j.isSetToDisabledState_bl && (j.isSetToDisabledState_bl = !1, j.d_sdo && j.d_sdo.setX(-100))
            }, this.disable = function(a) {
                j.isDisabledForGood_bl || j.isDisabled_bl || (j.isDisabled_bl = !0, j.setButtonMode(!1), a || j.setNormalState())
            }, this.enable = function() {
                !j.isDisabledForGood_bl && j.isDisabled_bl && (j.isDisabled_bl = !1, j.setButtonMode(!0))
            }, this.disableForGood = function() {
                j.isDisabledForGood_bl = !0, j.setButtonMode(!1)
            }, this.showDisabledState = function() {
                0 != j.d_sdo.x && j.d_sdo.setX(0)
            }, this.hideDisabledState = function() {
                j.d_sdo.x != -100 && j.d_sdo.setX(-100)
            }, this.show = function(a) {
                j.isShowed_bl || (j.isShowed_bl = !0, FWDR3DCarModTweenMax.killTweensOf(j), FWDRLR3DUtils.isIEAndLessThen9 ? FWDRLR3DUtils.isIEAndLessThen9 && j.setVisible(!0) : (j.setAlpha(0), FWDR3DCarModTweenMax.to(j, .8, {
                    alpha: 1,
                    delay: a,
                    onStart: function() {
                        j.setVisible(!0)
                    },
                    ease: Expo.easeOut
                })))
            }, this.hide = function(a) {
                j.isShowed_bl && (j.isShowed_bl = !1, FWDR3DCarModTweenMax.killTweensOf(j), FWDR3DCarModTweenMax.killTweensOf(j.n_sdo), a ? FWDRLR3DUtils.isIEAndLessThen9 ? FWDRLR3DUtils.isIEAndLessThen9 && j.setVisible(!1) : FWDR3DCarModTweenMax.to(j, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }) : j.setVisible(!1))
            }, this.destroy = function() {
                FWDR3DCarModTweenMax.killTweensOf(j.n_sdo), FWDR3DCarModTweenMax.killTweensOf(j), j.setInnerHTML(""), k.destroy(), j = null, k = null, b.prototype = null
            }, j.init()
        };
        b.setPrototype = function(a) {
            b.prototype = null, a ? b.prototype = new FWDR3DCarSimpleDisplayObject("div", "absolute", "visible") : b.prototype = new FWDRLR3DDisplayObject("div", "absolute", "visible")
        }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.SHOW_TOOLTIP = "showTooltip", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDR3DBullet = b
    }(window), function(a) {
        var b = function(a, c, d) {
            var e = this,
                f = b.prototype;
            e.bulletsNormalColor = a.bulletsNormalColor, e.bulletsSelectedColor = a.bulletsSelectedColor, e.bulletsNormalRadius = 2 * a.bulletsNormalRadius, e.bulletsSelectedRadius = 2 * a.bulletsSelectedRadius, this.mainHolder_do, this.totalItems = c, this.curItemId = d, this.prevCurItemId = 0, this.totalWidth = 0, this.totalHeight = Math.max(e.bulletsNormalRadius, e.bulletsSelectedRadius), this.mouseX = 0, this.mouseY = 0, this.spaceBetweenBullets = a.spaceBetweenBullets, this.bullets_ar, this.isPressed = !1, this.isMobile = FWDRLR3DUtils.isMobile, this.hasPointerEvent = FWDRLR3DUtils.hasPointerEvent, this.init = function() {
                e.mainHolder_do = new FWDRLR3DDisplayObject("div", "absolute", "visible"), e.addChild(e.mainHolder_do), e.setHeight(e.totalHeight), e.setWidth(e.totalWidth), e.createBullets()
            }, this.resize = function(a) {
                e.stageWidth = a
            }, this.updateBullets = function(a) {
                e.curItemId = a;
                for (var b, c = 0; c < e.totalItems; c++) b = e.bullets_ar[c], c == e.curItemId ? (b.disable(), b.setSelectedState(!0)) : (b.enable(), b.setNormalState(!0));
                e.prevCurItemId = e.curItemId
            }, this.createBullets = function() {
                var b;
                this.bullets_ar = [], e.totalWidth = 0;
                for (var c = 0; c < e.totalItems; c++) FWDR3DBullet.setPrototype(), b = new FWDR3DBullet(c, a.bulletsBackgroundNormalColor1, a.bulletsBackgroundNormalColor2, a.bulletsBackgroundSelectedColor1, a.bulletsBackgroundSelectedColor2, a.bulletsShadow, a.bulletsNormalRadius, a.bulletsSelectedRadius), b.addListener(FWDR3DBullet.MOUSE_UP, e.bulletMouseUpHanlder), e.totalWidth += b.w + e.spaceBetweenBullets, b.setX((b.w + e.spaceBetweenBullets) * c), b.hide(), e.mainHolder_do.addChild(b), e.bullets_ar[c] = b;
                e.totalWidth -= e.spaceBetweenBullets, e.setWidth(e.totalWidth), e.updateBullets(e.curItemId), clearTimeout(e.showBulletsId_to), e.showBulletsId_to = setTimeout(e.show, 600)
            }, this.bulletMouseUpHanlder = function(a) {
                e.dispatchEvent(b.BULLET_CLICK, {
                    id: a.id
                })
            }, this.hideBullets = function() {
                clearTimeout(e.showBulletsId_to);
                for (var a, b = 0; b < e.totalItems; b++) a = e.bullets_ar[b], a.hide(!0);
                clearTimeout(e.hideBulletsId_to), e.hideBulletsId_to = setTimeout(e.destroyBullets, 800)
            }, this.destroyBullets = function() {
                clearTimeout(e.showBulletsId_to);
                for (var a, b = 0; b < e.totalItems; b++) a = e.bullets_ar[b], e.mainHolder_do.removeChild(a), a.destroy()
            }, this.show = function() {
                var a, b = .1,
                    c = e.curItemId / 10,
                    a = e.bullets_ar[e.curItemId];
                a.show(0);
                for (var d = e.curItemId; d < e.totalItems; d++) a = e.bullets_ar[d], a.show(b), b += .1;
                for (var d = 0; d < e.totalItems; d++) a = e.bullets_ar[d], a.show(c), c -= .1
            }, this.destroy = function() {
                clearTimeout(e.showBulletsId_to), clearTimeout(e.hideBulletsId_to), e.main_do.destroy(), e.main_do = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div", "absolute", "visible")
        }, b.BULLET_CLICK = "bulletClick", b.prototype = null, a.FWDR3DBulletsNavigation = b
    }(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        var a = /(\d|\.)+/g,
            b = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            c = function(a, b, c) {
                return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
            },
            d = function(d) {
                if ("" === d || null == d || "none" === d) return b.transparent;
                if (b[d]) return b[d];
                if ("number" == typeof d) return [d >> 16, 255 & d >> 8, 255 & d];
                if ("#" === d.charAt(0)) return 4 === d.length && (d = "#" + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(2) + d.charAt(3) + d.charAt(3)), d = parseInt(d.substr(1), 16), [d >> 16, 255 & d >> 8, 255 & d];
                if ("hsl" === d.substr(0, 3)) {
                    d = d.match(a);
                    var e = Number(d[0]) % 360 / 360,
                        f = Number(d[1]) / 100,
                        g = Number(d[2]) / 100,
                        h = .5 >= g ? g * (f + 1) : g + f - g * f,
                        i = 2 * g - h;
                    return d.length > 3 && (d[3] = Number(d[3])), d[0] = c(e + 1 / 3, i, h), d[1] = c(e, i, h), d[2] = c(e - 1 / 3, i, h), d
                }
                return d.match(a) || b.transparent
            };
        window._gsDefine.plugin({
            propName: "colorProps",
            priority: -1,
            API: 2,
            init: function(a, b) {
                this._target = a;
                var c, e, f, g;
                for (c in b) f = d(b[c]), this._firstPT = g = {
                    _next: this._firstPT,
                    p: c,
                    f: "function" == typeof a[c],
                    n: c,
                    r: !1
                }, e = d(g.f ? a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]() : a[c]), g.s = Number(e[0]), g.c = Number(f[0]) - g.s, g.gs = Number(e[1]), g.gc = Number(f[1]) - g.gs, g.bs = Number(e[2]), g.bc = Number(f[2]) - g.bs, (g.rgba = e.length > 3 || f.length > 3) && (g.as = 4 > e.length ? 1 : Number(e[3]), g.ac = (4 > f.length ? 1 : Number(f[3])) - g.as), g._next && (g._next._prev = g);
                return !0
            },
            set: function(a) {
                for (var b, c = this._firstPT; c;) b = (c.rgba ? "rgba(" : "rgb(") + (c.s + a * c.c >> 0) + ", " + (c.gs + a * c.gc >> 0) + ", " + (c.bs + a * c.bc >> 0) + (c.rgba ? ", " + (c.as + a * c.ac) : "") + ")", c.f ? this._target[c.p](b) : this._target[c.p] = b, c = c._next
            }
        })
    }), window._gsDefine && window._gsQueue.pop()(), function(a) {
        var b = function(c, d) {
            var e = this,
                f = b.prototype;
            this.categories_ar = d.categories_ar, this.buttons_ar = [], this.mainHolder_do = null, this.selector_do = null, this.mainButtonsHolder_do = null, this.buttonsHolder_do = null, this.arrowW = d.arrowW, this.arrowH = d.arrowH, this.arrowN_str = d.arrowN_str, this.arrowS_str = d.arrowS_str, this.selectorLabel_str = d.selectorLabel, this.selectorBkColorN_str1 = d.selectorBackgroundNormalColor1, this.selectorBkColorS_str1 = d.selectorBackgroundSelectedColor1, this.selectorBkColorN_str2 = d.selectorBackgroundNormalColor2, this.selectorBkColorS_str2 = d.selectorBackgroundSelectedColor2, this.selectorTextColorN_str = d.selectorTextNormalColor, this.selectorTextColorS_str = d.selectorTextSelectedColor, this.itemBkColorN_str1 = d.buttonBackgroundNormalColor1, this.itemBkColorS_str1 = d.buttonBackgroundSelectedColor1, this.itemBkColorN_str2 = d.buttonBackgroundNormalColor2, this.itemBkColorS_str2 = d.buttonBackgroundSelectedColor2, this.itemTextColorN_str = d.buttonTextNormalColor, this.itemTextColorS_str = d.buttonTextSelectedColor, this.shadowColor_str = d.shadowColor, this.position_str = d.position, this.finalX, this.finalY, this.totalButtons = e.categories_ar.length, this.curId = d.startAtCategory, this.horizontalMargins = d.comboBoxHorizontalMargins, this.verticalMargins = d.comboBoxVerticalMargins, this.buttonsHolderWidth = 0, this.buttonsHolderHeight = 0, this.totalWidth = 0, this.buttonHeight = 32, this.totalButtonsHeight = 0, this.sapaceBetweenButtons = 0, this.borderRadius = d.comboBoxCornerRadius, this.hideMenuTimeOutId_to, this.getMaxWidthResizeAndPositionId_to, this.isShowed_bl = !1, this.isOpened_bl = !1, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.init = function() {
                e.setVisible(!1), e.setZ(2e5), e.setupMainContainers(), e.getMaxWidthResizeAndPositionId_to = setTimeout(function() {
                    e.getMaxWidthResizeAndPosition(), e.setButtonsState(), e.position(), e.showFirstTime()
                }, 200)
            }, this.setupMainContainers = function() {
                var a;
                e.mainHolder_do = new FWDRLR3DDisplayObject("div"), e.mainHolder_do.setOverflow("visible"), e.addChild(e.mainHolder_do), e.mainButtonsHolder_do = new FWDRLR3DDisplayObject("div"), e.mainButtonsHolder_do.setY(e.buttonHeight), e.mainHolder_do.addChild(e.mainButtonsHolder_do), e.buttonsHolder_do = new FWDRLR3DDisplayObject("div"), e.mainButtonsHolder_do.addChild(e.buttonsHolder_do);
                var b = e.selectorLabel_str;
                "default" == e.selectorLabel_str && (b = e.categories_ar[e.curId]), FWDR3DCarComboBoxSelector.setPrototype(), e.selector_do = new FWDR3DCarComboBoxSelector(e.arrowW, e.arrowH, e.arrowN_str, e.arrowS_str, b, e.selectorBkColorN_str1, e.selectorBkColorS_str1, e.selectorBkColorN_str2, e.selectorBkColorS_str2, e.selectorTextColorN_str, e.selectorTextColorS_str, e.buttonHeight), e.mainHolder_do.addChild(e.selector_do), e.selector_do.setNormalState(!1), 0 != e.borderRadius && (e.selector_do.bk_sdo.getStyle().borderTopLeftRadius = e.borderRadius + "px", e.selector_do.bk_sdo.getStyle().borderTopRightRadius = e.borderRadius + "px", e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px", e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px", e.getStyle().borderRadius = e.borderRadius + "px"), e.selector_do.addListener(FWDR3DCarComboBoxSelector.MOUSE_DOWN, e.openMenuHandler);
                for (var c = 0; c < e.totalButtons; c++) FWDR3DCarComboBoxButton.setPrototype(), a = new FWDR3DCarComboBoxButton(e.categories_ar[c], e.itemBkColorN_str1, e.itemBkColorS_str1, e.itemBkColorN_str2, e.itemBkColorS_str2, e.itemTextColorN_str, e.itemTextColorS_str, c, e.buttonHeight), e.buttons_ar[c] = a, a.addListener(FWDR3DCarComboBoxButton.MOUSE_DOWN, e.buttonOnMouseDownHandler), e.buttonsHolder_do.addChild(a);
                0 != e.borderRadius && (a.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px", a.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px")
            }, this.buttonOnMouseDownHandler = function(c) {
                e.curId = c.target.id, e.setButtonsStateBasedOnId(), clearTimeout(e.hideMenuTimeOutId_to), e.hide(!0), e.selector_do.enable(), e.isMobile_bl ? e.hasPointerEvent_bl ? a.removeEventListener("MSPointerDown", e.checkOpenedMenu) : a.removeEventListener("touchstart", e.checkOpenedMenu) : a.addEventListener ? a.removeEventListener("mousemove", e.checkOpenedMenu) : document.attachEvent && document.detachEvent("onmousemove", e.checkOpenedMenu), "default" == e.selectorLabel_str && e.selector_do.setText(e.buttons_ar[e.curId].label1_str), e.dispatchEvent(b.BUTTON_PRESSED, {
                    id: e.curId
                })
            }, this.openMenuHandler = function() {
                e.isShowed_bl || (e.selector_do.disable(), e.show(!0), e.startToCheckOpenedMenu(), e.dispatchEvent(b.OPEN))
            }, this.setButtonsStateBasedOnId = function() {
                for (var a = 0; a < e.totalButtons; a++) button_do = e.buttons_ar[a], a == e.curId ? button_do.disable() : button_do.enable()
            }, this.setValue = function(a) {
                e.curId = a, e.setButtonsStateBasedOnId()
            }, this.startToCheckOpenedMenu = function(b) {
                e.isMobile_bl ? e.hasPointerEvent_bl ? a.addEventListener("MSPointerDown", e.checkOpenedMenu) : a.addEventListener("touchstart", e.checkOpenedMenu) : a.addEventListener ? a.addEventListener("mousemove", e.checkOpenedMenu) : document.attachEvent && document.attachEvent("onmousemove", e.checkOpenedMenu)
            }, this.checkOpenedMenu = function(b) {
                b.preventDefault && b.preventDefault();
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                FWDRLR3DUtils.hitTest(e.screen, c.screenX, c.screenY) ? clearTimeout(e.hideMenuTimeOutId_to) : (e.isMobile_bl ? (e.hide(!0), e.selector_do.enable()) : (clearTimeout(e.hideMenuTimeOutId_to), e.hideMenuTimeOutId_to = setTimeout(function() {
                    e.hide(!0), e.selector_do.enable()
                }, 1e3)), e.isMobile_bl ? e.hasPointerEvent_bl ? a.removeEventListener("MSPointerDown", e.checkOpenedMenu) : a.removeEventListener("touchstart", e.checkOpenedMenu) : a.addEventListener ? a.removeEventListener("mousemove", e.checkOpenedMenu) : document.attachEvent && document.detachEvent("onmousemove", e.checkOpenedMenu))
            }, e.getMaxWidthResizeAndPosition = function() {
                var a;
                e.totalWidth = 0, e.totalButtonsHeight = 0, e.totalWidth = e.selector_do.getMaxTextWidth() + 28;
                for (var d = 0; d < e.totalButtons; d++) a = e.buttons_ar[d], a.getMaxTextWidth() > e.totalWidth && (e.totalWidth = a.getMaxTextWidth());
                for (var d = 0; d < e.totalButtons; d++) a = e.buttons_ar[d], a.setY(d * (a.totalHeight + e.sapaceBetweenButtons)), a.totalWidth = e.totalWidth, a.setWidth(e.totalWidth), a.centerText();
                e.totalButtonsHeight = a.getY() + a.totalHeight, e.setWidth(e.totalWidth), e.setHeight(e.buttonHeight), e.mainButtonsHolder_do.setWidth(e.totalWidth), e.selector_do.totalWidth = e.totalWidth, e.selector_do.setWidth(e.totalWidth), e.selector_do.centerText(), e.buttonsHolder_do.setWidth(e.totalWidth), e.buttonsHolder_do.setHeight(e.totalButtonsHeight), e.hide(!1, !0)
            }, this.setButtonsState = function() {
                for (var a, b = 0; b < e.totalButtons; b++) a = e.buttons_ar[b], b == e.curId ? a.disable(!0) : a.enable(!0)
            }, this.position = function() {
                "topleft" == e.position_str ? (e.finalX = Math.max((c.stageWidth - c.originalWidth) / 2 + e.horizontalMargins, e.horizontalMargins), e.finalY = e.verticalMargins + 1) : "topallthewayleft" == e.position_str ? (e.finalX = e.horizontalMargins, e.finalY = e.verticalMargins + 1) : "topright" == e.position_str ? (e.finalX = Math.min((c.originalWidth - c.stageWidth) / 2 + c.stageWidth - e.totalWidth - e.horizontalMargins, c.stageWidth - e.totalWidth - e.horizontalMargins), e.finalY = e.verticalMargins + 1) : "topallthewayright" == e.position_str && (e.finalX = c.stageWidth - e.totalWidth - e.horizontalMargins, e.finalY = e.verticalMargins + 1), FWDRLR3DUtils.isAndroid ? (e.setX(Math.floor(e.finalX)), e.setY(Math.floor(e.finalY - 1)), setTimeout(e.posCombobox, 100)) : e.posCombobox()
            }, this.posCombobox = function() {
                e.setX(Math.floor(e.finalX)), e.setY(Math.floor(e.finalY))
            }, this.showFirstTime = function() {
                e.setVisible(!0), "topleft" != e.position_str && "topright" != e.position_str || e.mainHolder_do.setY(-(e.verticalMargins + e.buttonHeight)), e.getStyle().boxShadow = "0px 0px 3px " + e.shadowColor_str, FWDR3DCarModTweenMax.to(e.mainHolder_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                })
            }, this.hide = function(a, b) {
                (e.isShowed_bl || b) && (FWDR3DCarModTweenMax.killTweensOf(this), e.isShowed_bl = !1, 0 != e.borderRadius && (e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = e.borderRadius + "px", e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = e.borderRadius + "px"), a ? (FWDR3DCarModTweenMax.to(e.buttonsHolder_do, .6, {
                    y: -e.totalButtonsHeight,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(e.mainButtonsHolder_do, .6, {
                    h: 0,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(e, .6, {
                    h: e.buttonHeight,
                    ease: Expo.easeInOut
                })) : (e.buttonsHolder_do.setY(e.buttonHeight - e.totalButtonsHeight), e.mainButtonsHolder_do.setHeight(0), e.setHeight(e.buttonHeight)))
            }, this.show = function(a, b) {
                e.isShowed_bl && !b || (FWDR3DCarModTweenMax.killTweensOf(this), e.isShowed_bl = !0, 0 != e.borderRadius && (e.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = "0px", e.selector_do.bk_sdo.getStyle().borderBottomRightRadius = "0px"), a ? (FWDR3DCarModTweenMax.to(e.buttonsHolder_do, .6, {
                    y: 0,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(e.mainButtonsHolder_do, .6, {
                    h: e.totalButtonsHeight + e.buttonHeight,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(e, .6, {
                    h: e.totalButtonsHeight + e.buttonHeight,
                    ease: Expo.easeInOut
                })) : (e.buttonsHolder_do.setY(e.buttonHeight), e.mainButtonsHolder_do.setHeight(e.buttonHeight + e.buttonHeight), e.setHeight(e.buttonHeight + e.buttonHeight)))
            }, this.init(), this.destroy = function() {
                e.isMobile_bl ? (a.removeEventListener("MSPointerDown", e.checkOpenedMenu), a.removeEventListener("touchstart", e.checkOpenedMenu)) : a.removeEventListener ? a.removeEventListener("mousemove", e.checkOpenedMenu) : document.detachEvent && document.detachEvent("onmousemove", e.checkOpenedMenu), clearTimeout(e.hideMenuTimeOutId_to), clearTimeout(e.getMaxWidthResizeAndPositionId_to), FWDR3DCarModTweenMax.killTweensOf(e), FWDR3DCarModTweenMax.killTweensOf(e.mainHolder_do), FWDR3DCarModTweenMax.killTweensOf(e.buttonsHolder_do), FWDR3DCarModTweenMax.killTweensOf(e.mainButtonsHolder_do), e.mainHolder_do.destroy(), e.selector_do.destroy(), e.mainButtonsHolder_do.destroy(), e.buttonsHolder_do.destroy(), e.categories_ar = null, e.buttons_ar = null, e.mainHolder_do = null, e.selector_do = null, e.mainButtonsHolder_do = null, e.buttonsHolder_do = null, e.upArrowN_img = null, e.upArrowS_img = null, c = null, d = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
            }
        };
        b.setPrototype = function() {
            b.prototype = new FWDR3DCarDisplayObject3D("div")
        }, b.OPEN = "open", b.HIDE_COMPLETE = "infoWindowHideComplete", b.BUTTON_PRESSED = "buttonPressed", b.prototype = null, a.FWDR3DCarComboBox = b
    }(window), function() {
        var a = function(b, c, d, e, f, g, h, i, j) {
            var k = this,
                l = a.prototype;
            this.bk_sdo = null, this.text_sdo = null, this.dumy_sdo = null, this.label1_str = b, this.backgroundNormalColor_str1 = c, this.backgroundSelectedColor_str1 = d, this.backgroundNormalColor_str2 = e, this.backgroundSelectedColor_str2 = f, this.textNormalColor_str = g, this.textSelectedColor_str = h, this.totalWidth = 400, this.totalHeight = j, this.id = i, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.isDisabled_bl = !1, this.colorObj = {
                color1: k.backgroundNormalColor_str1,
                color2: k.backgroundNormalColor_str2
            }, k.init = function() {
                k.setBackfaceVisibility(), k.setButtonMode(!0), k.setupMainContainers(), k.setWidth(k.totalWidth), k.setHeight(k.totalHeight)
            }, k.setupMainContainers = function() {
                k.bk_sdo = new FWDR3DCarSimpleDisplayObject("div"), k.bk_sdo.setCSSGradient(k.backgroundNormalColor_str1, k.backgroundNormalColor_str2), k.addChild(k.bk_sdo), k.text_sdo = new FWDR3DCarSimpleDisplayObject("div"), k.text_sdo.getStyle().whiteSpace = "nowrap", k.text_sdo.setBackfaceVisibility(), k.text_sdo.setOverflow("visible"), k.text_sdo.setDisplay("inline-block"), k.text_sdo.getStyle().fontFamily = "Arial", k.text_sdo.getStyle().fontSize = "13px", k.text_sdo.getStyle().padding = "6px", k.text_sdo.getStyle().color = k.normalColor_str, k.text_sdo.getStyle().fontSmoothing = "antialiased", k.text_sdo.getStyle().webkitFontSmoothing = "antialiased", k.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDRLR3DUtils.isIEAndLessThen9 ? k.text_sdo.screen.innerText = k.label1_str : k.text_sdo.setInnerHTML(k.label1_str), k.addChild(k.text_sdo), k.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div"), FWDRLR3DUtils.isIE && (k.dumy_sdo.setBkColor("#FF0000"), k.dumy_sdo.setAlpha(0)), k.addChild(k.dumy_sdo), k.isMobile_bl ? k.hasPointerEvent_bl ? (k.screen.addEventListener("MSPointerOver", k.onMouseOver), k.screen.addEventListener("MSPointerOut", k.onMouseOut), k.screen.addEventListener("MSPointerDown", k.onMouseDown), k.screen.addEventListener("MSPointerUp", k.onClick)) : k.screen.addEventListener("touchstart", k.onMouseDown) : k.screen.addEventListener ? (k.screen.addEventListener("mouseover", k.onMouseOver), k.screen.addEventListener("mouseout", k.onMouseOut), k.screen.addEventListener("mousedown", k.onMouseDown), k.screen.addEventListener("click", k.onClick)) : k.screen.attachEvent && (k.screen.attachEvent("onmouseover", k.onMouseOver), k.screen.attachEvent("onmouseout", k.onMouseOut), k.screen.attachEvent("onmousedown", k.onMouseDown), k.screen.attachEvent("onclick", k.onClick))
            }, k.onMouseOver = function(b) {
                k.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (FWDR3DCarModTweenMax.killTweensOf(k.text_sdo), k.setSelectedState(!0), k.dispatchEvent(a.MOUSE_OVER))
            }, k.onMouseOut = function(b) {
                k.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (FWDR3DCarModTweenMax.killTweensOf(k.text_sdo), k.setNormalState(!0), k.dispatchEvent(a.MOUSE_OUT))
            }, k.onClick = function(b) {
                k.isDisabled_bl || (b.preventDefault && b.preventDefault(), k.dispatchEvent(a.CLICK))
            }, k.onMouseDown = function(b) {
                k.isDisabled_bl || (b.preventDefault && b.preventDefault(), k.dispatchEvent(a.MOUSE_DOWN, {
                    e: b
                }))
            }, this.setSelectedState = function(a) {
                a ? (FWDR3DCarModTweenMax.to(k.colorObj, .6, {
                    colorProps: {
                        color1: k.backgroundSelectedColor_str1,
                        color2: k.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: k.applyProps
                }), FWDR3DCarModTweenMax.to(k.text_sdo.screen, .6, {
                    css: {
                        color: k.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                })) : (k.bk_sdo.setCSSGradient(k.backgroundSelectedColor_str, k.backgroundNormalColor_str), k.text_sdo.getStyle().color = k.textSelectedColor_str)
            }, this.setNormalState = function(a) {
                a ? (FWDR3DCarModTweenMax.to(k.colorObj, .6, {
                    colorProps: {
                        color1: k.backgroundNormalColor_str1,
                        color2: k.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: k.applyProps
                }), FWDR3DCarModTweenMax.to(k.text_sdo.screen, .6, {
                    css: {
                        color: k.textNormalColor_str
                    },
                    ease: Quart.easeOut
                })) : (k.bk_sdo.setCSSGradient(k.backgroundNormalColor_str, k.backgroundSelectedColor_str), k.text_sdo.getStyle().color = k.textNormalColor_str)
            }, this.applyProps = function() {
                k.bk_sdo.setCSSGradient(k.colorObj.color1, k.colorObj.color2)
            }, k.centerText = function() {
                k.dumy_sdo.setWidth(k.totalWidth), k.dumy_sdo.setHeight(k.totalHeight), k.bk_sdo.setWidth(k.totalWidth), k.bk_sdo.setHeight(k.totalHeight), FWDRLR3DUtils.isIEAndLessThen9 || FWDRLR3DUtils.isSafari ? k.text_sdo.setY(Math.round((k.totalHeight - k.text_sdo.getHeight()) / 2) - 1) : k.text_sdo.setY(Math.round((k.totalHeight - k.text_sdo.getHeight()) / 2)),
                    k.text_sdo.setHeight(k.totalHeight + 2)
            }, k.getMaxTextWidth = function() {
                return k.text_sdo.getWidth()
            }, this.disable = function() {
                k.isDisabled_bl = !0, k.setButtonMode(!1), k.setSelectedState(!0)
            }, this.enable = function() {
                k.isDisabled_bl = !1, k.setNormalState(!0), k.setButtonMode(!0)
            }, k.destroy = function() {
                k.isMobile_bl ? k.hasPointerEvent_bl ? (k.screen.removeEventListener("MSPointerOver", k.onMouseOver), k.screen.removeEventListener("MSPointerOut", k.onMouseOut), k.screen.removeEventListener("MSPointerDown", k.onMouseDown), k.screen.removeEventListener("MSPointerUp", k.onClick)) : k.screen.removeEventListener("touchstart", k.onMouseDown) : k.screen.removeEventListener ? (k.screen.removeEventListener("mouseover", k.onMouseOver), k.screen.removeEventListener("mouseout", k.onMouseOut), k.screen.removeEventListener("mousedown", k.onMouseDown), k.screen.removeEventListener("click", k.onClick)) : k.screen.detachEvent && (k.screen.detachEvent("onmouseover", k.onMouseOver), k.screen.detachEvent("onmouseout", k.onMouseOut), k.screen.detachEvent("onmousedown", k.onMouseDown), k.screen.detachEvent("onclick", k.onClick)), FWDR3DCarModTweenMax.killTweensOf(k.text_sdo.screen), FWDR3DCarModTweenMax.killTweensOf(k.bk_sdo.screen), k.text_sdo.destroy(), k.bk_sdo.destroy(), k.dumy_sdo.destroy(), k.bk_sdo = null, k.text_sdo = null, k.dumy_sdo = null, k.label1_str = null, k.normalColor_str = null, k.textSelectedColor_str = null, k.disabledColor_str = null, k.setInnerHTML(""), l.destroy(), k = null, l = null, a.prototype = null
            }, k.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDRLR3DDisplayObject("div")
        }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_DOWN = "onMouseDown", a.CLICK = "onClick", a.prototype = null, window.FWDR3DCarComboBoxButton = a
    }(window), function() {
        var a = function(b, c, d, e, f, g, h, i, j, k, l, m) {
            var n = this,
                o = a.prototype;
            this.arrowN_sdo = null, this.arrowS_sdo = null, this.arrowN_str = d, this.arrowS_str = e, this.label1_str = f, this.backgroundNormalColor_str1 = g, this.backgroundNormalColor_str2 = i, this.backgroundSelectedColor_str1 = h, this.backgroundSelectedColor_str2 = j, this.textNormalColor_str = k, this.textSelectedColor_str = l, this.totalWidth = 400, this.totalHeight = m, this.arrowWidth = b, this.arrowHeight = c, this.bk_sdo = null, this.text_sdo = null, this.dumy_sdo = null, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.isDisabled_bl = !1, this.colorObj = {
                color1: n.backgroundNormalColor_str1,
                color2: n.backgroundNormalColor_str2
            }, n.init = function() {
                n.setBackfaceVisibility(), n.setButtonMode(!0), n.setupMainContainers(), n.setWidth(n.totalWidth), n.setHeight(n.totalHeight)
            }, n.setupMainContainers = function() {
                n.bk_sdo = new FWDR3DCarSimpleDisplayObject("div"), n.bk_sdo.setCSSGradient(n.backgroundNormalColor_str1, n.backgroundNormalColor_str2), n.addChild(n.bk_sdo), n.text_sdo = new FWDR3DCarSimpleDisplayObject("div"), n.text_sdo.getStyle().whiteSpace = "nowrap", n.text_sdo.setBackfaceVisibility(), n.text_sdo.setOverflow("visible"), n.text_sdo.setDisplay("inline-block"), n.text_sdo.getStyle().fontFamily = "Arial", n.text_sdo.getStyle().fontSize = "13px", n.text_sdo.getStyle().padding = "6px", n.text_sdo.getStyle().color = n.normalColor_str, n.text_sdo.getStyle().fontSmoothing = "antialiased", n.text_sdo.getStyle().webkitFontSmoothing = "antialiased", n.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDRLR3DUtils.isIEAndLessThen9 ? n.text_sdo.screen.innerText = n.label1_str : n.text_sdo.setInnerHTML(n.label1_str), n.addChild(n.text_sdo), n.arrowN_sdo = new FWDR3DCarSimpleDisplayObject("div"), n.arrowN_sdo.screen.style.backgroundImage = "url(" + n.arrowN_str + ")", n.arrowS_sdo = new FWDR3DCarSimpleDisplayObject("div"), n.arrowS_sdo.screen.style.backgroundImage = "url(" + n.arrowS_str + ")", n.arrowS_sdo.setAlpha(0), n.addChild(n.arrowN_sdo), n.addChild(n.arrowS_sdo), n.arrowN_sdo.setWidth(n.arrowWidth), n.arrowN_sdo.setHeight(n.arrowHeight), n.arrowS_sdo.setWidth(n.arrowWidth), n.arrowS_sdo.setHeight(n.arrowHeight), n.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div"), FWDRLR3DUtils.isIE && (n.dumy_sdo.setBkColor("#FF0000"), n.dumy_sdo.setAlpha(0)), n.addChild(n.dumy_sdo), n.isMobile_bl ? n.hasPointerEvent_bl ? (n.screen.addEventListener("MSPointerOver", n.onMouseOver), n.screen.addEventListener("MSPointerOut", n.onMouseOut), n.screen.addEventListener("MSPointerDown", n.onMouseDown), n.screen.addEventListener("MSPointerUp", n.onClick)) : n.screen.addEventListener("touchstart", n.onMouseDown) : n.screen.addEventListener ? (n.screen.addEventListener("mouseover", n.onMouseOver), n.screen.addEventListener("mouseout", n.onMouseOut), n.screen.addEventListener("mousedown", n.onMouseDown), n.screen.addEventListener("click", n.onClick)) : n.screen.attachEvent && (n.screen.attachEvent("onmouseover", n.onMouseOver), n.screen.attachEvent("onmouseout", n.onMouseOut), n.screen.attachEvent("onmousedown", n.onMouseDown), n.screen.attachEvent("onclick", n.onClick))
            }, n.onMouseOver = function(b) {
                n.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (FWDR3DCarModTweenMax.killTweensOf(n.text_sdo), n.setSelectedState(!0), n.dispatchEvent(a.MOUSE_OVER))
            }, n.onMouseOut = function(b) {
                n.isDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE || (FWDR3DCarModTweenMax.killTweensOf(n.text_sdo), n.setNormalState(!0), n.dispatchEvent(a.MOUSE_OUT))
            }, n.onClick = function(b) {
                return n.isDeveleper_bl ? void window.open("http://www.webdesign-flash.ro", "_blank") : void(n.isDisabled_bl || (b.preventDefault && b.preventDefault(), n.dispatchEvent(a.CLICK)))
            }, n.onMouseDown = function(b) {
                n.isDisabled_bl || (b.preventDefault && b.preventDefault(), n.dispatchEvent(a.MOUSE_DOWN, {
                    e: b
                }))
            }, this.setSelectedState = function(a) {
                a ? (FWDR3DCarModTweenMax.to(n.colorObj, .6, {
                    colorProps: {
                        color1: n.backgroundSelectedColor_str1,
                        color2: n.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: n.applyProps
                }), FWDR3DCarModTweenMax.to(n.text_sdo.screen, .6, {
                    css: {
                        color: n.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                }), FWDR3DCarModTweenMax.to(n.arrowS_sdo, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                })) : (n.bk_sdo.setCSSGradient(n.backgroundSelectedColor_str, n.backgroundNormalColor_str), n.text_sdo.getStyle().color = n.textSelectedColor_str, n.arrowS_sdo.alpha = 1)
            }, this.setNormalState = function(a) {
                a ? (FWDR3DCarModTweenMax.to(n.colorObj, .6, {
                    colorProps: {
                        color1: n.backgroundNormalColor_str1,
                        color2: n.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: n.applyProps
                }), FWDR3DCarModTweenMax.to(n.text_sdo.screen, .6, {
                    css: {
                        color: n.textNormalColor_str
                    },
                    ease: Quart.easeOut
                }), FWDR3DCarModTweenMax.to(n.arrowS_sdo, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })) : (n.bk_sdo.setCSSGradient(n.backgroundNormalColor_str, n.backgroundSelectedColor_str), n.text_sdo.getStyle().color = n.textNormalColor_str, n.arrowS_sdo.alpha = 0)
            }, this.applyProps = function() {
                n.bk_sdo.setCSSGradient(n.colorObj.color1, n.colorObj.color2)
            }, n.centerText = function() {
                n.dumy_sdo.setWidth(n.totalWidth), n.dumy_sdo.setHeight(n.totalHeight), n.bk_sdo.setWidth(n.totalWidth), n.bk_sdo.setHeight(n.totalHeight), n.text_sdo.setX(2), FWDRLR3DUtils.isIEAndLessThen9 ? n.text_sdo.setY(Math.round((n.totalHeight - n.text_sdo.getHeight()) / 2) - 1) : n.text_sdo.setY(Math.round((n.totalHeight - n.text_sdo.getHeight()) / 2)), n.text_sdo.setHeight(n.totalHeight + 2), n.arrowN_sdo.setX(n.totalWidth - n.arrowWidth - 8), n.arrowN_sdo.setY(Math.round((n.totalHeight - n.arrowHeight) / 2)), n.arrowS_sdo.setX(n.totalWidth - n.arrowWidth - 8), n.arrowS_sdo.setY(Math.round((n.totalHeight - n.arrowHeight) / 2))
            }, n.getMaxTextWidth = function() {
                return n.text_sdo.getWidth()
            }, this.disable = function() {
                n.isDisabled_bl = !0, n.setSelectedState(!0), FWDRLR3DUtils.hasTransform2d && (FWDR3DCarModTweenMax.to(n.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                }), FWDR3DCarModTweenMax.to(n.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                })), n.setButtonMode(!1)
            }, this.enable = function() {
                n.isDisabled_bl = !1, n.setNormalState(!0), FWDRLR3DUtils.hasTransform2d && (FWDR3DCarModTweenMax.to(n.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                }), FWDR3DCarModTweenMax.to(n.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                })), n.setButtonMode(!0)
            }, this.setText = function(a) {
                FWDRLR3DUtils.isIEAndLessThen9 ? n.text_sdo.screen.innerText = a : n.text_sdo.setInnerHTML(a)
            }, n.destroy = function() {
                n.isMobile_bl ? n.screen.removeEventListener("touchstart", n.onMouseDown) : n.screen.removeEventListener ? (n.screen.removeEventListener("mouseover", n.onMouseOver), n.screen.removeEventListener("mouseout", n.onMouseOut), n.screen.removeEventListener("mousedown", n.onMouseDown), n.screen.removeEventListener("click", n.onClick)) : n.screen.detachEvent && (n.screen.detachEvent("onmouseover", n.onMouseOver), n.screen.detachEvent("onmouseout", n.onMouseOut), n.screen.detachEvent("onmousedown", n.onMouseDown), n.screen.detachEvent("onclick", n.onClick)), FWDR3DCarModTweenMax.killTweensOf(n.text_sdo), FWDR3DCarModTweenMax.killTweensOf(n.colorObj), n.text_sdo.destroy(), n.dumy_sdo.destroy(), n.text_sdo = null, n.dumy_sdo = null, n.label1_str = null, n.normalColor_str = null, n.textSelectedColor_str = null, n.disabledColor_str = null, f = null, normalColor = null, selectedColor = null, disabledColor = null, n.setInnerHTML(""), o.destroy(), n = null, o = null, a.prototype = null
            }, n.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDRLR3DDisplayObject("div")
        }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_DOWN = "onMouseDown", a.CLICK = "onClick", a.prototype = null, window.FWDR3DCarComboBoxSelector = a
    }(window), function(a) {
        var b = function(a, c, d, e, f, g) {
            var h = this,
                i = b.prototype;
            this.n1Img = a, this.s1Img = c, this.n2Img = d, this.s2Img = e, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = g, this.init = function() {
                this.setButtonMode(!0), this.setWidth(this.n1Img.width), this.setHeight(this.n1Img.height), this.setupMainContainers(), this.firstButton_do.setX(3e3)
            }, this.setupMainContainers = function() {
                this.firstButton_do = new FWDRLR3DDisplayObject("div"), this.addChild(this.firstButton_do), this.n1_do = new FWDRLR3DDisplayObject("img"), this.n1_do.setScreen(this.n1Img), this.s1_do = new FWDRLR3DDisplayObject("img"), this.s1_do.setScreen(this.s1Img), this.firstButton_do.addChild(this.s1_do), this.firstButton_do.addChild(this.n1_do), this.firstButton_do.setWidth(this.n1Img.width), this.firstButton_do.setHeight(this.n1Img.height), this.secondButton_do = new FWDRLR3DDisplayObject("div"), this.addChild(this.secondButton_do), this.n2_do = new FWDRLR3DDisplayObject("img"), this.n2_do.setScreen(this.n2Img), this.s2_do = new FWDRLR3DDisplayObject("img"), this.s2_do.setScreen(this.s2Img), this.secondButton_do.addChild(this.s2_do), this.secondButton_do.addChild(this.n2_do), this.secondButton_do.setWidth(this.n2Img.width), this.secondButton_do.setHeight(this.n2Img.height), this.addChild(this.firstButton_do), this.addChild(this.secondButton_do), h.isMobile_bl ? h.hasPointerEvent_bl ? (h.screen.addEventListener("MSPointerOver", h.onMouseOver), h.screen.addEventListener("MSPointerOut", h.onMouseOut), h.screen.addEventListener("MSPointerUp", h.onClick)) : h.screen.addEventListener("touchstart", h.onMouseDown) : h.screen.addEventListener ? (h.screen.addEventListener("mouseover", h.onMouseOver), h.screen.addEventListener("mouseout", h.onMouseOut), h.screen.addEventListener("mouseup", h.onClick)) : h.screen.attachEvent && (h.screen.attachEvent("onmouseover", h.onMouseOver), h.screen.attachEvent("onmouseout", h.onMouseOut), h.screen.attachEvent("onmouseup", h.onClick))
            }, this.onMouseOver = function(a) {
                a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || (FWDR3DCarModTweenMax.killTweensOf(h.n1_do), FWDR3DCarModTweenMax.killTweensOf(h.n2_do), FWDR3DCarModTweenMax.to(h.n1_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(h.n2_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.onMouseOut = function(a) {
                if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                    var b = 0;
                    h.isMaximized_bl && (b = 1), FWDR3DCarModTweenMax.to(h.n1_do, .8, {
                        alpha: 1,
                        delay: b,
                        ease: Expo.easeOut
                    }), FWDR3DCarModTweenMax.to(h.n2_do, .8, {
                        alpha: 1,
                        delay: b,
                        ease: Expo.easeOut
                    })
                }
            }, this.onMouseDown = function(a) {
                h.disptachMainEvent_bl ? h.dispatchEvent(b.CLICK) : h.isDisabled_bl || h.toggleButton()
            }, this.onClick = function(a) {
                h.disptachMainEvent_bl ? h.dispatchEvent(b.CLICK) : h.isDisabled_bl || h.toggleButton()
            }, this.toggleButton = function() {
                1 == this.currentState ? (this.firstButton_do.setX(0), this.secondButton_do.setX(3e3), this.currentState = 0, this.dispatchEvent(b.SECOND_BUTTON_CLICK)) : (this.firstButton_do.setX(3e3), this.secondButton_do.setX(0), this.currentState = 1, this.dispatchEvent(b.FIRST_BUTTON_CLICK))
            }, this.setSecondButtonState = function() {
                this.firstButton_do.setX(0), this.secondButton_do.setX(3e3), this.currentState = 0
            }, this.destroy = function() {
                h.isMobile_bl ? h.hasPointerEvent_bl ? (h.screen.removeEventListener("MSPointerOver", h.onMouseOver), h.screen.removeEventListener("MSPointerOut", h.onMouseOut), h.screen.removeEventListener("MSPointerUp", h.onClick)) : h.screen.removeEventListener("touchstart", h.onMouseDown) : h.screen.removeEventListener ? (h.screen.removeEventListener("mouseover", h.onMouseOver), h.screen.removeEventListener("mouseout", h.onMouseOut), h.screen.removeEventListener("mouseup", h.onClick)) : h.screen.detachEvent && (h.screen.detachEvent("onmouseover", h.onMouseOver), h.screen.detachEvent("onmouseout", h.onMouseOut), h.screen.detachEvent("onmouseup", h.onClick)), FWDR3DCarModTweenMax.killTweensOf(h.n1_do), FWDR3DCarModTweenMax.killTweensOf(h.n2_do), h.firstButton_do.destroy(), h.n1_do.destroy(), h.s1_do.destroy(), h.secondButton_do.destroy(), h.n2_do.destroy(), h.s2_do.destroy(), h.firstButton_do = null, h.n1_do = null, h.s1_do = null, h.secondButton_do = null, h.n2_do = null, h.s2_do = null, h.n1Img = null, h.s1Img = null, h.n2Img = null, h.s2Img = null, a = null, c = null, d = null, e = null, h.setInnerHTML(""), i.destroy(), h = null, i = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.FIRST_BUTTON_CLICK = "onFirstClick", b.SECOND_BUTTON_CLICK = "secondButtonOnClick", b.CLICK = "onClick", b.prototype = null, a.FWDR3DCarComplexButton = b
    }(window), function(a) {
        var b = function(a) {
            var c = this,
                d = b.prototype;
            this.mainPreloaderImg = null, this.nextBtnNormalImg = null, this.nextBtnSelectedImg = null, this.propsObj = a, this.rootElement = null, this.graphicsPathsAr = [], this.dataListAr = [], this.lightboxAr = [], this.categoriesAr = [], this.lightboxPlaylist_ar = [], this.preloaderPath, this.backgroundColor, this.thumbBorderNormalColor, this.thumbBorderSelectedColor, this.thumbBaseWidth, this.thumbBaseHeight, this.horizontalSpaceBetweenThumbs, this.verticalSpaceBetweenThumbs, this.thumbBorderSize, this.totalGraphics, this.countLoadedGraphics = 0, this.parseDelayId, this.init = function() {
                c.parseDelayId = setTimeout(c.parseProperties, 100)
            }, this.parseProperties = function() {
                var a;
                if (!c.propsObj.carouselDataListDivId) return a = "Carousel data list id is not defined in FWDR3DCar3DCarousel constructor function!", void c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                if (c.rootElement = FWDRLR3DUtils.getChildById(c.propsObj.carouselDataListDivId), !c.rootElement) return a = "Make sure that the div with the id <font color='#FF0000'>" + c.propsObj.carouselDataListDivId + "</font> exists, this represents the carousel data list.", void c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                c.backgroundColor = c.propsObj.backgroundColor || "transparent", c.thumbWidth = c.propsObj.thumbnailWidth || 400, c.thumbHeight = c.propsObj.thumbnailHeight || 266, c.thumbSpaceOffset3D = c.propsObj.thumbnailSpaceOffset3D || 0, c.thumbSpaceOffset2D = c.propsObj.thumbnailSpaceOffset2D || 0, c.thumbBorderSize = c.propsObj.thumbnailBorderSize || 0, c.thumbBackgroundColor = c.propsObj.thumbnailBackgroundColor || "transparent", c.thumbBorderColor1 = c.propsObj.thumbnailBorderColor1 || "transparent", c.thumbBorderColor2 = c.propsObj.thumbnailBorderColor2 || "transparent", c.transparentImages = "yes" == c.propsObj.transparentImages, c.maxNumberOfThumbsOnMobile = c.propsObj.maxNumberOfThumbnailsOnMobile || 15, c.showGradient = "yes" == c.propsObj.showThumbnailsGradient, c.showThumbnailsHtmlContent = "yes" == c.propsObj.showThumbnailsHtmlContent, c.textBackgroundColor = c.propsObj.textBackgroundColor || "transparent", c.textBackgroundOpacity = c.propsObj.textBackgroundOpacity || 1, c.showText = "yes" == c.propsObj.showText, c.showTextBackgroundImage = "yes" == c.propsObj.showTextBackgroundImage, c.showBoxShadow = "yes" == c.propsObj.showThumbnailBoxShadow, c.thumbBoxShadowCss = c.propsObj.thumbnailBoxShadowCss, c.showDisplay2DAlways = "yes" == c.propsObj.showDisplay2DAlways, c.carouselStartPosition = c.propsObj.carouselStartPosition, c.nrThumbsToDisplay = c.propsObj.numberOfThumbnailsToDisplayLeftAndRight || 4, c.showScrollbar = "yes" == c.propsObj.showScrollbar, c.disableScrollbarOnMobile = "yes" == c.propsObj.disableScrollbarOnMobile, c.disableNextAndPrevButtonsOnMobile = "yes" == c.propsObj.disableNextAndPrevButtonsOnMobile, c.enableMouseWheelScroll = "yes" == c.propsObj.enableMouseWheelScroll, c.controlsMaxWidth = c.propsObj.controlsMaxWidth || 800, c.handlerWidth = c.propsObj.scrollbarHandlerWidth || 300, c.scrollbarTextColorNormal = c.propsObj.scrollbarTextColorNormal || "#777777", c.scrollbarTextColorSelected = c.propsObj.scrollbarTextColorSelected || "#FF0000", c.slideshowDelay = c.propsObj.slideshowDelay || 5e3, c.autoplay = "yes" == c.propsObj.autoplay, c.showPrevButton = "yes" == c.propsObj.showPrevButton, c.showNextButton = "yes" == c.propsObj.showNextButton, c.showSlideshowButton = "yes" == c.propsObj.showSlideshowButton, c.slideshowTimerColor = c.propsObj.slideshowTimerColor || "#777777", c.rightClickContextMenu = c.propsObj.rightClickContextMenu, c.addKeyboardSupport = "yes" == c.propsObj.addKeyboardSupport, c.showRefl = "yes" == c.propsObj.showReflection, c.reflHeight = c.propsObj.reflectionHeight || 100, c.reflDist = c.propsObj.reflectionDistance || 0, c.reflAlpha = c.propsObj.reflectionOpacity || .5, c.showComboBox = "yes" == c.propsObj.showComboBox, c.showLargeNextAndPrevButtons_bl = "yes" == c.propsObj.showLargeNextAndPrevButtons, c.largeNextAndPrevButtonsOffest = c.propsObj.largeNextAndPrevButtonsOffest || 0, c.showAllCategories = "no" != c.propsObj.showAllCategories, c.allCategoriesLabel = c.propsObj.allCategoriesLabel || null, c.selectLabel = c.propsObj.selectLabel || "not defined!", c.selectorBackgroundNormalColor1 = c.propsObj.selectorBackgroundNormalColor1, c.selectorBackgroundNormalColor2 = c.propsObj.selectorBackgroundNormalColor2, c.selectorBackgroundSelectedColor1 = c.propsObj.selectorBackgroundSelectedColor1, c.selectorBackgroundSelectedColor2 = c.propsObj.selectorBackgroundSelectedColor2, c.selectorTextNormalColor = c.propsObj.selectorTextNormalColor, c.selectorTextSelectedColor = c.propsObj.selectorTextSelectedColor, c.buttonBackgroundNormalColor1 = c.propsObj.buttonBackgroundNormalColor1, c.buttonBackgroundNormalColor2 = c.propsObj.buttonBackgroundNormalColor2, c.buttonBackgroundSelectedColor1 = c.propsObj.buttonBackgroundSelectedColor1, c.buttonBackgroundSelectedColor2 = c.propsObj.buttonBackgroundSelectedColor2, c.buttonTextNormalColor = c.propsObj.buttonTextNormalColor, c.buttonTextSelectedColor = c.propsObj.buttonTextSelectedColor, c.comboBoxShadowColor = c.propsObj.comboBoxShadowColor || "#000000", c.comboBoxHorizontalMargins = c.propsObj.comboBoxHorizontalMargins || 0, c.comboBoxVerticalMargins = c.propsObj.comboBoxVerticalMargins || 0, c.comboBoxCornerRadius = c.propsObj.comboBoxCornerRadius || 0, "topleft" == c.propsObj.comboBoxPosition || "topright" == c.propsObj.comboBoxPosition ? c.comboBoxPosition = FWDRLR3DUtils.trim(c.propsObj.comboBoxPosition).toLowerCase() : c.comboBoxPosition = "topleft", c.controlsHeight = c.propsObj.controlsHeight || 0, c.slideShowAutoPlay_str = c.propsObj.slideShowAutoPlay, c.addKeyboardSupport_str = c.propsObj.addKeyboardSupport, c.showCloseButton_str = c.propsObj.showCloseButton, c.showShareButton_str = c.propsObj.showShareButton, c.showZoomButton_str = c.propsObj.showZoomButton, c.showSlideShowButton_str = c.propsObj.showSlideShowButton, c.showSlideShowAnimation_str = c.propsObj.showSlideShowAnimation, c.showNextAndPrevButtons_str = c.propsObj.showNextAndPrevButtons, c.showNextAndPrevButtonsOnMobile_str = c.propsObj.showNextAndPrevButtonsOnMobile, c.itemBoxShadow_str = c.propsObj.itemBoxShadow, c.itemBackgroundColor_str = c.propsObj.itemBackgroundColor, c.itemBorderColor1_str = c.propsObj.itemBorderColor1 || "transparent", c.itemBorderColor2_str = c.propsObj.itemBorderColor2 || "transparent", c.backgroundColor_str = c.propsObj.lightboxBackgroundColor, c.showDescriptionButton_str = c.propsObj.showDescriptionButton, c.showDescriptionByDefault_str = c.propsObj.showDescriptionByDefault, c.descriptionWindowAnimationType_str = c.propsObj.descriptionWindowAnimationType, c.descriptionWindowPosition_str = c.propsObj.descriptionWindowPosition, c.descriptionWindowBackgroundColor_str = c.propsObj.descriptionWindowBackgroundColor, c.descriptionWindowBackgroundOpacity = c.propsObj.descriptionWindowBackgroundOpacity, c.videoShowFullScreenButton_str = c.propsObj.videoShowFullScreenButton, c.nextVideoOrAudioAutoPlay_str = c.propsObj.nextVideoOrAudioAutoPlay, c.videoAutoPlay_str = c.propsObj.videoAutoPlay, c.videoLoop_str = c.propsObj.videoLoop, c.audioAutoPlay_str = c.propsObj.audioAutoPlay, c.audioLoop_str = c.propsObj.audioLoop, c.videoControllerBackgroundColor_str = c.propsObj.videoControllerBackgroundColor, c.videoPosterBackgroundColor_str = c.propsObj.videoPosterBackgroundColor, c.videoPosterBackgroundColor_str = c.propsObj.videoPosterBackgroundColor, c.audioControllerBackgroundColor_str = c.propsObj.audioControllerBackgroundColor, c.timeColor_str = c.propsObj.timeColor, c.lightBoxInfoWindowBackgroundColor_str = c.propsObj.lightBoxInfoWindowBackgroundColor || "transparent", c.lightBoxBackgroundColor_str = c.propsObj.lightBoxBackgroundColor || "transparent", c.lightBoxInfoWindowBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1, c.lightBoxBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1, c.lightBoxMainBackgroundOpacity = c.propsObj.lightBoxMainBackgroundOpacity || 1, c.lightBoxItemBorderColor_str = c.propsObj.lightBoxItemBorderColor || "transparent", c.lightBoxItemBackgroundColor_str = c.propsObj.lightBoxItemBackgroundColor || "transparent", c.lightBoxBorderSize = c.propsObj.lightBoxBorderSize || 0, c.lightBoxSlideShowDelay = 1e3 * c.propsObj.lightBoxSlideShowDelay || 3e3, c.buttonsHideDelay = c.propsObj.buttonsHideDelay, c.slideShowDelay = c.propsObj.slideShowDelay, c.defaultItemWidth = c.propsObj.defaultItemWidth, c.defaultItemHeight = c.propsObj.defaultItemHeight, c.itemOffsetHeight = c.propsObj.itemOffsetHeight, c.spaceBetweenButtons = c.propsObj.spaceBetweenButtons, c.buttonsOffsetIn = c.propsObj.buttonsOffsetIn, c.buttonsOffsetOut = c.propsObj.buttonsOffsetOut, c.itemBorderSize = c.propsObj.itemBorderSize, c.itemBorderRadius = c.propsObj.itemBorderRadius, c.backgroundOpacity = c.propsObj.backgroundOpacity, c.autoScrollSpeed = c.propsObj.autoScrollSpeed || 1, c.addLightBoxKeyboardSupport_bl = c.propsObj.addLightBoxKeyboardSupport, c.addLightBoxKeyboardSupport_bl = "no" != c.addLightBoxKeyboardSupport_bl, c.showLighBoxNextAndPrevButtons_bl = c.propsObj.showLightBoxNextAndPrevButtons, c.showLighBoxNextAndPrevButtons_bl = "no" != c.showLighBoxNextAndPrevButtons_bl, c.showLightBoxZoomButton_bl = c.propsObj.showLightBoxZoomButton, c.showLightBoxZoomButton_bl = "no" != c.showLightBoxZoomButton_bl, c.showLightBoxInfoButton_bl = c.propsObj.showLightBoxInfoButton, c.showLightBoxInfoButton_bl = "no" != c.showLightBoxInfoButton_bl, c.showLighBoxSlideShowButton_bl = c.propsObj.showLighBoxSlideShowButton, c.showLighBoxSlideShowButton_bl = "no" != c.showLighBoxSlideShowButton_bl, c.useDragAndSwipe_bl = c.propsObj.useDragAndSwipe, c.useDragAndSwipe_bl = "yes" == c.useDragAndSwipe_bl, c.showBulletsNavigation = c.propsObj.showBulletsNavigation, c.showBulletsNavigation = "yes" == c.showBulletsNavigation, c.bulletsBackgroundNormalColor1 = c.propsObj.bulletsBackgroundNormalColor1 || "#333333", c.bulletsBackgroundNormalColor2 = c.propsObj.bulletsBackgroundNormalColor2 || "#FFFFFF", c.bulletsBackgroundSelectedColor1 = c.propsObj.bulletsBackgroundSelectedColor1 || "#333333", c.bulletsBackgroundSelectedColor2 = c.propsObj.bulletsBackgroundSelectedColor2 || "#FFFFFF", c.bulletsShadow = c.propsObj.bulletsShadow || "", c.bulletsNormalRadius = c.propsObj.bulletsNormalRadius || 6, c.bulletsSelectedRadius = c.propsObj.bulletsSelectedRadius || 6, c.spaceBetweenBullets = c.propsObj.spaceBetweenBullets || 6, c.bulletsOffset = c.propsObj.bulletsOffset || 0, c.showLargeNextAndPrevButtons = "yes" == c.propsObj.showLargeNextAndPrevButtons, c.largeNextAndPrevButtonsOffest = c.propsObj.largeNextAndPrevButtonsOffest || 15, c.handIconPath_str = c.skinPath_str + "/hand.cur", c.grabIconPath_str = c.skinPath_str + "/grab.cur", c.lightBoxInfoWindowBackgroundColor_str = c.propsObj.lightBoxInfoWindowBackgroundColor || "transparent", c.lightBoxBackgroundColor_str = c.propsObj.lightBoxBackgroundColor || "transparent", c.lightBoxInfoWindowBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1, c.lightBoxBackgroundOpacity = c.propsObj.lightBoxInfoWindowBackgroundOpacity || 1, c.lightBoxMainBackgroundOpacity = c.propsObj.lightBoxMainBackgroundOpacity || 1, c.lightBoxItemBorderColor_str1 = c.propsObj.lightBoxItemBorderColor1 || "transparent", c.lightBoxItemBorderColor_str2 = c.propsObj.lightBoxItemBorderColor2 || "transparent", c.lightBoxItemBackgroundColor_str = c.propsObj.lightBoxItemBackgroundColor || "transparent", c.lightBoxBorderSize = c.propsObj.lightBoxBorderSize || 0, c.lightBoxBorderRadius = c.propsObj.lightBoxBorderRadius || 0, c.lightBoxSlideShowDelay = c.propsObj.lightBoxSlideShowDelay || 4e3, c.showBulletsNavigation = c.propsObj.showBulletsNavigation, c.showBulletsNavigation = "yes" == c.showBulletsNavigation, c.bulletsBackgroundNormalColor1 = c.propsObj.bulletsBackgroundNormalColor1 || "#333333", c.bulletsBackgroundNormalColor2 = c.propsObj.bulletsBackgroundNormalColor2 || "#FFFFFF", c.bulletsBackgroundSelectedColor1 = c.propsObj.bulletsBackgroundSelectedColor1 || "#333333", c.bulletsBackgroundSelectedColor2 = c.propsObj.bulletsBackgroundSelectedColor2 || "#FFFFFF", c.bulletsShadow = c.propsObj.bulletsShadow || "", c.bulletsNormalRadius = c.propsObj.bulletsNormalRadius || 6, c.bulletsSelectedRadius = c.propsObj.bulletsSelectedRadius || 6, c.spaceBetweenBullets = c.propsObj.spaceBetweenBullets || 6, c.bulletsOffset = c.propsObj.bulletsOffset || 0;
                var d = FWDRLR3DUtils.getChildrenFromAttribute(c.rootElement, "data-cat");
                if (!d) return a = "At least one datalist ul tag with the attribute <font color='#FF0000'>data-cat</font> must be defined.", void c.dispatchEvent(b.LOAD_ERROR, {
                    text: a
                });
                for (var h, i, j, k, l, m, n, o, p, q, r, e = d.length, f = [], g = [], s = 0; s < e; s++) {
                    k = d[s], i = [], h = [], n = FWDRLR3DUtils.getChildren(k), lightboxParsedPlaylist_ar = [], l = n.length;
                    for (var t = 0; t < l; t++) {
                        var u = {},
                            v = n[t],
                            j = FWDRLR3DUtils.getChildren(v);
                        if (q = s + 1, r = t + 1, m = j.length, c.showThumbnailsHtmlContent) {
                            x = !0;
                            for (var w = 0; w < m; w++)
                                if (p = "data-html-content", FWDRLR3DUtils.hasAttribute(j[w], "data-html-content")) {
                                    x = !1, u.htmlContent = j[w].innerHTML;
                                    break
                                } if (x) return a = "Element with attribute <font color='#FF0000'>" + p + "</font> is not defined in the datalist number - <font color='#FF0000'>" + q + "</font> at position - <font color='#FF0000'>" + r + "</font> in the datalist ul element.", void c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            })
                        } else {
                            for (var x = !0, w = 0; w < m; w++)
                                if (p = "data-thumbnail-path", FWDRLR3DUtils.hasAttribute(j[w], "data-thumbnail-path")) {
                                    x = !1, u.thumbPath = FWDRLR3DUtils.trim(FWDRLR3DUtils.getAttributeValue(j[w], "data-thumbnail-path"));
                                    break
                                } if (x) return a = "Element with attribute <font color='#FF0000'>" + p + "</font> is not defined in the datalist number - <font color='#FF0000'>" + q + "</font> at position - <font color='#FF0000'>" + r + "</font> in the datalist ul element.", void c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            })
                        }
                        if (c.showText) {
                            for (var x = !0, w = 0; w < m; w++)
                                if (p = "data-thumbnail-text", FWDRLR3DUtils.hasAttribute(j[w], "data-thumbnail-text")) {
                                    x = !1, u.thumbText = j[w].innerHTML, o = j[w];
                                    break
                                } if (x) return a = "Element with attribute <font color='#FF0000'>" + p + "</font> is not defined in the datalist number - <font color='#FF0000'>" + q + "</font> at position - <font color='#FF0000'>" + r + "</font> in the datalist ul element.", void c.dispatchEvent(b.LOAD_ERROR, {
                                text: a
                            });
                            u.textTitleOffset = parseInt(FWDRLR3DUtils.trim(FWDRLR3DUtils.getAttributeValue(o, "data-thumbnail-text-title-offset"))), u.textDescriptionOffsetTop = parseInt(FWDRLR3DUtils.trim(FWDRLR3DUtils.getAttributeValue(o, "data-thumbnail-text-offset-top"))), u.textDescriptionOffsetBottom = parseInt(FWDRLR3DUtils.trim(FWDRLR3DUtils.getAttributeValue(o, "data-thumbnail-text-offset-bottom"))), "" == FWDRLR3DUtils.trim(u.thumbText) ? u.emptyText = !0 : u.emptyText = !1
                        }
                        x = !0;
                        for (var w = 0; w < m; w++)
                            if (p = "data-url", FWDRLR3DUtils.hasAttribute(j[w], "data-url")) {
                                x = !1, o = j[w];
                                break
                            } if (x) return a = "Element with attribute <font color='#FF0000'>" + p + "</font> is not defined in the datalist number - <font color='#FF0000'>" + q + "</font> at position - <font color='#FF0000'>" + r + "</font> in the datalist ul element.", void c.dispatchEvent(FWDU3DCarData.LOAD_ERROR, {
                            text: a
                        });
                        o = j[w];
                        var y = {};
                        y.url = String(FWDRLR3DUtils.getAttributeValue(o, "data-url")), y.target = String(FWDRLR3DUtils.getAttributeValue(o, "data-target")), y.posterPath = FWDRLR3DUtils.getAttributeValue(o, "data-poster-path"), y.width = FWDRLR3DUtils.getAttributeValue(o, "data-width"), y.height = FWDRLR3DUtils.getAttributeValue(o, "data-height"), y.info = FWDRLR3DUtils.getAttributeValue(o, "data-info"), y.target || (y.target = "_blank");
                        for (var w = 0; w < m; w++)
                            if (FWDRLR3DUtils.hasAttribute(j[w], "data-info")) {
                                y.description = j[w].innerHTML;
                                break
                            }
                        /link:/i.test(y.url) ? (y.url = y.url.substr(5), y.type_str = "link", u.type_str = "link") : /none/i.test(y.url) && (y.url = y.url.substr(5), y.type_str = "none", u.type_str = "none"), u.secondObj = y, "link" != y.type_str && "none" != y.type_str && lightboxParsedPlaylist_ar.push(y), i[t] = u, f.push(u)
                    }
                    c.categoriesAr[s] = FWDRLR3DUtils.getAttributeValue(k, "data-cat") || "not defined!", c.dataListAr[s] = i, c.lightboxAr[s] = h, c.lightboxPlaylist_ar[s] = {
                        playlistItems: lightboxParsedPlaylist_ar
                    }
                }
                if (c.showAllCategories && (c.categoriesAr.unshift(c.allCategoriesLabel), c.dataListAr.unshift(f), c.lightboxAr.unshift(g), e++), c.startAtCategory = c.propsObj.startAtCategory || 1, isNaN(c.startAtCategory) && (c.startAtCategory = 1), c.startAtCategory <= 0 && (c.startAtCategory = 1), c.startAtCategory > e && (c.startAtCategory = e), c.startAtCategory -= 1, c.mainFolderPath_str = c.propsObj.mainFolderPath, !c.mainFolderPath_str) return void setTimeout(function() {
                    null != c && (errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!", c.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                if (c.mainFolderPath_str.lastIndexOf("/") + 1 != c.mainFolderPath_str.length && (c.mainFolderPath_str += "/"), c.skinPath_str = c.propsObj.skinPath, !c.skinPath_str) return void setTimeout(function() {
                    null != c && (errorMessage_str = "The <font color='#FF0000'>skinPath</font> property is not defined in the constructor function!", c.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                c.skinPath_str.lastIndexOf("/") + 1 != c.skinPath_str.length && (c.skinPath_str += "/"), c.lightboxSkinPath_str = c.skinPath_str, c.skinPath_str += "main_skin/", c.skinPath_str = c.mainFolderPath_str + c.skinPath_str, c.handIconPath_str = c.skinPath_str + "hand.cur", c.grabIconPath_str = c.skinPath_str + "grab.cur", c.preloaderPath = c.skinPath_str + "preloader.png", c.thumbGradientLeftPath = c.skinPath_str + "gradientLeft.png", c.thumbGradientRightPath = c.skinPath_str + "gradientRight.png", c.thumbTitleGradientPath = c.skinPath_str + "textGradient.png";
                var z = c.skinPath_str + "nextButtonNormalState.png",
                    A = c.skinPath_str + "nextButtonSelectedState.png",
                    B = c.skinPath_str + "prevButtonNormalState.png",
                    C = c.skinPath_str + "prevButtonSelectedState.png",
                    D = c.skinPath_str + "playButtonNormalState.png",
                    E = c.skinPath_str + "playButtonSelectedState.png",
                    F = c.skinPath_str + "pauseButtonSelectedState.png",
                    G = c.skinPath_str + "handlerLeftNormal.png",
                    H = c.skinPath_str + "handlerLeftSelected.png";
                c.handlerCenterNPath = c.skinPath_str + "handlerCenterNormal.png", c.handlerCenterSPath = c.skinPath_str + "handlerCenterSelected.png";
                var I = c.skinPath_str + "handlerRightNormal.png",
                    J = c.skinPath_str + "handlerRightSelected.png",
                    K = c.skinPath_str + "trackLeft.png";
                c.trackCenterPath = c.skinPath_str + "trackCenter.png";
                var L = c.skinPath_str + "trackRight.png",
                    M = c.skinPath_str + "slideshowTimer.png",
                    N = c.skinPath_str + "slideShowPreloader.png";
                c.comboboxArrowIconN_str = c.skinPath_str + "comboboxArrowNormal.png", c.comboboxArrowIconS_str = c.skinPath_str + "comboboxArrowSelected.png";
                var O = c.skinPath_str + "next-button-large-normal.png",
                    P = c.skinPath_str + "prev-button-large-normal.png",
                    Q = c.skinPath_str + "next-button-large-selected.png",
                    R = c.skinPath_str + "prev-button-large-selected.png";
                c.graphicsPathsAr.push(c.thumbGradientLeftPath), c.graphicsPathsAr.push(c.thumbGradientRightPath), c.graphicsPathsAr.push(c.thumbTitleGradientPath), c.graphicsPathsAr.push(z), c.graphicsPathsAr.push(A), c.graphicsPathsAr.push(B), c.graphicsPathsAr.push(C), c.graphicsPathsAr.push(D), c.graphicsPathsAr.push(E), c.graphicsPathsAr.push(F), c.graphicsPathsAr.push(G), c.graphicsPathsAr.push(H), c.graphicsPathsAr.push(c.handlerCenterNPath), c.graphicsPathsAr.push(c.handlerCenterSPath), c.graphicsPathsAr.push(I), c.graphicsPathsAr.push(J), c.graphicsPathsAr.push(K), c.graphicsPathsAr.push(c.trackCenterPath), c.graphicsPathsAr.push(L), c.graphicsPathsAr.push(M), c.graphicsPathsAr.push(N), c.graphicsPathsAr.push(c.comboboxArrowIconN_str), c.graphicsPathsAr.push(c.comboboxArrowIconS_str), c.graphicsPathsAr.push(O), c.graphicsPathsAr.push(Q), c.graphicsPathsAr.push(P), c.graphicsPathsAr.push(R), c.totalGraphics = c.graphicsPathsAr.length, c.mainPreloaderImg = new Image, c.thumbGradientLeftImg = new Image, c.thumbGradientRightImg = new Image, c.thumbTitleGradientImg = new Image, c.nextButtonNImg = new Image, c.nextButtonSImg = new Image, c.prevButtonNImg = new Image, c.prevButtonSImg = new Image, c.playButtonNImg = new Image, c.playButtonSImg = new Image, c.pauseButtonImg = new Image, c.handlerLeftNImg = new Image, c.handlerLeftSImg = new Image, c.handlerCenterNImg = new Image, c.handlerCenterSImg = new Image, c.handlerRightNImg = new Image, c.handlerRightSImg = new Image, c.trackLeftImg = new Image, c.trackCenterImg = new Image, c.trackRightImg = new Image, c.slideshowTimerImg = new Image, c.slideShowPreloader_img = new Image, c.comboboxArrowIconN_img = new Image, c.comboboxArrowIconS_img = new Image, c.largeNextButton_img = new Image, c.largeNextButtonS_img = new Image, c.largePrevButton_img = new Image, c.largePrevButtonS_img = new Image, c.imagesAr = [], c.imagesAr.push(c.thumbGradientLeftImg), c.imagesAr.push(c.thumbGradientRightImg), c.imagesAr.push(c.thumbTitleGradientImg), c.imagesAr.push(c.nextButtonNImg), c.imagesAr.push(c.nextButtonSImg), c.imagesAr.push(c.prevButtonNImg), c.imagesAr.push(c.prevButtonSImg), c.imagesAr.push(c.playButtonNImg), c.imagesAr.push(c.playButtonSImg), c.imagesAr.push(c.pauseButtonImg), c.imagesAr.push(c.handlerLeftNImg), c.imagesAr.push(c.handlerLeftSImg), c.imagesAr.push(c.handlerCenterNImg), c.imagesAr.push(c.handlerCenterSImg), c.imagesAr.push(c.handlerRightNImg), c.imagesAr.push(c.handlerRightSImg), c.imagesAr.push(c.trackLeftImg), c.imagesAr.push(c.trackCenterImg), c.imagesAr.push(c.trackRightImg), c.imagesAr.push(c.slideshowTimerImg), c.imagesAr.push(c.slideShowPreloader_img), c.imagesAr.push(c.comboboxArrowIconN_img), c.imagesAr.push(c.comboboxArrowIconS_img), c.imagesAr.push(c.largeNextButton_img), c.imagesAr.push(c.largeNextButtonS_img), c.imagesAr.push(c.largePrevButton_img), c.imagesAr.push(c.largePrevButtonS_img);
                try {
                    c.rootElement.parentNode.removeChild(c.rootElement)
                } catch (a) {}
                c.loadPreloader()
            }, this.loadPreloader = function() {
                var a = c.preloaderPath,
                    b = c.mainPreloaderImg;
                b.onload = c.onPreloaderImageLoadHandler, b.onerror = c.onImageLoadErrorHandler, b.src = a
            }, this.onPreloaderImageLoadHandler = function(a) {
                c.dispatchEvent(b.PRELOADER_LOAD_DONE), c.loadGraphics()
            }, this.loadGraphics = function() {
                for (var a = 0; a < c.totalGraphics; a++) {
                    var b = c.graphicsPathsAr[a],
                        d = c.imagesAr[a];
                    d.onload = c.onImageLoadHandler, d.onerror = c.onImageLoadErrorHandler, d.src = b
                }
            }, this.onImageLoadHandler = function(a) {
                c.countLoadedGraphics++, c.countLoadedGraphics == c.totalGraphics && c.dispatchEvent(b.LOAD_DONE)
            }, this.onImageLoadErrorHandler = function(a) {
                var d;
                d = FWDRLR3DUtils.isIE8 ? "Graphics image not found!" : "Graphics image not found! <font color='#FF0000'>" + a.target.src + "</font>";
                var e = {
                    text: d
                };
                c && c.dispatchEvent(b.LOAD_ERROR, e)
            }, this.checkForAttribute = function(a, d) {
                var e = FWDRLR3DUtils.getChildFromNodeListFromAttribute(a, d);
                return e = e ? FWDRLR3DUtils.trim(FWDRLR3DUtils.getAttributeValue(e, d)) : void 0, e ? e : void c.dispatchEvent(b.LOAD_ERROR, {
                    text: "Element  with attribute <font color='#FF0000'>" + d + "</font> is not defined."
                })
            }, this.destroy = function() {
                clearTimeout(c.parseDelayId), c.image && (c.image.onload = null, c.image.onerror = null, c.image.src = ""), c.propsObj = null, c.imagesAr = null, c.graphicsPathsAr = null, c.dataListAr = [], c.lightboxAr = [], c.categoriesAr = [], this.mainPreloaderImg && (this.mainPreloaderImg.src = ""), this.thumbGradientLeftImg && (this.thumbGradientLeftImg.src = ""), this.thumbGradientRightImg && (this.thumbGradientRightImg.src = ""), this.thumbTitleGradientImg && (this.thumbTitleGradientImg.src = ""), this.nextButtonNImg && (this.nextButtonNImg.src = ""), this.nextButtonSImg && (this.nextButtonSImg.src = ""), this.prevButtonNImg && (this.prevButtonNImg.src = ""), this.prevButtonSImg && (this.prevButtonSImg.src = ""), this.playButtonNImg && (this.playButtonNImg.src = ""), this.playButtonSImg && (this.playButtonSImg.src = ""), this.pauseButtonNImg && (this.pauseButtonNImg.src = ""), this.pauseButtonSImg && (this.pauseButtonSImg.src = ""), this.handlerLeftNImg && (this.handlerLeftNImg.src = ""), this.handlerLeftSImg && (this.handlerLeftSImg.src = ""), this.handlerCenterNImg && (this.handlerCenterNImg.src = ""), this.handlerCenterSImg && (this.handlerCenterSImg.src = ""), this.handlerRightNImg && (this.handlerRightNImg.src = ""), this.handlerRightSImg && (this.handlerRightSImg.src = ""), this.trackLeftImg && (this.trackLeftImg.src = ""), this.trackCenterImg && (this.trackCenterImg.src = ""), this.trackRightImg && (this.trackRightImg.src = ""), this.slideshowTimerImg && (this.slideshowTimerImg.src = ""), this.mainPreloaderImg = null, this.thumbGradientLeftImg = null, this.thumbGradientRightImg = null, this.thumbTitleGradientImg = null, this.nextButtonNImg = null, this.nextButtonSImg = null, this.prevButtonNImg = null, this.prevButtonSImg = null, this.playButtonNImg = null, this.playButtonSImg = null, this.pauseButtonNImg = null, this.pauseButtonSImg = null, this.handlerLeftNImg = null, this.handlerLeftSImg = null, this.handlerCenterNImg = null, this.handlerCenterSImg = null, this.handlerRightNImg = null, this.handlerRightSImg = null, this.trackLeftImg = null, this.trackCenterImg = null, this.trackRightImg = null, this.slideshowTimerImg = null, this.lightboxCloseButtonN_img && (this.lightboxCloseButtonN_img.src = ""), this.lightboxCloseButtonS_img && (this.lightboxCloseButtonS_img.src = ""), this.lightboxNextButtonN_img && (this.lightboxNextButtonN_img.src = ""), this.lightboxNextButtonS_img && (this.lightboxNextButtonS_img.src = ""), this.lightboxPrevButtonN_img && (this.lightboxPrevButtonN_img.src = ""), this.lightboxPrevButtonS_img && (this.lightboxPrevButtonS_img.src = ""), this.lightboxPlayN_img && (this.lightboxPlayN_img.src = ""), this.lightboxPlayS_img && (this.lightboxPlayS_img.src = ""), this.lightboxPauseN_img && (this.lightboxPauseN_img.src = ""), this.lightboxPauseS_img && (this.lightboxPauseS_img.src = ""), this.lightboxMaximizeN_img && (this.lightboxMaximizeN_img.src = ""), this.lightboxMaximizeS_img && (this.lightboxMaximizeS_img.src = ""), this.lightboxMinimizeN_img && (this.lightboxMinimizeN_img.src = ""), this.lightboxMinimizeS_img && (this.lightboxMinimizeS_img.src = ""), this.lightboxInfoOpenN_img && (this.lightboxInfoOpenN_img.src = ""), this.lightboxInfoOpenS_img && (this.lightboxInfoOpenS_img.src = ""), this.lightboxInfoCloseN_img && (this.lightboxInfoCloseN_img.src = ""), this.lightboxInfoCloseS_img && (this.lightboxInfoCloseS_img.src = ""), this.lightboxCloseButtonN_img = null, this.lightboxCloseButtonS_img = null, this.lightboxNextButtonN_img = null, this.lightboxNextButtonS_img = null, this.lightboxPrevButtonN_img = null, this.lightboxPrevButtonS_img = null, this.lightboxPlayN_img = null, this.lightboxPlayS_img = null, this.lightboxPauseN_img = null, this.lightboxPauseS_img = null, this.lightboxMaximizeN_img = null, this.lightboxMaximizeS_img = null, this.lightboxMinimizeN_img = null, this.lightboxMinimizeS_img = null, this.lightboxInfoOpenN_img = null, this.lightboxInfoOpenS_img = null, this.lightboxInfoCloseN_img = null, this.lightboxInfoCloseS_img = null, this.comboboxArrowIconN_img && (this.comboboxArrowIconN_img.src = ""), this.comboboxArrowIconS_img && (this.comboboxArrowIconS_img.src = ""), this.comboboxArrowIconN_img = null, this.comboboxArrowIconN_img = null, c.image = null, d.destroy(), c = null, d = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDR3DCarEventDispatcher
        }, b.prototype = null, b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", b.LOAD_DONE = "onLoadDone", b.LOAD_ERROR = "onLoadError", a.FWDR3DCarData = b
    }(window), function(a) {
        var b = function(a, b, c, d) {
            this.listeners = {
                events_ar: []
            };
            var e = this;
            if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
            this.type = a, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.z = 0, this.angleX = 0, this.angleY = 0, this.angleZ = 0, this.perspective = 0, this.zIndex = 0, this.scale = 1, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDRLR3DUtils.hasTransform3d, this.hasTransform2d_bl = FWDRLR3DUtils.hasTransform2d, this.init = function() {
                this.setScreen()
            }, this.getTransform = function() {
                for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                    if ("undefined" != typeof this.screen.style[b]) return b;
                return !1
            }, this.getOpacityType = function() {
                var a;
                return a = "undefined" != typeof this.screen.style.opacity ? "opacity" : "filter"
            }, this.setScreen = function(a) {
                "img" == this.type && a ? (this.screen = a, this.setMainProperties()) : (this.screen = document.createElement(this.type), this.setMainProperties())
            }, this.setMainProperties = function() {
                this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == a && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function(a) {
                    return !1
                })
            }, e.setBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
            }, e.removeBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden"
            }, this.setSelectable = function(a) {
                if (!a) {
                    try {
                        this.screen.style.userSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.style.MozUserSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.style.webkitUserSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.style.khtmlUserSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.style.oUserSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.style.msUserSelect = "none"
                    } catch (a) {}
                    try {
                        this.screen.msUserSelect = "none"
                    } catch (a) {}
                    this.screen.ondragstart = function(a) {
                        return !1
                    }, this.screen.onselectstart = function() {
                        return !1
                    }, this.screen.style.webkitTouchCallout = "none"
                }
            }, this.getScreen = function() {
                return e.screen
            }, this.setVisible = function(a) {
                this.visible = a, 1 == this.visible ? this.screen.style.visibility = "visible" : this.screen.style.visibility = "hidden"
            }, this.getVisible = function() {
                return this.visible
            }, this.setResizableSizeAfterParent = function() {
                this.screen.style.width = "100%", this.screen.style.height = "100%"
            }, this.getStyle = function() {
                return this.screen.style
            }, this.setOverflow = function(a) {
                e.overflow = a, e.screen.style.overflow = e.overflow
            }, this.setPosition = function(a) {
                e.position = a, e.screen.style.position = e.position
            }, this.setDisplay = function(a) {
                this.display = a, this.screen.style.display = this.display
            }, this.setButtonMode = function(a) {
                this.buttonMode = a, 1 == this.buttonMode ? this.screen.style.cursor = "pointer" : this.screen.style.cursor = "default"
            }, this.setBkColor = function(a) {
                e.screen.style.backgroundColor = a
            }, this.setInnerHTML = function(a) {
                e.innerHTML = a, e.screen.innerHTML = e.innerHTML
            }, this.getInnerHTML = function() {
                return e.innerHTML
            }, this.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, this.setAlpha = function(a) {
                e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
            }, this.getAlpha = function() {
                return e.alpha
            }, this.getRect = function() {
                return this.screen.getBoundingClientRect()
            }, this.getGlobalX = function() {
                return this.getRect().left
            }, this.getGlobalY = function() {
                return this.getRect().top
            }, this.setX = function(a) {
                e.x = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")" : e.screen.style.left = e.x + "px"
            }, this.getX = function() {
                return e.x
            }, this.setY = function(a) {
                e.y = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")" : e.screen.style.top = e.y + "px"
            }, this.getY = function() {
                return e.y
            }, this.setZ = function(a) {
                e.z = a, e.hasTransform3d_bl && (e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)")
            }, this.getZ = function() {
                return e.z
            }, this.setAngleX = function(a) {
                e.angleX = a, e.hasTransform3d_bl && (e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)")
            }, this.getAngleX = function() {
                return e.angleX
            }, this.setAngleY = function(a) {
                e.angleY = a, e.hasTransform3d_bl && (e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)")
            }, this.getAngleY = function() {
                return e.angleY
            }, this.setAngleZ = function(a) {
                e.angleZ = a, e.hasTransform3d_bl && (e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg)")
            }, this.getAngleZ = function() {
                return e.angleZ
            }, this.setScale2 = function(a) {
                e.scale = a, e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ")")
            }, this.setScale3D = function(a) {
                e.scale = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px," + e.z + "px) rotateX(" + e.angleX + "deg) rotateY(" + e.angleY + "deg) rotateZ(" + e.angleZ + "deg) scale3d(" + e.scale + ", " + e.scale + ", " + e.scale + ")" : e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + ", " + e.scale + ")")
            }, this.getScale = function() {
                return e.scale
            }, this.setPerspective = function(a) {
                e.perspective = a, e.screen.style.perspective = e.perspective + "px", e.screen.style.WebkitPerspective = e.perspective + "px", e.screen.style.MozPerspective = e.perspective + "px", e.screen.style.msPerspective = e.perspective + "px", e.screen.style.OPerspective = e.perspective + "px"
            }, this.setPreserve3D = function() {
                this.screen.style.transformStyle = "preserve-3d", this.screen.style.WebkitTransformStyle = "preserve-3d", this.screen.style.MozTransformStyle = "preserve-3d", this.screen.style.msTransformStyle = "preserve-3d", this.screen.style.OTransformStyle = "preserve-3d"
            }, this.setZIndex = function(a) {
                e.zIndex = a, e.screen.style.zIndex = e.zIndex
            }, this.getZIndex = function() {
                return e.zIndex
            }, this.setWidth = function(a) {
                e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
            }, this.getWidth = function() {
                return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
            }, this.setHeight = function(a) {
                e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
            }, this.getHeight = function() {
                return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
            }, this.getNumChildren = function() {
                return e.children_ar.length
            }, this.addChild = function(a) {
                this.contains(a) ? (this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.children_ar.push(a), this.screen.appendChild(a.screen))
            }, this.removeChild = function(a) {
                if (!this.contains(a)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
                this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.screen.removeChild(a.screen)
            }, this.contains = function(a) {
                return FWDRLR3DUtils.indexOfArray(this.children_ar, a) != -1
            }, this.addChildAtZero = function(a) {
                0 == this.numChildren ? (this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.screen.insertBefore(a.screen, this.children_ar[0].screen), this.contains(a) && this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.unshift(a))
            }, this.getChildAt = function(a) {
                if (a < 0 || a > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
                if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
                return this.children_ar[a]
            }, this.removeChildAtZero = function() {
                this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
            }, this.addListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function.");
                var c = {};
                c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
            }, this.dispatchEvent = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
                        break
                    }
            }, this.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function." + a);
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                        this.listeners.events_ar.splice(c, 1);
                        break
                    }
            }, this.disposeImage = function() {
                "img" == this.type && (this.screen.src = "")
            }, this.destroy = function() {
                try {
                    this.screen.parentNode.removeChild(this.screen)
                } catch (a) {}
                this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform3d_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, e = null
            }, this.init()
        };
        a.FWDR3DCarDisplayObject3D = b
    }(window), function() {
        var a = function() {
            this.listeners = {
                events_ar: []
            }, this.destroy = function() {
                this.listeners = null
            }, this.addListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function.");
                var c = {};
                c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
            }, this.dispatchEvent = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }, this.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function." + a);
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                        this.listeners.events_ar.splice(c, 1);
                        break
                    }
            }
        };
        window.FWDR3DCarEventDispatcher = a
    }(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        window._gsDefine("FWDR3DCarModTweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = [].slice,
                    e = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
                    },
                    f = function(a) {
                        return a.jquery || a.length && a[0] && a[0].nodeType && a[0].style
                    },
                    g = e.prototype = c.to({}, .1, {}),
                    h = [];
                e.version = "1.9.7", g.constructor = e, g.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, g.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                }, g.updateTo = function(a, b) {
                    var e, d = this.ratio;
                    b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (e in a) this.vars[e] = a[e];
                    if (this._initted)
                        if (b) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var f = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var i, g = 1 / (1 - d), h = this._firstPT; h;) i = h.s + h.c, h.c *= g, h.s = i - h.c, h = h._next
                    }
                    return this
                }, g.render = function(a, b, c) {
                    var i, j, k, l, m, n, o, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        e = this._time,
                        f = this._totalTime,
                        g = this._cycle;
                    if (a >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, j = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (j = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a)) : a < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (j = "onReverseComplete", i = this._reversed), a < 0 ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (l = this._duration + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : this._time < 0 && (this._time = 0)), this._easeType ? (m = this._time / this._duration, n = this._easeType, o = this._easePower, (1 === n || 3 === n && m >= .5) && (m = 1 - m), 3 === n && (m *= 2), 1 === o ? m *= m : 2 === o ? m *= m * m : 3 === o ? m *= m * m * m : 4 === o && (m *= m * m * m * m), 1 === n ? this.ratio = 1 - m : 2 === n ? this.ratio = m : this._time / this._duration < .5 ? this.ratio = m / 2 : this.ratio = 1 - m / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), e === this._time && !c) return void(f !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / this._duration) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || this._paused || (this._active = !0), 0 === f && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : j || (j = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== this._duration || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), k = this._firstPT; k;) {
                        if (k.f) k.t[k.p](k.c * this.ratio + k.s);
                        else {
                            var p = k.c * this.ratio + k.s;
                            "x" == k.p ? k.t.setX(p) : "y" == k.p ? k.t.setY(p) : "z" == k.p ? k.t.setZ(p) : "angleX" == k.p ? k.t.setAngleX(p) : "angleY" == k.p ? k.t.setAngleY(p) : "angleZ" == k.p ? k.t.setAngleZ(p) : "w" == k.p ? k.t.setWidth(p) : "h" == k.p ? k.t.setHeight(p) : "alpha" == k.p ? k.t.setAlpha(p) : "scale" == k.p ? k.t.setScale2(p) : k.t[k.p] = p
                        }
                        k = k._next
                    }
                    this._onUpdate && (a < 0 && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== g && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), j && (this._gc || (a < 0 && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this.vars[j].apply(this.vars[j + "Scope"] || this, this.vars[j + "Params"] || h)))
                }, e.to = function(a, b, c) {
                    return new e(a, b, c)
                }, e.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
                }, e.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
                }, e.staggerTo = e.allTo = function(a, b, g, i, j, k, l) {
                    i = i || 0;
                    var p, q, r, s, m = g.delay || 0,
                        n = [],
                        o = function() {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, g.onCompleteParams || h), j.apply(l || this, k || h)
                        };
                    for (a instanceof Array || ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d.call(a, 0))), p = a.length, r = 0; r < p; r++) {
                        q = {};
                        for (s in g) q[s] = g[s];
                        q.delay = m, r === p - 1 && j && (q.onComplete = o), n[r] = new e(a[r], b, q), m += i
                    }
                    return n
                }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
                }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
                }, e.delayedCall = function(a, b, c, d, f) {
                    return new e(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        onCompleteScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        onReverseCompleteScope: d,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, e.set = function(a, b) {
                    return new e(a, 0, b)
                }, e.isTweening = function(a) {
                    for (var e, b = c.getTweensOf(a), d = b.length; --d > -1;)
                        if (e = b[d], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
                    return !1
                };
                var i = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(i(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    j = e.getAllTweens = function(b) {
                        return i(a._rootTimeline, b).concat(i(a._rootFramesTimeline, b))
                    };
                e.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var i, k, l, f = j(0 != e),
                        g = f.length,
                        h = c && d && e;
                    for (l = 0; l < g; l++) k = f[l], (h || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) && (a ? k.totalTime(k.totalDuration()) : k._enabled(!1, !1))
                }, e.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var h, i, j, k, l, g = c._tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d(a, 0)), a instanceof Array)
                            for (k = a.length; --k > -1;) e.killChildTweensOf(a[k], b);
                        else {
                            h = [];
                            for (j in g)
                                for (i = g[j].target.parentNode; i;) i === a && (h = h.concat(g[j].tweens)), i = i.parentNode;
                            for (l = h.length, k = 0; k < l; k++) b && h[k].totalTime(h[k].totalDuration()), h[k]._enabled(!1, !1)
                        }
                    }
                };
                var k = function(a, c, d, e) {
                    void 0 === c && (c = !0), void 0 === d && (d = !0);
                    for (var i, k, f = j(e), g = c && d && e, h = f.length; --h > -1;) k = f[h], (g || k instanceof b || (i = k.target === k.vars.onComplete) && d || c && !i) && k.paused(a)
                };
                return e.pauseAll = function(a, b, c) {
                    k(!0, a, b, c)
                }, e.resumeAll = function(a, b, c) {
                    k(!1, a, b, c)
                }, g.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, g.totalProgress = function(a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, g.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, g.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, g.totalDuration = function(a) {
                    return arguments.length ? this._repeat === -1 ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, g.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, g.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, g.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, e
            }, !0),
            window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        for (var f, g, c = this.vars, d = e.length; --d > -1;)
                            if (g = c[e[d]])
                                for (f = g.length; --f > -1;) "{self}" === g[f] && (g = c[e[d]] = g.concat(), g[f] = this);
                        c.tweens instanceof Array && this.add(c.tweens, 0, c.align, c.stagger)
                    },
                    e = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
                    f = [],
                    g = function(a) {
                        var c, b = {};
                        for (c in a) b[c] = a[c];
                        return b
                    },
                    h = f.slice,
                    i = d.prototype = new b;
                return d.version = "1.9.7", i.constructor = d, i.kill()._gc = !1, i.to = function(a, b, d, e) {
                    return b ? this.add(new c(a, b, d), e) : this.set(a, d, e)
                }, i.from = function(a, b, d, e) {
                    return this.add(c.from(a, b, d), e)
                }, i.fromTo = function(a, b, d, e, f) {
                    return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, i.staggerTo = function(a, b, e, f, i, j, k, l) {
                    var n, m = new d({
                        onComplete: j,
                        onCompleteParams: k,
                        onCompleteScope: l
                    });
                    for ("string" == typeof a && (a = c.selector(a) || a), !(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style && (a = h.call(a, 0)), f = f || 0, n = 0; n < a.length; n++) e.startAt && (e.startAt = g(e.startAt)), m.to(a[n], b, g(e), n * f);
                    return this.add(m, i)
                }, i.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, i.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, i.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var g, h, e = new d(a),
                        f = e._timeline;
                    for (null == b && (b = !0), f._remove(e, !0), e._startTime = 0, e._rawPrevTime = e._time = e._totalTime = f._time,
                        g = f._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || e.add(g, g._startTime - g._delay), g = h;
                    return f.add(e, 0), e
                }, i.add = function(e, f, g, h) {
                    var i, j, k, l, m;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array) {
                            for (g = g || "normal", h = h || 0, i = f, j = e.length, k = 0; k < j; k++)(l = e[k]) instanceof Array && (l = new d({
                                tweens: l
                            })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === g ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === g && (l._startTime -= l.delay())), i += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (m = this; m._gc && m._timeline;) m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._enabled(!0, !1), m = m._timeline;
                    return this
                }, i.remove = function(b) {
                    if (b instanceof a) return this._remove(b, !1);
                    if (b instanceof Array) {
                        for (var c = b.length; --c > -1;) this.remove(b[c]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, i.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, i.insert = i.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, i.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, i.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, i.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, i.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, i._parseTimeOrLabel = function(b, c, d, e) {
                    var f;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e instanceof Array)
                        for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                    if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                    else {
                        if (f = b.indexOf("="), f === -1) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                    }
                    return Number(b) + c
                }, i.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, i.stop = function() {
                    return this.paused(!0)
                }, i.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, i.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, i.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var j, k, l, m, n, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        e = this._time,
                        g = this._startTime,
                        h = this._timeScale,
                        i = this._paused;
                    if (a >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (k = !0, m = "onComplete", 0 === this._duration && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (n = !0, this._rawPrevTime > 0 && (m = "onReverseComplete"))), this._rawPrevTime = a, a = d + 1e-6) : a < 1e-7 ? (this._totalTime = this._time = 0, (0 !== e || 0 === this._duration && this._rawPrevTime > 0) && (m = "onReverseComplete", k = this._reversed), a < 0 ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (n = !0)) : this._initted || (n = !0), this._rawPrevTime = a, a = 0) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== e && this._first || c || n) {
                        if (this._initted || (this._initted = !0), 0 === e && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= e)
                            for (j = this._first; j && (l = j._next, !this._paused || i);)(j._active || j._startTime <= this._time && !j._paused && !j._gc) && (j._reversed ? j.render((j._dirty ? j.totalDuration() : j._totalDuration) - (a - j._startTime) * j._timeScale, b, c) : j.render((a - j._startTime) * j._timeScale, b, c)), j = l;
                        else
                            for (j = this._last; j && (l = j._prev, !this._paused || i);)(j._active || j._startTime <= e && !j._paused && !j._gc) && (j._reversed ? j.render((j._dirty ? j.totalDuration() : j._totalDuration) - (a - j._startTime) * j._timeScale, b, c) : j.render((a - j._startTime) * j._timeScale, b, c)), j = l;
                        this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), m && (this._gc || g !== this._startTime && h === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (k && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[m] && this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || f)))
                    }
                }, i._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, i.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, i.getTweensOf = function(a, b) {
                    for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
                    return f
                }, i._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, i.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var f, d = this._first, e = this._labels; d;) d._startTime >= c && (d._startTime += a), d = d._next;
                    if (b)
                        for (f in e) e[f] >= c && (e[f] += a);
                    return this._uncache(!0)
                }, i._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, i.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, i.invalidate = function() {
                    for (var a = this._first; a;) a.invalidate(), a = a._next;
                    return this
                }, i._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, i.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration()
                }, i.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, i.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, f, b = 0, c = this._last, d = 999999999999; c;) e = c._prev, c._dirty && c.totalDuration(), c._startTime > d && this._sortChildren && !c._paused ? this.add(c, c._startTime - c._delay) : d = c._startTime, c._startTime < 0 && !c._paused && (b -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), d = 0), f = c._startTime + c._totalDuration / c._timeScale, f > b && (b = f), c = e;
                            this._duration = this._totalDuration = b, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
                }, i.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, i.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, d
            }, !0),
            window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = [],
                    f = new c(null, null, 1, 0),
                    g = function(a) {
                        for (; a;) {
                            if (a._paused) return !0;
                            a = a._timeline
                        }
                        return !1
                    },
                    h = d.prototype = new a;
                return h.constructor = d, h.kill()._gc = !1, d.version = "1.9.7", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, h.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, h.removeCallback = function(a, b) {
                    if (null == b) this._kill(null, a);
                    else
                        for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, h.tweenTo = function(a, c) {
                    c = c || {};
                    var g, h, d = {
                        ease: f,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (g in c) d[g] = c[g];
                    return d.time = this._parseTimeOrLabel(a), h = new b(this, Math.abs(Number(d.time) - this._time) / this._timeScale || .001, d), d.onStart = function() {
                        h.target.paused(!0), h.vars.time !== h.target.time() && h.duration(Math.abs(h.vars.time - h.target.time()) / h.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || h, c.onStartParams || e)
                    }, h
                }, h.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        onCompleteScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, h.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var n, o, p, q, r, s, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        g = this._time,
                        h = this._totalTime,
                        i = this._startTime,
                        j = this._timeScale,
                        k = this._rawPrevTime,
                        l = this._paused,
                        m = this._cycle;
                    if (a >= d ? (this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, q = "onComplete", 0 === f && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (r = !0, this._rawPrevTime > 0 && (q = "onReverseComplete"))), this._rawPrevTime = a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = f, a = f + 1e-6)) : a < 1e-7 ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === f && this._rawPrevTime > 0 && !this._locked) && (q = "onReverseComplete", o = this._reversed), a < 0 ? (this._active = !1, 0 === f && this._rawPrevTime >= 0 && this._first && (r = !0)) : this._initted || (r = !0), this._rawPrevTime = a, a = 0) : (this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (s = f + this._repeatDelay, this._cycle = this._totalTime / s >> 0, 0 !== this._cycle && this._cycle === this._totalTime / s && this._cycle--, this._time = this._totalTime - this._cycle * s, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, a = f + 1e-6) : this._time < 0 ? this._time = a = 0 : a = this._time))), this._cycle !== m && !this._locked) {
                        var t = this._yoyo && 0 !== (1 & m),
                            u = t === (this._yoyo && 0 !== (1 & this._cycle)),
                            v = this._totalTime,
                            w = this._cycle,
                            x = this._rawPrevTime,
                            y = this._time;
                        this._totalTime = m * f, this._cycle < m ? t = !t : this._totalTime += f, this._time = g, this._rawPrevTime = 0 === f ? k - 1e-5 : k, this._cycle = m, this._locked = !0, g = t ? 0 : f, this.render(g, b, 0 === f), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), u && (g = t ? f + 1e-6 : -1e-6, this.render(g, !0, !1)), this._time = y, this._totalTime = v, this._cycle = w, this._rawPrevTime = x, this._locked = !1
                    }
                    if (!(this._time !== g && this._first || c || r)) return void(h !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)));
                    if (this._initted || (this._initted = !0), 0 === h && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), this._time >= g)
                        for (n = this._first; n && (p = n._next, !this._paused || l);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (a - n._startTime) * n._timeScale, b, c) : n.render((a - n._startTime) * n._timeScale, b, c)), n = p;
                    else
                        for (n = this._last; n && (p = n._prev, !this._paused || l);)(n._active || n._startTime <= g && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (a - n._startTime) * n._timeScale, b, c) : n.render((a - n._startTime) * n._timeScale, b, c)), n = p;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), q && (this._locked || this._gc || i !== this._startTime && j === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[q] && this.vars[q].apply(this.vars[q + "Scope"] || this, this.vars[q + "Params"] || e)))
                }, h.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var i, j, d = [],
                        e = this.getChildren(a, b, c),
                        f = 0,
                        h = e.length;
                    for (i = 0; i < h; i++) j = e[i], j._paused || j._timeline._time >= j._startTime && j._timeline._time < j._startTime + j._totalDuration / j._timeScale && (g(j._timeline) || (d[f++] = j));
                    return d
                }, h.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var d, b = this.getLabelsArray(),
                        c = b.length;
                    for (d = 0; d < c; d++)
                        if (b[d].time > a) return b[d].name;
                    return null
                }, h.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, h.getLabelsArray = function() {
                    var c, a = [],
                        b = 0;
                    for (c in this._labels) a[b++] = {
                        time: this._labels[c],
                        name: c
                    };
                    return a.sort(function(a, b) {
                        return a.time - b.time
                    }), a
                }, h.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(b) {
                    return arguments.length ? this._repeat === -1 ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, h.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, h.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = Math.PI / 180,
                    c = [],
                    d = [],
                    e = [],
                    f = {},
                    g = function(a, b, c, d) {
                        this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, b, f, g, h) {
                        var m, n, o, p, q, r, s, t, u, v, w, x, y, j = a.length - 1,
                            k = 0,
                            l = a[0].a;
                        for (m = 0; m < j; m++) q = a[k], n = q.a, o = q.d, p = a[k + 1].d, h ? (w = c[m], x = d[m], y = (x + w) * b * .25 / (g ? .5 : e[m] || .5), r = o - (o - n) * (g ? .5 * b : 0 !== w ? y / w : 0), s = o + (p - o) * (g ? .5 * b : 0 !== x ? y / x : 0), t = o - (r + ((s - r) * (3 * w / (w + x) + .5) / 4 || 0))) : (r = o - (o - n) * b * .5, s = o + (p - o) * b * .5, t = o - (r + s) / 2), r += t, s += t, q.c = u = r, 0 !== m ? q.b = l : q.b = l = q.a + .6 * (q.c - q.a), q.da = o - n, q.ca = u - n, q.ba = l - n, f ? (v = i(n, l, u, o), a.splice(k, 1, v[0], v[1], v[2], v[3]), k += 4) : k++, l = s;
                        q = a[k], q.b = l, q.c = l + .4 * (q.d - l), q.da = q.d - q.a, q.ca = q.c - q.a, q.ba = l - q.a, f && (v = i(q.a, l, q.c, q.d), a.splice(k, 1, v[0], v[1], v[2], v[3]))
                    },
                    k = function(a, b, e, f) {
                        var i, j, k, l, m, n, h = [];
                        if (f)
                            for (a = [f].concat(a), j = a.length; --j > -1;) "string" == typeof(n = a[j][b]) && "=" === n.charAt(1) && (a[j][b] = f[b] + Number(n.charAt(0) + n.substr(2)));
                        if (i = a.length - 2, i < 0) return h[0] = new g(a[0][b], 0, 0, a[i < -1 ? 0 : 1][b]), h;
                        for (j = 0; j < i; j++) k = a[j][b], l = a[j + 1][b], h[j] = new g(k, 0, 0, l), e && (m = a[j + 2][b], c[j] = (c[j] || 0) + (l - k) * (l - k), d[j] = (d[j] || 0) + (m - l) * (m - l));
                        return h[j] = new g(a[j][b], 0, 0, a[j + 1][b]), h
                    },
                    l = function(a, b, g, i, l, m) {
                        var q, r, s, t, u, v, w, x, n = {},
                            o = [],
                            p = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == b && (b = 1);
                        for (r in a[0]) o.push(r);
                        if (a.length > 1) {
                            for (x = a[a.length - 1], w = !0, q = o.length; --q > -1;)
                                if (r = o[q], Math.abs(p[r] - x[r]) > .05) {
                                    w = !1;
                                    break
                                } w && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (c.length = d.length = e.length = 0, q = o.length; --q > -1;) r = o[q], f[r] = l.indexOf("," + r + ",") !== -1, n[r] = k(a, r, f[r], m);
                        for (q = c.length; --q > -1;) c[q] = Math.sqrt(c[q]), d[q] = Math.sqrt(d[q]);
                        if (!i) {
                            for (q = o.length; --q > -1;)
                                if (f[r])
                                    for (s = n[o[q]], v = s.length - 1, t = 0; t < v; t++) u = s[t + 1].da / d[t] + s[t].da / c[t], e[t] = (e[t] || 0) + u * u;
                            for (q = e.length; --q > -1;) e[q] = Math.sqrt(e[q])
                        }
                        for (q = o.length, t = g ? 4 : 1; --q > -1;) r = o[q], s = n[r], j(s, b, g, i, f[r]), w && (s.splice(0, t), s.splice(s.length - t, t));
                        return n
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var i, j, k, l, m, n, o, p, q, r, s, d = {},
                            e = "cubic" === b ? 3 : 2,
                            f = "soft" === b,
                            h = [];
                        if (f && c && (a = [c].concat(a)), null == a || a.length < e + 1) throw "invalid Bezier data";
                        for (q in a[0]) h.push(q);
                        for (n = h.length; --n > -1;) {
                            for (q = h[n], d[q] = m = [], r = 0, p = a.length, o = 0; o < p; o++) i = null == c ? a[o][q] : "string" == typeof(s = a[o][q]) && "=" === s.charAt(1) ? c[q] + Number(s.charAt(0) + s.substr(2)) : Number(s), f && o > 1 && o < p - 1 && (m[r++] = (i + m[r - 2]) / 2), m[r++] = i;
                            for (p = r - e + 1, r = 0, o = 0; o < p; o += e) i = m[o], j = m[o + 1], k = m[o + 2], l = 2 === e ? 0 : m[o + 3], m[r++] = s = 3 === e ? new g(i, j, k, l) : new g(i, (2 * j + i) / 3, (2 * j + k) / 3, k);
                            m.length = r
                        }
                        return d
                    },
                    n = function(a, b, c) {
                        for (var f, g, h, i, j, k, l, m, n, o, p, d = 1 / c, e = a.length; --e > -1;)
                            for (o = a[e], h = o.a, i = o.d - h, j = o.c - h, k = o.b - h, f = g = 0, m = 1; m <= c; m++) l = d * m, n = 1 - l, f = g - (g = (l * l * i + 3 * n * (l * j + n * k)) * l), p = e * c + m - 1, b[p] = (b[p] || 0) + f * f
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var j, k, l, m, c = [],
                            d = [],
                            e = 0,
                            f = 0,
                            g = b - 1,
                            h = [],
                            i = [];
                        for (j in a) n(a[j], c, b);
                        for (l = c.length, k = 0; k < l; k++) e += Math.sqrt(c[k]), m = k % b, i[m] = e, m === g && (f += e, m = k / b >> 0, h[m] = i, d[m] = f, e = 0, i = []);
                        return {
                            length: f,
                            lengths: d,
                            segments: h
                        }
                    },
                    p = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var h, i, j, k, n, d = b.values || [],
                                e = {},
                                f = d[0],
                                g = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = g ? g instanceof Array ? g : [
                                ["x", "y", "rotation", g === !0 ? 0 : Number(g) || 0]
                            ] : null;
                            for (h in f) this._props.push(h);
                            for (j = this._props.length; --j > -1;) h = this._props[j], this._overwriteProps.push(h), i = this._func[h] = "function" == typeof a[h], e[h] = i ? a[h.indexOf("set") || "function" != typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : parseFloat(a[h]), n || e[h] !== d[0][h] && (n = e);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(d, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, n) : m(d, b.type, e), this._segCount = this._beziers[h].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (g = this._autoRotate)
                                for (g[0] instanceof Array || (this._autoRotate = g = [g]), j = g.length; --j > -1;)
                                    for (k = 0; k < 3; k++) h = g[j][k], this._func[h] = "function" == typeof a[h] && a[h.indexOf("set") || "function" != typeof a["get" + h.substr(3)] ? h : "get" + h.substr(3)];
                            return !0
                        },
                        set: function(b) {
                            var f, g, h, i, j, k, l, m, n, o, c = this._segCount,
                                d = this._func,
                                e = this._target;
                            if (this._timeRes) {
                                if (n = this._lengths, o = this._curSeg, b *= this._length, h = this._li, b > this._l2 && h < c - 1) {
                                    for (m = c - 1; h < m && (this._l2 = n[++h]) <= b;);
                                    this._l1 = n[h - 1], this._li = h, this._curSeg = o = this._segments[h], this._s2 = o[this._s1 = this._si = 0]
                                } else if (b < this._l1 && h > 0) {
                                    for (; h > 0 && (this._l1 = n[--h]) >= b;);
                                    0 === h && b < this._l1 ? this._l1 = 0 : h++, this._l2 = n[h], this._li = h, this._curSeg = o = this._segments[h], this._s1 = o[(this._si = o.length - 1) - 1] || 0, this._s2 = o[this._si]
                                }
                                if (f = h, b -= this._l1, h = this._si, b > this._s2 && h < o.length - 1) {
                                    for (m = o.length - 1; h < m && (this._s2 = o[++h]) <= b;);
                                    this._s1 = o[h - 1], this._si = h
                                } else if (b < this._s1 && h > 0) {
                                    for (; h > 0 && (this._s1 = o[--h]) >= b;);
                                    0 === h && b < this._s1 ? this._s1 = 0 : h++, this._s2 = o[h], this._si = h
                                }
                                k = (h + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else f = b < 0 ? 0 : b >= 1 ? c - 1 : c * b >> 0, k = (b - f * (1 / c)) * c;
                            for (g = 1 - k, h = this._props.length; --h > -1;) i = this._props[h], j = this._beziers[i][f], l = (k * k * j.da + 3 * g * (k * j.ca + g * j.ba)) * k + j.a, this._round[i] && (l = l + (l > 0 ? .5 : -.5) >> 0), d[i] ? e[i](l) : "x" == i ? e.setX(l) : "y" == i ? e.setY(l) : "z" == i ? e.setZ(l) : "angleX" == i ? e.setAngleX(l) : "angleY" == i ? e.setAngleY(l) : "angleZ" == i ? e.setAngleZ(l) : "w" == i ? e.setWidth(l) : "h" == i ? e.setHeight(l) : "alpha" == i ? e.setAlpha(l) : "scale" == i ? e.setScale2(l) : e[i] = l;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, p = this._autoRotate;
                                for (h = p.length; --h > -1;) i = p[h][2], v = p[h][3] || 0, w = p[h][4] === !0 ? 1 : a, j = this._beziers[p[h][0]], q = this._beziers[p[h][1]], j && q && (j = j[f], q = q[f], r = j.a + (j.b - j.a) * k, t = j.b + (j.c - j.b) * k, r += (t - r) * k, t += (j.c + (j.d - j.c) * k - t) * k, s = q.a + (q.b - q.a) * k, u = q.b + (q.c - q.b) * k, s += (u - s) * k, u += (q.c + (q.d - q.c) * k - u) * k, l = Math.atan2(u - s, t - r) * w + v, d[i] ? e[i](l) : e[i] = l)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = window._gsDefine.globals.CSSPlugin;
                    if (a) {
                        var c = a._internals,
                            d = c._parseToProxy,
                            e = c._setPluginRatio,
                            f = c.CSSPropTween;
                        c._registerComplexSpecialProp("bezier", {
                            parser: function(a, c, g, h, i, j) {
                                c instanceof Array && (c = {
                                    values: c
                                }), j = new p;
                                var o, q, r, k = c.values,
                                    l = k.length - 1,
                                    m = [],
                                    n = {};
                                if (l < 0) return i;
                                for (o = 0; o <= l; o++) r = d(a, k[o], h, i, j, l !== o), m[o] = r.end;
                                for (q in c) n[q] = c[q];
                                return n.values = m, i = new f(a, "bezier", 0, 0, r.pt, 2), i.data = r, i.plugin = j, i.setRatio = e, 0 === n.autoRotate && (n.autoRotate = !0), !n.autoRotate || n.autoRotate instanceof Array || (o = n.autoRotate === !0 ? 0 : Number(n.autoRotate) * b, n.autoRotate = null != r.end.left ? [
                                    ["left", "top", "rotation", o, !0]
                                ] : null != r.end.x && [
                                    ["x", "y", "rotation", o, !0]
                                ]), n.autoRotate && (h._transform || h._enableTransforms(!1), r.autoRotate = h._target._gsTransform), j._onInitTween(r.proxy, n, h._tween), i
                            }
                        })
                    }
                }, q._roundProps = function(a, b) {
                    for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                }, q._kill = function(a) {
                    var c, d, b = this._props;
                    for (c in this._beziers)
                        if (c in a)
                            for (delete this._beziers[c], delete this._func[c], d = b.length; --d > -1;) b[d] === c && b.splice(d, 1);
                    return this._super._kill.call(this, a)
                }
            }(),
            window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var d, e, f, g, c = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0
                    },
                    h = {},
                    i = c.prototype = new a("css");
                i.constructor = c, c.version = "1.9.7", c.API = 2, c.defaultTransformPerspective = 0, i = "px", c.suffixMap = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i,
                    width: i,
                    height: i,
                    fontSize: i,
                    padding: i,
                    margin: i,
                    perspective: i
                };
                var I, J, K, L, M, N, j = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    l = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    m = /[^\d\-\.]/g,
                    n = /(?:\d|\-|\+|=|#|\.)*/g,
                    o = /opacity *= *([^)]*)/,
                    p = /opacity:([^;]*)/,
                    q = /alpha\(opacity *=.+?\)/i,
                    r = /^(rgb|hsl)/,
                    s = /([A-Z])/g,
                    t = /-([a-z])/gi,
                    u = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    v = function(a, b) {
                        return b.toUpperCase()
                    },
                    w = /(?:Left|Right|Width)/i,
                    x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    y = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    z = /,(?=[^\)]*(?:\(|$))/gi,
                    A = Math.PI / 180,
                    B = 180 / Math.PI,
                    C = {},
                    D = document,
                    E = D.createElement("div"),
                    F = D.createElement("img"),
                    G = c._internals = {
                        _specialProps: h
                    },
                    H = navigator.userAgent,
                    O = function() {
                        var c, a = H.indexOf("Android"),
                            b = D.createElement("div");
                        return K = H.indexOf("Safari") !== -1 && H.indexOf("Chrome") === -1 && (a === -1 || Number(H.substr(a + 8, 1)) > 3), M = K && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, L = H.indexOf("Firefox") !== -1, /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H), N = parseFloat(RegExp.$1), b.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", c = b.getElementsByTagName("a")[0], !!c && /^0.55/.test(c.style.opacity)
                    }(),
                    P = function(a) {
                        return o.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Q = function(a) {
                        window.console && console.log(a)
                    },
                    R = "",
                    S = "",
                    T = function(a, b) {
                        b = b || E;
                        var d, e, c = b.style;
                        if (void 0 !== c[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), d = ["O", "Moz", "ms", "Ms", "Webkit"], e = 5; --e > -1 && void 0 === c[d[e] + a];);
                        return e >= 0 ? (S = 3 === e ? "ms" : d[e], R = "-" + S.toLowerCase() + "-", S + a) : null
                    },
                    U = D.defaultView ? D.defaultView.getComputedStyle : function() {},
                    V = c.getStyle = function(a, b, c, d, e) {
                        var f;
                        return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(s, "-$1").toLowerCase()), f = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, f = c[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
                    },
                    W = function(a, b, c, d, e) {
                        if ("px" === d || !d) return c;
                        if ("auto" === d || !c) return 0;
                        var j, f = w.test(b),
                            g = a,
                            h = E.style,
                            i = c < 0;
                        return i && (c = -c), "%" === d && b.indexOf("border") !== -1 ? j = c / 100 * (f ? a.clientWidth : a.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== d && g.appendChild ? h[f ? "borderLeftWidth" : "borderTopWidth"] = c + d : (g = a.parentNode || D.body, h[f ? "width" : "height"] = c + d), g.appendChild(E), j = parseFloat(E[f ? "offsetWidth" : "offsetHeight"]), g.removeChild(E), 0 !== j || e || (j = W(a, b, c, d, !0))), i ? -j : j
                    },
                    X = function(a, b, c) {
                        if ("absolute" !== V(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = V(a, "margin" + d, c);
                        return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(n, "")) || 0)
                    },
                    Y = function(a, b) {
                        var d, e, c = {};
                        if (b = b || U(a, null))
                            if (d = b.length)
                                for (; --d > -1;) c[b[d].replace(t, v)] = b.getPropertyValue(b[d]);
                            else
                                for (d in b) c[d] = b[d];
                        else if (b = a.currentStyle || a.style)
                            for (d in b) c[d.replace(t, v)] = b[d];
                        return O || (c.opacity = P(a)), e = za(a, b, !1), c.rotation = e.rotation * B, c.skewX = e.skewX * B, c.scaleX = e.scaleX, c.scaleY = e.scaleY, c.x = e.x, c.y = e.y, ya && (c.z = e.z, c.rotationX = e.rotationX * B, c.rotationY = e.rotationY * B, c.scaleZ = e.scaleZ), c.filters && delete c.filters, c
                    },
                    Z = function(a, b, c, d, e) {
                        var h, i, j, f = {},
                            g = a.style;
                        for (i in c) "cssText" !== i && "length" !== i && isNaN(i) && (b[i] !== (h = c[i]) || e && e[i]) && i.indexOf("Origin") === -1 && ("number" != typeof h && "string" != typeof h || (f[i] = "auto" !== h || "left" !== i && "top" !== i ? "" !== h && "auto" !== h && "none" !== h || "string" != typeof b[i] || "" === b[i].replace(m, "") ? h : 0 : X(a, i), void 0 !== g[i] && (j = new ma(g, i, g[i], j))));
                        if (d)
                            for (i in d) "className" !== i && (f[i] = d[i]);
                        return {
                            difs: f,
                            firstMPT: j
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    aa = function(a, b, c) {
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = $[b],
                            f = e.length;
                        for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ba = function(a, b) {
                        null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
                        var c = a.split(" "),
                            d = a.indexOf("left") !== -1 ? "0%" : a.indexOf("right") !== -1 ? "100%" : c[0],
                            e = a.indexOf("top") !== -1 ? "0%" : a.indexOf("bottom") !== -1 ? "100%" : c[1];
                        return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d))) && (d = "50%"), b && (b.oxp = d.indexOf("%") !== -1, b.oyp = e.indexOf("%") !== -1, b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(m, "")), b.oy = parseFloat(e.replace(m, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
                    },
                    ca = function(a, b) {
                        return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
                    },
                    da = function(a, b) {
                        return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
                    },
                    ea = function(a, b, c, d) {
                        var f, g, h, i, e = 1e-6;
                        return null == a ? i = b : "number" == typeof a ? i = a * A : (f = 2 * Math.PI, g = a.split("_"), h = Number(g[0].replace(m, "")) * (a.indexOf("rad") === -1 ? A : 1) - ("=" === a.charAt(1) ? 0 : b), g.length && (d && (d[c] = b + h), a.indexOf("short") !== -1 && (h %= f, h !== h % (f / 2) && (h = h < 0 ? h + f : h - f)), a.indexOf("_cw") !== -1 && h < 0 ? h = (h + 9999999999 * f) % f - (h / f | 0) * f : a.indexOf("ccw") !== -1 && h > 0 && (h = (h - 9999999999 * f) % f - (h / f | 0) * f)), i = b + h), i < e && i > -e && (i = 0), i
                    },
                    fa = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ga = function(a, b, c) {
                        return a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, 255 * (6 * a < 1 ? b + (c - b) * a * 6 : a < .5 ? c : 3 * a < 2 ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    ha = function(a) {
                        var b, c, d, e, f, g;
                        return a && "" !== a ? "number" == typeof a ? [a >> 16, a >> 8 & 255, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fa[a] ? fa[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, a >> 8 & 255, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(j), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = g <= .5 ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ga(e + 1 / 3, b, c), a[1] = ga(e, b, c), a[2] = ga(e - 1 / 3, b, c), a) : (a = a.match(j) || fa.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fa.black
                    },
                    ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (i in fa) ia += "|" + i + "\\b";
                ia = new RegExp(ia + ")", "gi");
                var ja = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var n, e = b ? (a.match(ia) || [""])[0] : "",
                            f = a.split(e).join("").match(l) || [],
                            g = a.substr(0, a.indexOf(f[0])),
                            h = ")" === a.charAt(a.length - 1) ? ")" : "",
                            i = a.indexOf(" ") !== -1 ? " " : ",",
                            k = f.length,
                            m = k > 0 ? f[0].replace(j, "") : "";
                        return k ? n = b ? function(a) {
                            var b, j, o, p;
                            if ("number" == typeof a) a += m;
                            else if (d && z.test(a)) {
                                for (p = a.replace(z, "|").split("|"), o = 0; o < p.length; o++) p[o] = n(p[o]);
                                return p.join(",")
                            }
                            if (b = (a.match(ia) || [e])[0], j = a.split(b).join("").match(l) || [], o = j.length, k > o--)
                                for (; ++o < k;) j[o] = c ? j[(o - 1) / 2 | 0] : f[o];
                            return g + j.join(i) + i + b + h + (a.indexOf("inset") !== -1 ? " inset" : "")
                        } : function(a) {
                            var b, e, j;
                            if ("number" == typeof a) a += m;
                            else if (d && z.test(a)) {
                                for (e = a.replace(z, "|").split("|"), j = 0; j < e.length; j++) e[j] = n(e[j]);
                                return e.join(",")
                            }
                            if (b = a.match(l) || [], j = b.length, k > j--)
                                for (; ++j < k;) b[j] = c ? b[(j - 1) / 2 | 0] : f[j];
                            return g + b.join(i) + h
                        } : function(a) {
                            return a
                        }
                    },
                    ka = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var j, i = (c + "").split(" ");
                                for (h = {}, j = 0; j < 4; j++) h[a[j]] = i[j] = i[j] || i[(j - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    ma = (G._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var f, g, h, i, b = this.data, c = b.proxy, d = b.firstMPT, e = 1e-6; d;) f = c[d.v], d.r ? f = f > 0 ? f + .5 | 0 : f - .5 | 0 : f < e && f > -e && (f = 0), d.t[d.p] = f, d = d._next;
                        if (b.autoRotate && (b.autoRotate.rotation = c.rotation), 1 === a)
                            for (d = b.firstMPT; d;) {
                                if (g = d.t, g.type) {
                                    if (1 === g.type) {
                                        for (i = g.xs0 + g.s + g.xs1, h = 1; h < g.l; h++) i += g["xn" + h] + g["xs" + (h + 1)];
                                        g.e = i
                                    }
                                } else g.e = g.s + g.xs0;
                                d = d._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    oa = (G._parseToProxy = function(a, b, c, d, e, f) {
                        var l, m, n, o, p, g = d,
                            h = {},
                            i = {},
                            j = c._transform,
                            k = C;
                        for (c._transform = null, C = b, d = p = c.parse(a, b, d, e), C = k, f && (c._transform = j, g && (g._prev = null, g._prev && (g._prev._next = null))); d && d !== g;) {
                            if (d.type <= 1 && (m = d.p, i[m] = d.s + d.c, h[m] = d.s, f || (o = new ma(d, "s", m, o, d.r), d.c = 0), 1 === d.type))
                                for (l = d.l; --l > 0;) n = "xn" + l, m = d.p + "_" + n, i[m] = d.data[n], h[m] = d[n], f || (
                                    o = new ma(d, n, m, o, d.rxp[n]));
                            d = d._next
                        }
                        return {
                            proxy: h,
                            end: i,
                            firstMPT: o,
                            pt: p
                        }
                    }, G.CSSPropTween = function(a, b, c, e, f, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = c, this.c = e, this.n = i || "css_" + b, a instanceof oa || g.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, d = !0), this.b = void 0 === l ? c : l, this.e = void 0 === m ? c + e : m, f && (this._next = f, f._prev = this)
                    }),
                    pa = c.parseComplex = function(a, b, c, d, e, f, g, h, i, l) {
                        c = c || f || "", g = new oa(a, b, 0, 0, g, l ? 2 : 1, null, !1, h, c, d), d += "";
                        var q, s, t, u, v, w, x, y, A, B, C, D, m = c.split(", ").join(",").split(" "),
                            n = d.split(", ").join(",").split(" "),
                            o = m.length,
                            p = I !== !1;
                        for (d.indexOf(",") === -1 && c.indexOf(",") === -1 || (m = m.join(" ").replace(z, ", ").split(" "), n = n.join(" ").replace(z, ", ").split(" "), o = m.length), o !== n.length && (m = (f || "").split(" "), o = m.length), g.plugin = i, g.setRatio = l, q = 0; q < o; q++)
                            if (u = m[q], v = n[q], y = parseFloat(u), y || 0 === y) g.appendXtra("", y, ca(v, y), v.replace(k, ""), p && v.indexOf("px") !== -1, !0);
                            else if (e && ("#" === u.charAt(0) || fa[u] || r.test(u))) D = "," === v.charAt(v.length - 1) ? ")," : ")", u = ha(u), v = ha(v), A = u.length + v.length > 6, A && !O && 0 === v[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(n[q]).join("transparent")) : (O || (A = !1), g.appendXtra(A ? "rgba(" : "rgb(", u[0], v[0] - u[0], ",", !0, !0).appendXtra("", u[1], v[1] - u[1], ",", !0).appendXtra("", u[2], v[2] - u[2], A ? "," : D, !0), A && (u = u.length < 4 ? 1 : u[3], g.appendXtra("", u, (v.length < 4 ? 1 : v[3]) - u, D, !1)));
                        else if (w = u.match(j)) {
                            if (x = v.match(k), !x || x.length !== w.length) return g;
                            for (t = 0, s = 0; s < w.length; s++) C = w[s], B = u.indexOf(C, t), g.appendXtra(u.substr(t, B - t), Number(C), ca(x[s], C), "", p && "px" === u.substr(B + C.length, 2), 0 === s), t = B + C.length;
                            g["xs" + g.l] += u.substr(t)
                        } else g["xs" + g.l] += g.l ? " " + u : u;
                        if (d.indexOf("=") !== -1 && g.data) {
                            for (D = g.xs0 + g.data.s, q = 1; q < g.l; q++) D += g["xs" + q] + g.data["xn" + q];
                            g.e = D + g["xs" + q]
                        }
                        return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                    },
                    qa = 9;
                for (i = oa.prototype, i.l = i.pr = 0; --qa > 0;) i["xn" + qa] = 0, i["xs" + qa] = "";
                i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new oa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var ra = function(a, b) {
                        b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || ja(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    sa = G._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var f, g, d = a.split(","),
                            e = b.defaultValue;
                        for (c = c || [e], f = 0; f < d.length; f++) b.prefix = 0 === f && b.prefix, b.defaultValue = c[f] || e, g = new ra(d[f], b)
                    },
                    ta = function(a) {
                        if (!h[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            sa(a, {
                                parser: function(a, c, d, e, f, g, i) {
                                    var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                                    return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = ra.prototype, i.parseComplex = function(a, b, c, d, e, f) {
                    var h, i, j, k, l, m, g = this.keyword;
                    if (this.multi && (z.test(c) || z.test(b) ? (i = b.replace(z, "|").split("|"), j = c.replace(z, "|").split("|")) : g && (i = [b], j = [c])), j) {
                        for (k = j.length > i.length ? j.length : i.length, h = 0; h < k; h++) b = i[h] = i[h] || this.dflt, c = j[h] = j[h] || this.dflt, g && (l = b.indexOf(g), m = c.indexOf(g), l !== m && (c = m === -1 ? j : i, c[h] += " " + g));
                        b = i.join(", "), c = j.join(", ")
                    }
                    return pa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, i.parse = function(a, b, c, d, e, g, h) {
                    return this.parseComplex(a.style, this.format(V(a, this.p, f, !1, this.dflt)), this.format(b), e, g)
                }, c.registerSpecialProp = function(a, b, c) {
                    sa(a, {
                        parser: function(a, d, e, f, g, h, i) {
                            var j = new oa(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                };
                var ua = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    va = T("transform"),
                    wa = R + "transform",
                    xa = T("transformOrigin"),
                    ya = null !== T("perspective"),
                    za = function(a, b, d) {
                        var l, m, n, o, p, q, r, s, t, u, v, w, y, e = d ? a._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            f = e.scaleX < 0,
                            g = 2e-5,
                            h = 1e5,
                            i = -Math.PI + 1e-4,
                            j = Math.PI - 1e-4,
                            k = ya ? parseFloat(V(a, xa, b, !1, "0 0 0").split(" ")[2]) || e.zOrigin || 0 : 0;
                        if (va) l = V(a, wa, b, !0);
                        else if (a.currentStyle)
                            if (l = a.currentStyle.filter.match(x), l && 4 === l.length) l = [l[0].substr(4), Number(l[2].substr(4)), Number(l[1].substr(4)), l[3].substr(4), e.x || 0, e.y || 0].join(",");
                            else {
                                if (null != e.x) return e;
                                l = ""
                            } for (m = (l || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], n = m.length; --n > -1;) o = Number(m[n]), m[n] = (p = o - (o |= 0)) ? (p * h + (p < 0 ? -.5 : .5) | 0) / h + o : o;
                        if (16 === m.length) {
                            var z = m[8],
                                A = m[9],
                                B = m[10],
                                C = m[12],
                                D = m[13],
                                E = m[14];
                            if (e.zOrigin && (E = -e.zOrigin, C = z * E - m[12], D = A * E - m[13], E = B * E + e.zOrigin - m[14]), !d || null == e.rotationX) {
                                var Q, R, S, T, U, W, X, F = m[0],
                                    G = m[1],
                                    H = m[2],
                                    I = m[3],
                                    J = m[4],
                                    K = m[5],
                                    L = m[6],
                                    M = m[7],
                                    N = m[11],
                                    O = e.rotationX = Math.atan2(L, B),
                                    P = O < i || O > j;
                                O && (T = Math.cos(-O), U = Math.sin(-O), Q = J * T + z * U, R = K * T + A * U, S = L * T + B * U, z = J * -U + z * T, A = K * -U + A * T, B = L * -U + B * T, N = M * -U + N * T, J = Q, K = R, L = S), O = e.rotationY = Math.atan2(z, F), O && (W = O < i || O > j, T = Math.cos(-O), U = Math.sin(-O), Q = F * T - z * U, R = G * T - A * U, S = H * T - B * U, A = G * U + A * T, B = H * U + B * T, N = I * U + N * T, F = Q, G = R, H = S), O = e.rotation = Math.atan2(G, K), O && (X = O < i || O > j, T = Math.cos(-O), U = Math.sin(-O), F = F * T + J * U, R = G * T + K * U, K = G * -U + K * T, L = H * -U + L * T, G = R), X && P ? e.rotation = e.rotationX = 0 : X && W ? e.rotation = e.rotationY = 0 : W && P && (e.rotationY = e.rotationX = 0), e.scaleX = (Math.sqrt(F * F + G * G) * h + .5 | 0) / h, e.scaleY = (Math.sqrt(K * K + A * A) * h + .5 | 0) / h, e.scaleZ = (Math.sqrt(L * L + B * B) * h + .5 | 0) / h, e.skewX = 0, e.perspective = N ? 1 / (N < 0 ? -N : N) : 0, e.x = C, e.y = D, e.z = E
                            }
                        } else if (!(ya && 0 !== m.length && e.x === m[4] && e.y === m[5] && (e.rotationX || e.rotationY) || void 0 !== e.x && "none" === V(a, "display", b))) {
                            var Y = m.length >= 6,
                                Z = Y ? m[0] : 1,
                                $ = m[1] || 0,
                                _ = m[2] || 0,
                                aa = Y ? m[3] : 1;
                            e.x = m[4] || 0, e.y = m[5] || 0, q = Math.sqrt(Z * Z + $ * $), r = Math.sqrt(aa * aa + _ * _), s = Z || $ ? Math.atan2($, Z) : e.rotation || 0, t = _ || aa ? Math.atan2(_, aa) + s : e.skewX || 0, u = q - Math.abs(e.scaleX || 0), v = r - Math.abs(e.scaleY || 0), Math.abs(t) > Math.PI / 2 && Math.abs(t) < 1.5 * Math.PI && (f ? (q *= -1, t += s <= 0 ? Math.PI : -Math.PI, s += s <= 0 ? Math.PI : -Math.PI) : (r *= -1, t += t <= 0 ? Math.PI : -Math.PI)), w = (s - e.rotation) % Math.PI, y = (t - e.skewX) % Math.PI, (void 0 === e.skewX || u > g || u < -g || v > g || v < -g || w > i && w < j && w * h | !1 || y > i && y < j && y * h | !1) && (e.scaleX = q, e.scaleY = r, e.rotation = s, e.skewX = t), ya && (e.rotationX = e.rotationY = e.z = 0, e.perspective = parseFloat(c.defaultTransformPerspective) || 0, e.scaleZ = 1)
                        }
                        e.zOrigin = k;
                        for (n in e) e[n] < g && e[n] > -g && (e[n] = 0);
                        return d && (a._gsTransform = e), e
                    },
                    Aa = function(a) {
                        var l, m, b = this.data,
                            c = -b.rotation,
                            d = c + b.skewX,
                            e = 1e5,
                            f = (Math.cos(c) * b.scaleX * e | 0) / e,
                            g = (Math.sin(c) * b.scaleX * e | 0) / e,
                            h = (Math.sin(d) * -b.scaleY * e | 0) / e,
                            i = (Math.cos(d) * b.scaleY * e | 0) / e,
                            j = this.t.style,
                            k = this.t.currentStyle;
                        if (k) {
                            m = g, g = -h, h = -m, l = k.filter, j.filter = "";
                            var v, w, p = this.t.offsetWidth,
                                q = this.t.offsetHeight,
                                r = "absolute" !== k.position,
                                s = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + g + ", M21=" + h + ", M22=" + i,
                                t = b.x,
                                u = b.y;
                            if (null != b.ox && (v = (b.oxp ? p * b.ox * .01 : b.ox) - p / 2, w = (b.oyp ? q * b.oy * .01 : b.oy) - q / 2, t += v - (v * f + w * g), u += w - (v * h + w * i)), r) v = p / 2, w = q / 2, s += ", Dx=" + (v - (v * f + w * g) + t) + ", Dy=" + (w - (v * h + w * i) + u) + ")";
                            else {
                                var z, A, B, x = N < 8 ? 1 : -1;
                                for (v = b.ieOffsetX || 0, w = b.ieOffsetY || 0, b.ieOffsetX = Math.round((p - ((f < 0 ? -f : f) * p + (g < 0 ? -g : g) * q)) / 2 + t), b.ieOffsetY = Math.round((q - ((i < 0 ? -i : i) * q + (h < 0 ? -h : h) * p)) / 2 + u), qa = 0; qa < 4; qa++) A = _[qa], z = k[A], m = z.indexOf("px") !== -1 ? parseFloat(z) : W(this.t, A, parseFloat(z), z.replace(n, "")) || 0, B = m !== b[A] ? qa < 2 ? -b.ieOffsetX : -b.ieOffsetY : qa < 2 ? v - b.ieOffsetX : w - b.ieOffsetY, j[A] = (b[A] = Math.round(m - B * (0 === qa || 2 === qa ? 1 : x))) + "px";
                                s += ", sizingMethod='auto expand')"
                            }
                            l.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? j.filter = l.replace(y, s) : j.filter = s + " " + l, 0 !== a && 1 !== a || 1 === f && 0 === g && 0 === h && 1 === i && (r && s.indexOf("Dx=0, Dy=0") === -1 || o.test(l) && 100 !== parseFloat(RegExp.$1) || l.indexOf("gradient(") === -1 && j.removeAttribute("filter"))
                        }
                    },
                    Ba = function(a) {
                        var w, x, y, z, A, B, C, D, E, b = this.data,
                            c = this.t.style,
                            d = b.perspective,
                            e = b.scaleX,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = b.scaleY,
                            k = 0,
                            l = 0,
                            m = 0,
                            n = 0,
                            o = b.scaleZ,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = d ? -1 / d : 0,
                            t = b.rotation,
                            u = b.zOrigin,
                            v = 1e5;
                        L && (C = c.top ? "top" : c.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", y = V(this.t, C, null, !1), D = parseFloat(y) || 0, E = y.substr((D + "").length) || "px", b._ffFix = !b._ffFix, c[C] = (b._ffFix ? D + .05 : D - .05) + E), (t || b.skewX) && (y = e * Math.cos(t), z = j * Math.sin(t), t -= b.skewX, f = e * -Math.sin(t), j *= Math.cos(t), e = y, i = z), t = b.rotationY, t && (w = Math.cos(t), x = Math.sin(t), y = e * w, z = i * w, A = o * -x, B = s * -x, g = e * x, k = i * x, o *= w, s *= w, e = y, i = z, m = A, q = B), t = b.rotationX, t && (w = Math.cos(t), x = Math.sin(t), y = f * w + g * x, z = j * w + k * x, A = n * w + o * x, B = r * w + s * x, g = f * -x + g * w, k = j * -x + k * w, o = n * -x + o * w, s = r * -x + s * w, f = y, j = z, n = A, r = B), u && (p -= u, h = g * p, l = k * p, p = o * p + u), h = (y = (h += b.x) - (h |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + h : h, l = (y = (l += b.y) - (l |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + l : l, p = (y = (p += b.z) - (p |= 0)) ? (y * v + (y < 0 ? -.5 : .5) | 0) / v + p : p, c[va] = "matrix3d(" + [(e * v | 0) / v, (i * v | 0) / v, (m * v | 0) / v, (q * v | 0) / v, (f * v | 0) / v, (j * v | 0) / v, (n * v | 0) / v, (r * v | 0) / v, (g * v | 0) / v, (k * v | 0) / v, (o * v | 0) / v, (s * v | 0) / v, h, l, p, d ? 1 + -p / d : 1].join(",") + ")"
                    },
                    Ca = function(a) {
                        var e, f, g, h, i, j, k, l, m, b = this.data,
                            c = this.t,
                            d = c.style;
                        L && (e = d.top ? "top" : d.bottom ? "bottom" : parseFloat(V(c, "top", null, !1)) ? "bottom" : "top", f = V(c, e, null, !1), g = parseFloat(f) || 0, h = f.substr((g + "").length) || "px", b._ffFix = !b._ffFix, d[e] = (b._ffFix ? g + .05 : g - .05) + h), b.rotation || b.skewX ? (i = b.rotation, j = i - b.skewX, k = 1e5, l = b.scaleX * k, m = b.scaleY * k, d[va] = "matrix(" + (Math.cos(i) * l | 0) / k + "," + (Math.sin(i) * l | 0) / k + "," + (Math.sin(j) * -m | 0) / k + "," + (Math.cos(j) * m | 0) / k + "," + b.x + "," + b.y + ")") : d[va] = "matrix(" + b.scaleX + ",0,0," + b.scaleY + "," + b.x + "," + b.y + ")"
                    };
                sa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
                    parser: function(a, b, c, d, e, g, h) {
                        if (d._transform) return e;
                        var o, p, q, r, s, t, u, i = d._transform = za(a, f, !0),
                            j = a.style,
                            k = 1e-6,
                            l = ua.length,
                            m = h,
                            n = {};
                        if ("string" == typeof m.transform && va) q = j.cssText, j[va] = m.transform, j.display = "block", o = za(a, null, !1), j.cssText = q;
                        else if ("object" == typeof m) {
                            if (o = {
                                    scaleX: da(null != m.scaleX ? m.scaleX : m.scale, i.scaleX),
                                    scaleY: da(null != m.scaleY ? m.scaleY : m.scale, i.scaleY),
                                    scaleZ: da(null != m.scaleZ ? m.scaleZ : m.scale, i.scaleZ),
                                    x: da(m.x, i.x),
                                    y: da(m.y, i.y),
                                    z: da(m.z, i.z),
                                    perspective: da(m.transformPerspective, i.perspective)
                                }, u = m.directionalRotation, null != u)
                                if ("object" == typeof u)
                                    for (q in u) m[q] = u[q];
                                else m.rotation = u;
                            o.rotation = ea("rotation" in m ? m.rotation : "shortRotation" in m ? m.shortRotation + "_short" : "rotationZ" in m ? m.rotationZ : i.rotation * B, i.rotation, "rotation", n), ya && (o.rotationX = ea("rotationX" in m ? m.rotationX : "shortRotationX" in m ? m.shortRotationX + "_short" : i.rotationX * B || 0, i.rotationX, "rotationX", n), o.rotationY = ea("rotationY" in m ? m.rotationY : "shortRotationY" in m ? m.shortRotationY + "_short" : i.rotationY * B || 0, i.rotationY, "rotationY", n)), o.skewX = null == m.skewX ? i.skewX : ea(m.skewX, i.skewX), o.skewY = null == m.skewY ? i.skewY : ea(m.skewY, i.skewY), (p = o.skewY - i.skewY) && (o.skewX += p, o.rotation += p)
                        }
                        for (s = i.z || i.rotationX || i.rotationY || o.z || o.rotationX || o.rotationY || o.perspective, s || null == m.scale || (o.scaleZ = 1); --l > -1;) c = ua[l], r = o[c] - i[c], (r > k || r < -k || null != C[c]) && (t = !0, e = new oa(i, c, i[c], r, e), c in n && (e.e = n[c]), e.xs0 = 0, e.plugin = g, d._overwriteProps.push(e.n));
                        return r = m.transformOrigin, (r || ya && s && i.zOrigin) && (va ? (t = !0, r = (r || V(a, c, f, !1, "50% 50%")) + "", c = xa, e = new oa(j, c, 0, 0, e, -1, "css_transformOrigin"), e.b = j[c], e.plugin = g, ya ? (q = i.zOrigin, r = r.split(" "), i.zOrigin = (r.length > 2 ? parseFloat(r[2]) : q) || 0, e.xs0 = e.e = j[c] = r[0] + " " + (r[1] || "50%") + " 0px", e = new oa(i, "zOrigin", 0, 0, e, -1, e.n), e.b = q, e.xs0 = e.e = i.zOrigin) : e.xs0 = e.e = j[c] = r) : ba(r + "", i)), t && (d._transformType = s || 3 === this._transformType ? 3 : 2), e
                    },
                    prefix: !0
                }), sa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), sa("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, d, g, h) {
                        b = this.format(b);
                        var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, i = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            j = a.style;
                        for (s = parseFloat(a.offsetWidth), t = parseFloat(a.offsetHeight), k = b.split(" "), l = 0; l < i.length; l++) this.p.indexOf("border") && (i[l] = T(i[l])), o = n = V(a, i[l], f, !1, "0px"), o.indexOf(" ") !== -1 && (n = o.split(" "), o = n[0], n = n[1]), p = m = k[l], q = parseFloat(o), v = o.substr((q + "").length), w = "=" === p.charAt(1), w ? (r = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), r *= parseFloat(p), u = p.substr((r + "").length - (r < 0 ? 1 : 0)) || "") : (r = parseFloat(p), u = p.substr((r + "").length)), "" === u && (u = e[c] || v), u !== v && (x = W(a, "borderLeft", q, v), y = W(a, "borderTop", q, v), "%" === u ? (o = x / s * 100 + "%", n = y / t * 100 + "%") : "em" === u ? (z = W(a, "borderLeft", 1, "em"), o = x / z + "em", n = y / z + "em") : (o = x + "px", n = y + "px"), w && (p = parseFloat(o) + r + u, m = parseFloat(n) + r + u)), g = pa(j, i[l], o + " " + n, p + " " + m, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: ja("0px 0px 0px 0px", !1, !0)
                }), sa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, e, g) {
                        var l, m, n, o, p, q, h = "background-position",
                            i = f || U(a, null),
                            j = this.format((i ? N ? i.getPropertyValue(h + "-x") + " " + i.getPropertyValue(h + "-y") : i.getPropertyValue(h) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            k = this.format(b);
                        if (j.indexOf("%") !== -1 != (k.indexOf("%") !== -1) && (q = V(a, "backgroundImage").replace(u, ""), q && "none" !== q)) {
                            for (l = j.split(" "), m = k.split(" "), F.setAttribute("src", q), n = 2; --n > -1;) j = l[n], o = j.indexOf("%") !== -1, o !== (m[n].indexOf("%") !== -1) && (p = 0 === n ? a.offsetWidth - F.width : a.offsetHeight - F.height, l[n] = o ? parseFloat(j) / 100 * p + "px" : parseFloat(j) / p * 100 + "%");
                            j = l.join(" ")
                        }
                        return this.parseComplex(a.style, j, k, e, g)
                    },
                    formatter: ba
                }), sa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ba
                }), sa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), sa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), sa("transformStyle", {
                    prefix: !0
                }), sa("backfaceVisibility", {
                    prefix: !0
                }), sa("margin", {
                    parser: ka("marginTop,marginRight,marginBottom,marginLeft")
                }), sa("padding", {
                    parser: ka("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), sa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, e, g) {
                        var h, i, j;
                        return N < 9 ? (i = a.currentStyle, j = N < 8 ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, f, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, e, g)
                    }
                }), sa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), sa("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), sa("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, e, g) {
                        return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", f, !1, "0px") + " " + V(a, "borderTopStyle", f, !1, "solid") + " " + V(a, "borderTopColor", f, !1, "#000")), this.format(b), e, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
                    }
                }), sa("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new oa(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Da = function(a) {
                    var e, b = this.t,
                        c = b.filter,
                        d = this.s + this.c * a | 0;
                    100 === d && (c.indexOf("atrix(") === -1 && c.indexOf("radient(") === -1 ? (b.removeAttribute("filter"), e = !V(this.data, "filter")) : (b.filter = c.replace(q, ""), e = !0)), e || (this.xn1 && (b.filter = c = c || "alpha(opacity=100)"), c.indexOf("opacity") === -1 ? b.filter += " alpha(opacity=" + d + ")" : b.filter = c.replace(o, "opacity=" + d))
                };
                sa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, e, g) {
                        var j, h = parseFloat(V(a, "opacity", f, !1, "1")),
                            i = a.style;
                        return b = parseFloat(b), "autoAlpha" === c && (j = V(a, "visibility", f), 1 === h && "hidden" === j && 0 !== b && (h = 0), e = new oa(i, "visibility", 0, 0, e, -1, null, !1, 0, 0 !== h ? "visible" : "hidden", 0 === b ? "hidden" : "visible"), e.xs0 = "visible", d._overwriteProps.push(e.n)), O ? e = new oa(i, "opacity", h, b - h, e) : (e = new oa(i, "opacity", 100 * h, 100 * (b - h), e), e.xn1 = "autoAlpha" === c ? 1 : 0, i.zoom = 1, e.type = 2, e.b = "alpha(opacity=" + e.s + ")", e.e = "alpha(opacity=" + (e.s + e.c) + ")", e.data = a, e.plugin = g, e.setRatio = Da), e
                    }
                });
                var Ea = function(a, b) {
                        b && (a.removeProperty ? a.removeProperty(b.replace(s, "-$1").toLowerCase()) : a.removeAttribute(b))
                    },
                    Fa = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.className = 0 === a ? this.b : this.e;
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ea(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                sa("className", {
                    parser: function(a, b, c, e, g, h, i) {
                        var l, m, n, o, p, j = a.className,
                            k = a.style.cssText;
                        if (g = e._classNamePT = new oa(a, c, 0, 0, g, 2), g.setRatio = Fa, g.pr = -11, d = !0, g.b = j, m = Y(a, f), n = a._gsClassPT) {
                            for (o = {}, p = n.data; p;) o[p.p] = 1, p = p._next;
                            n.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : j.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), e._tween._duration && (a.className = g.e, l = Z(a, m, Y(a), i, o), a.className = j, g.data = l.firstMPT, a.style.cssText = k, g = g.xfirst = e.parse(a, l.difs, g, h)), g
                    }
                });
                var Ga = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration)
                        for (var g, b = "all" === this.e, c = this.t.style, d = b ? c.cssText.split(";") : this.e.split(","), e = d.length, f = h.transform.parse; --e > -1;) g = d[e], b && (g = g.substr(0, g.indexOf(":")).split(" ").join("")), h[g] && (g = h[g].parse === f ? va : h[g].p), Ea(c, g)
                };
                for (sa("clearProps", {
                        parser: function(a, b, c, e, f) {
                            return f = new oa(a, c, 0, 0, f, 2), f.setRatio = Ga, f.e = b, f.pr = -10, f.data = e._tween, d = !0, f
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), qa = i.length; qa--;) ta(i[qa]);
                i = c.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
                    if (!a.nodeType) return !1;
                    this._target = a, this._tween = h, this._vars = b, I = b.autoRound, d = !1, e = b.suffixMap || c.suffixMap, f = U(a, ""), g = this._overwriteProps;
                    var j, k, l, m, n, o, q, r, s, i = a.style;
                    if (J && "" === i.zIndex && (j = V(a, "zIndex", f), "auto" !== j && "" !== j || (i.zIndex = 0)), "string" == typeof b && (m = i.cssText, j = Y(a, f), i.cssText = m + ";" + b, j = Z(a, j, Y(a)).difs, !O && p.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, i.cssText = m), this._firstPT = k = this.parse(a, b, null), this._transformType) {
                        for (s = 3 === this._transformType, va ? K && (J = !0, "" === i.zIndex && (q = V(a, "zIndex", f), "auto" !== q && "" !== q || (i.zIndex = 0)), M && (i.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (s ? "visible" : "hidden"))) : i.zoom = 1, l = k; l && l._next;) l = l._next;
                        r = new oa(a, "transform", 0, 0, null, 2), this._linkCSSP(r, null, l), r.setRatio = s && ya ? Ba : va ? Ca : Aa, r.data = this._transform || za(a, f, !0), g.pop()
                    }
                    if (d) {
                        for (; k;) {
                            for (o = k._next, l = m; l && l.pr > k.pr;) l = l._next;
                            (k._prev = l ? l._prev : n) ? k._prev._next = k: m = k, (k._next = l) ? l._prev = k : n = k, k = o
                        }
                        this._firstPT = m
                    }
                    return !0
                }, i.parse = function(a, b, c, d) {
                    var i, j, k, l, m, o, p, q, s, t, g = a.style;
                    for (i in b) o = b[i], j = h[i], j ? c = j.parse(a, o, i, this, c, d, b) : (m = V(a, i, f) + "", s = "string" == typeof o, "color" === i || "fill" === i || "stroke" === i || i.indexOf("Color") !== -1 || s && r.test(o) ? (s || (o = ha(o), o = (o.length > 3 ? "rgba(" : "rgb(") + o.join(",") + ")"), c = pa(g, i, m, o, !0, "transparent", c, 0, d)) : !s || o.indexOf(" ") === -1 && o.indexOf(",") === -1 ? (k = parseFloat(m), p = k || 0 === k ? m.substr((k + "").length) : "", "" !== m && "auto" !== m || ("width" === i || "height" === i ? (k = aa(a, i, f), p = "px") : "left" === i || "top" === i ? (k = X(a, i, f), p = "px") : (k = "opacity" !== i ? 0 : 1, p = "")), t = s && "=" === o.charAt(1), t ? (l = parseInt(o.charAt(0) + "1", 10), o = o.substr(2), l *= parseFloat(o), q = o.replace(n, "")) : (l = parseFloat(o), q = s ? o.substr((l + "").length) || "" : ""), "" === q && (q = e[i] || p), o = l || 0 === l ? (t ? l + k : l) + q : b[i], p !== q && "" !== q && (l || 0 === l) && (k || 0 === k) && (k = W(a, i, k, p), "%" === q ? (k /= W(a, i, 100, "%") / 100, k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === q ? k /= W(a, i, 1, "em") : (l = W(a, i, l, q), q = "px"), t && (l || 0 === l) && (o = l + k + q)), t && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== g[i] && (o || o + "" != "NaN" && null != o) ? (c = new oa(g, i, l || k || 0, 0, c, -1, "css_" + i, !1, 0, m, o), c.xs0 = "none" !== o || "display" !== i && i.indexOf("Style") === -1 ? o : m) : Q("invalid " + i + " tween value: " + b[i]) : (c = new oa(g, i, k, l - k, c, 0, "css_" + i, I !== !1 && ("px" === q || "zIndex" === i), 0, m, o), c.xs0 = q)) : c = pa(g, i, m, o, !0, null, c, 0, d)), d && c && !c.plugin && (c.plugin = d);
                    return c
                }, i.setRatio = function(a) {
                    var d, e, f, b = this._firstPT,
                        c = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; b;) {
                                if (d = b.c * a + b.s, b.r ? d = d > 0 ? d + .5 | 0 : d - .5 | 0 : d < c && d > -c && (d = 0), b.type)
                                    if (1 === b.type)
                                        if (f = b.l, 2 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2;
                                        else if (3 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3;
                                else if (4 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4;
                                else if (5 === f) b.t[b.p] = b.xs0 + d + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4 + b.xn4 + b.xs5;
                                else {
                                    for (e = b.xs0 + d + b.xs1, f = 1; f < b.l; f++) e += b["xn" + f] + b["xs" + (f + 1)];
                                    b.t[b.p] = e
                                } else b.type === -1 ? b.t[b.p] = b.xs0 : b.setRatio && b.setRatio(a);
                                else b.t[b.p] = d + b.xs0;
                                b = b._next
                            } else
                                for (; b;) 2 !== b.type ? b.t[b.p] = b.b : b.setRatio(a), b = b._next;
                        else
                            for (; b;) 2 !== b.type ? b.t[b.p] = b.e : b.setRatio(a), b = b._next
                }, i._enableTransforms = function(a) {
                    this._transformType = a || 3 === this._transformType ? 3 : 2
                }, i._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next), a._next = b, a._prev = c), a
                }, i._kill = function(b) {
                    var d, e, f, c = b;
                    if (b.css_autoAlpha || b.css_alpha) {
                        c = {};
                        for (e in b) c[e] = b[e];
                        c.css_opacity = 1, c.css_autoAlpha && (c.css_visibility = 1)
                    }
                    return b.css_className && (d = this._classNamePT) && (f = d.xfirst, f && f._prev ? this._linkCSSP(f._prev, d._next, f._prev._prev) : f === this._firstPT && (this._firstPT = d._next), d._next && this._linkCSSP(d._next, d._next._next, f._prev), this._classNamePT = null), a.prototype._kill.call(this, c)
                };
                var Ha = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Ha(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ha(f, b, c)
                };
                return c.cascadeTo = function(a, c, d) {
                    var k, l, m, e = b.to(a, c, d),
                        f = [e],
                        g = [],
                        h = [],
                        i = [],
                        j = b._internals.reservedProps;
                    for (a = e._targets || e.target, Ha(a, g, i), e.render(c, !0), Ha(a, h), e.render(0, !0), e._enabled(!0), k = i.length; --k > -1;)
                        if (l = Z(i[k], g[k], h[k]), l.firstMPT) {
                            l = l.difs;
                            for (m in d) j[m] && (l[m] = d[m]);
                            f.push(b.to(i[k], c, l))
                        } return f
                }, a.activate([c]), c
            }, !0),
            function() {
                var a = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = a.prototype;
                b._onInitAllProps = function() {
                    for (var f, g, h, a = this._tween, b = a.vars.roundProps instanceof Array ? a.vars.roundProps : a.vars.roundProps.split(","), c = b.length, d = {}, e = a._propLookup.roundProps; --c > -1;) d[b[c]] = 1;
                    for (c = b.length; --c > -1;)
                        for (f = b[c], g = a._firstPT; g;) h = g._next, g.pg ? g.t._roundProps(d, !0) : g.n === f && (this._add(g.t, f, g.s, g.c), h && (h._prev = g._prev), g._prev ? g._prev._next = h : a._firstPT === g && (a._firstPT = h), g._next = g._prev = null, a._propLookup[f] = e), g = h;
                    return !1
                }, b._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                }
            }(),
            window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(a, b, c) {
                    var d;
                    if ("function" != typeof a.setAttribute) return !1;
                    this._target = a, this._proxy = {};
                    for (d in b) this._addTween(this._proxy, d, parseFloat(a.getAttribute(d)), b[d], d), this._overwriteProps.push(d);
                    return !0
                },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    for (var d, b = this._overwriteProps, c = b.length; --c > -1;) d = b[c], this._target.setAttribute(d, this._proxy[d] + "")
                }
            }),
            window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(a, b, c) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var f, g, h, i, j, k, d = b.useRadians === !0 ? 2 * Math.PI : 360,
                        e = 1e-6;
                    for (f in b) "useRadians" !== f && (k = (b[f] + "").split("_"), g = k[0], h = parseFloat("function" != typeof a[f] ? a[f] : a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]()), i = this.finals[f] = "string" == typeof g && "=" === g.charAt(1) ? h + parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2)) : Number(g) || 0, j = i - h, k.length && (g = k.join("_"), g.indexOf("short") !== -1 && (j %= d, j !== j % (d / 2) && (j = j < 0 ? j + d : j - d)), g.indexOf("_cw") !== -1 && j < 0 ? j = (j + 9999999999 * d) % d - (j / d | 0) * d : g.indexOf("ccw") !== -1 && j > 0 && (j = (j - 9999999999 * d) % d - (j / d | 0) * d)), (j > e || j < -e) && (this._addTween(a, f, h, h + j, f), this._overwriteProps.push(f)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0,
            window._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var o, p, q, b = window.GreenSockGlobals || window,
                    c = b.com.greensock,
                    d = 2 * Math.PI,
                    e = Math.PI / 2,
                    f = c._class,
                    g = function(b, c) {
                        var d = f("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    h = a.register || function() {},
                    i = function(a, b, c, d, e) {
                        var g = f("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return h(g, a), g
                    },
                    j = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    k = function(b, c) {
                        var d = f("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    l = i("Back", k("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), k("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), k("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    m = f("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    n = m.prototype = new a;
                return n.constructor = m, n.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, m.ease = new m(.7, .7), n.config = m.config = function(a, b, c) {
                    return new m(a, b, c)
                }, o = f("easing.SteppedEase", function(a) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                }, !0), n = o.prototype = new a, n.constructor = o, n.getRatio = function(a) {
                    return a < 0 ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                }, n.config = o.config = function(a) {
                    return new o(a)
                }, p = f("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var m, n, o, p, q, r, c = b.taper || "none", d = [], e = 0, f = 0 | (b.points || 20), g = f, h = b.randomize !== !1, i = b.clamp === !0, k = b.template instanceof a ? b.template : null, l = "number" == typeof b.strength ? .4 * b.strength : .4; --g > -1;) m = h ? Math.random() : 1 / f * g, n = k ? k.getRatio(m) : m, "none" === c ? o = l : "out" === c ? (p = 1 - m, o = p * p * l) : "in" === c ? o = m * m * l : m < .5 ? (p = 2 * m, o = p * p * .5 * l) : (p = 2 * (1 - m), o = p * p * .5 * l), h ? n += Math.random() * o - .5 * o : g % 2 ? n += .5 * o : n -= .5 * o, i && (n > 1 ? n = 1 : n < 0 && (n = 0)), d[e++] = {
                        x: m,
                        y: n
                    };
                    for (d.sort(function(a, b) {
                            return a.x - b.x
                        }), r = new j(1, 1, null), g = f; --g > -1;) q = d[g], r = new j(q.x, q.y, r);
                    this._prev = new j(0, 0, 0 !== r.t ? r : r.next)
                }, !0), n = p.prototype = new a, n.constructor = p, n.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, n.config = function(a) {
                    return new p(a)
                }, p.ease = new p, i("Bounce", g("BounceOut", function(a) {
                    return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), g("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), g("BounceInOut", function(a) {
                    var b = a < .5;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), i("Circ", g("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), g("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), g("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), q = function(b, c, e) {
                    var g = f("easing." + b, function(a, b) {
                            this._p1 = a || 1, this._p2 = b || e, this._p3 = this._p2 / d * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        h = g.prototype = new a;
                    return h.constructor = g, h.getRatio = c, h.config = function(a, b) {
                        return new g(a, b)
                    }, g
                }, i("Elastic", q("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * d / this._p2) + 1
                }, .3), q("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2))
                }, .3), q("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * d / this._p2) * .5 + 1
                }, .45)), i("Expo", g("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), g("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), g("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), i("Sine", g("SineOut", function(a) {
                    return Math.sin(a * e)
                }), g("SineIn", function(a) {
                    return -Math.cos(a * e) + 1
                }), g("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), f("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), h(b.SlowMo, "SlowMo", "ease,"), h(p, "RoughEase", "ease,"), h(o, "SteppedEase", "ease,"), l
            }, !0)
    }), function(a) {
        "use strict";
        var g, h, i, j, k, b = a.GreenSockGlobals || a,
            c = function(a) {
                var e, c = a.split("."),
                    d = b;
                for (e = 0; e < c.length; e++) d[c[e]] = d = d[c[e]] || {};
                return d
            },
            d = c("com.greensock"),
            e = [].slice,
            f = function() {},
            l = {},
            m = function(d, e, f, g) {
                this.sc = l[d] ? l[d].sc : [], l[d] = this, this.gsClass = null, this.func = f;
                var h = [];
                this.check = function(i) {
                    for (var n, o, p, q, j = e.length, k = j; --j > -1;)(n = l[e[j]] || new m(e[j], [])).gsClass ? (h[j] = n.gsClass, k--) : i && n.sc.push(this);
                    if (0 === k && f)
                        for (o = ("com.greensock." + d).split("."), p = o.pop(), q = c(o.join("."))[p] = this.gsClass = f.apply(f, h), g && (b[p] = q, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").join("/"), [], function() {
                                return q
                            }) : "undefined" != typeof module && module.exports && (module.exports = q)), j = 0; j < this.sc.length; j++) this.sc[j].check()
                }, this.check(!0)
            },
            n = a._gsDefine = function(a, b, c, d) {
                return new m(a, b, c, d)
            },
            o = d._class = function(a, b, c) {
                return b = b || function() {}, n(a, [], function() {
                    return b
                }, c), b
            };
        n.globals = b;
        var p = [0, 0, 1, 1],
            q = [],
            r = o("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? p.concat(b) : p
            }, !0),
            s = r.map = {},
            t = r.register = function(a, b, c, e) {
                for (var i, j, k, l, f = b.split(","), g = f.length, h = (c || "easeIn,easeOut,easeInOut").split(","); --g > -1;)
                    for (j = f[g], i = e ? o("easing." + j, null, !0) : d.easing[j] || {}, k = h.length; --k > -1;) l = h[k], s[j + "." + l] = s[l + j] = i[l] = a.getRatio ? a : a[l] || new a
            };
        for (i = r.prototype, i._calcEnd = !1, i.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : a < .5 ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : a < .5 ? d / 2 : 1 - d / 2
            }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, t(new r(null, null, 1, h), i, "easeOut", !0), t(new r(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), t(new r(null, null, 3, h), i, "easeInOut");
        s.linear = d.easing.Linear.easeIn, s.swing = d.easing.Quad.easeInOut;
        var u = o("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        i = u.prototype, i.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var h, i, f = this._listeners[a],
                g = 0;
            for (null == f && (this._listeners[a] = f = []), i = f.length; --i > -1;) h = f[i], h.c === b && h.s === c ? f.splice(i, 1) : 0 === g && h.pr < e && (g = i + 1);
            f.splice(g, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }), this !== j || k || j.wake()
        }, i.removeEventListener = function(a, b) {
            var d, c = this._listeners[a];
            if (c)
                for (d = c.length; --d > -1;)
                    if (c[d].c === b) return void c.splice(d, 1)
        }, i.dispatchEvent = function(a) {
            var c, d, e, b = this._listeners[a];
            if (b)
                for (c = b.length, d = this._eventTarget; --c > -1;) e = b[c], e.up ? e.c.call(e.s || d, {
                    type: a,
                    target: d
                }) : e.c.call(e.s || d)
        };
        var v = a.requestAnimationFrame,
            w = a.cancelAnimationFrame,
            x = Date.now || function() {
                return (new Date).getTime()
            };
        for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !v;) v = a[g[h] + "RequestAnimationFrame"], w = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        o("Ticker", function(a, b) {
            var g, h, i, l, m, c = this,
                d = x(),
                e = b !== !1 && v,
                n = function(a) {
                    c.time = (x() - d) / 1e3;
                    var b = i,
                        e = c.time - m;
                    (!g || e > 0 || a === !0) && (c.frame++, m += e + (e >= l ? .004 : l - e), c.dispatchEvent("tick")), a !== !0 && b === i && (i = h(n))
                };
            u.call(c), this.time = this.frame = 0, this.tick = function() {
                n(!0)
            }, this.sleep = function() {
                null != i && (e && w ? w(i) : clearTimeout(i), h = f, i = null, c === j && (k = !1))
            }, this.wake = function() {
                null !== i && c.sleep(), h = 0 === g ? f : e && v ? v : function(a) {
                    return setTimeout(a, 1e3 * (m - c.time) + 1 | 0)
                }, c === j && (k = !0), n(2)
            }, this.fps = function(a) {
                return arguments.length ? (g = a, l = 1 / (g || 60), m = this.time + l, void c.wake()) : g
            }, this.useRAF = function(a) {
                return arguments.length ? (c.sleep(), e = a, void c.fps(g)) : e
            }, c.fps(a), setTimeout(function() {
                e && (!i || c.frame < 5) && c.useRAF(!1)
            }, 1500)
        }), i = d.Ticker.prototype = new d.events.EventDispatcher, i.constructor = d.Ticker;
        var y = o("core.Animation", function(a, b) {
            if (this.vars = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, K) {
                k || j.wake();
                var c = this.vars.useFrames ? J : K;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        j = y.ticker = new d.Ticker, i = y.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1, i.play = function(a, b) {
            return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
        }, i.pause = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!0)
        }, i.resume = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!1)
        }, i.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, i.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, i.reverse = function(a, b) {
            return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, i.render = function() {}, i.invalidate = function() {
            return this
        }, i._enabled = function(a, b) {
            return k || j.wake(), this._gc = !a, this._active = a && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function(a, b) {
            return this._enabled(!1, !1)
        }, i.kill = function(a, b) {
            return this._kill(a, b),
                this
        }, i._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, i.eventCallback = function(a, b, c, d) {
            if (null == a) return null;
            if ("on" === a.substr(0, 2)) {
                var f, e = this.vars;
                if (1 === arguments.length) return e[a];
                if (null == b) delete e[a];
                else if (e[a] = b, e[a + "Params"] = c, e[a + "Scope"] = d, c)
                    for (f = c.length; --f > -1;) "{self}" === c[f] && (c = e[a + "Params"] = c.concat(), c[f] = this);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, i.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, i.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, i.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, i.totalTime = function(a, b, c) {
            if (k || j.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (a < 0 && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), !e._active)
                        for (; e._timeline;) e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== a && this.render(a, b, !1)
            }
            return this
        }, i.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, i.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, i.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, i.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                k || a || j.wake();
                var b = this._timeline.rawTime(),
                    c = b - this._pauseTime;
                !a && this._timeline.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = !a && this._totalTime > 0 && this._totalTime < this._totalDuration, a || 0 === c || 0 === this._duration || this.render(this._totalTime, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var z = o("core.SimpleTimeline", function(a) {
            y.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = z.prototype = new y, i.constructor = z, i.kill()._gc = !1, i._first = i._last = null, i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._timeline && this._uncache(!0), this
        }, i._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        }, i.render = function(a, b, c) {
            var e, d = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; d;) e = d._next, (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = e
        }, i.rawTime = function() {
            return k || j.wake(), this._totalTime
        };
        var A = o("TweenLite", function(a, b, c) {
                if (y.call(this, b, c), null == a) throw "Cannot tween a null target.";
                this.target = a = "string" != typeof a ? a : A.selector(a) || a;
                var g, h, i, d = a.jquery || a.length && a[0] && a[0].nodeType && a[0].style,
                    f = this.vars.overwrite;
                if (this._overwrite = f = null == f ? I[A.defaultOverwrite] : "number" == typeof f ? f >> 0 : I[f], (d || a instanceof Array) && "number" != typeof a[0])
                    for (this._targets = i = e.call(a, 0), this._propLookup = [], this._siblings = [], g = 0; g < i.length; g++) h = i[g], h ? "string" != typeof h ? h.length && h[0] && h[0].nodeType && h[0].style ? (i.splice(g--, 1), this._targets = i = i.concat(e.call(h, 0))) : (this._siblings[g] = L(h, this, !1), 1 === f && this._siblings[g].length > 1 && M(h, this, null, 1, this._siblings[g])) : (h = i[g--] = A.selector(h), "string" == typeof h && i.splice(g + 1, 1)) : i.splice(g--, 1);
                else this._propLookup = {}, this._siblings = L(a, this, !1), 1 === f && this._siblings.length > 1 && M(a, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === b && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            B = function(a) {
                return a.length && a[0] && a[0].nodeType && a[0].style
            },
            C = function(a, b) {
                var d, c = {};
                for (d in a) H[d] || d in b && "x" !== d && "y" !== d && "width" !== d && "height" !== d && "className" !== d || !(!E[d] || E[d] && E[d]._autoCSS) || (c[d] = a[d], delete a[d]);
                a.css = c
            };
        i = A.prototype = new y, i.constructor = A, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = !1, A.version = "1.9.7", A.defaultEase = i._ease = new r(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = j, A.autoSleep = !0, A.selector = a.$ || a.jQuery || function(b) {
            return a.$ ? (A.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
        };
        var D = A._internals = {},
            E = A._plugins = {},
            F = A._tweenLookup = {},
            G = 0,
            H = D.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            I = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            J = y._rootFramesTimeline = new z,
            K = y._rootTimeline = new z;
        K._startTime = j.time, J._startTime = j.frame, K._active = J._active = !0, y._updateRoot = function() {
            if (K.render((j.time - K._startTime) * K._timeScale, !1, !1), J.render((j.frame - J._startTime) * J._timeScale, !1, !1), !(j.frame % 120)) {
                var a, b, c;
                for (c in F) {
                    for (b = F[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete F[c]
                }
                if (c = K._first, (!c || c._paused) && A.autoSleep && !J._first && 1 === j._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || j.sleep()
                }
            }
        }, j.addEventListener("tick", y._updateRoot);
        var L = function(a, b, c) {
                var e, f, d = a._gsTweenID;
                if (F[d || (a._gsTweenID = d = "t" + G++)] || (F[d] = {
                        target: a,
                        tweens: []
                    }), b && (e = F[d].tweens, e[f = e.length] = b, c))
                    for (; --f > -1;) e[f] === b && e.splice(f, 1);
                return F[d].tweens
            },
            M = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; f < i; f++)
                        if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var n, j = b._startTime + 1e-10,
                    k = [],
                    l = 0,
                    m = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (n = n || N(b, 0, m), 0 === N(h, n, m) && (k[l++] = h)) : h._startTime <= j && h._startTime + h.totalDuration() / h._timeScale + 1e-10 > j && ((m || !h._initted) && j - h._startTime <= 2e-10 || (k[l++] = h)));
                for (f = l; --f > -1;) h = k[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                return g
            },
            N = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime, g = 1e-10; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && f - b < 2 * g ? g : (f += a.totalDuration() / a._timeScale / e) > b + g ? 0 : f - b - g
            };
        i._init = function() {
            var e, f, g, h, a = this.vars,
                b = this._overwrittenProps,
                c = this._duration,
                d = a.ease;
            if (a.startAt) {
                if (a.startAt.overwrite = 0, a.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, a.startAt), a.immediateRender && (this._startAt = null, 0 === this._time && 0 !== c)) return
            } else if (a.runBackwards && a.immediateRender && 0 !== c)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                g = {};
                for (h in a) H[h] && "autoCSS" !== h || (g[h] = a[h]);
                return g.overwrite = 0, void(this._startAt = A.to(this.target, 0, g))
            }
            if (d ? d instanceof r ? this._ease = a.easeParams instanceof Array ? d.config.apply(d, a.easeParams) : d : this._ease = "function" == typeof d ? new r(d, a.easeParams) : s[d] || A.defaultEase : this._ease = A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], b ? b[e] : null) && (f = !0);
            else f = this._initProps(this.target, this._propLookup, this._siblings, b);
            if (f && A._onPluginEvent("_onInitAllProps", this), b && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                for (g = this._firstPT; g;) g.s += g.c, g.c = -g.c, g = g._next;
            this._onUpdate = a.onUpdate, this._initted = !0
        }, i._initProps = function(a, b, c, d) {
            var e, f, g, h, i, j, k;
            if (null == a) return !1;
            this.vars.css || a.style && a.nodeType && E.css && this.vars.autoCSS !== !1 && C(this.vars, a);
            for (e in this.vars) {
                if (H[e]) {
                    if (("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) && (i = this.vars[e]))
                        for (f = i.length; --f > -1;) "{self}" === i[f] && (i = this.vars[e] = i.concat(), i[f] = this)
                } else if (E[e] && (h = new E[e])._onInitTween(a, this.vars[e], this)) {
                    for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: e,
                            pg: !0,
                            pr: h._priority
                        }, f = h._overwriteProps.length; --f > -1;) b[h._overwriteProps[f]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (g = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = b[e] = j = {
                    _next: this._firstPT,
                    t: a,
                    p: e,
                    f: "function" == typeof a[e],
                    n: e,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), k = this.vars[e], j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return d && this._kill(d, a) ? this._initProps(a, b, c, d) : this._overwrite > 1 && this._firstPT && c.length > 1 && M(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : g
        }, i.render = function(a, b, c) {
            var e, f, g, d = this._time;
            if (a >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, f = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (f = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a);
            else if (a < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === this._duration && this._rawPrevTime > 0) && (f = "onReverseComplete", e = this._reversed), a < 0 ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var h = a / this._duration,
                    i = this._easeType,
                    j = this._easePower;
                (1 === i || 3 === i && h >= .5) && (h = 1 - h), 3 === i && (h *= 2), 1 === j ? h *= h : 2 === j ? h *= h * h : 3 === j ? h *= h * h * h : 4 === j && (h *= h * h * h * h), 1 === i ? this.ratio = 1 - h : 2 === i ? this.ratio = h : a / this._duration < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2
            } else this.ratio = this._ease.getRatio(a / this._duration);
            if (this._time !== d || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !e ? this.ratio = this._ease.getRatio(this._time / this._duration) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || this._paused || (this._active = !0), 0 === d && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : f || (f = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== this._duration || b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q))), g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
                this._onUpdate && (a < 0 && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q)), f && (this._gc || (a < 0 && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || q)))
            }
        }, i._kill = function(a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : A.selector(b) || b;
            var c, d, e, f, g, h, i, j;
            if ((b instanceof Array || B(b)) && "number" != typeof b[0])
                for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets) {
                    for (c = this._targets.length; --c > -1;)
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (g) {
                    i = a || g, j = a !== d && "all" !== d && a !== g && (null == a || a._tempKill !== !0);
                    for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, i.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, i._enabled = function(a, b) {
            if (k || j.wake(), a && this._gc) {
                var d, c = this._targets;
                if (c)
                    for (d = c.length; --d > -1;) this._siblings[d] = L(c[d], this, !0);
                else this._siblings = L(this.target, this, !0)
            }
            return y.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
        }, A.to = function(a, b, c) {
            return new A(a, b, c)
        }, A.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new A(a, b, c)
        }, A.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new A(a, b, d)
        }, A.delayedCall = function(a, b, c, d, e) {
            return new A(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, A.set = function(a, b) {
            return new A(a, 0, b)
        }, A.killTweensOf = A.killDelayedCallsTo = function(a, b) {
            for (var c = A.getTweensOf(a), d = c.length; --d > -1;) c[d]._kill(b, a)
        }, A.getTweensOf = function(a) {
            if (null == a) return [];
            a = "string" != typeof a ? a : A.selector(a) || a;
            var b, c, d, e;
            if ((a instanceof Array || B(a)) && "number" != typeof a[0]) {
                for (b = a.length, c = []; --b > -1;) c = c.concat(A.getTweensOf(a[b]));
                for (b = c.length; --b > -1;)
                    for (e = c[b], d = b; --d > -1;) e === c[d] && c.splice(b, 1)
            } else
                for (c = L(a).concat(), b = c.length; --b > -1;) c[b]._gc && c.splice(b, 1);
            return c
        };
        var O = o("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = O.prototype
        }, !0);
        if (i = O.prototype, O.version = "1.9.1", O.API = 2, i._firstPT = null, i._addTween = function(a, b, c, d, e, f) {
                var g, h;
                null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) && (this._firstPT = h = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: g,
                    f: "function" == typeof a[b],
                    n: e || b,
                    r: f
                }, h._next && (h._next._prev = h))
            }, i.setRatio = function(a) {
                for (var d, b = this._firstPT, c = 1e-6; b;) d = b.c * a + b.s, b.r ? d = d + (d > 0 ? .5 : -.5) >> 0 : d < c && d > -c && (d = 0), b.f ? b.t[b.p](d) : b.t[b.p] = d, b = b._next
            }, i._kill = function(a) {
                var d, b = this._overwriteProps,
                    c = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (d = b.length; --d > -1;) null != a[b[d]] && b.splice(d, 1);
                for (; c;) null != a[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next;
                return !1
            }, i._roundProps = function(a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, A._onPluginEvent = function(a, b) {
                var d, e, f, g, h, c = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; c;) {
                        for (h = c._next, e = f; e && e.pr > c.pr;) e = e._next;
                        (c._prev = e ? e._prev : g) ? c._prev._next = c: f = c, (c._next = e) ? e._prev = c : g = c, c = h
                    }
                    c = b._firstPT = f
                }
                for (; c;) c.pg && "function" == typeof c.t[a] && c.t[a]() && (d = !0), c = c._next;
                return d
            }, O.activate = function(a) {
                for (var b = a.length; --b > -1;) a[b].API === O.API && (E[(new a[b])._propName] = a[b]);
                return !0
            }, n.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var h, b = a.propName,
                    c = a.priority || 0,
                    d = a.overwriteProps,
                    e = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    f = o("plugins." + b.charAt(0).toUpperCase() + b.substr(1) + "Plugin", function() {
                        O.call(this, b, c), this._overwriteProps = d || []
                    }, a.global === !0),
                    g = f.prototype = new O(b);
                g.constructor = f, f.API = a.API;
                for (h in e) "function" == typeof a[h] && (g[e[h]] = a[h]);
                return f.version = a.version, O.activate([f]), f
            }, g = a._gsQueue) {
            for (h = 0; h < g.length; h++) g[h]();
            for (i in l) l[i].func || a.console.log("GSAP encountered missing dependency: com.greensock." + i)
        }
        k = !1
    }(window), function(a) {
        var b = function(a, c, d, e, f) {
            var g = this,
                h = b.prototype;
            this.imageSource_img = a, this.image_sdo = null, this.segmentWidth = c, this.segmentHeight = d, this.totalSegments = e, this.animDelay = f || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !0, this.init = function() {
                this.setWidth(this.segmentWidth), this.setHeight(this.segmentHeight), this.image_sdo = new FWDR3DCarSimpleDisplayObject("img"), this.image_sdo.setScreen(this.imageSource_img), this.addChild(this.image_sdo), this.hide(!1)
            }, this.start = function() {
                clearInterval(this.delayTimerId_int), this.delayTimerId_int = setInterval(this.updatePreloader, this.animDelay)
            }, this.stop = function() {
                clearInterval(this.delayTimerId_int)
            }, this.updatePreloader = function() {
                g.count++, g.count > g.totalSegments - 1 && (g.count = 0);
                var a = g.count * g.segmentWidth;
                g.image_sdo.setX(-a)
            }, this.show = function() {
                g.setVisible(!0), g.start(), FWDR3DCarModTweenMax.killTweensOf(g), g.setAlpha(0), FWDR3DCarModTweenMax.to(g, 1, {
                    alpha: 1
                }), g.isShowed_bl = !0
            }, this.hide = function(a) {
                g.isShowed_bl && (FWDR3DCarModTweenMax.killTweensOf(g), a ? FWDR3DCarModTweenMax.to(g, 1, {
                    alpha: 0,
                    onComplete: g.onHideComplete
                }) : (g.setVisible(!1), g.setAlpha(0), g.stop()), g.isShowed_bl = !1)
            }, this.onHideComplete = function() {
                g.setVisible(!1), g.stop(), g.dispatchEvent(b.HIDE_COMPLETE)
            }, this.destroy = function() {
                FWDR3DCarModTweenMax.killTweensOf(g), g.stop(), g.image_sdo.destroy(), g.imageSource_img = null, g.image_sdo = null, a = null, g.setInnerHTML(""), h.destroy(), g = null, h = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDR3DCarPreloader = b
    }(window), function(a) {
        var b = function(c, d, e) {
            var f = this,
                g = b.prototype;
            this.handlerLeftNImg = c.handlerLeftNImg, this.handlerLeftSImg = c.handlerLeftSImg, this.handlerCenterNImg = c.handlerCenterNImg, this.handlerCenterSImg = c.handlerCenterSImg, this.handlerRightNImg = c.handlerRightNImg, this.handlerRightSImg = c.handlerRightSImg, this.trackLeftImg = c.trackLeftImg, this.trackCenterImg = c.trackCenterImg, this.trackRightImg = c.trackRightImg, this.textColorNormal = c.scrollbarTextColorNormal, this.textColorSelected = c.scrollbarTextColorSelected, this.scrollbarHandlerDO, this.scrollbarHandlerLeftNDO, this.scrollbarHandlerLeftSDO, this.scrollbarHandlerCenterNDO, this.scrollbarHandlerCenterSDO, this.scrollbarHandlerRightNDO, this.scrollbarHandlerRightSDO, this.scrollbarHandlerTextDO, this.scrollbarHandlerOverDO, this.scrollbarTrackDO, this.scrollbarTrackLeftDO, this.scrollbarTrackCenterDO, this.scrollbarTrackRightDO, this.scrollbarMaxWidth = c.controlsMaxWidth, this.handlerWidth = c.handlerWidth, this.trackWidth = c.controlsMaxWidth, this.scrollbarHeight = c.trackLeftImg.height, this.trackLeftWidth = c.trackLeftImg.width, this.handlerLeftWidth = c.handlerLeftNImg.width, this.totalItems = d, this.curItemId = e, this.prevCurItemId, this.mouseX = 0, this.mouseY = 0, this.isPressed = !1, this.isMobile = FWDRLR3DUtils.isMobile, this.hasPointerEvent = FWDRLR3DUtils.hasPointerEvent, this.init = function() {
                f.setupMainContainers()
            }, this.setupMainContainers = function() {
                f.setWidth(f.scrollbarMaxWidth), f.setHeight(f.scrollbarHeight), f.setTrack(), f.setHandler(), f.isMobile ? f.hasPointerEvent ? (f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOver", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOut", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.addEventListener("MSPointerDown", f.onScrollMouseDown)) : f.scrollbarHandlerOverDO.screen.addEventListener("touchstart", f.onScrollMouseDown) : (f.scrollbarHandlerOverDO.setButtonMode(!0), f.screen.addEventListener ? (f.scrollbarHandlerOverDO.screen.addEventListener("mouseover", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.addEventListener("mouseout", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.addEventListener("mousedown", f.onScrollMouseDown), a.addEventListener("mouseup", f.onScrollMouseUp)) : (f.scrollbarHandlerOverDO.screen.attachEvent("onmouseover", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.attachEvent("onmouseout", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.attachEvent("onmousedown", f.onScrollMouseDown), document.attachEvent("onmouseup", f.onScrollMouseUp)))
            }, this.setTrack = function() {
                f.scrollbarTrackDO = new FWDRLR3DDisplayObject("div"), f.addChild(f.scrollbarTrackDO), f.scrollbarTrackDO.setWidth(f.trackWidth), f.scrollbarTrackDO.setHeight(f.scrollbarHeight), f.scrollbarTrackLeftDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarTrackLeftDO.setScreen(f.trackLeftImg), f.scrollbarTrackDO.addChild(f.scrollbarTrackLeftDO), f.scrollbarTrackCenterDO = new FWDR3DCarSimpleDisplayObject("div"), f.scrollbarTrackCenterDO.screen.style.backgroundImage = "url(" + c.trackCenterPath + ")", f.scrollbarTrackCenterDO.screen.style.backgroundRepeat = "repeat-x", f.scrollbarTrackDO.addChild(f.scrollbarTrackCenterDO), f.scrollbarTrackCenterDO.setWidth(f.trackWidth - 2 * f.trackLeftWidth), f.scrollbarTrackCenterDO.setHeight(f.scrollbarHeight), f.scrollbarTrackCenterDO.setX(f.trackLeftWidth), f.scrollbarTrackRightDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarTrackRightDO.setScreen(f.trackRightImg), f.scrollbarTrackDO.addChild(f.scrollbarTrackRightDO), f.scrollbarTrackRightDO.setX(f.trackWidth - f.trackLeftWidth)
            }, this.setHandler = function() {
                f.scrollbarHandlerDO = new FWDRLR3DDisplayObject("div"), f.addChild(f.scrollbarHandlerDO), f.scrollbarHandlerDO.setWidth(f.handlerWidth), f.scrollbarHandlerDO.setHeight(f.scrollbarHeight), f.scrollbarHandlerLeftSDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarHandlerLeftSDO.setScreen(f.handlerLeftSImg), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerLeftSDO), f.scrollbarHandlerLeftNDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarHandlerLeftNDO.setScreen(f.handlerLeftNImg), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerLeftNDO), f.scrollbarHandlerCenterSDO = new FWDR3DCarSimpleDisplayObject("div"), f.scrollbarHandlerCenterSDO.screen.style.backgroundImage = "url(" + c.handlerCenterSPath + ")", f.scrollbarHandlerCenterSDO.screen.style.backgroundRepeat = "repeat-x", f.scrollbarHandlerDO.addChild(f.scrollbarHandlerCenterSDO), f.scrollbarHandlerCenterSDO.setWidth(f.handlerWidth - 2 * f.handlerLeftWidth), f.scrollbarHandlerCenterSDO.setHeight(f.scrollbarHeight), f.scrollbarHandlerCenterSDO.setX(f.handlerLeftWidth), f.scrollbarHandlerCenterNDO = new FWDR3DCarSimpleDisplayObject("div"), f.scrollbarHandlerCenterNDO.screen.style.backgroundImage = "url(" + c.handlerCenterNPath + ")", f.scrollbarHandlerCenterNDO.screen.style.backgroundRepeat = "repeat-x", f.scrollbarHandlerDO.addChild(f.scrollbarHandlerCenterNDO), f.scrollbarHandlerCenterNDO.setWidth(f.handlerWidth - 2 * f.handlerLeftWidth), f.scrollbarHandlerCenterNDO.setHeight(f.scrollbarHeight), f.scrollbarHandlerCenterNDO.setX(f.handlerLeftWidth), f.scrollbarHandlerRightSDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarHandlerRightSDO.setScreen(f.handlerRightSImg), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerRightSDO), f.scrollbarHandlerRightSDO.setX(f.handlerWidth - f.handlerLeftWidth), f.scrollbarHandlerRightNDO = new FWDR3DCarSimpleDisplayObject("img"), f.scrollbarHandlerRightNDO.setScreen(f.handlerRightNImg), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerRightNDO), f.scrollbarHandlerRightNDO.setX(f.handlerWidth - f.handlerLeftWidth), f.scrollbarHandlerTextDO = new FWDRLR3DDisplayObject("div"), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerTextDO), f.scrollbarHandlerTextDO.getStyle().fontSmoothing = "antialiased", f.scrollbarHandlerTextDO.getStyle().webkitFontSmoothing = "antialiased", f.scrollbarHandlerTextDO.getStyle().textRendering = "optimizeLegibility", f.scrollbarHandlerTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif", f.scrollbarHandlerTextDO.getStyle().fontSize = "10px", f.scrollbarHandlerTextDO.getStyle().color = f.textColorNormal, f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems), f.setTextPositionId = setTimeout(f.setTextPosition, 10), f.scrollbarHandlerOverDO = new FWDRLR3DDisplayObject("div"), f.scrollbarHandlerDO.addChild(f.scrollbarHandlerOverDO), f.scrollbarHandlerOverDO.setWidth(f.handlerWidth), f.scrollbarHandlerOverDO.setHeight(f.scrollbarHeight), FWDRLR3DUtils.isIE && (f.scrollbarHandlerOverDO.setBkColor("#000000"), f.scrollbarHandlerOverDO.setAlpha(.001))
            }, this.setTextPosition = function() {
                f.scrollbarHandlerTextDO.setX(Math.floor((f.handlerWidth - f.scrollbarHandlerTextDO.getWidth()) / 2)), f.scrollbarHandlerTextDO.setY(Math.floor((f.scrollbarHeight - f.scrollbarHandlerTextDO.getHeight()) / 2) + 1)
            }, this.resize = function(a, b) {
                a < b + f.scrollbarMaxWidth ? a - b < f.handlerWidth ? (f.resizeTrack(0), f.scrollbarHandlerDO.setY(500)) : (f.resizeTrack(Math.floor(a - b)), f.scrollbarHandlerDO.setY(0)) : f.getWidth() < f.scrollbarMaxWidth && (f.resizeTrack(Math.floor(f.scrollbarMaxWidth)), f.scrollbarHandlerDO.setY(0)), f.scrollbarHandlerDO.setX(Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1))), f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems)
            }, this.resize2 = function() {
                f.resizeTrack(Math.floor(f.scrollbarMaxWidth))
            }, this.resizeTrack = function(a) {
                f.trackWidth = a, f.setWidth(f.trackWidth), f.scrollbarTrackDO.setWidth(f.trackWidth), f.scrollbarTrackCenterDO.setWidth(Math.floor(f.trackWidth - 2 * f.trackLeftWidth)), f.scrollbarTrackCenterDO.setX(Math.floor(f.trackLeftWidth)), f.scrollbarTrackRightDO.setX(Math.floor(f.trackWidth - f.trackLeftWidth))
            }, this.onScrollMouseOver = function() {
                f.scrollbarOver = !0, FWDR3DCarModTweenMax.to(f.scrollbarHandlerLeftNDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerCenterNDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerRightNDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerTextDO.screen, .8, {
                    css: {
                        color: f.textColorSelected
                    },
                    ease: Expo.easeOut
                })
            }, this.onScrollMouseOut = function() {
                f.scrollbarOver = !1, f.isPressed || (FWDR3DCarModTweenMax.to(f.scrollbarHandlerLeftNDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerCenterNDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerRightNDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(f.scrollbarHandlerTextDO.screen, .8, {
                    css: {
                        color: f.textColorNormal
                    },
                    ease: Expo.easeOut
                }))
            }, this.onScrollMouseDown = function(b) {
                b.preventDefault && b.preventDefault();
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                f.mouseX = c.screenX, f.mouseY = c.screenY, f.curScrollX = f.scrollbarHandlerDO.getX(), f.lastPressedX = f.mouseX, f.isPressed = !0, FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO), f.isMobile ? f.hasPointerEvent ? (a.addEventListener("MSPointerMove", f.onScrollMove), a.addEventListener("MSPointerUp", f.onScrollMouseUp)) : (a.addEventListener("touchmove", f.onScrollMove), a.addEventListener("touchend", f.onScrollMouseUp)) : f.screen.addEventListener ? a.addEventListener("mousemove", f.onScrollMove) : document.attachEvent("onmousemove", f.onScrollMove)
            }, this.onScrollMove = function(a) {
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                f.mouseX = c.screenX, f.mouseY = c.screenY;
                var d = f.mouseX - f.lastPressedX,
                    e = f.curScrollX + d;
                e = Math.max(e, 0), e = Math.min(f.trackWidth - f.handlerWidth, e), f.scrollbarHandlerDO.setX(Math.floor(e)), f.curItemId = Math.floor(e / (f.trackWidth - f.handlerWidth) * f.totalItems), f.curItemId == f.totalItems && f.curItemId--, f.prevCurItemId != f.curItemId && (f.dispatchEvent(b.MOVE, {
                    id: f.curItemId
                }), f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems)), f.prevCurItemId = f.curItemId
            }, this.onScrollMouseUp = function() {
                f.isPressed = !1, f.isMobile ? f.hasPointerEvent ? (a.removeEventListener("MSPointerUp", f.onScrollMouseUp), a.removeEventListener("MSPointerMove", f.onScrollMove)) : (a.removeEventListener("touchend", f.onScrollMouseUp), a.removeEventListener("touchmove", f.onScrollMove)) : f.screen.addEventListener ? a.removeEventListener("mousemove", f.onScrollMove) : document.detachEvent("onmousemove", f.onScrollMove), f.scrollbarOver || f.isMobile || f.onScrollMouseOut(), f.gotoItem2()
            }, this.gotoItem = function(a, b) {
                f.curItemId = a, f.prevCurItemId != f.curItemId && (b ? (FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO), FWDR3DCarModTweenMax.to(f.scrollbarHandlerDO, .8, {
                    x: Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)),
                    ease: Expo.easeOut
                })) : f.scrollbarHandlerDO.setX(Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1))), f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems)), f.prevCurItemId = f.curItemId
            }, this.gotoItem2 = function() {
                FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO), FWDR3DCarModTweenMax.to(f.scrollbarHandlerDO, .8, {
                    x: Math.floor(f.curItemId * (f.trackWidth - f.handlerWidth) / (f.totalItems - 1)),
                    ease: Expo.easeOut
                }), f.scrollbarHandlerTextDO.setInnerHTML(f.curItemId + 1 + "/" + f.totalItems)
            }, this.destroy = function() {
                clearTimeout(f.setTextPositionId), f.isMobile ? f.hasPointerEvent ? (f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOver", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOut", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerDown", f.onScrollMouseDown)) : f.scrollbarHandlerOverDO.screen.removeEventListener("touchstart", f.onScrollMouseDown) : (f.scrollbarHandlerOverDO.setButtonMode(!0), f.screen.removeEventListener ? (f.scrollbarHandlerOverDO.screen.removeEventListener("mouseover", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.removeEventListener("mouseout", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.removeEventListener("mousedown", f.onScrollMouseDown), a.removeEventListener("mouseup", f.onScrollMouseUp)) : (f.scrollbarHandlerOverDO.screen.detachEvent("onmouseover", f.onScrollMouseOver), f.scrollbarHandlerOverDO.screen.detachEvent("onmouseout", f.onScrollMouseOut), f.scrollbarHandlerOverDO.screen.detachEvent("onmousedown", f.onScrollMouseDown), document.detachEvent("onmouseup", f.onScrollMouseUp))), f.isMobile ? f.hasPointerEvent ? (a.removeEventListener("MSPointerUp", f.onScrollMouseUp), a.removeEventListener("MSPointerMove", f.onScrollMove)) : (a.removeEventListener("touchend", f.onScrollMouseUp), a.removeEventListener("touchmove", f.onScrollMove)) : f.screen.addEventListener ? a.removeEventListener("mousemove", f.onScrollMove) : document.detachEvent("onmousemove", f.onScrollMove), FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerLeftNDO), FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerCenterNDO), FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerRightNDO), FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerDO), FWDR3DCarModTweenMax.killTweensOf(f.scrollbarHandlerTextDO.screen), f.scrollbarHandlerDO.destroy(), f.scrollbarHandlerLeftNDO.destroy(), f.scrollbarHandlerLeftSDO.destroy(), f.scrollbarHandlerCenterNDO.destroy(), f.scrollbarHandlerCenterSDO.destroy(), f.scrollbarHandlerRightNDO.destroy(), f.scrollbarHandlerRightSDO.destroy(), f.scrollbarHandlerTextDO.destroy(), f.scrollbarHandlerOverDO.destroy(), f.scrollbarTrackDO.destroy(), f.scrollbarTrackLeftDO.destroy(), f.scrollbarTrackCenterDO.destroy(),
                    f.scrollbarTrackRightDO.destroy(), f.scrollbarHandlerDO = null, f.scrollbarHandlerLeftNDO = null, f.scrollbarHandlerLeftSDO = null, f.scrollbarHandlerCenterNDO = null, f.scrollbarHandlerCenterSDO = null, f.scrollbarHandlerRightNDO = null, f.scrollbarHandlerRightSDO = null, f.scrollbarHandlerTextDO = null, f.scrollbarHandlerOverDO = null, f.scrollbarTrackDO = null, f.scrollbarTrackLeftDO = null, f.scrollbarTrackCenterDO = null, f.scrollbarTrackRightDO = null, f.setInnerHTML(""), g.destroy(), f = null, g = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.MOVE = "onMove", b.prototype = null, a.FWDR3DCarScrollbar = b
    }(window), function(a) {
        var b = function(a, c) {
            var d = this,
                e = b.prototype;
            this.nImg = a, this.sImg = c, this.n_do, this.s_do, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.init = function() {
                this.setupMainContainers(), d.w = this.nImg.width
            }, this.setupMainContainers = function() {
                this.n_do = new FWDR3DCarSimpleDisplayObject("img"), this.n_do.setScreen(this.nImg), this.s_do = new FWDR3DCarSimpleDisplayObject("img"), this.s_do.setScreen(this.sImg), this.addChild(this.s_do), this.addChild(this.n_do), this.setWidth(this.nImg.width), this.setHeight(this.nImg.height), this.setButtonMode(!0), d.isMobile_bl ? d.hasPointerEvent_bl ? (d.screen.addEventListener("MSPointerOver", d.onMouseOver), d.screen.addEventListener("MSPointerOut", d.onMouseOut), d.screen.addEventListener("MSPointerUp", d.onClick)) : d.screen.addEventListener("touchstart", d.onClick) : d.screen.addEventListener ? (d.screen.addEventListener("mouseover", d.onMouseOver), d.screen.addEventListener("mouseout", d.onMouseOut), d.screen.addEventListener("mouseup", d.onClick)) : d.screen.attachEvent && (d.screen.attachEvent("onmouseover", d.onMouseOver), d.screen.attachEvent("onmouseout", d.onMouseOut), d.screen.attachEvent("onmouseup", d.onClick))
            }, this.onMouseOver = function(a) {
                a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || FWDR3DCarModTweenMax.to(d.n_do, .9, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onMouseOut = function(a) {
                a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || FWDR3DCarModTweenMax.to(d.n_do, .9, {
                    alpha: 1,
                    ease: Expo.easeOu
                })
            }, this.onClick = function(a) {
                d.dispatchEvent(b.CLICK)
            }, this.destroy = function() {
                d.isMobile_bl ? d.hasPointerEvent_bl ? (d.screen.removeEventListener("MSPointerOver", d.onMouseOver), d.screen.removeEventListener("MSPointerOut", d.onMouseOut), d.screen.removeEventListener("MSPointerUp", d.onClick)) : d.screen.removeEventListener("touchstart", d.onClick) : d.screen.removeEventListener ? (d.screen.removeEventListener("mouseover", d.onMouseOver), d.screen.removeEventListener("mouseout", d.onMouseOut), d.screen.removeEventListener("mouseup", d.onClick)) : d.screen.detachEvent && (d.screen.detachEvent("onmouseover", d.onMouseOver), d.screen.detachEvent("onmouseout", d.onMouseOut), d.screen.detachEvent("onmouseup", d.onClick)), FWDR3DCarModTweenMax.killTweensOf(d.n_do), d.n_do.destroy(), d.s_do.destroy(), d.nImg = null, d.sImg = null, d.n_do = null, d.s_do = null, a = null, c = null, d.setInnerHTML(""), e.destroy(), d = null, e = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.CLICK = "onClick", b.prototype = null, a.FWDR3DCarSimpleButton = b
    }(window), function(a) {
        var b = function(a, b, c, d) {
            var e = this;
            if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
            e.type = a, this.style, this.screen, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasTransform3d_bl = FWDRLR3DUtils.hasTransform3d, this.hasTransform2d_bl = FWDRLR3DUtils.hasTransform2d, FWDRLR3DUtils.isFirefox && (e.hasTransform3d_bl = !1), FWDRLR3DUtils.isFirefox && (e.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, e.init = function() {
                e.setScreen()
            }, e.getTransform = function() {
                for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                    if ("undefined" != typeof e.screen.style[b]) return b;
                return !1
            }, e.getOpacityType = function() {
                var a;
                return a = "undefined" != typeof e.screen.style.opacity ? "opacity" : "filter"
            }, e.setScreen = function(a) {
                "img" == e.type && a ? (e.screen = a, e.setMainProperties()) : (e.screen = document.createElement(e.type), e.setMainProperties())
            }, e.setMainProperties = function() {
                e.transform = e.getTransform(), e.setPosition(e.position), e.setDisplay(e.display), e.setOverflow(e.overflow), e.opacityType = e.getOpacityType(), "opacity" == e.opacityType && (e.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), e.screen.style.left = "0px", e.screen.style.top = "0px", e.screen.style.margin = "0px", e.screen.style.padding = "0px", e.screen.style.maxWidth = "none", e.screen.style.maxHeight = "none", e.screen.style.border = "none", e.screen.style.lineHeight = "1", e.screen.style.backgroundColor = "transparent", e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden", "img" == a && (e.setWidth(e.screen.width), e.setHeight(e.screen.height), e.setSelectable(!1))
            }, e.setSelectable = function(a) {
                a || (e.screen.style.userSelect = "none", e.screen.style.MozUserSelect = "none", e.screen.style.webkitUserSelect = "none", e.screen.style.khtmlUserSelect = "none", e.screen.style.oUserSelect = "none", e.screen.style.msUserSelect = "none", e.screen.msUserSelect = "none", e.screen.ondragstart = function(a) {
                    return !1
                }, e.screen.onselectstart = function() {
                    return !1
                }, e.screen.ontouchstart = function(a) {
                    return !1
                }, e.screen.style.webkitTouchCallout = "none", e.hasBeenSetSelectable_bl = !0)
            }, e.setBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
            }, e.removeBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden"
            }, e.getScreen = function() {
                return e.screen
            }, e.setVisible = function(a) {
                e.visible = a, 1 == e.visible ? e.screen.style.visibility = "visible" : e.screen.style.visibility = "hidden"
            }, e.getVisible = function() {
                return e.visible
            }, e.setResizableSizeAfterParent = function() {
                e.screen.style.width = "100%", e.screen.style.height = "100%"
            }, e.getStyle = function() {
                return e.screen.style
            }, e.setOverflow = function(a) {
                e.overflow = a, e.screen.style.overflow = e.overflow
            }, e.setPosition = function(a) {
                e.position = a, e.screen.style.position = e.position
            }, e.setDisplay = function(a) {
                e.display = a, e.screen.style.display = e.display
            }, e.setButtonMode = function(a) {
                e.buttonMode = a, 1 == e.buttonMode ? e.screen.style.cursor = "pointer" : e.screen.style.cursor = "default"
            }, e.setBkColor = function(a) {
                e.screen.style.backgroundColor = a
            }, e.setInnerHTML = function(a) {
                e.innerHTML = a, e.screen.innerHTML = e.innerHTML
            }, e.getInnerHTML = function() {
                return e.innerHTML
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.setAlpha = function(a) {
                e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
            }, e.getAlpha = function() {
                return e.alpha
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.getGlobalX = function() {
                return e.getRect().left
            }, e.getGlobalY = function() {
                return e.getRect().top
            }, e.setX = function(a) {
                e.x = a, e.isMobile_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.left = e.x + "px"
            }, e.getX = function() {
                return e.x
            }, e.setY = function(a) {
                e.y = a, e.isMobile_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.hasTransform3d_bl && !FWDRLR3DUtils.isAndroid ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.top = e.y + "px"
            }, e.getY = function() {
                return e.y
            }, e.setWidth = function(a) {
                e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
            }, e.getWidth = function() {
                return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
            }, e.setHeight = function(a) {
                e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
            }, e.getHeight = function() {
                return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
            }, this.setCSSGradient = function(a, b) {
                FWDRLR3DUtils.isIEAndLessThen10 ? e.setBkColor(a) : (e.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + a + ", " + b + ")", e.screen.style.backgroundImage = "-moz-linear-gradient(top, " + a + ", " + b + ")", e.screen.style.backgroundImage = "-ms-linear-gradient(top, " + a + ", " + b + ")", e.screen.style.backgroundImage = "-o-linear-gradient(top, " + a + ", " + b + ")")
            }, e.disposeImage = function() {
                "img" == e.type && (e.screen.onload = null, e.screen.onerror = null, e.screen.src = "")
            }, e.destroy = function() {
                e.hasBeenSetSelectable_bl && (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null), e.screen.removeAttribute("style"), e.style = null, e.screen = null, e.transform = null, e.position = null, e.overflow = null, e.display = null, e.visible = null, e.buttonMode = null, e.x = null, e.y = null, e.w = null, e.h = null, e.rect = null, e.alpha = null, e.innerHTML = null, e.opacityType = null, e.isHtml5_bl = null, a = null, b = null, c = null, d = null, e.hasTransform3d_bl = null, e.hasTransform2d_bl = null, e = null
            }, e.init()
        };
        a.FWDR3DCarSimpleDisplayObject = b
    }(window), function(a) {
        var b = function(c) {
            var d = this,
                e = b.prototype;
            this.playButtonNImg = c.playButtonNImg, this.playButtonSImg = c.playButtonSImg, this.pauseButtonImg = c.pauseButtonImg, this.timerButtonImg = c.slideshowTimerImg, this.playButtonDO, this.playButtonNDO, this.playButtonSDO, this.pauseButtonDO, this.timerButtonDO, this.timerButtonBgDO, this.timerButtonTextDO, this.delay = c.slideshowDelay, this.autoplay = c.autoplay, this.curSeconds = c.slideshowDelay / 1e3, this.isPlaying = !1, this.isCounting = !1, this.btnWidth = d.playButtonNImg.width, this.btnHeight = d.playButtonNImg.height, this.isMobile = FWDRLR3DUtils.isMobile, this.hasPointerEvent = FWDRLR3DUtils.hasPointerEvent, this.timeoutId, this.timerIntervalId, this.init = function() {
                d.setupMainContainers()
            }, this.setupMainContainers = function() {
                d.setButtonMode(!0), d.setWidth(d.btnWidth), d.setHeight(d.btnHeight), d.setPauseButton(), d.setTimerButton(), d.setPlayButton(), d.isMobile ? d.hasPointerEvent ? (d.screen.addEventListener("MSPointerOver", d.onMouseOver), d.screen.addEventListener("MSPointerOut", d.onMouseOut), d.screen.addEventListener("MSPointerUp", d.onClick)) : d.screen.addEventListener("touchend", d.onClick) : a.addEventListener ? (d.screen.addEventListener("mouseover", d.onMouseOver), d.screen.addEventListener("mouseout", d.onMouseOut), d.screen.addEventListener("click", d.onClick)) : (d.screen.attachEvent("onmouseover", d.onMouseOver), d.screen.attachEvent("onmouseout", d.onMouseOut), d.screen.attachEvent("onclick", d.onClick)), c.showSlideshowButton || d.setVisible(!1)
            }, this.setTimerButton = function() {
                d.timerButtonDO = new FWDRLR3DDisplayObject("div"), d.addChild(d.timerButtonDO), d.timerButtonDO.setWidth(d.btnWidth), d.timerButtonDO.setHeight(d.btnHeight), d.timerButtonBgDO = new FWDR3DCarSimpleDisplayObject("img"), d.timerButtonBgDO.setScreen(d.timerButtonImg), d.timerButtonDO.addChild(d.timerButtonBgDO), d.timerButtonTextDO = new FWDRLR3DDisplayObject("div"), d.timerButtonDO.addChild(d.timerButtonTextDO), d.timerButtonTextDO.getStyle().fontSmoothing = "antialiased", d.timerButtonTextDO.getStyle().webkitFontSmoothing = "antialiased", d.timerButtonTextDO.getStyle().textRendering = "optimizeLegibility", d.timerButtonTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif", d.timerButtonTextDO.getStyle().fontSize = "10px", d.timerButtonTextDO.getStyle().color = c.slideshowTimerColor, d.curSeconds < 10 ? d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds) : d.timerButtonTextDO.setInnerHTML(d.curSeconds), d.setTextPositionId = setTimeout(d.setTextPosition, 10)
            }, this.setTextPosition = function() {
                d.timerButtonTextDO.setX(Math.floor((d.btnWidth - d.timerButtonTextDO.getWidth()) / 2)), d.timerButtonTextDO.setY(Math.floor((d.btnHeight - d.timerButtonTextDO.getHeight()) / 2))
            }, this.setPauseButton = function() {
                d.pauseButtonDO = new FWDR3DCarSimpleDisplayObject("img"), d.pauseButtonDO.setScreen(d.pauseButtonImg), d.addChild(d.pauseButtonDO), d.pauseButtonDO.setWidth(d.btnWidth), d.pauseButtonDO.setHeight(d.btnHeight)
            }, this.setPlayButton = function() {
                d.playButtonDO = new FWDRLR3DDisplayObject("div"), d.addChild(d.playButtonDO), d.playButtonSDO = new FWDR3DCarSimpleDisplayObject("img"), d.playButtonSDO.setScreen(d.playButtonSImg), d.playButtonDO.addChild(d.playButtonSDO), d.playButtonNDO = new FWDR3DCarSimpleDisplayObject("img"), d.playButtonNDO.setScreen(d.playButtonNImg), d.playButtonDO.addChild(d.playButtonNDO), d.playButtonDO.setWidth(d.btnWidth), d.playButtonDO.setHeight(d.btnHeight)
            }, this.onMouseOver = function() {
                d.isPlaying ? FWDR3DCarModTweenMax.to(d.timerButtonDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }) : FWDR3DCarModTweenMax.to(d.playButtonNDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onMouseOut = function() {
                d.isPlaying ? FWDR3DCarModTweenMax.to(d.timerButtonDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }) : FWDR3DCarModTweenMax.to(d.playButtonNDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.onClick = function(a) {
                d.isPlaying ? (d.stop(), d.dispatchEvent(b.PAUSE_CLICK)) : (d.start(), d.dispatchEvent(b.PLAY_CLICK)), d.isMobile || d.onMouseOver()
            }, this.start = function() {
                d.isPlaying = !0, d.isCounting = !0, d.playButtonDO.setAlpha(0), d.curSeconds = d.delay / 1e3, clearTimeout(d.timeoutId), clearInterval(d.timerIntervalId), d.timeoutId = setTimeout(d.onTimeHandler, d.delay), d.timerIntervalId = setInterval(d.onTickHandler, 1e3), d.curSeconds < 10 ? d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds) : d.timerButtonTextDO.setInnerHTML(d.curSeconds)
            }, this.stop = function() {
                d.isPlaying = !1, d.isCounting = !1, d.playButtonDO.setAlpha(1), clearTimeout(d.timeoutId), clearInterval(d.timerIntervalId)
            }, this.resetCounter = function() {
                d.isCounting = !1, clearTimeout(d.timeoutId), clearInterval(d.timerIntervalId), d.curSeconds = d.delay / 1e3, d.curSeconds < 10 ? d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds) : d.timerButtonTextDO.setInnerHTML(d.curSeconds)
            }, this.onTimeHandler = function() {
                d.isCounting = !1, clearTimeout(d.timeoutId), clearInterval(d.timerIntervalId), d.onTickHandler(), d.dispatchEvent(b.TIME)
            }, this.onTickHandler = function() {
                d.curSeconds--, d.curSeconds < 10 ? d.timerButtonTextDO.setInnerHTML("0" + d.curSeconds) : d.timerButtonTextDO.setInnerHTML(d.curSeconds)
            }, this.destroy = function() {
                clearTimeout(d.timeoutId), clearTimeout(d.setTextPositionId), clearInterval(d.timerIntervalId), d.isMobile ? d.hasPointerEvent ? (d.screen.removeEventListener("MSPointerOver", d.onMouseOver), d.screen.removeEventListener("MSPointerOut", d.onMouseOut), d.screen.removeEventListener("MSPointerUp", d.onClick)) : d.screen.removeEventListener("touchend", d.onClick) : a.addEventListener ? (d.screen.removeEventListener("mouseover", d.onMouseOver), d.screen.removeEventListener("mouseout", d.onMouseOut), d.screen.removeEventListener("click", d.onClick)) : (d.screen.detachEvent("onmouseover", d.onMouseOver), d.screen.detachEvent("onmouseout", d.onMouseOut), d.screen.detachEvent("onclick", d.onClick)), FWDR3DCarModTweenMax.killTweensOf(d.timerButtonDO), FWDR3DCarModTweenMax.killTweensOf(d.playButtonNDO), d.playButtonDO.destroy(), d.playButtonNDO.destroy(), d.playButtonSDO.destroy(), d.pauseButtonDO.destroy(), d.timerButtonDO.destroy(), d.timerButtonBgDO.destroy(), d.timerButtonTextDO.destroy(), e.destroy(), d = null, e = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.PLAY_CLICK = "onPlayClick", b.PAUSE_CLICK = "onPauseClick", b.TIME = "onTime", b.prototype = null, a.FWDR3DCarSlideshowButton = b
    }(window), function(a) {
        var b = function(a, c, d, e, f) {
            var g = this,
                h = b.prototype;
            this.imageSource_img = a, this.image_do = null, this.tweenObj = {
                currentPos: 0
            }, this.segmentWidth = c, this.segmentHeight = d, this.totalSegments = e, this.duration = f / 1e3, this.delayTimerId_int, this.init = function() {
                this.setWidth(this.segmentWidth), this.setHeight(this.segmentHeight), this.image_do = new FWDRLR3DDisplayObject("img"), this.image_do.setScreen(this.imageSource_img), this.addChild(this.image_do), this.onUpdateHandler(), this.hide(!1)
            }, this.animIn = function() {
                FWDR3DCarModTweenMax.killTweensOf(this.tweenObj), this.currentPos = 0, FWDR3DCarModTweenMax.to(this.tweenObj, this.duration, {
                    currentPos: 1,
                    ease: Linear.easeNone,
                    onUpdate: this.onUpdateHandler
                })
            }, this.animOut = function() {
                FWDR3DCarModTweenMax.killTweensOf(this.tweenObj), FWDR3DCarModTweenMax.to(this.tweenObj, .8, {
                    currentPos: 0,
                    onUpdate: this.onUpdateHandler
                })
            }, this.onUpdateHandler = function() {
                var a = Math.round(g.tweenObj.currentPos / 1 * (g.totalSegments - 1)) * g.segmentWidth;
                g.image_do.setX(-a)
            }, this.show = function() {
                this.setVisible(!0), "opacity" == this.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(this.image_do), FWDR3DCarModTweenMax.to(this.image_do, 1, {
                    alpha: 1
                })) : this.setWidth(this.segmentWidth)
            }, this.hide = function(a) {
                a ? "opacity" == this.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(this.image_do), FWDR3DCarModTweenMax.to(this.image_do, 1, {
                    alpha: 0
                })) : this.setWidth(0) : "opacity" == this.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(this.image_do), this.setVisible(!1), this.image_do.setAlpha(0)) : this.setWidth(0)
            }, this.destroy = function() {
                FWDR3DCarModTweenMax.killTweensOf(this), FWDR3DCarModTweenMax.killTweensOf(this.tweenObj), FWDR3DCarModTweenMax.killTweensOf(this.image_do), this.image_do.destroy(), this.imageSource_img = null, this.image_do = null, this.tweenObj = null, a = null, this.setInnerHTML(""), h.destroy(), g = null, h = null, b.prototype = null
            }, this.init()
        };
        b.HIDE_COMPLETE, b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.prototype = null, a.FWDR3DCarSlideShowPreloader = b
    }(window), function(a) {
        var b = function(a, c, d) {
            var e = this,
                f = b.prototype;
            this.id = a, this.borderSize = c.thumbBorderSize, this.backgroundColor = c.thumbBackgroundColor, this.borderColor1 = c.thumbBorderColor1, this.borderColor2 = c.thumbBorderColor2, this.mainDO = null, this.borderDO = null, this.bgDO = null, this.imageHolderDO = null, this.imageDO = null, this.htmlContentDO = null, this.reflCanvasDO = null, this.gradientDO = null, this.gradientLeftDO = null, this.gradientRightDO = null, this.textHolderDO = null, this.textGradientDO = null, this.textDO = null, this.thumbWidth = c.thumbWidth, this.thumbHeight = c.thumbHeight, this.mouseX = 0, this.mouseY = 0, this.pos, this.thumbScale = 1, this.showBoxShadow = c.showBoxShadow, this.curDataListAr, this.isOver = !1, this.hasText = !1, this.isMobile = FWDRLR3DUtils.isMobile, this.hasPointerEvent = FWDRLR3DUtils.hasPointerEvent, this.init = function() {
                e.setupScreen()
            }, this.updateButtonMode = function() {
                e.isMobile || "none" != e.curDataListAr[e.id].type_str && !d.useDrag ? e.mainDO.setButtonMode(!0) : e.mainDO.getStyle().cursor = null
            }, this.setupScreen = function() {
                e.mainDO = new FWDRLR3DDisplayObject("div"), e.addChild(e.mainDO), e.mainDO.setWidth(e.thumbWidth), e.mainDO.setHeight(e.thumbHeight), e.setWidth(e.thumbWidth), e.setHeight(e.thumbHeight), !c.showThumbnailsHtmlContent && c.transparentImages || (e.borderDO = new FWDR3DCarSimpleDisplayObject("div"), e.bgDO = new FWDR3DCarSimpleDisplayObject("div"), e.mainDO.addChild(e.borderDO), e.mainDO.addChild(e.bgDO), e.borderDO.setWidth(e.thumbWidth), e.borderDO.setHeight(e.thumbHeight), e.bgDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.bgDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.bgDO.setX(e.borderSize), e.bgDO.setY(e.borderSize), e.borderDO.setCSSGradient(e.borderColor1, e.borderColor2), e.bgDO.setBkColor(e.backgroundColor), FWDRLR3DUtils.isAndroid && (e.borderDO.setBackfaceVisibility(), e.bgDO.setBackfaceVisibility())), e.imageHolderDO = new FWDRLR3DDisplayObject("div"), e.mainDO.addChild(e.imageHolderDO), e.curDataListAr = d.curDataListAr, e.updateButtonMode(), e.isMobile || FWDRLR3DUtils.isIEAndLessThen9 || !c.showGradient || e.setupGradient(), FWDRLR3DUtils.isAndroid && (e.setBackfaceVisibility(), e.mainDO.setBackfaceVisibility(), e.imageHolderDO.setBackfaceVisibility()), e.showBoxShadow && (e.mainDO.screen.style.boxShadow = c.thumbBoxShadowCss), e.isMobile ? e.hasPointerEvent ? e.mainDO.screen.addEventListener("pointerup", e.onMouseTouchHandler) : e.mainDO.screen.addEventListener("touchend", e.onMouseTouchHandler) : e.screen.addEventListener ? e.mainDO.screen.addEventListener("click", e.onMouseClickHandler) : e.mainDO.screen.attachEvent("onclick", e.onMouseClickHandler)
            }, this.addReflection = function() {
                if (e.imageDO && !e.isMobile && !FWDRLR3DUtils.isIEAndLessThen9) {
                    var a = e.thumbWidth - 2 * e.borderSize,
                        b = e.thumbHeight - 2 * e.borderSize;
                    e.reflCanvasDO = new FWDR3DCarSimpleDisplayObject("canvas"), e.addChild(e.reflCanvasDO), e.reflCanvasDO.screen.width = e.thumbWidth, e.reflCanvasDO.screen.height = d.reflHeight;
                    var f = e.reflCanvasDO.screen.getContext("2d");
                    f.save(), f.translate(0, e.thumbHeight), f.scale(1, -1), !c.showThumbnailsHtmlContent && c.transparentImages || (f.fillStyle = e.borderColor1, f.fillRect(0, 0, e.thumbWidth, e.thumbHeight)), f.drawImage(e.imageDO.screen, e.borderSize, e.borderSize, a, b), f.restore(), f.globalCompositeOperation = "destination-out";
                    var g = f.createLinearGradient(0, 0, 0, d.reflHeight);
                    g.addColorStop(1, "rgba(255, 255, 255, 1.0)"), g.addColorStop(0, "rgba(255, 255, 255, " + (1 - d.reflAlpha) + ")"), f.fillStyle = g, f.fillRect(0, 0, e.thumbWidth, d.reflHeight + 2), e.setWidth(e.thumbWidth), e.reflCanvasDO.setY(e.thumbHeight + d.reflDist)
                }
            }, this.addImage = function(a) {
                e.imageDO = new FWDR3DCarSimpleDisplayObject("img"), e.imageDO.setScreen(a), e.imageHolderDO.addChild(e.imageDO), FWDRLR3DUtils.isAndroid, e.imageDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.imageDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.imageHolderDO.setX(e.borderSize), e.imageHolderDO.setY(e.borderSize), e.imageHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.imageHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize), d.showRefl && e.addReflection()
            }, this.addHtmlContent = function() {
                e.htmlContentDO = new FWDR3DCarSimpleDisplayObject("div"), e.htmlContentDO.setInnerHTML(e.curDataListAr[e.id].htmlContent), e.imageHolderDO.addChild(e.htmlContentDO), FWDRLR3DUtils.isAndroid, e.htmlContentDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.htmlContentDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.imageHolderDO.setX(e.borderSize), e.imageHolderDO.setY(e.borderSize), e.imageHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.imageHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize)
            }, this.setupGradient = function() {
                e.gradientDO = new FWDRLR3DDisplayObject("div"), e.mainDO.addChild(e.gradientDO), e.gradientDO.setWidth(e.thumbWidth), e.gradientDO.setHeight(e.thumbHeight), e.gradientLeftDO = new FWDR3DCarSimpleDisplayObject("img"), e.gradientDO.addChild(e.gradientLeftDO), e.gradientLeftDO.setWidth(e.thumbWidth), e.gradientLeftDO.setHeight(e.thumbHeight), e.gradientLeftDO.screen.src = c.thumbGradientLeftPath, e.gradientRightDO = new FWDR3DCarSimpleDisplayObject("img"), e.gradientDO.addChild(e.gradientRightDO), e.gradientRightDO.setWidth(e.thumbWidth), e.gradientRightDO.setHeight(e.thumbHeight), e.gradientRightDO.screen.src = c.thumbGradientRightPath, e.gradientLeftDO.setAlpha(0), e.gradientRightDO.setAlpha(0)
            }, this.setGradient = function(a) {
                if (e.pos != a && (e.pos = a, !e.isMobile && !FWDRLR3DUtils.isIEAndLessThen9 && c.showGradient)) switch (e.pos) {
                    case 0:
                        FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                            alpha: 0
                        }), FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                            alpha: 0,
                            onComplete: e.setGradPos
                        });
                        break;
                    case 1:
                        e.gradientDO.setY(0), FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                            alpha: 0
                        }), FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                            alpha: 1
                        });
                        break;
                    case -1:
                        e.gradientDO.setY(0), FWDR3DCarModTweenMax.to(e.gradientLeftDO, .8, {
                            alpha: 1
                        }), FWDR3DCarModTweenMax.to(e.gradientRightDO, .8, {
                            alpha: 0
                        })
                }
            }, this.setGradPos = function() {
                e.gradientDO.setY(2e3)
            }, this.addText = function(a, b, c) {
                e.curDataListAr[e.id].emptyText || (e.textHolderDO = a, e.textGradientDO = b, e.textDO = c, e.textHolderDO.setX(e.borderSize), e.textHolderDO.setY(e.borderSize), e.mainDO.addChild(e.textHolderDO), e.textDO.setInnerHTML(e.curDataListAr[e.id].thumbText), e.textTitleOffset = e.curDataListAr[e.id].textTitleOffset, e.textDescriptionOffsetTop = e.curDataListAr[e.id].textDescriptionOffsetTop, e.textDescriptionOffsetBottom = e.curDataListAr[e.id].textDescriptionOffsetBottom, e.textGradientDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset), e.textDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop), e.textHolderDO.setAlpha(0), e.setTextHeightId = setTimeout(e.setTextHeight, 10))
            }, this.setTextHeight = function() {
                e.textHolderDO && (e.textHeight = e.textDO.getHeight(), FWDR3DCarModTweenMax.to(e.textHolderDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), e.hasText = !0, e.checkThumbOver())
            }, this.removeText = function() {
                e.textHolderDO && FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                    alpha: 0,
                    ease: Expo.easeOut,
                    onComplete: e.removeTextFinish
                })
            }, this.removeTextFinish = function() {
                FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO), FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO), FWDR3DCarModTweenMax.killTweensOf(e.textDO), e.mainDO.removeChild(e.textHolderDO), e.textHolderDO = null, e.textGradientDO = null, e.textDO = null, e.isOver = !1, e.hasText = !1
            }, this.checkThumbOver = function() {
                e.hasText && (d.thumbMouseX >= 0 && d.thumbMouseX <= e.thumbWidth && d.thumbMouseY >= 0 && d.thumbMouseY <= e.thumbHeight ? e.onThumbOverHandler() : e.onThumbOutHandler())
            }, this.onThumbOverHandler = function() {
                e.isOver || (e.isOver = !0, FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textDescriptionOffsetTop - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                }))
            }, this.onThumbOutHandler = function() {
                e.isOver && (e.isOver = !1, FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                }))
            }, this.showThumb3D = function() {
                var a = e.thumbWidth - 2 * e.borderSize,
                    b = e.thumbHeight - 2 * e.borderSize;
                e.imageHolderDO.setX(parseInt(e.thumbWidth / 2)), e.imageHolderDO.setY(parseInt(e.thumbHeight / 2)), e.imageHolderDO.setWidth(0), e.imageHolderDO.setHeight(0), FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                    x: e.borderSize,
                    y: e.borderSize,
                    w: a,
                    h: b,
                    ease: Expo.easeInOut
                }), c.showThumbnailsHtmlContent ? (e.htmlContentDO.setWidth(a), e.htmlContentDO.setHeight(b), e.htmlContentDO.setX(-parseInt(a / 2)), e.htmlContentDO.setY(-parseInt(b / 2)), FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                })) : (e.imageDO.setWidth(a), e.imageDO.setHeight(b), e.imageDO.setX(-parseInt(a / 2)), e.imageDO.setY(-parseInt(b / 2)), FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                }), e.reflCanvasDO && (e.reflCanvasDO.setAlpha(0), FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                    alpha: 1,
                    ease: Expo.easeInOut
                })))
            }, this.showThumb2D = function() {
                if (FWDRLR3DUtils.hasTransform2d) {
                    e.setScale2(e.thumbScale);
                    var f = e.thumbWidth - 2 * e.borderSize,
                        g = e.thumbHeight - 2 * e.borderSize;
                    e.imageHolderDO.setX(parseInt(e.thumbWidth / 2)), e.imageHolderDO.setY(parseInt(e.thumbHeight / 2)), e.imageHolderDO.setWidth(0), e.imageHolderDO.setHeight(0), FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                        x: e.borderSize,
                        y: e.borderSize,
                        w: f,
                        h: g,
                        ease: Expo.easeInOut
                    }), c.showThumbnailsHtmlContent ? e.htmlContentDO && (e.htmlContentDO.setWidth(f), e.htmlContentDO.setHeight(g), e.htmlContentDO.setX(-parseInt(f / 2)), e.htmlContentDO.setY(-parseInt(g / 2)), FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    })) : e.imageDO && (e.imageDO.setWidth(f), e.imageDO.setHeight(g), e.imageDO.setX(-parseInt(f / 2)), e.imageDO.setY(-parseInt(g / 2)), FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    }), e.reflCanvasDO && FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    }))
                } else {
                    var a = Math.floor(e.thumbWidth * e.thumbScale),
                        b = Math.floor(e.thumbHeight * e.thumbScale),
                        d = Math.floor(e.borderSize * e.thumbScale);
                    e.borderSize > 0 && d < 1 && (d = 1);
                    var f = a - 2 * d,
                        g = b - 2 * d;
                    e.imageHolderDO.setX(parseInt(a / 2)), e.imageHolderDO.setY(parseInt(b / 2)), e.imageHolderDO.setWidth(0), e.imageHolderDO.setHeight(0), FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                        x: d,
                        y: d,
                        w: f,
                        h: g,
                        ease: Expo.easeInOut
                    }), c.showThumbnailsHtmlContent ? e.htmlContentDO && (e.htmlContentDO.setWidth(f), e.htmlContentDO.setHeight(g), e.htmlContentDO.setX(-parseInt(f / 2)), e.htmlContentDO.setY(-parseInt(g / 2)), FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    })) : e.imageDO && (e.imageDO.setWidth(f), e.imageDO.setHeight(g), e.imageDO.setX(-parseInt(f / 2)), e.imageDO.setY(-parseInt(g / 2)), FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    }), e.reflCanvasDO && FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    }))
                }
            }, this.showThumbIntro2D = function(a, b) {
                if (e.thumbScale = a, FWDRLR3DUtils.hasTransform2d) e.setScale2(e.thumbScale), e.setX(-e.thumbWidth / 2), e.setY(-e.thumbHeight / 2), FWDR3DCarModTweenMax.to(e, .8, {
                    x: e.newX,
                    scale: e.thumbScale,
                    delay: b,
                    ease: Quart.easeOut,
                    onComplete: e.setThumbVisibility
                });
                else {
                    var c = Math.floor(e.thumbWidth * a),
                        d = Math.floor(e.thumbHeight * a),
                        f = Math.floor(e.borderSize * a);
                    e.borderSize > 0 && f < 1 && (f = 1);
                    var g = c - 2 * f,
                        h = d - 2 * f;
                    e.setWidth(c), e.setHeight(d), e.mainDO.setWidth(c), e.mainDO.setHeight(d), e.borderDO && (e.borderDO.setWidth(c), e.borderDO.setHeight(d)), e.bgDO && (e.bgDO.setX(f), e.bgDO.setY(f), e.bgDO.setWidth(g), e.bgDO.setHeight(h)), e.setX(-e.thumbWidth / 2), e.setY(-e.thumbHeight / 2), FWDR3DCarModTweenMax.to(e, .8, {
                        x: Math.floor(e.newX + (e.thumbWidth - c) / 2),
                        y: -Math.floor(d / 2),
                        delay: b,
                        ease: Expo.easeOut
                    })
                }
            }, this.setScale = function(a) {
                if (e.thumbScale = a, e.setVisible(!0), FWDRLR3DUtils.hasTransform2d) FWDR3DCarModTweenMax.to(e, .8, {
                    x: Math.floor(e.newX),
                    scale: e.thumbScale,
                    ease: Quart.easeOut,
                    onComplete: e.setThumbVisibility
                });
                else {
                    var b = Math.floor(e.thumbWidth * a),
                        d = Math.floor(e.thumbHeight * a),
                        f = Math.floor(e.borderSize * a);
                    e.borderSize > 0 && f < 1 && (f = 1), e.borderDO && FWDR3DCarModTweenMax.to(e.borderDO, .8, {
                        w: b,
                        h: d,
                        ease: Quart.easeOut
                    }), e.bgDO && FWDR3DCarModTweenMax.to(e.bgDO, .8, {
                        x: f,
                        y: f,
                        w: b - 2 * f,
                        h: d - 2 * f,
                        ease: Quart.easeOut
                    }), FWDR3DCarModTweenMax.to(e.mainDO, .8, {
                        w: b,
                        h: d,
                        ease: Quart.easeOut
                    }), FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                        x: f,
                        y: f,
                        w: b - 2 * f,
                        h: d - 2 * f,
                        ease: Quart.easeOut
                    }), FWDR3DCarModTweenMax.to(e, .8, {
                        x: Math.floor(e.newX + (e.thumbWidth - b) / 2),
                        y: -Math.floor(d / 2),
                        w: b,
                        h: d,
                        ease: Quart.easeOut
                    }), c.showThumbnailsHtmlContent ? e.htmlContentDO && FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                        w: b - 2 * f,
                        h: d - 2 * f,
                        ease: Quart.easeOut
                    }) : e.imageDO && FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                        w: b - 2 * f,
                        h: d - 2 * f,
                        ease: Quart.easeOut
                    })
                }
            }, this.setThumbVisibility = function() {
                0 == e.getZIndex() && e.setVisible(!1)
            }, this.update = function() {
                d.showRefl ? e.reflCanvasDO ? (e.reflCanvasDO.setAlpha(1), e.reflCanvasDO.setY(e.thumbHeight + d.reflDist)) : e.addReflection() : e.reflCanvasDO && e.reflCanvasDO.setAlpha(0)
            }, this.hide = function(a) {
                var b = e.thumbWidth - 2 * e.borderSize,
                    d = e.thumbHeight - 2 * e.borderSize;
                FWDR3DCarModTweenMax.to(e.imageHolderDO, .8, {
                    x: parseInt(e.thumbWidth / 2),
                    y: parseInt(e.thumbHeight / 2),
                    w: 0,
                    h: 0,
                    delay: a,
                    ease: Expo.easeInOut
                }), c.showThumbnailsHtmlContent ? e.htmlContentDO && FWDR3DCarModTweenMax.to(e.htmlContentDO, .8, {
                    x: -parseInt(b / 2),
                    y: -parseInt(d / 2),
                    delay: a,
                    ease: Expo.easeInOut
                }) : e.imageDO && (FWDR3DCarModTweenMax.to(e.imageDO, .8, {
                    x: -parseInt(b / 2),
                    y: -parseInt(d / 2),
                    delay: a,
                    ease: Expo.easeInOut
                }), e.reflCanvasDO && FWDR3DCarModTweenMax.to(e.reflCanvasDO, .8, {
                    alpha: 0,
                    delay: a,
                    ease: Expo.easeInOut
                }))
            }, this.onMouseClickHandler = function() {
                e.dispatchEvent(b.CLICK, {
                    id: e.id
                })
            }, this.onMouseTouchHandler = function(a) {
                a.preventDefault && a.preventDefault(), e.dispatchEvent(b.CLICK, {
                    id: e.id
                })
            }, this.destroy = function() {
                FWDR3DCarModTweenMax.killTweensOf(e), FWDR3DCarModTweenMax.killTweensOf(e.mainDO), FWDR3DCarModTweenMax.killTweensOf(e.imageHolderDO), e.isMobile ? e.hasPointerEvent ? e.mainDO.screen.removeEventListener("pointerup", e.onMouseTouchHandler) : e.mainDO.screen.removeEventListener("touchend", e.onMouseTouchHandler) : e.screen.addEventListener ? e.mainDO.screen.removeEventListener("click", e.onMouseClickHandler) : e.mainDO.screen.detachEvent("onclick", e.onMouseClickHandler), clearTimeout(e.setTextHeightId), e.imageDO && (FWDR3DCarModTweenMax.killTweensOf(e.imageDO),
                    e.imageDO.disposeImage(), e.imageDO.destroy()), e.htmlContentDO && (FWDR3DCarModTweenMax.killTweensOf(e.htmlContentDO), e.htmlContentDO.destroy(), e.htmlContentDO = null), e.bgDO && (FWDR3DCarModTweenMax.killTweensOf(e.bgDO), e.bgDO.destroy(), e.bgDO = null), e.borderDO && (FWDR3DCarModTweenMax.killTweensOf(e.borderDO), e.borderDO.destroy(), e.borderDO = null), e.htmlContentDO && (FWDR3DCarModTweenMax.killTweensOf(e.htmlContentDO), e.htmlContentDO.destroy()), e.gradientLeftDO && (FWDR3DCarModTweenMax.killTweensOf(e.gradientLeftDO), e.gradientLeftDO.destroy()), e.gradientRightDO && (FWDR3DCarModTweenMax.killTweensOf(e.gradientRightDO), e.gradientRightDO.destroy()), e.textGradientDO && (FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO), e.textGradientDO = null), e.textDO && (FWDR3DCarModTweenMax.killTweensOf(e.textDO), e.textDO = null), e.textHolderDO && (FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO), e.textHolderDO = null), e.imageHolderDO.destroy(), e.mainDO.destroy(), e.imageHolderDO = null, e.imageDO = null, e.htmlContentDO = null, e.mainDO = null, e.borderDO = null, e.bgDO = null, e.imageHolderDO = null, e.imageDO = null, e.htmlContentDO = null, e.gradientDO = null, e.gradientLeftDO = null, e.gradientRightDO = null, e.textHolderDO = null, e.textGradientDO = null, e.textDO = null, e.id = null, e.data = null, e.parent = null, e.backgroundColor = null, e.borderColor = null, e.screen.innerHTML = "", f.destroy(), f = null, e = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDR3DCarDisplayObject3D("div", "absolute", "visible")
        }, b.CLICK = "click", b.prototype = null, a.FWDR3DCarThumb = b
    }(window), function(a) {
        var b = function(c, d) {
            var e = this,
                f = b.prototype;
            this.data = c, this.parent = d, this.stageWidth = d.stageWidth, this.stageHeight = d.stageHeight, this.thumbsHolderDO, this.totalThumbs, this.thumbsAr = [], this.dataListId = c.startAtCategory, this.curDataListAr, this.nrThumbsToDisplay = c.nrThumbsToDisplay, this.dragCurId, this.prevCurId, this.curId, this.thumbWidth = c.thumbWidth, this.thumbHeight = c.thumbHeight, this.borderSize = c.thumbBorderSize, this.perspective = e.thumbWidth, this.sizeRatio = e.thumbWidth / 400, this.countLoadedThumbsLeft, this.countLoadedThumbsRight, this.controlsDO, this.prevButtonDO, this.nextButtonDO, this.scrollbarDO, this.slideshowButtonDO, this.showSlideshowButton = e.data.showSlideshowButton || e.data.autoplay, this.controlsHeight = e.data.nextButtonNImg.height, this.showText = e.data.showText, this.textDO, this.textHolderDO, this.textGradientDO, this.thumbOverDO, this.showRefl = c.showRefl, this.reflHeight = c.reflHeight, this.reflDist = c.reflDist, this.reflAlpha = c.reflAlpha, this.bulletsOffset = c.bulletsOffset, this.isThumbOver = !1, this.hasThumbText = !1, this.introFinished = !1, this.isPlaying = !1, this.disableThumbClick = !1, this.isTextSet = !1, this.allowToSwitchCat = !1, this.grabIconPath_str = c.grabIconPath_str, this.handIconPath_str = c.handIconPath_str, this.hasPointerEvent = FWDRLR3DUtils.hasPointerEvent, this.isMobile = FWDRLR3DUtils.isMobile, this.loadWithDelayIdLeft, this.loadWithDelayIdRight, this.slideshowTimeoutId, this.textTimeoutId, this.zSortingId, this.hideThumbsFinishedId, this.loadHtmlContentsId, this.loadImagesId, this.setTextHeightId, this.setIntroFinishedId, this.showControlsId, this.areLargeNextAndPrevButtonsShowed = !0, this.largeNextAndPrevButtonsOffest = c.largeNextAndPrevButtonsOffest, this.showLargeNextAndPrevButtons_bl = c.showLargeNextAndPrevButtons, this.useDrag = c.useDragAndSwipe_bl, this.init = function() {
                e.thumbsHolderDO = new FWDR3DCarDisplayObject3D("div", "absolute", "visible"), e.addChild(e.thumbsHolderDO), e.thumbsHolderDO.setZ(1e5), e.thumbsHolderDO.setPerspective(e.perspective), e.thumbsHolderDO.setX(Math.floor(e.stageWidth / 2)), e.showSlideshowButton || e.showNextButton || e.showNextButton || e.showScrollbar ? e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2 - e.data.prevButtonNImg.height / 2)) : e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2)), (!e.isMobile && !FWDRLR3DUtils.isSafari || FWDRLR3DUtils.isAndroidAndWebkit) && e.thumbsHolderDO.setPreserve3D(), e.isMobile || (e.screen.addEventListener ? a.addEventListener("mousemove", e.onThumbMove) : document.attachEvent("onmousemove", e.onThumbMove)), e.hasPointerEvent && a.addEventListener("pointermove", e.onThumbMove), e.showScrollbar = c.showScrollbar, e.showNextButton = c.showNextButton, e.showPrevButton = c.showPrevButton, e.isMobile && (c.disableScrollbarOnMobile && (e.showScrollbar = !1), c.disableNextAndPrevButtonsOnMobile && (e.showNextButton = !1, e.showPrevButton = !1)), e.showText && (e.setupText(), e.isMobile && e.setupThumbOver()), e.showCurrentCat(-1), e.setupControls(), e.isMobile || (e.addDragScreen(), e.setupDisableDragScreen())
            }, this.addDragScreen = function() {
                e.useDrag && (e.getStyle().cursor = "url(" + e.handIconPath_str + "), default", d.mainDO.getStyle().cursor = "url(" + e.handIconPath_str + "), default")
            }, this.removeDragScreen = function() {
                e.getStyle().cursor = null, d.mainDO.getStyle().cursor = null
            }, this.setupDisableDragScreen = function() {
                this.dsb_do || (this.dsb_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIE && (this.dsb_do.setBkColor("#00FF00"), this.dsb_do.setAlpha(1e-6)), d.mainDO.addChild(e.dsb_do), e.dsb_do.getStyle().cursor = "url(" + e.grabIconPath_str + "), default"), this.hideDsb()
            }, this.showDsb = function() {
                e.isDsbShowed_bl || (clearTimeout(e.hideDSBId_to), e.isDsbShowed_bl = !0, this.dsb_do.setVisible(!0), this.dsb_do.setWidth(e.stageWidth), this.dsb_do.setHeight(e.stageHeight))
            }, this.hideDsb = function() {
                e.isDsbShowed_bl && (clearTimeout(e.hideDSBId_to), e.isDsbShowed_bl = !1, e.dsb_do.setVisible(!1), e.dsb_do.setWidth(0), e.dsb_do.setHeight(0))
            }, this.onThumbMove = function(a) {
                if (!e.disableThumbClick && !d.isLigtboxOpened && e.allowToSwitchCat && e.textHolderDO && !e.disableThumbClick) {
                    var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                    e.thumbMouseX = b.screenX - d.rect.left - (e.stageWidth - e.thumbWidth) / 2, e.thumbMouseY = b.screenY - d.rect.top - (e.stageHeight - c.prevButtonNImg.height - e.thumbHeight) / 2, e.isTextSet && (e.isMobile ? e.checkThumbOver() : e.thumbsAr[e.curId].checkThumbOver())
                }
            }, this.showCurrentCat = function(a) {
                if (a != e.dataListId && a >= 0) return e.data.showBulletsNavigation && e.bulletsNavigation && e.bulletsNavigation.hideBullets(), e.allowToSwitchCat = !1, e.hideCurrentCat(), void(e.dataListId = a);
                if (e.thumbsAr = [], e.curDataListAr = e.data.dataListAr[e.dataListId], e.totalThumbs = e.curDataListAr.length, 0 == e.totalThumbs) {
                    var d = "This category doesn't contain any thumbnails!";
                    return void e.dispatchEvent(b.LOAD_ERROR, {
                        text: d
                    })
                }
                switch (e.isMobile && (e.totalThumbs = Math.min(e.totalThumbs, c.maxNumberOfThumbsOnMobile)), e.data.carouselStartPosition) {
                    case "left":
                        e.curId = 0;
                        break;
                    case "right":
                        e.curId = e.totalThumbs - 1;
                        break;
                    default:
                        e.curId = Math.floor((e.totalThumbs - 1) / 2)
                }
                e.showScrollbar && e.scrollbarDO && (e.scrollbarDO.totalItems = e.totalThumbs, e.scrollbarDO.curItemId = e.curId, e.scrollbarDO.gotoItem2()), e.setupThumbs(), e.prevCurId = e.curId, e.data.showBulletsNavigation && e.bulletsNavigation && (e.bulletsNavigation.totalItems = e.totalThumbs, e.bulletsNavigation.curItemId = e.curId, e.bulletsNavigation.createBullets(), setTimeout(function() {
                    e.positionControls()
                }, 400)), e.startIntro()
            }, this.hideCurrentCat = function() {
                clearTimeout(e.loadWithDelayIdLeft), clearTimeout(e.loadWithDelayIdRight), clearTimeout(e.textTimeoutId), clearInterval(e.zSortingId), clearTimeout(e.hideThumbsFinishedId), clearTimeout(e.loadHtmlContentsId), clearTimeout(e.loadImagesId), clearTimeout(e.setTextHeightId), clearTimeout(e.setIntroFinishedId), clearTimeout(e.showControlsId), e.stopSlideshow(), e.disableThumbClick = !0, e.image && (e.image.onload = null, e.image.onerror = null), e.imageLeft && (e.imageLeft.onload = null, e.imageLeft.onerror = null), e.imageRight && (e.imageRight.onload = null, e.imageRight.onerror = null), e.hideThumbs()
            }, this.hideThumbs = function() {
                for (var a, b = -e.thumbWidth / 2, c = 0; c < e.totalThumbs; c++) thumb = e.thumbsAr[c], c == e.curId ? e.hideThumbsFinishedId = setTimeout(e.hideThumbsFinished, 1700) : Math.abs(c - e.curId) <= e.nrThumbsToDisplay ? (a = 300 * (e.nrThumbsToDisplay - Math.abs(c - e.curId) + 1), FWDR3DCarModTweenMax.to(thumb, .5, {
                    x: Math.floor(b),
                    delay: a / 1e3,
                    ease: Expo.easeIn
                }), thumb.hide((a - 250) / 1e3)) : thumb.setX(b)
            }, this.hideThumbsFinished = function() {
                for (var a = 0; a < e.totalThumbs; a++) thumb = e.thumbsAr[a], a == e.curId ? (thumb.hide(0), FWDR3DCarModTweenMax.to(thumb, .6, {
                    alpha: 0,
                    delay: .2,
                    onComplete: e.allThumbsAreTweened
                }), e.isMobile && e.textHolderDO && (FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                    alpha: 0,
                    delay: .2,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textGradientDO, .6, {
                    alpha: 0,
                    delay: .2,
                    ease: Expo.easeOut
                }))) : thumb.setAlpha(0)
            }, this.allThumbsAreTweened = function() {
                e.destroyCurrentCat(), e.showCurrentCat()
            }, this.destroyCurrentCat = function() {
                for (var a, b = 0; b < e.totalThumbs; b++) a = e.thumbsAr[b], FWDR3DCarModTweenMax.killTweensOf(a), e.thumbsHolderDO.removeChild(a), a.destroy(), a = null
            }, this.startIntro = function() {
                e.disableThumbClick = !0, thumb = e.thumbsAr[e.curId];
                var a = -e.thumbWidth / 2,
                    b = -e.thumbHeight / 2;
                thumb.setGradient(0), thumb.setX(Math.floor(a)), thumb.setY(Math.floor(b)), thumb.setAlpha(0), FWDR3DCarModTweenMax.to(thumb, .8, {
                    alpha: 1
                }), e.thumbsHolderDO.addChild(thumb), e.data.showThumbnailsHtmlContent ? (e.loadCenterHtmlContent(), e.loadHtmlContentsId = setTimeout(e.loadHtmlContents, 600)) : (e.loadCenterImage(), e.loadImagesId = setTimeout(e.loadImages, 600))
            }, this.setupThumbs = function() {
                for (var a, b = 0; b < e.totalThumbs; b++) FWDR3DCarThumb.setPrototype(), a = new FWDR3DCarThumb(b, e.data, e), e.thumbsAr.push(a), a.addListener(FWDR3DCarThumb.CLICK, e.onThumbClick)
            }, this.onThumbClick = function(a) {
                e.disableThumbClick || (e.curId = a.id, e.thumbClickHandler())
            }, this.thumbClickHandler = function() {
                if (e.curId != e.prevCurId) e.gotoThumb();
                else {
                    var c = e.curDataListAr[e.curId].type_str,
                        d = e.curId;
                    if ("none" == c) return;
                    for (var f = 0; f < e.totalThumbs; f++) f < e.curId && ("link" == e.curDataListAr[f].type_str || "none" == e.curDataListAr[f].type_str) && (d -= 1);
                    "link" == c ? a.open(e.curDataListAr[e.curId].secondObj.url, e.curDataListAr[e.curId].secondObj.target) : e.dispatchEvent(b.THUMB_CLICK, {
                        playlistId: e.dataListId,
                        thumbId: d
                    })
                }
            }, this.resizeHandler = function() {
                e.scale = d.scale, e.thumbsHolderDO.setScale3D(e.scale), e.postionBulletsNavigation(), e.stageWidth == d.stageWidth && e.stageHeight == d.stageHeight || (e.stageWidth = d.stageWidth, e.stageHeight = d.stageHeight, e.thumbsHolderDO.setX(Math.floor(e.stageWidth / 2)), e.showSlideshowButton || e.showNextButton || e.showNextButton || e.showScrollbar ? e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2 - e.data.prevButtonNImg.height / 2)) : e.thumbsHolderDO.setY(Math.floor(e.stageHeight / 2)), 1 != e.stageWidth && e.positionControls(), e.scale = d.scale, e.thumbsHolderDO.setScale3D(e.scale), e.thumbOverDO && (e.thumbOverDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2)), e.thumbOverDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2))), e.postionNextAndPrevLargeButtons(), e.postionBulletsNavigation())
            }, this.setupLargeNextButton = function() {
                FWDR3DCarSimpleButton.setPrototype(), e.largeNextButtonDO = new FWDR3DCarSimpleButton(e.data.largeNextButton_img, e.data.largeNextButtonS_img), e.largeNextButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.nextButtonOnClickHandler), e.addChild(e.largeNextButtonDO)
            }, this.setupLargePrevButton = function() {
                FWDR3DCarSimpleButton.setPrototype(), e.largePrevButtonDO = new FWDR3DCarSimpleButton(e.data.largePrevButton_img, e.data.largePrevButtonS_img), e.largePrevButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.prevButtonOnClickHandler), e.addChild(e.largePrevButtonDO)
            }, this.showLargeNextAndPrevButtons = function(a) {
                e.areLargeNextAndPrevButtonsShowed || (e.areLargeNextAndPrevButtonsShowed = !0, e.postionNextAndPrevLargeButtons(a), e.largeNextButtonDO.setVisible(!0), e.largePrevButtonDO.setVisible(!0))
            }, this.hideLargeNextAndPrevButtons = function() {
                e.areLargeNextAndPrevButtonsShowed && (e.areLargeNextAndPrevButtonsShowed = !1, e.largeNextButtonDO.setVisible(!1), e.largePrevButtonDO.setVisible(!1), e.largePrevButtonDO.setX(-e.largePrevButtonDO.w), e.largeNextButtonDO.setX(e.stageWidth))
            }, this.postionNextAndPrevLargeButtons = function(a) {
                e.areLargeNextAndPrevButtonsShowed && e.largePrevButtonDO && (FWDR3DCarModTweenMax.killTweensOf(e.largePrevButtonDO), FWDR3DCarModTweenMax.killTweensOf(e.largeNextButtonDO), a ? (FWDR3DCarModTweenMax.to(e.largePrevButtonDO, .8, {
                    x: e.largeNextAndPrevButtonsOffest,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(e.largeNextButtonDO, .8, {
                    x: e.stageWidth - e.largeNextButtonDO.w - e.largeNextAndPrevButtonsOffest,
                    ease: Expo.easeInOut
                })) : (e.largePrevButtonDO.setX(e.largeNextAndPrevButtonsOffest), e.largeNextButtonDO.setX(e.stageWidth - e.largeNextButtonDO.w - e.largeNextAndPrevButtonsOffest)), e.showScrollbar || e.showSlideshowButton || e.showPrevButton || e.showNextButton ? (e.largeNextButtonDO.setY(parseInt((e.stageHeight - e.largeNextButtonDO.h - e.controlsHeight) / 2)), e.largePrevButtonDO.setY(parseInt((e.stageHeight - e.largePrevButtonDO.h - e.controlsHeight) / 2))) : (e.largeNextButtonDO.setY(parseInt((e.stageHeight - e.largeNextButtonDO.h) / 2)), e.largePrevButtonDO.setY(parseInt((e.stageHeight - e.largePrevButtonDO.h) / 2))))
            }, this.setupText = function() {
                e.textHolderDO = new FWDR3DCarDisplayObject3D("div"), e.addChild(e.textHolderDO), e.isMobile && e.textHolderDO.setZ(2e5), e.textHolderDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.textHolderDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.textHolderDO.setX(-1e3), e.data.showTextBackgroundImage ? (e.textGradientDO = new FWDR3DCarSimpleDisplayObject("img"), e.textHolderDO.addChild(e.textGradientDO), e.textGradientDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.textGradientDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.textGradientDO.screen.src = c.thumbTitleGradientPath) : (e.textGradientDO = new FWDR3DCarSimpleDisplayObject("div"), e.textHolderDO.addChild(e.textGradientDO), e.textGradientDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.textGradientDO.setHeight(e.thumbHeight - 2 * e.borderSize), e.textGradientDO.setBkColor(e.data.textBackgroundColor), e.textGradientDO.setAlpha(e.data.textBackgroundOpacity)), e.textDO = new FWDR3DCarSimpleDisplayObject("div"), e.textHolderDO.addChild(e.textDO), e.textDO.setWidth(e.thumbWidth - 2 * e.borderSize), e.textDO.getStyle().fontSmoothing = "antialiased", e.textDO.getStyle().webkitFontSmoothing = "antialiased", e.textDO.getStyle().textRendering = "optimizeLegibility"
            }, this.setupThumbOver = function() {
                e.thumbOverDO = new FWDRLR3DDisplayObject("div"), e.addChild(e.thumbOverDO), !e.isMobile, FWDRLR3DUtils.isIE && (e.thumbOverDO.setBkColor("#000000"), e.thumbOverDO.setAlpha(.001)), e.thumbOverDO.setWidth(e.thumbWidth), e.thumbOverDO.setHeight(e.thumbHeight), e.thumbOverDO.setX(Math.floor((e.stageWidth - e.thumbWidth) / 2)), e.thumbOverDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2)), e.isMobile ? e.hasPointerEvent ? e.thumbOverDO.screen.addEventListener("pointerup", e.onThumbOverTouch) : e.thumbOverDO.screen.addEventListener("touchend", e.onThumbOverTouch) : e.screen.addEventListener ? e.thumbOverDO.screen.addEventListener("click", e.onThumbOverClick) : e.thumbOverDO.screen.attachEvent("onclick", e.onThumbOverClick)
            }, this.onThumbOverClick = function() {
                e.disableThumbClick || e.thumbClickHandler()
            }, this.onThumbOverTouch = function(a) {
                a.preventDefault && a.preventDefault(), e.disableThumbClick || e.thumbClickHandler()
            }, this.addThumbText = function() {
                e.textHolderDO.setY(Math.floor((e.stageHeight - e.thumbHeight - e.data.prevButtonNImg.height) / 2) + e.borderSize), e.textDO.setInnerHTML(e.curDataListAr[e.curId].thumbText), e.textTitleOffset = e.curDataListAr[e.curId].textTitleOffset, e.textDescriptionOffsetTop = e.curDataListAr[e.curId].textDescriptionOffsetTop, e.textDescriptionOffsetBottom = e.curDataListAr[e.curId].textDescriptionOffsetBottom, e.textGradientDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset), e.textDO.setY(e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop), e.textHolderDO.setAlpha(0), e.setTextHeightId = setTimeout(e.setTextHeight, 10)
            }, this.setTextHeight = function() {
                e.textHeight = e.textDO.getHeight(), FWDR3DCarModTweenMax.to(e.textHolderDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), e.hasThumbText = !0, e.checkThumbOver()
            }, this.removeThumbText = function() {
                e.isMobile ? e.removeTextFinish() : FWDR3DCarModTweenMax.to(e.textHolderDO, .6, {
                    alpha: 0,
                    ease: Expo.easeOut,
                    onComplete: e.removeTextFinish
                })
            }, this.removeTextFinish = function() {
                FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO), FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO), FWDR3DCarModTweenMax.killTweensOf(e.textDO), e.hasThumbText = !1, e.isThumbOver = !1, e.textHolderDO.setY(2e3)
            }, this.checkThumbOver = function() {
                e.hasThumbText && (e.thumbMouseX >= 0 && e.thumbMouseX <= e.thumbWidth && e.thumbMouseY >= 0 && e.thumbMouseY <= e.thumbHeight ? e.onThumbOverHandler() : e.onThumbOutHandler())
            }, this.onThumbOverHandler = function() {
                e.isThumbOver || (e.isThumbOver = !0, FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textDescriptionOffsetTop - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textHeight - e.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                }))
            }, this.onThumbOutHandler = function() {
                e.isThumbOver && (e.isThumbOver = !1, FWDR3DCarModTweenMax.to(e.textGradientDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(e.textDO, .8, {
                    y: e.thumbHeight - 2 * e.borderSize - e.textTitleOffset + e.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                }))
            }, this.loadImages = function() {
                FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? e.setupIntro3D() : e.setupIntro2D(), e.countLoadedThumbsLeft = e.curId - 1, e.loadWithDelayIdLeft = setTimeout(e.loadThumbImageLeft, 100), e.countLoadedThumbsRight = e.curId + 1, e.loadWithDelayIdRight = setTimeout(e.loadThumbImageRight, 100)
            }, this.loadCenterImage = function() {
                e.imagePath = e.curDataListAr[e.curId].thumbPath, e.image = new Image, e.image.onerror = e.onImageLoadErrorHandler, e.image.onload = e.onImageLoadHandlerCenter, e.image.src = e.imagePath
            }, this.onImageLoadHandlerCenter = function(a) {
                var b = e.thumbsAr[e.curId];
                b.addImage(e.image), FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? b.showThumb3D() : b.showThumb2D(), e.showText && (e.isTextSet = !0, b.addText(e.textHolderDO, e.textGradientDO, e.textDO))
            }, this.loadThumbImageLeft = function() {
                e.countLoadedThumbsLeft < 0 || (e.imagePath = e.curDataListAr[e.countLoadedThumbsLeft].thumbPath, e.imageLeft = new Image, e.imageLeft.onerror = e.onImageLoadErrorHandler, e.imageLeft.onload = e.onImageLoadHandlerLeft, e.imageLeft.src = e.imagePath)
            }, this.onImageLoadHandlerLeft = function(a) {
                var b = e.thumbsAr[e.countLoadedThumbsLeft];
                b.addImage(e.imageLeft), Math.abs(e.countLoadedThumbsLeft - e.curId) <= e.nrThumbsToDisplay && (FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? b.showThumb3D() : b.showThumb2D()), e.countLoadedThumbsLeft--, e.loadWithDelayIdLeft = setTimeout(e.loadThumbImageLeft, 200)
            }, this.loadThumbImageRight = function() {
                e.countLoadedThumbsRight > e.totalThumbs - 1 || (e.imagePath = e.curDataListAr[e.countLoadedThumbsRight].thumbPath, e.imageRight = new Image, e.imageRight.onerror = e.onImageLoadErrorHandler, e.imageRight.onload = e.onImageLoadHandlerRight, e.imageRight.src = e.imagePath)
            }, this.onImageLoadHandlerRight = function(a) {
                var b = e.thumbsAr[e.countLoadedThumbsRight];
                b.addImage(e.imageRight), Math.abs(e.countLoadedThumbsRight - e.curId) <= e.nrThumbsToDisplay && (FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? b.showThumb3D() : b.showThumb2D()), e.countLoadedThumbsRight++, e.loadWithDelayIdRight = setTimeout(e.loadThumbImageRight, 200)
            }, this.onImageLoadErrorHandler = function(a) {
                if (e && e.data) {
                    var c = "Thumb can't be loaded, probably the path is incorrect <font color='#FF0000'>" + e.imagePath + "</font>";
                    e.dispatchEvent(b.LOAD_ERROR, {
                        text: c
                    })
                }
            }, this.loadHtmlContents = function() {
                FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? e.setupIntro3D() : e.setupIntro2D(), e.countLoadedThumbsLeft = e.curId - 1, e.loadWithDelayIdLeft = setTimeout(e.loadThumbHtmlContentLeft, 100), e.countLoadedThumbsRight = e.curId + 1, e.loadWithDelayIdRight = setTimeout(e.loadThumbHtmlContentRight, 100)
            }, this.loadCenterHtmlContent = function() {
                var a = e.thumbsAr[e.curId];
                a.addHtmlContent(), FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? a.showThumb3D() : a.showThumb2D(), e.showText && (e.isTextSet = !0, a.addText(e.textHolderDO, e.textGradientDO, e.textDO))
            }, this.loadThumbHtmlContentLeft = function() {
                if (!(e.countLoadedThumbsLeft < 0)) {
                    var a = e.thumbsAr[e.countLoadedThumbsLeft];
                    a.addHtmlContent(), Math.abs(e.countLoadedThumbsLeft - e.curId) <= e.nrThumbsToDisplay && (FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? a.showThumb3D() : a.showThumb2D()), e.countLoadedThumbsLeft--, e.loadWithDelayIdLeft = setTimeout(e.loadThumbHtmlContentLeft, 200)
                }
            }, this.loadThumbHtmlContentRight = function() {
                if (!(e.countLoadedThumbsRight > e.totalThumbs - 1)) {
                    var a = e.thumbsAr[e.countLoadedThumbsRight];
                    a.addHtmlContent(), Math.abs(e.countLoadedThumbsRight - e.curId) <= e.nrThumbsToDisplay && (FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? a.showThumb3D() : a.showThumb2D()), e.countLoadedThumbsRight++, e.loadWithDelayIdRight = setTimeout(e.loadThumbHtmlContentRight, 200)
                }
            }, this.setupIntro3D = function() {
                for (var a, b, c, d, f, g, h, i = 0; i < e.totalThumbs; i++) {
                    thumb = e.thumbsAr[i], a = 0, b = 0, c = 0, d = .001, f = 0, g = 0, a -= e.thumbWidth / 2, b -= e.thumbHeight / 2;
                    var j = 0;
                    i < e.curId ? j = -1 : i > e.curId && (j = 1);
                    var k, l, m, n, o, p;
                    switch (e.nrThumbsToDisplay) {
                        case 1:
                            k = 250 * j, l = -5, m = -220, n = 15, o = 25 * j, p = -4 * j;
                            break;
                        case 2:
                            k = 630 * j, l = 0, m = -500, n = 25, o = 28 * j, p = -13 * j;
                            break;
                        case 3:
                            k = 1130 * j, l = 0, m = -900, n = 32, o = 28 * j, p = -20 * j;
                            break;
                        default:
                            k = 1475 * j, l = -20, m = -1200, n = 50, o = 20 * j, p = -28 * j
                    }
                    switch (Math.abs(i - e.curId)) {
                        case 0:
                            break;
                        case 1:
                            c = -120;
                            break;
                        case 2:
                            c = e.nrThumbsToDisplay >= 2 ? -400 : m;
                            break;
                        case 3:
                            c = e.nrThumbsToDisplay >= 3 ? -800 : m;
                            break;
                        case 4:
                            c = e.nrThumbsToDisplay >= 4 ? -1100 : m;
                            break;
                        default:
                            c = m
                    }
                    switch (thumb.setX(Math.floor(a)), thumb.setY(Math.floor(b)), thumb.setZ(Math.floor(c)), a = 0, b = 0, c = 0, Math.abs(i - e.curId)) {
                        case 0:
                            FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(5);
                            break;
                        case 1:
                            a = 350 * j, b = -5, c = -126 - Math.floor(Math.max(e.thumbHeight - 266, 0) / 2.5), d = 15, f = 25 * j, g = -4 * j, FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(4);
                            break;
                        case 2:
                            e.nrThumbsToDisplay >= 2 ? (a = 730 * j, c = -400, d = 25, f = 28 * j, g = -13 * j) : (a = k, b = l, c = m, d = n, f = o, g = p), FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(3);
                            break;
                        case 3:
                            e.nrThumbsToDisplay >= 3 ? (a = 1230 * j, c = -800, d = 32, f = 28 * j, g = -20 * j) : (a = k, b = l, c = m, d = n, f = o, g = p), FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(2);
                            break;
                        case 4:
                            e.nrThumbsToDisplay >= 4 ? (a = 1575 * j, b = -20, c = -1100, d = 50, f = 20 * j, g = -28 * j) : (a = k, b = l, c = m, d = n, f = o, g = p), FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(1);
                            break;
                        default:
                            a = k, b = l, c = m, d = n, f = o, g = p, FWDRLR3DUtils.isIEAndMoreThen9 && thumb.setZIndex(0)
                    }
                    a += e.data.thumbSpaceOffset3D * j * -c / 400, a *= e.sizeRatio, b *= e.sizeRatio, c *= e.sizeRatio;
                    var q = e.thumbHeight / e.thumbWidth;
                    q > .7 && (a *= Math.min(1 / q, .8), b *= 1.5 * Math.max(q, 1.1)), a = Math.floor(a) - Math.floor(e.thumbWidth / 2), b = Math.floor(b) - Math.floor(e.thumbHeight / 2), thumb.setGradient(j), h = 200 * Math.min(Math.abs(i - e.curId), e.nrThumbsToDisplay), FWDR3DCarModTweenMax.to(thumb, .8, {
                        x: Math.floor(a),
                        y: Math.floor(b),
                        z: Math.floor(c),
                        angleX: d,
                        angleY: f,
                        angleZ: g,
                        delay: h / 1e3,
                        ease: Expo.easeOut
                    }), e.thumbsHolderDO.addChild(thumb)
                }
                e.setIntroFinishedId = setTimeout(e.setIntroFinished, h + 800), e.showControlsId = setTimeout(e.showControls, h)
            }, this.setupIntro2D = function() {
                for (var a, b, c, d = 0; d < e.totalThumbs; d++) {
                    thumb = e.thumbsAr[d], a = 0, b = 1;
                    var f = 0;
                    d < e.curId ? f = -1 : d > e.curId && (f = 1);
                    var g, h;
                    switch (e.nrThumbsToDisplay) {
                        case 1:
                            g = 100 * f, h = .8;
                            break;
                        case 2:
                            g = 140 * f, h = .7;
                            break;
                        case 3:
                            g = 200 * f, h = .6;
                            break;
                        default:
                            g = 250 * f, h = .5
                    }
                    switch (Math.abs(d - e.curId)) {
                        case 0:
                            thumb.setZIndex(5);
                            break;
                        case 1:
                            a = 180 * f, b = .9, thumb.setZIndex(4);
                            break;
                        case 2:
                            e.nrThumbsToDisplay >= 2 ? (a = 240 * f, b = .8) : (a = g, b = h), thumb.setZIndex(3);
                            break;
                        case 3:
                            e.nrThumbsToDisplay >= 3 ? (a = 300 * f, b = .7) : (a = g, b = h), thumb.setZIndex(2);
                            break;
                        case 4:
                            e.nrThumbsToDisplay >= 4 ? (a = 350 * f, b = .6) : (a = g, b = h), thumb.setZIndex(1);
                            break;
                        default:
                            a = g, b = h, thumb.setZIndex(0)
                    }
                    a += e.data.thumbSpaceOffset2D * f, 1 == Math.abs(d - e.curId) && (a -= e.data.thumbSpaceOffset2D / 4 * f), a *= e.sizeRatio;
                    var i = e.thumbHeight / e.thumbWidth;
                    i > .7 && (a *= Math.min(1 / i, .8)), a -= e.thumbWidth / 2, thumb.newX = Math.floor(a), thumb.setGradient(f), c = 200 * Math.min(Math.abs(d - e.curId), e.nrThumbsToDisplay), thumb.showThumbIntro2D(b, c / 1e3), e.thumbsHolderDO.addChild(thumb)
                }
                e.setIntroFinishedId = setTimeout(e.setIntroFinished, c + 800), e.showControlsId = setTimeout(e.showControls, c)
            }, this.setIntroFinished = function() {
                e.introFinished = !0, e.allowToSwitchCat = !0, e.disableThumbClick = !1, e.dispatchEvent(b.THUMBS_INTRO_FINISH), e.addNavigation(), (FWDRLR3DUtils.isIEAndMoreThen9 || !FWDRLR3DUtils.hasTransform3d || e.data.showDisplay2DAlways) && (e.zSortingId = setInterval(e.sortZ, 16)), e.data.autoplay && e.slideshowButtonDO && (e.slideshowButtonDO.onClick(), e.slideshowButtonDO.onMouseOut())
            }, this.addNavigation = function() {
                (e.isMobile || e.useDrag) && e.setupMobileDrag()
            }, this.gotoThumb = function() {
                e.introFinished && (e.showScrollbar && !e.scrollbarDO.isPressed && e.scrollbarDO.gotoItem(e.curId, !0), e.isPlaying && (clearTimeout(e.slideshowTimeoutId), e.slideshowTimeoutId = setTimeout(e.startTimeAgain, e.data.transitionDelay), e.slideshowButtonDO.isCounting && e.slideshowButtonDO.resetCounter()), e.showText && (e.isTextSet ? (e.isTextSet = !1, e.isMobile ? e.removeThumbText() : e.thumbsAr[e.prevCurId].removeText(), clearTimeout(e.textTimeoutId), e.textTimeoutId = setTimeout(e.setThumbText, 800)) : (clearTimeout(e.textTimeoutId), e.textTimeoutId = setTimeout(e.setThumbText, 800))), e.prevCurId = e.curId, FWDRLR3DUtils.hasTransform3d && !e.data.showDisplay2DAlways ? e.gotoThumb3D() : e.gotoThumb2D(), e.data.showBulletsNavigation && e.bulletsNavigation.updateBullets(e.curId), e.dispatchEvent(b.THUMB_CHANGE, {
                    id: e.curId
                }))
            }, this.setThumbText = function() {
                e.isTextSet = !0, e.thumbsAr[e.curId].addText(e.textHolderDO, e.textGradientDO, e.textDO)
            }, this.gotoThumb3D = function() {
                for (var a, b, c, d, f, g, h = 0; h < e.totalThumbs; h++) {
                    thumb = e.thumbsAr[h], a = 0, b = 0, c = 0, d = .001, f = 0, g = 0;
                    var i = 0;
                    h < e.curId ? i = -1 : h > e.curId && (i = 1);
                    var j, k, l, m, n, o;
                    switch (e.nrThumbsToDisplay) {
                        case 1:
                            j = 250 * i, k = -5, l = -220, m = 15, n = 25 * i, o = -4 * i;
                            break;
                        case 2:
                            j = 630 * i, k = 0, l = -500, m = 25, n = 28 * i, o = -13 * i;
                            break;
                        case 3:
                            j = 1130 * i, k = 0, l = -900, m = 32, n = 28 * i, o = -20 * i;
                            break;
                        default:
                            j = 1475 * i, k = -20, l = -1200, m = 50, n = 20 * i, o = -28 * i
                    }
                    switch (Math.abs(h - e.curId)) {
                        case 0:
                            break;
                        case 1:
                            a = 350 * i, b = -5, c = -126 - Math.floor(Math.max(e.thumbHeight - 266, 0) / 2.5), d = 15, f = 25 * i, g = -4 * i;
                            break;
                        case 2:
                            e.nrThumbsToDisplay >= 2 ? (a = 730 * i, c = -400, d = 25, f = 28 * i, g = -13 * i) : (a = j, b = k, c = l, d = m, f = n, g = o);
                            break;
                        case 3:
                            e.nrThumbsToDisplay >= 3 ? (a = 1230 * i, c = -800, d = 32, f = 28 * i, g = -20 * i) : (a = j, b = k, c = l, d = m, f = n, g = o);
                            break;
                        case 4:
                            e.nrThumbsToDisplay >= 4 ? (a = 1575 * i, b = -20, c = -1100, d = 50, f = 20 * i, g = -28 * i) : (a = j, b = k, c = l, d = m, f = n, g = o);
                            break;
                        default:
                            a = j, b = k, c = l, d = m, f = n, g = o
                    }
                    a += e.data.thumbSpaceOffset3D * i * -c / 300, a *= e.sizeRatio, b *= e.sizeRatio, c *= e.sizeRatio;
                    var p = e.thumbHeight / e.thumbWidth;
                    p > .7 && (a *= Math.min(1 / p, .8), b *= 1.5 * Math.max(p, 1.1)), a = Math.floor(a) - Math.floor(e.thumbWidth / 2), b = Math.floor(b) - Math.floor(e.thumbHeight / 2), FWDR3DCarModTweenMax.killTweensOf(thumb), (thumb.getX() + Math.floor(e.thumbWidth / 2)) * (a + Math.floor(e.thumbWidth / 2)) < 0 ? (FWDR3DCarModTweenMax.to(thumb, .8, {
                        bezier: {
                            values: [{
                                x: -Math.floor(e.thumbWidth / 2),
                                y: -Math.floor(e.thumbHeight / 2),
                                z: 0,
                                angleX: 0,
                                angleY: 0,
                                angleZ: 0
                            }, {
                                x: Math.floor(a),
                                y: Math.floor(b),
                                z: Math.floor(c),
                                angleX: d,
                                angleY: f,
                                angleZ: g
                            }]
                        },
                        ease: Quart.easeOut
                    }), thumb.setGradient(i)) : (Math.abs(h - e.curId) < e.nrThumbsToDisplay || thumb.getX() != Math.floor(a)) && (FWDR3DCarModTweenMax.to(thumb, .8, {
                        x: Math.floor(a),
                        y: Math.floor(b),
                        z: Math.floor(c),
                        angleX: d,
                        angleY: f,
                        angleZ: g,
                        ease: Quart.easeOut
                    }), thumb.setGradient(i))
                }
            }, this.gotoThumb2D = function() {
                for (var a, b, c = 0; c < e.totalThumbs; c++) {
                    thumb = e.thumbsAr[c], a = 0, newY = 0, b = 1;
                    var d = 0;
                    c < e.curId ? d = -1 : c > e.curId && (d = 1);
                    var f, g;
                    switch (e.nrThumbsToDisplay) {
                        case 1:
                            f = 100 * d, g = .8;
                            break;
                        case 2:
                            f = 140 * d, g = .7;
                            break;
                        case 3:
                            f = 200 * d, g = .6;
                            break;
                        default:
                            f = 250 * d, g = .5
                    }
                    switch (Math.abs(c - e.curId)) {
                        case 0:
                            break;
                        case 1:
                            a = 150 * d, b = .9;
                            break;
                        case 2:
                            e.nrThumbsToDisplay >= 2 ? (a = 240 * d, b = .8) : (a = f, b = g);
                            break;
                        case 3:
                            e.nrThumbsToDisplay >= 3 ? (a = 300 * d, b = .7) : (a = f, b = g);
                            break;
                        case 4:
                            e.nrThumbsToDisplay >= 4 ? (a = 350 * d, b = .6) : (a = f, b = g);
                            break;
                        default:
                            a = f, b = g
                    }
                    a += e.data.thumbSpaceOffset2D * d, 1 == Math.abs(c - e.curId) && (a -= e.data.thumbSpaceOffset2D / 4 * d), a *= e.sizeRatio;
                    var h = e.thumbHeight / e.thumbWidth;
                    h > .7 && (a *= Math.min(1 / h, .8)), a -= e.thumbWidth / 2, (Math.abs(c - e.curId) < e.nrThumbsToDisplay || thumb.getX() != Math.floor(a)) && (thumb.newX = Math.floor(a), thumb.setScale(b), thumb.setGradient(d))
                }
            }, this.sortZ = function() {
                for (var b, c, a = 1e4, d = 0; d < e.totalThumbs; d++) {
                    thumb = e.thumbsAr[d];
                    var f = thumb.getX() + e.thumbWidth / 2;
                    Math.abs(f) < a && (a = Math.abs(f), b = d)
                }
                for (var d = 0; d < e.totalThumbs; d++) {
                    switch (thumb = e.thumbsAr[d], Math.abs(d - b)) {
                        case 0:
                            c = 5;
                            break;
                        case 1:
                            c = 4;
                            break;
                        case 2:
                            c = 3;
                            break;
                        case 3:
                            c = 2;
                            break;
                        case 4:
                            c = 1;
                            break;
                        default:
                            c = 0
                    }
                    c != thumb.getZIndex() && thumb.setZIndex(c)
                }
            }, this.setupControls = function() {
                if (e.controlsDO = new FWDR3DCarDisplayObject3D("div"), e.addChild(e.controlsDO), e.controlsDO.setZ(2e5), e.controlsWidth = e.data.prevButtonNImg.width, e.showScrollbar && e.setupScrollbar(), e.showPrevButton && e.setupPrevButton(), e.showNextButton && e.setupNextButton(), e.showSlideshowButton && e.setupSlideshowButton(), e.data.enableMouseWheelScroll && e.addMouseWheelSupport(), e.data.addKeyboardSupport && e.addKeyboardSupport(), e.showLargeNextAndPrevButtons_bl && (e.setupLargeNextButton(), e.setupLargePrevButton(), e.hideLargeNextAndPrevButtons(), setTimeout(function() {
                        e.showLargeNextAndPrevButtons(!0)
                    }, 700)), e.showScrollbar) {
                    e.controlsWidth -= e.scrollbarDO.getWidth(), e.scrollbarDO.scrollbarMaxWidth -= e.controlsWidth, e.scrollbarDO.resize2(), e.scrollbarDO.resize(e.stageWidth, e.controlsWidth);
                    var a = e.scrollbarDO.getX() + e.scrollbarDO.getWidth();
                    e.showNextButton && (e.nextButtonDO.setX(a), a += e.nextButtonDO.getWidth()), e.showSlideshowButton && e.slideshowButtonDO.setX(a)
                }
                e.showScrollbar ? (e.controlsDO.setX(Math.floor((e.stageWidth - (e.controlsWidth + e.scrollbarDO.getWidth())) / 2)), e.controlsDO.setWidth(e.controlsWidth + e.scrollbarDO.getWidth())) : (e.controlsDO.setX(Math.floor((e.stageWidth - e.controlsWidth) / 2)), e.controlsDO.setWidth(e.controlsWidth)), e.controlsDO.setY(e.stageHeight), e.controlsDO.setHeight(e.data.prevButtonNImg.height), e.data.showBulletsNavigation && e.setupBulletsNavigation()
            }, this.showControls = function() {
                FWDR3DCarModTweenMax.to(e.controlsDO, .8, {
                    y: e.stageHeight - e.controlsHeight,
                    ease: Expo.easeOut
                })
            }, this.positionControls = function() {
                if (e.showScrollbar) {
                    e.scrollbarDO.resize(e.stageWidth, e.controlsWidth);
                    var a = e.scrollbarDO.getX() + e.scrollbarDO.getWidth();
                    e.showNextButton && (e.nextButtonDO.setX(a), a += e.nextButtonDO.getWidth()), e.showSlideshowButton && e.slideshowButtonDO.setX(a)
                }
                e.showScrollbar ? (e.controlsDO.setX(Math.floor((e.stageWidth - (e.controlsWidth + e.scrollbarDO.getWidth())) / 2)), e.controlsDO.setWidth(e.controlsWidth + e.scrollbarDO.getWidth())) : (e.controlsDO.setX(Math.floor((e.stageWidth - e.controlsWidth) / 2)), e.controlsDO.setWidth(e.controlsWidth)), e.controlsDO.setY(e.stageHeight - e.controlsHeight)
            }, this.setupBulletsNavigation = function() {
                FWDR3DBulletsNavigation.setPrototype(), e.bulletsNavigation = new FWDR3DBulletsNavigation(e.data, e.totalThumbs, e.curId), e.bulletsNavigation.addListener(FWDR3DBulletsNavigation.BULLET_CLICK, e.bulletNavigationClick), e.addChild(e.bulletsNavigation)
            }, this.bulletNavigationClick = function(a) {
                e.curId = a.id, e.gotoThumb()
            }, this.postionBulletsNavigation = function() {
                e.data.showBulletsNavigation && (e.showScrollbar || e.showSlideshowButton || e.showPrevButton || e.showNextButton ? (e.bulletsNavigation.setX(Math.floor((e.stageWidth - e.bulletsNavigation.w) / 2)), e.bulletsNavigation.setY(e.stageHeight - e.bulletsNavigation.h - e.bulletsOffset - e.controlsHeight)) : (e.bulletsNavigation.setX(Math.floor((e.stageWidth - e.bulletsNavigation.w) / 2)), e.bulletsNavigation.setY(e.stageHeight - e.bulletsNavigation.h - e.bulletsOffset)))
            }, this.setupPrevButton = function() {
                FWDR3DCarSimpleButton.setPrototype(), e.prevButtonDO = new FWDR3DCarSimpleButton(e.data.prevButtonNImg, e.data.prevButtonSImg), e.prevButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.prevButtonOnClickHandler), e.controlsDO.addChild(e.prevButtonDO)
            }, this.prevButtonOnClickHandler = function() {
                e.curId > 0 && (e.curId--, e.gotoThumb())
            }, this.setupNextButton = function() {
                FWDR3DCarSimpleButton.setPrototype(), e.nextButtonDO = new FWDR3DCarSimpleButton(e.data.nextButtonNImg, e.data.nextButtonSImg), e.nextButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, e.nextButtonOnClickHandler), e.controlsDO.addChild(e.nextButtonDO), e.nextButtonDO.setX(e.controlsWidth), e.controlsWidth += e.nextButtonDO.getWidth()
            }, this.nextButtonOnClickHandler = function() {
                e.curId < e.totalThumbs - 1 && (e.curId++, e.gotoThumb())
            }, this.setupSlideshowButton = function() {
                FWDR3DCarSlideshowButton.setPrototype(),
                    e.slideshowButtonDO = new FWDR3DCarSlideshowButton(e.data), e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PLAY_CLICK, e.onSlideshowButtonPlayClickHandler), e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PAUSE_CLICK, e.onSlideshowButtonPauseClickHandler), e.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.TIME, e.onSlideshowButtonTime), e.controlsDO.addChild(e.slideshowButtonDO), e.slideshowButtonDO.setX(e.controlsWidth), e.controlsWidth += e.slideshowButtonDO.getWidth()
            }, this.onSlideshowButtonPlayClickHandler = function() {
                e.isPlaying = !0
            }, this.onSlideshowButtonPauseClickHandler = function() {
                e.isPlaying = !1, clearTimeout(e.slideshowTimeoutId)
            }, this.startSlideshow = function() {
                e.isPlaying || (e.isPlaying = !0, e.slideshowButtonDO.start(), e.slideshowButtonDO.onMouseOut())
            }, this.stopSlideshow = function() {
                e.isPlaying && (e.isPlaying = !1, clearTimeout(e.slideshowTimeoutId), e.slideshowButtonDO.stop(), e.slideshowButtonDO.onMouseOut())
            }, this.onSlideshowButtonTime = function() {
                e.curId == e.totalThumbs - 1 ? e.curId = 0 : e.curId++, e.gotoThumb()
            }, this.startTimeAgain = function() {
                e.slideshowButtonDO.start()
            }, this.setupScrollbar = function() {
                FWDR3DCarScrollbar.setPrototype(), e.scrollbarDO = new FWDR3DCarScrollbar(e.data, e.totalThumbs, e.curId), e.scrollbarDO.addListener(FWDR3DCarScrollbar.MOVE, e.onScrollbarMove), e.controlsDO.addChild(e.scrollbarDO), e.scrollbarDO.setX(e.controlsWidth), e.controlsWidth += e.scrollbarDO.getWidth()
            }, this.onScrollbarMove = function(a) {
                e.curId = a.id, e.gotoThumb()
            }, this.addMouseWheelSupport = function() {
                a.addEventListener ? (e.parent.mainDO.screen.addEventListener("mousewheel", e.mouseWheelHandler), e.parent.mainDO.screen.addEventListener("DOMMouseScroll", e.mouseWheelHandler)) : document.attachEvent && e.parent.mainDO.screen.attachEvent("onmousewheel", e.mouseWheelHandler)
            }, this.mouseWheelHandler = function(a) {
                if (e.introFinished && e.allowToSwitchCat && (!e.showScrollbar || !e.scrollbarDO.isPressed)) {
                    var b = a.detail || a.wheelDelta;
                    return a.wheelDelta && (b *= -1), b > 0 ? e.curId < e.totalThumbs - 1 && (e.curId++, e.gotoThumb()) : b < 0 && e.curId > 0 && (e.curId--, e.gotoThumb()), !!a.preventDefault && void a.preventDefault()
                }
            }, this.setupMobileDrag = function() {
                e.hasPointerEvent ? e.parent.mainDO.screen.addEventListener("pointerdown", e.mobileDragStartHandler) : e.isMobile ? e.parent.mainDO.screen.addEventListener("touchstart", e.mobileDragStartTest) : e.parent.mainDO.screen.addEventListener("mousedown", e.mobileDragStartHandler)
            }, this.mobileDragStartTest = function(b) {
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                c.screenY > e.controlsDO.getGlobalY() || (e.lastPressedX = c.screenX, e.lastPressedY = c.screenY, e.dragCurId = e.curId, e.isMobile && (a.addEventListener("touchmove", e.mobileDragMoveTest), a.addEventListener("touchend", e.mobileDragEndTest)))
            }, this.mobileDragMoveTest = function(b) {
                if (1 == b.touches.length) {
                    e.disableThumbClick = !0;
                    var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                    e.mouseX = c.screenX, e.mouseY = c.screenY;
                    var d = Math.atan2(e.mouseY - e.lastPressedY, e.mouseX - e.lastPressedX),
                        f = 180 * Math.abs(d) / Math.PI;
                    f > 120 || f < 60 ? (b.preventDefault && b.preventDefault(), e.curId = e.dragCurId + Math.floor(-(e.mouseX - e.lastPressedX) / 100), e.curId <= 0 ? e.curId = 0 : e.curId > e.totalThumbs - 1 && (e.curId = e.totalThumbs - 1), e.gotoThumb()) : a.removeEventListener("touchmove", e.mobileDragMoveTest)
                }
            }, this.mobileDragEndTest = function(b) {
                e.disableThumbClick = !1, a.removeEventListener("touchmove", e.mobileDragMoveTest), a.removeEventListener("touchmove", e.mobileDragMoveHandler), a.removeEventListener("touchend", e.mobileDragEndTest)
            }, this.mobileDragStartHandler = function(b) {
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                c.screenY > e.controlsDO.getGlobalY() || !e.allowToSwitchCat || (e.mouseX = e.lastPressedX = c.screenX, e.lastDragNumber = 100, e.dragCurId = e.curId, e.isMobile || e.useDrag && (e.getStyle().cursor = "url(" + e.grabIconPath_str + "), default", d.mainDO.getStyle().cursor = "url(" + e.grabIconPath_str + "), default"), e.hasPointerEvent ? (a.addEventListener("pointerup", e.mobileDragEndHandler), a.addEventListener("pointermove", e.mobileDragMoveHandler)) : e.isMobile || (a.addEventListener("mouseup", e.mobileDragEndHandler), a.addEventListener("mousemove", e.mobileDragMoveHandler)))
            }, this.mobileDragMoveHandler = function(a) {
                a.preventDefault && a.preventDefault(), e.mouseX != e.lastPressedX && (e.disableThumbClick = !0);
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                if (e.useDrag && !e.isMobile) {
                    e.curDragNumber = parseInt((e.mouseX - e.lastPressedX) / 80);
                    var c = "none";
                    e.mouseX - e.lastPressedX > 0 ? c = "plus" : e.mouseX - e.lastPressedX < 0 && (c = "minus"), "plus" == c ? e.curId <= 0 ? e.curId = 0 : e.lastDragNumber != e.curDragNumber && (e.curId = e.curId - 1, e.lastPressedX = b.screenX, e.curId <= 0 && (e.curId = 0)) : "minus" == c && (e.curId >= e.totalThumbs - 1 ? e.curId = e.totalThumbs - 1 : e.lastDragNumber != e.curDragNumber && (e.curId++, e.lastPressedX = b.screenX, e.curId >= e.totalThumbs - 1 && (e.curId = e.totalThumbs - 1)))
                }
                e.mouseX = b.screenX, e.curId != e.prevCurId && e.gotoThumb(), e.lastDragNumber = e.curDragNumber
            }, this.mobileDragEndHandler = function(b) {
                setTimeout(function() {
                    e.disableThumbClick = !1
                }, 50), e.useDrag && !e.isMobile && (e.getStyle().cursor = "url(" + e.handIconPath_str + "), default", d.mainDO.getStyle().cursor = "url(" + e.handIconPath_str + "), default"), e.hasPointerEvent ? (a.removeEventListener("pointerup", e.mobileDragEndHandler), a.removeEventListener("pointermove", e.mobileDragMoveHandler)) : e.isMobile || (a.removeEventListener("mouseup", e.mobileDragEndHandler), a.removeEventListener("mousemove", e.mobileDragMoveHandler))
            }, this.removeMobileDrag = function() {
                e.hasPointerEvent ? (e.parent.mainDO.screen.removeEventListener("pointerdown", e.mobileDragStartHandler), a.removeEventListener("pointerup", e.mobileDragEndHandler), a.removeEventListener("pointermove", e.mobileDragMoveHandler)) : e.isMobile ? a.addEventListener && (e.parent.mainDO.screen.removeEventListener("touchstart", e.mobileDragStartTest), a.removeEventListener("touchmove", e.mobileDragMoveTest), a.removeEventListener("touchmove", e.mobileDragMoveHandler), a.removeEventListener("touchend", e.mobileDragEndTest)) : (e.parent.mainDO.screen.removeEventListener("mousedown", e.mobileDragStartHandler), a.removeEventListener("mouseup", e.mobileDragEndHandler), a.removeEventListener("mousemove", e.mobileDragMoveHandler))
            }, this.addKeyboardSupport = function() {
                document.addEventListener ? (document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)) : (document.attachEvent("onkeydown", this.onKeyDownHandler), document.attachEvent("onkeyup", this.onKeyUpHandler))
            }, this.onKeyDownHandler = function(a) {
                if (e.introFinished && e.allowToSwitchCat && !(e.showScrollbar && e.scrollbarDO.isPressed || d.lightboxDO && d.lightboxDO.isShowed_bl))
                    if (document.removeEventListener ? document.removeEventListener("keydown", e.onKeyDownHandler) : document.detachEvent("onkeydown", e.onKeyDownHandler), 39 == a.keyCode) {
                        if (e.curId < e.totalThumbs - 1 && (e.curId++, e.gotoThumb()), !a.preventDefault) return !1;
                        a.preventDefault()
                    } else if (37 == a.keyCode) {
                    if (e.curId > 0 && (e.curId--, e.gotoThumb()), !a.preventDefault) return !1;
                    a.preventDefault()
                }
            }, this.onKeyUpHandler = function(a) {
                document.addEventListener ? document.addEventListener("keydown", e.onKeyDownHandler) : document.attachEvent("onkeydown", e.onKeyDownHandler)
            }, this.update = function(a) {
                e.showRefl = a.showRefl, e.reflDist = a.reflDist;
                for (var b = 0; b < e.totalThumbs; b++) e.thumbsAr[b].update()
            }, this.destroy = function() {
                clearTimeout(e.loadWithDelayIdLeft), clearTimeout(e.loadWithDelayIdRight), clearTimeout(e.slideshowTimeoutId), clearTimeout(e.textTimeoutId), clearInterval(e.zSortingId), clearTimeout(e.hideThumbsFinishedId), clearTimeout(e.loadHtmlContentsId), clearTimeout(e.loadImagesId), clearTimeout(e.setTextHeightId), clearTimeout(e.setIntroFinishedId), clearTimeout(e.showControlsId), e.isMobile || (e.screen.addEventListener ? a.removeEventListener("mousemove", e.onThumbMove) : document.detachEvent("onmousemove", e.onThumbMove)), e.hasPointerEvent && a.removeEventListener("pointermove", e.onThumbMove), e.hasPointerEvent ? (e.parent.mainDO.screen.removeEventListener("pointerdown", e.mobileDragStartHandler), a.removeEventListener("pointerup", e.mobileDragEndHandler), a.removeEventListener("pointermove", e.mobileDragMoveHandler)) : a.addEventListener && (e.parent.mainDO.screen.removeEventListener("touchstart", e.mobileDragStartTest), a.removeEventListener("touchmove", e.mobileDragMoveTest), a.removeEventListener("touchend", e.mobileDragEndTest)), a.addEventListener ? (e.parent.mainDO.screen.removeEventListener("mousewheel", e.mouseWheelHandler), e.parent.mainDO.screen.removeEventListener("DOMMouseScroll", e.mouseWheelHandler)) : document.attachEvent && e.parent.mainDO.screen.detachEvent("onmousewheel", e.mouseWheelHandler), e.addKeyboardSupport && (document.removeEventListener ? (document.removeEventListener("keydown", this.onKeyDownHandler), document.removeEventListener("keyup", this.onKeyUpHandler)) : document.attachEvent && (document.detachEvent("onkeydown", this.onKeyDownHandler), document.detachEvent("onkeyup", this.onKeyUpHandler))), e.image && (e.image.onload = null, e.image.onerror = null, e.image.src = ""), e.imageLeft && (e.imageLeft.onload = null, e.imageLeft.onerror = null, e.imageLeft.src = ""), e.imageRight && (e.imageRight.onload = null, e.imageRight.onerror = null, e.imageRight.src = ""), e.image = null, e.imageLeft = null, e.imageRight = null;
                for (var c = 0; c < e.totalThumbs; c++) FWDR3DCarModTweenMax.killTweensOf(e.thumbsAr[c]), e.thumbsAr[c].destroy(), e.thumbsAr[c] = null;
                e.thumbsAr = null, e.prevButtonDO && (e.prevButtonDO.destroy(), e.prevButtonDO = null), e.nextButtonDO && (e.nextButtonDO.destroy(), e.nextButtonDO = null), e.scrollbarDO && (e.scrollbarDO.destroy(), e.scrollbarDO = null), e.slideshowButtonDO && (e.slideshowButtonDO.destroy(), e.slideshowButtonDO = null), e.textGradientDO && e.textGradientDO.screen && (FWDR3DCarModTweenMax.killTweensOf(e.textGradientDO), e.textGradientDO.destroy(), e.textGradientDO = null), e.textDO && e.textDO.screen && (FWDR3DCarModTweenMax.killTweensOf(e.textDO), e.textDO.destroy(), e.textDO = null), e.textHolderDO && e.textHolderDO.screen && (FWDR3DCarModTweenMax.killTweensOf(e.textHolderDO), e.textHolderDO.destroy(), e.textHolderDO = null), e.thumbOverDO && (e.thumbOverDO.destroy(), e.thumbOverDO = null), e.thumbsHolderDO && (e.thumbsHolderDO.destroy(), e.thumbsHolderDO = null), e.controlsDO && (FWDR3DCarModTweenMax.killTweensOf(e.controlsDO), e.controlsDO.destroy(), e.controlsDO = null), e.screen.innerHTML = "", e = null, f.destroy(), f = null, b.prototype = null
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDR3DCarDisplayObject3D("div", "relative", "visible")
        }, b.THUMB_CLICK = "onThumbClick", b.LOAD_ERROR = "onLoadError", b.THUMBS_INTRO_FINISH = "onThumbsIntroFinish", b.THUMB_CHANGE = "onThumbChange", a.FWDR3DCarThumbsManager = b
    }(window), function(a) {
        var b = function(a, c) {
            var d = this,
                e = b.prototype;
            this.timeOutId, this.delay = a, this.isStopped_bl = !c, this.stop = function() {
                clearTimeout(this.timeOutId), this.dispatchEvent(b.STOP)
            }, this.start = function() {
                this.isStopped_bl || (this.timeOutId = setTimeout(this.onTimeHanlder, this.delay), this.dispatchEvent(b.START))
            }, this.onTimeHanlder = function() {
                d.dispatchEvent(b.TIME)
            }, this.destroy = function() {
                clearTimeout(this.timeOutId), e.destroy(), d = null, e = null, b.prototype = null
            }
        };
        b.setProtptype = function() {
            b.prototype = new FWDR3DCarEventDispatcher
        }, b.START = "start", b.STOP = "stop", b.TIME = "time", b.prototype = null, a.FWDR3DCarTimerManager = b
    }(window), function(window) {
        var FWDRLR3D = function(props) {
            var self = this;
            self.init = function() {
                if (TweenLite.ticker.useRAF(!1), self.props_obj = props, !self.props_obj) return void alert("FWDRLR3D constructor properties object is not defined!");
                this.stageContainer = document.getElementsByTagName("body")[0], this.stageContainer || (this.stageContainer = document.documentElement), this.listeners = {
                    events_ar: []
                }, this.buttons_ar = null, this.buttonsMaxW_ar = null, this.ws = null, this.so = null, this.data = null, this.customContextMenu_do = null, this.thumbnailsManager_do = null, this.info_do = null, this.hider = null, this.main_do = null, this.bk_do = null, this.preloader_do = null, this.playlist_ar = null, this.mainItemHolder_do = null, this.itemBk_do = null, this.itemBorder_do = null, this.itemHolder_do = null, this.curItem_do = null, this.prevItem_do = null, this.image_img = null, this.closeButton_do = null, this.zoomButton_do = null, this.descButton_do = null, this.slideShowButton_do = null, this.nextButton_do = null, this.prevButton_do = null, this.hsThumbanilsButton_do = null, this.video_do = null, this.videoHolder_do = null, this.audioHolder_do = null, this.audio_do = null, this.scClientId_str = "a123083c52a6b06985421d33038e033a", this.flickrAPIKey_str = "8b8bea6be401b521615b9b74c12131f2", this.rightClickContextMenu_str = this.props_obj.rightClickContextMenu || "developer";
                var a = "developer" == this.rightClickContextMenu_str || "disabled" == this.rightClickContextMenu_str || "default" == this.rightClickContextMenu_str;
                a || (this.rightClickContextMenu_str = "developer"), this.buttonsAlignment_str = this.props_obj.buttonsAlignment || "in";
                var a = "in" == this.buttonsAlignment_str || "out" == this.buttonsAlignment_str;
                a || (this.buttonsAlignment_str = "in"), this.DFButtonsAlignment_str = this.buttonsAlignment_str, this.descriptionWindowPosition_str = this.props_obj.descriptionWindowPosition || "top", a = "top" == this.descriptionWindowPosition_str || "bottom" == this.descriptionWindowPosition_str, a || (this.descriptionWindowPosition_str = "top"), this.DFDescriptionWindowPosition_str = this.descriptionWindowPosition_str, this.descriptionAnimationType_str = this.props_obj.descriptionWindowAnimationType || "motion", a = "motion" == this.descriptionAnimationType_str || "opacity" == this.descriptionAnimationType_str, a || (this.descriptionAnimationType_str = "motion"), this.DFDescriptionAnimationType_str = this.descriptionAnimationType_str, this.descriptionAnimationType_str = this.props_obj.descriptionWindowAnimationType || "motion", a = "motion" == this.descriptionAnimationType_str || "opacity" == this.descriptionAnimationType_str, a || (this.descriptionAnimationType_str = "motion"), this.DFDescriptionAnimationType_str = this.descriptionAnimationType_str, this.thumbnailsHoverEffect_str = this.props_obj.thumbnailsHoverEffect || "scale", a = "scale" == this.thumbnailsHoverEffect_str || "opacity" == this.thumbnailsHoverEffect_str, a || (this.thumbnailsHoverEffect_str = "opacity"), this.DFThumbnailsHoverEffect_str = this.thumbnailsHoverEffect_str, this.facebookAppId_str = self.props_obj.facebookAppId || void 0, this.googleMapsAPIKey_str = "AIzaSyDYlgLIneg_UOd8STBfJEgq2JgmT5nNJKU", this.backgroundColor_str = this.props_obj.backgroundColor || "#000000", this.DFBackgroundColor_str = self.backgroundColor_str, this.playlistDOMOrObject = null, this.type_str, this.itemBorderColor1_str = this.props_obj.itemBorderColor1 || "transparent", this.DFitemBorderColor1_str = this.itemBorderColor1_str, this.itemBorderColor2_str = this.props_obj.itemBorderColor2 || "transparent", this.DFitemBorderColor2_str = this.itemBorderColor2_str, this.itemBkColor_str = this.props_obj.itemBackgroundColor || "transparent", this.DFItemBkColor_str = this.itemBkColor_str, this.playlistDomOrObj_str = void 0, this.itemBoxShadow_str = this.props_obj.itemBoxShadow || "none", this.DFItemBoxShadow_str = this.itemBoxShadow_str, this.thumbnailsBorderNormalColor_str = this.props_obj.thumbnailsBorderNormalColor || "#FF0000", this.DFThumbnailsBorderNormalColor = this.thumbnailsBorderNormalColor_str, this.thumbnailsBorderSelectedColor_str = this.props_obj.thumbnailsBorderSelectedColor || "#FF0000", this.DFThumbnailsBorderSelectedColor_str = this.thumbnailsBorderSelectedColor_str, this.descriptionWindowBackgroundColor_str = this.props_obj.descriptionWindowBackgroundColor || "#FF0000", this.DFDescriptionWindowBackgroundColor = this.descriptionWindowBackgroundColor_str, this.thumbnailsOverlayColor_str = this.props_obj.thumbnailsOverlayColor || "#FF0000", this.DFThumbnailsOverlayColor_str = this.thumbnailsOverlayColor_str, this.posterPath_str, this.DFVideoControllerBackgroundColor_str, this.DFVideoPosterBackgroundColor_str, this.DFTimeColor_str, this.descriptionWindowBackgroundOpacity = this.props_obj.descriptionWindowBackgroundOpacity || 1, this.DFDescriptionWindowBackgroundOpacity = this.descriptionWindowBackgroundOpacity, this.backgroundOpacity = this.props_obj.backgroundOpacity || .8, this.DFBackgroundOpacity = this.backgroundOpacity, self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? this.buttonsOffsetIn = this.props_obj.buttonsOffsetIn || 0 : this.buttonsOffsetIn = this.props_obj.buttonsOffsetOut || 0, this.DFButtonsOffsetIn = this.buttonsOffsetIn, self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? this.buttonsOffsetOut = this.props_obj.buttonsOffsetOut || 0 : this.buttonsOffsetOut = this.props_obj.buttonsOffsetIn || 0, this.DFButtonsOffsetOut = this.buttonsOffsetOut, this.audioPlayerMarginsOffset = 20, this.itemBorderRadius = this.props_obj.itemBorderRadius || 0, this.DFItemBorderRadius = this.itemBorderRadius, this.itemBorderSize = this.props_obj.itemBorderSize || 0, 0 == this.itemBorderSize && (this.itemBorderColor_str = "transparent"), this.DFItemBorderSize = this.itemBorderSize, this.spaceBetweenButtons = this.props_obj.spaceBetweenButtons || 0, this.DFSpaceBetweenButtons = this.spaceBetweenButtons, this.buttonsHideDelay = this.props_obj.buttonsHideDelay || 3, this.buttonsHideDelay *= 1e3, this.DFbuttonsHideDelay = this.buttonsHideDelay, this.defaultItemW = this.props_obj.defaultItemWidth || 640, this.defaultItemH = this.props_obj.defaultItemHeight || 380, this.DFDefaultItemW = this.defaultItemW, this.DFDefaultItemH = this.defaultItemH, this.thumbnailsOffsetBottom = this.props_obj.thumbnailsOffsetBottom || 0, this.DFThumbnailsOffsetBottom = this.thumbnailsOffsetBottom, this.thumbnailsBorderSize = this.props_obj.thumbnailsBorderSize || 0, this.DFThumbnailsBorderSize = this.thumbnailsBorderSize, this.thumbnailsBorderRadius = this.props_obj.thumbnailsBorderRadius || 0, this.DFThumbnailsBorderRadius = this.thumbnailsBorderRadius, this.thumbnailH = this.props_obj.thumbnailsImageHeight || 50, this.thumbnailH += 2 * this.thumbnailsBorderSize + this.thumbnailsOffsetBottom, this.DFThumbnailH = this.thumbnailH, this.spaceBetweenThumbnailsAndItem = this.props_obj.spaceBetweenThumbnailsAndItem || 0, this.spaceBetweenThumbnails = this.props_obj.spaceBetweenThumbnails || 0, this.DFSpaceBetweenThumbnails = this.spaceBetweenThumbnails, this.itemOffsetH = this.props_obj.itemOffsetHeight || 0, this.DFItemOffsetH = this.itemOffsetH, this.spaceBetweenThumbnailsAndItem = this.props_obj.spaceBetweenThumbnailsAndItem || 0, this.DFSpaceBetweenThumbnailsAndItem = this.spaceBetweenThumbnailsAndItem, this.slideShowDelay = 1e3 * parseInt(this.props_obj.slideShowDelay), this.slideShowDelay < .001 && (this.slideShowDelay = 1e3), this.DFSlideShowDelay = this.slideShowDelay, this.thumbnailsOverlayOpacity = this.props_obj.thumbnailsOverlayOpacity || 1, this.DFThumbnailsOverlayOpacity = this.thumbnailsOverlayOpacity, this.id = -1, this.prevId = -2, this.stageWidth = 0, this.stageHeight = 0, this.totalItems = 0, this.originalW = 0, this.originalH = 0, this.maxButtonW = 0, this.finalW = 0, this.finalH = 0, this.prevVideoW = 0, this.prevVideoH = 0, this.finalX = 0, this.finalY = 0, this.gmx = 0, this.gmy = 0, this.lastPresedX = 0, this.lastPresedY = 0, this.friction = .9, this.vx = 0, this.vy = 0, this.dif = 0, this.mouseX = 0, this.mouseY = 0, this.resizeHandlerId_to, this.showOrHideCompleteId_to, this.hideCompleteId_to, this.animId_to, this.maximizeCompleteTimeOutId_to, this.minimizeCompleteTimeOutId_to, this.disableClickId_to, this.doNotAllowToHideId_to, this.updateImageWhenMaximized_int, this.isAnimForVideoAndAudioPlayersDone_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.useDeepLinking_bl = this.props_obj.useDeepLinking, this.useDeepLinking_bl = "yes" == this.useDeepLinking_bl, FWDRLR3DUtils.isLocal && (this.useDeepLinking_bl = !1), this.showCloseButton_bl = this.props_obj.showCloseButton, this.showCloseButton_bl = "no" != this.showCloseButton_bl, this.DFShowCloseButton_bl = this.showCloseButton_bl, this.defaultShowZoomButton_bl = this.props_obj.showZoomButton, this.defaultShowZoomButton_bl = "no" != this.defaultShowZoomButton_bl, this.DFShowZoomButton = this.defaultShowZoomButton_bl, this.showZoomButton_bl = !1, this.defaultShowNextAndPrevButtons_bl = this.props_obj.showNextAndPrevButtons, this.defaultShowNextAndPrevButtons_bl = "no" != this.defaultShowNextAndPrevButtons_bl, "no" == this.props_obj.showNextAndPrevButtonsOnMobile && self.isMobile_bl && (this.defaultShowNextAndPrevButtons_bl = !1), this.DFSefaultShowNextAndPrevButtons_bl = this.defaultShowNextAndPrevButtons_bl, this.defaultHideDescriptionButtons_bl = this.props_obj.showDescriptionButton, this.defaultHideDescriptionButtons_bl = "yes" == this.defaultHideDescriptionButtons_bl, this.DFDefaultHideDescriptionButtons_bl = this.defaultHideDescriptionButtons_bl, this.showDescriptionButton_bl = !1, this.hasItemDescription_bl = !1, this.defaultShowDescriptionByDefault_bl = this.props_obj.showDescriptionByDefault, this.defaultShowDescriptionByDefault_bl = "yes" == this.defaultShowDescriptionByDefault_bl, this.DFDefaultShowDescriptionByDefault_bl = this.defaultShowDescriptionByDefault_bl, this.showDescription_bl = this.defaultShowDescriptionByDefault_bl, this.addKeyboardSupport_bl = this.props_obj.addKeyboardSupport, this.addKeyboardSupport_bl = "yes" == this.addKeyboardSupport_bl, this.DFSddKeyboardSupport_bl = this.addKeyboardSupport_bl, this.slideShowAutoPlay_bl = this.props_obj.slideShowAutoPlay, this.slideShowAutoPlay_bl = "yes" == this.slideShowAutoPlay_bl, this.DFSlideShowAutoPlay_bl = this.slideShowAutoPlay_bl, this.videoAutoPlay_bl = this.props_obj.videoAutoPlay, this.videoAutoPlay_bl = "yes" == this.videoAutoPlay_bl, self.isMobile_bl && (self.videoAutoPlay_bl = !1), this.DFVideoAutoPlay_bl = this.videoAutoPlay_bl, this.audioAutoPlay_bl = this.props_obj.audioAutoPlay, this.audioAutoPlay_bl = "yes" == this.audioAutoPlay_bl, self.isMobile_bl && (self.audioAutoPlay_bl = !1), this.DFAudioAutoPlay_bl = this.audioAutoPlay_bl, this.nextVideoOrAudioAutoPlay_bl = this.props_obj.nextVideoOrAudioAutoPlay, this.nextVideoOrAudioAutoPlay_bl = "yes" == this.nextVideoOrAudioAutoPlay_bl, self.isMobile_bl && (self.nextVideoOrAudioAutoPlay_bl = !1), this.DFNextVideoOrAudioAutoPlay_bl = this.nextVideoOrAudioAutoPlay_bl, this.defaultShowThumbnails_bl = this.props_obj.showThumbnails, this.defaultShowThumbnails_bl = "yes" == this.defaultShowThumbnails_bl, this.DFDefaultThumbnails_bl = this.defaultShowThumbnails_bl, this.showThumbnailsByDefault_bl = this.props_obj.showThumbnailsByDefault, this.showThumbnailsByDefault_bl = "yes" == this.showThumbnailsByDefault_bl, this.DFShowThumbnailsByDefault_bl = this.showThumbnailsByDefault_bl, this.defaultShowThumbnailsHideOrShowButton_bl = this.props_obj.showThumbnailsHideOrShowButton, this.defaultShowThumbnailsHideOrShowButton_bl = "yes" == this.defaultShowThumbnailsHideOrShowButton_bl, this.DFDefaultShowThumbnailsHideOrShowButton_bl = this.defaultShowThumbnailsHideOrShowButton_bl, this.showSlideShowButton_bl = this.props_obj.showSlideShowButton, this.showSlideShowButton_bl = "yes" == this.showSlideShowButton_bl, this.DFShowSlideShowButton_bl = this.showSlideShowButton_bl, this.defaultShowSlideShowAnimation_bl = this.props_obj.showSlideShowAnimation, this.defaultShowSlideShowAnimation_bl = "yes" == this.defaultShowSlideShowAnimation_bl, this.DFSefaultShowSlideShowAnimation_bl = this.defaultShowSlideShowAnimation_bl, this.showSlideShowAnimation_bl = !1, this.useAsModal_bl = this.props_obj.useAsModal, this.useAsModal_bl = "yes" == this.useAsModal_bl, this.DFUseAsModal_bl = this.useAsModal_bl, this.showShareButton_bl = this.props_obj.showShareButton, this.showShareButton_bl = "yes" == this.showShareButton_bl, this.DFShowFacebookButton_bl = this.showShareButton_bl, this.showThumbnailsOverlay_bl = this.props_obj.showThumbnailsOverlay, this.showThumbnailsOverlay_bl = "yes" == this.showThumbnailsOverlay_bl, this.DFShowThumbnailsOverlay_bl = this.showThumbnailsOverlay_bl, this.showThumbnailsSmallIcon_bl = this.props_obj.showThumbnailsSmallIcon, this.showThumbnailsSmallIcon_bl = "yes" == this.showThumbnailsSmallIcon_bl, this.DFShowThumbnailsSmallIcon_bl = this.showThumbnailsSmallIcon_bl, this.areButtonsSharedShowed_bl = !1, this.doNotAllowToHide_bl = !1, this.isVideoFullScreen_bl = !1, this.hasKeyboardSupport_bl = !1, this.isClickedDisabled_bl = !1, this.showThumbnails_bl = !1, this.areThumbnailsShowed_bl = !1;
                this.showThumbnailsHideOrShowButton_bl = !1;
                this.isDragging_bl = !1, this.isAnimMaximizeOrMinimize_bl = !1, this.swipeMoved_bl = !1, this.isAPIReady_bl = !1, this.isLoading_bl = !1, this.isShowed_bl = !1, self.isReady_bl = !1, this.isAnim_bl = !1, this.isFirstItemShowed_bl = !1, this.firstVideoOrAudioAdded_bl = !1, this.isMaximized_bl = !1, this.useVideo_bl = !1, this.areButtonsShowed_bl = !0, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.initiallize()
            }, self.initiallize = function() {
                self.main_do = new FWDRLR3DDisplayObject("div"), self.main_do.screen.setAttribute("id", "RL"), self.main_do.getStyle().msTouchAction = "none", self.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", self.main_do.setBackfaceVisibility(), !self.isMobile_bl && FWDRLR3DUtils.isChrome && (self.main_do.hasTransform3d_bl = !1, self.main_do.hasTransform2d_bl = !1), self.main_do.getStyle().width = "100%", self.main_do.getStyle().zIndex = "100000000000000000", self.bk_do = new FWDRLR3DDisplayObject("div"), self.bk_do.getStyle().width = "100%", self.bk_do.getStyle().height = "100%", self.bk_do.getStyle().backgroundColor = self.backgroundColor_str, self.bk_do.setAlpha(0), self.mainItemHolder_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DDescriptionWindow.setPrototype(), self.desc_do = new FWDRLR3DDescriptionWindow(self, self.descriptionAnimationType_str, self.descriptionWindowPosition_str, self.itemBorderSize, self.descriptionWindowBackgroundColor_str, self.descriptionWindowBackgroundOpacity), self.itemBorder_do = new FWDR3DCarSimpleDisplayObject("div"), self.itemBorder_do.setCSSGradient(self.itemBorderColor1_str, self.itemBorderColor2_str), (!self.isMobile_bl && FWDRLR3DUtils.isChrome || FWDRLR3DUtils.isAndroid) && (self.itemBorder_do.hasTransform3d_bl = !1, self.itemBorder_do.hasTransform2d_bl = !1, self.itemBorder_do.setBackfaceVisibility()), self.itemBk_do = new FWDRLR3DDisplayObject("div"), self.itemBk_do.getStyle().backgroundColor = self.itemBkColor_str, self.itemHolder_do = new FWDRLR3DDisplayObject("div"), self.itemHolder_do.setOverflow("visible"), self.mainItemHolder_do.addChild(self.itemBorder_do), self.mainItemHolder_do.addChild(self.itemBk_do), self.mainItemHolder_do.addChild(self.itemHolder_do), self.mainItemHolder_do.addChild(self.desc_do), self.main_do.addChild(self.bk_do), self.main_do.addChild(self.mainItemHolder_do), self.stageContainer.appendChild(self.main_do.screen), (!FWDRLR3DUtils.isMobile || FWDRLR3DUtils.isMobile && FWDRLR3DUtils.hasPointerEvent) && self.main_do.setSelectable(!1), self.isMobile_bl || self.setupContextMenu(), self.setupHider(), self.setupDisableClick(), self.setupData(), self.setupInfoWindow(), self.useDeepLinking_bl && (self.setupDL(), setTimeout(function() {
                    var a = FWDAddress.getParameter("rl_playlist"),
                        b = FWDAddress.getParameter("rl_id");
                    location.href.indexOf("youtube.com") != -1 ? (a = location.href, a = a.match(/https:.*/i)[0], a.indexOf("rl_id=") && (a = a.replace(/&rl_id=.*/, ""))) : location.href.indexOf("facebook.com") != -1 && (a = location.href, a = a.match(/https:.*/i)[0], a.indexOf("rl_id=") && (a = a.replace(/&rl_id=.*/, ""))), self.propsObjVariableName_str = FWDAddress.getParameter("rl_propsobj"), location.href.indexOf("RL?") && a && b && FWDRLR3D.show(a, b, self.propsObjVariableName_str)
                }, 100))
            }, self.setupInfoWindow = function() {
                FWDRLR3DInfo.setPrototype(), self.info_do = new FWDRLR3DInfo(self, self.data.wrningIconPath_str)
            }, self.setupContextMenu = function() {
                self.customContextMenu_do = new FWDRLR3DContextMenu(self.main_do, self.rightClickContextMenu_str)
            }, this.setupHider = function() {
                FWDRLR3DHider.setPrototype(), self.hider = new FWDRLR3DHider(self.main_do, self.buttonsHideDelay), self.hider.addListener(FWDRLR3DHider.SHOW, self.hiderShowHandler), self.hider.addListener(FWDRLR3DHider.HIDE, self.hiderHideHandler)
            }, this.hiderShowHandler = function() {
                self.showButtonsWithFade(!0), self.positionButtons(!0), self.positionShareButtons(!0)
            }, this.hiderHideHandler = function() {
                if (!self.isMobile_bl) {
                    if (self.shareButtonsHolder_do && FWDRLR3DUtils.hitTest(self.shareButtonsHolder_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showCloseButton_bl && FWDRLR3DUtils.hitTest(self.closeButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showNextAndPrevButtons_bl && (FWDRLR3DUtils.hitTest(self.nextButton_do.screen, self.hider.globalX, self.hider.globalY) || FWDRLR3DUtils.hitTest(self.prevButton_do.screen, self.hider.globalX, self.hider.globalY))) return void self.hider.reset();
                    if (self.showZoomButton_bl && FWDRLR3DUtils.hitTest(self.zoomButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showDescriptionButton_bl && FWDRLR3DUtils.hitTest(self.descButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showSlideShowButton_bl && FWDRLR3DUtils.hitTest(self.slideShowButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showShareButton_bl && FWDRLR3DUtils.hitTest(self.shareButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset();
                    if (self.showThumbnailsHideOrShowButton_bl && FWDRLR3DUtils.hitTest(self.hsThumbanilsButton_do.screen, self.hider.globalX, self.hider.globalY)) return void self.hider.reset()
                }
                self.showSlideShowAnimation_bl && (self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? FWDR3DCarModTweenMax.to(self.slp_do, .8, {
                    y: self.finalY,
                    ease: Expo.easeInOut
                }) : FWDR3DCarModTweenMax.to(self.slp_do, .8, {
                    y: self.buttonsOffsetIn,
                    ease: Expo.easeInOut
                })), self.stopToCheckShareButtonsHit(), self.hideButtonsWithFade(!0)
            }, self.setupDisableClick = function() {
                self.disableClick_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIE && (self.disableClick_do.setBkColor("#FF0000"), self.disableClick_do.setAlpha(1e-5))
            }, self.disableClick = function() {
                self.showDisable(), self.disableClickId_to = setTimeout(function() {
                    self.hideDisable()
                }, 100)
            }, self.showDisable = function() {
                self.isClickedDisabled_bl || (self.isClickedDisabled_bl = !0, self.disableClick_do.setWidth(self.stageWidth), self.disableClick_do.setHeight(self.stageHeight))
            }, self.hideDisable = function() {
                self.isClickedDisabled_bl && (self.isClickedDisabled_bl = !1, self.disableClick_do.setWidth(0), self.disableClick_do.setHeight(0))
            }, self.startResizeHandler = function() {
                window.addEventListener ? (window.addEventListener("resize", self.onResizeHandler), window.addEventListener("scroll", self.scrollHandler), window.addEventListener("mousewheel", self.mouseDummyHandler), window.addEventListener("DOMMouseScroll", self.mouseDummyHandler), self.isMobile_bl && window.addEventListener("touchmove", self.mouseDummyHandler)) : window.attachEvent && (window.attachEvent("onresize", self.onResizeHandler), window.attachEvent("onscroll", self.scrollHandler), document.attachEvent("onmousewheel", self.mouseDummyHandler)), self.onResizeHandler(), setTimeout(self.scrollHandler, 200), setTimeout(self.scrollHandler, 500)
            }, self.stopResizeHandler = function() {
                clearTimeout(self.resizeHandlerId_to), window.removeEventListener ? (window.removeEventListener("resize", self.onResizeHandler), window.removeEventListener("scroll", self.scrollHandler), self.isMobile_bl && window.removeEventListener("touchmove", self.mouseDummyHandler)) : window.detachEvent && (window.detachEvent("onresize", self.onResizeHandler), window.detachEvent("onscroll", self.scrollHandler), document.detachEvent("onmousewheel", self.mouseDummyHandler))
            }, self.onResizeHandler = function(a) {
                self.resizeHandler()
            }, self.scrollHandler = function(a) {
                self.so = FWDRLR3DUtils.getScrollOffsets(), self.isShowed_bl && (self.main_do.setX(self.so.x), self.main_do.setY(self.so.y), a && a.preventDefault && a.preventDefault())
            }, self.addPreventMouseWheel = function() {
                window.addEventListener ? (window.addEventListener("mousewheel", self.mouseDummyHandler), window.addEventListener("DOMMouseScroll", self.mouseDummyHandler)) : document.attachEvent && document.attachEvent("onmousewheel", self.mouseDummyHandler)
            }, self.removePreventMouseWheel = function() {
                window.removeEventListener ? (window.removeEventListener("mousewheel", self.mouseDummyHandler), window.removeEventListener("DOMMouseScroll", self.mouseDummyHandler)) : document.detachEvent && document.detachEvent("onmousewheel", self.mouseDummyHandler)
            }, this.mouseDummyHandler = function(a) {
                return !!a.preventDefault && void a.preventDefault()
            }, self.resizeHandler = function(a) {
                self.isShowed_bl && (self.ws = FWDRLR3DUtils.getViewportSize(), self.stageWidth = self.ws.w, self.stageHeight = self.ws.h, self.isMobile_bl && (self.main_do.setWidth(self.stageWidth), self.main_do.setHeight(self.stageHeight)), self.preloader_do && self.positionPreloader(), self.info_do && self.info_do.isShowed_bl && self.info_do.positionAndResize(), self.hideShareButtons(!1, !1, !0), self.resizeCurrentItem(), self.positionButtons(), self.positionShareButtons(), self.main_do.setX(self.so.x),
                    self.main_do.setY(self.so.y), self.main_do.setHeight(self.stageHeight), self.thumbnailsManager_do && self.showThumbnails_bl && self.thumbnailsManager_do.positionAndResize(), clearTimeout(self.resizeHandlerId_to), self.resizeHandlerId_to = setTimeout(self.checkStageSizeAndResize, 50))
            }, self.checkStageSizeAndResize = function() {
                self.ws = FWDRLR3DUtils.getViewportSize(), self.stageWidth != self.ws.w && self.resizeHandler()
            }, self.setupData = function() {
                FWDRLR3DData.setPrototype(), self.data = new FWDRLR3DData(self.props_obj, self.rootElement_el, self), self.DFVideoControllerBackgroundColor_str = self.data.videoControllerBackgroundColor_str, self.DFVideoPosterBackgroundColor_str = self.data.videoPosterBackgroundColor_str, self.DFAudioControllerBackgroundColor_str = self.data.audioControllerBackgroundColor_str, self.data.addListener(FWDRLR3DData.PRELOADER_LOAD_DONE, self.onPreloaderLoadDone), self.data.addListener(FWDRLR3DData.LOAD_ERROR, self.dataLoadError), self.data.addListener(FWDRLR3DData.SKIN_LOAD_COMPLETE, self.dataSkinLoadComplete)
            }, self.onPreloaderLoadDone = function() {
                self.setupPreloader(), self.isShowed_bl && (self.positionPreloader(), self.preloader_do.show(!0), self.resizeHandler())
            }, self.dataLoadError = function(a) {
                self.preloader_do && self.preloader_do.hide(!1), self.main_do.addChild(self.info_do), self.info_do.showText(a.text), setTimeout(self.resizeHandler, 200), FWDRLR3D.dispatchEvent(FWDRLR3D.ERROR, {
                    error: a.text
                })
            }, self.dataSkinLoadComplete = function() {
                self.isReady_bl = !0, self.useVideo_bl = self.data.useVideo_bl, self.useAudio_bl = self.data.useAudio_bl, self.setupMainStuff(), clearTimeout(self.showOrHideCompleteId_to), self.showOrHideCompleteId_to = setTimeout(self.showComplete, 800), setTimeout(function() {
                    FWDRLR3D.dispatchEvent(FWDRLR3D.READY)
                }, 800)
            }, self.setupMainStuff = function() {
                self.setupButtons(), self.setupShareButtons(), self.setupTimerManager(), self.data.useVideo_bl && self.setupVideoPlayer(), self.data.useAudio_bl && self.setupAudioPlayer(), self.hideStuffForGood()
            }, self.setupVideoPlayer = function() {
                self.videoHolder_do = new FWDRLR3DDisplayObject("div"), self.videoHolder_do.setWidth(500), self.videoHolder_do.setHeight(500), self.mainItemHolder_do.addChildAt(self.videoHolder_do, 3), self.video_do = new FWDRLR3DEVPlayer(self.videoHolder_do.screen, self.data), self.video_do.addListener(FWDRLR3DEVPlayer.ERROR, self.videoErrorHandler), self.video_do.addListener(FWDRLR3DEVPlayer.GO_FULLSCREEN, self.videoFullScreenHandler), self.video_do.addListener(FWDRLR3DEVPlayer.GO_NORMALSCREEN, self.videoNormalScreenHandler)
            }, self.videoErrorHandler = function(a) {
                self.main_do.addChild(self.info_do), self.info_do.showText(a.error)
            }, self.videoFullScreenHandler = function() {
                self.isVideoFullScreen_bl = !0, self.resizeCurrentItem(), self.mainItemHolder_do.getStyle().overflow = "visible", self.setButtonsInvisible(), self.addKeyboardSupport_bl && self.removeKeyboardSupport(), self.isMobile_bl && self.removeSwipeSupport()
            }, self.videoNormalScreenHandler = function() {
                self.isVideoFullScreen_bl = !1, self.resizeCurrentItem(), self.mainItemHolder_do.getStyle().overflow = "hidden", self.setButtonsVisible(), self.addKeyboardSupport_bl && self.addKeyboardSupport(), self.isMobile_bl && self.addSwipeSupport()
            }, self.setupAudioPlayer = function() {
                self.audioHolder_do = new FWDRLR3DDisplayObject("div"), self.audioHolder_do.hasTransform3d_bl = !1, self.audioHolder_do.hasTransform2d_bl = !1, self.audioHolder_do.setWidth(500), self.audioHolder_do.setHeight(500), self.audioHolder_do.setHeight(self.data.audioControllerHeight), self.mainItemHolder_do.addChildAt(self.audioHolder_do, 3), self.mainItemHolder_do.addChildAt(self.audioHolder_do, 3), self.audio_do = new FWDRLR3DEAP(self.audioHolder_do.screen, self.data), self.audio_do.addListener(FWDRLR3DEAP.ERROR, self.videoErrorHandler)
            }, self.setupTimerManager = function() {
                FWDRLR3DTimerManager.setProtptype(), self.tm = new FWDRLR3DTimerManager(self.slideShowDelay), self.tm.addListener(FWDRLR3DTimerManager.STOP, self.tmStopHandler), self.tm.addListener(FWDRLR3DTimerManager.START, self.tmStartHandler), self.tm.addListener(FWDRLR3DTimerManager.PAUSE, self.tmPauseHandler), self.tm.addListener(FWDRLR3DTimerManager.RESUME, self.tmResumeHandler), self.tm.addListener(FWDRLR3DTimerManager.TIME, self.tmTimeHandler)
            }, self.tmStopHandler = function() {
                self.slideShowButton_do.setButtonState(1), self.showSlideShowAnimation_bl && (self.hideSlideShowAnimation(), self.positionButtons(!0)), self.showSlideShowAnimation_bl = !1
            }, self.tmStartHandler = function() {
                self.slideShowButton_do.setButtonState(0), self.showSlideShowAnimation_bl || (self.showSlideShowAnimation(), self.positionButtons(!0), self.slp_do.animShow()), self.showSlideShowAnimation_bl = !0
            }, self.tmPauseHandler = function() {
                self.showSlideShowAnimation_bl && self.slp_do.animHide()
            }, self.tmResumeHandler = function() {
                self.showSlideShowAnimation_bl && self.slp_do.animShow()
            }, self.tmTimeHandler = function() {
                self.gotoNextItem(), self.showSlideShowAnimation_bl && self.slp_do.animHide()
            }, self.setupDL = function() {
                FWDAddress.onChange = self.dlChangeHandler, self.dlChangeHandler()
            }, self.dlChangeHandler = function() {
                if (self.isReady_bl && !self.isAnim_bl && !self.isAnimMaximizeOrMinimize_bl && self.useDeepLinking_bl) {
                    if (self.isMaximized_bl) return void self.maximizeOrMinimize();
                    var a = FWDAddress.getParameter("rl_playlist"),
                        b = FWDAddress.getParameter("rl_id");
                    if (location.href.indexOf("youtube.com") != -1 ? (a = location.href, a = a.match(/https:.*/i)[0], a.indexOf("rl_id=") && (a = a.replace(/&rl_id=.*/, ""))) : location.href.indexOf("facebook.com") != -1 && (a = location.href, a = a.match(/https:.*/i)[0], a.indexOf("rl_id=") && (a = a.replace(/&rl_id=.*/, ""))), sObjVariableName_str = FWDAddress.getParameter("rl_propsobj"), !self.isShowed_bl) return void(location.href.indexOf("RL?") != -1 && a && b && FWDRLR3D.show(a, b, self.propsObjVariableName_str));
                    if (location.href.indexOf("RL?") == -1 || !a || !b) return void self.hide();
                    if (self.id = parseInt(FWDAddress.getParameter("rl_id")), self.id != self.prevId) {
                        if (self.id < 0) return self.id = 0, void(self.propsObjVariableName_str ? FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + self.propsObjVariableName_str) : FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id));
                        if (self.id > self.totalItems - 1) return self.id = self.totalItems - 1, void(self.propsObjVariableName_str ? FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + self.propsObjVariableName_str) : FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id));
                        self.createAndShowItem(), self.prevId = self.id
                    }
                }
            }, self.setupPreloader = function() {
                FWDRLR3DPreloader.setPrototype(), self.preloader_do = new FWDRLR3DPreloader(self.data.mainPreloader_img, 70, 40, 12, 60, !0), self.main_do.addChild(self.preloader_do)
            }, self.positionPreloader = function() {
                self.preloader_do.setX(parseInt((self.stageWidth - self.preloader_do.w) / 2)), self.thumbnailsManager_do && self.thumbnailsManager_do.areThumbnailsCreated_bl && self.areThumbnailsShowed_bl ? self.preloader_do.setY(parseInt((self.stageHeight - self.preloader_do.h - self.thumbnailH) / 2)) : self.preloader_do.setY(parseInt((self.stageHeight - self.preloader_do.h) / 2))
            }, self.setupThumbnailManager = function() {
                self.thumbnailsManager_do || (FWDRLR3DThumbnailsManager.setPrototype(), self.thumbnailsManager_do = new FWDRLR3DThumbnailsManager(self), self.thumbnailsManager_do.addListener(FWDRLR3DThumb.CLICK, self.thumbClickHandler), self.main_do.addChildAt(self.thumbnailsManager_do, 1))
            }, self.hideOrShowThumbnails = function() {
                self.areThumbnailsShowed_bl ? (self.hsThumbanilsButton_do.setButtonState(0), self.thumbnailsManager_do.hide(!0), self.areThumbnailsShowed_bl = !1) : (self.hsThumbanilsButton_do.setButtonState(1), self.thumbnailsManager_do.show(!0), self.areThumbnailsShowed_bl = !0), self.hideShareButtons(!0), self.resizeCurrentItem(!1, !0), self.positionButtons(!0), self.startAnim(801)
            }, self.thumbClickHandler = function(a) {
                self.gotoToItem(a.id)
            }, self.setupThumbnails = function(a) {
                setTimeout(function() {
                    self.thumbnailsManager_do && self.showThumbnails_bl && self.thumbnailsManager_do.setupThumbnails()
                }, a)
            }, self.setupButtons = function() {
                self.buttons_ar = [], self.buttonsMaxW_ar = [], FWDRLR3DSimpleButton.setPrototype(), self.closeButton_do = new FWDRLR3DSimpleButton(self.data.closeN_img, self.data.closeSPath_str), self.closeButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.closeButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.closeButton_do), self.main_do.addChild(self.closeButton_do), FWDRLR3DComplexButton.setPrototype(), self.zoomButton_do = new FWDRLR3DComplexButton(self.data.maximizeN_img, self.data.maximizeSPath_str, self.data.minimizeN_img, self.data.minimizeSPath_str, !0), self.zoomButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, self.zoomButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.zoomButton_do), self.main_do.addChild(self.zoomButton_do), FWDRLR3DComplexButton.setPrototype(), self.descButton_do = new FWDRLR3DComplexButton(self.data.infoOpenN_img, self.data.infoOpenS_str, self.data.infoCloseN_img, self.data.infoCloseS_str, !0), self.descButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, self.descButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.descButton_do), self.main_do.addChild(self.descButton_do), FWDRLR3DComplexButton.setPrototype(), self.slideShowButton_do = new FWDRLR3DComplexButton(self.data.playN_img, self.data.playS_str, self.data.pauseN_img, self.data.pauseS_str, !0), self.slideShowButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, self.slideshowButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.slideShowButton_do), self.main_do.addChild(self.slideShowButton_do), FWDRLR3DSlideShowPreloader.setPrototype(), self.data.lightboxSkinPath_str.indexOf("minimal") != -1 ? self.slp_do = new FWDRLR3DSlideShowPreloader(self.data.slideSwowImage_img, 30, 29, 60, self.slideShowDelay) : self.slp_do = new FWDRLR3DSlideShowPreloader(self.data.slideSwowImage_img, 29, 29, 60, self.slideShowDelay), self.buttonsMaxW_ar.push(self.slp_do), self.main_do.addChild(self.slp_do), FWDRLR3DComplexButton.setPrototype(), self.shareButton_do = new FWDRLR3DComplexButton(self.data.showShareImage_img, self.data.showShareImageSPath_str, self.data.hideShareImage_img, self.data.hideShareImageSPath_str, !0), self.shareButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, self.shareButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.shareButton_do), self.main_do.addChild(self.shareButton_do), FWDRLR3DSimpleButton.setPrototype(), self.nextButton_do = new FWDRLR3DSimpleButton(self.data.nextN_img, self.data.nextSPath_str), self.nextButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.nextButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.nextButton_do), self.main_do.addChild(self.nextButton_do), FWDRLR3DSimpleButton.setPrototype(), self.prevButton_do = new FWDRLR3DSimpleButton(self.data.prevN_img, self.data.prevSPath_str), self.prevButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.prevButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.prevButton_do), self.main_do.addChild(self.prevButton_do), FWDRLR3DComplexButton.setPrototype(), self.hsThumbanilsButton_do = new FWDRLR3DComplexButton(self.data.hideThumbnailsN_img, self.data.hideThumbnailsSPath_str, self.data.showThumbnailsN_img, self.data.showThumbnailsSPath_str, !0), self.hsThumbanilsButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, self.hsButtonOnMouseUpHandler), self.buttonsMaxW_ar.push(self.hsThumbanilsButton_do), self.main_do.addChild(self.hsThumbanilsButton_do);
                for (var a = 0; a < self.buttonsMaxW_ar.length; a++) self.maxButtonW < self.buttonsMaxW_ar[a].h && (self.maxButtonW = self.buttonsMaxW_ar[a].w)
            }, self.closeButtonOnMouseUpHandler = function() {
                self.hide()
            }, self.zoomButtonOnMouseUpHandler = function(a) {
                self.maximizeOrMinimize()
            }, self.shareButtonOnMouseUpHandler = function() {
                1 == self.shareButton_do.currentState ? self.areButtonsShowed_bl && self.showShareButtons(!0) : self.hideShareButtons(!0)
            }, self.nextButtonOnMouseUpHandler = function() {
                self.gotoNextItem()
            }, self.prevButtonOnMouseUpHandler = function() {
                self.gotoPrevItem()
            }, self.descButtonOnMouseUpHandler = function() {
                self.isAnim_bl || (self.hideShareButtons(!0), self.showDescription_bl ? (self.showDescription_bl = !1, self.descButton_do.setButtonState(1), self.desc_do.hide(!0)) : (self.showDescription_bl = !0, self.descButton_do.setButtonState(0), self.desc_do.show(!0)))
            }, self.slideshowButtonOnMouseUpHandler = function() {
                self.tm.isStopped_bl ? (self.tm.start(), self.hideShareButtons(!0)) : self.tm.stop()
            }, self.hsButtonOnMouseUpHandler = function() {
                (!self.isMobile_bl && self.stageWidth < self.thumbnailsManager_do.totalW + 2 * (self.hsThumbanilsButton_do.w + self.buttonsOffsetIn) || self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN) && self.disableClick(), self.hideOrShowThumbnails()
            }, this.setupShareButtons = function() {
                var a;
                this.maxShareButtonsW = 0, this.shareButtonsHolder_do = new FWDRLR3DDisplayObject("div"), this.shareButtonsHolder_do.setOverflow("visible"), this.shareButtons_ar = [], self.main_do.addChild(self.shareButtonsHolder_do), FWDRLR3DSimpleButton.setPrototype(), self.facebookButtonButton_do = new FWDRLR3DSimpleButton(self.data.facebookN_img, self.data.facebookImageSPath_str), self.facebookButtonButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.facebookButtonOnMouseUpHandler), self.shareButtonsHolder_do.addChild(self.facebookButtonButton_do), this.shareButtons_ar.push(self.facebookButtonButton_do), FWDRLR3DSimpleButton.setPrototype(), self.twitterButtonButton_do = new FWDRLR3DSimpleButton(self.data.twitterN_img, self.data.twitterImageSPath_str), self.twitterButtonButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.twitterButtonOnMouseUpHandler), self.shareButtonsHolder_do.addChild(self.twitterButtonButton_do), this.shareButtons_ar.push(self.twitterButtonButton_do), FWDRLR3DSimpleButton.setPrototype(), self.googleButtonButton_do = new FWDRLR3DSimpleButton(self.data.googleN_img, self.data.googleImageSPath_str), self.googleButtonButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, self.googleButtonOnMouseUpHandler), self.shareButtonsHolder_do.addChild(self.googleButtonButton_do), this.shareButtons_ar.push(self.googleButtonButton_do);
                for (var b = 0; b < this.shareButtons_ar.length; b++) a = this.shareButtons_ar[b], a.w > this.maxShareButtonsW && (this.maxShareButtonsW = a.w);
                for (var b = 0; b < this.shareButtons_ar.length; b++) a = this.shareButtons_ar[b], a.setX(parseInt((this.maxShareButtonsW - a.w) / 2)), 0 == b ? a.setY(self.spaceBetweenButtons) : a.setY(this.shareButtons_ar[b - 1].y + this.shareButtons_ar[b - 1].h + self.spaceBetweenButtons);
                this.shareButtonsHolder_do.setWidth(this.maxShareButtonsW), this.shareButtonsHolder_do.setHeight(a.y + a.h), this.hideShareButtons(!1)
            }, self.facebookButtonOnMouseUpHandler = function(a) {
                var b = "http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href);
                window.open(b, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600")
            }, self.twitterButtonOnMouseUpHandler = function(a) {
                var b = "http://twitter.com/home?status=" + encodeURIComponent(location.href);
                window.open(b, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600")
            }, self.googleButtonOnMouseUpHandler = function(a) {
                var b = "https://plus.google.com/share?url=" + encodeURIComponent(location.href);
                window.open(b, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600")
            }, this.positionShareButtons = function(a) {
                this.shareButtonsHolder_do && void 0 != this.shareButton_do.finalX && (this.shareButtonsHolder_do.finalX = this.shareButton_do.finalX, this.shareButtonsHolder_do.finalY = this.shareButton_do.finalY + this.shareButton_do.h, FWDR3DCarModTweenMax.killTweensOf(self.shareButtonsHolder_do), a ? FWDR3DCarModTweenMax.to(self.shareButtonsHolder_do, .8, {
                    x: this.shareButtonsHolder_do.finalX,
                    y: this.shareButtonsHolder_do.finalY,
                    ease: Expo.easeInOut
                }) : (this.shareButtonsHolder_do.setX(this.shareButtonsHolder_do.finalX), this.shareButtonsHolder_do.setY(this.shareButtonsHolder_do.finalY)))
            }, this.showShareButtons = function() {
                var b, a = 0;
                this.areButtonsSharedShowed_bl = !0, self.shareButton_do.setButtonState(0), this.positionShareButtons(!1), this.shareButtonsHolder_do.setVisible(!0), this.nextButton_do && this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.nextButton_do.y && FWDR3DCarModTweenMax.to(self.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Expo.easeInOut
                }), this.hsThumbanilsButton_do && this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.hsThumbanilsButton_do.y && this.shareButtonsHolder_do.x == this.hsThumbanilsButton_do.x && FWDR3DCarModTweenMax.to(self.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Expo.easeInOut
                });
                for (var c = 0; c < this.shareButtons_ar.length; c++) b = this.shareButtons_ar[c], FWDR3DCarModTweenMax.killTweensOf(b), b.setAlpha(0), FWDR3DCarModTweenMax.to(b, .8, {
                    alpha: 1,
                    delay: a,
                    ease: Expo.easeInOut
                }), a += .1;
                this.startToCheckShareButtonsHit()
            }, this.startToCheckShareButtonsHit = function() {
                window.addEventListener ? window.addEventListener("click", self.checkThumbnailHit) : window.attachEvent("onclick", self.checkThumbnailHit)
            }, this.stopToCheckShareButtonsHit = function() {
                window.removeEventListener ? window.removeEventListener("click", self.checkThumbnailHit) : window.detachEvent("onclick", self.checkThumbnailHit), this.shareButton_do && this.shareButton_do.setNormalState(!0), clearTimeout(self.hitThhumbnailId_to), self.hideShareButtons(!0)
            }, this.checkThumbnailHit = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                if (!FWDRLR3DUtils.hitTest(self.shareButtonsHolder_do.screen, b.screenX, b.screenY) && !FWDRLR3DUtils.hitTest(self.shareButton_do.screen, b.screenX, b.screenY)) return void self.stopToCheckShareButtonsHit()
            }, this.hideShareButtons = function(a, b, c) {
                if (this.shareButton_do) {
                    var d;
                    if (this.areButtonsSharedShowed_bl = !1, self.shareButton_do.setButtonState(1), a || this.shareButtonsHolder_do.setVisible(!1), b) FWDR3DCarModTweenMax.to(self.shareButtonsHolder_do, .8, {
                        x: self.stageWidth,
                        ease: Expo.easeInOut
                    });
                    else {
                        for (var e = 0; e < this.shareButtons_ar.length; e++) d = this.shareButtons_ar[e], FWDR3DCarModTweenMax.killTweensOf(d), FWDR3DCarModTweenMax.to(d, .8, {
                            alpha: 0,
                            ease: Expo.easeOut,
                            onComplete: function() {
                                self.shareButtonsHolder_do.setVisible(!1)
                            }
                        });
                        this.nextButton_do && this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.nextButton_do.y && 1 == this.shareButton_do.buttonsHolder_do.alpha && FWDR3DCarModTweenMax.to(self.nextButton_do.buttonsHolder_do, .8, {
                            alpha: 1,
                            ease: Expo.easeOut
                        }), this.hsThumbanilsButton_do && this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.hsThumbanilsButton_do.y && 1 == this.shareButton_do.buttonsHolder_do.alpha && FWDR3DCarModTweenMax.to(self.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                            alpha: 1,
                            ease: Expo.easeOut
                        })
                    }
                }
            }, self.showCloseButton = function() {
                self.showCloseButton_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) == -1 && self.buttons_ar.splice(0, 0, self.closeButton_do)
            }, self.hideCloseButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.zoomButton_do), self.closeButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do), 1))
            }, self.hideZoomButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.zoomButton_do), self.zoomButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do), 1))
            }, self.showZoomButton = function() {
                self.defaultShowZoomButton_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) == -1 && (FWDR3DCarModTweenMax.killTweensOf(self.zoomButton_do), FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? (self.zoomButton_do.setX(self.closeButton_do.x), self.zoomButton_do.setY(self.closeButton_do.y + self.closeButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.zoomButton_do)) : (self.isFirstItemShowed_bl && (self.zoomButton_do.setX(self.mainItemHolder_do.x + self.mainItemHolder_do.w + self.buttonsOffsetIn), self.zoomButton_do.setY(self.mainItemHolder_do.y)), self.buttons_ar.splice(0, 0, self.zoomButton_do)))
            }, self.showDescriptionButton = function() {
                self.defaultHideDescriptionButtons_bl && (self.showDescriptionButton_bl = !0, FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) == -1 && (FWDR3DCarModTweenMax.killTweensOf(self.descButton_do), FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 ? (self.descButton_do.setX(self.zoomButton_do.x), self.descButton_do.setY(self.zoomButton_do.y + self.zoomButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) + 1, 0, self.descButton_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? (self.descButton_do.setX(self.closeButton_do.x), self.descButton_do.setY(self.closeButton_do.y + self.closeButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.descButton_do)) : (self.isFirstItemShowed_bl && (self.descButton_do.setX(self.mainItemHolder_do.x + self.mainItemHolder_do.w + self.buttonsOffsetIn), self.descButton_do.setY(self.mainItemHolder_do.y)), self.buttons_ar.splice(0, 0, self.descButton_do))))
            }, self.hideDescriptionButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) != -1 && (self.showDescriptionButton_bl = !1, FWDR3DCarModTweenMax.killTweensOf(self.descButton_do), self.descButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do), 1))
            }, self.hideSlideshowButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.slideShowButton_do), self.slideShowButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do), 1))
            }, self.showSlideshowButton = function() {
                self.showSlideShowButton_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) == -1 && (FWDR3DCarModTweenMax.killTweensOf(self.slideShowButton_do), FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) != -1 ? (self.slideShowButton_do.setX(self.descButton_do.x), self.slideShowButton_do.setY(self.descButton_do.y + self.descButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) + 1, 0, self.slideShowButton_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 ? (self.slideShowButton_do.setX(self.zoomButton_do.x), self.slideShowButton_do.setY(self.zoomButton_do.y + self.zoomButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) + 1, 0, self.slideShowButton_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? (self.slideShowButton_do.setX(self.closeButton_do.x), self.slideShowButton_do.setY(self.closeButton_do.y + self.closeButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.slideShowButton_do)) : (self.isFirstItemShowed_bl && (self.slideShowButton_do.setX(self.mainItemHolder_do.x + self.mainItemHolder_do.w + self.buttonsOffsetIn), self.slideShowButton_do.setY(self.mainItemHolder_do.y)), self.buttons_ar.splice(0, 0, self.slideShowButton_do)))
            }, self.hideSlideShowAnimation = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.slp_do), self.slp_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do), 1))
            }, self.showSlideShowAnimation = function() {
                self.defaultShowSlideShowAnimation_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) == -1 && (FWDR3DCarModTweenMax.killTweensOf(self.slp_do), FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) != -1 ? (self.slp_do.setX(self.slideShowButton_do.x), self.slp_do.setY(self.slideShowButton_do.y + self.slideShowButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) + 1, 0, self.slp_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) != -1 ? (self.slp_do.setX(self.descButton_do.x), self.slp_do.setY(self.descButton_do.y + self.descButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) + 1, 0, self.slp_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 ? (self.slp_do.setX(self.zoomButton_do.x), self.slp_do.setY(self.zoomButton_do.y + self.zoomButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) + 1, 0, self.slp_do)) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? (self.slp_do.setX(self.closeButton_do.x), self.slp_do.setY(self.closeButton_do.y + self.closeButton_do.h + self.spaceBetweenButtons), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.slp_do)) : (self.isFirstItemShowed_bl && (self.slp_do.setX(self.mainItemHolder_do.x + self.mainItemHolder_do.w + self.buttonsOffsetIn), self.slp_do.setY(self.mainItemHolder_do.y)), self.buttons_ar.splice(0, 0, self.slp_do)))
            }, self.hideFacebookButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.shareButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.shareButton_do), self.shareButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.shareButton_do), 1))
            }, self.showShareButton = function() {
                self.showShareButton_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.shareButton_do) == -1 && (FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) + 1, 0, self.shareButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) + 1, 0, self.shareButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) + 1, 0, self.shareButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) + 1, 0, self.shareButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.shareButton_do) : self.buttons_ar.splice(0, 0, self.shareButton_do))
            }, self.hideNextAndPrevButtons = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.nextButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.nextButton_do), FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do), self.prevButton_do.setX(-5e3), self.nextButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.nextButton_do), 1))
            }, self.showNextAndPrevButtons = function() {
                self.defaultShowNextAndPrevButtons_bl && self.showNextAndPrevButtons_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.nextButton_do) == -1 && (FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.shareButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.shareButton_do) + 1, 0, self.nextButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slp_do) + 1, 0, self.nextButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.slideShowButton_do) + 1, 0, self.nextButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.descButton_do) + 1, 0, self.nextButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.zoomButton_do) + 1, 0, self.nextButton_do) : FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) != -1 ? self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.closeButton_do) + 1, 0, self.nextButton_do) : self.buttons_ar.splice(0, 0, self.nextButton_do))
            }, self.hideHsThumbnailButton = function() {
                FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.hsThumbanilsButton_do) != -1 && (FWDR3DCarModTweenMax.killTweensOf(self.hsThumbanilsButton_do), self.hsThumbanilsButton_do.setX(-5e3), self.buttons_ar.splice(FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.hsThumbanilsButton_do), 1))
            }, self.showHsThumbnailButton = function() {
                self.showThumbnailsHideOrShowButton_bl && FWDRLR3DUtils.indexOfArray(self.buttons_ar, self.hsThumbanilsButton_do) == -1 && self.buttons_ar.splice(self.buttons_ar.length, 0, self.hsThumbanilsButton_do)
            }, self.positionButtons = function(a) {
                if (self.isFirstItemShowed_bl && self.isShowed_bl && self.isReady_bl) {
                    var b = 0,
                        c = 0;
                    self.areThumbnailsShowed_bl && (b = Math.round((self.thumbnailH + self.spaceBetweenThumbnailsAndItem) / 2 - self.spaceBetweenThumbnailsAndItem / 2)), self.showNextAndPrevButtons_bl && (self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? self.prevButton_do.finalX = self.finalX - self.prevButton_do.w - self.buttonsOffsetIn : self.prevButton_do.finalX = self.buttonsOffsetIn, self.prevButton_do.finalY = parseInt((self.stageHeight - self.prevButton_do.h) / 2) - b, void 0 == self.prevButton_do.finalX && (self.prevButton_do.finalX = -5e3), void 0 == self.prevButton_do.finalY && (self.prevButton_do.finalY = -5e3));
                    for (var d, e, f = self.buttons_ar.length, g = 0; g < f; g++) d = self.buttons_ar[g], d && (c += d.h + self.spaceBetweenButtons);
                    c -= self.spaceBetweenButtons;
                    for (var h = 0; h < f; h++)
                        if (d = self.buttons_ar[h]) {
                            if (0 != h && (e = self.buttons_ar[h - 1]), self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? d.finalX = self.finalX + self.finalW + self.buttonsOffsetIn : d.finalX = self.stageWidth - d.w - self.buttonsOffsetIn, c > self.finalH && self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? 0 == h ? self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? self.areThumbnailsShowed_bl ? d.finalY = parseInt((self.stageHeight - c - self.thumbnailH) / 2) : d.finalY = parseInt((self.stageHeight - c) / 2) : d.finalY = self.buttonsOffsetIn : d.finalY = e.finalY + e.h + self.spaceBetweenButtons : (self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? d.finalY = self.finalY : d.finalY = self.buttonsOffsetIn, e ? (d.finalY = e.finalY + e.h + self.spaceBetweenButtons, d == self.nextButton_do ? d.finalY < self.prevButton_do.finalY && (d.finalY = self.prevButton_do.finalY) : d == self.hsThumbanilsButton_do && (d.finalY = self.finalY + self.finalH - d.h, d.finalY < e.finalY + e.h + self.spaceBetweenButtons && self.stageWidth < self.thumbnailsManager_do.totalW + 2 * (d.w + self.buttonsOffsetIn) && (d.finalY = e.finalY + e.h + self.spaceBetweenButtons))) : d == self.nextButton_do ? d.finalY < self.prevButton_do.finalY && (d.finalY = self.prevButton_do.finalY) : d == self.hsThumbanilsButton_do && (d.finalY = self.finalY + self.finalH - d.h)), d == self.zoomButton_do && self.isMaximized_bl && (d.finalX = self.stageWidth - d.w - 1, d.finalY = 1), d == self.hsThumbanilsButton_do)
                                if (self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN) {
                                    if (d.finalY + d.h > self.stageHeight - self.thumbnailH && self.areThumbnailsShowed_bl && (d.finalX = self.finalX - d.w - self.buttonsOffsetIn, d.finalY = self.finalY + self.finalH - d.h, self.showNextAndPrevButtons_bl && d.finalY < self.prevButton_do.finalY + self.prevButton_do.h + self.spaceBetweenButtons && (d.finalY = self.prevButton_do.finalY + self.prevButton_do.h + self.spaceBetweenButtons), h == f - 1))
                                        for (var i = 0; i < f - 1; i++) self.buttons_ar[i].finalY += parseInt(self.hsThumbanilsButton_do.h / 2)
                                } else self.areThumbnailsShowed_bl ? self.thumbnailsManager_do && self.stageWidth > self.thumbnailsManager_do.totalW + 2 * (d.w + self.buttonsOffsetIn) ? d.finalY = self.stageHeight - d.h - self.buttonsOffsetIn : d.finalY = self.stageHeight - d.h - self.thumbnailH - self.buttonsOffsetIn : d.finalY = self.stageHeight - d.h - self.buttonsOffsetIn, e && e.finalY + e.h + d.h + self.spaceBetweenButtons + self.buttonsOffsetIn > self.stageHeight - self.thumbnailH && self.areThumbnailsShowed_bl && self.stageWidth < self.thumbnailsManager_do.totalW + 2 * (d.w + self.buttonsOffsetIn) && (d.finalX = self.buttonsOffsetIn);
                            self.hider.isHidden_bl && d == self.slp_do && (self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? d.finalY = self.finalY : d.finalY = self.buttonsOffsetIn)
                        } self.showNextAndPrevButtons_bl && (a ? (FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do), FWDR3DCarModTweenMax.to(self.prevButton_do, .8, {
                        x: self.prevButton_do.finalX,
                        y: self.prevButton_do.finalY,
                        ease: Expo.easeInOut
                    })) : (FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do), self.prevButton_do.setX(self.prevButton_do.finalX),
                        self.prevButton_do.setY(self.prevButton_do.finalY)));
                    for (var h = 0; h < f; h++) d = self.buttons_ar[h], d.x == d.finalX && d.y == d.finalY || (FWDR3DCarModTweenMax.killTweensOf(d), a ? FWDR3DCarModTweenMax.to(d, .8, {
                        x: d.finalX,
                        y: d.finalY,
                        ease: Expo.easeInOut
                    }) : (d.setX(d.finalX), d.setY(d.finalY)));
                    this.positionShareButtons(a)
                }
            }, self.hideButtons = function(a) {
                if (self.isReady_bl) {
                    var b, c = self.buttons_ar.length;
                    self.showNextAndPrevButtons_bl && (self.prevButton_do.finalX = -self.prevButton_do.w, void 0 == self.prevButton_do.finalX && (self.prevButton_do.finalX = -1), void 0 == self.prevButton_do.finalY && (self.prevButton_do.finalY = -1));
                    for (var d = 0; d < c; d++) b = self.buttons_ar[d], b && (isNaN(b.finalX) || (b.finalX > self.stageWidth / 2 ? b.finalX = self.stageWidth : b.finalX = -b.w), void 0 === b.finalX && (b.finalX = -5e3), void 0 === b.finalY && (b.finalY = -5e3), a ? (0 == d && self.showNextAndPrevButtons_bl && (FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do), FWDR3DCarModTweenMax.to(self.prevButton_do, .8, {
                        alpha: 1,
                        x: self.prevButton_do.finalX,
                        y: self.prevButton_do.finalY,
                        ease: Expo.easeInOut
                    })), FWDR3DCarModTweenMax.killTweensOf(b), FWDR3DCarModTweenMax.to(b, .8, {
                        alpha: 1,
                        x: b.finalX,
                        y: b.finalY,
                        ease: Expo.easeInOut
                    })) : (0 == d && self.showNextAndPrevButtons_bl && (FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do), self.prevButton_do.setX(self.prevButton_do.finalX), self.prevButton_do.setY(self.prevButton_do.finalY)), FWDR3DCarModTweenMax.killTweensOf(b), b.setAlpha(1), b.setX(b.finalX), b.setY(b.finalY)))
                }
            }, self.hideStuffForGood = function() {
                self.shareButton_do && self.shareButton_do.setX(-5e3), self.prevButton_do.setX(-5e3), self.nextButton_do.setX(-5e3), self.closeButton_do.setX(-5e3), self.zoomButton_do.setX(-5e3), self.descButton_do.setX(-5e3), self.slideShowButton_do.setX(-5e3), self.slp_do.setX(-5e3), self.hsThumbanilsButton_do.setX(-5e3), self.videoHolder_do && (self.video_do.stop(), self.videoHolder_do.setX(-5e3), self.videoHolder_do.w = 1, self.videoHolder_do.h = 1), self.audioHolder_do && (self.audio_do.stop(), self.audioHolder_do.setX(-5e3), self.audioHolder_do.w = 1, self.audioHolder_do.h = 1)
            }, self.showButtonsWithFade = function(a) {
                self.isReady_bl && (self.areButtonsShowed_bl = !0, a ? (this.shareButtonsHolder_do && this.areButtonsSharedShowed_bl ? this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.nextButton_do.y && FWDR3DCarModTweenMax.to(self.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Expo.easeInOut
                }) : FWDR3DCarModTweenMax.to(self.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.prevButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.closeButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.zoomButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), this.shareButtonsHolder_do && this.areButtonsSharedShowed_bl ? this.shareButtonsHolder_do.y + this.shareButtonsHolder_do.h + self.spaceBetweenButtons > this.hsThumbanilsButton_do.y && this.shareButtonsHolder_do.finalX == this.hsThumbanilsButton_do.finalX && FWDR3DCarModTweenMax.to(self.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Expo.easeInOut
                }) : FWDR3DCarModTweenMax.to(self.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.descButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.slideShowButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), self.shareButton_do && FWDR3DCarModTweenMax.to(self.shareButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                })) : (FWDR3DCarModTweenMax.killTweensOf(self.nextButton_do.buttonsHolder_do), FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do.buttonsHolder_do), self.nextButton_do.buttonsHolder_do.setAlpha(1), self.prevButton_do.buttonsHolder_do.setAlpha(1), FWDR3DCarModTweenMax.killTweensOf(self.nextButton_do.closeButton_do), self.closeButton_do.buttonsHolder_do.setAlpha(1), FWDR3DCarModTweenMax.killTweensOf(self.zoomButton_do.closeButton_do), self.zoomButton_do.buttonsHolder_do.setAlpha(1), FWDR3DCarModTweenMax.killTweensOf(self.hsThumbanilsButton_do.hsThumbanilsButton_do), self.hsThumbanilsButton_do.buttonsHolder_do.setAlpha(1), FWDR3DCarModTweenMax.killTweensOf(self.descButton_do.descButton_do), self.descButton_do.buttonsHolder_do.setAlpha(1), self.shareButton_do && (FWDR3DCarModTweenMax.killTweensOf(self.shareButton_do.descButton_do), self.shareButton_do.buttonsHolder_do.setAlpha(1))))
            }, self.hideButtonsWithFade = function(a) {
                a ? (FWDR3DCarModTweenMax.to(self.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.prevButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.closeButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.zoomButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.descButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.slideShowButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), self.shareButton_do && FWDR3DCarModTweenMax.to(self.shareButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                })) : (FWDR3DCarModTweenMax.killTweensOf(self.nextButton_do.buttonsHolder_do), FWDR3DCarModTweenMax.killTweensOf(self.prevButton_do.buttonsHolder_do), self.nextButton_do.buttonsHolder_do.setAlpha(0), self.prevButton_do.buttonsHolder_do.setAlpha(0), FWDR3DCarModTweenMax.killTweensOf(self.nextButton_do.closeButton_do), self.closeButton_do.buttonsHolder_do.setAlpha(0), FWDR3DCarModTweenMax.killTweensOf(self.zoomButton_do.closeButton_do), self.zoomButton_do.buttonsHolder_do.setAlpha(0), FWDR3DCarModTweenMax.killTweensOf(self.hsThumbanilsButton_do.hsThumbanilsButton_do), self.hsThumbanilsButton_do.buttonsHolder_do.setAlpha(0), FWDR3DCarModTweenMax.killTweensOf(self.hsThumbanilsButton_do.descButton_do), self.descButton_do.buttonsHolder_do.setAlpha(0), FWDR3DCarModTweenMax.killTweensOf(self.slideShowButton_do.descButton_do), self.slideShowButton_do.buttonsHolder_do.setAlpha(0), self.shareButton_do && (FWDR3DCarModTweenMax.killTweensOf(self.shareButton_do.descButton_do), self.shareButton_do.buttonsHolder_do.setAlpha(0))), self.areButtonsShowed_bl = !1
            }, this.parsePlaylistObject = function(a, b, c) {
                if (0 == b && a.thumbnailPath_str && (self.areThumbnailsShowed_bl = !1, self.setupThumbnailManager(), self.showThumbnailsByDefault_bl ? (self.thumbnailsManager_do.show(!1), self.areThumbnailsShowed_bl = !0) : (self.thumbnailsManager_do.hide(!1), self.areThumbnailsShowed_bl = !1), self.defaultShowThumbnails_bl ? self.showThumbnails_bl = !0 : (self.showThumbnails_bl = !1, self.areThumbnailsShowed_bl = !1), self.defaultShowThumbnailsHideOrShowButton_bl && self.defaultShowThumbnails_bl ? self.showThumbnailsHideOrShowButton_bl = !0 : self.showThumbnailsHideOrShowButton_bl = !1), 0 != b || a.thumbnailPath_str || (self.areThumbnailsShowed_bl = !1, self.showThumbnails_bl = !1, self.showThumbnailsHideOrShowButton_bl = !1), /\.jpg|\.jpeg|\.png/i.test(a.type_str) ? (a.iconType_str = FWDRLR3DThumb.IMAGE, a.type_str = FWDRLR3D.IMAGE_TYPE, a.width = void 0, a.height = void 0) : /\.mp4/i.test(a.type_str) ? (a.iconType_str = FWDRLR3DThumb.VIDEO, a.type_str = FWDRLR3D.VIDEO_TYPE) : /\.mp3/i.test(a.type_str) || "-soundcloud-" == a.type_str ? (a.type_str = FWDRLR3D.AUDIO_TYPE, a.iconType_str = FWDRLR3DThumb.AUDIO) : /\.swf/i.test(a.type_str) ? (a.type_str = FWDRLR3D.FLASH_TYPE, a.iconType_str = FWDRLR3DThumb.FLASH) : /youtube\.|vimeo\./i.test(a.type_str) ? (a.type_str.indexOf("youtube.") != -1 ? a.iconType_str = FWDRLR3DThumb.YOUTUBE : a.iconType_str = FWDRLR3DThumb.VIMEO, a.type_str = FWDRLR3D.IFRAME_TYPE) : (a.type_str.indexOf("google.") != -1 ? a.iconType_str = FWDRLR3DThumb.MAPS : a.type_str.indexOf("RL_AJAX") != -1 ? a.iconType_str = FWDRLR3DThumb.AJAX : a.type_str.indexOf("RL_HTML") != -1 ? a.iconType_str = FWDRLR3DThumb.HTML : a.iconType_str = FWDRLR3DThumb.IFRAME, a.type_str = FWDRLR3D.IFRAME_TYPE), (a.type_str == FWDRLR3D.IMAGE_TYPE || a.type_str == FWDRLR3D.VIDEO_TYPE) && a.type_str == FWDRLR3D.VIDEO_TYPE) {
                    var d = encodeURI(a.url.substr(0, a.url.lastIndexOf("/") + 1)),
                        e = encodeURIComponent(a.url.substr(a.url.lastIndexOf("/") + 1));
                    a.url = d + e
                }
                self.playlist_ar[b] = a
            }, FWDRLR3D.show = function(a, b, c) {
                if (!self.isShowed_bl) {
                    if (self.id = b, self.propsObjVariableName_str = c, FWDRLR3D.dispatchEvent(FWDRLR3D.SHOW_START, {
                            obj: a
                        }), !a) {
                        return void alert("Revolution lightbox error! Please specify a playlist in the FWDRLR3D.show() method.")
                    }
                    if (self.setDefaultSettings(), c && window[c]) {
                        var e = window[c];
                        self.setObjectPropsSettings(e)
                    } else self.setDefaultSettings();
                    self.stopToLoadPlaylist(), self.isPlaylistDispatchingError_bl = !1, a.indexOf("facebook.com") != -1 ? (self.isFacebook_bl = !0, self.facebookUrl_str = String(a.match(/[\.][0-9]*[\.|&]/i)[0]).replace(/\.|&/g, ""), self.originalFacebookURL_str = a, self.isPlaylistDispatchingError_bl = !0, self.loadFacebookPlaylist()) : a.indexOf("youtube.com") != -1 ? (self.isYoutube_bl = !0, self.nextPageToken_str = void 0, self.youtubeUrl_str = a.match(/list=([^&]+)/i)[1], self.originalYoutubeURL_str = a, self.isPlaylistDispatchingError_bl = !0, self.loadYoutubePlaylist()) : a.indexOf("soundcloud.com") != -1 ? (self.isSoundCloud_bl = !0, self.soundCloundUrl_str = a, self.isPlaylistDispatchingError_bl = !0, self.loadSoundCloudPlaylist()) : a.indexOf("flickr.com") != -1 ? (self.isFlickr_bl = !0, self.originalFlickrURL_str = a, self.flickrUrl_str = String(a.match(/[^\/]+$/i)), self.isPlaylistDispatchingError_bl = !0, self.loadFlickrPlaylist()) : FWDRLR3D.parsePlaylist(a, b, c), self.so = FWDRLR3DUtils.getScrollOffsets(), self.isShowed_bl = !0, self.isAnim_bl = !0, self.showSlideShowAnimation_bl = !1, self.showDescription_bl = self.defaultShowDescriptionByDefault_bl, self.startResizeHandler(), self.addPreventMouseWheel(), clearTimeout(self.showOrHideCompleteId_to), self.showOrHideCompleteId_to = setTimeout(self.showComplete, 401), FWDR3DCarModTweenMax.to(self.bk_do, .8, {
                        alpha: self.backgroundOpacity,
                        ease: Quint.easeOut
                    }), self.preloader_do && (self.positionPreloader(), self.preloader_do.show(!0)), self.main_do.addChild(self.disableClick_do), self.isReady_bl && (self.hideButtons(), self.hideStuffForGood()), self.desc_do.hide(!1, !0, !0), self.thumbnailsManager_do && self.thumbnailsManager_do.destoryThumbnails()
                }
            }, this.loadSoundCloudPlaylist = function() {
                if (self.soundCloundUrl_str.indexOf("likes") != -1 && (self.soundCloundUrl_str = self.soundCloundUrl_str.replace(/\/likes$/, "/favorites")), self.soundCloundUrl_str.indexOf("api.soundcloud.") == -1 ? url = "http://api.soundcloud.com/resolve?format=json&url=" + self.soundCloundUrl_str + "&limit=100&client_id=" + self.scClientId_str + "&callback=FWDRLR3D.parsePlaylist" : url = self.sourceURL_str + "?format=json&client_id=" + self.scClientId_str + "&limit=100&callback=FWDRLR3D.parsePlaylist", null == self.scs_el) try {
                    self.scs_el = document.createElement("script"), self.scs_el.src = url, self.scs_el.id = parent.instanceName_str + ".data.parseflickrPlaylist", document.documentElement.appendChild(self.scs_el)
                } catch (a) {}
                self.JSONPRequestTimeoutId_to = setTimeout(function() {
                    var a = "Soundcloud playlist can't be loaded : <font color='#FF0000'>" + self.soundCloundUrl_str + "</font>.";
                    self.main_do.addChild(self.info_do), self.info_do.showText(a), self.isAnim_bl = !1
                }, 5e3)
            }, this.loadFlickrPlaylist = function() {
                if (url = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + self.flickrAPIKey_str + "&photoset_id=" + self.flickrUrl_str + "&format=json&jsoncallback=FWDRLR3D.parsePlaylist", null == self.scs_el) try {
                    self.scs_el = document.createElement("script"), self.scs_el.src = url, self.scs_el.id = "FWDRLR3DIFRAMELOAD", document.documentElement.appendChild(self.scs_el)
                } catch (a) {}
                self.JSONPRequestTimeoutId_to = setTimeout(function() {
                    var a = "Flick playlist with the id: <font color='#FF0000'>" + self.soundCloundUrl_str + "</font> can't be loaded.";
                    self.main_do.addChild(self.info_do), self.info_do.showText(a), self.isAnim_bl = !1
                }, 5e3)
            }, this.loadYoutubePlaylist = function() {
                var a;
                if (self.nextPageToken_str ? a = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=" + self.nextPageToken_str + "&playlistId=" + self.youtubeUrl_str + "&key=AIzaSyAlyhJ-C5POyo4hofPh3b7ECAxWy6t6lyg&maxResults=50&callback=FWDRLR3D.parsePlaylist" : (self.youtubeObject_ar = [], a = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + self.youtubeUrl_str + "&key=AIzaSyAlyhJ-C5POyo4hofPh3b7ECAxWy6t6lyg&maxResults=50&callback=FWDRLR3D.parsePlaylist"), null == self.scs_el) try {
                    self.scs_el = document.createElement("script"), self.scs_el.src = a, self.scs_el.id = "FWDRLR3DIFRAMELOAD", document.documentElement.appendChild(self.scs_el)
                } catch (a) {}
                self.JSONPRequestTimeoutId_to = setTimeout(function() {
                    var a = "Error loading Youtube playlist: <font color='#FF0000'>" + self.originalYoutubeURL_str + "</font>.";
                    self.main_do.addChild(self.info_do), self.info_do.showText(a), self.isAnim_bl = !1
                }, 5e3)
            }, this.loadFacebookPlaylist = function() {
                if ("file:" == document.location.protocol) {
                    self.isPlaylistDispatchingError_bl = !0;
                    var a = "Please test online, is not possible to view Facebook albums local.";
                    return self.main_do.addChild(self.info_do), self.info_do.showText(a), void setTimeout(function() {
                        self.isAnim_bl = !1
                    }, 850)
                }
                self.facebookShare ? self.loadAccessFacebookAccessToken() : (FWDRLR3DFacebookShare.setPrototype(), self.facebookShare = new FWDRLR3DFacebookShare(self.facebookAppId_str), self.facebookShare.addListener(FWDRLR3DFacebookShare.API_READY, self.facebookAPIReadyHandler), self.facebookShare.addListener(FWDRLR3DFacebookShare.API_ERROR, self.facebookAPIErrorHandler))
            }, this.facebookAPIReadyHandler = function(a) {
                self.loadAccessFacebookAccessToken()
            }, this.facebookAPIErrorHandler = function(a) {
                var b = "Error loading file : <font color='#FF0000'>" + self.originalFacebookURL_str + "</font>";
                self.main_do.addChild(self.info_do), self.info_do.showText(b), self.isAnim_bl = !1
            }, this.loadAccessFacebookAccessToken = function() {
                self.stopToLoadPlaylist(), self.sourceURL_str = self.data.mainFolderPath_str + "facebook_access_token.txt", self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.facebookTokenOnLoadoadHandler, self.xhr.onerror = self.facebookErrorHandler;
                try {
                    self.xhr.open("get", self.sourceURL_str + "?rand=" + parseInt(99999999 * Math.random()), !0), self.xhr.send()
                } catch (b) {
                    var a = b;
                    b && b.message && (a = b.message), self.facebookAPIErrorHandler()
                }
            }, this.facebookTokenOnLoadoadHandler = function(e) {
                var response;
                if (4 == self.xhr.readyState)
                    if (404 == self.xhr.status) {
                        var error = "Facebook token path is not found : <font color='#FF0000'>" + self.originalFacebookURL_str + "</font>";
                        self.main_do.addChild(self.info_do), self.info_do.showText(error), self.isAnim_bl = !1
                    } else if (408 == self.xhr.status) {
                    var error = "Loading facebook token";
                    self.main_do.addChild(self.info_do), self.info_do.showText(error), self.isAnim_bl = !1
                } else 200 == self.xhr.status && (response = window.JSON ? JSON.parse(self.xhr.responseText) : eval("(" + self.xhr.responseText + ")"), self.accessToken_str = response.access_token, self.loadFacebookPlaylistWhenReady())
            }, this.facebookErrorHandler = function(a) {
                var b = "Error loading file : <font color='#FF0000'>" + self.originalFacebookURL_str + "</font>";
                self.main_do.addChild(self.info_do), self.info_do.showText(b), self.isAnim_bl = !1
            }, this.loadFacebookPlaylistWhenReady = function() {
                FB.api("/" + self.facebookUrl_str + "?access_token=" + self.accessToken_str, "GET", {
                    fields: "photos.limit(100){images,created_time,name}"
                }, function(a) {
                    a && FWDRLR3D.parsePlaylist(a, self.id, self.propsObjVariableName_str)
                })
            }, FWDRLR3D.parsePlaylist = function(a, b, c) {
                self.stopToLoadPlaylist();
                var d;
                if (self.playlistDomOrObj_str = a, self.playlist_ar = [], self.isFacebook_bl) {
                    d = self.playlistDomOrObj_str.photos.data, self.isPlaylistDispatchingError_bl = !1, self.totalItems = d.length;
                    for (var f = document.createElement("div"), g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = d[g];
                        h.url = i.images[0].source, h.thumbnailPath_str = i.images[i.images.length - 1].source, h.type_str = ".jpg", h.description = "<div class='FWDRLR3DFacebookDescription'>" + i.name + "</div>", h.url.indexOf("RL_HTML") == -1 ? (h.description && (f.innerHTML = h.description), h.description && (f.innerHTML = h.description, h.descriptionText = f.innerText)) : (f.innerHTML = i.html, h.html = f.innerHTML), self.parsePlaylistObject(h, g, !0)
                    }
                    f = null, self.playlistDomOrObj_str = self.originalFacebookURL_str, self.resizeHandler()
                } else if (self.isYoutube_bl) {
                    if (a.error) {
                        var j = "Error loading Youtube playlist : <font color='#FF0000'>" + self.originalYoutubeURL_str + "</font>.";
                        return self.main_do.addChild(self.info_do), self.info_do.showText(j), void(self.isAnim_bl = !1)
                    }
                    a && (d = a);
                    for (var g = 0; g < d.items.length; g++) self.youtubeObject_ar.push(d.items[g]);
                    if (d.nextPageToken) return self.nextPageToken_str = d.nextPageToken, void self.loadYoutubePlaylist();
                    d = self.youtubeObject_ar, self.isPlaylistDispatchingError_bl = !1, self.totalItems = d.length;
                    for (var f = document.createElement("div"), g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = d[g];
                        h.url = "https://www.youtube.com/watch?v=" + i.snippet.resourceId.videoId, h.thumbnailPath_str = i.snippet.thumbnails.medium.url, h.type_str = "https://www.youtube.com/", h.description = "<div class='FWDRLR3DYoutubeDescription'>" + i.snippet.title + "</div>", h.url.indexOf("RL_HTML") == -1 ? (h.description && (f.innerHTML = h.description), h.description && (f.innerHTML = h.description, h.descriptionText = f.innerText)) : (f.innerHTML = i.html, h.html = f.innerHTML), self.parsePlaylistObject(h, g, !0)
                    }
                    f = null, self.playlistDomOrObj_str = self.originalYoutubeURL_str, self.resizeHandler()
                } else if (self.isFlickr_bl) {
                    if ("fail" == a.stat) {
                        var j = "Flickr playlist with the id can't be loaded: <font color='#FF0000'>" + self.flickrUrl_str + "</font>.";
                        return self.main_do.addChild(self.info_do), self.info_do.showText(j), void(self.isAnim_bl = !1)
                    }
                    a && (d = a.photoset.photo), self.isPlaylistDispatchingError_bl = !1, self.totalItems = d.length;
                    for (var f = document.createElement("div"), g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = d[g];
                        h.url = "http://farm" + i.farm + ".staticflickr.com/" + i.server + "/" + i.id + "_" + i.secret + "_b.jpg", h.thumbnailPath_str = "http://farm" + i.farm + ".staticflickr.com/" + i.server + "/" + i.id + "_" + i.secret + "_n.jpg", h.type_str = ".jpg", h.description = "<div class='FWDRLR3DFlickrDescription'>" + i.title + "</div>", h.url.indexOf("RL_HTML") == -1 ? (h.description && (f.innerHTML = h.description), h.description && (f.innerHTML = h.description, h.descriptionText = f.innerText)) : (f.innerHTML = i.html, h.html = f.innerHTML), h.height = self.data.audioControllerHeight + 2 * self.itemBorderSize, self.parsePlaylistObject(h, g, !0)
                    }
                    f = null, self.playlistDomOrObj_str = self.originalFlickrURL_str, self.resizeHandler()
                } else if (self.isSoundCloud_bl) {
                    if (a.tracks) d = a.tracks;
                    else {
                        if (!a.length) {
                            var j = "Please provide a playlist or tracks URL : <font color='#FF0000'>" + self.soundCloundUrl_str + "</font>.";
                            return self.main_do.addChild(self.info_do), self.info_do.showText(j), void(self.isAnim_bl = !1)
                        }
                        d = a
                    }
                    self.isPlaylistDispatchingError_bl = !1, self.totalItems = d.length;
                    for (var f = document.createElement("div"), g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = d[g];
                        h.url = i.stream_url + "?consumer_key=" + self.scClientId_str, h.thumbnailPath_str = String(i.artwork_url).replace(/large/, "t300x300"), h.type_str = "-soundcloud-", h.description = "<div class='FWDRLR3DSoundCloudDescription'>" + i.title + "</div>", h.url.indexOf("RL_HTML") == -1 ? (h.description && (f.innerHTML = h.description), h.description && (f.innerHTML = h.description, h.descriptionText = f.innerText)) : (f.innerHTML = i.html, h.html = f.innerHTML), h.height = self.data.audioControllerHeight + 2 * self.itemBorderSize, self.parsePlaylistObject(h, g, !0)
                    }
                    f = null, self.playlistDomOrObj_str = self.soundCloundUrl_str, self.resizeHandler()
                } else if (a.indexOf("rlobj_") != -1) {
                    if (d = window[a], !d) return void alert('Revolution lightbox error! The playlist JSON object with the label "' + a + "\" doesn't exist!");
                    self.totalItems = d.playlistItems.length;
                    for (var f = document.createElement("div"), g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = d.playlistItems[g];
                        h.url = i.url, h.thumbnailPath_str = i.thumbnailPath, h.posterPath = i.posterPath, h.type_str = i.url, h.description = i.description, h.url.indexOf("RL_HTML") == -1 ? (h.description && (f.innerHTML = h.description), h.description && (f.innerHTML = h.description, h.descriptionText = f.innerText)) : (f.innerHTML = i.html, h.html = f.innerHTML), h.width = i.width, h.height = i.height, self.parsePlaylistObject(h, g, !0), h.type_str == FWDRLR3D.AUDIO_TYPE && (h.height = self.data.audioControllerHeight + 2 * self.itemBorderSize)
                    }
                    f = null
                } else {
                    var k = document.getElementById(a);
                    if (!k) return void alert('Revolution lightbox error! The HTML element with the id "' + a + "\" doesn't exist!");
                    var l = FWDRLR3DUtils.getChildren(k);
                    if (self.totalItems = l.length, 0 == self.totalItems) return void alert('Revolution lightbox error! The playlist with the id "' + a + '" must contain at least one entry.');
                    for (var g = 0; g < self.totalItems; g++) {
                        var h = {},
                            i = l[g];
                        if (!FWDRLR3DUtils.hasAttribute(i, "data-url")) return void alert('Revolution lightbox error! Attribute "data-url" is not found in the playlist at position nr: "' + g + '".');
                        if (h.url = String(FWDRLR3DUtils.getAttributeValue(i, "data-url")), h.posterPath = FWDRLR3DUtils.getAttributeValue(i, "data-poster-path"), h.type_str = FWDRLR3DUtils.getAttributeValue(i, "data-url"), h.width = FWDRLR3DUtils.getAttributeValue(i, "data-width"), h.height = FWDRLR3DUtils.getAttributeValue(i, "data-height"), FWDRLR3DUtils.hasAttribute(i, "data-thumbnail-path") && (h.thumbnailPath_str = FWDRLR3DUtils.getAttributeValue(i, "data-thumbnail-path")), h.url.indexOf("RL_HTML") == -1) try {
                            0 != FWDRLR3DUtils.getChildren(i).length && (h.description = i.innerHTML, h.descriptionText = i.innerText)
                        } catch (a) {} else try {
                            h.html = i.innerHTML
                        } catch (a) {}
                        self.parsePlaylistObject(h, g, !1), h.type_str == FWDRLR3D.AUDIO_TYPE && (h.height = self.data.audioControllerHeight + 2 * self.itemBorderSize)
                    }
                }
                1 == self.totalItems ? self.showNextAndPrevButtons_bl = !1 : self.defaultShowNextAndPrevButtons_bl ? self.showNextAndPrevButtons_bl = !0 : self.showNextAndPrevButtons_bl = !1, self.id < 0 ? self.id = 0 : self.id > self.totalItems - 1 && (self.id = self.totalItems - 1), self.prevId = self.id, self.useDeepLinking_bl && (c ? location.hash = "RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + c : location.hash = "RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id), (self.isSoundCloud_bl || self.isFacebook_bl || self.isYoutube_bl || self.isFlickr_bl) && self.showComplete()
            }, self.showComplete = function() {
                self.useAsModal_bl ? self.removeCloseEventsWhenBkIsPressed() : self.addCloseEventsWhenBkIsPressed(), self.isReady_bl && self.id != -1 && !self.curItem_do && self.playlist_ar && !self.isPlaylistDispatchingError_bl && (self.positionPreloader(), self.preloader_do.show(!0), self.showCloseButton_bl ? self.showCloseButton() : self.hideCloseButton(), self.playlist_ar[self.id].type_str == FWDRLR3D.IMAGE_TYPE && self.defaultShowZoomButton_bl ? self.showZoomButton() : self.hideZoomButton(), self.playlist_ar[self.id].description && self.defaultHideDescriptionButtons_bl ? (self.hasItemDescription_bl = !0, self.showDescriptionButton()) : (self.hasItemDescription_bl = !1, self.hideDescriptionButton()), self.showSlideShowButton_bl ? self.showSlideshowButton() : self.hideSlideshowButton(), self.showShareButton_bl ? self.showShareButton() : self.hideFacebookButton(), self.showNextAndPrevButtons_bl ? self.showNextAndPrevButtons() : self.hideNextAndPrevButtons(), self.showThumbnailsHideOrShowButton_bl && self.showThumbnails_bl ? (self.showHsThumbnailButton(), self.showThumbnailsByDefault_bl ? self.hsThumbanilsButton_do.setButtonState(1) : self.hsThumbanilsButton_do.setButtonState(0)) : self.hideHsThumbnailButton(), self.showDescription_bl ? self.descButton_do.setButtonState(0) : self.descButton_do.setButtonState(1), self.hideButtons(), self.createAndShowItem(), self.isMobile_bl && self.addSwipeSupport(), self.startAnim(801))
            }, self.hide = function() {
                self.isAnim_bl || !self.isShowed_bl || self.isAnimMaximizeOrMinimize_bl || self.isMaximized_bl || self.swipeMoved_bl || !self.areButtonsShowed_bl || (self.isSoundCloud_bl = !1, self.isFacebook_bl = !1, self.isYoutube_bl = !1, self.isFlickr_bl = !1, self.stopToLoadPlaylist(), self.isMobile_bl && self.closeButton_do && FWDR3DCarModTweenMax.isTweening(self.closeButton_do.buttonsHolder_do) || (FWDR3DCarModTweenMax.to(self.bk_do, .8, {
                    alpha: 0,
                    delay: .4,
                    ease: Quint.easeOut
                }), self.curItem_do && self.curItem_do.screen && (FWDR3DCarModTweenMax.to(self.curItem_do, .6, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                })), FWDR3DCarModTweenMax.to(self.mainItemHolder_do, .8, {
                    x: self.stageWidth / 2,
                    y: self.stageHeight / 2,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(self.itemBorder_do, .8, {
                    w: 0,
                    h: 0,
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(self.itemBk_do, .8, {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), self.curItem_do && self.hideButtons(!0), self.isShowed_bl = !1, self.isFirstItemShowed_bl = !1, self.id == -1, self.curItem_do = null, self.prevItem_do = null, self.isAnimForVideoAndAudioPlayersDone_bl = !1, self.stopResizeHandler(), self.closeAjax(), self.tm.stop(), self.thumbnailsManager_do && self.thumbnailsManager_do.hide(!0), self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.closeImage(), self.useAsModal_bl || self.removeCloseEventsWhenBkIsPressed(), self.hider.stop(), self.preloader_do.hide(!0), self.hideShareButtons(!0, !0), self.videoHolder_do && (self.video_do.stop(), self.video_do.setPosterSource(""), self.videoHolder_do.setX(-5e3), self.videoHolder_do.w = 1, self.videoHolder_do.h = 1), self.audioHolder_do && (self.audio_do.stop(), self.audioHolder_do.setX(-5e3), self.audioHolder_do.w = 1, self.audioHolder_do.h = 1), self.desc_do.descriptionAnimationType_str = "opacity", FWDRLR3D.dispatchEvent(FWDRLR3D.HIDE_START), self.hasItemDescription_bl && self.showDescription_bl && self.desc_do.hide(!0), clearTimeout(self.showOrHideCompleteId_to), self.showOrHideCompleteId_to = setTimeout(self.hideComplete, 1200), self.isMobile_bl && self.removeSwipeSupport(), self.startAnim(1202)))
            }, self.hideComplete = function() {
                self.useDeepLinking_bl && (location.hash = "RL"), self.removePreventMouseWheel(), self.isFirstItemShowed_bl = !1, self.firstVideoOrAudioAdded_bl = !1, self.curItem_do = null, self.prevItem_do = null, self.removeItems(0), self.thumbnailsManager_do && (self.thumbnailsManager_do.destoryThumbnails(), self.thumbnailsManager_do.hideForGood()), self.video_do && RLVideoPlayer && RLVideoPlayer.setPosterSource(""), self.isMobile_bl && self.removeSwipeSupport(), self.main_do.setX(-5e3), FWDRLR3D.dispatchEvent(FWDRLR3D.HIDE_COMPLETE)
            }, self.startAnim = function(a) {
                self.stopAnim(), self.isAnim_bl = !0, self.animId_to = setTimeout(self.animationDone, a)
            }, self.stopAnim = function() {
                self.isAnim_bl = !1, self.tm && self.tm.pause(), clearTimeout(self.animId_to)
            }, self.animationDone = function() {
                self.isAnim_bl = !1, self.tm.resume(), self.removeItems(1), self.curItem_do && self.dlChangeHandler(), self.hasItemDescription_bl && self.showDescription_bl && self.desc_do.show(!0)
            }, self.addCloseEventsWhenBkIsPressed = function() {
                self.isMobile_bl ? self.hasPointerEvent_bl ? self.bk_do.screen.addEventListener("pointerup", self.onBkMouseUp) : (self.bk_do.screen.addEventListener("touchend", self.onBkMouseUp), self.bk_do.screen.addEventListener("touchmove", self.onBkTouchMove)) : self.bk_do.screen.addEventListener ? self.bk_do.screen.addEventListener("click", self.onBkMouseUp) : self.bk_do.screen.attachEvent && self.bk_do.screen.attachEvent("onclick", self.onBkMouseUp)
            }, self.removeCloseEventsWhenBkIsPressed = function() {
                self.isMobile_bl ? self.hasPointerEvent_bl ? self.bk_do.screen.removeEventListener("pointerup", self.onBkMouseUp) : (self.bk_do.screen.removeEventListener("touchend", self.onBkMouseUp), self.bk_do.screen.removeEventListener("touchmove", self.onBkTouchMove)) : self.bk_do.screen.removeEventListener ? self.bk_do.screen.removeEventListener("click", self.onBkMouseUp) : self.bk_do.screen.detachEvent && self.bk_do.screen.detachEvent("onclick", self.onBkMouseUp)
            }, self.onBkTouchMove = function() {
                clearTimeout(self.doNotAllowToHideId_to), self.doNotAllowToHideId_to = setTimeout(function() {
                    self.doNotAllowToHide_bl = !1
                }, 100), self.doNotAllowToHide_bl = !0
            }, self.onBkMouseUp = function() {
                self.doNotAllowToHide_bl || self.hide()
            }, this.stopToLoadPlaylist = function() {
                clearTimeout(self.JSONPRequestTimeoutId_to);
                try {
                    self.scs_el.src = null, document.documentElement.removeChild(self.scs_el), self.scs_el = null
                } catch (a) {}
                if (null != self.xhr) {
                    try {
                        self.xhr.abort()
                    } catch (a) {}
                    self.xhr.onreadystatechange = null, self.xhr.onerror = null, self.xhr = null
                }
            }, self.createAndShowItem = function() {
                var a = self.playlist_ar[self.id];
                if (self.type_str = a.type_str, self.url = a.url, self.posterPath_str = a.posterPath, self.closeAjax(), self.tm.pause(), self.closeImage(), self.preloader_do.hide(!0), self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.thumbnailsManager_do && self.thumbnailsManager_do.disableOrEnableThumbnails(), self.prevItem_do && self.prevItem_do.type_str != FWDRLR3D.IMAGE_TYPE && (self.removeItems(0), self.prevItem_do = null), self.playlist_ar[self.id].description ? (self.hasItemDescription_bl = !0, self.showDescriptionButton()) : (self.hasItemDescription_bl = !1, self.hideDescriptionButton(), self.desc_do.hide(!1, !1, !0)), self.videoHolder_do && (self.video_do.stop(), self.type_str != FWDRLR3D.VIDEO_TYPE && (self.videoHolder_do.setX(-5e3), self.videoHolder_do.w = 1, self.videoHolder_do.h = 1)), self.audioHolder_do && (self.audio_do.stop(), self.type_str == FWDRLR3D.AUDIO_TYPE && self.isFirstItemShowed_bl || (self.audioHolder_do.setX(-5e3), self.audioHolder_do.w = 1, self.audioHolder_do.h = 1)), self.isAnimForVideoAndAudioPlayersDone_bl = !1, self.type_str == FWDRLR3D.IMAGE_TYPE) self.loadImage(), self.firstVideoOrAudioAdded_bl = !0;
                else if (self.type_str == FWDRLR3D.IFRAME_TYPE || self.type_str == FWDRLR3D.FLASH_TYPE || self.type_str == FWDRLR3D.VIDEO_TYPE || self.type_str == FWDRLR3D.AUDIO_TYPE) {
                    if (self.originalW = a.width || self.defaultItemW, self.originalH = a.height || self.defaultItemH, self.prevItem_do && (self.resizeCurrentItem(!0), FWDR3DCarModTweenMax.to(self.prevItem_do, .8, {
                            alpha: 0,
                            ease: Quint.easeOut
                        }), FWDR3DCarModTweenMax.to(self.prevItem_do, .8, {
                            x: parseInt((self.finalW - self.prevItem_do.w) / 2),
                            y: parseInt((self.finalH - self.prevItem_do.h) / 2),
                            ease: Expo.easeInOut
                        })), self.curItem_do = new FWDRLR3DDisplayObject("div"), self.curItem_do.type_str = self.type_str, self.prevItem_do = self.curItem_do, self.isMobile_bl && (self.curItem_do.getStyle().overflow = "scroll", self.curItem_do.getStyle().webkitOverflowScrolling = "touch"), self.itemHolder_do.addChild(self.curItem_do), self.isFirstItemShowed_bl ? self.resizeCurrentItem(!1, !0) : (self.resizeCurrentItem(!1), self.showItemFirstTime(), self.positionButtons(!1), self.positionShareButtons(!1), self.hideButtons(), self.setupThumbnails(800)), self.hideZoomButton(), self.playlist_ar[self.id].description ? (self.hasItemDescription_bl = !0, self.desc_do.setText(self.playlist_ar[self.id].description), self.showDescriptionButton()) : (self.hasItemDescription_bl = !1, self.hideDescriptionButton()), "opacity" == self.descriptionAnimationType_str && self.hasItemDescription_bl && self.desc_do.hide(!1, !0, !1), self.positionButtons(!0), self.positionShareButtons(!0), self.type_str == FWDRLR3D.VIDEO_TYPE) {
                        if (!self.data.DFUseVideo_bl) return self.main_do.addChild(self.info_do), void self.info_do.showText("To play video mp4 files please set <font color='#FF0000'>useVideo:\"yes\"</font>.");
                        if (!FWDRLR3DFlashTest.hasFlashPlayerVersion("9.0.18") && !FWDRLR3DUtils.isLocal && !self.isMobile_bl) return self.main_do.addChild(self.info_do), void self.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to play this mp4 video file.");
                        if (!self.videoHolder_do && FWDRLR3DUtils.isLocal) return self.main_do.addChild(self.info_do), void self.info_do.showText("This browser can't play mp4 video files locally, please use a different browser like Chrome, IE9+, Firefox(WIN), Safari(MAC). It will work on all browsers when tested online.");
                        self.videoHolder_do.w == self.finalW - 2 * self.itemBorderSize && self.videoHolder_do.h == self.finalH - 2 * self.itemBorderSize ? (setTimeout(self.addContent, 200), self.startAnim(201), self.showSlideShowAnimation_bl && self.slp_do.animReset()) : (setTimeout(self.addContent, 800), self.startAnim(801))
                    } else if (self.type_str == FWDRLR3D.AUDIO_TYPE) {
                        if (!self.data.DFUseAudio_bl) return self.main_do.addChild(self.info_do), void self.info_do.showText("To play audio mp3 files please set <font color='#FF0000'>useAudio:\"yes\"</font>.");
                        if (!FWDRLR3DFlashTest.hasFlashPlayerVersion("9.0.18") && !FWDRLR3DUtils.isLocal && !self.isMobile_bl) return self.main_do.addChild(self.info_do), void self.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to play this mp3 audio file.");
                        if (!self.audioHolder_do && FWDRLR3DUtils.isLocal) return self.main_do.addChild(self.info_do),
                            void self.info_do.showText("This browser can't play mp3 audio files locally, please use a different browser like Chrome, IE9+, Firefox(WIN), Safari(MAC). It will work on all browsers when tested online.");
                        self.audioHolder_do.w == self.finalW - 2 * self.itemBorderSize && self.audioHolder_do.h == self.finalH - 2 * self.itemBorderSize ? (setTimeout(self.addContent, 200), self.startAnim(201), self.showSlideShowAnimation_bl && self.slp_do.animReset()) : (setTimeout(self.addContent, 800), self.startAnim(801))
                    } else if (self.type_str == FWDRLR3D.IFRAME_TYPE) setTimeout(self.addContent, 800), self.startAnim(801);
                    else if (self.type_str == FWDRLR3D.FLASH_TYPE) {
                        if (!FWDRLR3DFlashTest.hasFlashPlayerVersion("9.0.18") && !self.isMobile_bl) return self.main_do.addChild(self.info_do), self.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to view this flash content."), void self.startAnim(801);
                        if (self.isMobile_bl) return self.main_do.addChild(self.info_do), self.info_do.showText("Adobe flash player is not supported on mobile devices, to view this content please use a desktop machine."), void self.startAnim(801);
                        setTimeout(self.addContent, 800), self.startAnim(801)
                    }
                    self.videoHolder_do && (self.videoHolder_do.w == self.finalW - 2 * self.itemBorderSize && self.videoHolder_do.h == self.finalH - 2 * self.itemBorderSize || (self.videoHolder_do.setX(-5e3), self.videoHolder_do.w = 1, self.videoHolder_do.h = 1))
                }
                FWDRLR3D.dispatchEvent(FWDRLR3D.UPDATE, {
                    curId: self.id
                })
            }, self.addContent = function() {
                if (self.type_str == FWDRLR3D.VIDEO_TYPE) return self.isAnimForVideoAndAudioPlayersDone_bl = !0, RLVideoPlayer.setVideoSource(self.url), RLVideoPlayer.setPosterSource(self.posterPath_str), self.videoAutoPlay_bl && !self.firstVideoOrAudioAdded_bl ? RLVideoPlayer.play() : self.nextVideoOrAudioAutoPlay_bl && self.firstVideoOrAudioAdded_bl && RLVideoPlayer.play(), self.resizeCurrentItem(), self.prevVideoW = self.finalW, self.prevVideoH = self.finalH, self.firstVideoOrAudioAdded_bl = !0, self.videoAutoPlay_bl = !1, void(self.audioAutoPlay_bl = !1);
                if (self.type_str == FWDRLR3D.AUDIO_TYPE) return self.isAnimForVideoAndAudioPlayersDone_bl = !0, RLAudioPlayer.setSource(self.url), self.audioAutoPlay_bl && !self.firstVideoOrAudioAdded_bl ? RLAudioPlayer.play() : self.nextVideoOrAudioAutoPlay_bl && self.firstVideoOrAudioAdded_bl && RLAudioPlayer.play(), self.resizeCurrentItem(), self.firstVideoOrAudioAdded_bl = !0, self.audioAutoPlay_bl = !1, void(self.videoAutoPlay_bl = !1);
                if (self.type_str == FWDRLR3D.FLASH_TYPE) {
                    var a = '<object id="RL_swf_' + parseInt(99999999999 * Math.random()) + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + self.url + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><object type="application/x-shockwave-flash" data="' + self.url + '" width="100%" height="100%"><param name="movie" value="' + self.url + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/></object></object>';
                    return self.curItem_do.setInnerHTML(a), void self.resizeCurrentItem()
                }
                if (self.url.indexOf("RL_HTML") != -1) return self.addInnerHTMLContent(self.playlist_ar[self.id].html), void self.resizeCurrentItem();
                if (self.url.indexOf("RL_AJAX:") == -1) {
                    var b, c = "http://";
                    self.url.indexOf("https") != -1 && (c = "https://"), self.nextVideoOrAudioAutoPlay_bl && self.firstVideoOrAudioAdded_bl && (self.videoAutoPlay_bl = !0);
                    var d = self.videoAutoPlay_bl ? "1" : "0";
                    self.firstVideoOrAudioAdded_bl = !0;
                    var e;
                    b = document.createElement("iframe"), b.width = "100%", b.height = "100%", b.allowFullScreen = 1, b.setAttribute("allowFullScreen", ""), b.frameBorder = 0, self.url.indexOf("youtube.") != -1 || self.url.indexOf("vimeo.") != -1 ? (self.url.indexOf("youtube.") != -1 ? (e = self.url.replace(/.*\?v=|&.*/gi, ""), b.src = c + "www.youtube.com/embed/" + e + "?wmode=transparent&autoplay=" + d) : self.url.indexOf("vimeo.") != -1 && (e = self.url.replace(/.*\/|\?.*/gi, ""), b.src = c + "player.vimeo.com/video/" + e + "?autoplay=" + d), self.videoAutoPlay_bl = !1) : self.url.indexOf("google.") != -1 ? (self.url = self.url.replace(/&key=\.*|key=\.*|&key=*/gi, ""), self.url += "&key=" + self.googleMapsAPIKey_str, b.src = self.url) : b.src = self.url, self.curItem_do.screen.appendChild(b), self.resizeCurrentItem()
                } else {
                    if (FWDRLR3DUtils.isLocal) return void self.ajaxLoadError("Using ajax locally is not possible or allowed, please test online.");
                    self.url = self.url.substr(self.url.indexOf(":") + 1), self.xmlhttp = new XMLHttpRequest, self.xmlhttp.onerror = function() {
                        self.ajaxLoadError("Ajax error with code: " + self.xmlhttp.status)
                    }, self.xmlhttp.onreadystatechange = function() {
                        4 === self.xmlhttp.readyState && (200 == self.xmlhttp.status ? self.addInnerHTMLContent(self.xmlhttp.responseText) : self.ajaxLoadError("Ajax error with code: " + self.xmlhttp.status))
                    }, self.xmlhttp.open("GET", self.url, !0);
                    try {
                        self.xmlhttp.send()
                    } catch (a) {
                        a.message && self.ajaxLoadError(a.message)
                    }
                }
            }, self.addInnerHTMLContent = function(a) {
                self.curItem_do.getStyle().overflow = "auto", self.curItem_do.setInnerHTML(a), self.curItem_do.screen.addEventListener && (self.curItem_do.screen.addEventListener("mousewheel", function(a) {
                    a.stopImmediatePropagation && a.stopImmediatePropagation()
                }), self.curItem_do.screen.addEventListener("DOMMouseScroll", function(a) {
                    a.stopImmediatePropagation && a.stopImmediatePropagation()
                }), self.curItem_do.screen.addEventListener("touchmove", function(a) {
                    self.curItem_do.screen.scrollHeight > self.finalH - 2 * self.itemBorderSize && a.stopImmediatePropagation()
                }))
            }, self.ajaxLoadError = function(a) {
                self.tm.stop(), self.stopAnim(), self.preloader_do.hide(!0), self.main_do.addChild(self.info_do), self.info_do.showText(a)
            }, self.closeAjax = function() {
                self.xmlhttp && (self.xmlhttp.onerror = null, self.xmlhttp.onreadystatechange = null, self.xmlhttp.abort(), self.xmlhttp = null)
            }, self.closeImage = function() {
                self.image_img && (self.image_img.onload = null, self.image_img.onerror = null, self.image_img = null)
            }, self.loadImage = function() {
                self.isLoading_bl = !0, self.stopAnim(), self.positionPreloader(), self.preloader_do.show(!0), self.image_img = new Image, self.image_img.onload = self.imageLoadComplete, self.image_img.onerror = self.imageLoadError, self.image_img.src = self.url
            }, self.imageLoadComplete = function(a) {
                self.originalW = self.image_img.width, self.originalH = self.image_img.height, self.curItem_do = new FWDRLR3DDisplayObject("img"), self.curItem_do.setScreen(self.image_img), self.curItem_do.type_str = FWDRLR3D.IMAGE_TYPE, self.isFirstItemShowed_bl ? (self.resizeCurrentItem(!0, !1), self.prevItem_do && self.prevItem_do.type_str == FWDRLR3D.IMAGE_TYPE && (FWDR3DCarModTweenMax.to(self.prevItem_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.prevItem_do, .8, {
                    x: parseInt((self.finalW - self.prevItem_do.w) / 2),
                    y: parseInt((self.finalH - self.prevItem_do.h) / 2),
                    ease: Expo.easeInOut
                })), self.curItem_do.setWidth(self.finalW - 2 * self.itemBorderSize), self.curItem_do.setHeight(self.finalH - 2 * self.itemBorderSize), self.curItem_do.setAlpha(0), self.resizeCurrentItem(!1, !0), FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                    alpha: 1,
                    delay: .8,
                    ease: Quint.easeOut
                })) : (self.resizeCurrentItem(!1), self.showItemFirstTime(), self.positionButtons(!1), self.positionShareButtons(!1), self.hideButtons(), self.setupThumbnails(800)), self.startAnim(801), self.isLoading_bl = !1, self.prevItem_do = self.curItem_do, self.preloader_do.hide(!0), self.showZoomButton(), self.hasItemDescription_bl && ("opacity" == self.descriptionAnimationType_str && self.hasItemDescription_bl && self.desc_do.hide(!1, !0, !1), self.showDescriptionButton(), self.desc_do.setText(self.playlist_ar[self.id].description)), self.positionButtons(!0), self.positionShareButtons(!0), self.itemHolder_do.addChild(self.curItem_do)
            }, self.imageLoadError = function(a) {
                self.tm.stop(), self.stopAnim(), self.preloader_do.hide(!0), self.main_do.addChild(self.info_do), self.info_do.showText("Image with path <span style='color:#FF0000;'>" + decodeURIComponent(self.url) + "</span> can't be loaded, probably the path is incorrect.")
            }, this.maximizeOrMinimize = function() {
                if (!self.isLoading_bl && !self.isAnim_bl) {
                    var a, b, c, d, e, f, g;
                    self.isAnimMaximizeOrMinimize_bl = !0, clearTimeout(self.maximizeCompleteTimeOutId_to), clearTimeout(self.minimizeCompleteTimeOutId_to), self.isMaximized_bl ? (self.isMaximized_bl = !1, self.zoomButton_do.setButtonState(1), self.isMobile_bl ? self.removeEventsForScrollngImageOnMobile() : self.removeEventsForScrollngImageOnDesktop(), FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                        x: self.finalX + self.itemBorderSize,
                        y: self.finalY + self.itemBorderSize,
                        w: self.finalW - 2 * self.itemBorderSize,
                        h: self.finalH - 2 * self.itemBorderSize,
                        ease: Expo.easeInOut
                    }), self.setButtonsVisible(!0), self.positionButtons(!0), self.positionShareButtons(!0), self.minimizeCompleteTimeOutId_to = setTimeout(self.minimizeCompleteHandler, 801)) : (self.isMaximized_bl = !0, self.zoomButton_do.setButtonState(0), self.tm.pause(), a = self.stageWidth / self.originalW, b = self.stageHeight / self.originalH, g = 0, a >= b ? g = a : a <= b && (g = b), e = parseInt(self.originalW * g), f = parseInt(self.originalH * g), c = parseInt((self.stageWidth - e) / 2), d = parseInt((self.stageHeight - f) / 2), 1 != self.curItem_do.alpha && self.curItem_do.setAlpha(1), self.curItem_do.setX(self.curItem_do.getGlobalX()), self.curItem_do.setY(self.curItem_do.getGlobalY()), FWDR3DCarModTweenMax.to(self.zoomButton_do, .8, {
                        x: self.stageWidth - self.zoomButton_do.w - 1,
                        y: 1,
                        ease: Expo.easeInOut
                    }), self.isMobile_bl ? FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                        x: c,
                        y: d,
                        w: e,
                        h: f,
                        ease: Expo.easeInOut
                    }) : (a >= b ? FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                        x: c,
                        w: e,
                        h: f,
                        ease: Expo.easeInOut
                    }) : a < b && FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                        y: d,
                        w: e,
                        h: f,
                        ease: Expo.easeInOut
                    }), self.addEventsForScrollngImageOnDesktop()), self.itemHolder_do.contains(self.imteHolder_do) && self.itemHolder_do.removeChild(self.curItem_do), self.main_do.addChild(self.curItem_do), self.main_do.addChild(self.zoomButton_do), self.maximizeCompleteTimeOutId_to = setTimeout(self.maximizeCompleteHandler, 801)), self.hideShareButtons(!0)
                }
            }, self.minimizeCompleteHandler = function() {
                self.isAnimMaximizeOrMinimize_bl = !1, self.isTweening_bl = !1, self.itemHolder_do.addChild(self.curItem_do), self.resizeCurrentItem(), self.tm.resume(), self.hasItemDescription_bl && self.showDescription_bl && self.desc_do.show(!0), self.main_do.addChild(self.zoomButton_do), self.useDeepLinking_bl && self.dlChangeHandler()
            }, self.maximizeCompleteHandler = function() {
                self.isAnimMaximizeOrMinimize_bl = !1, self.setButtonsInvisible(!0), self.isMobile_bl && self.addEventsForScrollngImageOnMobile(), self.hasItemDescription_bl && self.showDescription_bl && self.desc_do.hide(!1)
            }, self.setButtonsInvisible = function(a) {
                self.showCloseButton_bl && self.closeButton_do.setVisible(!1), self.showNextAndPrevButtons_bl && (self.nextButton_do.setVisible(!1), self.prevButton_do.setVisible(!1)), self.showThumbnailsHideOrShowButton_bl && self.hsThumbanilsButton_do.setVisible(!1), self.showThumbnails_bl && self.thumbnailsManager_do.setVisible(!1), self.showDescriptionButton_bl && self.descButton_do.setVisible(!1), self.showSlideShowButton_bl && self.slideShowButton_do.setVisible(!1), self.showShareButton_bl && self.shareButton_do.setVisible(!1), self.showSlideShowAnimation_bl && self.slp_do.setVisible(!1), self.showDescription_bl && self.desc_do.setVisible(!1), a && self.mainItemHolder_do.setVisible(!1)
            }, self.setButtonsVisible = function(a) {
                self.showCloseButton_bl && self.closeButton_do.setVisible(!0), self.showNextAndPrevButtons_bl && (self.nextButton_do.setVisible(!0), self.prevButton_do.setVisible(!0)), self.showThumbnailsHideOrShowButton_bl && self.hsThumbanilsButton_do.setVisible(!0), self.showThumbnails_bl && self.thumbnailsManager_do.setVisible(!0), self.showDescriptionButton_bl && self.descButton_do.setVisible(!0), self.showSlideShowButton_bl && self.slideShowButton_do.setVisible(!0), self.showShareButton_bl && self.shareButton_do.setVisible(!0), self.showSlideShowAnimation_bl && self.slp_do.setVisible(!0), self.showDescription_bl && self.desc_do.setVisible(!0), a && self.mainItemHolder_do.setVisible(!0)
            }, this.addEventsForScrollngImageOnDesktop = function() {
                self.updateImageWhenMaximized_int = setInterval(self.updateMaximizedImageHandler, 16), window.addEventListener ? window.addEventListener("mousemove", self.updateMaximizeImageOnMouseMovedHandler) : document.attachEvent("onmousemove", self.updateMaximizeImageOnMouseMovedHandler), self.hider.stop()
            }, this.removeEventsForScrollngImageOnDesktop = function() {
                clearInterval(self.updateImageWhenMaximized_int), window.addEventListener ? window.removeEventListener("mousemove", self.updateMaximizeImageOnMouseMovedHandler) : document.detachEvent("onmousemove", self.updateMaximizeImageOnMouseMovedHandler), self.hider.start()
            }, this.updateMaximizeImageOnMouseMovedHandler = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                self.gmx = b.screenX, self.gmy = b.screenY
            }, self.updateMaximizedImageHandler = function() {
                var a, b;
                self.percentX = self.gmx / self.stageWidth, self.percentY = self.gmy / self.stageHeight, self.percentX > 1 && (self.percentX = 1), self.percentY > 1 && (self.percentY = 1);
                var c = self.stageWidth / self.originalW,
                    d = self.stageHeight / self.originalH;
                if (c <= d) {
                    if (a = Math.round((self.stageWidth - self.curItem_do.w) * self.percentX), isNaN(a)) return;
                    FWDR3DCarModTweenMax.to(self.curItem_do, .4, {
                        x: a
                    })
                } else {
                    if (b = Math.round((self.stageHeight - self.curItem_do.h) * self.percentY), isNaN(b)) return;
                    FWDR3DCarModTweenMax.to(self.curItem_do, .4, {
                        y: b
                    })
                }
            }, self.addEventsForScrollngImageOnMobile = function() {
                self.hasPointerEvent_bl ? (window.addEventListener("pointerdown", self.onTouchStartScrollImage), window.addEventListener("pointerup", self.onTouchEndScrollImage)) : (window.addEventListener("touchstart", self.onTouchStartScrollImage), window.addEventListener("touchend", self.onTouchEndScrollImage)), clearInterval(self.updateImageWhenMaximized_int), self.updateImageWhenMaximized_int = setInterval(self.updateMaximizedImageMobileHandler, 16)
            }, self.removeEventsForScrollngImageOnMobile = function() {
                clearInterval(self.updateImageWhenMaximized_int), self.hasPointerEvent_bl ? (window.removeEventListener("pointerdown", self.onTouchStartScrollImage), window.removeEventListener("pointerup", self.onTouchEndScrollImage), window.removeEventListener("pointermove", self.onTouchMoveScrollImage)) : (window.removeEventListener("touchstart", self.onTouchStartScrollImage), window.removeEventListener("touchend", self.onTouchEndScrollImage), window.removeEventListener("touchmove", self.onTouchMoveScrollImage)), self.isDragging_bl = !1
            }, self.onTouchStartScrollImage = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                self.hasPointerEvent_bl ? window.addEventListener("pointermove", self.onTouchMoveScrollImage) : window.addEventListener("touchmove", self.onTouchMoveScrollImage), self.lastPresedX = b.screenX, self.lastPresedY = b.screenY, a.preventDefault()
            }, self.onTouchEndScrollImage = function(a) {
                self.hasPointerEvent_bl ? window.removeEventListener("pointermove", self.onTouchMoveScrollImage) : window.removeEventListener("touchmove", self.onTouchMoveScrollImage), self.isDragging_bl = !1
            }, self.onTouchMoveScrollImage = function(a) {
                a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    c = self.stageWidth / self.originalW,
                    d = self.stageHeight / self.originalH,
                    e = 0,
                    f = 0;
                self.isDragging_bl = !0, c < d ? (e = b.screenX - self.lastPresedX, self.lastPresedX = b.screenX, self.curItem_do.setX(self.curItem_do.x + e)) : c > d ? (f = b.screenY - self.lastPresedY, self.lastPresedY = b.screenY, self.curItem_do.setY(self.curItem_do.y + f)) : (e = b.screenX - self.lastPresedX, self.lastPresedX = b.screenX, self.curItem_do.setX(self.curItem_do.x + e), f = b.screenY - self.lastPresedY, self.lastPresedY = b.screenY, self.curItem_do.setY(self.curItem_do.y + f)), self.vx = 2 * e, self.vy = 2 * f
            }, self.updateMaximizedImageMobileHandler = function() {
                var a, b, c, d, e, f;
                if (!self.isDragging_bl) {
                    if (self.vy *= self.friction, self.vx *= self.friction, c = self.curItem_do.x, d = self.curItem_do.y, a = c + self.vx, b = d + self.vy, e = self.curItem_do.w, f = self.curItem_do.h, isNaN(a) || isNaN(b)) return;
                    self.curItem_do.setX(a), self.curItem_do.setY(b), d >= 0 ? (self.vy2 = .3 * (0 - d), self.vy *= self.friction, self.curItem_do.setY(d + self.vy2)) : d <= self.stageHeight - f && (self.vy2 = .3 * (self.stageHeight - f - d), self.vy *= self.friction, self.curItem_do.setY(d + self.vy2)), c >= 0 ? (self.vx2 = .3 * (0 - c), self.vx *= self.friction, self.curItem_do.setX(c + self.vx2)) : c <= self.stageWidth - e && (self.vx2 = .3 * (self.stageWidth - e - c), self.vx *= self.friction, self.curItem_do.setX(c + self.vx2))
                }
            }, self.resizeCurrentItem = function(a, b) {
                if (self.curItem_do) {
                    var c = self.stageWidth - 2 * self.maxButtonW - 2 * (self.buttonsOffsetIn + self.buttonsOffsetOut) - 2 * self.itemBorderSize,
                        d = self.stageHeight - self.itemOffsetH - 2 * self.itemBorderSize,
                        e = 0;
                    self.areThumbnailsShowed_bl && (d -= self.thumbnailH + self.spaceBetweenThumbnailsAndItem, e = Math.round((self.thumbnailH + self.spaceBetweenThumbnailsAndItem) / 2 - self.spaceBetweenThumbnailsAndItem / 2));
                    var f = c / self.originalW,
                        g = d / self.originalH,
                        h = 0;
                    f <= g ? h = f : f >= g && (h = g), f >= 1 && g >= 1 && (h = 1), self.finalW = Math.round(self.originalW * h) + 2 * self.itemBorderSize, self.finalH = Math.round(self.originalH * h) + 2 * self.itemBorderSize, self.finalW < 2 * self.itemBorderSize && (self.finalW = 2 * self.itemBorderSize), self.finalH < 2 * self.itemBorderSize && (self.finalH = 2 * self.itemBorderSize), FWDRLR3DUtils.isIEAndLessThen9 && (self.finalW < 150 && (self.finalW = 150), self.finalH < 150 && (self.finalH = 150)), self.type_str == FWDRLR3D.AUDIO_TYPE && self.audioHolder_do && (self.finalH = self.data.audioControllerHeight + 2 * self.itemBorderSize), self.finalX = Math.round((self.stageWidth - self.finalW) / 2), self.finalY = Math.round((self.stageHeight - self.finalH) / 2) - e, a || (FWDR3DCarModTweenMax.killTweensOf(self.mainItemHolder_do), FWDR3DCarModTweenMax.killTweensOf(self.itemBk_do), FWDR3DCarModTweenMax.killTweensOf(self.itemBorder_do), b ? (FWDR3DCarModTweenMax.to(self.mainItemHolder_do, .8, {
                        x: self.finalX,
                        y: self.finalY,
                        w: self.finalW,
                        h: self.finalH,
                        ease: Expo.easeInOut
                    }), FWDR3DCarModTweenMax.to(self.itemBk_do, .8, {
                        x: self.itemBorderSize,
                        y: self.itemBorderSize,
                        w: self.finalW - 2 * self.itemBorderSize,
                        h: self.finalH - 2 * self.itemBorderSize,
                        ease: Expo.easeInOut
                    }), FWDR3DCarModTweenMax.to(self.itemBorder_do, .8, {
                        x: 0,
                        y: 0,
                        w: self.finalW,
                        h: self.finalH,
                        ease: Expo.easeInOut
                    }), self.desc_do && FWDR3DCarModTweenMax.to(self.desc_do, .8, {
                        finalW: self.finalW - 2 * self.itemBorderSize,
                        onUpdate: self.desc_do.resizeAndPosition,
                        ease: Expo.easeInOut
                    }), self.type_str == FWDRLR3D.VIDEO_TYPE && self.videoHolder_do && self.isAnimForVideoAndAudioPlayersDone_bl && FWDR3DCarModTweenMax.to(self.videoHolder_do, .8, {
                        x: self.itemBorderSize,
                        y: self.itemBorderSize,
                        w: self.finalW - 2 * self.itemBorderSize,
                        h: self.finalH - 2 * self.itemBorderSize,
                        onUpdate: RLVideoPlayer.resizeHandler,
                        ease: Expo.easeInOut
                    })) : (self.mainItemHolder_do.setX(self.finalX), self.mainItemHolder_do.setY(self.finalY), self.mainItemHolder_do.setWidth(self.finalW), self.mainItemHolder_do.setHeight(self.finalH), self.itemBk_do.setX(self.itemBorderSize), self.itemBk_do.setY(self.itemBorderSize), self.itemBk_do.setWidth(self.finalW - 2 * self.itemBorderSize), self.itemBk_do.setHeight(self.finalH - 2 * self.itemBorderSize), self.itemBorder_do.setX(0), self.itemBorder_do.setY(0), self.itemBorder_do.setWidth(self.finalW), self.itemBorder_do.setHeight(self.finalH), 1 != self.itemBorder_do.alpha && self.itemBorder_do.setAlpha(1), self.desc_do && self.desc_do.resizeAndPosition(self.finalW - 2 * self.itemBorderSize), self.type_str == FWDRLR3D.VIDEO_TYPE && self.videoHolder_do ? self.isAnimForVideoAndAudioPlayersDone_bl && (self.isVideoFullScreen_bl ? (self.videoHolder_do.setX(-self.finalX), self.videoHolder_do.setY(-self.finalY)) : (self.videoHolder_do.setX(self.itemBorderSize), self.videoHolder_do.setY(self.itemBorderSize)), self.videoHolder_do.setWidth(self.finalW - 2 * self.itemBorderSize), self.videoHolder_do.setHeight(self.finalH - 2 * self.itemBorderSize), RLVideoPlayer.resizeHandler()) : self.type_str == FWDRLR3D.AUDIO_TYPE && self.audioHolder_do && self.isAnimForVideoAndAudioPlayersDone_bl && (self.audioHolder_do.setX(self.itemBorderSize), self.audioHolder_do.setY(self.itemBorderSize), self.audioHolder_do.setWidth(self.finalW - 2 * self.itemBorderSize), self.audioHolder_do.setHeight(self.finalH - 2 * self.itemBorderSize), RLAudioPlayer.resizeHandler())), FWDR3DCarModTweenMax.killTweensOf(self.curItem_do), self.isMaximized_bl ? (f = self.stageWidth / self.originalW, g = self.stageHeight / self.originalH, f >= g ? h = f : f <= g && (h = g), self.curItem_do.setX(parseInt((self.stageWidth - self.originalW * h) / 2)), self.curItem_do.setY(parseInt((self.stageHeight - self.originalH * h) / 2)), self.curItem_do.setWidth(Math.max(0, parseInt(self.originalW * h))), self.curItem_do.setHeight(Math.max(0, parseInt(self.originalH * h)))) : b ? FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                        x: self.itemBorderSize,
                        y: self.itemBorderSize,
                        w: self.finalW - 2 * self.itemBorderSize,
                        h: self.finalH - 2 * self.itemBorderSize,
                        ease: Expo.easeInOut
                    }) : (self.type_str == FWDRLR3D.IMAGE_TYPE && self.curItem_do.setAlpha(1), self.curItem_do.setX(self.itemBorderSize), self.curItem_do.setY(self.itemBorderSize), self.curItem_do.setWidth(self.finalW - 2 * self.itemBorderSize), self.curItem_do.setHeight(self.finalH - 2 * self.itemBorderSize)))
                }
            }, self.showItemFirstTime = function() {
                self.isFirstItemShowed_bl = !0, self.mainItemHolder_do.setX(self.stageWidth / 2), self.mainItemHolder_do.setY(self.stageHeight / 2), self.mainItemHolder_do.setWidth(0), self.mainItemHolder_do.setHeight(0), self.itemBk_do.setX(0), self.itemBk_do.setY(0), self.itemBk_do.setWidth(0), self.itemBk_do.setHeight(0), self.curItem_do.type_str == FWDRLR3D.IMAGE_TYPE && (self.curItem_do.setAlpha(0), self.curItem_do.setX(-self.finalW / 2 + self.itemBorderSize), self.curItem_do.setY(-self.finalH / 2 + self.itemBorderSize), FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                    alpha: 1,
                    delay: .8,
                    ease: Quint.easeOut
                }), FWDR3DCarModTweenMax.to(self.curItem_do, .8, {
                    x: self.itemBorderSize,
                    y: self.itemBorderSize,
                    ease: Expo.easeInOut
                }), self.startAnim(1601)), FWDR3DCarModTweenMax.to(self.mainItemHolder_do, .8, {
                    x: self.finalX,
                    y: self.finalY,
                    w: self.finalW,
                    h: self.finalH,
                    ease: Expo.easeInOut
                }), self.itemBorder_do.setAlpha(0), FWDR3DCarModTweenMax.to(self.itemBorder_do, .8, {
                    alpha: 1,
                    x: 0,
                    y: 0,
                    w: self.finalW,
                    h: self.finalH,
                    ease: Expo.easeInOut
                }), FWDR3DCarModTweenMax.to(self.itemBk_do, .8, {
                    x: self.itemBorderSize,
                    y: self.itemBorderSize,
                    w: self.finalW - 2 * self.itemBorderSize,
                    h: self.finalH - 2 * self.itemBorderSize,
                    ease: Expo.easeInOut
                }), self.hider.start(), setTimeout(function() {
                    self.slideShowAutoPlay_bl && self.tm.start(), FWDRLR3D.dispatchEvent(FWDRLR3D.SHOW_COMPLETE)
                }, 800), self.addKeyboardSupport_bl ? self.addKeyboardSupport() : self.removeKeyboardSupport()
            }, self.gotoToItem = function(a) {
                self.isReady_bl && self.isFirstItemShowed_bl && !self.isAnim_bl && (self.isMobile_bl || self.disableClick(), self.id = a, self.useDeepLinking_bl ? self.propsObjVariableName_str ? FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + self.propsObjVariableName_str) : FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id) : self.createAndShowItem())
            }, self.gotoNextItem = function() {
                self.isReady_bl && self.isFirstItemShowed_bl && !self.isAnim_bl && (self.isMobile_bl || self.disableClick(), self.id++, self.id < 0 ? self.id = self.totalItems - 1 : self.id > self.totalItems - 1 && (self.id = 0), self.useDeepLinking_bl ? self.propsObjVariableName_str ? FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + self.propsObjVariableName_str) : FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id) : self.createAndShowItem(), self.hideShareButtons(!0))
            }, self.gotoPrevItem = function() {
                self.isReady_bl && self.isFirstItemShowed_bl && !self.isAnim_bl && (self.isMobile_bl || self.disableClick(), self.id--, self.id < 0 ? self.id = self.totalItems - 1 : self.id > self.totalItems - 1 && (self.id = 0), self.useDeepLinking_bl ? self.propsObjVariableName_str ? FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id + "&rl_propsobj=" + self.propsObjVariableName_str) : FWDAddress.setValue("RL?rl_playlist=" + self.playlistDomOrObj_str + "&rl_id=" + self.id) : self.createAndShowItem(), self.hideShareButtons(!0))
            }, self.removeItems = function(a) {
                for (var b; self.itemHolder_do.getNumChildren() > a;) b = self.itemHolder_do.getChildAt(0), FWDR3DCarModTweenMax.killTweensOf(b), self.itemHolder_do.removeChild(b), b.destroy();
                b = null
            }, self.addSwipeSupport = function() {
                self.hasPointerEvent_bl ? self.main_do.screen.addEventListener("pointerdown", self.swipeStartHandler) : self.main_do.screen.addEventListener("touchstart", self.swipeStartHandler)
            }, self.removeSwipeSupport = function() {
                self.hasPointerEvent_bl ? (window.removeEventListener("pointerdown", self.swipeStartHandler), window.removeEventListener("pointerup", self.swipeUpHandler), window.removeEventListener("pointermove", self.swipeMoveHandler)) : (window.removeEventListener("touchstart", self.swipeStartHandler), window.removeEventListener("touchend", self.swipeUpHandler), window.removeEventListener("touchmove", self.swipeMoveHandler)), self.swipeMoved_bl = !1
            }, this.swipeStartHandler = function(a) {
                if (!a.touches || 1 == a.touches.length) {
                    var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                    self.swipeMoved_bl = !1, self.mouseX = b.screenX, self.mouseY = b.screenY, self.hasPointerEvent_bl ? (window.addEventListener("pointerup", self.swipeUpHandler), window.addEventListener("pointermove", self.swipeMoveHandler)) : (window.addEventListener("touchend", self.swipeUpHandler), window.addEventListener("touchmove", self.swipeMoveHandler))
                }
            }, self.swipeMoveHandler = function(a) {
                if (a.preventDefault && a.preventDefault(), !(self.isClickedDisabled_bl || a.touches && 1 != a.touches.length)) {
                    self.swipeMoved_bl = !0;
                    var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                    self.dif = self.mouseX - b.screenX, self.mouseX = b.screenX, self.mouseY = b.screenY
                }
            }, self.swipeUpHandler = function(a) {
                if (!(self.isAnim_bl || self.isAnimMaximizeOrMinimize_bl || self.isMaximized_bl)) {
                    var b;
                    b = FWDRLR3DUtils.isApple ? 20 : 4, self.dif > b ? self.isClickedDisabled_bl || self.gotoNextItem() : self.dif < -b && (self.isClickedDisabled_bl || self.gotoPrevItem()), self.dif = 0, self.hasPointerEvent_bl ? (window.removeEventListener("pointerup", self.swipeUpHandler), window.removeEventListener("pointermove", self.swipeMoveHandler)) : (window.removeEventListener("touchend", self.swipeUpHandler), window.removeEventListener("touchmove", self.swipeMoveHandler))
                }
            }, self.addKeyboardSupport = function() {
                self.hasKeyboardSupport_bl || (self.hasKeyboardSupport_bl = !0, document.addEventListener ? (document.addEventListener("keydown", self.onKeyDownHandler), document.addEventListener("keyup", self.onKeyUpHandler)) : (document.attachEvent("onkeydown", self.onKeyDownHandler), document.attachEvent("onkeyup", self.onKeyUpHandler)))
            }, self.removeKeyboardSupport = function() {
                self.hasKeyboardSupport_bl && (self.hasKeyboardSupport_bl = !1, document.removeEventListener ? (document.removeEventListener("keydown", self.onKeyDownHandler), document.removeEventListener("keyup", self.onKeyUpHandler)) : (document.detachEvent("onkeydown", self.onKeyDownHandler), document.detachEvent("onkeyup", self.onKeyUpHandler)))
            }, self.onKeyDownHandler = function(a) {
                return document.removeEventListener ? document.removeEventListener("keydown", self.onKeyDownHandler) : document.detachEvent("onkeydown", self.onKeyDownHandler), 39 == a.keyCode ? (self.gotoNextItem(), a.preventDefault && a.preventDefault(), !1) : 37 == a.keyCode ? (self.gotoPrevItem(), a.preventDefault && a.preventDefault(), !1) : void 0
            }, this.onKeyUpHandler = function(a) {
                document.addEventListener ? document.addEventListener("keydown", self.onKeyDownHandler) : document.attachEvent("onkeydown", self.onKeyDownHandler)
            }, self.setDefaultSettings = function() {
                self.buttonsAlignment_str = self.DFButtonsAlignment_str, self.defaultItemW = self.DFDefaultItemW, self.defaultItemH = self.DFDefaultItemH, self.descriptionWindowPosition_str = self.DFDescriptionWindowPosition_str, self.desc_do && (self.desc_do.position_str = self.descriptionWindowPosition_str), self.descriptionAnimationType_str = self.DFDescriptionAnimationType_str, self.desc_do && (self.desc_do.descriptionAnimationType_str = self.descriptionAnimationType_str), self.backgroundColor_str = self.DFBackgroundColor_str, self.bk_do.getStyle().backgroundColor = self.backgroundColor_str, self.itemBorderColor1_str = self.DFitemBorderColor1_str, self.itemBorderColor2_str = self.DFitemBorderColor2_str, self.itemBorder_do && self.itemBorder_do.setCSSGradient(self.DFitemBorderColor1_str, self.DFitemBorderColor2_str), self.spaceBetweenButtons = self.DFSpaceBetweenButtons, self.buttonsHideDelay = self.DFbuttonsHideDelay, self.hider && (self.hider.hideDelay = self.buttonsHideDelay), self.nextVideoOrAudioAutoPlay_bl = self.DFNextVideoOrAudioAutoPlay_bl, self.useAsModal_bl = self.DFUseAsModal_bl, self.slideShowAutoPlay_bl = self.DFSlideShowAutoPlay_bl, self.videoAutoPlay_bl = self.DFVideoAutoPlay_bl, self.audioAutoPlay_bl = self.DFAudioAutoPlay_bl, self.addKeyboardSupport_bl = self.DFSddKeyboardSupport_bl, self.showCloseButton_bl = self.DFShowCloseButton_bl, self.showShareButton_bl = self.DFShowFacebookButton_bl, self.defaultShowZoomButton_bl = self.DFShowZoomButton, self.showSlideShowButton_bl = self.DFShowSlideShowButton_bl, self.defaultShowSlideShowAnimation_bl = self.DFSefaultShowSlideShowAnimation_bl, self.defaultShowNextAndPrevButtons_bl = self.DFSefaultShowNextAndPrevButtons_bl, self.slideShowDelay = self.DFSlideShowDelay, self.tm && (self.tm.delay = self.slideShowDelay), self.slp_do && (self.slp_do.duration = self.slideShowDelay / 1e3), self.itemOffsetH = self.DFItemOffsetH, self.buttonsOffsetIn = self.DFButtonsOffsetIn, self.buttonsOffsetOut = self.DFButtonsOffsetOut, self.itemBorderSize = self.DFItemBorderSize, self.desc_do && (self.desc_do.margins = self.itemBorderSize), self.itemBorderRadius = self.DFItemBorderRadius, self.itemBorderRadius ? self.mainItemHolder_do.getStyle().borderRadius = self.itemBorderRadius + "px" : self.mainItemHolder_do.getStyle().borderRadius = "", self.backgroundOpacity = self.DFBackgroundOpacity, self.itemBoxShadow_str = self.DFItemBoxShadow_str, "none" == self.itemBoxShadow_str ? self.mainItemHolder_do.getStyle().boxShadow = "none" : self.mainItemHolder_do.getStyle().boxShadow = self.itemBoxShadow_str, self.itemBkColor_str = self.DFItemBkColor_str, self.itemBk_do.getStyle().backgroundColor = self.itemBkColor_str, self.defaultShowThumbnails_bl = self.DFDefaultThumbnails_bl, self.defaultShowThumbnailsHideOrShowButton_bl = self.DFDefaultShowThumbnailsHideOrShowButton_bl, self.showThumbnailsByDefault_bl = self.DFShowThumbnailsByDefault_bl, self.showThumbnailsOverlay_bl = self.DFShowThumbnailsOverlay_bl, self.thumbnailsManager_do && (self.thumbnailsManager_do.showThumbnailsOverlay_bl = self.showThumbnailsOverlay_bl), self.showThumbnailsSmallIcon_bl = self.DFShowThumbnailsSmallIcon_bl, self.thumbnailsManager_do && (self.thumbnailsManager_do.showThumbnailsSmallIcon_bl = self.showThumbnailsSmallIcon_bl), self.thumbnailsOffsetBottom = self.DFThumbnailsOffsetBottom, self.thumbnailH = self.DFThumbnailH, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOffsetBottom = self.thumbnailsOffsetBottom, self.thumbnailsManager_do.thumbnailH = self.thumbnailH - self.thumbnailsOffsetBottom, self.thumbnailsManager_do.stageHeight = self.thumbnailH), self.thumbnailsBorderSize = self.DFThumbnailsBorderSize, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderSize = self.thumbnailsBorderSize), self.thumbnailsBorderRadius = self.DFThumbnailsBorderRadius, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderRadius = self.thumbnailsBorderRadius), self.spaceBetweenThumbnailsAndItem = self.DFSpaceBetweenThumbnailsAndItem, self.spaceBetweenThumbnails = self.DFSpaceBetweenThumbnails, self.thumbnailsManager_do && (self.thumbnailsManager_do.spaceBetweenThumbnails = self.spaceBetweenThumbnails), self.thumbnailsOverlayOpacity = self.DFThumbnailsOverlayOpacity, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOverlayOpacity = self.thumbnailsOverlayOpacity), self.thumbnailsOverlayColor_str = self.DFThumbnailsOverlayColor_str, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOverlayColor_str = self.thumbnailsOverlayColor_str), self.thumbnailsBorderNormalColor_str = self.DFThumbnailsBorderNormalColor, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderNormalColor_str = self.thumbnailsBorderNormalColor_str), self.thumbnailsBorderSelectedColor_str = self.DFThumbnailsBorderSelectedColor_str, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderSelectedColor_str = self.thumbnailsBorderNormalColor_str), self.defaultHideDescriptionButtons_bl = self.DFDefaultHideDescriptionButtons_bl, self.defaultShowDescriptionByDefault_bl = self.DFDefaultShowDescriptionByDefault_bl, self.showDescription_bl = self.defaultShowDescriptionByDefault_bl, self.descriptionWindowBackgroundColor_str = self.DFDescriptionWindowBackgroundColor, self.desc_do && (self.desc_do.backgroundColor_str = self.descriptionWindowBackgroundColor_str, self.desc_do.bk_do.setBkColor(self.descriptionWindowBackgroundColor_str)),
                    self.descriptionWindowBackgroundOpacity = self.DFDescriptionWindowBackgroundOpacity, self.desc_do && (self.desc_do.backgroundOpacity = self.descriptionWindowBackgroundOpacity, self.desc_do.bk_do.setAlpha(self.desc_do.backgroundOpacity)), self.data.videoControllerBackgroundColor_str = self.DFVideoControllerBackgroundColor_str, self.data.videoPosterBackgroundColor_str = self.DFVideoPosterBackgroundColor_str, self.data.videoPosterBackgroundColor_str = self.DFVideoPosterBackgroundColor_str, self.video_do && self.video_do.controller_do && (self.video_do.controller_do.mainHolder_do.getStyle().backgroundColor = self.data.videoControllerBackgroundColor_str, self.video_do.videoPoster_do.getStyle().backgroundColor = self.data.videoPosterBackgroundColor_str), self.data.audioControllerBackgroundColor_str = self.DFAudioControllerBackgroundColor_str, self.audio_do && self.audio_do.controller_do && (self.audio_do.controller_do.getStyle().backgroundColor = self.data.audioControllerBackgroundColor_str)
            }, self.setObjectPropsSettings = function(a) {
                var b;
                for (var c in a) switch (c) {
                    case "defaultItemWidth":
                        self.defaultItemW = a.defaultItemWidth || 640;
                        break;
                    case "defaultItemHeight":
                        self.defaultItemH = a.defaultItemHeight || 380;
                        break;
                    case "buttonsAlignment":
                        self.buttonsAlignment_str = a.buttonsAlignment || "in";
                        var b = "in" == self.buttonsAlignment_str || "out" == self.buttonsAlignment_str;
                        b || (self.buttonsAlignment_str = "in");
                        break;
                    case "descriptionWindowPosition":
                        self.descriptionWindowPosition_str = a.descriptionWindowPosition || "top", b = "top" == self.descriptionWindowPosition_str || "bottom" == self.descriptionWindowPosition_str, b || (self.descriptionWindowPosition_str = "top"), self.desc_do && (self.desc_do.position_str = self.descriptionWindowPosition_str);
                        break;
                    case "showDescriptionButton":
                        self.defaultHideDescriptionButtons_bl = a.showDescriptionButton, self.defaultHideDescriptionButtons_bl = "yes" == self.defaultHideDescriptionButtons_bl;
                        break;
                    case "showDescriptionByDefault":
                        self.defaultShowDescriptionByDefault_bl = a.showDescriptionByDefault, self.defaultShowDescriptionByDefault_bl = "yes" == self.defaultShowDescriptionByDefault_bl, self.showDescription_bl = self.defaultShowDescriptionByDefault_bl;
                        break;
                    case "descriptionWindowAnimationType":
                        self.descriptionAnimationType_str = a.descriptionWindowAnimationType || "motion", b = "motion" == self.descriptionAnimationType_str || "opacity" == self.descriptionAnimationType_str, b || (self.descriptionAnimationType_str = "motion"), self.desc_do && (self.desc_do.descriptionAnimationType_str = self.descriptionAnimationType_str);
                        break;
                    case "descriptionWindowBackgroundColor":
                        self.descriptionWindowBackgroundColor_str = a.descriptionWindowBackgroundColor || "#FF0000", self.desc_do && (self.desc_do.backgroundColor_str = self.descriptionWindowBackgroundColor_str, self.desc_do.bk_do.setBkColor(self.descriptionWindowBackgroundColor_str));
                        break;
                    case "descriptionWindowBackgroundOpacity":
                        self.descriptionWindowBackgroundOpacity = a.descriptionWindowBackgroundOpacity || 1, self.desc_do && (self.desc_do.backgroundOpacity = self.descriptionWindowBackgroundOpacity, self.desc_do.bk_do.setAlpha(self.desc_do.backgroundOpacity));
                        break;
                    case "backgroundColor":
                        self.backgroundColor_str = a.backgroundColor || "#000000", self.bk_do.getStyle().backgroundColor = self.backgroundColor_str;
                        break;
                    case "itemBorderColor1":
                        self.itemBorderColor1_str = a.itemBorderColor1 || "transparent", self.itemBorderColor2_str = a.itemBorderColor2 || "transparent", self.itemBorder_do && self.itemBorder_do.setCSSGradient(self.itemBorderColor1, self.itemBorderColor2);
                        break;
                    case "spaceBetweenButtons":
                        self.spaceBetweenButtons = a.spaceBetweenButtons || 0;
                        break;
                    case "buttonsHideDelay":
                        self.buttonsHideDelay = a.buttonsHideDelay || 3, self.buttonsHideDelay *= 1e3, self.hider && (self.hider.hideDelay = self.buttonsHideDelay);
                        break;
                    case "useAsModal":
                        self.useAsModal_bl = a.useAsModal, self.useAsModal_bl = "yes" == self.useAsModal_bl;
                        break;
                    case "slideShowAutoPlay":
                        self.slideShowAutoPlay_bl = a.slideShowAutoPlay, self.slideShowAutoPlay_bl = "yes" == self.slideShowAutoPlay_bl;
                        break;
                    case "videoAutoPlay":
                        self.videoAutoPlay_bl = a.videoAutoPlay, self.videoAutoPlay_bl = "yes" == self.videoAutoPlay_bl, self.isMobile_bl && (self.videoAutoPlay_bl = !1);
                        break;
                    case "nextVideoOrAudioAutoPlay":
                        self.nextVideoOrAudioAutoPlay_bl = a.nextVideoOrAudioAutoPlay, self.nextVideoOrAudioAutoPlay_bl = "yes" == self.nextVideoOrAudioAutoPlay_bl, self.isMobile_bl && (self.nextVideoOrAudioAutoPlay_bl = !1);
                        break;
                    case "audioAutoPlay":
                        self.audioAutoPlay_bl = a.audioAutoPlay, self.audioAutoPlay_bl = "yes" == self.audioAutoPlay_bl, self.isMobile_bl && (self.audioAutoPlay_bl = !1);
                        break;
                    case "addKeyboardSupport":
                        self.addKeyboardSupport_bl = a.addKeyboardSupport, self.addKeyboardSupport_bl = "yes" == self.addKeyboardSupport_bl;
                        break;
                    case "showCloseButton":
                        self.showCloseButton_bl = a.showCloseButton, self.showCloseButton_bl = "no" != self.showCloseButton_bl;
                        break;
                    case "showShareButton":
                        self.showShareButton_bl = a.showShareButton, self.showShareButton_bl = "yes" == self.showShareButton_bl;
                        break;
                    case "showZoomButton":
                        self.defaultShowZoomButton_bl = a.showZoomButton, self.defaultShowZoomButton_bl = "no" != self.defaultShowZoomButton_bl;
                        break;
                    case "showSlideShowButton":
                        self.showSlideShowButton_bl = a.showSlideShowButton, self.showSlideShowButton_bl = "yes" == self.showSlideShowButton_bl;
                        break;
                    case "showSlideShowAnimation":
                        self.defaultShowSlideShowAnimation_bl = a.showSlideShowAnimation, self.defaultShowSlideShowAnimation_bl = "yes" == self.defaultShowSlideShowAnimation_bl;
                        break;
                    case "showNextAndPrevButtons":
                        self.defaultShowNextAndPrevButtons_bl = a.showNextAndPrevButtons, self.defaultShowNextAndPrevButtons_bl = "no" != self.defaultShowNextAndPrevButtons_bl, "no" == a.showNextAndPrevButtonsOnMobile && self.isMobile_bl && (self.defaultShowNextAndPrevButtons_bl = !1);
                        break;
                    case "slideShowDelay":
                        self.slideShowDelay = 1e3 * parseInt(a.slideShowDelay), self.slideShowDelay < .001 && (self.slideShowDelay = 1e3), self.tm && (self.tm.delay = self.slideShowDelay), self.slp_do && (self.slp_do.duration = self.slideShowDelay / 1e3);
                        break;
                    case "itemOffsetHeight":
                        self.itemOffsetH = a.itemOffsetHeight || 0;
                        break;
                    case "buttonsOffsetIn":
                        self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? this.buttonsOffsetIn = a.buttonsOffsetIn || 0 : this.buttonsOffsetIn = a.buttonsOffsetOut || 0;
                        break;
                    case "buttonsOffsetOut":
                        self.buttonsAlignment_str == FWDRLR3D.BUTTONS_IN ? self.buttonsOffsetOut = a.buttonsOffsetOut || 0 : self.buttonsOffsetOut = a.buttonsOffsetIn || 0;
                        break;
                    case "itemBorderSize":
                        self.itemBorderSize = a.itemBorderSize || 0, self.desc_do && (self.desc_do.margins = self.itemBorderSize);
                        break;
                    case "itemBorderRadius":
                        self.itemBorderRadius = a.itemBorderRadius || 0, self.itemBorderRadius ? self.mainItemHolder_do.getStyle().borderRadius = self.itemBorderRadius + "px" : self.mainItemHolder_do.getStyle().borderRadius = "";
                        break;
                    case "backgroundOpacity":
                        self.backgroundOpacity = a.backgroundOpacity || .8;
                        break;
                    case "itemBoxShadow":
                        self.itemBoxShadow_str = a.itemBoxShadow || "none", "none" == self.itemBoxShadow_str ? self.mainItemHolder_do.getStyle().boxShadow = "none" : self.mainItemHolder_do.getStyle().boxShadow = self.itemBoxShadow_str;
                        break;
                    case "itemBackgroundColor":
                        self.itemBkColor_str = a.itemBackgroundColor || "transparent", self.itemBk_do.getStyle().backgroundColor = self.itemBkColor_str;
                        break;
                    case "showThumbnails":
                        self.defaultShowThumbnails_bl = a.showThumbnails, self.defaultShowThumbnails_bl = "yes" == self.defaultShowThumbnails_bl;
                        break;
                    case "showThumbnailsHideOrShowButton":
                        self.defaultShowThumbnailsHideOrShowButton_bl = a.showThumbnailsHideOrShowButton, self.defaultShowThumbnailsHideOrShowButton_bl = "yes" == self.defaultShowThumbnailsHideOrShowButton_bl;
                        break;
                    case "showThumbnailsByDefault":
                        self.showThumbnailsByDefault_bl = a.showThumbnailsByDefault, self.showThumbnailsByDefault_bl = "yes" == self.showThumbnailsByDefault_bl;
                        break;
                    case "showThumbnailsOverlay":
                        self.showThumbnailsOverlay_bl = a.showThumbnailsOverlay, self.showThumbnailsOverlay_bl = "yes" == self.showThumbnailsOverlay_bl, self.thumbnailsManager_do && (self.thumbnailsManager_do.showThumbnailsOverlay_bl = self.showThumbnailsOverlay_bl);
                        break;
                    case "showThumbnailsSmallIcon":
                        self.showThumbnailsSmallIcon_bl = a.showThumbnailsSmallIcon, self.showThumbnailsSmallIcon_bl = "yes" == self.showThumbnailsSmallIcon_bl, self.thumbnailsManager_do && (self.thumbnailsManager_do.showThumbnailsSmallIcon_bl = self.showThumbnailsSmallIcon_bl);
                        break;
                    case "thumbnailsOffsetBottom":
                        self.thumbnailsOffsetBottom = a.thumbnailsOffsetBottom || 0, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOffsetBottom = self.thumbnailsOffsetBottom);
                        break;
                    case "thumbnailsImageHeight":
                        self.thumbnailH = a.thumbnailsImageHeight || 50;
                        break;
                    case "thumbnailsBorderSize":
                        self.thumbnailsBorderSize = a.thumbnailsBorderSize || 0, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderSize = self.thumbnailsBorderSize);
                        break;
                    case "thumbnailsBorderRadius":
                        self.thumbnailsBorderRadius = a.thumbnailsBorderRadius || 0, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderRadius = self.thumbnailsBorderRadius);
                        break;
                    case "spaceBetweenThumbnailsAndItem":
                        self.spaceBetweenThumbnailsAndItem = a.spaceBetweenThumbnailsAndItem || 0;
                        break;
                    case "spaceBetweenThumbnails":
                        self.spaceBetweenThumbnails = a.spaceBetweenThumbnails || 0, self.thumbnailsManager_do && (self.thumbnailsManager_do.spaceBetweenThumbnails = self.spaceBetweenThumbnails);
                        break;
                    case "thumbnailsOverlayOpacity":
                        self.thumbnailsOverlayOpacity = a.thumbnailsOverlayOpacity || 1, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOverlayOpacity = self.thumbnailsOverlayOpacity);
                        break;
                    case "thumbnailsOverlayColor":
                        self.thumbnailsOverlayColor_str = a.thumbnailsOverlayColor || "#FF0000", self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsOverlayColor_str = self.thumbnailsOverlayColor_str);
                        break;
                    case "thumbnailsBorderNormalColor":
                        self.thumbnailsBorderNormalColor_str = a.thumbnailsBorderNormalColor || "#FF0000", self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderNormalColor_str = self.thumbnailsBorderNormalColor_str);
                        break;
                    case "thumbnailsBorderSelectedColor":
                        self.thumbnailsBorderSelectedColor_str = a.thumbnailsBorderSelectedColor || "#FF0000", self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailsBorderSelectedColor_str = self.thumbnailsBorderNormalColor_str);
                        break;
                    case "videoControllerBackgroundColor":
                        self.data.videoControllerBackgroundColor_str = a.videoControllerBackgroundColor || "transparent", self.video_do && self.video_do.controller_do && (self.video_do.controller_do.mainHolder_do.getStyle().backgroundColor = self.data.videoControllerBackgroundColor_str);
                        break;
                    case "videoPosterBackgroundColor":
                        self.data.videoPosterBackgroundColor_str = a.videoPosterBackgroundColor || "transparent", self.video_do && (self.video_do.videoPoster_do.getStyle().backgroundColor = self.data.videoPosterBackgroundColor_str);
                        break;
                    case "audioControllerBackgroundColor":
                        self.data.audioControllerBackgroundColor_str = a.audioControllerBackgroundColor || "transparent", self.audio_do && self.audio_do.controller_do && (self.audio_do.controller_do.getStyle().backgroundColor = self.data.audioControllerBackgroundColor_str)
                }
                a.thumbnailsImageHeight && (self.thumbnailH += 2 * self.thumbnailsBorderSize + self.thumbnailsOffsetBottom, self.thumbnailsManager_do && (self.thumbnailsManager_do.thumbnailH = self.thumbnailH - self.thumbnailsOffsetBottom, self.thumbnailsManager_do.stageHeight = self.thumbnailH))
            }, FWDRLR3D.addListener = function(a, b) {
                if (self.listeners) {
                    if (void 0 == a) throw Error("type_str is required.");
                    if ("object" == typeof a) throw Error("type_str must be of type_str String.");
                    if ("function" != typeof b) throw Error("listener must be of type_str Function.");
                    var c = {};
                    c.type_str = a, c.listener = b, c.target = self, self.listeners.events_ar.push(c)
                }
            }, FWDRLR3D.dispatchEvent = function(a, b) {
                if (null != self.listeners) {
                    if (void 0 == a) throw Error("type_str is required.");
                    if ("object" == typeof a) throw Error("type_str must be of type_str String.");
                    for (var c = 0, d = self.listeners.events_ar.length; c < d; c++)
                        if (self.listeners.events_ar[c].target === self && self.listeners.events_ar[c].type_str === a) {
                            if (b)
                                for (var e in b) self.listeners.events_ar[c][e] = b[e];
                            self.listeners.events_ar[c].listener.call(self, self.listeners.events_ar[c])
                        }
                }
            }, FWDRLR3D.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type_str is required.");
                if ("object" == typeof a) throw Error("type_str must be of type_str String.");
                if ("function" != typeof b) throw Error("listener must be of type_str Function." + a);
                for (var c = 0, d = self.listeners.events_ar.length; c < d; c++)
                    if (self.listeners.events_ar[c].target === self && self.listeners.events_ar[c].type_str === a && self.listeners.events_ar[c].listener === b) {
                        self.listeners.events_ar.splice(c, 1);
                        break
                    }
            }, self.init()
        };
        FWDRLR3D.setPrototype = function() {
            FWDRLR3D.prototype = new FWDRVPEventDispatcher
        }, FWDRLR3D.READY = "ready", FWDRLR3D.SHOW_START = "showStart", FWDRLR3D.SHOW_COMPLETE = "showComplete", FWDRLR3D.HIDE_START = "hideStart", FWDRLR3D.HIDE_COMPLETE = "hidecComplete", FWDRLR3D.UPDATE = "update", FWDRLR3D.BUTTONS_IN = "in", FWDRLR3D.READY = "ready", FWDRLR3D.ERROR = "error", FWDRLR3D.IMAGE_TYPE = "image", FWDRLR3D.VIDEO_TYPE = "video", FWDRLR3D.AUDIO_TYPE = "audio", FWDRLR3D.FLASH_TYPE = "flash", FWDRLR3D.IFRAME_TYPE = "iframe", FWDRLR3D.MAXIMIZE_COMPLETE = "maximizeComplete", window.FWDRLR3D = FWDRLR3D
    }(window), function() {
        var a = function(b, c, d, e, f) {
            var g = this;
            a.prototype;
            this.n1Img = b, this.s1Path_str = c, this.n2Img = d, this.s2Path_str = e, this.buttonsHolder_do, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.buttonWidth = g.n1Img.width, this.buttonHeight = g.n1Img.height, this.isSelectedState_bl = !1, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = f, this.isDisabled_bl = !1, this.isHoverDisabled_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !g.isMobile_bl || g.hasPointerEvent_bl, g.init = function() {
                g.setButtonMode(!0), g.setWidth(g.buttonWidth), g.setHeight(g.buttonHeight), g.setupMainContainers(), g.secondButton_do.setX(-50)
            }, g.setupMainContainers = function() {
                if (g.buttonsHolder_do = new FWDRLR3DDisplayObject("div"), g.buttonsHolder_do.setOverflow("visible"), g.firstButton_do = new FWDRLR3DDisplayObject("div"), g.addChild(g.firstButton_do), g.n1_do = new FWDRLR3DDisplayObject("img"), g.n1_do.setScreen(g.n1Img), g.firstButton_do.addChild(g.n1_do), g.allowToCreateSecondButton_bl) {
                    g.s1_do = new FWDRLR3DDisplayObject("img");
                    var a = new Image;
                    a.src = g.s1Path_str, g.s1_do.setScreen(a), g.s1_do.setWidth(g.buttonWidth), g.s1_do.setHeight(g.buttonHeight), g.s1_do.setAlpha(0), g.firstButton_do.addChild(g.s1_do)
                }
                if (g.firstButton_do.setWidth(g.buttonWidth), g.firstButton_do.setHeight(g.buttonHeight), g.secondButton_do = new FWDRLR3DDisplayObject("div"), g.addChild(g.secondButton_do), g.n2_do = new FWDRLR3DDisplayObject("img"), g.n2_do.setScreen(g.n2Img), g.secondButton_do.addChild(g.n2_do), g.allowToCreateSecondButton_bl) {
                    g.s2_do = new FWDRLR3DDisplayObject("img");
                    var b = new Image;
                    b.src = g.s2Path_str, g.s2_do.setScreen(b), g.s2_do.setWidth(g.buttonWidth), g.s2_do.setHeight(g.buttonHeight), g.s2_do.setAlpha(0), g.secondButton_do.addChild(g.s2_do)
                }
                g.secondButton_do.setWidth(g.buttonWidth), g.secondButton_do.setHeight(g.buttonHeight), g.buttonsHolder_do.addChild(g.secondButton_do), g.buttonsHolder_do.addChild(g.firstButton_do), g.addChild(g.buttonsHolder_do), g.isMobile_bl ? g.hasPointerEvent_bl ? (g.screen.addEventListener("pointerdown", g.onMouseUp), g.screen.addEventListener("pointerover", g.onMouseOver), g.screen.addEventListener("pointerout", g.onMouseOut)) : (g.screen.addEventListener("toustart", g.onDown), g.screen.addEventListener("touchend", g.onMouseUp)) : g.screen.addEventListener ? (g.screen.addEventListener("mouseover", g.onMouseOver), g.screen.addEventListener("mouseout", g.onMouseOut), g.screen.addEventListener("mouseup", g.onMouseUp)) : g.screen.attachEvent && (g.screen.attachEvent("onmouseover", g.onMouseOver), g.screen.attachEvent("onmouseout", g.onMouseOut), g.screen.attachEvent("onmousedown", g.onMouseUp))
            }, g.onMouseOver = function(b, c) {
                g.dispatchEvent(a.SHOW_TOOLTIP, {
                    e: b
                }), g.isDisabled_bl || g.isSelectedState_bl || g.isHoverDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE && "mouse" != b.pointerType || (g.dispatchEvent(a.MOUSE_OVER, {
                    e: b
                }), g.setSelectedState(!0))
            }, g.onMouseOut = function(b) {
                g.isDisabled_bl || !g.isSelectedState_bl || g.isHoverDisabled_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE && "mouse" != b.pointerType || (g.setNormalState(), g.dispatchEvent(a.MOUSE_OUT))
            }, g.onDown = function(a) {
                a.preventDefault && a.preventDefault()
            }, g.onMouseUp = function(b) {
                g.isDisabled_bl || 2 == b.button || (b.preventDefault && b.preventDefault(), g.isMobile_bl || g.onMouseOver(b, !1), g.disptachMainEvent_bl && g.dispatchEvent(a.MOUSE_UP, {
                    e: b
                }))
            }, g.toggleButton = function() {
                1 == g.currentState ? (g.firstButton_do.setX(-50), g.secondButton_do.setX(0), g.currentState = 0, g.dispatchEvent(a.FIRST_BUTTON_CLICK)) : (g.firstButton_do.setX(-50), g.secondButton_do.setX(0), g.currentState = 1, g.dispatchEvent(a.SECOND_BUTTON_CLICK))
            }, g.setButtonState = function(a) {
                1 == a ? (g.firstButton_do.setX(0), g.secondButton_do.setX(-50), g.currentState = 1) : (g.firstButton_do.setX(-50), g.secondButton_do.setX(0), g.currentState = 0)
            }, this.setNormalState = function() {
                g.isMobile_bl && !g.hasPointerEvent_bl || (g.isSelectedState_bl = !1, FWDR3DCarModTweenMax.killTweensOf(g.s1_do), FWDR3DCarModTweenMax.killTweensOf(g.s2_do), FWDR3DCarModTweenMax.to(g.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(g.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function(a) {
                g.isSelectedState_bl = !0, FWDR3DCarModTweenMax.killTweensOf(g.s1_do), FWDR3DCarModTweenMax.killTweensOf(g.s2_do), FWDR3DCarModTweenMax.to(g.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(g.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, this.disable = function() {
                g.isDisabled_bl = !0, g.setButtonMode(!1), FWDR3DCarModTweenMax.to(g, .6, {
                    alpha: .4
                })
            }, this.enable = function() {
                g.isDisabled_bl = !1, g.setButtonMode(!0), FWDR3DCarModTweenMax.to(g, .6, {
                    alpha: 1
                })
            }, this.disableHover = function() {
                g.isHoverDisabled_bl = !0, g.setSelectedState()
            }, this.enableHover = function() {
                g.isHoverDisabled_bl = !1
            }, g.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDRLR3DDisplayObject("div")
        }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.SHOW_TOOLTIP = "showToolTip", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_UP = "onMouseUp", a.CLICK = "onClick", a.prototype = null, window.FWDRLR3DComplexButton = a
    }(window), function(a) {
        var b = function() {
            var c = this;
            b.prototype;
            this.main_do = null, this.init = function() {
                this.setupScreen(), a.onerror = this.showError, this.screen.style.zIndex = 1e20, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
            }, this.position = function() {
                var a = FWDRLR3DUtils.getScrollOffsets();
                c.setX(a.x), c.setY(a.y + 30)
            }, this.addConsoleToDom = function() {
                navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 ? document.getElementsByTagName("body")[0].appendChild(c.screen) : document.documentElement.appendChild(c.screen)
            }, this.setupScreen = function() {
                this.main_do = new FWDRLR3DDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(300), this.main_do.setHeight(150), this.setWidth(300), this.setHeight(150), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
            }, this.showError = function(a, b, d) {
                var e = c.main_do.getInnerHTML() + "<br>JavaScript error: " + a + " on line " + d + " for " + b;
                c.main_do.setInnerHTML(e), c.main_do.screen.scrollTop = c.main_do.screen.scrollHeight
            }, this.log = function(a) {
                var b = c.main_do.getInnerHTML() + "<br>" + a;
                c.main_do.setInnerHTML(b), c.main_do.getScreen().scrollTop = 1e4
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div", "absolute")
        }, b.prototype = null, a.FWDRLR3DConsole = b
    }(window), function() {
        var a = function(a, b) {
            var c = this;
            this.parent = a, this.url = "http://www.webdesign-flash.ro", this.menu_do = null, this.normalMenu_do = null, this.selectedMenu_do = null, this.over_do = null, this.isDisabled_bl = !1, this.init = function() {
                c.updateParent(c.parent)
            }, this.updateParent = function(a) {
                c.parent && (c.parent.screen.addEventListener ? c.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler) : c.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler)), c.parent = a, c.parent.screen.addEventListener ? c.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : c.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
            }, this.contextMenuHandler = function(a) {
                if (!c.isDisabled_bl) {
                    if ("disabled" == b) return !!a.preventDefault && void a.preventDefault();
                    if ("default" != b && c.url.indexOf("sh.r") != -1) return c.setupMenus(), c.parent.addChild(c.menu_do), c.menu_do.setVisible(!0), c.positionButtons(a), window.addEventListener ? window.addEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", c.contextMenuWindowOnMouseDownHandler), !!a.preventDefault && void a.preventDefault()
                }
            }, this.contextMenuWindowOnMouseDownHandler = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    d = b.screenX,
                    e = b.screenY;
                FWDRLR3DUtils.hitTest(c.menu_do.screen, d, e) || (window.removeEventListener ? window.removeEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", c.contextMenuWindowOnMouseDownHandler), c.menu_do.setX(-500))
            }, this.setupMenus = function() {
                this.menu_do || (this.menu_do = new FWDRLR3DDisplayObject("div"), c.menu_do.setX(-500), this.menu_do.getStyle().width = "100%", this.normalMenu_do = new FWDRLR3DDisplayObject("div"), this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.normalMenu_do.getStyle().padding = "4px", this.normalMenu_do.getStyle().fontSize = "12px", this.normalMenu_do.getStyle().color = "#000000", this.normalMenu_do.setInnerHTML("&#0169; made by FWD"), this.normalMenu_do.setBkColor("#FFFFFF"), this.selectedMenu_do = new FWDRLR3DDisplayObject("div"), this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.selectedMenu_do.getStyle().padding = "4px", this.selectedMenu_do.getStyle().fontSize = "12px", this.selectedMenu_do.getStyle().color = "#FFFFFF", this.selectedMenu_do.setInnerHTML("&#0169; made by FWD"), this.selectedMenu_do.setBkColor("#000000"), this.selectedMenu_do.setAlpha(0), this.over_do = new FWDRLR3DDisplayObject("div"), this.over_do.setBkColor("#FF0000"), this.over_do.setAlpha(0), this.menu_do.addChild(this.normalMenu_do), this.menu_do.addChild(this.selectedMenu_do), this.menu_do.addChild(this.over_do), this.parent.addChild(this.menu_do), this.over_do.setWidth(this.selectedMenu_do.getWidth()), this.menu_do.setWidth(this.selectedMenu_do.getWidth()), this.over_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setVisible(!1), this.menu_do.setButtonMode(!0), this.menu_do.screen.onmouseover = this.mouseOverHandler, this.menu_do.screen.onmouseout = this.mouseOutHandler, this.menu_do.screen.onclick = this.onClickHandler)
            }, this.mouseOverHandler = function() {
                c.url.indexOf("w.we") == -1 && (c.menu_do.visible = !1), FWDR3DCarModTweenMax.to(c.normalMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(c.selectedMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.mouseOutHandler = function() {
                FWDR3DCarModTweenMax.to(c.normalMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDR3DCarModTweenMax.to(c.selectedMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onClickHandler = function() {
                window.open(c.url, "_blank")
            }, this.positionButtons = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    d = b.screenX - c.parent.getGlobalX(),
                    e = b.screenY - c.parent.getGlobalY(),
                    f = d + 2,
                    g = e + 2;
                f > c.parent.getWidth() - c.menu_do.getWidth() - 2 && (f = d - c.menu_do.getWidth() - 2), g > c.parent.getHeight() - c.menu_do.getHeight() - 2 && (g = e - c.menu_do.getHeight() - 2), c.menu_do.setX(f), c.menu_do.setY(g)
            }, this.disable = function() {
                c.isDisabled_bl = !0
            }, this.enable = function() {
                c.isDisabled_bl = !1
            }, this.destroy = function() {
                c.parent && (c.parent.screen.addEventListener ? (c.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler), window.removeEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler)) : (c.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler), document.documentElement.detachEvent("onclick", c.contextMenuWindowOnMouseDownHandler)))
            }, this.init()
        };
        a.prototype = null, window.FWDRLR3DContextMenu = a
    }(window), function(a) {
        var b = function(c, d, e) {
            var f = this;
            b.prototype;
            this.xhr = null, this.emailXHR = null, this.playlist_ar = null, this.props_obj = c, this.skinPaths_ar = [], this.images_ar = [], this.cats_ar = [], this.lightboxSkinPath_str = null, this.facebookAppId_str = null, this.wrningIconPath_str = null, this.countLoadedSkinImages = 0, this.showLoadPlaylistErrorId_to, this.loadPreloaderId_to, this.allowToChangeVolume_bl = !0, this.autoPlay_bl = !1, this.showFacebookButton_bl = !1, this.isDataLoaded_bl = !1, this.useDeepLinking_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, f.init = function() {
                f.parseProperties()
            }, f.parseProperties = function() {
                if (f.mainFolderPath_str = f.props_obj.mainFolderPath, !f.mainFolderPath_str) return void setTimeout(function() {
                    null != f && (errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!", f.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 100);
                if (f.mainFolderPath_str.lastIndexOf("/") + 1 != f.mainFolderPath_str.length && (f.mainFolderPath_str += "/"), f.lightboxSkinPath_str = f.props_obj.skinPath, !f.lightboxSkinPath_str) return void setTimeout(function() {
                    null != f && (errorMessage_str = "The <font color='#FF0000'>skinPath</font> property is not defined in the constructor function!", f.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 100);
                if (f.lightboxSkinPath_str.lastIndexOf("/") + 1 != f.lightboxSkinPath_str.length && (f.lightboxSkinPath_str += "/"), f.flashPath_str = f.mainFolderPath_str + "video_player.swf", f.audioFlashPath_str = f.mainFolderPath_str + "audio_player.swf", f.lightboxSkinPath_str = f.mainFolderPath_str + f.lightboxSkinPath_str, f.videoSkinPath_str = f.lightboxSkinPath_str + "video_player_skin/", f.audioSkinPath_str = f.lightboxSkinPath_str + "audio_player_skin/", f.wrningIconPath_str = f.lightboxSkinPath_str + "main_skin/warning.png", f.rightClickContextMenu_str = f.props_obj.rightClickContextMenu || "developer", test = "developer" == f.rightClickContextMenu_str || "disabled" == f.rightClickContextMenu_str || "default" == f.rightClickContextMenu_str, test || (f.rightClickContextMenu_str = "developer"), f.autoPlay_bl = f.props_obj.autoPlay, f.autoPlay_bl = "yes" == f.autoPlay_bl, f.useVideo_bl = "no" != f.props_obj.useVideo, f.DFUseVideo_bl = f.useVideo_bl, !FWDRLR3DEVPlayer.hasHTML5Video && FWDRLR3DUtils.isLocal && (f.useVideo_bl = !1), f.useAudio_bl = "no" != f.props_obj.useAudio, f.DFUseAudio_bl = f.useAudio_bl, !FWDRLR3DEAP.hasHTML5Audio && FWDRLR3DUtils.isLocal && (f.useAudio_bl = !1), f.timeColor_str = f.props_obj.timeColor || "#FF0000", f.videoPosterBackgroundColor_str = f.props_obj.videoPosterBackgroundColor || "transparent", f.videoControllerBackgroundColor_str = f.props_obj.videoControllerBackgroundColor || "transparent", f.audioControllerBackgroundColor_str = f.props_obj.audioControllerBackgroundColor || "transparent", f.volume = 1, f.controllerHeight = f.props_obj.videoControllerHeight || 50, f.startSpaceBetweenButtons = f.props_obj.startSpaceBetweenButtons || 0, f.controllerHideDelay = f.props_obj.videoControllerHideDelay || 2, f.controllerHideDelay *= 1e3, f.vdSpaceBetweenButtons = f.props_obj.vdSpaceBetweenButtons || 0, f.scrubbersOffsetWidth = f.props_obj.scrubbersOffsetWidth || 0, f.volumeScrubberOffsetRightWidth = f.props_obj.volumeScrubberOffsetRightWidth || 0, f.timeOffsetLeftWidth = f.props_obj.timeOffsetLeftWidth || 0, f.timeOffsetRightWidth = f.props_obj.timeOffsetRightWidth || 0, f.timeOffsetTop = f.props_obj.timeOffsetTop || 0, f.logoMargins = f.props_obj.logoMargins || 0, f.mainScrubberOffestTop = f.props_obj.mainScrubberOffestTop || 0, f.volumeScrubberWidth = f.props_obj.volumeScrubberWidth || 10, f.audioScrubbersOffestTotalWidth = f.props_obj.audioScrubbersOffestTotalWidth || 0, f.audioControllerHeight = f.props_obj.audioControllerHeight || 40, f.volumeScrubberWidth > 200 && (f.volumeScrubberWidth = 200), f.isMobile_bl && (f.allowToChangeVolume_bl = !1), f.addKeyboardSupport_bl = f.props_obj.addVideoKeyboardSupport, f.addKeyboardSupport_bl = "no" != f.addKeyboardSupport_bl, f.videoAutoPlay_bl = f.props_obj.videoAutoPlay, f.videoAutoPlay_bl = "yes" == f.videoAutoPlay_bl, FWDRLR3DUtils.isMobile && (f.videoAutoPlay_bl = !1), f.audioAutoPlay_bl = f.props_obj.audioAutoPlay, f.audioAutoPlay_bl = "yes" == f.audioAutoPlay_bl, FWDRLR3DUtils.isMobile && (f.audioAutoPlay_bl = !1), f.videoLoop_bl = f.props_obj.videoLoop, f.videoLoop_bl = "yes" == f.videoLoop_bl, f.audioLoop_bl = f.props_obj.audioLoop, f.audioLoop_bl = "yes" == f.audioLoop_bl, f.showLogo_bl = f.props_obj.showLogo, f.showLogo_bl = "yes" == f.showLogo_bl, f.hideLogoWithController_bl = f.props_obj.hideLogoWithController, f.hideLogoWithController_bl = "yes" == f.hideLogoWithController_bl, f.showPoster_bl = f.props_obj.showPoster, f.showPoster_bl = "yes" == f.showPoster_bl, f.showVolumeScrubber_bl = f.props_obj.showVolumeScrubber, f.showVolumeScrubber_bl = "no" != f.showVolumeScrubber_bl, f.showVolumeButton_bl = f.props_obj.showVolumeButton, f.showVolumeButton_bl = "no" != f.showVolumeButton_bl, f.showControllerWhenVideoIsStopped_bl = !0, f.showTime_bl = f.props_obj.showTime, f.showTime_bl = "no" != f.showTime_bl, f.videoShowFullScreenButton_bl = f.props_obj.videoShowFullScreenButton, f.videoShowFullScreenButton_bl = "no" != f.videoShowFullScreenButton_bl, f.showShareButton_bl = f.props_obj.showShareButton, f.showShareButton_bl = "yes" == f.showShareButton_bl, f.mainPreloader_img = new Image, f.mainPreloader_img.onerror = f.onSkinLoadErrorHandler, f.mainPreloader_img.onload = f.onPreloaderLoadHandler, f.mainPreloader_img.src = f.lightboxSkinPath_str + "main_skin/preloader.png", f.skinPaths_ar = [{
                        img: f.playN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/play-button.png"
                    }, {
                        img: f.nextN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/next-button.png"
                    }, {
                        img: f.prevN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/prev-button.png"
                    }, {
                        img: f.closeN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/close-button.png"
                    }, {
                        img: f.infoOpenN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/info-open-button.png"
                    }, {
                        img: f.infoCloseN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/info-close-button.png"
                    }, {
                        img: f.maximizeN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/maximize-button.png"
                    }, {
                        img: f.minimizeN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/minimize-button.png"
                    }, {
                        img: f.playN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/play-button.png"
                    }, {
                        img: f.pauseN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/pause-button.png"
                    }, {
                        img: f.hideThumbnailsN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/hide-thumbnails-button.png"
                    }, {
                        img: f.showThumbnailsN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/show-thumbnails-button.png"
                    }, {
                        img: f.slideSwowImage_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/slideshow-preloader.png"
                    }], f.skinPaths_ar.push({
                        img: f.showShareImage_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/show-share-button.png"
                    }, {
                        img: f.hideShareImage_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/hide-share-button.png"
                    }, {
                        img: f.facebookN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/facebook-button.png"
                    }, {
                        img: f.twitterN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/twitter-button.png"
                    }, {
                        img: f.googleN_img = new Image,
                        src: f.lightboxSkinPath_str + "main_skin/google-plus-button.png"
                    }), f.prevSPath_str = f.lightboxSkinPath_str + "main_skin/prev-button-over.png", f.nextSPath_str = f.lightboxSkinPath_str + "main_skin/next-button-over.png", f.closeSPath_str = f.lightboxSkinPath_str + "main_skin/close-button-over.png", f.infoOpenS_str = f.lightboxSkinPath_str + "main_skin/info-open-button-over.png", f.infoCloseS_str = f.lightboxSkinPath_str + "main_skin/info-close-button-over.png", f.maximizeSPath_str = f.lightboxSkinPath_str + "main_skin/maximize-button-over.png", f.minimizeSPath_str = f.lightboxSkinPath_str + "main_skin/minimize-button-over.png", f.playS_str = f.lightboxSkinPath_str + "main_skin/play-button-over.png", f.pauseS_str = f.lightboxSkinPath_str + "main_skin/pause-button-over.png", f.hideThumbnailsSPath_str = f.lightboxSkinPath_str + "main_skin/hide-thumbnails-button-over.png", f.showThumbnailsSPath_str = f.lightboxSkinPath_str + "main_skin/show-thumbnails-button-over.png", f.showShareImageSPath_str = f.lightboxSkinPath_str + "main_skin/show-share-button-over.png", f.hideShareImageSPath_str = f.lightboxSkinPath_str + "main_skin/hide-share-button-over.png", f.facebookImageSPath_str = f.lightboxSkinPath_str + "main_skin/facebook-button-over.png", f.twitterImageSPath_str = f.lightboxSkinPath_str + "main_skin/twitter-button-over.png",
                    f.googleImageSPath_str = f.lightboxSkinPath_str + "main_skin/google-plus-button-over.png", f.imageIconPath_str = f.lightboxSkinPath_str + "main_skin/image-icon.png", f.flashIconPath_str = f.lightboxSkinPath_str + "main_skin/flash-icon.png", f.audioIconPath_str = f.lightboxSkinPath_str + "main_skin/audio-icon.png", f.videoIconPath_str = f.lightboxSkinPath_str + "main_skin/video-icon.png", f.vimeoIconPath_str = f.lightboxSkinPath_str + "main_skin/vimeo-icon.png", f.youtubeIconPath_str = f.lightboxSkinPath_str + "main_skin/youtube-icon.png", f.mapsIconPath_str = f.lightboxSkinPath_str + "main_skin/maps-icon.png", f.ajaxIconPath_str = f.lightboxSkinPath_str + "main_skin/ajax-icon.png", f.htmlIconPath_str = f.lightboxSkinPath_str + "main_skin/html-icon.png", f.iframeIconPath_str = f.lightboxSkinPath_str + "main_skin/iframe-icon.png", f.useVideo_bl && (f.skinPaths_ar.push({
                        img: f.videoMainPreloader_img = new Image,
                        src: f.videoSkinPath_str + "preloader.png"
                    }, {
                        img: f.videoPlayN_img = new Image,
                        src: f.videoSkinPath_str + "play-button.png"
                    }, {
                        img: f.videoPauseN_img = new Image,
                        src: f.videoSkinPath_str + "pause-button.png"
                    }, {
                        img: f.videoMainScrubberBkLeft_img = new Image,
                        src: f.videoSkinPath_str + "scrubber-left-background.png"
                    }, {
                        img: f.videoMainScrubberDragLeft_img = new Image,
                        src: f.videoSkinPath_str + "scrubber-left-drag.png"
                    }, {
                        img: f.videoMainScrubberLine_img = new Image,
                        src: f.videoSkinPath_str + "scrubber-line.png"
                    }, {
                        img: f.videoVolumeN_img = new Image,
                        src: f.videoSkinPath_str + "volume-button.png"
                    }, {
                        img: f.videoProgressLeft_img = new Image,
                        src: f.videoSkinPath_str + "progress-left.png"
                    }, {
                        img: f.videoLargePlayN_img = new Image,
                        src: f.videoSkinPath_str + "large-play-button.png"
                    }, {
                        img: f.videoFullScreenN_img = new Image,
                        src: f.videoSkinPath_str + "full-screen-button.png"
                    }, {
                        img: f.videoNormalScreenN_img = new Image,
                        src: f.videoSkinPath_str + "normal-screen-button.png"
                    }), f.videoPlaySPath_str = f.videoSkinPath_str + "play-button-over.png", f.videoPauseSPath_str = f.videoSkinPath_str + "pause-button-over.png", f.videoBkMiddlePath_str = f.videoSkinPath_str + "controller-middle.png", f.videoMainScrubberBkRightPath_str = f.videoSkinPath_str + "scrubber-right-background.png", f.videoMainScrubberBkMiddlePath_str = f.videoSkinPath_str + "scrubber-middle-background.png", f.videoMainScrubberDragMiddlePath_str = f.videoSkinPath_str + "scrubber-middle-drag.png", f.videoVolumeScrubberBkRightPath_str = f.videoSkinPath_str + "scrubber-right-background.png", f.videoVolumeScrubberBkMiddlePath_str = f.videoSkinPath_str + "scrubber-middle-background.png", f.videoVolumeScrubberDragMiddlePath_str = f.videoSkinPath_str + "scrubber-middle-drag.png", f.videoVolumeSPath_str = f.videoSkinPath_str + "volume-button-over.png", f.videoVolumeDPath_str = f.videoSkinPath_str + "volume-button-disabled.png", f.videoLargePlayS_str = f.videoSkinPath_str + "large-play-button-over.png", f.videoFullScreenSPath_str = f.videoSkinPath_str + "full-screen-button-over.png", f.videoNormalScreenSPath_str = f.videoSkinPath_str + "normal-screen-button-over.png", f.videoProgressMiddlePath_str = f.videoSkinPath_str + "progress-middle.png"), f.useAudio_bl) {
                    f.skinPaths_ar.push({
                        img: f.audioPlayN_img = new Image,
                        src: f.audioSkinPath_str + "play-button.png"
                    }, {
                        img: f.audioPauseN_img = new Image,
                        src: f.audioSkinPath_str + "pause-button.png"
                    }, {
                        img: f.audioMainScrubberBkLeft_img = new Image,
                        src: f.audioSkinPath_str + "scrubber-left-background.png"
                    }, {
                        img: f.mainScrubberBkRight_img = new Image,
                        src: f.audioSkinPath_str + "scrubber-right-background.png"
                    }, {
                        img: f.mainScrubberDragLeft_img = new Image,
                        src: f.audioSkinPath_str + "scrubber-left-drag.png"
                    }, {
                        img: f.mainScrubberLine_img = new Image,
                        src: f.audioSkinPath_str + "scrubber-line.png"
                    }, {
                        img: f.volumeN_img = new Image,
                        src: f.audioSkinPath_str + "volume-button.png"
                    }, {
                        img: f.progressLeft_img = new Image,
                        src: f.audioSkinPath_str + "progress-left.png"
                    }), f.audioPlaySPath_str = f.audioSkinPath_str + "play-button-over.png", f.audioPauseSPath_str = f.audioSkinPath_str + "pause-button-over.png";
                    f.audioSkinPath_str + "scrubber-left-background.png";
                    f.mainScrubberBkRightPath_str = f.audioSkinPath_str + "scrubber-right-background.png", f.mainScrubberBkMiddlePath_str = f.audioSkinPath_str + "scrubber-middle-background.png", f.mainScrubberDragMiddlePath_str = f.audioSkinPath_str + "scrubber-middle-drag.png", f.volumeScrubberBkLeftPath_str = f.audioSkinPath_str + "scrubber-left-background.png", f.volumeScrubberBkRightPath_str = f.audioSkinPath_str + "scrubber-right-background.png", f.volumeScrubberDragLeftPath_str = f.audioSkinPath_str + "scrubber-left-drag.png", f.volumeScrubberLinePath_str = f.audioSkinPath_str + "scrubber-line.png", f.volumeScrubberBkMiddlePath_str = f.audioSkinPath_str + "scrubber-middle-background.png", f.volumeScrubberDragMiddlePath_str = f.audioSkinPath_str + "scrubber-middle-drag.png", f.volumeSPath_str = f.audioSkinPath_str + "volume-button-over.png", f.volumeDPath_str = f.audioSkinPath_str + "volume-button-disabled.png", f.progressMiddlePath_str = f.audioSkinPath_str + "progress-middle.png"
                }
                f.totalGraphics = f.skinPaths_ar.length, f.loadSkin()
            }, this.onPreloaderLoadHandler = function() {
                setTimeout(function() {
                    f.dispatchEvent(b.PRELOADER_LOAD_DONE)
                }, 50)
            }, f.loadSkin = function() {
                for (var a, b, c = 0; c < f.totalGraphics; c++) a = f.skinPaths_ar[c].img, b = f.skinPaths_ar[c].src, a.onload = f.onSkinLoadHandler, a.onerror = f.onSkinLoadErrorHandler, a.src = b
            }, this.onSkinLoadHandler = function(a) {
                f.countLoadedSkinImages++, f.countLoadedSkinImages == f.totalGraphics && setTimeout(function() {
                    f.dispatchEvent(b.SKIN_LOAD_COMPLETE)
                }, 50)
            }, f.onSkinLoadErrorHandler = function(c) {
                FWDRLR3DUtils.isIEAndLessThen9 ? message = "Graphics image not found!" : message = "The skin icon with label <font color='#FF0000'>" + c.target.src + "</font> can't be loaded.", a.console && console.log(c);
                var d = {
                    text: message
                };
                setTimeout(function() {
                    f.dispatchEvent(b.LOAD_ERROR, d)
                }, 100)
            }, f.showPropertyError = function(a) {
                setTimeout(function() {
                    f.dispatchEvent(b.LOAD_ERROR, {
                        text: "The property called <font color='#FF0000'>" + a + "</font> is not defined."
                    })
                }, 100)
            }, f.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DEventDispatcher
        }, b.prototype = null, b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", b.LOAD_DONE = "onLoadDone", b.LOAD_ERROR = "onLoadError", b.IMAGE_LOADED = "onImageLoaded", b.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", b.SKIN_PROGRESS = "onSkinProgress", b.IMAGES_PROGRESS = "onImagesPogress", b.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete", a.FWDRLR3DData = b
    }(window), function(a) {
        var b = function(a, c, d, e, f, g) {
            var h = this;
            b.prototype;
            this.main_do, this.text_do, this.bk_do, this.descriptionAnimationType_str = c, this.backgroundColor_str = f, this.position_str = d, this.backgroundOpacity = g, this.margins = e, this.finalW = 0, this.finalH = 0, this.finalY = 0, this.resizeWithDelayId_to, this.isShowedFirstTime_bl = !1, this.isShowed_bl = !1, this.isHiddenDone_bl = !0, h.init = function() {
                h.setupMainContainers()
            }, h.setupMainContainers = function() {
                h.main_do = new FWDRLR3DDisplayObject("div"), h.main_do.getStyle().width = "100%", h.main_do.getStyle().height = "100%", h.main_do.setBackfaceVisibility(), !h.isMobile_bl && FWDRLR3DUtils.isChrome && (h.main_do.hasTransform3d_bl = !1, h.main_do.hasTransform2d_bl = !1), h.text_do = new FWDRLR3DDisplayObject("div"), h.text_do.getStyle().fontSmoothing = "antialiased", h.text_do.getStyle().webkitFontSmoothing = "antialiased", h.text_do.getStyle().textRendering = "optimizeLegibility", h.text_do.getStyle().width = "100%", h.text_do.setBackfaceVisibility(), h.text_do.hasTransform3d_bl = !1, h.text_do.hasTransform2d_bl = !1, h.bk_do = new FWDRLR3DDisplayObject("div"), h.bk_do.setResizableSizeAfterParent(), h.bk_do.setBkColor(h.backgroundColor_str), h.bk_do.setAlpha(h.backgroundOpacity), h.bk_do.setBackfaceVisibility(), !h.isMobile_bl && FWDRLR3DUtils.isChrome && (h.bk_do.hasTransform3d_bl = !1, h.bk_do.hasTransform2d_bl = !1), h.main_do.addChild(h.bk_do), h.main_do.addChild(h.text_do), h.addChild(h.main_do)
            }, h.setText = function(a) {
                h.text_do.setInnerHTML(a), h.resizeAndPosition()
            }, h.resizeAndPosition = function(a, b) {
                a && (h.finalW = a), h.finalH = h.text_do.getHeight(), h.setFinalSize(), clearTimeout(h.resizeWithDelayId_to), h.resizeWithDelayId_to = setTimeout(h.setFinalSize, 50)
            }, h.setFinalSize = function() {
                h.finalH = h.text_do.getHeight(), "top" == h.position_str ? h.finalY = h.margins : h.finalY = a.mainItemHolder_do.h - h.finalH - h.margins, h.setX(h.margins), h.setY(h.finalY), h.setWidth(h.finalW), h.main_do.setHeight(h.finalH), h.setHeight(h.finalH)
            }, h.hide = function(a, b, c) {
                (h.isShowed_bl || b) && (h.isShowed_bl = !1, c && (h.isShowedFirstTime_bl = !1), FWDR3DCarModTweenMax.killTweensOf(h.main_do), a ? "motion" == h.descriptionAnimationType_str ? "top" == h.position_str ? FWDR3DCarModTweenMax.to(h.main_do, .8, {
                    y: -h.finalH,
                    ease: Expo.easeInOut,
                    onComplete: h.hideComplete
                }) : FWDR3DCarModTweenMax.to(h.main_do, .8, {
                    y: h.finalH,
                    ease: Expo.easeInOut,
                    onComplete: h.hideComplete
                }) : FWDR3DCarModTweenMax.to(h.main_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut,
                    onComplete: h.hideComplete
                }) : h.hideComplete())
            }, h.hideComplete = function() {
                h.setVisible(!1), "motion" == h.descriptionAnimationType_str ? "top" == h.position_str ? h.main_do.setY(-h.finalH) : h.main_do.setY(h.finalH) : h.main_do.setAlpha(0)
            }, h.show = function(a) {
                h.isShowed_bl || (h.isShowed_bl = !0, h.isShowedFirstTime_bl || (h.isShowedFirstTime_bl = !0, h.hideComplete(), h.resizeAndPosition()), h.setVisible(!0), FWDR3DCarModTweenMax.killTweensOf(h.main_do), "motion" == h.descriptionAnimationType_str ? (1 != h.main_do.alpha && h.main_do.setAlpha(1), a ? FWDR3DCarModTweenMax.to(h.main_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : h.main_do.setY(0)) : (h.main_do.setY(0), a ? FWDR3DCarModTweenMax.to(h.main_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }) : h.main_do.setAlpha(1)))
            }, h.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDRLR3DDisplayObject("div")
        }, b.HIDE_COMPLETE = "infoWindowHideComplete", b.prototype = null, a.FWDRLR3DDescriptionWindow = b
    }(window), function(a) {
        var b = function(a, b, c, d) {
            var e = this;
            if (e.listeners = {
                    events_ar: []
                }, "div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
            e.type = a, this.children_ar = [], this.style, this.screen, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDRLR3DUtils.hasTransform3d, this.hasTransform2d_bl = FWDRLR3DUtils.hasTransform2d, (FWDRLR3DUtils.isIE || FWDRLR3DUtils.isIE11 && !FWDRLR3DUtils.isMobile) && (e.hasTransform3d_bl = !1, e.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, e.init = function() {
                e.setScreen()
            }, e.getTransform = function() {
                for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                    if ("undefined" != typeof e.screen.style[b]) return b;
                return !1
            }, e.getOpacityType = function() {
                var a;
                return a = "undefined" != typeof e.screen.style.opacity ? "opacity" : "filter"
            }, e.setScreen = function(a) {
                "img" == e.type && a ? (e.screen = a, e.setMainProperties()) : (e.screen = document.createElement(e.type), e.setMainProperties())
            }, e.setMainProperties = function() {
                e.transform = e.getTransform(), e.setPosition(e.position), e.setOverflow(e.overflow), e.opacityType = e.getOpacityType(), "opacity" == e.opacityType && (e.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), e.screen.style.left = "0px", e.screen.style.top = "0px", e.screen.style.margin = "0px", e.screen.style.padding = "0px", e.screen.style.maxWidth = "none", e.screen.style.maxHeight = "none", e.screen.style.border = "none", e.screen.style.lineHeight = "1", e.screen.style.backgroundColor = "transparent", e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden", e.screen.style.transition = "none", e.screen.style.webkitTransition = "none", e.screen.style.MozTransition = "none", e.screen.style.OTransition = "none", "img" == a && (e.setWidth(e.screen.width), e.setHeight(e.screen.height))
            }, e.setBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
            }, e.setSelectable = function(a) {
                a || (e.screen.style.userSelect = "none", e.screen.style.MozUserSelect = "none", e.screen.style.webkitUserSelect = "none", e.screen.style.khtmlUserSelect = "none", e.screen.style.oUserSelect = "none", e.screen.style.msUserSelect = "none", e.screen.msUserSelect = "none", e.screen.ondragstart = function(a) {
                    return !1
                }, e.screen.onselectstart = function() {
                    return !1
                }, e.screen.ontouchstart = function() {
                    return !1
                }, e.screen.style.webkitTouchCallout = "none", e.hasBeenSetSelectable_bl = !0)
            }, e.getScreen = function() {
                return e.screen
            }, e.setVisible = function(a) {
                e.visible = a, 1 == e.visible ? e.screen.style.visibility = "visible" : e.screen.style.visibility = "hidden"
            }, e.getVisible = function() {
                return e.visible
            }, e.setResizableSizeAfterParent = function() {
                e.screen.style.width = "100%", e.screen.style.height = "100%"
            }, e.getStyle = function() {
                return e.screen.style
            }, e.setOverflow = function(a) {
                e.overflow = a, e.screen.style.overflow = e.overflow
            }, e.setPosition = function(a) {
                e.position = a, e.screen.style.position = e.position
            }, e.setDisplay = function(a) {
                e.display = a, e.screen.style.display = e.display
            }, e.setButtonMode = function(a) {
                e.buttonMode = a, 1 == e.buttonMode ? e.screen.style.cursor = "pointer" : e.screen.style.cursor = "default"
            }, e.setBkColor = function(a) {
                e.screen.style.backgroundColor = a
            }, e.setInnerHTML = function(a) {
                e.innerHTML = a, e.screen.innerHTML = e.innerHTML
            }, e.getInnerHTML = function() {
                return e.innerHTML
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.setAlpha = function(a) {
                e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
            }, e.getAlpha = function() {
                return e.alpha
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.getGlobalX = function() {
                return e.getRect().left
            }, e.getGlobalY = function() {
                return e.getRect().top
            }, e.setX = function(a) {
                e.x = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.left = e.x + "px"
            }, e.getX = function() {
                return e.x
            }, e.setY = function(a) {
                e.y = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.top = e.y + "px"
            }, e.getY = function() {
                return e.y
            }, e.setWidth = function(a) {
                e.w = a, "img" == e.type ? (e.screen.width = e.w, e.screen.style.width = e.w + "px") : e.screen.style.width = e.w + "px"
            }, e.getWidth = function() {
                return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
            }, e.setHeight = function(a) {
                e.h = a, "img" == e.type ? (e.screen.height = e.h, e.screen.style.height = e.h + "px") : e.screen.style.height = e.h + "px"
            }, e.getHeight = function() {
                return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
            }, e.addChild = function(a) {
                e.contains(a) ? (e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 1), e.children_ar.push(a), e.screen.appendChild(a.screen)) : (e.children_ar.push(a), e.screen.appendChild(a.screen))
            }, e.removeChild = function(a) {
                if (!e.contains(a)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
                e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 1), e.screen.removeChild(a.screen)
            }, e.contains = function(a) {
                return FWDRLR3DUtils.indexOfArray(e.children_ar, a) != -1
            }, e.addChildAt = function(a, b) {
                if (0 == e.getNumChildren()) e.children_ar.push(a), e.screen.appendChild(a.screen);
                else if (1 == b) e.screen.insertBefore(a.screen, e.children_ar[0].screen), e.screen.insertBefore(e.children_ar[0].screen, a.screen), e.contains(a) ? e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 0, a);
                else {
                    if (b < 0 || b > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                    e.screen.insertBefore(a.screen, e.children_ar[b].screen), e.contains(a) ? e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDRLR3DUtils.indexOfArray(e.children_ar, a), 0, a)
                }
            }, e.getChildAt = function(a) {
                if (a < 0 || a > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                if (0 == e.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
                return e.children_ar[a]
            }, e.removeChildAtZero = function() {
                e.screen.removeChild(e.children_ar[0].screen), e.children_ar.shift()
            }, e.getNumChildren = function() {
                return e.children_ar.length
            }, e.addListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function.");
                var c = {};
                c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
            }, e.dispatchEvent = function(a, b) {
                if (null != this.listeners) {
                    if (void 0 == a) throw Error("type is required.");
                    if ("object" == typeof a) throw Error("type must be of type String.");
                    for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                        if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                            if (b)
                                for (var e in b) this.listeners.events_ar[c][e] = b[e];
                            this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                        }
                }
            }, e.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function." + a);
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                        this.listeners.events_ar.splice(c, 1);
                        break
                    }
            }, e.disposeImage = function() {
                "img" == e.type && (e.screen.src = null)
            }, e.destroy = function() {
                e.hasBeenSetSelectable_bl && (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null), e.screen.removeAttribute("style"), e.listeners = [], e.listeners = null, e.children_ar = [], e.children_ar = null, e.style = null, e.screen = null, e.transform = null, e.position = null, e.overflow = null, e.display = null, e.visible = null, e.buttonMode = null, e.x = null, e.y = null, e.w = null, e.h = null, e.rect = null, e.alpha = null, e.innerHTML = null, e.opacityType = null, e.isHtml5_bl = null, e.hasTransform3d_bl = null, e.hasTransform2d_bl = null, e = null
            }, e.init()
        };
        a.FWDRLR3DDisplayObject = b
    }(window), "undefined" == typeof asual) var asual = {};
"undefined" == typeof asual.util && (asual.util = {}), asual.util.Browser = new function() {
    var a = navigator.userAgent.toLowerCase(),
        b = /webkit/.test(a),
        c = /opera/.test(a),
        d = /msie/.test(a) && !/opera/.test(a),
        e = /mozilla/.test(a) && !/(compatible|webkit)/.test(a),
        f = parseFloat(d ? a.substr(a.indexOf("msie") + 4) : (a.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function() {
        return "[class Browser]"
    }, this.getVersion = function() {
        return f
    }, this.isMSIE = function() {
        return d
    }, this.isSafari = function() {
        return b
    }, this.isOpera = function() {
        return c
    }, this.isMozilla = function() {
        return e
    }
}, asual.util.Events = new function() {
    var a = "DOMContentLoaded",
        b = "onstop",
        c = window,
        d = document,
        e = [],
        f = asual.util,
        g = f.Browser,
        h = g.isMSIE(),
        i = g.isSafari();
    this.toString = function() {
        return "[class Events]"
    }, this.addListener = function(b, c, d) {
        e.push({
            o: b,
            t: c,
            l: d
        }), c == a && (h || i) || (b.addEventListener ? b.addEventListener(c, d, !1) : b.attachEvent && b.attachEvent("on" + c, d))
    }, this.removeListener = function(b, c, d) {
        for (var g, f = 0; g = e[f]; f++)
            if (g.o == b && g.t == c && g.l == d) {
                e.splice(f, 1);
                break
            } c == a && (h || i) || (b.removeEventListener ? b.removeEventListener(c, d, !1) : b.detachEvent && b.detachEvent("on" + c, d))
    };
    var j = function() {
            for (var c, b = 0; c = e[b]; b++) c.t != a && f.Events.removeListener(c.o, c.t, c.l)
        },
        k = function() {
            function a() {
                d.detachEvent(b, a), j()
            }
            "interactive" == d.readyState && (d.attachEvent(b, a), c.setTimeout(function() {
                d.detachEvent(b, a)
            }, 0))
        };
    (h || i) && ! function() {
        try {
            (h && d.body || !/loaded|complete/.test(d.readyState)) && d.documentElement.doScroll("left")
        } catch (a) {
            return setTimeout(arguments.callee, 0)
        }
        for (var c, b = 0; c = e[b]; b++) c.t == a && c.l.call(null)
    }(), h && c.attachEvent && c.attachEvent("onbeforeunload", k), this.addListener(c, "unload", j)
}, asual.util.Functions = new function() {
    this.toString = function() {
        return "[class Functions]"
    }, this.bind = function(a, b, c) {
        for (var e, d = 2, f = []; e = arguments[d]; d++) f.push(e);
        return function() {
            return a.apply(b, f)
        }
    }
};
var FWDAddressEvent = function(a) {
    this.toString = function() {
        return "[object FWDAddressEvent]"
    }, this.type = a, this.target = [FWDAddress][0], this.value = FWDAddress.getValue(), this.path = FWDAddress.getPath(), this.pathNames = FWDAddress.getPathNames(), this.parameters = {};
    for (var b = FWDAddress.getParameterNames(), c = 0, d = b.length; c < d; c++) this.parameters[b[c]] = FWDAddress.getParameter(b[c]);
    this.parameterNames = b
};
FWDAddressEvent.INIT = "init", FWDAddressEvent.CHANGE = "change", FWDAddressEvent.INTERNAL_CHANGE = "internalChange", FWDAddressEvent.EXTERNAL_CHANGE = "externalChange";
var FWDAddress = new function() {
    var _getHash = function() {
            var a = _l.href.indexOf("#");
            return a != -1 ? _ec(_dc(_l.href.substr(a + 1))) : ""
        },
        _getWindow = function() {
            try {
                return top.document, top
            } catch (a) {
                return window
            }
        },
        _strictCheck = function(a, b) {
            return _opts.strict && (a = b ? "/" != a.substr(0, 1) ? "/" + a : a : "" == a ? "/" : a), a
        },
        _ieLocal = function(a, b) {
            return _msie && "file:" == _l.protocol ? b ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?") : a
        },
        _searchScript = function(a) {
            if (a.childNodes)
                for (var d, b = 0, c = a.childNodes.length; b < c; b++)
                    if (a.childNodes[b].src && (_url = String(a.childNodes[b].src)), d = _searchScript(a.childNodes[b])) return d
        },
        _titleCheck = function() {
            _d.title != _title && _d.title.indexOf("#") != -1 && (_d.title = _title)
        },
        _listen = function() {
            if (!_silent) {
                var a = _getHash(),
                    b = !(_value == a);
                _safari && _version < 523 ? _length != _h.length && (_length = _h.length, typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1)) : _msie && b ? _version < 7 ? _l.reload() : this.setValue(a) : b && (_value = a, _update.call(this, !1)), _msie && _titleCheck.call(this)
            }
        },
        _bodyClick = function(e) {
            if (_popup.length > 0) {
                var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
                typeof _popup[3] != UNDEFINED && eval(_popup[3])
            }
            _popup = []
        },
        _swfChange = function() {
            for (var b, c, a = 0, d = FWDAddress.getValue(), e = "setFWDAddressValue"; b = _ids[a]; a++)
                if (c = document.getElementById(b))
                    if (c.parentNode && typeof c.parentNode.so != UNDEFINED) c.parentNode.so.call(e, d);
                    else {
                        if (!c || typeof c[e] == UNDEFINED) {
                            var f = c.getElementsByTagName("object"),
                                g = c.getElementsByTagName("embed");
                            c = f[0] && typeof f[0][e] != UNDEFINED ? f[0] : g[0] && typeof g[0][e] != UNDEFINED ? g[0] : null
                        }
                        c && c[e](d)
                    }
            else(c = document[b]) && typeof c[e] != UNDEFINED && c[e](d)
        },
        _jsDispatch = function(a) {
            this.dispatchEvent(new FWDAddressEvent(a)), a = a.substr(0, 1).toUpperCase() + a.substr(1), typeof this["on" + a] == FUNCTION && this["on" + a]()
        },
        _jsInit = function() {
            _util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
        },
        _jsChange = function() {
            _swfChange(), _jsDispatch.call(this, "change")
        },
        _update = function(a) {
            _jsChange.call(this), a ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
        },
        _track = function() {
            var a = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
                b = _t[_opts.tracker];
            typeof b == FUNCTION ? b(a) : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION ? _t.pageTracker._trackPageview(a) : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(a)
        },
        _htmlWrite = function() {
            var a = _frame.contentWindow.document;
            a.open(), a.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";</script></head></html>'), a.close()
        },
        _htmlLoad = function() {
            var a = _frame.contentWindow;
            a.location.href;
            _value = typeof a[ID] != UNDEFINED ? a[ID] : "", _value != _getHash() && (_update.call(FWDAddress, !1), _l.hash = _ieLocal(_value, TRUE))
        },
        _load = function() {
            if (!_loaded) {
                if (_loaded = TRUE, _msie && _version < 8) {
                    var a = _d.getElementsByTagName("frameset")[0];
                    _frame = _d.createElement((a ? "" : "i") + "frame"), a ? (a.insertAdjacentElement("beforeEnd", _frame), a[a.cols ? "cols" : "rows"] += ",0", _frame.src = "javascript:false", _frame.noResize = !0, _frame.frameBorder = _frame.frameSpacing = 0) : (_frame.src = "javascript:false", _frame.style.display = "none", _d.body.insertAdjacentElement("afterBegin", _frame)), _st(function() {
                        _events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
                    }, 50)
                } else _safari && (_version < 418 && (_d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>', _form = _d.getElementById(ID)), typeof _l[ID] == UNDEFINED && (_l[ID] = {}), typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(",")));
                _st(_functions.bind(function() {
                    _jsInit.call(this), _jsChange.call(this), _track.call(this)
                }, this), 1), _msie && _version >= 8 ? (_d.body.onhashchange = _functions.bind(_listen, this), _si(_functions.bind(_titleCheck, this), 50)) : _si(_functions.bind(_listen, this), 50)
            }
        },
        ID = "swfaddress",
        FUNCTION = "function",
        UNDEFINED = "undefined",
        TRUE = !0,
        FALSE = !1,
        _util = asual.util,
        _browser = _util.Browser,
        _events = _util.Events,
        _functions = _util.Functions,
        _version = _browser.getVersion(),
        _msie = _browser.isMSIE(),
        _mozilla = _browser.isMozilla(),
        _opera = _browser.isOpera(),
        _safari = _browser.isSafari(),
        _supported = FALSE,
        _t = _getWindow(),
        _d = _t.document,
        _h = _t.history,
        _l = _t.location,
        _si = setInterval,
        _st = setTimeout,
        _dc = decodeURI,
        _ec = encodeURI,
        _frame, _form, _url, _title = _d.title,
        _length = _h.length,
        _silent = FALSE,
        _loaded = FALSE,
        _justset = TRUE,
        _juststart = TRUE,
        _ref = this,
        _stack = [],
        _ids = [],
        _popup = [],
        _listeners = {},
        _value = _getHash(),
        _opts = {
            history: TRUE,
            strict: TRUE
        };
    if (_msie && _d.documentMode && _d.documentMode != _version && (_version = 8 != _d.documentMode ? 7 : 8), _supported = _mozilla && _version >= 1 || _msie && _version >= 6 || _opera && _version >= 9.5 || _safari && _version >= 312) {
        _opera && (history.navigationMode = "compatible");
        for (var i = 1; i < _length; i++) _stack.push("");
        _stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document);
        var _qi = _url ? _url.indexOf("?") : -1;
        if (_qi != -1)
            for (var param, params = _url.substr(_qi + 1).split("&"), i = 0, p; p = params[i]; i++) param = p.split("="), /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])), /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1]);
        _msie && _titleCheck.call(this), window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)), _events.addListener(_t, "load", _functions.bind(_load, this))
    } else !_supported && _l.href.indexOf("#") != -1 || _safari && _version < 418 && _l.href.indexOf("#") != -1 && "" != _l.search ? (_d.open(), _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>'), _d.close()) : _track();
    this.toString = function() {
            return "[class FWDAddress]"
        }, this.back = function() {
            _h.back()
        }, this.forward = function() {
            _h.forward()
        }, this.up = function() {
            var a = this.getPath();
            this.setValue(a.substr(0, a.lastIndexOf("/", a.length - 2) + ("/" == a.substr(a.length - 1) ? 1 : 0)))
        }, this.go = function(a) {
            _h.go(a)
        }, this.href = function(a, b) {
            b = typeof b != UNDEFINED ? b : "_self", "_self" == b ? self.location.href = a : "_top" == b ? _l.href = a : "_blank" == b ? window.open(a) : _t.frames[b].location.href = a
        }, this.popup = function(url, name, options, handler) {
            try {
                var popup = window.open(url, name, eval(options));
                typeof handler != UNDEFINED && eval(handler)
            } catch (a) {}
            _popup = arguments
        }, this.getIds = function() {
            return _ids
        }, this.getId = function(a) {
            return _ids[0]
        }, this.setId = function(a) {
            _ids[0] = a
        }, this.addId = function(a) {
            this.removeId(a), _ids.push(a)
        }, this.removeId = function(a) {
            for (var b = 0; b < _ids.length; b++)
                if (a == _ids[b]) {
                    _ids.splice(b, 1);
                    break
                }
        }, this.addEventListener = function(a, b) {
            typeof _listeners[a] == UNDEFINED && (_listeners[a] = []), _listeners[a].push(b)
        }, this.removeEventListener = function(a, b) {
            if (typeof _listeners[a] != UNDEFINED) {
                for (var d, c = 0;
                    (d = _listeners[a][c]) && d != b; c++);
                _listeners[a].splice(c, 1)
            }
        }, this.dispatchEvent = function(a) {
            if (this.hasEventListener(a.type)) {
                a.target = this;
                for (var c, b = 0; c = _listeners[a.type][b]; b++) c(a);
                return TRUE
            }
            return FALSE
        }, this.hasEventListener = function(a) {
            return typeof _listeners[a] != UNDEFINED && _listeners[a].length > 0
        }, this.getBaseURL = function() {
            var a = _l.href;
            return a.indexOf("#") != -1 && (a = a.substr(0, a.indexOf("#"))), "/" == a.substr(a.length - 1) && (a = a.substr(0, a.length - 1)), a
        }, this.getStrict = function() {
            return _opts.strict
        }, this.setStrict = function(a) {
            _opts.strict = a
        }, this.getHistory = function() {
            return _opts.history
        }, this.setHistory = function(a) {
            _opts.history = a
        }, this.getTracker = function() {
            return _opts.tracker
        }, this.setTracker = function(a) {
            _opts.tracker = a
        }, this.getTitle = function() {
            return _d.title
        }, this.setTitle = function(a) {
            return _supported ? void(typeof a != UNDEFINED && ("null" == a && (a = ""), a = _dc(a), _st(function() {
                _title = _d.title = a, _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && (_frame.contentWindow.document.title = a, _juststart = FALSE), !_justset && _mozilla && _l.replace(_l.href.indexOf("#") != -1 ? _l.href : _l.href + "#"), _justset = FALSE
            }, 10))) : null
        }, this.getStatus = function() {
            return _t.status
        }, this.setStatus = function(a) {
            if (!_supported) return null;
            if (typeof a != UNDEFINED && ("null" == a && (a = ""), a = _dc(a), !_safari)) {
                if (a = _strictCheck("null" != a ? a : "", TRUE), "/" == a && (a = ""), !/http(s)?:\/\//.test(a)) {
                    var b = _l.href.indexOf("#");
                    a = (b == -1 ? _l.href : _l.href.substr(0, b)) + "#" + a
                }
                _t.status = a
            }
        }, this.resetStatus = function() {
            _t.status = ""
        }, this.getValue = function() {
            return _supported ? _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE)) : null
        }, this.setValue = function(a) {
            if (!_supported) return null;
            if (typeof a != UNDEFINED && ("null" == a && (a = ""), a = _ec(_dc(_strictCheck(a, TRUE))), "/" == a && (a = ""), _value != a)) {
                if (_justset = TRUE, _value = a, _silent = TRUE, _update.call(FWDAddress, !0), _stack[_h.length] = _value, _safari)
                    if (_opts.history)
                        if (_l[ID][_l.pathname] = _stack.toString(), _length = _h.length + 1, _version < 418) "" == _l.search && (_form.action = "#" + _value, _form.submit());
                        else if (_version < 523 || "" == _value) {
                    var b = _d.createEvent("MouseEvents");
                    b.initEvent("click", TRUE, TRUE);
                    var c = _d.createElement("a");
                    c.href = "#" + _value, c.dispatchEvent(b)
                } else _l.hash = "#" + _value;
                else _l.replace("#" + _value);
                else _value != _getHash() && (_opts.history ? _l.hash = "#" + _dc(_ieLocal(_value, TRUE)) : _l.replace("#" + _dc(_value)));
                _msie && _version < 8 && _opts.history && _st(_htmlWrite, 50), _safari ? _st(function() {
                    _silent = FALSE
                }, 1) : _silent = FALSE
            }
        }, this.getPath = function() {
            var a = this.getValue();
            return a.indexOf("?") != -1 ? a.split("?")[0] : a.indexOf("#") != -1 ? a.split("#")[0] : a
        }, this.getPathNames = function() {
            var a = this.getPath(),
                b = a.split("/");
            return "/" != a.substr(0, 1) && 0 != a.length || b.splice(0, 1), "/" == a.substr(a.length - 1, 1) && b.splice(b.length - 1, 1), b
        }, this.getQueryString = function() {
            var a = this.getValue(),
                b = a.indexOf("?");
            if (b != -1 && b < a.length) return a.substr(b + 1)
        }, this.getParameter = function(a) {
            var b = this.getValue(),
                c = b.indexOf("?");
            if (c != -1) {
                b = b.substr(c + 1);
                for (var d, e = b.split("&"), f = e.length, g = []; f--;) d = e[f].split("="), d[0] == a && g.push(d[1]);
                if (0 != g.length) return 1 != g.length ? g : g[0]
            }
        }, this.getParameterNames = function() {
            var a = this.getValue(),
                b = a.indexOf("?"),
                c = [];
            if (b != -1 && (a = a.substr(b + 1), "" != a && a.indexOf("=") != -1))
                for (var d = a.split("&"), e = 0; e < d.length;) c.push(d[e].split("=")[0]), e++;
            return c
        }, this.onInit = null, this.onChange = null, this.onInternalChange = null, this.onExternalChange = null,
        function() {
            var a;
            if (typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
                var b = SWFObject.prototype.write;
                SWFObject.prototype.write = function() {
                    a = arguments, this.getAttribute("version").major < 8 && (this.addVariable("$swfaddress", FWDAddress.getValue()), ("string" == typeof a[0] ? document.getElementById(a[0]) : a[0]).so = this);
                    var c;
                    return (c = b.apply(this, a)) && _ref.addId(this.getAttribute("id")), c
                }
            }
            if (typeof swfobject != UNDEFINED) {
                var c = swfobject.registerObject;
                swfobject.registerObject = function() {
                    a = arguments, c.apply(this, a), _ref.addId(a[0])
                };
                var d = swfobject.createSWF;
                swfobject.createSWF = function() {
                    a = arguments;
                    var b = d.apply(this, a);
                    return b && _ref.addId(a[0].id), b
                };
                var e = swfobject.embedSWF;
                swfobject.embedSWF = function() {
                    a = arguments, typeof a[8] == UNDEFINED && (a[8] = {}), typeof a[8].id == UNDEFINED && (a[8].id = a[1]), e.apply(this, a), _ref.addId(a[8].id)
                }
            }
            if (typeof UFO != UNDEFINED) {
                var f = UFO.create;
                UFO.create = function() {
                    a = arguments, f.apply(this, a), _ref.addId(a[0].id)
                }
            }
            if (typeof AC_FL_RunContent != UNDEFINED) {
                var g = AC_FL_RunContent;
                AC_FL_RunContent = function() {
                    a = arguments, g.apply(this, a);
                    for (var b = 0, c = a.length; b < c; b++) "id" == a[b] && _ref.addId(a[b + 1])
                }
            }
        }()
};
! function(a) {
    var b = function(c, d) {
        var e = this;
        e.init = function() {
            a.RLAudioPlayer = this, e.instanceName_str = "RLAudioPlayer", this.data = d, this.stageContainer = c, this.listeners = {
                events_ar: []
            }, this.main_do = null, this.controller_do = null, this.audioScreen_do = null, this.flash_do = null, this.flashObject = null, this.backgroundColor_str = e.data.audioControllerBackgroundColor_str || "transparent", this.flashObjectMarkup_str = null, this.sourcePath_str, this.stageWidth = 0, this.stageHeight = 0, this.isAPIReady_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.hasLoadingSkinError_bl = !1, this.setupMainDo(), b.hasHTML5Audio ? (this.setupAudioScreen(e.data), this.setupController(), this.isAPIReady_bl = !0, this.dispatchEvent(b.READY)) : this.setupFlashScreen()
        }, e.setupMainDo = function() {
            e.main_do = new FWDRLR3DDisplayObject("div", "relative"), e.main_do.getStyle().msTouchAction = "none", e.main_do.setBackfaceVisibility(), e.main_do.setBkColor(e.backgroundColor_str), (!FWDRLR3DUtils.isMobile || FWDRLR3DUtils.isMobile && FWDRLR3DUtils.hasPointerEvent) && e.main_do.setSelectable(!1), e.stageContainer.appendChild(e.main_do.screen), setTimeout(e.resizeHandler, 300)
        }, e.resizeHandler = function() {
            e.stageWidth = e.stageContainer.offsetWidth, e.stageHeight = e.stageContainer.offsetHeight, e.main_do.setWidth(e.stageWidth), e.main_do.setHeight(e.stageHeight), e.controller_do && e.controller_do.resizeAndPosition()
        }, this.setupController = function() {
            FWDRLR3DEAPController.setPrototype(), e.controller_do = new FWDRLR3DEAPController(e.data, e), e.controller_do.addListener(FWDRLR3DEAPController.PLAY, e.controllerOnPlayHandler), e.controller_do.addListener(FWDRLR3DEAPController.PAUSE, e.controllerOnPauseHandler), e.controller_do.addListener(FWDRLR3DEAPController.START_TO_SCRUB, e.controllerStartToScrubbHandler), e.controller_do.addListener(FWDRLR3DEAPController.SCRUB, e.controllerScrubbHandler), e.controller_do.addListener(FWDRLR3DEAPController.STOP_TO_SCRUB, e.controllerStopToScrubbHandler), e.controller_do.addListener(FWDRLR3DEAPController.CHANGE_VOLUME, e.controllerChangeVolumeHandler), e.main_do.addChild(e.controller_do)
        }, this.controllerOnPlayHandler = function(a) {
            e.play()
        }, this.controllerOnPauseHandler = function(a) {
            b.hasHTML5Audio ? e.audioScreen_do.pause() : e.isFlashScreenReady_bl && e.flashObject.pauseAudio()
        }, this.controllerStartToScrubbHandler = function(a) {
            b.hasHTML5Audio ? e.audioScreen_do.startToScrub() : e.isFlashScreenReady_bl && (e.pause(), e.flashObject.startToScrub())
        }, this.controllerScrubbHandler = function(a) {
            b.hasHTML5Audio ? e.audioScreen_do.scrub(a.percent) : e.isFlashScreenReady_bl && e.flashObject.scrub(a.percent)
        }, this.controllerStopToScrubbHandler = function(a) {
            b.hasHTML5Audio ? e.audioScreen_do.stopToScrub() : e.isFlashScreenReady_bl && e.flashObject.stopToScrub()
        }, this.controllerChangeVolumeHandler = function(a) {
            b.hasHTML5Audio ? e.audioScreen_do.setVolume(a.percent) : e.isFlashScreenReady_bl && e.flashObject.setVolume(a.percent)
        }, this.setupAudioScreen = function(a) {
            FWDRLR3DEAPAudioScreen.setPrototype(), e.audioScreen_do = new FWDRLR3DEAPAudioScreen(e, e.data), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.START, e.audioScreenStartHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.ERROR, e.audioScreenErrorHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.SAFE_TO_SCRUBB, e.audioScreenSafeToScrubbHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.STOP, e.audioScreenStopHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.PLAY, e.audioScreenPlayHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.PAUSE, e.audioScreenPauseHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.UPDATE, e.audioScreenUpdateHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.UPDATE_TIME, e.audioScreenUpdateTimeHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.LOAD_PROGRESS, e.audioScreenLoadProgressHandler), e.audioScreen_do.addListener(FWDRLR3DEAPAudioScreen.PLAY_COMPLETE, e.audioScreenPlayCompleteHandler), e.main_do.addChild(e.audioScreen_do)
        }, this.audioScreenStartHandler = function() {
            e.dispatchEvent(b.START)
        }, this.audioScreenErrorHandler = function(c) {
            var d;
            e.hasLoadingSkinError_bl = !0, b.hasHTML5Audio ? (d = c.text, a.console && console.log(c)) : d = c, e.dispatchEvent(b.ERROR, {
                error: d
            })
        }, this.audioScreenSafeToScrubbHandler = function() {
            e.controller_do && e.controller_do.enableMainScrubber()
        }, this.audioScreenStopHandler = function(a) {
            e.controller_do && (e.controller_do.disableMainScrubber(), e.controller_do.showPlayButton()), e.dispatchEvent(b.STOP)
        }, this.audioScreenPlayHandler = function() {
            e.controller_do && e.controller_do.showPauseButton(), e.dispatchEvent(b.PLAY)
        }, this.audioScreenPauseHandler = function() {
            e.controller_do && e.controller_do.showPlayButton(), e.dispatchEvent(b.PAUSE)
        }, this.audioScreenUpdateHandler = function(a) {
            var c;
            b.hasHTML5Audio ? (c = a.percent, e.controller_do && e.controller_do.updateMainScrubber(c)) : (c = a, e.controller_do && e.controller_do.updateMainScrubber(c)), e.dispatchEvent(b.UPDATE, {
                percent: c
            })
        }, this.audioScreenUpdateTimeHandler = function(a) {
            var c;
            b.hasHTML5Audio ? (c = a.time, e.controller_do && e.controller_do.updateTime(c)) : (c = a, e.controller_do && e.controller_do.updateTime(c)), e.dispatchEvent(b.UPDATE_TIME, {
                time: c
            })
        }, this.audioScreenLoadProgressHandler = function(a) {
            b.hasHTML5Audio ? e.controller_do && e.controller_do.updatePreloaderBar(a.percent) : e.controller_do && e.controller_do.updatePreloaderBar(a)
        }, this.audioScreenPlayCompleteHandler = function() {
            e.dispatchEvent(b.PLAY_COMPLETE)
        }, this.setupFlashScreen = function() {
            if (!FWDRLR3DFlashTest.hasFlashPlayerVersion("9.0.18")) {
                var a = "Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>";
                return void e.dispatchEvent(b.ERROR, {
                    error: a
                })
            }
            e.flash_do = new FWDRLR3DDisplayObject("div"), e.flash_do.setBackfaceVisibility(), e.flash_do.setResizableSizeAfterParent(), e.main_do.addChild(e.flash_do), e.flashObjectMarkup_str = '<object id="' + e.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + e.data.audioFlashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + e.instanceName_str + "&volume=" + e.data.volume + "&loop=" + e.data.audioLoop_bl + '"/><object type="application/x-shockwave-flash" data="' + e.data.audioFlashPath_str + '" width="100%" height="100%"><param name="movie" value="' + e.data.audioFlashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + e.instanceName_str + "&volume=" + e.data.volume + "&loop=" + e.data.audioLoop_bl + '"/></object></object>', e.flash_do.screen.innerHTML = e.flashObjectMarkup_str, e.flashObject = e.flash_do.screen.firstChild, FWDRLR3DUtils.isIE || (e.flashObject = e.flashObject.getElementsByTagName("object")[0])
        }, this.flashScreenIsReady = function() {
            console && console.dir("flash  audio is ready " + e.instanceName_str), e.isFlashScreenReady_bl = !0, e.setupController(), e.isAPIReady_bl = !0, e.dispatchEvent(b.READY)
        }, this.flashScreenFail = function() {
            var a = "External interface error!";
            e.dispatchEvent(b.ERROR, {
                error: a
            })
        }, this.play = function() {
            e.isAPIReady_bl && (b.hasHTML5Audio ? e.audioScreen_do.play() : e.isFlashScreenReady_bl && e.flashObject.playAudio())
        }, this.pause = function() {
            e.isAPIReady_bl && (b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.pause() : e.isFlashScreenReady_bl && e.flashObject.pauseAudio())
        }, this.stop = function() {
            e.isAPIReady_bl && (e.hasLoadingSkinError_bl = !1, b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.stop() : e.isFlashScreenReady_bl && e.flashObject.stopAudio())
        }, this.startToScrub = function() {
            e.isAPIReady_bl && (b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.startToScrub() : e.isFlashScreenReady_bl && e.flashObject.startToScrub())
        }, this.stopToScrub = function() {
            e.isAPIReady_bl && (b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.stopToScrub() : e.isFlashScreenReady_bl && e.flashObject.stopToScrub())
        }, this.scrub = function(a) {
            e.isAPIReady_bl && (isNaN(a) || (a < 0 ? a = 0 : a > 1 && (a = 1), b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.scrub(a) : e.isFlashScreenReady_bl && e.flashObject.scrub(a)))
        }, this.stopToScrub = function(a) {
            e.isAPIReady_bl && (b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.stopToScrub() : e.isFlashScreenReady_bl && e.flashObject.stopToScrub())
        }, this.setSource = function(a) {
            e.isAPIReady_bl && (e.hasLoadingSkinError_bl = !1, e.sourcePath_str = a, b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.setSource(a) : e.isFlashScreenReady_bl && e.flashObject.setSource(a))
        }, this.getSourcePath = function() {
            if (e.isAPIReady_bl) return e.sourcePath_str
        }, this.setVolume = function(a) {
            e.isAPIReady_bl && (e.controller_do && e.controller_do.updateVolume(a), b.hasHTML5Audio ? e.audioScreen_do && e.audioScreen_do.setVolume(a) : e.isFlashScreenReady_bl && e.flashObject.setVolume(a))
        }, this.getIsAPIReady = function() {
            return e.isAPIReady_bl
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DEventDispatcher
    }, b.hasHTML5Audio = function() {
        var a = document.createElement("audio"),
            b = !1;
        return a.canPlayType && (b = Boolean("probably" == a.canPlayType("audio/mpeg") || "maybe" == a.canPlayType("audio/mpeg"))), !!self.isMobile_bl || b
    }(), b.getAudioFormats = function() {
        var a = document.createElement("audio");
        if (a.canPlayType) {
            var b = "",
                c = [];
            return "probably" != a.canPlayType("audio/mpeg") && "maybe" != a.canPlayType("audio/mpeg") || (b += ".mp3"), "probably" != a.canPlayType("audio/ogg") && "maybe" != a.canPlayType("audio/ogg") || (b += ".ogg"), "probably" != a.canPlayType("audio/mp4") && "maybe" != a.canPlayType("audio/mp4") || (b += ".webm"), c = b.split("."), c.shift(), a = null, c
        }
    }(), b.instaces_ar = [], b.START = "start", b.READY = "ready", b.STOP = "stop", b.PLAY = "play", b.PAUSE = "pause", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.ERROR = "error", b.PLAY_COMPLETE = "playComplete", a.FWDRLR3DEAP = b
}(window),
function(a) {
    var b = function(c, d) {
        var e = this,
            f = b.prototype;
        this.audio_el = null, this.sourcePath_str = d.sourcePath_str, this.prevSourcePath_str = "none", this.volume = d.volume, this.countShoutCastErrors = 0, this.maxCountShoutCastErrors = 5, this.testShoutCastId_to, e.preload_bl = !1, this.autoPlay_bl = d.autoPlay_bl, this.loop_bl = d.audioLoop_bl, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isSafeToBeControlled_bl = !1, this.isShoutcast_bl = !1, this.isStartEventDispatched_bl = !1, this.init = function() {
            e.setHeight(0)
        }, this.setupAudio = function() {
            null == e.audio_el && (e.audio_el = document.createElement("audio"), e.screen.appendChild(e.audio_el), e.audio_el.controls = !1, e.audio_el.preload = "auto", e.audio_el.volume = e.volume), e.audio_el.addEventListener("error", e.errorHandler), e.audio_el.addEventListener("canplay", e.safeToBeControlled), e.audio_el.addEventListener("canplaythrough", e.safeToBeControlled), e.audio_el.addEventListener("progress", e.updateProgress), e.audio_el.addEventListener("timeupdate", e.updateAudio), e.audio_el.addEventListener("pause", e.pauseHandler), e.audio_el.addEventListener("play", e.playHandler), e.audio_el.addEventListener("ended", e.endedHandler)
        }, this.destroyAudio = function() {
            e.audio_el && (e.audio_el.removeEventListener("error", e.errorHandler), e.audio_el.removeEventListener("canplay", e.safeToBeControlled), e.audio_el.removeEventListener("canplaythrough", e.safeToBeControlled), e.audio_el.removeEventListener("progress", e.updateProgress), e.audio_el.removeEventListener("timeupdate", e.updateAudio), e.audio_el.removeEventListener("pause", e.pauseHandler), e.audio_el.removeEventListener("play", e.playHandler), e.audio_el.removeEventListener("ended", e.endedHandler), e.audio_el.src = "", e.audio_el.load())
        }, this.errorHandler = function(c) {
            if (e.isShoutcast_bl && e.countShoutCastErrors <= e.maxCountShoutCastErrors && 0 == e.audio_el.networkState) return e.testShoutCastId_to = setTimeout(e.play, 200), void e.countShoutCastErrors++;
            var d;
            e.hasError_bl = !0, e.stop(), d = 0 == e.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 1 == e.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 2 == e.audio_el.networkState ? "'self.audio_el.networkState = 2'" : 3 == e.audio_el.networkState ? "Audio source not found <font color='#FF0000'>" + e.sourcePath_str + "</font>" : c, a.console && a.console.log(e.audio_el.networkState), e.dispatchEvent(b.ERROR, {
                text: d
            })
        }, this.setSource = function(a) {
            e.sourcePath_str = a;
            for (var b = e.sourcePath_str.split(","), d = FWDRLR3DEAP.getAudioFormats, f = 0; f < b.length; f++) {
                var g = b[f];
                b[f] = FWDRLR3DUtils.trim(g)
            }
            a: for (var h = 0; h < b.length; h++)
                for (var g = b[h], f = 0; f < d.length; f++) {
                    var i = d[f];
                    if (g.indexOf(i) != -1) {
                        e.sourcePath_str = g;
                        break a
                    }
                }
            clearTimeout(e.testShoutCastId_to), e.sourcePath_str.indexOf(";") != -1 && FWDRLR3DUtils.isChrome ? (e.isShoutcast_bl = !0, e.countShoutCastErrors = 0) : e.isShoutcast_bl = !1, c.sourcePath_str = e.sourcePath_str, e.audio_el && e.stop(!0)
        }, this.play = function(a) {
            if (e.isStopped_bl) e.isPlaying_bl = !1, e.hasError_bl = !1, e.allowScrubing_bl = !1, e.isStopped_bl = !1, e.setupAudio(), e.audio_el.src = e.sourcePath_str, e.play();
            else if (!e.audio_el.ended || a) try {
                e.isPlaying_bl = !0, e.hasPlayedOnce_bl = !0, e.audio_el.play(), FWDRLR3DUtils.isIE && e.dispatchEvent(b.PLAY)
            } catch (a) {}
        }, this.pause = function() {
            if (null != e && null != e.audio_el && !e.audio_el.ended) try {
                e.audio_el.pause(), e.isPlaying_bl = !1, FWDRLR3DUtils.isIE && e.dispatchEvent(b.PAUSE)
            } catch (a) {}
        }, this.pauseHandler = function() {
            e.allowScrubing_bl || e.dispatchEvent(b.PAUSE)
        }, this.playHandler = function() {
            e.allowScrubing_bl || (e.isStartEventDispatched_bl || (e.dispatchEvent(b.START), e.isStartEventDispatched_bl = !0), e.dispatchEvent(b.PLAY))
        }, this.endedHandler = function() {
            e.loop_bl ? (e.scrub(0), e.play()) : e.stop(), e.dispatchEvent(b.PLAY_COMPLETE)
        }, this.stop = function(a) {
            (null != e && null != e.audio_el && !e.isStopped_bl || a) && (e.isPlaying_bl = !1, e.isStopped_bl = !0, e.hasPlayedOnce_bl = !0, e.isSafeToBeControlled_bl = !1, e.isStartEventDispatched_bl = !1, clearTimeout(e.testShoutCastId_to), e.audio_el.pause(), e.destroyAudio(), e.dispatchEvent(b.STOP), e.dispatchEvent(b.UPDATE_TIME, {
                time: "00:00/00:00"
            }), e.dispatchEvent(b.LOAD_PROGRESS, {
                percent: 0
            }))
        }, this.safeToBeControlled = function() {
            e.isSafeToBeControlled_bl || (e.isPlaying_bl = !0, e.isSafeToBeControlled_bl = !0, e.dispatchEvent(b.SAFE_TO_SCRUBB), e.dispatchEvent(b.SAFE_TO_UPDATE_VOLUME))
        }, this.updateProgress = function() {
            var a, c = 0;
            e.audio_el.buffered.length > 0 && (a = e.audio_el.buffered.end(e.audio_el.buffered.length - 1), c = a.toFixed(1) / e.audio_el.duration.toFixed(1), !isNaN(c) && c || (c = 0)), 1 == c && e.audio_el.removeEventListener("progress", e.updateProgress), e.dispatchEvent(b.LOAD_PROGRESS, {
                percent: c
            })
        }, this.updateAudio = function() {
            var a;
            e.allowScrubing_bl || (a = e.audio_el.currentTime / e.audio_el.duration, e.dispatchEvent(b.UPDATE, {
                percent: a
            })), e.dispatchEvent(b.UPDATE_TIME, {
                time: e.formatTime(e.audio_el.currentTime) + "/" + e.formatTime(e.audio_el.duration)
            })
        }, this.formatTime = function(a) {
            return a = Math.round(a), minutes = Math.floor(a / 60), minutes = minutes >= 10 ? minutes : "0" + minutes, a = Math.floor(a % 60), a = a >= 10 ? a : "0" + a, isNaN(a) ? "00:00" : minutes + ":" + a
        }, this.startToScrub = function() {
            e.allowScrubing_bl = !0
        }, this.stopToScrub = function() {
            e.allowScrubing_bl = !1
        }, this.scrub = function(a, c) {
            if (null != e.audio_el && e.audio_el.duration) {
                c && e.startToScrub();
                try {
                    e.audio_el.currentTime = e.audio_el.duration * a, e.dispatchEvent(b.UPDATE_TIME, {
                        time: e.formatTime(e.audio_el.currentTime) + "/" + e.formatTime(e.audio_el.duration)
                    })
                } catch (a) {}
            }
        }, this.setVolume = function(a) {
            a && (e.volume = a), e.audio_el && (e.audio_el.volume = e.volume)
        }, this.destroy = function() {
            e.audio_el && e.audio_el.pause(), e.destroyAudio(), e.audio_el = null, c = null, e.setInnerHTML(""), e = null, f.destroy(), f = null, b.prototype = null
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.ERROR = "error", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.SAFE_TO_SCRUBB = "safeToControll", b.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", b.LOAD_PROGRESS = "loadProgress", b.START = "start", b.PLAY = "play", b.PAUSE = "pause", b.STOP = "stop", b.PLAY_COMPLETE = "playComplete", a.FWDRLR3DEAPAudioScreen = b
}(window),
function() {
    var a = function(b, c) {
        var d = this;
        a.prototype;
        this.bkPath_img = b.bkPath_img, this.playN_img = b.audioPlayN_img, this.pauseN_img = b.audioPauseN_img, this.audioMainScrubberBkLeft_img = b.audioMainScrubberBkLeft_img, this.mainScrubberBkRight_img = b.mainScrubberBkRight_img, this.mainScrubberDragLeft_img = b.mainScrubberDragLeft_img, this.mainScrubberLine_img = b.mainScrubberLine_img, this.volumeScrubberBkLeft_img = b.volumeScrubberBkLeft_img, this.volumeScrubberBkRight_img = b.volumeScrubberBkRight_img, this.volumeScrubberDragLeft_img = b.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = b.volumeScrubberLine_img, this.timeBk_img = b.timeBk_img, this.volumeN_img = b.volumeN_img, this.volumeS_img = b.volumeS_img, this.volumeD_img = b.volumeD_img, this.progressLeft_img = b.progressLeft_img, this.buttons_ar = [], this.disable_do = null, this.mainHolder_do = null, this.bk_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.bkMiddlePath_str = b.bkMiddlePath_str, this.mainScrubberBkMiddlePath_str = b.mainScrubberBkMiddlePath_str, this.volumeScrubberBkMiddlePath_str = b.volumeScrubberBkMiddlePath_str, this.mainScrubberDragMiddlePath_str = b.mainScrubberDragMiddlePath_str, this.volumeScrubberDragMiddlePath_str = b.volumeScrubberDragMiddlePath_str, this.timeColor_str = b.timeColor_str, this.progressMiddlePath_str = b.progressMiddlePath_str, this.audioControllerBackgroundColor_str = b.audioControllerBackgroundColor_str, this.stageWidth = 0, this.scrubbersBkLeftAndRightWidth = this.audioMainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 150, this.volumeScrubberWidth = b.volumeScrubberWidth, this.scrubbersHeight = this.audioMainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = d.mainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = b.scrubbersOffsetWidth, this.scrubbersOffestTotalWidth = b.audioScrubbersOffestTotalWidth, this.volume = b.volume, this.lastVolume = d.volume, this.startSpaceBetweenButtons = b.startSpaceBetweenButtons, this.spaceBetweenButtons = b.vdSpaceBetweenButtons, this.timeOffestTotalWidth = 0, this.percentPlayed = 0, this.timeOffestLeftWidth = b.timeOffsetLeftWidth, this.timeOffsetRightWidth = b.timeOffsetRightWidth, this.lastTimeLength = 0, this.showAnimationIntroId_to, this.allowToChangeVolume_bl = b.allowToChangeVolume_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.isMute_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, d.init = function() {
            d.mainHolder_do = new FWDRLR3DDisplayObject("div"), d.mainHolder_do.setOverflow("visible"), d.setBkColor(d.audioControllerBackgroundColor_str), d.addChild(d.mainHolder_do), d.setupPlayPauseButton(), d.setupMainScrubber(), d.setupTime(), d.setupVolumeButton(), d.setupVolumeScrubber(), d.isMobile_bl || d.setupDisable()
        }, d.resizeAndPosition = function(a) {
            (c.stageWidth != d.stageWidth || c.stageHeight != d.stageHeight || a) && (d.stageWidth = c.stageWidth, d.stageHeight = c.stageHeight, d.positionButtons())
        }, d.positionButtons = function() {
            var a, b;
            if (d.stageWidth) {
                d.bk_do && d.bk_do.setWidth(d.stageWidth), d.playPauseButton_do && (FWDR3DCarModTweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.setWidth(d.stageWidth), d.mainHolder_do.setHeight(d.stageHeight), d.setWidth(d.stageWidth), d.setHeight(d.stageHeight));
                for (var e = [], f = 0; f < d.buttons_ar.length; f++) e[f] = d.buttons_ar[f];
                d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons;
                for (var f = 0; f < e.length; f++) a = e[f], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.spaceBetweenButtons);
                for (; d.mainScrubberWidth < d.mainScrubberMinWidth && e.length > 3;) {
                    d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons, d.volumeScrubber_do && FWDRLR3DUtils.indexOfArray(e, d.volumeScrubber_do) != -1 ? (e.splice(FWDRLR3DUtils.indexOfArray(e, d.volumeScrubber_do), 1), d.volumeScrubber_do.setX(-1e3)) : d.time_do && FWDRLR3DUtils.indexOfArray(e, d.time_do) != -1 ? (e.splice(FWDRLR3DUtils.indexOfArray(e, d.time_do), 1), d.time_do.setX(-1e3)) : d.mainScrubber_do && FWDRLR3DUtils.indexOfArray(e, d.mainScrubber_do) != -1 ? (e.splice(FWDRLR3DUtils.indexOfArray(e, d.mainScrubber_do), 1), d.mainScrubber_do.setX(-1e3)) : d.volumeButton_do && FWDRLR3DUtils.indexOfArray(e, d.volumeButton_do) != -1 && (e.splice(FWDRLR3DUtils.indexOfArray(e, d.volumeButton_do), 1), d.volumeButton_do.setX(-1e3));
                    for (var f = 0; f < e.length; f++) a = e[f], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.spaceBetweenButtons)
                }
                e[e.length - 1] != d.volumeScrubber_do && e[e.length - 1] != d.mainScrubber_do || (d.mainScrubberWidth -= d.scrubbersOffestTotalWidth), e[e.length - 1] == d.time_do && (d.mainScrubberWidth -= d.timeOffestTotalWidth);
                for (var f = 0; f < e.length; f++) a = e[f], FWDR3DCarModTweenMax.killTweensOf(a), 0 == f ? a.setX(d.startSpaceBetweenButtons) : a == d.mainScrubber_do ? (b = e[f - 1], d.mainScrubber_do.setX(b.x + b.w + d.spaceBetweenButtons), d.mainScrubber_do.setWidth(d.mainScrubberWidth), d.mainScrubberBkMiddle_do.setWidth(d.mainScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.mainScrubberBkRight_do.setX(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.mainScrubberDragMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth)) : (b = e[f - 1], a.setX(b.x + b.w + d.spaceBetweenButtons)), a.setY(parseInt((d.stageHeight - a.h) / 2));
                d.disable_do && (d.disable_do.setWidth(d.stageWidth), d.disable_do.setHeight(d.stageHeight)), (!d.mainScrubber_do || d.mainScrubber_do && d.mainScrubber_do.x < 0) && a && (c.stageWidth = a.x + a.w + d.startSpaceBetweenButtons, d.stageWidth = c.stageWidth, c.resizeHandler(!0)), d.progressMiddle_do && d.progressMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.updateMainScrubber(d.percentPlayed)
            }
        }, this.setupDisable = function() {
            d.disable_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIE && (d.disable_do.setBkColor("#FFFFFF"), d.disable_do.setAlpha(0))
        }, this.setupMainScrubber = function() {
            d.mainScrubber_do = new FWDRLR3DDisplayObject("div"), d.mainScrubber_do.setHeight(d.scrubbersHeight), d.mainScrubberBkLeft_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBkLeft_do.setScreen(d.audioMainScrubberBkLeft_img), d.mainScrubberBkRight_do = new FWDRLR3DDisplayObject("img");
            var a = new Image;
            a.src = b.mainScrubberBkRightPath_str, d.mainScrubberBkRight_do.setScreen(a), d.mainScrubberBkRight_do.setWidth(d.mainScrubberBkLeft_do.w), d.mainScrubberBkRight_do.setHeight(d.mainScrubberBkLeft_do.h);
            var c = new Image;
            c.src = d.mainScrubberBkMiddlePath_str, d.isMobile_bl ? (d.mainScrubberBkMiddle_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberBkMiddle_do.getStyle().background = "url('" + d.mainScrubberBkMiddlePath_str + "') repeat-x") : (d.mainScrubberBkMiddle_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBkMiddle_do.setScreen(c)), d.mainScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.mainProgress_do = new FWDRLR3DDisplayObject("div"), d.mainProgress_do.setHeight(d.scrubbersHeight), d.progressLeft_do = new FWDRLR3DDisplayObject("img"), d.progressLeft_do.setScreen(d.progress), c = new Image, c.src = d.progressMiddlePath_str, d.progressMiddle_do = new FWDRLR3DDisplayObject("div"), d.progressMiddle_do.getStyle().background = "url('" + d.progressMiddlePath_str + "') repeat-x", d.progressMiddle_do.setHeight(d.scrubbersHeight), d.progressMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberDrag_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberDrag_do.setHeight(d.scrubbersHeight), d.mainScrubberDragLeft_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberDragLeft_do.setScreen(d.mainScrubberDragLeft_img), c = new Image, c.src = d.mainScrubberDragMiddlePath_str, d.isMobile_bl ? (d.mainScrubberDragMiddle_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberDragMiddle_do.getStyle().background = "url('" + d.mainScrubberDragMiddlePath_str + "') repeat-x") : (d.mainScrubberDragMiddle_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberDragMiddle_do.setScreen(c)), d.mainScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberBarLine_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBarLine_do.setScreen(d.mainScrubberLine_img), d.mainScrubberBarLine_do.setAlpha(0), d.mainScrubberBarLine_do.hasTransform3d_bl = !1, d.mainScrubberBarLine_do.hasTransform2d_bl = !1, d.buttons_ar.push(d.mainScrubber_do), d.mainScrubber_do.addChild(d.mainScrubberBkLeft_do), d.mainScrubber_do.addChild(d.mainScrubberBkMiddle_do), d.mainScrubber_do.addChild(d.mainScrubberBkRight_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragLeft_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragMiddle_do), d.mainProgress_do.addChild(d.progressLeft_do), d.mainProgress_do.addChild(d.progressMiddle_do), d.mainScrubber_do.addChild(d.mainProgress_do), d.mainScrubber_do.addChild(d.mainScrubberDrag_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainHolder_do.addChild(d.mainScrubber_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (d.mainScrubber_do.screen.addEventListener("pointerover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("pointerout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("pointerdown", d.mainScrubberOnDownHandler)) : d.mainScrubber_do.screen.addEventListener("touchstart", d.mainScrubberOnDownHandler) : d.screen.addEventListener ? (d.mainScrubber_do.screen.addEventListener("mouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("mouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("mousedown", d.mainScrubberOnDownHandler)) : d.screen.attachEvent && (d.mainScrubber_do.screen.attachEvent("onmouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.attachEvent("onmouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.attachEvent("onmousedown", d.mainScrubberOnDownHandler)), d.disableMainScrubber(), d.updateMainScrubber(0)
        }, this.mainScrubberOnOverHandler = function(a) {
            d.isMainScrubberDisabled_bl
        }, this.mainScrubberOnOutHandler = function(a) {
            d.isMainScrubberDisabled_bl
        }, this.mainScrubberOnDownHandler = function(b) {
            if (!d.isMainScrubberDisabled_bl) {
                b.preventDefault && b.preventDefault(), d.isMainScrubberScrubbing_bl = !0;
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b),
                    e = c.screenX - d.mainScrubber_do.getGlobalX();
                e < 0 ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
                var f = e / d.mainScrubberWidth;
                d.disable_do && d.addChild(d.disable_do), d.updateMainScrubber(f), d.dispatchEvent(a.START_TO_SCRUB), d.dispatchEvent(a.SCRUB, {
                    percent: f
                }), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("pointermove", d.mainScrubberMoveHandler), window.addEventListener("pointerup", d.mainScrubberEndHandler)) : (window.addEventListener("touchmove", d.mainScrubberMoveHandler), window.addEventListener("touchend", d.mainScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.mainScrubberMoveHandler), window.addEventListener("mouseup", d.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.mainScrubberMoveHandler), document.attachEvent("onmouseup", d.mainScrubberEndHandler))
            }
        }, this.mainScrubberMoveHandler = function(b) {
            b.preventDefault && b.preventDefault();
            var c = FWDRLR3DUtils.getViewportMouseCoordinates(b),
                e = c.screenX - d.mainScrubber_do.getGlobalX();
            e < 0 ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
            var f = e / d.mainScrubberWidth;
            d.updateMainScrubber(f), d.dispatchEvent(a.SCRUB, {
                percent: f
            })
        }, this.mainScrubberEndHandler = function(b) {
            d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.dispatchEvent(a.STOP_TO_SCRUB), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("pointermove", d.mainScrubberMoveHandler), window.removeEventListener("pointerup", d.mainScrubberEndHandler)) : (window.removeEventListener("touchmove", d.mainScrubberMoveHandler), window.removeEventListener("touchend", d.mainScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.mainScrubberMoveHandler), window.removeEventListener("mouseup", d.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.mainScrubberMoveHandler), document.detachEvent("onmouseup", d.mainScrubberEndHandler))
        }, this.disableMainScrubber = function() {
            d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !0, d.mainScrubber_do.setButtonMode(!1), d.mainScrubberEndHandler(), d.updateMainScrubber(0), d.updatePreloaderBar(0))
        }, this.enableMainScrubber = function() {
            d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !1, d.mainScrubber_do.setButtonMode(!0))
        }, this.updateMainScrubber = function(a) {
            if (d.mainScrubber_do && !isNaN(a)) {
                var b = parseInt(a * d.mainScrubberWidth);
                d.percentPlayed = a, !FWDRLR3DEAP.hasHTML5Audio && b >= d.mainProgress_do.w && (b = d.mainProgress_do.w), b < 1 && d.isMainScrubberLineVisible_bl ? (d.isMainScrubberLineVisible_bl = !1, FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : b > 1 && !d.isMainScrubberLineVisible_bl && (d.isMainScrubberLineVisible_bl = !0, FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), (isNaN(b) || b < 0) && (b = 0), d.mainScrubberDrag_do.setWidth(b), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = d.mainScrubberWidth - d.scrubbersOffsetWidth), FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .8, {
                    x: b + 1,
                    ease: Expo.easeOut
                })
            }
        }, this.updatePreloaderBar = function(a) {
            if (d.mainProgress_do && !isNaN(a)) {
                var b = parseInt(a * d.mainScrubberWidth);
                1 == a ? d.mainProgress_do.setY(-30) : 0 != d.mainProgress_do.y && 1 != a && d.mainProgress_do.setY(0), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = d.mainScrubberWidth - d.scrubbersOffsetWidth), (isNaN(b) || b < 0) && (b = 0), d.mainProgress_do.setWidth(b)
            }
        }, this.setupPlayPauseButton = function() {
            FWDRLR3DComplexButton.setPrototype(), d.playPauseButton_do = new FWDRLR3DComplexButton(d.playN_img, b.audioPlaySPath_str, d.pauseN_img, b.audioPauseSPath_str, !0), d.buttons_ar.push(d.playPauseButton_do), d.playPauseButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, d.playButtonMouseUpHandler), d.mainHolder_do.addChild(d.playPauseButton_do)
        }, this.showPlayButton = function() {
            d.playPauseButton_do && d.playPauseButton_do.setButtonState(1)
        }, this.showPauseButton = function() {
            d.playPauseButton_do && d.playPauseButton_do.setButtonState(0)
        }, this.playButtonMouseUpHandler = function() {
            0 == d.playPauseButton_do.currentState ? d.dispatchEvent(a.PAUSE) : d.dispatchEvent(a.PLAY)
        }, this.setupTime = function() {
            d.time_do = new FWDRLR3DDisplayObject("div"), d.time_do.hasTransform3d_bl = !1, d.time_do.hasTransform2d_bl = !1, d.time_do.setBackfaceVisibility(), d.time_do.getStyle().paddingLeft = d.timeOffestLeftWidth + "px",
                d.time_do.getStyle().paddingRight = d.timeOffsetRightWidth + "px", d.time_do.getStyle().fontFamily = "Arial", d.time_do.getStyle().fontSize = "12px", d.time_do.getStyle().whiteSpace = "nowrap", d.time_do.getStyle().textAlign = "center", d.time_do.getStyle().color = d.timeColor_str, d.time_do.getStyle().fontSmoothing = "antialiased", d.time_do.getStyle().webkitFontSmoothing = "antialiased", d.time_do.getStyle().textRendering = "optimizeLegibility", d.mainHolder_do.addChild(d.time_do), d.updateTime("00:00/00:00"), d.buttons_ar.push(d.time_do)
        }, this.updateTime = function(a) {
            d.time_do && (d.time_do.setInnerHTML(a), d.lastTimeLength != a.length && (d.time_do.w = d.time_do.getWidth(), d.positionButtons(), setTimeout(function() {
                d.time_do.w = d.time_do.getWidth(), d.time_do.h = d.time_do.getHeight(), d.positionButtons()
            }, 50), d.lastTimeLength = a.length))
        }, this.setupVolumeButton = function() {
            FWDRLR3DEVPVolumeButton.setPrototype(), d.volumeButton_do = new FWDRLR3DEVPVolumeButton(d.volumeN_img, b.volumeSPath_str, b.volumeDPath_str), d.volumeButton_do.addListener(FWDRLR3DEVPVolumeButton.MOUSE_UP, d.volumeOnMouseUpHandler), d.buttons_ar.push(d.volumeButton_do), d.mainHolder_do.addChild(d.volumeButton_do), d.allowToChangeVolume_bl || d.volumeButton_do.disable()
        }, this.volumeOnMouseUpHandler = function() {
            var a = d.lastVolume;
            d.isMute_bl ? (a = d.lastVolume, d.isMute_bl = !1) : (a = 1e-6, d.isMute_bl = !0), d.updateVolume(a)
        }, this.setupVolumeScrubber = function() {
            d.volumeScrubber_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubber_do.setHeight(d.scrubbersHeight), d.volumeScrubberBkLeft_do = new FWDRLR3DDisplayObject("img");
            var a = new Image;
            a.src = b.volumeScrubberBkLeftPath_str, d.volumeScrubberBkLeft_do.setScreen(a), d.volumeScrubberBkLeft_do.setWidth(d.audioMainScrubberBkLeft_img.width), d.volumeScrubberBkLeft_do.setHeight(d.audioMainScrubberBkLeft_img.height), d.volumeScrubberBkRight_do = new FWDRLR3DDisplayObject("img");
            var c = new Image;
            c.src = b.volumeScrubberBkRightPath_str, d.volumeScrubberBkRight_do.setScreen(c), d.volumeScrubberBkRight_do.setWidth(d.mainScrubberBkRight_img.width), d.volumeScrubberBkRight_do.setHeight(d.mainScrubberBkRight_img.height);
            var e = new Image;
            e.src = d.volumeScrubberBkMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberBkMiddle_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberBkMiddle_do.getStyle().background = "url('" + d.volumeScrubberBkMiddlePath_str + "') repeat-x") : (d.volumeScrubberBkMiddle_do = new FWDRLR3DDisplayObject("img"), d.volumeScrubberBkMiddle_do.setScreen(e)), d.volumeScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDrag_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberDrag_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragLeft_do = new FWDRLR3DDisplayObject("img");
            var f = new Image;
            f.src = b.volumeScrubberDragLeftPath_str, d.volumeScrubberDragLeft_do.setScreen(f), d.volumeScrubberDragLeft_do.setWidth(d.mainScrubberDragLeft_img.width), d.volumeScrubberDragLeft_do.setHeight(d.mainScrubberDragLeft_img.height), e = new Image, e.src = d.volumeScrubberDragMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberDragMiddle_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberDragMiddle_do.getStyle().background = "url('" + d.volumeScrubberDragMiddlePath_str + "') repeat-x") : (d.volumeScrubberDragMiddle_do = new FWDRLR3DDisplayObject("img"), d.volumeScrubberDragMiddle_do.setScreen(e)), d.volumeScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.volumeScrubberBarLine_do = new FWDRLR3DDisplayObject("img");
            var g = new Image;
            g.src = b.volumeScrubberLinePath_str, d.volumeScrubberBarLine_do.setScreen(g), d.volumeScrubberBarLine_do.setWidth(d.mainScrubberLine_img.width), d.volumeScrubberBarLine_do.setHeight(d.mainScrubberLine_img.height), d.volumeScrubberBarLine_do.setAlpha(0), d.volumeScrubberBarLine_do.hasTransform3d_bl = !1, d.volumeScrubberBarLine_do.hasTransform2d_bl = !1, d.volumeScrubber_do.setWidth(d.volumeScrubberWidth), d.volumeScrubberBkMiddle_do.setWidth(d.volumeScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.volumeScrubberBkRight_do.setX(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDragMiddle_do.setWidth(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.volumeScrubber_do.addChild(d.volumeScrubberBkLeft_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkRight_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragLeft_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberDrag_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.buttons_ar.push(d.volumeScrubber_do), d.mainHolder_do.addChild(d.volumeScrubber_do), d.allowToChangeVolume_bl && (d.isMobile_bl ? d.hasPointerEvent_bl ? (d.volumeScrubber_do.screen.addEventListener("pointerover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("pointerout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("pointerdown", d.volumeScrubberOnDownHandler)) : d.volumeScrubber_do.screen.addEventListener("touchstart", d.volumeScrubberOnDownHandler) : d.screen.addEventListener ? (d.volumeScrubber_do.screen.addEventListener("mouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("mouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("mousedown", d.volumeScrubberOnDownHandler)) : d.screen.attachEvent && (d.volumeScrubber_do.screen.attachEvent("onmouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.attachEvent("onmouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.attachEvent("onmousedown", d.volumeScrubberOnDownHandler))), d.enableVolumeScrubber(), d.updateVolumeScrubber(d.volume)
        }, this.volumeScrubberOnOverHandler = function(a) {
            d.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnOutHandler = function(a) {
            d.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnDownHandler = function(a) {
            if (!d.isVolumeScrubberDisabled_bl) {
                a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    c = b.screenX - d.volumeScrubber_do.getGlobalX();
                c < 0 ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                var e = c / d.volumeScrubberWidth;
                d.disable_do && d.addChild(d.disable_do), d.lastVolume = e, d.updateVolume(e), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("pointermove", d.volumeScrubberMoveHandler), window.addEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", d.volumeScrubberMoveHandler), window.addEventListener("touchend", d.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.volumeScrubberMoveHandler), window.addEventListener("mouseup", d.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.volumeScrubberMoveHandler), document.attachEvent("onmouseup", d.volumeScrubberEndHandler))
            }
        }, this.volumeScrubberMoveHandler = function(a) {
            if (!d.isVolumeScrubberDisabled_bl) {
                a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    c = b.screenX - d.volumeScrubber_do.getGlobalX();
                c < 0 ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                var e = c / d.volumeScrubberWidth;
                d.lastVolume = e, d.updateVolume(e)
            }
        }, this.volumeScrubberEndHandler = function() {
            d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("pointermove", d.volumeScrubberMoveHandler), window.removeEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", d.volumeScrubberMoveHandler), window.removeEventListener("touchend", d.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.volumeScrubberMoveHandler), window.removeEventListener("mouseup", d.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.volumeScrubberMoveHandler), document.detachEvent("onmouseup", d.volumeScrubberEndHandler))
        }, this.disableVolumeScrubber = function() {
            d.isVolumeScrubberDisabled_bl = !0, d.volumeScrubber_do.setButtonMode(!1), d.volumeScrubberEndHandler()
        }, this.enableVolumeScrubber = function() {
            d.isVolumeScrubberDisabled_bl = !1, d.volumeScrubber_do.setButtonMode(!0)
        }, this.updateVolumeScrubber = function(a) {
            var b = parseInt(a * d.volumeScrubberWidth);
            d.volumeScrubberDrag_do.setWidth(b), b < 1 && d.isVolumeScrubberLineVisible_bl ? (d.isVolumeScrubberLineVisible_bl = !1, FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                alpha: 0
            })) : b > 1 && !d.isVolumeScrubberLineVisible_bl && (d.isVolumeScrubberLineVisible_bl = !0, FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                alpha: 1
            })), b > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (b = d.volumeScrubberWidth - d.scrubbersOffsetWidth), FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .8, {
                x: b + 1,
                ease: Expo.easeOut
            })
        }, this.updateVolume = function(b) {
            d.volume = b, d.volume <= 1e-6 ? (d.isMute_bl = !0, d.volume = 1e-6) : d.voume >= 1 ? (d.isMute_bl = !1, d.volume = 1) : d.isMute_bl = !1, 1e-6 == d.volume ? d.volumeButton_do && d.volumeButton_do.setDisabledState() : d.volumeButton_do && d.volumeButton_do.setEnabledState(), d.volumeScrubberBarLine_do && d.updateVolumeScrubber(d.volume), d.dispatchEvent(a.CHANGE_VOLUME, {
                percent: d.volume
            })
        }, this.cleanMainEvents = function() {}, this.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDRLR3DDisplayObject("div")
    }, a.PLAY = "play", a.PAUSE = "pause", a.START_TO_SCRUB = "startToScrub", a.SCRUB = "scrub", a.STOP_TO_SCRUB = "stopToScrub", a.CHANGE_VOLUME = "changeVolume", a.prototype = null, window.FWDRLR3DEAPController = a
}(),
function() {
    var a = function() {
        this.listeners = {
            events_ar: []
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, this.destroy = function() {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    };
    window.FWDRLR3DEventDispatcher = a
}(window),
function() {
    var a = function(b, c) {
        var d = this;
        a.prototype;
        this.bkLeft_img = b.bkLeft_img, this.bkRight_img = b.bkRight_img, this.videoPlayN_img = b.videoPlayN_img, this.playS_img = b.playS_img, this.videoPauseN_img = b.videoPauseN_img, this.pauseS_img = b.pauseS_img, this.videoMainScrubberBkLeft_img = b.videoMainScrubberBkLeft_img, this.videoMainScrubberDragLeft_img = b.videoMainScrubberDragLeft_img, this.videoMainScrubberLine_img = b.videoMainScrubberLine_img, this.volumeScrubberBkLeft_img = b.volumeScrubberBkLeft_img, this.volumeScrubberDragLeft_img = b.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = b.volumeScrubberLine_img, this.videoProgressLeft_img = b.videoProgressLeft_img, this.videoVolumeN_img = b.videoVolumeN_img, this.volumeS_img = b.volumeS_img, this.volumeD_img = b.volumeD_img, this.videoFullScreenN_img = b.videoFullScreenN_img, this.videoNormalScreenN_img = b.videoNormalScreenN_img, this.buttons_ar = [], this.pointer_do, this.disable_do = null, this.mainHolder_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.fullScreenButton_do = null, this.bk_do = null, this.isMainScrubberOnTop_bl = !0, this.videoControllerBackgroundColor_str = b.videoControllerBackgroundColor_str, this.videoBkMiddlePath_str = b.videoBkMiddlePath_str, this.videoMainScrubberBkMiddlePath_str = b.videoMainScrubberBkMiddlePath_str, this.videoVolumeScrubberBkMiddlePath_str = b.videoVolumeScrubberBkMiddlePath_str, this.videoMainScrubberDragMiddlePath_str = b.videoMainScrubberDragMiddlePath_str, this.videoVolumeScrubberDragMiddlePath_str = b.videoVolumeScrubberDragMiddlePath_str, this.timeColor_str = b.timeColor_str, this.videoProgressMiddlePath_str = b.videoProgressMiddlePath_str, this.mainScrubberOffestTop = b.mainScrubberOffestTop, this.stageWidth = 0, this.stageHeight = b.controllerHeight, this.scrubbersBkLeftAndRightWidth = this.videoMainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 100, this.volumeScrubberWidth = b.volumeScrubberWidth, this.scrubbersHeight = this.videoMainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = d.videoMainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = b.scrubbersOffsetWidth, this.volumeScrubberOffsetRightWidth = b.volumeScrubberOffsetRightWidth, this.volume = b.volume, this.lastVolume = d.volume, this.startSpaceBetweenButtons = b.startSpaceBetweenButtons, this.vdSpaceBetweenButtons = b.vdSpaceBetweenButtons, this.percentPlayed = 0, this.percentLoaded = 0, this.lastTimeLength = 0, this.pointerWidth = 8, this.pointerHeight = 5, this.timeOffsetLeftWidth = b.timeOffsetLeftWidth, this.timeOffsetRightWidth = b.timeOffsetRightWidth, this.videoShowFullScreenButton_bl = b.videoShowFullScreenButton_bl, this.showVolumeScrubber_bl = b.showVolumeScrubber_bl, this.allowToChangeVolume_bl = b.allowToChangeVolume_bl, this.showTime_bl = b.showTime_bl, this.showVolumeButton_bl = b.showVolumeButton_bl, this.showControllerWhenVideoIsStopped_bl = b.showControllerWhenVideoIsStopped_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.isMute_bl = !1, this.isShowed_bl = !0, this.repeatBackground_bl = b.repeatBackground_bl, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, d.init = function() {
            d.setOverflow("visible"), d.mainHolder_do = new FWDRLR3DDisplayObject("div"), d.mainHolder_do.getStyle().backgroundColor = d.videoControllerBackgroundColor_str, d.mainHolder_do.setOverflow("visible"), d.addChild(d.mainHolder_do), d.setupPlayPauseButton(), d.setupMainScrubber(), d.showTime_bl && d.setupTime(), d.showVolumeButton_bl && d.setupVolumeButton(), d.showVolumeScrubber_bl && d.setupVolumeScrubber(), d.videoShowFullScreenButton_bl && d.setupFullscreenButton(), d.isMobile_bl || d.setupDisable(), d.hide(!1, !0), d.showControllerWhenVideoIsStopped_bl && d.show(!0)
        }, d.resizeAndPosition = function() {
            d.stageWidth = c.stageWidth, d.positionButtons(), d.setY(c.stageHeight - d.stageHeight)
        }, d.positionButtons = function() {
            if (d.stageWidth) {
                var a, b, c = d.showTime_bl,
                    e = d.volumeScrubber_do;
                d.mainHolder_do.setWidth(d.stageWidth), d.mainHolder_do.setHeight(d.stageHeight), d.setWidth(d.stageWidth), d.setHeight(d.stageHeight);
                for (var f = [], g = 0; g < d.buttons_ar.length; g++) f[g] = d.buttons_ar[g];
                d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons;
                for (var g = 0; g < f.length; g++) a = f[g], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.vdSpaceBetweenButtons);
                for (var h = 3; d.mainScrubberWidth < d.mainScrubberMinWidth && f.length > h;) {
                    d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons, d.volumeScrubber_do && FWDRLR3DUtils.indexOfArray(f, d.volumeScrubber_do) != -1 ? (f.splice(FWDRLR3DUtils.indexOfArray(f, d.volumeScrubber_do), 1), d.volumeScrubber_do.setX(-1e3)) : d.time_do && FWDRLR3DUtils.indexOfArray(f, d.time_do) != -1 ? (f.splice(FWDRLR3DUtils.indexOfArray(f, d.time_do), 1), d.time_do.setX(-1e3), c = !1) : d.volumeButton_do && FWDRLR3DUtils.indexOfArray(f, d.volumeButton_do) != -1 ? (f.splice(FWDRLR3DUtils.indexOfArray(f, d.volumeButton_do), 1), d.volumeButton_do.setX(-1e3)) : d.volumeScrubber_do && FWDRLR3DUtils.indexOfArray(f, d.volumeScrubber_do) != -1 && (f.splice(FWDRLR3DUtils.indexOfArray(f, d.volumeScrubber_do), 1), d.volumeScrubber_do.setX(-1e3), e = !1);
                    for (var g = 0; g < f.length; g++) a = f[g], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.vdSpaceBetweenButtons)
                }
                c && (d.mainScrubberWidth -= 2 * d.timeOffsetLeftWidth), e && (d.mainScrubberWidth -= d.volumeScrubberOffsetRightWidth);
                for (var g = 0; g < f.length; g++) a = f[g], 0 == g ? a.setX(d.startSpaceBetweenButtons) : a == d.mainScrubber_do ? (b = f[g - 1], FWDR3DCarModTweenMax.killTweensOf(d.mainScrubber_do), d.mainScrubber_do.setX(b.x + b.w + d.vdSpaceBetweenButtons), d.mainScrubber_do.setY(parseInt((d.stageHeight - d.scrubbersHeight) / 2)), d.mainScrubber_do.setWidth(d.mainScrubberWidth), d.mainScrubberBkMiddle_do.setWidth(d.mainScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.mainScrubberBkRight_do.setX(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.mainScrubberDragMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth)) : a == d.time_do ? (b = f[g - 1], a.setX(b.x + b.w + d.vdSpaceBetweenButtons + d.timeOffsetLeftWidth)) : a == d.volumeButton_do && c ? (b = f[g - 1], a.setX(b.x + b.w + d.vdSpaceBetweenButtons + d.timeOffsetRightWidth)) : (b = f[g - 1], e && b == d.volumeScrubber_do ? a.setX(b.x + b.w + d.vdSpaceBetweenButtons + d.volumeScrubberOffsetRightWidth) : a.setX(b.x + b.w + d.vdSpaceBetweenButtons));
                d.disable_do && (d.disable_do.setWidth(d.stageWidth), d.disable_do.setHeight(d.stageHeight)), d.bk_do && (d.bk_do.setWidth(d.stageWidth), d.bk_do.setHeight(d.stageHeight)), d.isShowed_bl ? d.isMainScrubberOnTop_bl = !1 : (d.isMainScrubberOnTop_bl = !0, d.positionScrollBarOnTopOfTheController()), d.progressMiddle_do && d.progressMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.updateMainScrubber(d.percentPlayed), d.updatePreloaderBar(d.percentLoaded)
            }
        }, this.positionScrollBarOnTopOfTheController = function() {
            d.mainScrubberWidth = d.stageWidth, d.updatePreloaderBar(d.percentLoaded), d.mainScrubber_do.setWidth(d.mainScrubberWidth), d.mainScrubberBkMiddle_do.setWidth(d.mainScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.mainScrubberBkRight_do.setX(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.mainScrubberDragMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), FWDR3DCarModTweenMax.killTweensOf(d.mainScrubber_do), d.mainScrubber_do.setX(0), d.isMainScrubberOnTop_bl || d.isShowed_bl ? d.mainScrubber_do.setY(-d.mainScrubberOffestTop) : d.mainScrubber_do.y != -d.mainScrubberOffestTop && (d.mainScrubber_do.setY(d.mainScrubber_do.h), FWDR3DCarModTweenMax.to(d.mainScrubber_do, .8, {
                y: -d.mainScrubberOffestTop,
                ease: Expo.easeOut
            })), d.isMainScrubberOnTop_bl = !0
        }, this.setupDisable = function() {
            d.disable_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIE && (d.disable_do.setBkColor("#FFFFFF"), d.disable_do.setAlpha(0))
        }, this.setupMainScrubber = function() {
            d.mainScrubber_do = new FWDRLR3DDisplayObject("div"), d.mainScrubber_do.setHeight(d.scrubbersHeight), d.mainScrubberBkLeft_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBkLeft_do.setScreen(d.videoMainScrubberBkLeft_img);
            var a = new Image;
            a.src = b.videoMainScrubberBkRightPath_str, d.mainScrubberBkRight_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBkRight_do.setScreen(a), d.mainScrubberBkRight_do.setWidth(d.mainScrubberBkLeft_do.w), d.mainScrubberBkRight_do.setHeight(d.mainScrubberBkLeft_do.h);
            var c = new Image;
            c.src = d.videoMainScrubberBkMiddlePath_str, d.isMobile_bl ? (d.mainScrubberBkMiddle_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberBkMiddle_do.getStyle().background = "url('" + d.videoMainScrubberBkMiddlePath_str + "') repeat-x") : (d.mainScrubberBkMiddle_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBkMiddle_do.setScreen(c)), d.mainScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.mainProgress_do = new FWDRLR3DDisplayObject("div"), d.mainProgress_do.setHeight(d.scrubbersHeight), d.progressLeft_do = new FWDRLR3DDisplayObject("img"), d.progressLeft_do.setScreen(d.videoProgressLeft_img), c = new Image, c.src = d.videoProgressMiddlePath_str, d.progressMiddle_do = new FWDRLR3DDisplayObject("div"), d.progressMiddle_do.getStyle().background = "url('" + d.videoProgressMiddlePath_str + "') repeat-x", d.progressMiddle_do.setHeight(d.scrubbersHeight), d.progressMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberDrag_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberDrag_do.setHeight(d.scrubbersHeight), d.mainScrubberDragLeft_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberDragLeft_do.setScreen(d.videoMainScrubberDragLeft_img), c = new Image, c.src = d.videoMainScrubberDragMiddlePath_str, d.isMobile_bl ? (d.mainScrubberDragMiddle_do = new FWDRLR3DDisplayObject("div"), d.mainScrubberDragMiddle_do.getStyle().background = "url('" + d.videoMainScrubberDragMiddlePath_str + "') repeat-x") : (d.mainScrubberDragMiddle_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberDragMiddle_do.setScreen(c)), d.mainScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberBarLine_do = new FWDRLR3DDisplayObject("img"), d.mainScrubberBarLine_do.setScreen(d.videoMainScrubberLine_img), d.mainScrubberBarLine_do.setAlpha(0), d.mainScrubberBarLine_do.hasTransform3d_bl = !1, d.mainScrubberBarLine_do.hasTransform2d_bl = !1, d.buttons_ar.push(d.mainScrubber_do), d.mainScrubber_do.addChild(d.mainScrubberBkLeft_do), d.mainScrubber_do.addChild(d.mainScrubberBkMiddle_do), d.mainScrubber_do.addChild(d.mainScrubberBkRight_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragLeft_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragMiddle_do), d.mainProgress_do.addChild(d.progressLeft_do), d.mainProgress_do.addChild(d.progressMiddle_do), d.mainScrubber_do.addChild(d.mainProgress_do), d.mainScrubber_do.addChild(d.mainScrubberDrag_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainHolder_do.addChild(d.mainScrubber_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (d.mainScrubber_do.screen.addEventListener("pointerover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("pointerout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("pointerdown", d.mainScrubberOnDownHandler)) : d.mainScrubber_do.screen.addEventListener("touchstart", d.mainScrubberOnDownHandler) : d.screen.addEventListener ? (d.mainScrubber_do.screen.addEventListener("mouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("mouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("mousedown", d.mainScrubberOnDownHandler)) : d.screen.attachEvent && (d.mainScrubber_do.screen.attachEvent("onmouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.attachEvent("onmouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.attachEvent("onmousedown", d.mainScrubberOnDownHandler)), d.disableMainScrubber(), d.updateMainScrubber(0)
        }, this.mainScrubberOnOverHandler = function(a) {
            d.isMainScrubberDisabled_bl
        }, this.mainScrubberOnOutHandler = function(a) {
            d.isMainScrubberDisabled_bl
        }, this.mainScrubberOnDownHandler = function(b) {
            if (!d.isMainScrubberDisabled_bl && 2 != b.button) {
                b.preventDefault && b.preventDefault(), d.isMainScrubberScrubbing_bl = !0;
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b),
                    e = c.screenX - d.mainScrubber_do.getGlobalX();
                e < 0 ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
                var f = e / d.mainScrubberWidth;
                d.disable_do && d.addChild(d.disable_do), d.updateMainScrubber(f), d.dispatchEvent(a.START_TO_SCRUB), d.dispatchEvent(a.SCRUB, {
                    percent: f
                }), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("pointermove", d.mainScrubberMoveHandler), window.addEventListener("pointerup", d.mainScrubberEndHandler)) : (window.addEventListener("touchmove", d.mainScrubberMoveHandler), window.addEventListener("touchend", d.mainScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.mainScrubberMoveHandler), window.addEventListener("mouseup", d.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.mainScrubberMoveHandler), document.attachEvent("onmouseup", d.mainScrubberEndHandler))
            }
        }, this.mainScrubberMoveHandler = function(b) {
            b.preventDefault && b.preventDefault();
            var c = FWDRLR3DUtils.getViewportMouseCoordinates(b),
                e = c.screenX - d.mainScrubber_do.getGlobalX();
            e < 0 ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
            var f = e / d.mainScrubberWidth;
            d.updateMainScrubber(f), d.dispatchEvent(a.SCRUB, {
                percent: f
            })
        }, this.mainScrubberEndHandler = function(b) {
            d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.dispatchEvent(a.STOP_TO_SCRUB), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("pointermove", d.mainScrubberMoveHandler), window.removeEventListener("pointerup", d.mainScrubberEndHandler)) : (window.removeEventListener("touchmove", d.mainScrubberMoveHandler), window.removeEventListener("touchend", d.mainScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.mainScrubberMoveHandler), window.removeEventListener("mouseup", d.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.mainScrubberMoveHandler), document.detachEvent("onmouseup", d.mainScrubberEndHandler))
        }, this.disableMainScrubber = function() {
            d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !0, d.mainScrubber_do.setButtonMode(!1), d.mainScrubberEndHandler(), d.updateMainScrubber(0), d.updatePreloaderBar(0))
        }, this.enableMainScrubber = function() {
            d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !1, d.mainScrubber_do.setButtonMode(!0))
        }, this.updateMainScrubber = function(a) {
            if (d.mainScrubber_do) {
                var b = parseInt(a * d.mainScrubberWidth);
                isNaN(b) || (d.percentPlayed = a, !FWDRLR3DEVPlayer.hasHTML5Video && b >= d.mainProgress_do.w && (b = d.mainProgress_do.w), b < 1 && d.isMainScrubberLineVisible_bl ? (d.isMainScrubberLineVisible_bl = !1, FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : b > 1 && !d.isMainScrubberLineVisible_bl && (d.isMainScrubberLineVisible_bl = !0, FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), d.mainScrubberDrag_do.setWidth(b), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = d.mainScrubberWidth - d.scrubbersOffsetWidth), FWDR3DCarModTweenMax.to(d.mainScrubberBarLine_do, .8, {
                    x: b + 1,
                    ease: Expo.easeOut
                }))
            }
        }, this.updatePreloaderBar = function(a) {
            if (d.mainProgress_do) {
                d.percentLoaded = a;
                var b = parseInt(Math.max(0, d.percentLoaded * d.mainScrubberWidth));
                d.percentLoaded >= .98 ? d.mainProgress_do.setY(-30) : 0 != d.mainProgress_do.y && 1 != d.percentLoaded && d.mainProgress_do.setY(0), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = Math.max(0, d.mainScrubberWidth - d.scrubbersOffsetWidth)), b < 0 && (b = 0), d.mainProgress_do.setWidth(b)
            }
        }, this.setupPlayPauseButton = function() {
            FWDRLR3DComplexButton.setPrototype(), d.playPauseButton_do = new FWDRLR3DComplexButton(d.videoPlayN_img, b.videoPlaySPath_str, d.videoPauseN_img, b.videoPauseSPath_str, !0), d.buttons_ar.push(d.playPauseButton_do), d.playPauseButton_do.setY(parseInt((d.stageHeight - d.playPauseButton_do.buttonHeight) / 2)), d.playPauseButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, d.playButtonMouseUpHandler), d.mainHolder_do.addChild(d.playPauseButton_do)
        }, this.showPlayButton = function() {
            d.playPauseButton_do && d.playPauseButton_do.setButtonState(1)
        }, this.showPauseButton = function() {
            d.playPauseButton_do && d.playPauseButton_do.setButtonState(0)
        }, this.playButtonMouseUpHandler = function() {
            0 == d.playPauseButton_do.currentState ? d.dispatchEvent(a.PAUSE) : d.dispatchEvent(a.PLAY)
        }, this.setupFullscreenButton = function() {
            FWDRLR3DComplexButton.setPrototype(), d.fullScreenButton_do = new FWDRLR3DComplexButton(d.videoFullScreenN_img, b.videoFullScreenSPath_str, d.videoNormalScreenN_img, b.videoNormalScreenSPath_str, !0), d.buttons_ar.push(d.fullScreenButton_do), d.fullScreenButton_do.setY(parseInt((d.stageHeight - d.fullScreenButton_do.buttonHeight) / 2)), d.fullScreenButton_do.addListener(FWDRLR3DComplexButton.MOUSE_UP, d.fullScreenButtonMouseUpHandler), d.mainHolder_do.addChild(d.fullScreenButton_do)
        }, this.showFullScreenButton = function() {
            d.fullScreenButton_do && d.fullScreenButton_do.setButtonState(1)
        }, this.showNormalScreenButton = function() {
            d.fullScreenButton_do && d.fullScreenButton_do.setButtonState(0)
        }, this.setNormalStateToFullScreenButton = function() {
            d.fullScreenButton_do && d.fullScreenButton_do.setNormalState()
        }, this.fullScreenButtonMouseUpHandler = function() {
            1 == d.fullScreenButton_do.currentState ? d.dispatchEvent(a.FULL_SCREEN) : d.dispatchEvent(a.NORMAL_SCREEN)
        }, this.setupTime = function() {
            d.time_do = new FWDRLR3DDisplayObject("div"), d.time_do.hasTransform3d_bl = !1, d.time_do.hasTransform2d_bl = !1, d.time_do.setBackfaceVisibility(), d.time_do.getStyle().fontFamily = "Arial", d.time_do.getStyle().fontSize = "12px", d.time_do.getStyle().whiteSpace = "nowrap", d.time_do.getStyle().textAlign = "center", d.time_do.getStyle().color = d.timeColor_str, d.time_do.getStyle().fontSmoothing = "antialiased", d.time_do.getStyle().webkitFontSmoothing = "antialiased", d.time_do.getStyle().textRendering = "optimizeLegibility", d.mainHolder_do.addChild(d.time_do), d.updateTime("00:00/00:00"), d.buttons_ar.push(d.time_do)
        }, this.updateTime = function(a) {
            d.time_do && (d.time_do.setInnerHTML(a), d.lastTimeLength != a.length && (d.time_do.w = d.time_do.getWidth(), d.positionButtons(), setTimeout(function() {
                d.time_do.w = d.time_do.getWidth(), d.time_do.h = d.time_do.getHeight(), d.time_do.setY(parseInt((d.stageHeight - d.time_do.h) / 2) + 1), d.positionButtons()
            }, 50), d.lastTimeLength = a.length))
        }, this.setupVolumeButton = function() {
            FWDRLR3DEVPVolumeButton.setPrototype(), d.volumeButton_do = new FWDRLR3DEVPVolumeButton(d.videoVolumeN_img, b.videoVolumeSPath_str, b.videoVolumeDPath_str), d.volumeButton_do.addListener(FWDRLR3DEVPVolumeButton.MOUSE_UP, d.volumeOnMouseUpHandler), d.volumeButton_do.setY(parseInt((d.stageHeight - d.volumeButton_do.h) / 2)), d.buttons_ar.push(d.volumeButton_do), d.mainHolder_do.addChild(d.volumeButton_do), d.allowToChangeVolume_bl || d.volumeButton_do.disable()
        }, this.volumeOnMouseUpHandler = function() {
            var a = d.lastVolume;
            d.isMute_bl ? (a = d.lastVolume, d.isMute_bl = !1) : (a = 1e-6, d.isMute_bl = !0), d.updateVolume(a)
        }, this.setupVolumeScrubber = function() {
            d.volumeScrubber_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubber_do.setHeight(d.scrubbersHeight), d.volumeScrubber_do.setY(parseInt((d.stageHeight - d.scrubbersHeight) / 2)), d.volumeScrubberBkLeft_do = new FWDRLR3DDisplayObject("img");
            var a = new Image;
            a.src = d.mainScrubberBkLeft_do.screen.src, d.volumeScrubberBkLeft_do.setScreen(a), d.volumeScrubberBkLeft_do.setWidth(d.mainScrubberBkLeft_do.w), d.volumeScrubberBkLeft_do.setHeight(d.mainScrubberBkLeft_do.h);
            var c = new Image;
            c.src = b.videoVolumeScrubberBkRightPath_str, d.volumeScrubberBkRight_do = new FWDRLR3DDisplayObject("img"), d.volumeScrubberBkRight_do.setScreen(c), d.volumeScrubberBkRight_do.setWidth(d.volumeScrubberBkLeft_do.w), d.volumeScrubberBkRight_do.setHeight(d.volumeScrubberBkLeft_do.h);
            var e = new Image;
            e.src = d.videoVolumeScrubberBkMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberBkMiddle_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberBkMiddle_do.getStyle().background = "url('" + d.videoVolumeScrubberBkMiddlePath_str + "') repeat-x") : (d.volumeScrubberBkMiddle_do = new FWDRLR3DDisplayObject("img"), d.volumeScrubberBkMiddle_do.setScreen(e)), d.volumeScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDrag_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberDrag_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragLeft_do = new FWDRLR3DDisplayObject("img");
            var f = new Image;
            f.src = d.mainScrubberDragLeft_do.screen.src,
                d.volumeScrubberDragLeft_do.setScreen(f), d.volumeScrubberDragLeft_do.setWidth(d.mainScrubberDragLeft_do.w), d.volumeScrubberDragLeft_do.setHeight(d.mainScrubberDragLeft_do.h), e = new Image, e.src = d.videoVolumeScrubberDragMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberDragMiddle_do = new FWDRLR3DDisplayObject("div"), d.volumeScrubberDragMiddle_do.getStyle().background = "url('" + d.videoVolumeScrubberDragMiddlePath_str + "') repeat-x") : (d.volumeScrubberDragMiddle_do = new FWDRLR3DDisplayObject("img"), d.volumeScrubberDragMiddle_do.setScreen(e)), d.volumeScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.volumeScrubberBarLine_do = new FWDRLR3DDisplayObject("img");
            var g = new Image;
            g.src = d.mainScrubberBarLine_do.screen.src, d.volumeScrubberBarLine_do.setScreen(g), d.volumeScrubberBarLine_do.setWidth(d.mainScrubberBarLine_do.w), d.volumeScrubberBarLine_do.setHeight(d.mainScrubberBarLine_do.h), d.volumeScrubberBarLine_do.setAlpha(0), d.volumeScrubberBarLine_do.hasTransform3d_bl = !1, d.volumeScrubberBarLine_do.hasTransform2d_bl = !1, d.volumeScrubber_do.setWidth(d.volumeScrubberWidth), d.volumeScrubberBkMiddle_do.setWidth(d.volumeScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.volumeScrubberBkRight_do.setX(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDragMiddle_do.setWidth(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.volumeScrubber_do.addChild(d.volumeScrubberBkLeft_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkRight_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragLeft_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberDrag_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.buttons_ar.push(d.volumeScrubber_do), d.mainHolder_do.addChild(d.volumeScrubber_do), d.allowToChangeVolume_bl && (d.isMobile_bl ? d.hasPointerEvent_bl ? (d.volumeScrubber_do.screen.addEventListener("pointerover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("pointerout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("pointerdown", d.volumeScrubberOnDownHandler)) : d.volumeScrubber_do.screen.addEventListener("touchstart", d.volumeScrubberOnDownHandler) : d.screen.addEventListener ? (d.volumeScrubber_do.screen.addEventListener("mouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("mouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("mousedown", d.volumeScrubberOnDownHandler)) : d.screen.attachEvent && (d.volumeScrubber_do.screen.attachEvent("onmouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.attachEvent("onmouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.attachEvent("onmousedown", d.volumeScrubberOnDownHandler))), d.enableVolumeScrubber(), d.updateVolumeScrubber(d.volume)
        }, this.volumeScrubberOnOverHandler = function(a) {
            d.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnOutHandler = function(a) {
            d.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnDownHandler = function(a) {
            if (!d.isVolumeScrubberDisabled_bl && 2 != a.button) {
                a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    c = b.screenX - d.volumeScrubber_do.getGlobalX();
                c < 0 ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                var e = c / d.volumeScrubberWidth;
                d.disable_do && d.addChild(d.disable_do), d.lastVolume = e, d.updateVolume(e), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("pointermove", d.volumeScrubberMoveHandler), window.addEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", d.volumeScrubberMoveHandler), window.addEventListener("touchend", d.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.volumeScrubberMoveHandler), window.addEventListener("mouseup", d.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.volumeScrubberMoveHandler), document.attachEvent("onmouseup", d.volumeScrubberEndHandler))
            }
        }, this.volumeScrubberMoveHandler = function(a) {
            if (!d.isVolumeScrubberDisabled_bl) {
                a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    c = b.screenX - d.volumeScrubber_do.getGlobalX();
                c < 0 ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                var e = c / d.volumeScrubberWidth;
                d.lastVolume = e, d.updateVolume(e)
            }
        }, this.volumeScrubberEndHandler = function() {
            d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("pointermove", d.volumeScrubberMoveHandler), window.removeEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", d.volumeScrubberMoveHandler), window.removeEventListener("touchend", d.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.volumeScrubberMoveHandler), window.removeEventListener("mouseup", d.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.volumeScrubberMoveHandler), document.detachEvent("onmouseup", d.volumeScrubberEndHandler))
        }, this.disableVolumeScrubber = function() {
            d.isVolumeScrubberDisabled_bl = !0, d.volumeScrubber_do.setButtonMode(!1), d.volumeScrubberEndHandler()
        }, this.enableVolumeScrubber = function() {
            d.isVolumeScrubberDisabled_bl = !1, d.volumeScrubber_do.setButtonMode(!0)
        }, this.updateVolumeScrubber = function(a) {
            var b = parseInt(a * d.volumeScrubberWidth);
            d.volumeScrubberDrag_do.setWidth(b), b < 1 && d.isVolumeScrubberLineVisible_bl ? (d.isVolumeScrubberLineVisible_bl = !1, FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                alpha: 0
            })) : b > 1 && !d.isVolumeScrubberLineVisible_bl && (d.isVolumeScrubberLineVisible_bl = !0, FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                alpha: 1
            })), b > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (b = d.volumeScrubberWidth - d.scrubbersOffsetWidth), FWDR3DCarModTweenMax.to(d.volumeScrubberBarLine_do, .8, {
                x: b + 1,
                ease: Expo.easeOut
            })
        }, this.updateVolume = function(b, c) {
            d.showVolumeScrubber_bl && (d.volume = b, d.volume <= 1e-6 ? (d.isMute_bl = !0, d.volume = 1e-6) : d.voume >= 1 ? (d.isMute_bl = !1, d.volume = 1) : d.isMute_bl = !1, 1e-6 == d.volume ? d.volumeButton_do && d.volumeButton_do.setDisabledState() : d.volumeButton_do && d.volumeButton_do.setEnabledState(), d.volumeScrubberBarLine_do && d.updateVolumeScrubber(d.volume), c || d.dispatchEvent(a.CHANGE_VOLUME, {
                percent: d.volume
            }))
        }, this.show = function(a) {
            d.isShowed_bl || (d.isShowed_bl = !0, a ? FWDR3DCarModTweenMax.to(d.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : (FWDR3DCarModTweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.setY(0)), setTimeout(d.positionButtons, 200))
        }, this.hide = function(a, b) {
            if (d.isShowed_bl || b) {
                d.isShowed_bl = !1;
                var c = 0;
                b && (c = d.mainScrubberOffestTop), a ? FWDR3DCarModTweenMax.to(d.mainHolder_do, .8, {
                    y: d.stageHeight + c,
                    ease: Expo.easeInOut
                }) : (FWDR3DCarModTweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.setY(d.stageHeight + c))
            }
        }, this.init()
    };
    a.setPrototype = function() {
        a.prototype = new FWDRLR3DDisplayObject("div")
    }, a.FACEBOOK_SHARE = "share", a.FULL_SCREEN = "fullScreen", a.NORMAL_SCREEN = "normalScreen", a.PLAY = "play", a.PAUSE = "pause", a.START_TO_SCRUB = "startToScrub", a.SCRUB = "scrub", a.STOP_TO_SCRUB = "stopToScrub", a.CHANGE_VOLUME = "changeVolume", a.prototype = null, window.FWDRLR3DEVPController = a
}(),
function(a) {
    var b = function(c, d) {
        var e = this;
        e.displayType = b.AFTER_PARENT, e.init = function() {
            this.mustHaveHolderDiv_bl = !1, a.RLVideoPlayer = this, e.instanceName_str = "RLVideoPlayer", e.displayType == b.AFTER_PARENT && (e.mustHaveHolderDiv_bl = !0), this.body = document.getElementsByTagName("body")[0], this.stageContainer = c, this.data = d, this.listeners = {
                events_ar: []
            }, this.main_do = null, this.preloader_do = null, this.controller_do = null, this.videoScreen_do = null, this.flash_do = null, this.flashObject = null, this.videoPoster_do = null, this.largePlayButton_do = null, this.hider = null, this.backgroundColor_str = "#000000", this.videoBackgroundColor_str = "#000000", this.flashObjectMarkup_str = null, this.lastX = 0, this.lastY = 0, this.stageWidth = 0, this.stageHeight = 0, this.firstTapX, this.firstTapY, this.curTime, this.totalTime, this.videoSourcePath_str, this.prevVideoSourcePath_str, this.posterPath_str, this.videoType_str, this.videoStartBehaviour_str, this.prevVideoSource_str, this.prevPosterSource_str, this.finalVideoPath_str, this.resizeHandlerId_to, this.hidePreloaderId_to, this.orientationChangeId_to, this.disableClickId_to, this.clickDelayId_to, this.secondTapId_to, this.isVideoPlayingWhenOpenWindows_bl = !1, this.isSpaceDown_bl = !1, this.isPlaying_bl = !1, this.firstTapPlaying_bl = !1, this.stickOnCurrentInstanceKey_bl = !1, this.isFullScreen_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.disableClick_bl = !1, this.isAPIReady_bl = !1, this.isInstantiate_bl = !0, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.setupMainDo(), this.setupNormalVideoPlayers()
        }, e.setupMainDo = function() {
            e.main_do = new FWDRLR3DDisplayObject("div"), e.main_do.getStyle().msTouchAction = "none", e.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", e.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", e.main_do.getStyle().width = "100%", e.main_do.getStyle().height = "100%", e.main_do.setBackfaceVisibility(), e.main_do.setBkColor(e.backgroundColor_str), (!FWDRLR3DUtils.isMobile || FWDRLR3DUtils.isMobile && FWDRLR3DUtils.hasPointerEvent) && e.main_do.setSelectable(!1), e.stageContainer.style.overflow = "visible", e.stageContainer.appendChild(e.main_do.screen), setTimeout(e.resizeHandler, 300)
        }, e.resizeHandler = function() {
            if (e.isFullScreen_bl || e.displayType == b.FULL_SCREEN) {
                var a = FWDRLR3DUtils.getViewportSize();
                e.main_do.setX(0), e.main_do.setY(0), e.stageWidth = a.w, e.stageHeight = a.h
            } else e.stageWidth = e.stageContainer.offsetWidth, e.stageHeight = e.stageContainer.offsetHeight;
            e.main_do.setWidth(e.stageWidth), e.main_do.setHeight(e.stageHeight), e.isFlashScreenReady_bl && e.videoType_str == b.VIDEO && (e.flash_do.setWidth(e.stageWidth), e.flash_do.setHeight(e.stageHeight)), e.controller_do && e.controller_do.resizeAndPosition(), e.videoScreen_do && e.videoType_str == b.VIDEO && e.videoScreen_do.resizeAndPosition(e.stageWidth, e.stageHeight), e.preloader_do && e.positionPreloader(), e.dumyClick_do && (e.dumyClick_do.setWidth(e.stageWidth), e.isMobile_bl ? e.dumyClick_do.setHeight(e.stageHeight) : e.dumyClick_do.setHeight(e.stageHeight)), e.largePlayButton_do && e.positionLargePlayButton(), e.videoPoster_do && e.videoPoster_do.allowToShow_bl && e.videoPoster_do.positionAndResize()
        }, this.setupClickScreen = function() {
            e.dumyClick_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIE && (e.dumyClick_do.setBkColor("#00FF00"), e.dumyClick_do.setAlpha(1e-4)), e.dumyClick_do.screen.addEventListener ? e.dumyClick_do.screen.addEventListener("click", e.playPauseClickHandler) : e.dumyClick_do.screen.attachEvent && e.dumyClick_do.screen.attachEvent("onclick", e.playPauseClickHandler), e.hideClickScreen(), e.main_do.addChild(e.dumyClick_do)
        }, this.playPauseClickHandler = function(a) {
            2 != a.button && (e.disableClick_bl || (e.firstTapPlaying_bl = e.isPlaying_bl, b.keyboardCurInstance = e, 0 != e.controller_do.mainHolder_do.y && e.isMobile_bl || (b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.togglePlayPause() : e.isFlashScreenReady_bl && e.flashObject.togglePlayPause())))
        }, this.showClickScreen = function() {
            e.dumyClick_do.setVisible(!0)
        }, this.hideClickScreen = function() {
            e.dumyClick_do.setVisible(!1)
        }, this.disableClick = function() {
            e.disableClick_bl = !0, clearTimeout(e.disableClickId_to), e.disableClickId_to = setTimeout(function() {
                e.disableClick_bl = !1
            }, 500)
        }, this.addDoubleClickSupport = function() {
            !e.isMobile_bl && e.dumyClick_do.screen.addEventListener ? (e.dumyClick_do.screen.addEventListener("mousedown", e.onFirstDown), FWDRLR3DUtils.isIEWebKit && e.dumyClick_do.screen.addEventListener("dblclick", e.onSecondDown)) : e.isMobile_bl ? e.dumyClick_do.screen.addEventListener("touchstart", e.onFirstDown) : e.dumyClick_do.screen.addEventListener && e.dumyClick_do.screen.addEventListener("mousedown", e.onFirstDown)
        }, this.onFirstDown = function(a) {
            if (2 != a.button) {
                e.isFullscreen_bl && a.preventDefault && a.preventDefault();
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                e.firstTapX = b.screenX, e.firstTapY = b.screenY, e.firstTapPlaying_bl = e.isPlaying_bl, FWDRLR3DUtils.isIEWebKit || (e.isMobile_bl ? (e.dumyClick_do.screen.addEventListener("touchstart", e.onSecondDown), e.dumyClick_do.screen.removeEventListener("touchstart", e.onFirstDown)) : e.dumyClick_do.screen.addEventListener && (e.dumyClick_do.screen.addEventListener("mousedown", e.onSecondDown), e.dumyClick_do.screen.removeEventListener("mousedown", e.onFirstDown)), clearTimeout(e.secondTapId_to), e.secondTapId_to = setTimeout(e.doubleTapExpired, 250))
            }
        }, this.doubleTapExpired = function() {
            clearTimeout(e.secondTapId_to), e.isMobile_bl ? (e.dumyClick_do.screen.removeEventListener("touchstart", e.onSecondDown), e.dumyClick_do.screen.addEventListener("touchstart", e.onFirstDown)) : e.dumyClick_do.screen.addEventListener && (e.dumyClick_do.screen.removeEventListener("mousedown", e.onSecondDown), e.dumyClick_do.screen.addEventListener("mousedown", e.onFirstDown))
        }, this.onSecondDown = function(a) {
            a.preventDefault && a.preventDefault();
            var c, d, b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
            FWDRLR3DUtils.isIEWebKit && (e.firstTapPlaying_bl = e.isPlaying_bl), a.touches && 1 != a.touches.length || (c = Math.abs(b.screenX - e.firstTapX), d = Math.abs(b.screenY - e.firstTapY), e.isMobile_bl && (c > 10 || d > 10) || !e.isMobile_bl && (c > 2 || d > 2) || (e.switchFullScreenOnDoubleClick(), FWDRLR3DUtils.isIEWebKit || (e.firstTapPlaying_bl ? e.play() : e.pause())))
        }, this.switchFullScreenOnDoubleClick = function() {
            e.disableClick(), e.isFullScreen_bl ? e.goNormalScreen() : e.goFullScreen()
        }, this.setupNormalVideoPlayers = function() {
            e.setupPreloader(), b.hasHTML5Video ? (e.isAPIReady_bl = !0, e.setupVideoScreen(), e.setupVideoPoster(), e.main_do.addChild(e.preloader_do), e.setupClickScreen(), e.addDoubleClickSupport(), e.setupController(), e.setupLargePlayPauseButton(), e.setupHider(), e.dispatchEvent(b.READY), e.setPosterSource(e.posterPath_str)) : e.setupFlashScreen(), e.resizeHandler()
        }, this.setupPreloader = function() {
            FWDRLR3DPreloader.setPrototype(), e.preloader_do = new FWDRLR3DPreloader(e.data.videoMainPreloader_img, 30, 30, 30, 40), e.preloader_do.show(!0), e.main_do.addChild(e.preloader_do)
        }, this.positionPreloader = function() {
            e.preloader_do.setX(parseInt((e.stageWidth - e.preloader_do.w) / 2)), e.preloader_do.setY(parseInt((e.stageHeight - e.preloader_do.h) / 2))
        }, this.setupVideoPoster = function() {
            FWDRLR3DEVPPoster.setPrototype(), e.videoPoster_do = new FWDRLR3DEVPPoster(e, e.data.videoPosterBackgroundColor_str, e.data.show), e.main_do.addChild(e.videoPoster_do)
        }, this.setupLargePlayPauseButton = function() {
            FWDRLR3DSimpleButton.setPrototype(!0), e.largePlayButton_do = new FWDRLR3DSimpleButton(e.data.videoLargePlayN_img, e.data.videoLargePlayS_str), e.largePlayButton_do.addListener(FWDRLR3DSimpleButton.MOUSE_UP, e.largePlayButtonUpHandler), e.largePlayButton_do.setOverflow("visible"), e.largePlayButton_do.hide(!1), e.main_do.addChild(e.largePlayButton_do)
        }, this.largePlayButtonUpHandler = function() {
            e.disableClick(), e.largePlayButton_do.hide(), e.play()
        }, this.positionLargePlayButton = function() {
            e.largePlayButton_do.setX(parseInt((e.stageWidth - e.largePlayButton_do.w) / 2)), e.largePlayButton_do.setY(parseInt((e.stageHeight - e.largePlayButton_do.h) / 2))
        }, this.setupController = function() {
            FWDRLR3DEVPController.setPrototype(), e.controller_do = new FWDRLR3DEVPController(e.data, e), e.controller_do.addListener(FWDRLR3DEVPController.PLAY, e.controllerOnPlayHandler), e.controller_do.addListener(FWDRLR3DEVPController.PAUSE, e.controllerOnPauseHandler), e.controller_do.addListener(FWDRLR3DEVPController.START_TO_SCRUB, e.controllerStartToScrubbHandler), e.controller_do.addListener(FWDRLR3DEVPController.SCRUB, e.controllerScrubbHandler), e.controller_do.addListener(FWDRLR3DEVPController.STOP_TO_SCRUB, e.controllerStopToScrubbHandler), e.controller_do.addListener(FWDRLR3DEVPController.CHANGE_VOLUME, e.controllerChangeVolumeHandler), e.controller_do.addListener(FWDRLR3DEVPController.FULL_SCREEN, e.controllerFullScreenHandler), e.controller_do.addListener(FWDRLR3DEVPController.NORMAL_SCREEN, e.controllerNormalScreenHandler), e.main_do.addChild(e.controller_do)
        }, this.controllerOnPlayHandler = function(a) {
            e.play()
        }, this.controllerOnPauseHandler = function(a) {
            e.pause()
        }, this.controllerStartToScrubbHandler = function(a) {
            e.startToScrub()
        }, this.controllerScrubbHandler = function(a) {
            e.scrub(a.percent)
        }, this.controllerStopToScrubbHandler = function(a) {
            e.stopToScrub()
        }, this.controllerChangeVolumeHandler = function(a) {
            e.setVolume(a.percent)
        }, this.controllerFullScreenHandler = function() {
            e.goFullScreen()
        }, this.controllerNormalScreenHandler = function() {
            e.goNormalScreen()
        }, this.setupVideoScreen = function() {
            FWDRLR3DEVPVideoScreen.setPrototype(), e.videoScreen_do = new FWDRLR3DEVPVideoScreen(e, e.backgroundColor_str, e.data.volume), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.ERROR, e.videoScreenErrorHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.SAFE_TO_SCRUBB, e.videoScreenSafeToScrubbHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.STOP, e.videoScreenStopHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.PLAY, e.videoScreenPlayHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.PAUSE, e.videoScreenPauseHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.UPDATE, e.videoScreenUpdateHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.UPDATE_TIME, e.videoScreenUpdateTimeHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.LOAD_PROGRESS, e.videoScreenLoadProgressHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.START_TO_BUFFER, e.videoScreenStartToBuferHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.STOP_TO_BUFFER, e.videoScreenStopToBuferHandler), e.videoScreen_do.addListener(FWDRLR3DEVPVideoScreen.PLAY_COMPLETE, e.videoScreenPlayCompleteHandler), e.main_do.addChild(e.videoScreen_do)
        }, this.videoScreenErrorHandler = function(c) {
            var d;
            e.isPlaying_bl = !1, d = c.text, a.console && console.log(c.text), e.controller_do && (e.controller_do.disableMainScrubber(), e.data.showControllerWhenVideoIsStopped_bl || e.controller_do.hide(!e.isMobile_bl, !0), e.largePlayButton_do.hide(), e.hideClickScreen(), e.hider.stop()), FWDRLR3DUtils.isIphone && e.videoScreen_do && e.videoScreen_do.setX(-5e3), e.preloader_do.hide(!1), e.showCursor(), e.stop(), e.dispatchEvent(b.ERROR, {
                error: d
            })
        }, this.videoScreenSafeToScrubbHandler = function() {
            e.controller_do && (e.controller_do.enableMainScrubber(), e.controller_do.show(!0), e.hider.start()), e.data.addKeyboardSupport_bl && e.addKeyboardSupport(), e.showClickScreen()
        }, this.videoScreenStopHandler = function(a) {
            e.videoPoster_do.allowToShow_bl = !0, e.isPlaying_bl = !1, e.controller_do && (e.controller_do.disableMainScrubber(), e.controller_do.showPlayButton(), e.data.showControllerWhenVideoIsStopped_bl ? e.controller_do.show(!e.isMobile_bl) : e.controller_do.hide(!e.isMobile_bl, !0), e.hider.stop()), e.hideClickScreen(), e.hider.reset(), e.showCursor(), e.dispatchEvent(b.STOP)
        }, this.videoScreenPlayHandler = function() {
            b.keyboardCurInstance = e, e.isPlaying_bl = !0, e.controller_do && (e.controller_do.showPauseButton(), e.controller_do.show(!0)), e.largePlayButton_do.hide(), e.hider.start(), e.showCursor(), e.dispatchEvent(b.PLAY)
        }, this.videoScreenPauseHandler = function() {
            e.isPlaying_bl = !1, e.controller_do && e.controller_do.showPlayButton(), FWDRLR3DUtils.isIphone || e.largePlayButton_do.show(), e.controller_do.show(!0), e.hider.stop(), e.hider.reset(), e.showCursor(), e.showClickScreen(), e.dispatchEvent(b.PAUSE)
        }, this.videoScreenUpdateHandler = function(a) {
            var c;
            b.hasHTML5Video ? (c = a.percent, e.controller_do && e.controller_do.updateMainScrubber(c)) : (c = a, e.controller_do && e.controller_do.updateMainScrubber(c)), e.dispatchEvent(b.UPDATE, {
                percent: c
            })
        }, this.videoScreenUpdateTimeHandler = function(a, c) {
            var d;
            b.hasHTML5Video ? (e.curTime = a.curTime, e.totalTime = a.totalTime, d = e.curTime + "/" + e.totalTime, e.controller_do && e.controller_do.updateTime(d)) : (e.curTime = a, e.totalTime = c, d = e.curTime + "/" + e.totalTime, void 0 != a && void 0 != c || (d = "00:00/00:00"), e.controller_do && e.controller_do.updateTime(d)), e.dispatchEvent(b.UPDATE_TIME, {
                currentTime: e.curTime,
                totalTime: e.totalTime
            })
        }, this.videoScreenLoadProgressHandler = function(a) {
            b.hasHTML5Video ? e.controller_do && e.controller_do.updatePreloaderBar(a.percent) : e.controller_do && e.controller_do.updatePreloaderBar(a)
        }, this.videoScreenStartToBuferHandler = function() {
            e.preloader_do.show()
        }, this.videoScreenStopToBuferHandler = function() {
            e.preloader_do.hide(!0)
        }, this.videoScreenPlayCompleteHandler = function() {
            e.data.videoLoop_bl ? (e.scrub(0), e.play()) : e.stop(), e.hider.reset(), e.dispatchEvent(b.PLAY_COMPLETE)
        }, this.setupFlashScreen = function() {
            if (!e.flash_do) {
                if (!FWDRLR3DFlashTest.hasFlashPlayerVersion("9.0.18")) {
                    var a = "Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>";
                    return void e.dispatchEvent(b.ERROR, {
                        error: a
                    })
                }
                e.flash_do = new FWDRLR3DDisplayObject("div"), e.flash_do.setBackfaceVisibility(), e.flash_do.setResizableSizeAfterParent(), e.main_do.addChild(e.flash_do), e.flashObjectMarkup_str = '<object id="' + e.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + e.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + e.instanceName_str + "&volume=" + e.data.volume + "&bkColor_str=" + e.videoBackgroundColor_str + '"/><object type="application/x-shockwave-flash" data="' + e.data.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + e.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + e.instanceName_str + "&volume=" + e.data.volume + "&bkColor_str=" + e.videoBackgroundColor_str + '"/></object></object>', e.flash_do.screen.innerHTML = e.flashObjectMarkup_str, e.flashObject = e.flash_do.screen.firstChild, FWDRLR3DUtils.isIE || (e.flashObject = e.flashObject.getElementsByTagName("object")[0])
            }
        }, this.flashScreenIsReady = function() {
            console && console.dir("flash video ready " + e.instanceName_str), e.isFlashScreenReady_bl = !0, e.isAPIReady_bl = !0, e.setupVideoPoster(), e.main_do.addChild(e.preloader_do), e.setupClickScreen(), e.addDoubleClickSupport(), e.setupController(), e.setupLargePlayPauseButton(), e.setupHider(), e.setPosterSource(e.posterPath_str), e.dispatchEvent(b.READY)
        }, this.flashScreenFail = function() {
            e.dispatchEvent(b.ERROR, {
                error: error
            })
        }, this.addKeyboardSupport = function() {
            document.addEventListener ? (document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)) : document.attachEvent && (document.attachEvent("onkeydown", this.onKeyDownHandler), document.attachEvent("onkeyup", this.onKeyUpHandler))
        }, this.removeKeyboardSupport = function() {
            document.removeEventListener ? (document.removeEventListener("keydown", this.onKeyDownHandler), document.removeEventListener("keyup", this.onKeyUpHandler)) : document.detachEvent && (document.detachEvent("onkeydown", this.onKeyDownHandler), document.detachEvent("onkeyup", this.onKeyUpHandler))
        }, this.onKeyDownHandler = function(a) {
            if (!e.isSpaceDown_bl && (e.isSpaceDown_bl = !0, 32 == a.keyCode)) {
                if (e != b.keyboardCurInstance && ("pause" == b.videoStartBehaviour || "none" == b.videoStartBehaviour)) return;
                if (e.stickOnCurrentInstanceKey_bl = !0, b.hasHTML5Video) {
                    if (!e.videoScreen_do.isSafeToBeControlled_bl) return;
                    e.videoScreen_do.togglePlayPause()
                } else e.isFlashScreenReady_bl && e.flashObject.togglePlayPause();
                return a.preventDefault && a.preventDefault(), !1
            }
        }, this.onKeyUpHandler = function(a) {
            e.isSpaceDown_bl = !1
        }, this.setupHider = function() {
            FWDRLR3DHider.setPrototype(), e.hider = new FWDRLR3DHider(e.main_do, e.data.controllerHideDelay), e.hider.addListener(FWDRLR3DHider.SHOW, e.hiderShowHandler), e.hider.addListener(FWDRLR3DHider.HIDE, e.hiderHideHandler), e.hider.addListener(FWDRLR3DHider.HIDE_COMPLETE, e.hiderHideCompleteHandler)
        }, this.hiderShowHandler = function() {
            e.isPlaying_bl && e.controller_do.show(!0), e.showCursor()
        }, this.hiderHideHandler = function() {
            if (!FWDRLR3DUtils.isIphone) {
                if (FWDRLR3DUtils.hitTest(e.controller_do.screen, e.hider.globalX, e.hider.globalY)) return void e.hider.reset();
                e.controller_do.hide(!0), e.isFullScreen_bl && e.hideCursor()
            }
        }, this.hiderHideCompleteHandler = function() {
            e.controller_do.positionScrollBarOnTopOfTheController()
        }, this.play = function() {
            e.isAPIReady_bl && (FWDRLR3DUtils.isIphone && e.videoScreen_do.setX(0), b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.play() : e.isFlashScreenReady_bl && e.flashObject.playVideo(), b.keyboardCurInstance = e, e.videoPoster_do.allowToShow_bl = !1, e.largePlayButton_do.hide(), e.videoPoster_do.hide())
        }, this.pause = function() {
            e.isAPIReady_bl && (FWDRLR3DUtils.isIphone && e.videoScreen_do.setX(0), b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.pause() : e.isFlashScreenReady_bl && e.flashObject.pauseVideo())
        }, this.resume = function() {
            e.isAPIReady_bl && (FWDRLR3DUtils.isIphone && e.videoScreen_do.setX(0), b.hasHTML5Video && e.videoScreen_do && e.videoScreen_do.resume())
        }, this.stop = function(a) {
            e.isAPIReady_bl && (e.isPlaying_bl = !1, e.hider.reset(), FWDRLR3DUtils.isIphone && e.videoScreen_do.setX(-5e3), b.hasHTML5Video ? e.videoScreen_do.stop() : e.isFlashScreenReady_bl && e.flashObject.stopVideo(), e.isMobile_bl ? a && a.indexOf(".") != -1 ? (e.data.showControllerWhenVideoIsStopped_bl && e.controller_do.show(!0), e.videoPoster_do.show(), e.largePlayButton_do.show()) : a || (e.videoPoster_do.show(), e.largePlayButton_do.show()) : (e.data.showControllerWhenVideoIsStopped_bl && e.controller_do.show(!0), e.videoPoster_do.show(), e.largePlayButton_do.show()), e.data.addKeyboardSupport_bl && e.removeKeyboardSupport())
        }, this.startToScrub = function() {
            e.isAPIReady_bl && (b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.startToScrub() : e.isFlashScreenReady_bl && e.flashObject.startToScrub())
        }, this.stopToScrub = function() {
            e.isAPIReady_bl && (b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.stopToScrub() : e.isFlashScreenReady_bl && e.flashObject.stopToScrub())
        }, this.scrub = function(a) {
            e.isAPIReady_bl && (isNaN(a) || (a < 0 ? a = 0 : a > 1 && (a = 1), b.hasHTML5Video ? e.videoScreen_do && e.videoScreen_do.scrub(a) : e.isFlashScreenReady_bl && e.flashObject.scrub(a)))
        }, this.setVolume = function(a) {
            e.isAPIReady_bl && !e.isMobile_bl && (e.controller_do.updateVolume(a, !0), b.hasHTML5Video && e.videoScreen_do && e.videoScreen_do.setVolume(a), e.isFlashScreenReady_bl && e.flashObject.setVolume(a), e.dispatchEvent(b.VOLUME_SET, {
                volume: a
            }))
        }, this.setPosterSource = function(a) {
            if (e.isAPIReady_bl && a) {
                var c = a.split(",");
                a = e.isMobile_bl && void 0 != c[1] ? c[1] : c[0], e.posterPath_str = a, e.videoPoster_do.setPoster(e.posterPath_str), e.prevPosterSource_str != a && e.dispatchEvent(b.UPDATE_POSTER_SOURCE), e.prevPosterSource_str = a
            }
        }, this.setVideoSource = function(a, c) {
            if (e.isAPIReady_bl && (a != e.prevVideoSource_str || c)) {
                if (e.prevVideoSource_str = a, !a) return void e.dispatchEvent(b.ERROR, {
                    error: "Video source is not defined!"
                });
                e.stop(a), e.videoSourcePath_str = a, e.finalVideoPath_str = a, e.videoType_str = b.VIDEO;
                var d = a.split(",");
                a = e.isMobile_bl && void 0 != d[1] ? d[1] : d[0], e.finalVideoPath_str = a, b.hasHTML5Video && e.videoType_str == b.VIDEO ? (e.setPosterSource(e.posterPath_str), e.videoPoster_do.show(), e.largePlayButton_do.show(), FWDRLR3DUtils.isIphone && e.videoScreen_do.setX(-5e3), e.videoScreen_do.setVisible(!0), e.videoScreen_do && (e.videoScreen_do.setSource(a), e.data.videoAutoPlay_bl && e.play())) : e.isFlashScreenReady_bl && e.videoType_str == b.VIDEO && (a.indexOf("://") == -1 && 1 != a.indexOf("/") && (a = a.substr(a.indexOf("/") + 1)), e.videoPoster_do.show(), e.largePlayButton_do.show(), e.flashObject.setSource(a), e.data.videoAutoPlay_bl && e.play()), e.prevVideoSourcePath_str = e.videoSourcePath_str, e.resizeHandler(), e.getVideoSource() && e.dispatchEvent(b.UPDATE_VIDEO_SOURCE)
            }
        }, this.goFullScreen = function() {
            if (e.isAPIReady_bl) {
                document.addEventListener && (document.addEventListener("fullscreenchange", e.onFullScreenChange), document.addEventListener("mozfullscreenchange", e.onFullScreenChange), document.addEventListener("webkitfullscreenchange", e.onFullScreenChange), document.addEventListener("MSFullscreenChange", e.onFullScreenChange)), e.main_do.screen.requestFullScreen ? e.main_do.screen.requestFullScreen() : e.main_do.screen.mozRequestFullScreen ? e.main_do.screen.mozRequestFullScreen() : e.main_do.screen.webkitRequestFullScreen ? e.main_do.screen.webkitRequestFullScreen() : e.main_do.screen.msRequestFullscreen && e.main_do.screen.msRequestFullscreen(), e.disableClick(), document.documentElement.style.overflow = "hidden", e.main_do.getStyle().zIndex = 1e19, e.stageContainer.style.overflow = "visible", e.isFullScreen_bl = !0, e.controller_do.showNormalScreenButton(), e.controller_do.setNormalStateToFullScreenButton();
                var c = FWDRLR3DUtils.getScrollOffsets();
                e.lastX = c.x, e.lastY = c.y, e.isMobile_bl && a.addEventListener("touchmove", e.disableFullScreenOnMobileHandler), e.dispatchEvent(b.GO_FULLSCREEN), setTimeout(e.resizeHandler, 50)
            }
        }, this.disableFullScreenOnMobileHandler = function(a) {
            a.preventDefault && a.preventDefault()
        }, this.goNormalScreen = function() {
            e.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), e.addMainDoToTheOriginalParent(), e.isFullScreen_bl = !1)
        }, this.addMainDoToTheOriginalParent = function() {
            e.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", e.onFullScreenChange), document.removeEventListener("mozfullscreenchange", e.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", e.onFullScreenChange), document.removeEventListener("MSFullscreenChange", e.onFullScreenChange)), e.controller_do.setNormalStateToFullScreenButton(), FWDRLR3DUtils.isIEAndLessThen9 ? document.documentElement.style.overflow = "auto" : document.documentElement.style.overflow = "visible", e.main_do.getStyle().position = "relative", e.main_do.getStyle().zIndex = 0, e.controller_do.showFullScreenButton(), setTimeout(function() {
                e.resizeHandler()
            }, 50), e.isMobile_bl && a.removeEventListener("touchmove", e.disableFullScreenOnMobileHandler), e.dispatchEvent(b.GO_NORMALSCREEN))
        }, this.onFullScreenChange = function(a) {
            document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (e.controller_do.showNormalScreenButton(), e.addMainDoToTheOriginalParent(), e.isFullScreen_bl = !1)
        }, this.getVideoSource = function() {
            if (e.isAPIReady_bl) return e.finalVideoPath_str
        }, this.getPosterSource = function() {
            if (e.isAPIReady_bl) return e.posterPath_str
        }, this.getCurrentTime = function() {
            var a;
            return a = e.curTime ? e.curTime : "00:00"
        }, this.getTotalTime = function() {
            var a;
            return a = e.totalTime ? e.totalTime : "00:00"
        }, this.hideCursor = function() {
            document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none"
        }, this.showCursor = function() {
            document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto"
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DEventDispatcher
    }, b.hasHTML5Video = function() {
        var a = document.createElement("video"),
            c = !1;
        return a.canPlayType && (c = Boolean("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4")), b.canPlayMp4 = Boolean("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4"))), !!self.isMobile_bl || c
    }(), b.instaces_ar = [], b.curInstance = null, b.keyboardCurInstance = null, b.areInstancesCreated_bl = null, b.PAUSE_ALL_VIDEOS = "pause", b.STOP_ALL_VIDEOS = "stop", b.DO_NOTHING = "none", b.VIDEO = "video", b.READY = "ready", b.STOP = "stop", b.PLAY = "play", b.PAUSE = "pause", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.UPDATE_VIDEO_SOURCE = "updateVideoSource", b.UPDATE_POSTER_SOURCE = "udpatePosterSource", b.ERROR = "error", b.PLAY_COMPLETE = "playComplete", b.VOLUME_SET = "volumeSet", b.GO_FULLSCREEN = "goFullScreen", b.GO_NORMALSCREEN = "goNormalScreen", b.RESPONSIVE = "responsive", b.FULL_SCREEN = "fullscreen", b.AFTER_PARENT = "afterparent", a.FWDRLR3DEVPlayer = b
}(window),
function(a) {
    var b = function(a, c, d) {
        var e = this;
        b.prototype;
        this.img_img = new Image, this.img_do = null, this.imgW = 0, this.imgH = 0, this.finalW = 0, this.finalH = 0, this.finalX = 0, this.finalY = 0, this.curPath_str, this.backgroundColor_str = c, this.isTransparent_bl = !1, this.showPoster_bl = d, this.showOrLoadOnMobile_bl = !1, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.init = function() {
            e.img_img = new Image, e.img_do = new FWDRLR3DDisplayObject("img"), e.hide(), e.setBkColor(e.backgroundColor_str)
        }, this.positionAndResize = function() {
            if (a.stageWidth && (e.setWidth(a.stageWidth), e.setHeight(a.stageHeight), e.imgW)) {
                var d, b = a.stageWidth / e.imgW,
                    c = a.stageHeight / e.imgH;
                d = b <= c ? b : c, e.finalW = Math.round(d * e.imgW), e.finalH = Math.round(d * e.imgH), e.finalX = parseInt((a.stageWidth - e.finalW) / 2), e.finalY = parseInt((a.stageHeight - e.finalH) / 2), e.img_do.setX(e.finalX), e.img_do.setY(e.finalY), e.img_do.setWidth(e.finalW), e.img_do.setHeight(e.finalH)
            }
        }, this.setPoster = function(a) {
            return a && "" == FWDRLR3DUtils.trim(a) || "none" == a ? (e.showOrLoadOnMobile_bl = !0, e.isTransparent_bl = !0, void e.show()) : "youtubemobile" == a ? (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !1, e.img_img.src = null, void(e.imgW = 0)) : a == e.curPath_str ? (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !0, void e.show()) : (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !0, e.curPath_str = a, e.allowToShow_bl && (e.isShowed_bl = !1), void(a && (e.img_do && (e.img_do.src = ""), e.img_img.onload = e.posterLoadHandler, e.img_img.src = e.curPath_str)))
        }, this.posterLoadHandler = function(a) {
            e.imgW = e.img_img.width, e.imgH = e.img_img.height, e.img_do.setScreen(e.img_img), e.addChild(e.img_do), e.show(), e.positionAndResize()
        }, this.show = function(a) {
            e.allowToShow_bl && !e.isShowed_bl && e.showOrLoadOnMobile_bl && (e.isShowed_bl = !0, e.isTransparent_bl ? 0 != e.alpha && e.setAlpha(0) : 1 != e.alpha && e.setAlpha(1), e.setVisible(!0), e.isMobile_bl || e.isTransparent_bl || (FWDR3DCarModTweenMax.killTweensOf(e), e.setAlpha(0), FWDR3DCarModTweenMax.to(e, .6, {
                alpha: 1,
                delay: .4
            })), e.positionAndResize())
        }, this.hide = function() {
            e.isShowed_bl && (e.isShowed_bl = !1, e.setVisible(!1))
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.prototype = null, a.FWDRLR3DEVPPoster = b
}(window),
function(a) {
    var b = function(c, d, e) {
        var f = this;
        b.prototype;
        this.video_el = null, this.sourcePath_str = null, this.backgroundColor_str = d, this.controllerHeight = c.data.controllerHeight, this.stageWidth = 0, this.stageHeight = 0, this.lastPercentPlayed = 0, this.volume = e, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.disableClickForAWhileId_to, this.disableClick_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.init = function() {
            f.setupVideo(), f.setBkColor(f.backgroundColor_str)
        }, this.setupVideo = function() {
            null == f.video_el && (f.video_el = document.createElement("video"), f.screen.appendChild(f.video_el), f.video_el.controls = !1, f.video_el.volume = f.volume, f.video_el.style.position = "relative", f.video_el.style.left = "0px", f.video_el.style.top = "0px", f.video_el.style.width = "100%", f.video_el.style.height = "100%", f.video_el.style.margin = "0px", f.video_el.style.padding = "0px", f.video_el.style.maxWidth = "none", f.video_el.style.maxHeight = "none", f.video_el.style.border = "none", f.video_el.style.lineHeight = "0", f.video_el.style.msTouchAction = "none", f.screen.appendChild(f.video_el)), f.video_el.addEventListener("error", f.errorHandler), f.video_el.addEventListener("canplay", f.safeToBeControlled), f.video_el.addEventListener("canplaythrough", f.safeToBeControlled), f.video_el.addEventListener("progress", f.updateProgress), f.video_el.addEventListener("timeupdate", f.updateVideo), f.video_el.addEventListener("pause", f.pauseHandler), f.video_el.addEventListener("play", f.playHandler), FWDRLR3DUtils.isIE || f.video_el.addEventListener("waiting", f.startToBuffer), f.video_el.addEventListener("playing", f.stopToBuffer), f.video_el.addEventListener("ended", f.endedHandler), f.resizeAndPosition()
        }, this.destroyVideo = function() {
            f.video_el && (f.video_el.removeEventListener("error", f.errorHandler), f.video_el.removeEventListener("canplay", f.safeToBeControlled), f.video_el.removeEventListener("canplaythrough", f.safeToBeControlled), f.video_el.removeEventListener("progress", f.updateProgress), f.video_el.removeEventListener("timeupdate", f.updateVideo), f.video_el.removeEventListener("pause", f.pauseHandler), f.video_el.removeEventListener("play", f.playHandler), FWDRLR3DUtils.isIE || f.video_el.removeEventListener("waiting", f.startToBuffer), f.video_el.removeEventListener("playing", f.stopToBuffer), f.video_el.removeEventListener("ended", f.endedHandler), f.isMobile_bl ? (f.screen.removeChild(f.video_el), f.video_el = null) : (f.video_el.style.visibility = "hidden", f.video_el.src = "", f.video_el.load()))
        }, this.startToBuffer = function(a) {
            f.dispatchEvent(b.START_TO_BUFFER)
        }, this.stopToBuffer = function() {
            f.dispatchEvent(b.STOP_TO_BUFFER)
        }, this.errorHandler = function(c) {
            var d;
            f.hasError_bl = !0, d = 0 == f.video_el.networkState ? "error 'self.video_el.networkState = 0'" : 1 == f.video_el.networkState ? "error 'self.video_el.networkState = 1'" : 2 == f.video_el.networkState ? "'self.video_el.networkState = 2'" : 3 == f.video_el.networkState ? "Video source not found <font color='#FF0000'>" + f.sourcePath_str + "</font>" : c, a.console && a.console.log(f.video_el.networkState), f.dispatchEvent(b.ERROR, {
                text: d
            })
        }, this.resizeAndPosition = function(a, b) {
            a && (f.stageWidth = a, f.stageHeight = b), f.setWidth(f.stageWidth), FWDRLR3DUtils.isIphone ? f.setHeight(f.stageHeight - f.controllerHeight) : f.setHeight(f.stageHeight)
        }, this.setSource = function(a) {
            f.sourcePath_str = a, f.video_el && f.stop()
        }, this.play = function(a) {
            if (FWDRLR3DEVPlayer.curInstance = c, f.isStopped_bl) f.isPlaying_bl = !1, f.hasError_bl = !1, f.allowScrubing_bl = !1, f.isStopped_bl = !1, f.setupVideo(), f.setVolume(), f.video_el.src = f.sourcePath_str, f.play(), f.startToBuffer(!0), f.isPlaying_bl = !0;
            else if (!f.video_el.ended || a) try {
                f.isPlaying_bl = !0, f.hasPlayedOnce_bl = !0, f.video_el.play(), FWDRLR3DUtils.isIE && f.dispatchEvent(b.PLAY)
            } catch (a) {}
        }, this.pause = function() {
            if (null != f && !f.isStopped_bl && !f.hasError_bl && !f.video_el.ended) try {
                f.video_el.pause(), f.isPlaying_bl = !1, FWDRLR3DUtils.isIE && f.dispatchEvent(b.PAUSE)
            } catch (a) {}
        }, this.togglePlayPause = function() {
            null != f && f.isSafeToBeControlled_bl && (f.isPlaying_bl ? f.pause() : f.play())
        }, this.pauseHandler = function() {
            f.allowScrubing_bl || f.dispatchEvent(b.PAUSE)
        }, this.playHandler = function() {
            f.allowScrubing_bl || (f.isStartEventDispatched_bl || (f.dispatchEvent(b.START), f.isStartEventDispatched_bl = !0), f.dispatchEvent(b.PLAY))
        }, this.endedHandler = function() {
            f.dispatchEvent(b.PLAY_COMPLETE)
        }, this.resume = function() {
            f.isStopped_bl || f.play()
        }, this.stop = function(a) {
            (null != f && null != f.video_el && !f.isStopped_bl || a) && (f.isPlaying_bl = !1, f.isStopped_bl = !0, f.hasPlayedOnce_bl = !0, f.isSafeToBeControlled_bl = !1, f.isStartEventDispatched_bl = !1, f.destroyVideo(), f.dispatchEvent(b.LOAD_PROGRESS, {
                percent: 0
            }), f.dispatchEvent(b.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00"
            }), f.dispatchEvent(b.STOP), f.stopToBuffer())
        }, this.safeToBeControlled = function() {
            f.stopToScrub(), f.isSafeToBeControlled_bl || (f.hasHours_bl = Math.floor(f.video_el.duration / 3600) > 0, f.isPlaying_bl = !0, f.isSafeToBeControlled_bl = !0, f.video_el.style.visibility = "visible", f.dispatchEvent(b.SAFE_TO_SCRUBB))
        }, this.updateProgress = function() {
            var a, c = 0;
            f.video_el.buffered.length > 0 && (a = f.video_el.buffered.end(f.video_el.buffered.length - 1), c = a.toFixed(1) / f.video_el.duration.toFixed(1), !isNaN(c) && c || (c = 0)), 1 == c && f.video_el.removeEventListener("progress", f.updateProgress), f.dispatchEvent(b.LOAD_PROGRESS, {
                percent: c
            })
        }, this.updateVideo = function() {
            var a;
            f.allowScrubing_bl || (a = f.video_el.currentTime / f.video_el.duration, f.dispatchEvent(b.UPDATE, {
                percent: a
            }));
            var c = f.formatTime(f.video_el.duration),
                d = f.formatTime(f.video_el.currentTime);
            isNaN(f.video_el.duration) ? f.dispatchEvent(b.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00"
            }) : f.dispatchEvent(b.UPDATE_TIME, {
                curTime: d,
                totalTime: c
            }), f.lastPercentPlayed = a, f.curDuration = d
        }, this.startToScrub = function() {
            f.allowScrubing_bl = !0
        }, this.stopToScrub = function() {
            f.allowScrubing_bl = !1
        }, this.scrub = function(a, c) {
            c && f.startToScrub();
            try {
                f.video_el.currentTime = f.video_el.duration * a;
                var d = f.formatTime(f.video_el.duration),
                    e = f.formatTime(f.video_el.currentTime);
                f.dispatchEvent(b.UPDATE_TIME, {
                    curTime: e,
                    totalTime: d
                })
            } catch (a) {}
        }, this.replay = function() {
            f.scrub(0), f.play()
        }, this.setVolume = function(a) {
            a && (f.volume = a), f.video_el && (f.video_el.volume = f.volume)
        }, this.formatTime = function(a) {
            var b = Math.floor(a / 3600),
                c = a % 3600,
                d = Math.floor(c / 60),
                e = c % 60,
                g = Math.ceil(e);
            return d = d >= 10 ? d : "0" + d, g = g >= 10 ? g : "0" + g, isNaN(g) ? "00:00" : f.hasHours_bl ? b + ":" + d + ":" + g : d + ":" + g
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.ERROR = "error", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.SAFE_TO_SCRUBB = "safeToControll", b.LOAD_PROGRESS = "loadProgress", b.START = "start", b.PLAY = "play", b.PAUSE = "pause", b.STOP = "stop", b.PLAY_COMPLETE = "playComplete", b.START_TO_BUFFER = "startToBuffer", b.STOP_TO_BUFFER = "stopToBuffer", a.FWDRLR3DEVPVideoScreen = b
}(window),
function(a) {
    var b = function(a, c, d) {
        var e = this,
            f = b.prototype;
        this.nImg = a, this.sPath_str = c, this.dPath_str = d, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !e.isMobile_bl || e.hasPointerEvent_bl, e.init = function() {
            e.setupMainContainers()
        }, e.setupMainContainers = function() {
            if (e.n_sdo = new FWDRLR3DDisplayObject("img"), e.n_sdo.setScreen(e.nImg), e.addChild(e.n_sdo), e.allowToCreateSecondButton_bl) {
                var a = new Image;
                if (a.src = e.sPath_str, e.s_sdo = new FWDRLR3DDisplayObject("img"), e.s_sdo.setScreen(a), e.s_sdo.setWidth(e.totalWidth), e.s_sdo.setHeight(e.totalHeight), e.s_sdo.setAlpha(0), e.addChild(e.s_sdo), e.dPath_str) {
                    var b = new Image;
                    b.src = e.dPath_str, e.d_sdo = new FWDRLR3DDisplayObject("img"), e.d_sdo.setScreen(b), e.d_sdo.setWidth(e.totalWidth), e.d_sdo.setHeight(e.totalHeight), e.isMobile_bl ? e.d_sdo.setX(-100) : e.d_sdo.setAlpha(0), e.addChild(e.d_sdo)
                }
            }
            e.setWidth(e.totalWidth), e.setHeight(e.totalHeight), e.setButtonMode(!0), e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.addEventListener("pointerdown", e.onMouseUp), e.screen.addEventListener("pointerover", e.onMouseOver), e.screen.addEventListener("pointerout", e.onMouseOut)) : e.screen.addEventListener("touchend", e.onMouseUp) : e.screen.addEventListener ? (e.screen.addEventListener("mouseover", e.onMouseOver), e.screen.addEventListener("mouseout", e.onMouseOut), e.screen.addEventListener("mousedown", e.onMouseUp)) : e.screen.attachEvent && (e.screen.attachEvent("onmouseover", e.onMouseOver), e.screen.attachEvent("onmouseout", e.onMouseOut), e.screen.attachEvent("onmousedown", e.onMouseUp))
        }, e.onMouseOver = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                e.dispatchEvent(b.MOUSE_OVER, {
                    e: a
                }), FWDR3DCarModTweenMax.killTweensOf(e.s_sdo), FWDR3DCarModTweenMax.to(e.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        }, e.onMouseOut = function(a) {
            if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                e.dispatchEvent(b.MOUSE_OUT, {
                    e: a
                }), FWDR3DCarModTweenMax.killTweensOf(e.s_sdo), FWDR3DCarModTweenMax.to(e.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        }, e.onMouseUp = function(a) {
            a.preventDefault && a.preventDefault(), e.isDisabled_bl || 2 == a.button || e.isSelectedFinal_bl || e.dispatchEvent(b.MOUSE_UP, {
                e: a
            })
        }, e.setSelctedFinal = function() {
            e.isSelectedFinal_bl = !0, FWDR3DCarModTweenMax.killTweensOf(e.s_sdo), FWDR3DCarModTweenMax.to(e.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }), e.setButtonMode(!1)
        }, e.setUnselctedFinal = function() {
            e.isSelectedFinal_bl = !1, FWDR3DCarModTweenMax.to(e.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            }), e.setButtonMode(!0)
        }, this.setDisabledState = function() {
            e.isSetToDisabledState_bl || (e.isSetToDisabledState_bl = !0, e.isMobile_bl ? e.d_sdo.setX(0) : (FWDR3DCarModTweenMax.killTweensOf(e.d_sdo), FWDR3DCarModTweenMax.to(e.d_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            })))
        }, this.setEnabledState = function() {
            e.isSetToDisabledState_bl && (e.isSetToDisabledState_bl = !1, e.isMobile_bl ? e.d_sdo.setX(-100) : (FWDR3DCarModTweenMax.killTweensOf(e.d_sdo), FWDR3DCarModTweenMax.to(e.d_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })))
        }, this.disable = function() {
            e.isDisabled_bl = !0, e.setButtonMode(!1)
        }, this.enable = function() {
            e.isDisabled_bl = !1, e.setButtonMode(!0)
        }, e.destroy = function() {
            e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.removeEventListener("pointerdown", e.onMouseUp), e.screen.removeEventListener("pointerover", e.onMouseOver), e.screen.removeEventListener("pointerout", e.onMouseOut)) : e.screen.removeEventListener("touchend", e.onMouseUp) : e.screen.removeEventListener ? (e.screen.removeEventListener("mouseover", e.onMouseOver), e.screen.removeEventListener("mouseout", e.onMouseOut), e.screen.removeEventListener("mousedown", e.onMouseUp)) : e.screen.detachEvent && (e.screen.detachEvent("onmouseover", e.onMouseOver), e.screen.detachEvent("onmouseout", e.onMouseOut), e.screen.detachEvent("onmousedown", e.onMouseUp)), FWDR3DCarModTweenMax.killTweensOf(e.s_sdo), e.n_sdo.destroy(), e.s_sdo.destroy(), e.d_sdo && (FWDR3DCarModTweenMax.killTweensOf(e.d_sdo), e.d_sdo.destroy()), e.nImg = null, e.sImg = null, e.dImg = null, e.n_sdo = null, e.s_sdo = null, e.d_sdo = null, a = null, sImg = null, dImg = null, e.toolTipLabel_str = null, e.init = null, e.setupMainContainers = null, e.onMouseOver = null, e.onMouseOut = null, e.onClick = null, e.onMouseDown = null, e.setSelctedFinal = null, e.setUnselctedFinal = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
        }, e.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDRLR3DEVPVolumeButton = b
}(window),
function(a) {
    var b = function(c) {
        var d = this;
        b.prototype;
        this.appId = c;
        d.init = function() {
            d.checkFBRoot(), a.fbAsyncInit || d.connect()
        }, this.checkFBRoot = function() {
            var a = Boolean(document.getElementById("fb-root"));
            a || (a = document.createElement("div"), a.id = "fb-root", document.getElementsByTagName("body")[0].appendChild(a))
        }, this.connect = function() {
            d.hasStartedToConnect_bl || (d.hasStartedToConnect_bl = !0, d.isAPIReadyId_to = setTimeout(function() {
                d.dispatchEvent(b.API_ERROR, {
                    error: "Error loading Faceboook API!"
                })
            }, 6e3), a.fbAsyncInit = function() {
                FB.init({
                    appId: d.appId,
                    xfbml: !0,
                    cookie: !0,
                    status: !0,
                    version: "v2.4"
                }), clearTimeout(d.isAPIReadyId_to), d.dispatchEvent(b.API_READY)
            }, function(a, b, c) {
                var d, e = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "https://connect.facebook.net/en_US/sdk.js", e.parentNode.insertBefore(d, e))
            }(document, "script", "facebook-jssdk"))
        }, this.share = function(a, b, c) {
            c && b ? FB.ui({
                method: "feed",
                link: a,
                caption: c,
                picture: b
            }, function(a) {}) : c ? FB.ui({
                method: "feed",
                link: a,
                caption: c
            }, function(a) {}) : b ? FB.ui({
                method: "feed",
                link: a,
                picture: b
            }, function(a) {}) : FB.ui({
                method: "feed",
                link: a
            }, function(a) {})
        }, d.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DEventDispatcher
    }, b.prototype = null, b.API_READY = "facebookAPIReady", b.API_ERROR = "facebookAPIError", a.FWDRLR3DFacebookShare = b
}(window);
var FWDRLR3DFlashTest = function() {
    function n(a) {
        var b = k.pv,
            c = a.split(".");
        return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2]
    }
    var a = "undefined",
        b = "object",
        c = "Shockwave Flash",
        d = "ShockwaveFlash.ShockwaveFlash",
        e = "application/x-shockwave-flash",
        f = window,
        g = document,
        h = navigator,
        i = !1,
        k = function() {
            var j = typeof g.getElementById != a && typeof g.getElementsByTagName != a && typeof g.createElement != a,
                k = h.userAgent.toLowerCase(),
                l = h.platform.toLowerCase(),
                m = l ? /win/.test(l) : /win/.test(k),
                n = l ? /mac/.test(l) : /mac/.test(k),
                o = !!/webkit/.test(k) && parseFloat(k.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                p = !1,
                q = [0, 0, 0],
                r = null;
            if (typeof h.plugins != a && typeof h.plugins[c] == b) r = h.plugins[c].description, !r || typeof h.mimeTypes != a && h.mimeTypes[e] && !h.mimeTypes[e].enabledPlugin || (i = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof f.ActiveXObject != a) try {
                var s = new ActiveXObject(d);
                s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
            } catch (a) {}
            return {
                w3: j,
                pv: q,
                wk: o,
                ie: p,
                win: m,
                mac: n
            }
        }();
    return {
        hasFlashPlayerVersion: n
    }
}();
! function(a) {
    var b = function(c, d) {
        var e = this;
        b.prototype;
        this.screenToTest = c, this.hideDelay = d, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.hideCompleteId_to, this.hasInitialTestEvents_bl = !1, this.addSecondTestEvents_bl = !1, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isStopped_bl = !0, this.isHidden_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, e.init = function() {}, e.start = function() {
            e.currentTime = (new Date).getTime(), clearInterval(e.checkIntervalId_int), e.checkIntervalId_int = setInterval(e.update, 100), e.addMouseOrTouchCheck(), e.isStopped_bl = !1
        }, e.stop = function() {
            clearInterval(e.checkIntervalId_int), e.isStopped_bl = !0, e.removeMouseOrTouchCheck(), e.removeMouseOrTouchCheck2()
        }, e.addMouseOrTouchCheck = function() {
            e.hasInitialTestEvents_bl || (e.hasInitialTestEvents_bl = !0, e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screenToTest.screen.addEventListener("pointerdown", e.onMouseOrTouchUpdate), e.screenToTest.screen.addEventListener("pointermove", e.onMouseOrTouchUpdate)) : e.screenToTest.screen.addEventListener("touchstart", e.onMouseOrTouchUpdate) : a.addEventListener ? a.addEventListener("mousemove", e.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", e.onMouseOrTouchUpdate))
        }, e.removeMouseOrTouchCheck = function() {
            e.hasInitialTestEvents_bl && (e.hasInitialTestEvents_bl = !1, e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screenToTest.screen.removeEventListener("pointerdown", e.onMouseOrTouchUpdate), e.screenToTest.screen.removeEventListener("pointermove", e.onMouseOrTouchUpdate)) : e.screenToTest.screen.removeEventListener("touchstart", e.onMouseOrTouchUpdate) : a.removeEventListener ? a.removeEventListener("mousemove", e.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", e.onMouseOrTouchUpdate))
        }, e.addMouseOrTouchCheck2 = function() {
            e.addSecondTestEvents_bl || (e.addSecondTestEvents_bl = !0, e.screenToTest.screen.addEventListener ? e.screenToTest.screen.addEventListener("mousemove", e.secondTestMoveDummy) : e.screenToTest.screen.attachEvent && e.screenToTest.screen.attachEvent("onmousemove", e.secondTestMoveDummy))
        }, e.removeMouseOrTouchCheck2 = function() {
            e.addSecondTestEvents_bl && (e.addSecondTestEvents_bl = !1, e.screenToTest.screen.removeEventListener ? e.screenToTest.screen.removeEventListener("mousemove", e.secondTestMoveDummy) : e.screenToTest.screen.detachEvent && e.screenToTest.screen.detachEvent("onmousemove", e.secondTestMoveDummy))
        }, this.secondTestMoveDummy = function() {
            e.removeMouseOrTouchCheck2(), e.addMouseOrTouchCheck()
        }, e.onMouseOrTouchUpdate = function(a) {
            var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
            e.globalX != b.screenX && e.globalY != b.screenY && (e.currentTime = (new Date).getTime()), e.globalX = b.screenX, e.globalY = b.screenY, e.isMobile_bl || FWDRLR3DUtils.hitTest(e.screenToTest.screen, e.globalX, e.globalY) || (e.removeMouseOrTouchCheck(), e.addMouseOrTouchCheck2())
        }, e.update = function(a) {
            (new Date).getTime() > e.currentTime + e.hideDelay ? e.dispatchOnceShow_bl && (e.dispatchOnceHide_bl = !0, e.dispatchOnceShow_bl = !1, e.isHidden_bl = !0, e.dispatchEvent(b.HIDE), clearTimeout(e.hideCompleteId_to), e.hideCompleteId_to = setTimeout(function() {
                e.dispatchEvent(b.HIDE_COMPLETE)
            }, 1e3)) : e.dispatchOnceHide_bl && (clearTimeout(e.hideCompleteId_to), e.dispatchOnceHide_bl = !1, e.dispatchOnceShow_bl = !0, e.isHidden_bl = !1, e.dispatchEvent(b.SHOW))
        }, e.reset = function() {
            e.isHidden_bl = !1, clearTimeout(e.hideCompleteId_to), e.currentTime = (new Date).getTime(), e.dispatchEvent(b.SHOW)
        }, e.init()
    };
    b.HIDE = "hide", b.SHOW = "show", b.HIDE_COMPLETE = "hideComplete", b.setPrototype = function() {
        b.prototype = new FWDRLR3DEventDispatcher
    }, a.FWDRLR3DHider = b
}(window),
function(a) {
    var b = function(a, c) {
        var d = this;
        b.prototype;
        this.textHolder_do = null, this.img_do, this.warningIconPath_str = c, this.show_to = null, this.isShowed_bl = !1, this.isShowedOnce_bl = !1, this.allowToRemove_bl = !0, this.init = function() {
            d.setResizableSizeAfterParent(), d.getStyle().width = "80%", d.textHolder_do = new FWDRLR3DDisplayObject("div"), FWDRLR3DUtils.isIEAndLessThen9 || (d.textHolder_do.getStyle().font = "Arial"), d.textHolder_do.getStyle().wordWrap = "break-word", d.textHolder_do.getStyle().padding = "10px", d.textHolder_do.getStyle().paddingLeft = "42px", d.textHolder_do.getStyle().lineHeight = "18px", d.textHolder_do.setBkColor("#EEEEEE");
            var a = new Image;
            a.src = this.warningIconPath_str, this.img_do = new FWDRLR3DDisplayObject("img"), this.img_do.setScreen(a), this.img_do.setWidth(28), this.img_do.setHeight(28), d.addChild(d.textHolder_do), d.addChild(d.img_do)
        }, this.showText = function(a) {
            d.isShowedOnce_bl || (d.screen.addEventListener ? d.screen.addEventListener("click", d.closeWindow) : d.screen.attachEvent && d.screen.attachEvent("onclick", d.closeWindow), d.isShowedOnce_bl = !0), d.textHolder_do.setInnerHTML(a), clearTimeout(d.show_to), d.show()
        }, this.show = function() {
            d.isShowed_bl = !0, d.setVisible(!0), setTimeout(function() {
                d.positionAndResize()
            }, 60)
        }, this.positionAndResize = function() {
            d.setHeight(d.textHolder_do.getHeight()), d.img_do.setX(6), d.img_do.setY(parseInt((d.h - d.img_do.h) / 2))
        }, this.closeWindow = function() {
            if (d.allowToRemove_bl) {
                d.isShowed_bl = !1, clearTimeout(d.show_to);
                try {
                    a.main_do.removeChild(d)
                } catch (a) {}
            }
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div", "relative")
    }, b.prototype = null, a.FWDRLR3DInfo = b
}(window),
function(a) {
    var b = function(a, c, d, e, f, g) {
        var h = this;
        b.prototype;
        this.imageSource_img = a, this.image_sdo = null, this.segmentWidth = c, this.segmentHeight = d, this.totalSegments = e, this.animDelay = f || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !0, this.skipFirstFrame_bl = g, h.init = function() {
            h.getStyle().pointerEvents = "none", h.setWidth(h.segmentWidth), h.setHeight(h.segmentHeight), h.image_sdo = new FWDRLR3DDisplayObject("img"), h.image_sdo.setScreen(h.imageSource_img), h.image_sdo.hasTransform3d_bl = !1, h.image_sdo.hasTransform2d_bl = !1, h.addChild(h.image_sdo), h.hide(!1)
        }, h.start = function() {
            null != h && (clearInterval(h.delayTimerId_int), h.delayTimerId_int = setInterval(h.updatePreloader, h.animDelay))
        }, h.stop = function() {
            clearInterval(h.delayTimerId_int), h.image_sdo.setX(0)
        }, h.updatePreloader = function() {
            if (null != h) {
                h.count++, h.count > h.totalSegments - 1 && (h.skipFirstFrame_bl ? h.count = 1 : h.count = 0);
                var a = h.count * h.segmentWidth;
                h.image_sdo.setX(-a)
            }
        }, h.show = function() {
            h.setVisible(!0), h.start(), FWDR3DCarModTweenMax.killTweensOf(h), FWDR3DCarModTweenMax.to(h, .8, {
                alpha: 1,
                ease: Quart.easeOut
            }), h.isShowed_bl = !0
        }, h.hide = function(a) {
            h.isShowed_bl && (FWDR3DCarModTweenMax.killTweensOf(h), a ? FWDR3DCarModTweenMax.to(h, .8, {
                alpha: 0,
                onComplete: h.onHideComplete,
                ease: Quart.easeOut
            }) : (h.setVisible(!1), h.setAlpha(0)), h.isShowed_bl = !1)
        }, h.onHideComplete = function() {
            h.stop(), h.setVisible(!1), h.dispatchEvent(b.HIDE_COMPLETE)
        }, h.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDRLR3DPreloader = b
}(window),
function(a) {
    var b = function(a, c, d, e) {
        var f = this;
        b.prototype;
        this.nImg = a, this.sPath_str = c, this.dPath_str = d, this.buttonsHolder_do, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isShowed_bl = !0, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isDisabledForGood_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !f.isMobile_bl || f.hasPointerEvent_bl || e, f.init = function() {
            f.setupMainContainers()
        }, f.setupMainContainers = function() {
            if (f.buttonsHolder_do = new FWDRLR3DDisplayObject("div"), f.buttonsHolder_do.setOverflow("visible"), f.n_sdo = new FWDRLR3DDisplayObject("img"), f.n_sdo.setScreen(f.nImg), f.buttonsHolder_do.addChild(f.n_sdo), f.allowToCreateSecondButton_bl) {
                var a = new Image;
                if (a.src = f.sPath_str, f.s_sdo = new FWDRLR3DDisplayObject("img"), f.s_sdo.setScreen(a), f.s_sdo.setWidth(f.totalWidth), f.s_sdo.setHeight(f.totalHeight), f.s_sdo.setAlpha(0), f.buttonsHolder_do.addChild(f.s_sdo), f.dPath_str) {
                    var b = new Image;
                    b.src = f.dPath_str, f.d_sdo = new FWDRLR3DDisplayObject("img"), f.d_sdo.setScreen(b), f.d_sdo.setWidth(f.totalWidth), f.d_sdo.setHeight(f.totalHeight), f.d_sdo.setX(-100), f.buttonsHolder_do.addChild(f.d_sdo)
                }
            }
            f.setWidth(f.totalWidth), f.setHeight(f.totalHeight), f.setButtonMode(!0), f.screen.style.yellowOverlayPointerEvents = "none", f.addChild(f.buttonsHolder_do), f.isMobile_bl ? f.hasPointerEvent_bl ? (f.screen.addEventListener("pointerup", f.onMouseUp), f.screen.addEventListener("pointerover", f.onMouseOver), f.screen.addEventListener("pointerout", f.onMouseOut)) : f.screen.addEventListener("touchend", f.onMouseUp) : f.screen.addEventListener ? (f.screen.addEventListener("mouseover", f.onMouseOver), f.screen.addEventListener("mouseout", f.onMouseOut), f.screen.addEventListener("mouseup", f.onMouseUp)) : f.screen.attachEvent && (f.screen.attachEvent("onmouseover", f.onMouseOver), f.screen.attachEvent("onmouseout", f.onMouseOut), f.screen.attachEvent("onmouseup", f.onMouseUp))
        }, f.onMouseOver = function(a) {
            if (f.dispatchEvent(b.SHOW_TOOLTIP, {
                    e: a
                }), !(f.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                if (f.isDisabled_bl || f.isSelectedFinal_bl) return;
                f.dispatchEvent(b.MOUSE_OVER, {
                    e: a
                }), f.setSelectedState()
            }
        }, f.onMouseOut = function(a) {
            if (!(f.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                if (f.isDisabled_bl || f.isSelectedFinal_bl) return;
                f.dispatchEvent(b.MOUSE_OUT, {
                    e: a
                }), f.setNormalState()
            }
        }, f.onMouseUp = function(a) {
            f.isDisabledForGood_bl || (a.preventDefault && a.preventDefault(), f.isDisabled_bl || 2 == a.button || f.dispatchEvent(b.MOUSE_UP, {
                e: a
            }))
        }, f.setSelected = function() {
            f.isSelectedFinal_bl = !0, f.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(f.s_sdo), FWDR3DCarModTweenMax.to(f.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }))
        }, f.setUnselected = function() {
            f.isSelectedFinal_bl = !1, f.s_sdo && FWDR3DCarModTweenMax.to(f.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })
        }, this.setNormalState = function() {
            f.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(f.s_sdo), FWDR3DCarModTweenMax.to(f.s_sdo, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }))
        }, this.setSelectedState = function() {
            f.s_sdo && (FWDR3DCarModTweenMax.killTweensOf(f.s_sdo), FWDR3DCarModTweenMax.to(f.s_sdo, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }))
        }, this.setDisabledState = function() {
            f.isSetToDisabledState_bl || (f.isSetToDisabledState_bl = !0, f.d_sdo && f.d_sdo.setX(0))
        }, this.setEnabledState = function() {
            f.isSetToDisabledState_bl && (f.isSetToDisabledState_bl = !1, f.d_sdo && f.d_sdo.setX(-100))
        }, this.disable = function(a) {
            f.isDisabledForGood_bl || f.isDisabled_bl || (f.isDisabled_bl = !0, f.setButtonMode(!1), FWDR3DCarModTweenMax.to(f, .6, {
                alpha: .4
            }), a || f.setNormalState())
        }, this.enable = function() {
            !f.isDisabledForGood_bl && f.isDisabled_bl && (f.isDisabled_bl = !1, f.setButtonMode(!0), FWDR3DCarModTweenMax.to(f, .6, {
                alpha: 1
            }))
        }, this.disableForGood = function() {
            f.isDisabledForGood_bl = !0, f.setButtonMode(!1)
        }, this.showDisabledState = function() {
            0 != f.d_sdo.x && f.d_sdo.setX(0)
        }, this.hideDisabledState = function() {
            f.d_sdo.x != -100 && f.d_sdo.setX(-100)
        }, this.show = function() {
            f.isShowed_bl || (f.isShowed_bl = !0, FWDR3DCarModTweenMax.killTweensOf(f), FWDRLR3DUtils.isIEAndLessThen9 ? FWDRLR3DUtils.isIEAndLessThen9 ? f.setVisible(!0) : (f.setAlpha(0), FWDR3DCarModTweenMax.to(f, .4, {
                alpha: 1,
                delay: .4
            }), f.setVisible(!0)) : FWDRLR3DUtils.isIEWebKit ? (FWDR3DCarModTweenMax.killTweensOf(f.n_sdo), f.n_sdo.setScale2(0), FWDR3DCarModTweenMax.to(f.n_sdo, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    f.setVisible(!0)
                },
                ease: Elastic.easeOut
            })) : (f.setScale2(0), FWDR3DCarModTweenMax.to(f, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    f.setVisible(!0)
                },
                ease: Elastic.easeOut
            })))
        }, this.hide = function(a) {
            f.isShowed_bl && (f.isShowed_bl = !1, FWDR3DCarModTweenMax.killTweensOf(f), FWDR3DCarModTweenMax.killTweensOf(f.n_sdo), f.setVisible(!1))
        }, f.init()
    };
    b.setPrototype = function(a) {
        b.prototype = null, a ? b.prototype = new FWDRLR3DTransformDisplayObject("div") : b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.SHOW_TOOLTIP = "showTooltip", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDRLR3DSimpleButton = b
}(window),
function(a) {
    var b = function(a, c, d, e, f) {
        var g = this;
        b.prototype;
        this.imageSource_img = a, this.image_do = null, this.tweenObj = {
            currentPos: 0
        }, this.segmentWidth = c, this.segmentHeight = d, this.totalSegments = e, this.duration = f / 1e3, this.delayTimerId_int, g.init = function() {
            g.setWidth(g.segmentWidth), g.setHeight(g.segmentHeight), g.image_do = new FWDRLR3DDisplayObject("img"), g.image_do.setScreen(g.imageSource_img), g.addChild(g.image_do), g.onUpdateHandler()
        }, g.animShow = function() {
            FWDR3DCarModTweenMax.killTweensOf(g.tweenObj), g.currentPos = 0, FWDR3DCarModTweenMax.to(g.tweenObj, g.duration, {
                currentPos: 1,
                ease: Linear.easeNone,
                onUpdate: g.onUpdateHandler
            })
        }, g.animHide = function() {
            FWDR3DCarModTweenMax.killTweensOf(g.tweenObj), FWDR3DCarModTweenMax.to(g.tweenObj, .8, {
                currentPos: 0,
                onUpdate: g.onUpdateHandler
            })
        }, g.animReset = function() {
            FWDR3DCarModTweenMax.killTweensOf(g.tweenObj), g.tweenObj.currentPos = 0, g.onUpdateHandler()
        }, g.onUpdateHandler = function() {
            var a = Math.round(g.tweenObj.currentPos / 1 * (g.totalSegments - 1)) * g.segmentWidth;
            g.image_do.setX(-a)
        }, g.show = function() {
            g.setVisible(!0), "opacity" == g.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(g.image_do), FWDR3DCarModTweenMax.to(g.image_do, 1, {
                alpha: 1
            })) : g.setWidth(g.segmentWidth)
        }, g.hide = function(a) {
            a ? "opacity" == g.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(g.image_do), FWDR3DCarModTweenMax.to(g.image_do, 1, {
                alpha: 0,
                onComplete: hideCompleteHandler
            })) : g.setWidth(0) : (g.setVisible(!1), "opacity" == g.opacityType ? (FWDR3DCarModTweenMax.killTweensOf(g.image_do), g.image_do.setAlpha(0)) : g.setWidth(0))
        }, g.hideCompleteHandler = function() {
            g.setVisible(!1)
        }, g.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.prototype = null, a.FWDRLR3DSlideShowPreloader = b
}(window),
function(a) {
    var b = function(c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        var q = this,
            r = b.prototype;
        this.background_do = null, this.image_do = null, this.overlay_do = null, this.icon_do = null, this.iconImg_img = null, this.borderNormalColor_str = j || data.thumbnailBorderNormalColor_str, this.borderSelectedColor_str = k || data.thumbnailBorderSelectedColor_str, this.thumbnailsOverlayColor_str = l, this.iconPath_str = n, this.thumbnailsHoverEffect_str = m, this.id = d, this.borderSize = g, this.borderRadius = h, this.thumbnailH = e, this.thumbnailsOffsetBottom = f, this.overlayOpacity = i,
            this.isSelected_bl = !0, this.isDisabled_bl = !1, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.showOverlay_bl = o, this.isMobile_bl && (this.showOverlay_bl = !1), this.showIcon_bl = p, this.isMobile_bl && (this.showIcon_bl = !1), q.init = function() {
                q.setButtonMode(!0), q.setupScreen()
            }, q.setupScreen = function() {
                q.background_do = new FWDRLR3DDisplayObject("div"), q.borderRadius && (q.getStyle().borderRadius = q.borderRadius + "px"), q.setNormalState(!1), 0 != q.borderRadius && (q.background_do.getStyle().borderRadius = q.borderRadius + "px"), q.addChild(q.background_do)
            }, q.setImage = function(a) {
                q.image_do = new FWDRLR3DDisplayObject("img"), q.image_do.setScreen(a);
                var b = a.width,
                    d = a.height,
                    e = q.thumbnailH - 2 * q.borderSize,
                    f = e / d,
                    g = parseInt(e + 2 * q.borderSize),
                    h = parseInt(b * f + 2 * q.borderSize);
                q.background_do && (q.background_do.setWidth(h), q.background_do.setHeight(g)), q.image_do.setX(q.borderSize), q.image_do.setY(q.borderSize), q.image_do.setWidth(parseInt(h - 2 * q.borderSize)), q.image_do.setHeight(e), q.setWidth(h), q.setHeight(g), q.isMobile_bl ? (q.hasPointerEvent_bl && q.screen.addEventListener("pointerup", q.onMouseClickHandler), q.screen.addEventListener("click", q.onMouseClickHandler)) : q.screen.addEventListener ? (q.screen.addEventListener("mouseover", q.onMouseOverHandler), q.screen.addEventListener("click", q.onMouseClickHandler)) : q.screen.attachEvent && (q.screen.attachEvent("onmouseover", q.onMouseOverHandler), q.screen.attachEvent("onclick", q.onMouseClickHandler)), q.addChild(q.image_do), q.isMobile_bl || (q.showOverlay_bl && (q.overlay_do = new FWDRLR3DDisplayObject("div"), q.overlay_do.setX(q.borderSize), q.overlay_do.setY(q.borderSize), q.overlay_do.setWidth(h - 2 * q.borderSize), q.overlay_do.setHeight(g - 2 * q.borderSize), q.overlay_do.setBkColor(this.thumbnailsOverlayColor_str), q.addChild(q.overlay_do), setTimeout(function() {
                    q && q.overlay_do.setAlpha(0)
                }, 50)), q.showIcon_bl && (q.icon_do = new FWDRLR3DTransformDisplayObject("img"), q.iconImg_img = new Image, q.iconImg_img.onload = function() {
                    q.icon_do.setScreen(q.iconImg_img), q.icon_do.setX(parseInt((h - q.icon_do.w) / 2)), q.icon_do.setY(parseInt((g - q.icon_do.h) / 2)), q.addChild(q.icon_do), setTimeout(function() {
                        q && q.icon_do.setAlpha(0)
                    }, 50)
                }, q.iconImg_img.src = q.iconPath_str)), q.hide(!1), q.show(!0), c.id == q.id && q.disable()
            }, q.onMouseOverHandler = function(a) {
                q.dispatchEvent(b.HOVER), q.isDisabled_bl || (a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || q.setSelectedState(!0), q.startToCheckTest())
            }, q.startToCheckTest = function() {
                a.addEventListener ? a.addEventListener("mousemove", q.checkHitTest) : document.attachEvent && (document.detachEvent("onmousemove", q.checkHitTest), document.attachEvent("onmousemove", q.checkHitTest))
            }, q.stopToCheckTest = function() {
                a.removeEventListener ? a.removeEventListener("mousemove", q.checkHitTest) : document.detachEvent && document.detachEvent("onmousemove", q.checkHitTest)
            }, q.checkHitTest = function(a) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a);
                FWDRLR3DUtils.hitTest(q.screen, b.screenX, b.screenY) || (q.onMouseOutHandler(a), q.stopToCheckTest())
            }, q.onMouseOutHandler = function(a) {
                q.isDisabled_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE || q.setNormalState(!0)
            }, q.onMouseClickHandler = function(a) {
                q.isDisabled_bl || q.dispatchEvent(b.CLICK, {
                    id: q.id
                })
            }, q.setNormalState = function(a) {
                q.isSelected_bl && (q.isSelected_bl = !1, FWDR3DCarModTweenMax.killTweensOf(q.background_do.screen), q.overlay_do && q.showOverlay_bl && FWDR3DCarModTweenMax.to(q.overlay_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), q.icon_do && q.showIcon_bl && (FWDR3DCarModTweenMax.killTweensOf(q.icon_do), q.icon_do.hasTransform2d_bl && "scale" == q.thumbnailsHoverEffect_str ? FWDR3DCarModTweenMax.to(q.icon_do, .5, {
                    scale: 1,
                    alpha: 0,
                    ease: Expo.easeOut
                }) : FWDR3DCarModTweenMax.to(q.icon_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })), a ? 0 != q.borderSize && FWDR3DCarModTweenMax.to(q.background_do.screen, .8, {
                    css: {
                        backgroundColor: q.borderNormalColor_str
                    },
                    ease: Expo.easeOut
                }) : 0 != q.borderSize && (q.background_do.getStyle().backgroundColor = q.borderNormalColor_str))
            }, q.setSelectedState = function(a) {
                q.isSelected_bl || (q.isSelected_bl = !0, q.overlay_do && q.showOverlay_bl && FWDR3DCarModTweenMax.to(q.overlay_do, .8, {
                    alpha: q.overlayOpacity,
                    ease: Expo.easeOut
                }), q.icon_do && q.showIcon_bl && (FWDR3DCarModTweenMax.killTweensOf(q.icon_do), q.icon_do.hasTransform2d_bl && "scale" == q.thumbnailsHoverEffect_str ? (q.icon_do.setAlpha(0), q.icon_do.setScale2(3), FWDR3DCarModTweenMax.to(q.icon_do, .5, {
                    scale: 1,
                    alpha: 1,
                    ease: Expo.easeInOut
                })) : FWDR3DCarModTweenMax.to(q.icon_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })), a ? 0 != q.borderSize && FWDR3DCarModTweenMax.to(q.background_do.screen, .8, {
                    css: {
                        backgroundColor: q.borderSelectedColor_str
                    },
                    ease: Expo.easeOut
                }) : 0 != q.borderSize && (q.background_do.getStyle().backgroundColor = q.borderSelectedColor_str))
            }, q.show = function(a) {
                FWDR3DCarModTweenMax.killTweensOf(q), a ? FWDR3DCarModTweenMax.to(q, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : q.setY(0)
            }, q.hide = function(a) {
                FWDR3DCarModTweenMax.killTweensOf(q), a ? FWDR3DCarModTweenMax.to(q, .8, {
                    y: q.thumbnailsOffsetBottom + q.thumbnailH + 2
                }) : q.setY(q.thumbnailsOffsetBottom + q.thumbnailH + 2)
            }, q.enable = function() {
                q.isDisabled_bl && (q.isDisabled_bl = !1, FWDR3DCarModTweenMax.to(q.background_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), q.icon_do && FWDR3DCarModTweenMax.to(q.icon_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), q.image_do && FWDR3DCarModTweenMax.to(q.image_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), q.overlay_do && FWDR3DCarModTweenMax.to(q.overlay_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), q.setNormalState(!0), q.setButtonMode(!0))
            }, q.disable = function() {
                q.isDisabled_bl = !0, FWDR3DCarModTweenMax.to(q.background_do, .8, {
                    alpha: .4,
                    ease: Quint.easeOut
                }), q.setSelectedState(!0), q.icon_do && FWDR3DCarModTweenMax.to(q.icon_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), q.image_do && FWDR3DCarModTweenMax.to(q.image_do, .8, {
                    alpha: .4,
                    ease: Quint.easeOut
                }), q.overlay_do && FWDR3DCarModTweenMax.to(q.overlay_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), q.stopToCheckTest(), q.setButtonMode(!1)
            }, q.destroy = function() {
                q.iconImg_img && (q.iconImg_img.onload = null, q.iconImg_img.onerror = null), FWDR3DCarModTweenMax.killTweensOf(q.background_do), q.background_do.destroy(), q.image_do && (FWDR3DCarModTweenMax.killTweensOf(q.image_do), q.image_do.destroy()), q.overlay_do && (FWDR3DCarModTweenMax.killTweensOf(q.overlay_do), q.overlay_do.destroy()), q.icon_do && (FWDR3DCarModTweenMax.killTweensOf(q.icon_do), q.icon_do.destroy()), q.isMobile_bl ? q.hasPointerEvent_bl ? (q.screen.removeEventListener("pointerover", q.onMouseOverHandler), q.screen.removeEventListener("pointerup", q.onMouseClickHandler)) : q.screen.removeEventListener("touchend", q.onMouseClickHandler) : q.screen.removeEventListener ? (q.screen.removeEventListener("mouseover", q.onMouseOverHandler), q.screen.removeEventListener("click", q.onMouseClickHandler), a.removeEventListener("mousemove", q.checkHitTest)) : q.screen.detachEvent && (q.screen.detachEvent("onmouseover", q.onMouseOverHandler), q.screen.detachEvent("onclick", q.onMouseClickHandler), document.detachEvent("onmousemove", q.checkHitTest)), q.iconImg_img = null, q.background_do = null, q.image_do = null, q.overlay_do = null, q.icon_do = null, q.setInnerHTML(""), r.destroy(), r = null, q = null, b.prototype = null
            }, q.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div")
    }, b.HOVER = "onHover", b.CLICK = "onClick", b.IFRAME = "iframe", b.IMAGE = "image", b.FLASH = "flash", b.AUDIO = "audio", b.VIDEO = "video", b.VIMEO = "vimeo", b.YOUTUBE = "youtube", b.MAPS = "maps", b.AJAX = "ajax", b.HTML = "html", b.prototype = null, a.FWDRLR3DThumb = b
}(window),
function(a) {
    var b = function(c) {
        var d = this;
        b.prototype;
        this.playlist_ar = null, this.thumbs_ar = null, this.mainHolder_do = null, this.thumbnailsHolder_do = null, this.thumbnailsBorderNormalColor_str = c.thumbnailsBorderNormalColor_str, this.thumbnailsBorderSelectedColor_str = c.thumbnailsBorderSelectedColor_str, this.thumbnailsOverlayColor_str = c.thumbnailsOverlayColor_str, this.thumbnailsHoverEffect_str = c.thumbnailsHoverEffect_str, this.stageWidth = 0, this.stageHeight = c.thumbnailH, this.thumbnailsBorderSize = c.thumbnailsBorderSize, this.thumbnailsBorderRadius = c.thumbnailsBorderRadius, this.thumbnailsOffsetBottom = c.thumbnailsOffsetBottom, this.thumbnailH = c.thumbnailH - this.thumbnailsOffsetBottom, this.spaceBetweenThumbnails = c.spaceBetweenThumbnails, this.totalW = 0, this.spaceBetweenThumbnails = c.spaceBetweenThumbnails, this.thumbnailsOverlayOpacity = c.thumbnailsOverlayOpacity, this.vx = 0, this.vx2 = 0, this.friction = .9, this.lastPresedX = 0, this.totalThumbnails = 0, this.countLoadedThumbs = 0, this.id = 0, this.loadWithDelayId_to, this.disableOnMoveId_to, this.updateMobileScrollBarId_int, this.showThumbnailsOverlay_bl = c.showThumbnailsOverlay_bl, this.showThumbnailsSmallIcon_bl = c.showThumbnailsSmallIcon_bl, this.areThumbnailTouched_bl = !1, this.isScrolling_bl = !1, this.isShowed_bl = !1, this.areButtonsPositioned_bl = !1, this.areThumbnailsCreated_bl = !1, this.hasSupportForDesktopScroll_bl = !1, this.isMobile_bl = FWDRLR3DUtils.isMobile, this.hasPointerEvent_bl = FWDRLR3DUtils.hasPointerEvent, d.init = function() {
            d.setOverflow("visible"), d.mainHolder_do = new FWDRLR3DDisplayObject("div"), d.mainHolder_do.setOverflow("visible"), d.thumbnailsHolder_do = new FWDRLR3DDisplayObject("div"), d.thumbnailsHolder_do.setOverflow("visible"), d.mainHolder_do.addChild(d.thumbnailsHolder_do), d.addChild(d.mainHolder_do)
        }, d.positionAndResize = function() {
            d.areButtonsPositioned_bl = !1, d.stageWidth = c.stageWidth, d.setY(c.stageHeight), d.mainHolder_do.setWidth(d.stageWidth), d.mainHolder_do.setHeight(d.stageHeight), d.areThumbnailsCreated_bl && d.positionThumbnails(!1)
        }, d.setupThumbnails = function() {
            d.areThumbnailsCreated_bl = !0, d.areButtonsPositioned_bl = !1, d.thumbs_ar = [], d.playlist_ar = c.playlist_ar, d.totalThumbnails = d.playlist_ar.length, d.countLoadedThumbs = 0, d.loadThumbnails(), d.isMobile_bl && d.addMobileScrollSupport()
        }, d.loadThumbnails = function() {
            d.countLoadedThumbs > d.totalThumbnails - 1 || (d.image_img = new Image, d.image_img.onload = d.onThumbnailLoadComplete, d.image_img.src = d.playlist_ar[d.countLoadedThumbs].thumbnailPath_str)
        }, d.onThumbnailLoadComplete = function(a) {
            var e, b = c.playlist_ar[d.countLoadedThumbs].iconType_str;
            b == FWDRLR3DThumb.IMAGE ? e = c.data.imageIconPath_str : b == FWDRLR3DThumb.FLASH ? e = c.data.flashIconPath_str : b == FWDRLR3DThumb.AUDIO ? e = c.data.audioIconPath_str : b == FWDRLR3DThumb.VIDEO ? e = c.data.videoIconPath_str : b == FWDRLR3DThumb.VIMEO ? e = c.data.vimeoIconPath_str : b == FWDRLR3DThumb.YOUTUBE ? e = c.data.youtubeIconPath_str : b == FWDRLR3DThumb.MAPS ? e = c.data.mapsIconPath_str : b == FWDRLR3DThumb.AJAX ? e = c.data.ajaxIconPath_str : b == FWDRLR3DThumb.HTML ? e = c.data.htmlIconPath_str : b == FWDRLR3DThumb.IFRAME && (e = c.data.iframeIconPath_str), FWDRLR3DThumb.setPrototype();
            var f = new FWDRLR3DThumb(d, d.countLoadedThumbs, d.thumbnailH, d.thumbnailsOffsetBottom, d.thumbnailsBorderSize, d.thumbnailsBorderRadius, d.thumbnailsOverlayOpacity, d.thumbnailsBorderNormalColor_str, d.thumbnailsBorderSelectedColor_str, d.thumbnailsOverlayColor_str, d.thumbnailsHoverEffect_str, e, d.showThumbnailsOverlay_bl, d.showThumbnailsSmallIcon_bl);
            d.thumbs_ar[d.countLoadedThumbs] = f, f.addListener(FWDRLR3DThumb.HOVER, d.thumbHoverHandler), f.addListener(FWDRLR3DThumb.CLICK, d.thumbClickHandler), f.setImage(d.image_img), d.totalW += f.w + d.spaceBetweenThumbnails, d.countLoadedThumbs == d.totalThumbnails - 1 && (d.totalW -= d.spaceBetweenThumbnails), 0 != d.countLoadedThumbs && f.setX(d.thumbs_ar[d.countLoadedThumbs - 1].x + d.thumbs_ar[d.countLoadedThumbs - 1].w + d.spaceBetweenThumbnails), 0 == d.countLoadedThumbs && d.thumbnailsHolder_do.setX(parseInt(d.stageWidth - f.w) / 2), d.thumbnailsHolder_do.addChild(f), d.isScrolling_bl || d.areThumbnailTouched_bl || d.positionThumbnails(!0), d.totalW > c.stageWidth && !d.areButtonsPositioned_bl && c.buttonsAlignment_str != FWDRLR3D.BUTTONS_IN && (c.positionButtons(!0), d.areButtonsPositioned_bl = !0), d.countLoadedThumbs++, d.loadWithDelayId_to = setTimeout(d.loadThumbnails, 100)
        }, d.stopToLoadThumbanils = function() {
            d.image_img && (d.image_img.onload = null, d.image_img.onerror = null, d.image_img.src = "", d.image_img = null), clearTimeout(d.loadWithDelayId_to)
        }, d.thumbClickHandler = function(a) {
            c.isShowed_bl && d.dispatchEvent(FWDRLR3DThumb.CLICK, {
                id: a.id
            })
        }, d.thumbHoverHandler = function() {
            c.isShowed_bl && d.addDesktopScrollSupport()
        }, d.positionThumbnails = function(a) {
            if (!(!d.areThumbnailsCreated_bl && c.showThumbnails_bl || d.isScrolling_bl)) {
                d.finalX;
                var b = d.thumbs_ar[d.id],
                    e = d.thumbs_ar[d.thumbs_ar.length - 1];
                d.totalW <= d.stageWidth ? d.finalX = parseInt((d.stageWidth - d.totalW) / 2) : (b ? d.finalX = parseInt(-b.x + (d.stageWidth - b.w) / 2) : d.finalX = parseInt(-e.x + (d.stageWidth - e.w) / 2), d.finalX > 0 ? d.finalX = 0 : d.finalX < d.stageWidth - d.totalW && (d.finalX = d.stageWidth - d.totalW)), FWDR3DCarModTweenMax.killTweensOf(d.thumbnailsHolder_do), a ? FWDR3DCarModTweenMax.to(d.thumbnailsHolder_do, .7, {
                    x: d.finalX,
                    ease: Expo.easeOut
                }) : d.thumbnailsHolder_do.setX(d.finalX)
            }
        }, d.addMobileScrollSupport = function() {
            d.hasPointerEvent_bl ? d.mainHolder_do.screen.addEventListener("pointerdown", d.scrollBarTouchStartHandler) : d.mainHolder_do.screen.addEventListener("touchstart", d.scrollBarTouchStartHandler), d.mainHolder_do.screen.addEventListener("mousedown", d.scrollBarTouchStartHandler), d.updateMobileScrollBarId_int = setInterval(d.updateMobileScrollBar, 16)
        }, d.removeMobileScrollSupport = function() {
            d.hasPointerEvent_bl ? (d.mainHolder_do.screen.removeEventListener("pointerdown", d.scrollBarTouchStartHandler), a.removeEventListener("pointerup", d.scrollBarTouchEndHandler), a.removeEventListener("pointermove", d.scrollBarTouchMoveHandler)) : (d.mainHolder_do.screen.removeEventListener("touchstart", d.scrollBarTouchStartHandler), a.removeEventListener("touchend", d.scrollBarTouchEndHandler), a.removeEventListener("touchmove", d.scrollBarTouchMoveHandler)), clearInterval(d.updateMobileScrollBarId_int), clearInterval(d.updateMoveMobileScrollbarId_int)
        }, d.scrollBarTouchStartHandler = function(b) {
            if (!(d.stageWidth > d.totalW)) {
                var c = FWDRLR3DUtils.getViewportMouseCoordinates(b);
                d.areThumbnailTouched_bl = !0, FWDR3DCarModTweenMax.killTweensOf(d.thumbnailsHolder_do), d.isScrolling_bl = !0, d.finalX = d.thumbnailsHolder_do.x, d.lastPresedX = c.screenX, d.hasPointerEvent_bl ? (a.addEventListener("pointerup", d.scrollBarTouchEndHandler), a.addEventListener("pointermove", d.scrollBarTouchMoveHandler)) : (a.addEventListener("touchend", d.scrollBarTouchEndHandler), a.addEventListener("touchmove", d.scrollBarTouchMoveHandler)), clearInterval(d.updateMoveMobileScrollbarId_int), d.updateMoveMobileScrollbarId_int = setInterval(d.updateMoveMobileScrollbar, 16)
            }
        }, d.scrollBarTouchMoveHandler = function(a) {
            if (a.preventDefault && a.preventDefault(), !(d.stageWidth > d.totalW)) {
                var b = FWDRLR3DUtils.getViewportMouseCoordinates(a),
                    e = b.screenX - d.lastPresedX;
                d.finalX += e, d.finalX = Math.round(d.finalX), d.lastPresedX = b.screenX, d.vx = 2 * e, c.showDisable()
            }
        }, d.scrollBarTouchEndHandler = function(b) {
            d.isScrolling_bl = !1, c.hider.globalY < c.stageHeight - d.stageHeight && (d.areThumbnailTouched_bl = !1), clearInterval(d.updateMoveMobileScrollbarId_int), clearTimeout(d.disableOnMoveId_to), d.disableOnMoveId_to = setTimeout(function() {
                c.hideDisable()
            }, 100), d.hasPointerEvent_bl ? (a.removeEventListener("pointerup", d.scrollBarTouchEndHandler), a.removeEventListener("pointermove", d.scrollBarTouchMoveHandler)) : (a.removeEventListener("touchend", d.scrollBarTouchEndHandler), a.removeEventListener("touchmove", d.scrollBarTouchMoveHandler))
        }, d.updateMoveMobileScrollbar = function() {
            d.thumbnailsHolder_do.setX(d.finalX)
        }, d.updateMobileScrollBar = function(a) {
            d.stageWidth > d.totalW || d.finalX == d.prevX || d.isScrolling_bl || (d.vx *= d.friction, d.finalX += d.vx, d.finalX > 0 ? (d.vx2 = .3 * (0 - d.finalX), d.vx *= d.friction, d.finalX += d.vx2) : d.finalX < d.stageWidth - d.totalW && (d.vx2 = .3 * (d.stageWidth - d.totalW - d.finalX), d.vx *= d.friction, d.finalX += d.vx2), d.finalX = Math.round(d.finalX), d.prevX = d.thumbnailsHolder_do.x, FWDR3DCarModTweenMax.killTweensOf(d.thumbnailsHolder_do), FWDR3DCarModTweenMax.to(d.thumbnailsHolder_do, .3, {
                x: d.finalX,
                ease: Expo.easeOut
            }))
        }, d.addDesktopScrollSupport = function() {
            d.hasSupportForDesktopScroll_bl || d.totalW < d.stageWidth || (d.hasSupportForDesktopScroll_bl = !0, d.isScrolling_bl = !0, a.addEventListener ? a.addEventListener("mousemove", d.checkHitTest) : document.attachEvent && (document.detachEvent("onmousemove", d.checkHitTest), document.attachEvent("onmousemove", d.checkHitTest)))
        }, d.removeDesktopScrollSupport = function() {
            d.hasSupportForDesktopScroll_bl && (d.hasSupportForDesktopScroll_bl = !1, a.removeEventListener ? a.removeEventListener("mousemove", d.checkHitTest) : document.detachEvent && document.detachEvent("onmousemove", d.checkHitTest))
        }, d.checkHitTest = function(a) {
            FWDRLR3DUtils.getViewportMouseCoordinates(a);
            d.scrollOnDesktop(), c.hider.globalY < c.stageHeight - d.stageHeight && (d.isScrolling_bl = !1, d.removeDesktopScrollSupport(), d.positionThumbnails(!0))
        }, d.scrollOnDesktop = function() {
            var a = (c.hider.globalX - 100) / (d.stageWidth - 200);
            a < 0 ? a = 0 : a > 1 && (a = 1), d.finalX = parseInt((d.stageWidth - d.totalW) * a), FWDR3DCarModTweenMax.killTweensOf(d.thumbnailsHolder_do), FWDR3DCarModTweenMax.to(d.thumbnailsHolder_do, .4, {
                x: d.finalX,
                ease: Expo.easeOut
            })
        }, d.disableOrEnableThumbnails = function() {
            if (d.id = c.id, d.thumbs_ar) {
                for (var a, b = d.thumbs_ar.length, e = 0; e < b; e++) a = d.thumbs_ar[e], e == c.id ? a.disable() : a.enable();
                d.positionThumbnails(!0)
            }
        }, d.destoryThumbnails = function() {
            if (d.areThumbnailsCreated_bl || d.thumbs_ar) {
                d.areThumbnailsCreated_bl = !1, d.areThumbnailTouched_bl = !1;
                for (var a, b = d.thumbs_ar.length, c = 0; c < b; c++) a = d.thumbs_ar[c], FWDR3DCarModTweenMax.killTweensOf(a), d.thumbnailsHolder_do.removeChild(a), a.destroy();
                d.thumbs_ar = null, d.totalW = 0, d.stopToLoadThumbanils(), d.removeDesktopScrollSupport(), d.isMobile_bl && d.removeMobileScrollSupport()
            }
        }, d.show = function(a) {
            d.isShowed_bl = !0, FWDR3DCarModTweenMax.killTweensOf(d.mainHolder_do), a ? FWDR3DCarModTweenMax.to(d.mainHolder_do, .8, {
                y: -d.stageHeight,
                ease: Expo.easeInOut
            }) : d.mainHolder_do.setY(-d.stageHeight)
        }, d.hide = function(a) {
            d.isShowed_bl = !1, FWDR3DCarModTweenMax.killTweensOf(d.mainHolder_do), a ? FWDR3DCarModTweenMax.to(d.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : d.mainHolder_do.setY(0)
        }, d.hideForGood = function() {
            d.mainHolder_do.setY(-5e3)
        }, d.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDRLR3DDisplayObject("div", "relative")
    }, b.prototype = null, a.FWDRLR3DThumbnailsManager = b
}(window),
function(a) {
    var b = function(a) {
        var c = this;
        b.prototype;
        this.timeOutId, this.delay = a, this.isStopped_bl = !0, c.stop = function() {
            c.isStopped_bl || (c.pause(), c.isStopped_bl = !0, c.dispatchEvent(b.STOP))
        }, c.start = function() {
            c.isStopped_bl && (c.isStopped_bl = !1, c.timeOutId = setTimeout(c.onTimeHanlder, c.delay), c.dispatchEvent(b.START))
        }, c.pause = function() {
            c.isStopped_bl || (clearTimeout(c.timeOutId), c.dispatchEvent(b.PAUSE))
        }, c.resume = function() {
            c.isStopped_bl || (clearTimeout(c.timeOutId), c.timeOutId = setTimeout(c.onTimeHanlder, c.delay), c.dispatchEvent(b.RESUME))
        }, c.onTimeHanlder = function() {
            c.dispatchEvent(b.TIME)
        }
    };
    b.setProtptype = function() {
        b.prototype = new FWDRLR3DEventDispatcher
    }, b.START = "start", b.STOP = "stop", b.RESUME = "resume", b.PAUSE = "pause", b.TIME = "time", b.prototype = null, a.FWDRLR3DTimerManager = b
}(window),
function(a) {
    var b = function(a, b, c, d) {
        this.listeners = {
            events_ar: []
        };
        var e = this;
        if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
        this.type = a, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform2d_bl = FWDRLR3DUtils.hasTransform2d, this.init = function() {
            this.setScreen()
        }, this.getTransform = function() {
            for (var b, a = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; b = a.shift();)
                if ("undefined" != typeof this.screen.style[b]) return b;
            return !1
        }, this.getOpacityType = function() {
            var a;
            return a = "undefined" != typeof this.screen.style.opacity ? "opacity" : "filter"
        }, this.setScreen = function(a) {
            "img" == this.type && a ? (this.screen = a, this.setMainProperties()) : (this.screen = document.createElement(this.type), this.setMainProperties())
        }, this.setMainProperties = function() {
            this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed", e.screen.style.transition = "none", e.screen.style.webkitTransition = "none", e.screen.style.MozTransition = "none", e.screen.style.OTransition = "none", "img" == a && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function(a) {
                return !1
            })
        }, e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
        }, e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden"
        }, this.setSelectable = function(a) {
            if (!a) {
                try {
                    this.screen.style.userSelect = "none"
                } catch (a) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch (a) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch (a) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch (a) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch (a) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch (a) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch (a) {}
                this.screen.ondragstart = function(a) {
                    return !1
                }, this.screen.onselectstart = function() {
                    return !1
                }, this.screen.style.webkitTouchCallout = "none"
            }
        }, this.getScreen = function() {
            return e.screen
        }, this.setVisible = function(a) {
            this.visible = a, 1 == this.visible ? this.screen.style.visibility = "visible" : this.screen.style.visibility = "hidden"
        }, this.getVisible = function() {
            return this.visible
        }, this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%", this.screen.style.height = "100%"
        }, this.getStyle = function() {
            return this.screen.style
        }, this.setOverflow = function(a) {
            e.overflow = a, e.screen.style.overflow = e.overflow
        }, this.setPosition = function(a) {
            e.position = a, e.screen.style.position = e.position
        }, this.setDisplay = function(a) {
            this.display = a, this.screen.style.display = this.display
        }, this.setButtonMode = function(a) {
            this.buttonMode = a, 1 == this.buttonMode ? this.screen.style.cursor = "pointer" : this.screen.style.cursor = "default"
        }, this.setBkColor = function(a) {
            e.screen.style.backgroundColor = a
        }, this.setInnerHTML = function(a) {
            e.innerHTML = a, e.screen.innerHTML = e.innerHTML
        }, this.getInnerHTML = function() {
            return e.innerHTML
        }, this.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, this.setAlpha = function(a) {
            e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
        }, this.getAlpha = function() {
            return e.alpha
        }, this.getRect = function() {
            return this.screen.getBoundingClientRect()
        }, this.getGlobalX = function() {
            return this.getRect().left
        }, this.getGlobalY = function() {
            return this.getRect().top
        }, this.setX = function(a) {
            e.x = a, e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)" : e.screen.style.left = e.x + "px"
        }, this.getX = function() {
            return e.x
        }, this.setY = function(a) {
            e.y = a, e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)" : e.screen.style.top = e.y + "px"
        }, this.getY = function() {
            return e.y
        }, this.setScale2 = function(a) {
            e.scale = a, e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)")
        }, this.getScale = function() {
            return e.scale
        }, this.setRotation = function(a) {
            e.rotation = a, e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)")
        }, this.setWidth = function(a) {
            e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
        }, this.getWidth = function() {
            return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
        }, this.setHeight = function(a) {
            e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
        }, this.getHeight = function() {
            return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
        }, this.getNumChildren = function() {
            return e.children_ar.length
        }, this.addChild = function(a) {
            this.contains(a) ? (this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.children_ar.push(a), this.screen.appendChild(a.screen))
        }, this.removeChild = function(a) {
            if (!this.contains(a)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.screen.removeChild(a.screen)
        }, this.contains = function(a) {
            return FWDRLR3DUtils.indexOfArray(this.children_ar, a) != -1
        }, this.addChildAtZero = function(a) {
            0 == this.numChildren ? (this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.screen.insertBefore(a.screen, this.children_ar[0].screen), this.contains(a) && this.children_ar.splice(FWDRLR3DUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.unshift(a))
        }, this.getChildAt = function(a) {
            if (a < 0 || a > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[a]
        }, this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                    if (b)
                        for (var e in b) this.listeners.events_ar[c][e] = b[e];
                    this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
                    break
                }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, this.disposeImage = function() {
            "img" == this.type && (this.screen.src = null)
        }, this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch (a) {}
            this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, e = null
        }, this.init()
    };
    a.FWDRLR3DTransformDisplayObject = b
}(window),
function(a) {
    var b = function(c) {
        var d = this;
        this.mainDO, this.preloaderDO, this.customContextMenuDO, this.infoDO, this.thumbsManagerDO, this.bgDO, this.thumbsBgDO, this.scrollbarBgDO, this.comboBoxDO, this.disableDO, this.stageWidth, this.stageHeight, this.originalWidth, this.originalHeight, this.resizeHandlerId1, this.resizeHandlerId2, this.orientationChangeId, this.rect, this.listeners = {
            events_ar: []
        }, this.autoScale = !1, this.doNotExceedOriginalSize = !0, this.orientationChangeComplete = !0, this.isFullScreen = !1, this.preloaderLoaded = !1, this.apiReady = !1, this.isMobile = FWDRLR3DUtils.isMobile, d.mainFolderPath_str = c.mainFolderPath, d.mainFolderPath_str.lastIndexOf("/") + 1 != d.mainFolderPath_str.length && (d.mainFolderPath_str += "/"), this.skinPath_str = c.skinPath, d.skinPath_str.lastIndexOf("/") + 1 != d.skinPath_str.length && (d.skinPath_str += "/"), this.warningIconPath_str = d.mainFolderPath_str + this.skinPath_str + "main_skin/warning.png", this.init = function() {
            return TweenLite.ticker.useRAF(!1), d.propsObj = c, d.propsObj ? d.propsObj.displayType ? (d.displayType = c.displayType.toLowerCase(), d.body = document.getElementsByTagName("body")[0], d.propsObj.carouselHolderDivId ? FWDRLR3DUtils.getChildById(d.propsObj.carouselHolderDivId) ? d.propsObj.carouselWidth ? d.propsObj.carouselHeight ? (d.stageContainer = FWDRLR3DUtils.getChildById(d.propsObj.carouselHolderDivId), d.autoScale = "yes" == d.propsObj.autoScale, d.originalWidth = d.propsObj.carouselWidth, d.originalHeight = d.propsObj.carouselHeight, d.setupMainDO(), d.setupInfo(), d.setupData(), void d.startResizeHandler()) : void alert("The carousel height is not defined, plese make sure that the carouselHeight property is definded in the FWDRoyal3DCarousel constructor!") : void alert("The carousel width is not defined, plese make sure that the carouselWidth property is definded in the FWDRoyal3DCarousel constructor!") : void alert("FWDRoyal3DCarousel holder div is not found, please make sure that the div exists and the id is correct! " + d.propsObj.carouselHolderDivId) : void alert("Property carouselHolderDivId is not defined in the FWDRoyal3DCarousel object constructor!")) : void alert("Display type is not specified!") : void alert("3DCarousel properties object is undefined!")
        }, this.setupMainDO = function() {
            d.mainDO = new FWDRLR3DDisplayObject("div", "relative"), d.mainDO.setBkColor(d.propsObj.backgroundColor), d.mainDO.getStyle().msTouchAction = "none", d.displayType == b.FLUID_WIDTH ? (d.mainDO.getStyle().position = "absolute", FWDRLR3DUtils.isIE7 ? d.body.appendChild(d.mainDO.screen) : document.documentElement.appendChild(d.mainDO.screen)) : d.stageContainer.appendChild(d.mainDO.screen)
        }, this.setBackgrounds = function() {
            d.propsObj.backgroundImagePath && (d.bgDO = new FWDRLR3DDisplayObject("div"), d.mainDO.addChild(d.bgDO), d.bgDO.setWidth(d.originalWidth), d.bgDO.setHeight(d.originalHeight), d.bgDO.screen.style.backgroundImage = "url(" + d.propsObj.backgroundImagePath + ")", d.bgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat, d.bgDO.setAlpha(0), FWDR3DCarModTweenMax.to(d.bgDO, .8, {
                alpha: 1
            })), d.propsObj.thumbnailsBackgroundImagePath && (d.thumbsBgDO = new FWDRLR3DDisplayObject("div"), d.mainDO.addChild(d.thumbsBgDO), d.thumbsBgDO.setWidth(d.originalWidth), d.thumbsBgDO.setHeight(d.originalHeight - d.data.nextButtonNImg.height), d.thumbsBgDO.screen.style.backgroundImage = "url(" + d.propsObj.thumbnailsBackgroundImagePath + ")", d.thumbsBgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat, d.thumbsBgDO.setAlpha(0), FWDR3DCarModTweenMax.to(d.thumbsBgDO, .8, {
                alpha: 1
            })), d.propsObj.scrollbarBackgroundImagePath && (d.scrollbarBgDO = new FWDRLR3DDisplayObject("div"),
                d.mainDO.addChild(d.scrollbarBgDO), d.scrollbarBgDO.setWidth(d.originalWidth), d.scrollbarBgDO.setHeight(d.data.controlsHeight), d.scrollbarBgDO.screen.style.backgroundImage = "url(" + d.propsObj.scrollbarBackgroundImagePath + ")", d.scrollbarBgDO.screen.style.backgroundRepeat = d.propsObj.backgroundRepeat, d.scrollbarBgDO.setAlpha(0), FWDR3DCarModTweenMax.to(d.scrollbarBgDO, .8, {
                    alpha: 1,
                    delay: .8
                }))
        }, this.setupInfo = function() {
            FWDRLR3DInfo.setPrototype(), d.infoDO = new FWDRLR3DInfo(d, d.warningIconPath_str)
        }, this.startResizeHandler = function() {
            a.addEventListener ? (a.addEventListener("resize", d.onResizeHandler), a.addEventListener("scroll", d.onScrollHandler), a.addEventListener("orientationchange", d.orientationChange)) : a.attachEvent && (a.attachEvent("onresize", d.onResizeHandler), a.attachEvent("onscroll", d.onScrollHandler)), d.resizeHandlerId2 = setTimeout(d.resizeHandler, 50), d.displayType == b.FLUID_WIDTH && (d.resizeHandlerId1 = setTimeout(d.resizeHandler, 800))
        }, this.onResizeHandler = function(a) {
            d.isMobile ? (clearTimeout(d.resizeHandlerId2), d.resizeHandlerId2 = setTimeout(d.resizeHandler, 200)) : d.resizeHandler()
        }, this.onScrollHandler = function(a) {
            d.displayType == b.FLUID_WIDTH && d.scrollHandler(), d.rect = d.mainDO.screen.getBoundingClientRect()
        }, this.orientationChange = function() {
            d.displayType == b.FLUID_WIDTH && (d.orientationChangeComplete = !1, clearTimeout(d.scrollEndId), clearTimeout(d.resizeHandlerId2), clearTimeout(d.orientationChangeId), d.orientationChangeId = setTimeout(function() {
                d.orientationChangeComplete = !0, d.resizeHandler()
            }, 1e3), d.mainDO.setX(0), d.mainDO.setWidth(0))
        }, this.scrollHandler = function() {
            if (d.orientationChangeComplete) {
                var a = FWDRLR3DUtils.getScrollOffsets();
                d.pageXOffset = a.x, d.pageYOffset = a.y, d.displayType == b.FLUID_WIDTH && (d.isMobile ? (clearTimeout(d.scrollEndId), d.scrollEndId = setTimeout(d.resizeHandler, 200)) : d.mainDO.setX(d.pageXOffset), d.mainDO.setY(Math.round(d.stageContainer.getBoundingClientRect().top + d.pageYOffset)))
            }
        }, this.resizeHandler = function() {
            if (d.orientationChangeComplete) {
                var a = FWDRLR3DUtils.getScrollOffsets(),
                    c = FWDRLR3DUtils.getViewportSize();
                d.viewportWidth = parseInt(c.w), d.viewportHeight = parseInt(c.h), d.pageXOffset = parseInt(a.x), d.pageYOffset = parseInt(a.y), d.displayType == b.FLUID_WIDTH ? (d.stageWidth = c.w, d.stageHeight = c.h, d.autoScale ? (d.scale = Math.min(d.stageWidth / d.originalWidth, 1), d.stageHeight = Math.max(parseInt(d.scale * d.originalHeight), 300), d.stageContainer.style.height = d.stageHeight + "px") : (d.stageHeight = d.originalHeight, d.stageContainer.style.height = d.stageHeight + "px"), d.mainDO.setX(d.pageXOffset), d.mainDO.setY(Math.round(d.stageContainer.getBoundingClientRect().top + d.pageYOffset))) : (d.autoScale ? (d.stageContainer.style.width = "100%", d.stageContainer.offsetWidth > d.originalWidth && (d.stageContainer.style.width = d.originalWidth + "px"), d.scale = d.stageContainer.offsetWidth / d.originalWidth, d.stageWidth = parseInt(d.scale * d.originalWidth), d.stageHeight = Math.max(parseInt(d.scale * d.originalHeight), 300), d.stageContainer.style.height = d.stageHeight + "px") : (d.stageContainer.style.width = "100%", d.stageContainer.offsetWidth > d.originalWidth && (d.stageContainer.style.width = d.originalWidth + "px"), d.stageWidth = d.stageContainer.offsetWidth, d.stageHeight = d.originalHeight, d.stageContainer.style.height = d.originalHeight + "px"), d.mainDO.setX(0), d.mainDO.setY(0)), d.mainDO.setWidth(d.stageWidth), d.mainDO.setHeight(d.stageHeight), d.rect = d.mainDO.screen.getBoundingClientRect(), d.positionPreloader(), d.thumbsManagerDO && (d.thumbsManagerDO.resizeHandler(), d.thumbsManagerDO.allowToSwitchCat || (d.disableDO.setWidth(d.stageWidth), d.disableDO.setHeight(d.stageHeight))), d.preloaderLoaded && (d.propsObj.backgroundImagePath && (d.displayType == b.RESPONSIVE ? d.bgDO.setX(Math.floor((d.stageWidth - d.originalWidth) / 2)) : d.bgDO.setWidth(d.stageWidth), d.bgDO.setY(Math.floor((d.stageHeight - d.originalHeight) / 2))), d.propsObj.thumbnailsBackgroundImagePath && (d.displayType == b.RESPONSIVE ? d.thumbsBgDO.setX(Math.floor((d.stageWidth - d.originalWidth) / 2)) : d.thumbsBgDO.setWidth(d.stageWidth), d.thumbsBgDO.setY(Math.floor((d.stageHeight - d.originalHeight) / 2))), d.propsObj.scrollbarBackgroundImagePath && (d.scrollbarBgDO.setWidth(d.stageWidth), d.scrollbarBgDO.setX(0), d.scrollbarBgDO.setY(Math.floor(d.stageHeight - d.data.controlsHeight)))), d.comboBoxDO && d.comboBoxDO.position()
            }
        }, this.setupContextMenu = function() {
            d.customContextMenuDO = new FWDRLR3DContextMenu(d.mainDO, d.data.rightClickContextMenu)
        }, this.setupData = function() {
            FWDR3DCarData.setPrototype(), d.data = new FWDR3DCarData(d.propsObj), d.data.addListener(FWDR3DCarData.PRELOADER_LOAD_DONE, d.onPreloaderLoadDone), d.data.addListener(FWDR3DCarData.LOAD_ERROR, d.dataLoadError), d.data.addListener(FWDR3DCarData.LOAD_DONE, d.dataLoadComplete)
        }, this.onPreloaderLoadDone = function() {
            d.setBackgrounds(), d.setupPreloader(), d.positionPreloader(), d.isMobile || d.setupContextMenu(), d.preloaderLoaded = !0, d.resizeHandler()
        }, this.dataLoadError = function(a, b) {
            d.mainDO.addChild(d.infoDO), d.infoDO.showText(a.text)
        }, this.dataLoadComplete = function(a) {
            d.dispatchEvent(b.DATA_LOADED), d.data.showDisplay2DAlways && (FWDRLR3DUtils.hasTransform3d = !1), d.preloaderDO.hide(!0), d.setupThumbsManager(), d.data.showComboBox && d.setupComboBox(), d.data.enableHtmlContent || d.setupLightBox(), d.setupDisable()
        }, this.setupPreloader = function() {
            FWDR3DCarPreloader.setPrototype(), d.preloaderDO = new FWDR3DCarPreloader(d.data.mainPreloaderImg, 70, 40, 12, 60, !0), d.mainDO.addChild(d.preloaderDO), d.preloaderDO.show()
        }, this.positionPreloader = function() {
            d.preloaderDO && (d.preloaderDO.setX(parseInt((d.stageWidth - d.preloaderDO.getWidth()) / 2)), d.preloaderDO.setY(parseInt((d.stageHeight - d.preloaderDO.getHeight() - d.data.nextButtonNImg.height) / 2)))
        }, this.setupThumbsManager = function() {
            FWDR3DCarThumbsManager.setPrototype(), d.thumbsManagerDO = new FWDR3DCarThumbsManager(d.data, d), d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMB_CLICK, d.onThumbsManagerThumbClick), d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.LOAD_ERROR, d.onThumbsManagerLoadError), d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMBS_INTRO_FINISH, d.onThumbsManagerIntroFinish), d.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMB_CHANGE, d.onThumbsManagerThumbChange), d.mainDO.addChild(d.thumbsManagerDO), d.stageWidth && d.thumbsManagerDO.resizeHandler()
        }, this.onThumbsManagerThumbClick = function(b) {
            d.data.enableHtmlContent || (a.r3dcarrlobj_curObj = d.data.lightboxPlaylist_ar[b.playlistId], FWDRLR3D.show("r3dcarrlobj_curObj", b.thumbId), a.r3dcarrlobj_curObj = null)
        }, this.onThumbsManagerLoadError = function(a) {
            d.mainDO.addChild(d.infoDO), d.infoDO.showText(a.text)
        }, this.onThumbsManagerIntroFinish = function() {
            d.enableAll(), d.dispatchEvent(b.INTRO_FINISH), d.apiReady = !0, d.dispatchEvent(b.IS_API_READY), d.dispatchEvent(b.CATEGORY_CHANGE, {
                id: d.thumbsManagerDO.dataListId
            })
        }, this.onThumbsManagerThumbChange = function(a) {
            d.dispatchEvent(b.THUMB_CHANGE, {
                id: a.id
            })
        }, this.update = function(a) {
            d.thumbsManagerDO.update(a)
        }, this.setupComboBox = function() {
            FWDR3DCarComboBox.setPrototype(), d.comboBoxDO = new FWDR3DCarComboBox(d, {
                arrowW: d.data.comboboxArrowIconN_img.width,
                arrowH: d.data.comboboxArrowIconN_img.height,
                arrowN_str: d.data.comboboxArrowIconN_str,
                arrowS_str: d.data.comboboxArrowIconS_str,
                categories_ar: d.data.categoriesAr,
                selectorLabel: d.data.selectLabel,
                position: d.data.comboBoxPosition,
                startAtCategory: d.data.startAtCategory,
                comboBoxHorizontalMargins: d.data.comboBoxHorizontalMargins,
                comboBoxVerticalMargins: d.data.comboBoxVerticalMargins,
                comboBoxCornerRadius: d.data.comboBoxCornerRadius,
                selectorBackgroundNormalColor1: d.data.selectorBackgroundNormalColor1,
                selectorBackgroundSelectedColor1: d.data.selectorBackgroundSelectedColor1,
                selectorBackgroundNormalColor2: d.data.selectorBackgroundNormalColor2,
                selectorBackgroundSelectedColor2: d.data.selectorBackgroundSelectedColor2,
                selectorTextNormalColor: d.data.selectorTextNormalColor,
                selectorTextSelectedColor: d.data.selectorTextSelectedColor,
                buttonBackgroundNormalColor1: d.data.buttonBackgroundNormalColor1,
                buttonBackgroundSelectedColor1: d.data.buttonBackgroundSelectedColor1,
                buttonBackgroundNormalColor2: d.data.buttonBackgroundNormalColor2,
                buttonBackgroundSelectedColor2: d.data.buttonBackgroundSelectedColor2,
                buttonTextNormalColor: d.data.buttonTextNormalColor,
                buttonTextSelectedColor: d.data.buttonTextSelectedColor,
                shadowColor: d.data.comboBoxShadowColor
            }), d.comboBoxDO.addListener(FWDR3DCarComboBox.BUTTON_PRESSED, d.onComboboxButtonPressHandler), d.mainDO.addChild(d.comboBoxDO)
        }, this.onComboboxButtonPressHandler = function(a) {
            d.thumbsManagerDO.allowToSwitchCat && (d.disableAll(), d.thumbsManagerDO.showCurrentCat(a.id), d.dispatchEvent(b.INTRO_START), d.apiReady = !1)
        }, this.setupLightBox = function() {
            FWDRLR3D && FWDRLR3D.addListener || (d.lightbox = new FWDRLR3D({
                mainFolderPath: d.data.mainFolderPath_str,
                skinPath: d.data.lightboxSkinPath_str,
                rightClickContextMenu: d.data.rightClickContextMenu_str,
                buttonsAlignment: d.data.buttonsAlignment_str,
                useDeepLinking: "no",
                useAsModal: "no",
                slideShowAutoPlay: d.data.slideShowAutoPlay_str,
                addKeyboardSupport: d.data.addKeyboardSupport_str,
                showCloseButton: d.data.showCloseButton_str,
                showShareButton: d.data.showShareButton_str,
                showZoomButton: d.data.showZoomButton_str,
                showSlideShowButton: d.data.showSlideShowButton_str,
                showSlideShowAnimation: d.data.showSlideShowAnimation_str,
                showNextAndPrevButtons: d.data.showNextAndPrevButtons_str,
                showNextAndPrevButtonsOnMobile: d.data.showNextAndPrevButtonsOnMobile_str,
                buttonsHideDelay: d.data.buttonsHideDelay,
                slideShowDelay: d.data.slideShowDelay,
                defaultItemWidth: d.data.defaultItemWidth,
                defaultItemHeight: d.data.defaultItemHeight,
                itemOffsetHeight: d.data.itemOffsetHeight,
                spaceBetweenButtons: d.data.spaceBetweenButtons,
                buttonsOffsetIn: d.data.buttonsOffsetIn,
                buttonsOffsetOut: d.data.buttonsOffsetOut,
                itemBorderSize: d.data.itemBorderSize,
                itemBorderRadius: d.data.itemBorderRadius,
                backgroundOpacity: d.data.backgroundOpacity,
                itemBoxShadow: d.data.itemBoxShadow_str,
                itemBackgroundColor: d.data.itemBackgroundColor_str,
                itemBorderColor1: d.data.itemBorderColor1_str,
                itemBorderColor2: d.data.itemBorderColor2_str,
                backgroundColor: d.data.lightboxBackgroundColor,
                showThumbnails: "no",
                showThumbnailsHideOrShowButton: "yes",
                showThumbnailsByDefault: "yes",
                showThumbnailsOverlay: "yes",
                showThumbnailsSmallIcon: "yes",
                thumbnailsHoverEffect: "scale",
                thumbnailsImageHeight: 80,
                thumbnailsBorderSize: 4,
                thumbnailsBorderRadius: 0,
                spaceBetweenThumbnailsAndItem: 0,
                thumbnailsOffsetBottom: 0,
                spaceBetweenThumbnails: 2,
                thumbnailsOverlayOpacity: .6,
                thumbnailsOverlayColor: "#FFFFFF",
                thumbnailsBorderNormalColor: "#FFFFFF",
                thumbnailsBorderSelectedColor: "#FFFFFF",
                showDescriptionButton: d.data.showDescriptionButton_str,
                showDescriptionByDefault: d.data.showDescriptionByDefault_str,
                descriptionWindowAnimationType: d.data.descriptionWindowAnimationType_str,
                descriptionWindowPosition: d.data.descriptionWindowPosition_str,
                descriptionWindowBackgroundColor: d.data.descriptionWindowBackgroundColor_str,
                descriptionWindowBackgroundOpacity: d.data.descriptionWindowBackgroundOpacity,
                useVideo: "yes",
                useAudio: "yes",
                videoShowFullScreenButton: d.data.videoShowFullScreenButton_str,
                addVideoKeyboardSupport: "yes",
                nextVideoOrAudioAutoPlay: d.data.nextVideoOrAudioAutoPlay_str,
                videoAutoPlay: d.data.videoAutoPlay_str,
                videoLoop: d.data.videoLoop_str,
                audioAutoPlay: d.data.audioAutoPlay_str,
                audioLoop: d.data.audioLoop_str,
                videoControllerHideDelay: 3,
                videoControllerHeight: 41,
                audioControllerHeight: 44,
                startSpaceBetweenButtons: 7,
                vdSpaceBetweenButtons: 9,
                mainScrubberOffestTop: 14,
                scrubbersOffsetWidth: 1,
                audioScrubbersOffestTotalWidth: 4,
                timeOffsetLeftWidth: 5,
                timeOffsetRightWidth: 3,
                volumeScrubberWidth: 80,
                volumeScrubberOffsetRightWidth: 0,
                videoControllerBackgroundColor: d.data.videoControllerBackgroundColor_str,
                videoPosterBackgroundColor: d.data.videoPosterBackgroundColor_str,
                videoPosterBackgroundColor: d.data.videoPosterBackgroundColor_str,
                audioControllerBackgroundColor: d.data.audioControllerBackgroundColor_str,
                timeColor: d.data.timeColor_str
            }))
        }, this.setupDisable = function() {
            d.disableDO = new FWDR3DCarDisplayObject3D("div"), d.disableDO.setZ(3e5), FWDRLR3DUtils.isIE && (d.disableDO.setBkColor("#000000"), d.disableDO.setAlpha(.001)), d.mainDO.addChild(d.disableDO), d.disableAll()
        }, this.disableAll = function() {
            d.disableDO.setWidth(d.stageWidth), d.disableDO.setHeight(d.stageHeight)
        }, this.enableAll = function() {
            d.disableDO && (d.disableDO.setWidth(0), d.disableDO.setHeight(0))
        }, this.isAPIReady = function() {
            return d.apiReady
        }, this.getCurrentCategoryId = function() {
            if (d.apiReady) return d.thumbsManagerDO.dataListId
        }, this.switchCategory = function(a) {
            d.apiReady && a >= 0 && a < d.data.dataListAr.length && (d.disableAll(), d.thumbsManagerDO.showCurrentCat(a), d.dispatchEvent(b.INTRO_START), d.comboBoxDO && d.comboBoxDO.setValue(a), d.apiReady = !1)
        }, this.getCurrentThumbId = function() {
            if (d.apiReady) return d.thumbsManagerDO.curId
        }, this.gotoThumb = function(a) {
            d.apiReady && a >= 0 && a < d.thumbsManagerDO.totalThumbs && a != d.thumbsManagerDO.curId && (d.thumbsManagerDO.curId = a, d.thumbsManagerDO.gotoThumb())
        }, this.isSlideshowPlaying = function() {
            return d.thumbsManagerDO.isPlaying
        }, this.startSlideshow = function() {
            d.apiReady && d.thumbsManagerDO.startSlideshow()
        }, this.stopSlideshow = function() {
            d.apiReady && d.thumbsManagerDO.stopSlideshow()
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                    if (b)
                        for (var e in b) this.listeners.events_ar[c][e] = b[e];
                    this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; c < d; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, this.destroy = function() {
            a.removeEventListener ? (a.removeEventListener("resize", d.onResizeHandler), a.removeEventListener("scroll", d.onScrollHandler), a.removeEventListener("orientationchange", d.orientationChance)) : a.detachEvent && (a.detachEvent("onresize", d.onResizeHandler), a.detachEvent("onscroll", d.onScrollHandler)), clearTimeout(d.scrollEndId), clearTimeout(d.resizeHandlerId1), clearTimeout(d.resizeHandlerId2), clearTimeout(d.orientationChangeId), d.data && d.data.destroy(), d.customContextMenuDO && d.customContextMenuDO.destroy(), d.infoDO && d.infoDO.destroy(), d.preloaderDO && d.preloaderDO.destroy(), d.thumbsManagerDO && d.thumbsManagerDO.destroy(), d.bgDO && (FWDR3DCarModTweenMax.killTweensOf(d.bgDO), d.bgDO.destroy()), d.thumbsBgDO && (FWDR3DCarModTweenMax.killTweensOf(d.thumbsBgDO), d.thumbsBgDO.destroy()), d.scrollbarBgDO && (FWDR3DCarModTweenMax.killTweensOf(d.scrollbarBgDO), d.scrollbarBgDO.destroy()), d.comboBoxDO && d.comboBoxDO.destroy(), d.disableDO && d.disableDO.destroy(), d.displayType == b.FLUID_WIDTH ? FWDRLR3DUtils.isIE7 ? d.body.removeChild(d.mainDO.screen) : document.documentElement.removeChild(d.mainDO.screen) : d.stageContainer.removeChild(d.mainDO.screen), d.mainDO && (d.mainDO.screen.innerHTML = "", d.mainDO.destroy()), d.preloaderDO = null, d.customContextMenuDO = null, d.infoDO = null, d.thumbsManagerDO = null, d.bgDO = null, d.thumbsBgDO = null, d.scrollbarBgDO = null, d.comboBoxDO = null, d.disableDO = null, d.mainDO = null, d = null
        }, this.init()
    };
    b.RESIZE = "resize", b.LIGHTBOX = "lightbox", b.RESPONSIVE = "responsive", b.FLUID_WIDTH = "fluidwidth", b.INTRO_START = "onIntroStart", b.INTRO_FINISH = "onIntroFinish", b.DATA_LOADED = "onDataLoaded", b.IS_API_READY = "isAPIReady", b.CATEGORY_CHANGE = "categoryChanged", b.THUMB_CHANGE = "thumbChanged", a.FWDRoyal3DCarousel = b
}(window);