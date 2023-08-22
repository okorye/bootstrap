// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

export default () => {
  // Scroll the active sidebar link into view
  const sidenav = document.querySelector('.bd-sidebar')
  const sidenavActiveLink = document.querySelector('.bd-links-nav .active')

  if (!sidenav || !sidenavActiveLink) {
    return
  }

  const sidenavHeight = sidenav.clientHeight
  const sidenavActiveLinkTop = sidenavActiveLink.offsetTop
  const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight
  const viewportTop = sidenavActiveLinkTop
  const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight

  if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
    sidenav.scrollTop = viewportTop - (sidenavHeight / 2) + (sidenavActiveLinkHeight / 2)
  }
}
