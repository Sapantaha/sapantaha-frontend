import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';

import { RoutePage } from '../route/route';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
      zoomControl: false,
    }
    this.map = leaflet.map("map", options).fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10,
      watch: true
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      alert(`Latitude:${e.latitude} Longitude: ${e.longitude}`);
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      // console.log(e);
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        // alert(err.message);
      });
    // this.map.setView([12.8797, 121.7740], 6);
  }

  searchRoute(){
    this.navCtrl.push(RoutePage)
  }

}
