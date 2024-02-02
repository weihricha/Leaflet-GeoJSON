 var map = L.map('mapid').setView([51.505, -0.09], 3);
        
        fetch('map.geojson')
 .then(response => response.json())
 .then(data => {
   L.geoJSON(data).addTo(map);
 });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

            function onMapClick(e) {
            alert("You clicked the map at " + e.latlng);
            }

            map.on('click', onMapClick);
            var popup = L.popup();

            function onMapClick(e) {
            popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
            }

        map.on('click', onMapClick);
