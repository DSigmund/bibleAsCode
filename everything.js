function heaven () {

}
function earth () {
  var surface = 'water'
  this.isLight = function () {
    return true
  }
  this.isDark = function () {
    return false
  }
  holySpirit(this.surface)
}
function holySpirit (where) {
  this.position = where
  return this
}