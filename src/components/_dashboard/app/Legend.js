import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

const Legend = () => {
  const map = useMap();
  console.log(map);

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const vendors = ['Huawei', 'Xiaomi', 'Realme', 'Samsung'];
      const colors = ['#D4B499', '#B1E693', '#FE8F8F', '#6D8299'];
      const labels = [];

      for (let i = 0; i < vendors.length; i++) {
        labels.push(
          '<i style="background:' +
            colors[i] +
            '"></i> ' +
            vendors[i]
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
  });
  return null;
};

export default Legend;