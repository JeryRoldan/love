let watchId = null;

function iniciarUbicacion() {
  if (!navigator.geolocation) {
    alert("La geolocalización no está disponible en este dispositivo");
    return;
  }

  watchId = navigator.geolocation.watchPosition(
    posicion => {
      const lat = posicion.coords.latitude;
      const lon = posicion.coords.longitude;
      const acc = posicion.coords.accuracy;

      document.getElementById("lat").textContent = lat.toFixed(6);
      document.getElementById("lon").textContent = lon.toFixed(6);
      document.getElementById("acc").textContent = acc.toFixed(1);

      const link = `https://www.google.com/maps?q=${lat},${lon}`;
      const mapa = document.getElementById("mapa");
      mapa.href = link;
      mapa.style.display = "block";
      mapa.textContent = "Ver mi ubicación en el mapa ❤️";
    },
    error => {
      alert("No se pudo obtener la ubicación");
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000
    }
  );
}
