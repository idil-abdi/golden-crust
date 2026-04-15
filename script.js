const toggleMenu = () => {
    const navEl = document.getElementById('navEl')
    if (navEl.className === 'topnav') {
        navEl.className += ' responsive'
    } else {
        navEl.className = 'topnav'
    }
    // console.log('hello')
}