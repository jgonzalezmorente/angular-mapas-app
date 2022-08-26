import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl'; 
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiamdvbnphbGV6bW9yZW50ZSIsImEiOiJja24zNGJwcm4wN2l4MzFucTV4NnJpdWJsIn0.HOw2wOVhDa5TMSRTemmbZA';

if ( !navigator.geolocation ) {
  alert( 'Navegador no soporta la Geolocation' );
  throw new Error( 'Navegador no soporta la Geolocation' );
}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
