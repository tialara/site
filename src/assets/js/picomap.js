!(function (t, i) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = i())
    : 'function' == typeof define && define.amd
      ? define(i)
      : ((t = 'undefined' != typeof globalThis ? globalThis : t || self).Picomap = i())
})(this, function () {
  'use strict'
  const r = (t) => (1 - Math.log(Math.tan((t * Math.PI) / 180 / 2 + Math.PI / 4)) / Math.PI) / 2,
    n = (t) => (t + 180) / 360,
    p = (t) => Math.ceil((t / 2 - 128) / 256) + 1,
    l = (t) => document.createElement(t)
  return class {
    constructor(
      t = 500,
      i = 500,
      h = 24.4391,
      s = 60.5,
      e = 10,
      o = 'map',
      a = 'https://tile.openstreetmap.org'
    ) {
      ;((this.height = t),
        (this.width = i),
        (this.t = s),
        (this.i = h),
        (this.zoom = e),
        (this.source = a),
        (this.map = document.getElementById(o)),
        (this.map.style = `height: ${this.height}px; width: ${this.width}px; overflow: hidden; transform: translate3d(0px,0px,0px)`))
    }
    #h(t, i, h, s, e, o) {
      var a = l('button')
      return (
        (a.innerText = t),
      (a.style = `width: 44px; height: 44px; position: absolute; top: ${o}px; left: ${e}px; cursor: pointer; display: flex; align-items: center; justify-content: center; background: white; border: 1px solid #ccc; border-radius: 4px;`),
        a.addEventListener('click', () => this.#o(i, h, s)),
        a
      )
    }
    #p() {
      var t = l('div')
      ;((t.style = 'height: 100%; width: 100%; position: absolute; top: 0px; left: 0px'),
        // Up button
        t.append(this.#h('\u25b2', 0, 1, 0, 40, 20)),
        // Left button
        t.append(this.#h('\u25c0', -1, 0, 0, 8, 72)),
        // Right button
        t.append(this.#h('\u25b6', 1, 0, 0, 72, 72)),
        // Down button
        t.append(this.#h('\u25bc', 0, -1, 0, 40, 124)),
        // Zoom in button
        t.append(this.#h('+', 0, 0, 1, 40, 176)),
        // Zoom out button
        t.append(this.#h('-', 0, 0, -1, 40, 228)),
        this.map.append(t))
    }
    #l(t, i, h, s, e) {
      var o = l('img')
      return (
        (o.src = this.source + `/${t}/${i}/${h}.png`),
        (o.alt = ''),
        (o.style = `width: 256px; height: 256px; opacity: 1; transform: translate3d(${s}px, ${e}px, 0px); display: block; position: absolute`),
        o
      )
    }
    #u() {
      ;((i = this.i), (t = this.zoom))
      var t,
        h = Math.floor(n(i) * 2 ** t),
        s = ((i = this.t), (t = this.zoom), Math.floor(r(i) * 2 ** t)),
        i = ((t, i, h) => {
          t = 256 * 2 ** t
          return { x: Math.floor(n(i) * t) % 256, y: Math.floor(r(h) * t) % 256 }
        })(this.zoom, this.i, this.t),
        e = ((this.M.style.transform = `translate3d(${128 - i.x}px,${128 - i.y}px,0px)`), [])
      for (let i = -p(this.height); i <= p(this.height); i++)
        for (let t = -p(this.width); t <= p(this.width); t++) {
          var o = this.height / 2 - 128 + 256 * i,
            a = this.width / 2 - 128 + 256 * t
          e.push(this.#l(this.zoom, h + t, s + i, a, o))
        }
      this.M.replaceChildren(...e)
    }
    #$() {
      ;((this.M = l('div')),
        (this.M.style = 'height: 100%; width: 100%'),
        this.#u(),
        this.map.append(this.M))
    }
    #o(t, i, h) {
      ;((this.i += (360 * t) / Math.pow(2, this.zoom)),
        (this.t += (170.12 * i) / Math.pow(2, this.zoom)),
        (this.zoom += h),
        this.#u())
    }
    initialize() {
      ;(this.#$(), this.#p())
    }
  }
})
