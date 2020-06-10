// NAVIGATION

// Inform app of browser navigation (the BACK and FORWARD buttons)
window.addEventListener('popstate', function () {
    app.ports.onUrlChange.send(location.href);
});

// Change the URL upon request, inform app of the change.
app.ports.pushUrl.subscribe(function(url) {
    history.pushState({}, '', url);
    app.ports.onUrlChange.send(location.href);
});
