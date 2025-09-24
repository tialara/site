// Lightweight Picomap initializer for the homepage map
(function(){
  function init(){
    var el = document.getElementById('map');
    if (!el) return;
    
    if (typeof Picomap === 'undefined') {
      return setTimeout(init, 50);
    }
    
    var lat = parseFloat(el.getAttribute('data-lat'));
    var lng = parseFloat(el.getAttribute('data-lng'));
    var zoom = parseInt(el.getAttribute('data-zoom'), 10);
    var width = el.clientWidth || 800;
    var height = 450;

    if (!isFinite(lat) || !isFinite(lng)) {
      lat = -16.060341; // fallback: Uruana de Minas (centro)
      lng = -46.257886;
    }
    if (!isFinite(zoom)) zoom = 14;

    // Picomap constructor is positional: (height, width, lon, lat, zoom, id, source)
    var mapInstance = new Picomap(height, width, lng, lat, zoom, "map", "https://tile.openstreetmap.org");
    mapInstance.initialize();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
