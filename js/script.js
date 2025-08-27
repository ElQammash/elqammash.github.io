function handleNav(event) {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute('href');
    history.pushState(null, '', hash);
    showPage(hash);
}