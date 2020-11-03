module.exports.command = function (selector) {
  let elementTop

  return this
    .pause(2000)
    .perform(function () {
      if ((selector.match(/-[\w]{4}-[\w]{4}-[\w]{4}-/) && selector.match(/(?:\d.*?){2,}/))
        || (selector.includes('0.') && selector.match(/[^a-zA-Z]/)) || selector.match(/^[0-9]+$/)) {
        this.elementIdLocation(selector, res => {
          elementTop = res.value.y
        })
      } else {
        this.getLocation(selector, res => {
          elementTop = res.value.y
        })
      }
    }).perform(function () {
      this.execute(function (elementPositoin) {
        const middle = elementPositoin = (window.innerHeight / 2)
        window.scrollTo(0, middle)
      }, [elementTop])
    })
}
