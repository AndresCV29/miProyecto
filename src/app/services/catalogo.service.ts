import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  state: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService

  ) { }
  getAll(){
    return this.httpClient.get(this.authService.API+'product/all',{headers: this.authService.headers});
  }

  create(agregar){
    return this.httpClient.post(this.authService.API+'add/product',agregar, {headers: this.authService.headers});
  }

  update(){
    return this.httpClient.put(this.authService.API+'update/product',{'product_id': 1,'nombre_proyecto': 'pruebaAndres', 'titulo': 'pruebaAndres', 'descripcion': 'descripcionAndres', 'precio': 'andres', 'destacado': 'destacadoAndres', 'imagen': 'imagenAndres'}, {headers: this.authService.headers} );
  }

  delete(){
    return this.httpClient.put(this.authService.API+'delete/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

  disable(){
    return this.httpClient.put(this.authService.API+'disable/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

  enable(){
    return this.httpClient.put(this.authService.API+'enable/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

  getOne(actualizar){
    return this.httpClient.post(this.authService.API+'query/product',actualizar, {headers: this.authService.headers} );
  }

  catalogo2: any;

  catalogo = [
    {
      "titulo": "Xiaomi Redmi Note 9 Pro White 128GB",
      "imagen": "/assets/popular_phones/RN9P.jpg",
      "precio": "1199000",
      "marca": "xiaomi",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "6.67 inch 60Hz IPS LCD\n" +
        "2,400 x1,080 px (20: 9)\n" +
        "450 nits\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 720G\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "4 GB RAM + 64 GB (+ microSD up to 512 GB)\n" +
        "6 GB RAM + 128 GB (+ microSD up to 512 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "16 MP, f / 2.48\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 MP (1 / 1.72) f / 1.89\n" +
        "5 MP macro (2-10 cm)\n" +
        "2 MP (depth)\n" +
        "8 MP ultra wide angle 119º, f / 2.2\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "NFC, Bluetooth 5.0, USB-C, GPS (Galileo, Glonass, NavIC)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Quick charge 33 W\n" +
        "\n" +
        "OTHERS\n" +
        "3.5mm jack, IR port, dual SIM\n" +
        "\n" +
        "BIOMETRY\n" +
        "Side fingerprint sensor\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "165.75 x 76.68 x 8.8mm\n" +
        "209 g"
    },
    {
      "titulo": "Xiaomi Redmi Note 9 Pro Gray 128GB",
      "imagen": "/assets/popular_phones/RN9PG.jpg",
      "precio": "1199000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "6.67 inch 60Hz IPS LCD\n" +
        "2,400 x1,080 px (20: 9)\n" +
        "450 nits\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 720G\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "4 GB RAM + 64 GB (+ microSD up to 512 GB)\n" +
        "6 GB RAM + 128 GB (+ microSD up to 512 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "16 MP, f / 2.48\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 MP (1 / 1.72 ) f / 1.89\n" +
        "5 MP macro (2-10 cm)\n" +
        "2 MP (depth)\n" +
        "8 MP ultra wide angle 119º, f / 2.2\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "NFC, Bluetooth 5.0, USB-C, GPS (Galileo, Glonass, NavIC)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Quick charge 33 W\n" +
        "\n" +
        "OTHERS\n" +
        "3.5mm jack, IR port, dual SIM\n" +
        "\n" +
        "BIOMETRY\n" +
        "Side fingerprint sensor\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "165.75 x 76.68 x 8.8mm\n" +
        "209 g"
    },

    {
      "titulo": "Xiaomi Redmi Note 9 Pro Green 128GB",
      "imagen": "/assets/popular_phones/RN9PV.jpg",
      "precio": "1199000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "6.67 inch 60Hz IPS LCD\n" +
        "2,400 x1,080 px (20: 9)\n" +
        "450 nits\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 720G\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "4 GB RAM + 64 GB (+ microSD up to 512 GB)\n" +
        "6 GB RAM + 128 GB (+ microSD up to 512 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "16 MP, f / 2.48\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 MP (1 / 1.72 ) f / 1.89\n" +
        "5 MP macro (2-10 cm)\n" +
        "2 MP (depth)\n" +
        "8 MP ultra wide angle 119º, f / 2.2\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "NFC, Bluetooth 5.0, USB-C, GPS (Galileo, Glonass, NavIC)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Quick charge 33 W\n" +
        "\n" +
        "OTHERS\n" +
        "3.5mm jack, IR port, dual SIM\n" +
        "\n" +
        "BIOMETRY\n" +
        "Side fingerprint sensor\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "165.75 x 76.68 x 8.8mm\n" +
        "209 g"
    },
    {
      "titulo": "Xiaomi Redmi Note 9 White 64GB",
      "imagen": "/assets/popular_phones/RN9B.jpg",
      "precio": "689000",
      "marca": "xiaomi",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "6.53 IPS FullHD +\n" +
        "2,340 x 1,080 px (19.5: 9)\n" +
        "450 nits, Gorilla Glass 5\n" +
        "\n" +
        "PROCESSOR\n" +
        "MediaTek Helio G85\n" +
        "2.0GHz octa-core\n" +
        "GPU ARM Mali G52\n" +
        "\n" +
        "RAM\n" +
        "3/4 GB\n" +
        "\n" +
        "STORAGE\n" +
        "64/128 GB + microSD (up to 512GB)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Main: 48MP, f / 1.79, 1.6μm\n" +
        "Wide angle: 8MP, f / 2.2, 118º\n" +
        "Macro: 2MP\n" +
        "Depth: 2MP\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 megapixels, f / 2.25\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "162.3 x 77.2 x 8.9 mm\n" +
        "199 g\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared, 3.5mm jack, Bluetooth 5.0, USB Type-C, NFC, dualSIM, LTE, rear fingerprint reader"
    },
    {
      "titulo": "Xiaomi Redmi Note 9 Green 64GB",
      "imagen": "/assets/popular_phones/RN9V.jpg",
      "precio": "689000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "6.53 IPS FullHD +\n" +
        "2,340 x 1,080 px (19.5: 9)\n" +
        "450 nits, Gorilla Glass 5\n" +
        "\n" +
        "PROCESSOR\n" +
        "MediaTek Helio G85\n" +
        "2.0GHz octa-core\n" +
        "GPU ARM Mali G52\n" +
        "\n" +
        "RAM\n" +
        "3/4 GB\n" +
        "\n" +
        "STORAGE\n" +
        "64/128 GB + microSD (up to 512GB)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Main: 48MP, f / 1.79, 1.6μm\n" +
        "Wide angle: 8MP, f / 2.2, 118º\n" +
        "Macro: 2MP\n" +
        "Depth: 2MP\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 megapixels, f / 2.25\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "162.3 x 77.2 x 8.9 mm\n" +
        "199 g\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared, 3.5mm jack, Bluetooth 5.0, USB Type-C, NFC, dualSIM, LTE, rear fingerprint reader"
    },
    {
      "titulo": "Xiaomi Redmi Note 9 Gray 64GB",
      "imagen": "/assets/popular_phones/RN9G.jpg",
      "precio": "689000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "6.53 IPS FullHD +\n" +
        "2,340 x 1,080 px (19.5: 9)\n" +
        "450 nits, Gorilla Glass 5\n" +
        "\n" +
        "PROCESSOR\n" +
        "MediaTek Helio G85\n" +
        "2.0GHz octa-core\n" +
        "GPU ARM Mali G52\n" +
        "\n" +
        "RAM\n" +
        "3/4 GB\n" +
        "\n" +
        "STORAGE\n" +
        "64/128 GB + microSD (up to 512GB)\n" +
        "\n" +
        "BATTERY\n" +
        "5,020 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Main: 48MP, f / 1.79, 1.6μm\n" +
        "Wide angle: 8MP, f / 2.2, 118º\n" +
        "Macro: 2MP\n" +
        "Depth: 2MP\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 megapixels, f / 2.25\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "162.3 x 77.2 x 8.9 mm\n" +
        "199 g\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared, 3.5mm jack, Bluetooth 5.0, USB Type-C, NFC, dualSIM, LTE, rear fingerprint reader"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 Pro Blue 64GB",
      "imagen": "/assets/popular_phones/RN8PA.jpg",
      "precio": "949000",
      "marca": "xiaomi",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "IPS 6.53 ”ratio 19.5: 9, 91.4%\n" +
        "2,340 x 1,080 px\n" +
        "\n" +
        "PROCESSOR\n" +
        "Mediatek Helio G90T\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "6/8 GB RAM\n" +
        "128 GB (+ microSD up to 256 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "20 MP, 1080p @ 30 video\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 Mpx, f / 1.8, 1 / 1.7 , 0.8µm 1.2, PDAF\n" +
        "2 Mpx, 1.75 µm (macro)\n" +
        "2 Mpx, 1.75 µm (depth)\n" +
        "8 Mpx wide angle 13 mm, f / 2.2, 1/4 , 1.12µm\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "WiFi, Bluetooth 5.0, NFC, USB-C, GPS (Galileo, Glonass)\n" +
        "\n" +
        "BATTERY\n" +
        "4,500 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "BIOMETRY\n" +
        "Fingerprint sensor (rear) and face identification\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.35 x 76.4 x 8.79mm, 199.8g"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 Pro Black 64GB",
      "imagen": "/assets/popular_phones/RN8PN.jpg",
      "precio": "949000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "IPS 6.53 ”ratio 19.5: 9, 91.4%\n" +
        "2,340 x 1,080 px\n" +
        "\n" +
        "PROCESSOR\n" +
        "Mediatek Helio G90T\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "6/8 GB RAM\n" +
        "128 GB (+ microSD up to 256 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "20 MP, 1080p @ 30 video\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 Mpx, f / 1.8, 1 / 1.7 , 0.8µm 1.2, PDAF\n" +
        "2 Mpx, 1.75 µm (macro)\n" +
        "2 Mpx, 1.75 µm (depth)\n" +
        "8 Mpx wide angle 13 mm, f / 2.2, 1/4, 1.12µm\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "WiFi, Bluetooth 5.0, NFC, USB-C, GPS (Galileo, Glonass)\n" +
        "\n" +
        "BATTERY\n" +
        "4,500 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "BIOMETRY\n" +
        "Fingerprint sensor (rear) and face identification\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.35 x 76.4 x 8.79mm, 199.8g"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 Pro White 64GB",
      "imagen": "/assets/popular_phones/RN8PB.jpg",
      "precio": "949000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "IPS 6.53 ”ratio 19.5: 9, 91.4%\n" +
        "2,340 x 1,080 px\n" +
        "\n" +
        "PROCESSOR\n" +
        "Mediatek Helio G90T\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "6/8 GB RAM\n" +
        "128 GB (+ microSD up to 256 GB)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "20 MP, 1080p @ 30 video\n" +
        "\n" +
        "REAR CAMERAS\n" +
        "Four cameras:\n" +
        "64 Mpx, f / 1.8, 1 / 1.7 , 0.8µm 1.2, PDAF\n" +
        "2 Mpx, 1.75 µm (macro)\n" +
        "2 Mpx, 1.75 µm (depth)\n" +
        "8 Mpx wide angle 13 mm, f / 2.2, 1/4 , 1.12µm\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "WiFi, Bluetooth 5.0, NFC, USB-C, GPS (Galileo, Glonass)\n" +
        "\n" +
        "BATTERY\n" +
        "4,500 mAh\n" +
        "Fast charge 18W\n" +
        "\n" +
        "BIOMETRY\n" +
        "Fingerprint sensor (rear) and face identification\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.35 x 76.4 x 8.79mm, 199.8g"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 Blue 64GB",
      "imagen": "/assets/popular_phones/RN8A.jpg",
      "precio": "700000",
      "marca": "xiaomi",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "6.3 inch LCD (19.5: 9)\n" +
        "FullHD + resolution\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 665\n" +
        "Adreno 610 GPU\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "3GB / 4GB\n" +
        "32GB / 64GB / 128GB + micro SD\n" +
        "\n" +
        "REAR CAMERA\n" +
        "48 MP + 8 MP (wide angle) + 2 MP (macro) + 2 MP (depth)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 MP\n" +
        "\n" +
        "BATTERY\n" +
        "4,000 mAh + fast charge 18 W\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "Dual 4G, BT 4.2, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared port, Corning Gorilla Glass 5\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.44 x 75.4 x 8.6mm\n" +
        "199.2 g"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 White 64GB",
      "imagen": "/assets/popular_phones/RN8B.jpg",
      "precio": "700000",
      "marca": "xiaomi",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "6.3 inch LCD (19.5: 9)\n" +
        "FullHD + resolution\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 665\n" +
        "Adreno 610 GPU\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "3GB / 4GB\n" +
        "32GB / 64GB / 128GB + micro SD\n" +
        "\n" +
        "REAR CAMERA\n" +
        "48 MP + 8 MP (wide angle) + 2 MP (macro) + 2 MP (depth)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 MP\n" +
        "\n" +
        "BATTERY\n" +
        "4,000 mAh + fast charge 18 W\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "Dual 4G, BT 4.2, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared port, Corning Gorilla Glass 5\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.44 x 75.4 x 8.6mm\n" +
        "199.2 g"
    },
    {
      "titulo": "Xiaomi Redmi Note 8 Black 64GB",
      "imagen": "/assets/popular_phones/RN8N.jpg",
      "precio": "700000",
      "marca": "xiaomi",
      "destacado":"no",
      "descripcion": "SCREEN\n" +
        "6.3 inch LCD (19.5: 9)\n" +
        "FullHD + resolution\n" +
        "\n" +
        "PROCESSOR\n" +
        "Snapdragon 665\n" +
        "Adreno 610 GPU\n" +
        "\n" +
        "RAM AND STORAGE\n" +
        "3GB / 4GB\n" +
        "32GB / 64GB / 128GB + micro SD\n" +
        "\n" +
        "REAR CAMERA\n" +
        "48 MP + 8 MP (wide angle) + 2 MP (macro) + 2 MP (depth)\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "13 MP\n" +
        "\n" +
        "BATTERY\n" +
        "4,000 mAh + fast charge 18 W\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "Dual 4G, BT 4.2, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "Infrared port, Corning Gorilla Glass 5\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "161.44 x 75.4 x 8.6mm\n" +
        "199.2 g"
    },
    {
      "titulo": "Samsung Galaxy A51 White 128GB",
      "imagen": "/assets/samsung_phones/SGA51B.jpg",
      "precio": "1299900",
      "marca": "samsung",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED 6.5 \n" +
        "1080 x 2400\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "158.5 x 73.6 x 7.9 mm\n" +
        "172 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Octa Core (Quad 2.3GHz + Quad 1.7GHz)\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "48 MP f / 2.0\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM Wi-Fi Bluetooth\n" +
        "USB-C\n" +
        "NFC\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy A51 Light Blue 128GB",
      "imagen": "/assets/samsung_phones/SGA51C.jpg",
      "precio": "1299900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED 6.5 \n" +
        "1080 x 2400\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "158.5 x 73.6 x 7.9 mm\n" +
        "172 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Octa Core (Quad 2.3GHz + Quad 1.7GHz)\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "48 MP f / 2.0\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM Wi-Fi Bluetooth\n" +
        "USB-C\n" +
        "NFC\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy A51 Black 128GB",
      "imagen": "/assets/samsung_phones/SGA51N.jpg",
      "precio": "1299900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED 6.5 \n" +
        "1080 x 2400\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "158.5 x 73.6 x 7.9 mm\n" +
        "172 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Octa Core (Quad 2.3GHz + Quad 1.7GHz)\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "48 MP f / 2.0\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM Wi-Fi Bluetooth\n" +
        "USB-C\n" +
        "NFC\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },

    {
      "titulo": "Samsung Galaxy A70 Cyan 128GB",
      "imagen": "/assets/samsung_phones/SGA70A.jpg",
      "precio": "1359000",
      "marca": "samsung",
      "destacado": "no,",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED\n" +
        "6.7 FHD + (1080 × 2400)\n" +
        "Infinity-U\n" +
        "20: 9 aspect ratio\n" +
        "\n" +
        "DIMENSIONS\n" +
        "\n" +
        "164.3 x 76.7 x 7.9 mm\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Qualcomm Snapdragon 675\n" +
        "Eight cores\n" +
        "(Double 2.0GHz + Hexa 1.7GHz)\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128GB UFS 2.1 + microSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP, F2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "32 MP f / 1.7 main\n" +
        "8MP f / 2.2 (123 °) wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 9 Pie with a user interface\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh with super fast 25W charging\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor on the screen, facial recognition, 3D Glasstic body"
    },

    {
      "titulo": "Samsung Galaxy A70 Whithe  128GB",
      "imagen": "/assets/samsung_phones/SGA70B.jpg",
      "precio": "1359000",
      "marca": "samsung",
      "destacado": "no,",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED\n" +
        "6.7 FHD + (1080 × 2400)\n" +
        "Infinity-U\n" +
        "20: 9 aspect ratio\n" +
        "\n" +
        "DIMENSIONS\n" +
        "\n" +
        "164.3 x 76.7 x 7.9 mm\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Qualcomm Snapdragon 675\n" +
        "Eight cores\n" +
        "(Double 2.0GHz + Hexa 1.7GHz)\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128GB UFS 2.1 + microSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP, F2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "32 MP f / 1.7 main\n" +
        "8MP f / 2.2 (123 °) wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 9 Pie with a user interface\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh with super fast 25W charging\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor on the screen, facial recognition, 3D Glasstic body"
    },
    {
      "titulo": "Samsung Galaxy A70 Colar 128GB",
      "imagen": "/assets/samsung_phones/SGA70C.jpg",
      "precio": "1359000",
      "marca": "samsung",
      "destacado": "no,",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED\n" +
        "6.7 FHD + (1080 × 2400)\n" +
        "Infinity-U\n" +
        "20: 9 aspect ratio\n" +
        "\n" +
        "DIMENSIONS\n" +
        "\n" +
        "164.3 x 76.7 x 7.9 mm\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Qualcomm Snapdragon 675\n" +
        "Eight cores\n" +
        "(Double 2.0GHz + Hexa 1.7GHz)\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128GB UFS 2.1 + microSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP, F2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "32 MP f / 1.7 main\n" +
        "8MP f / 2.2 (123 °) wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 9 Pie with a user interface\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh with super fast 25W charging\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor on the screen, facial recognition, 3D Glasstic body"
    },
    {
      "titulo": "Samsung Galaxy A70 Black 128GB",
      "imagen": "/assets/samsung_phones/SGA70N.jpg",
      "precio": "1359000",
      "marca": "samsung",
      "destacado": "no,",
      "descripcion": "SCREEN\n" +
        "\n" +
        "Super AMOLED\n" +
        "6.7 FHD + (1080 × 2400)\n" +
        "Infinity-U\n" +
        "20: 9 aspect ratio\n" +
        "\n" +
        "DIMENSIONS\n" +
        "\n" +
        "164.3 x 76.7 x 7.9 mm\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Qualcomm Snapdragon 675\n" +
        "Eight cores\n" +
        "(Double 2.0GHz + Hexa 1.7GHz)\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128GB UFS 2.1 + microSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP, F2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "32 MP f / 1.7 main\n" +
        "8MP f / 2.2 (123 °) wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 9 Pie with a user interface\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh with super fast 25W charging\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor on the screen, facial recognition, 3D Glasstic body"
    },

    {
      "titulo": "Samsung Galaxy A71 Light Blue 128GB",
      "imagen": "/assets/samsung_phones/SGA71A.jpg",
      "precio": "1549900",
      "marca": "samsung",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6 FHD + OLED, 21: 9\n" +
        "(2,520 x 1,080 pixels)\n" +
        "Gorilla Glass 6\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "163.6 x 76.0 x 7.7mm\n" +
        "179 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Snapdragon 730 Octa Core (Dual 2.2GHz + Hexa 1.8GHz)\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh\n" +
        "25W fast charge\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM, Wi-Fi, Bluetooth 5.0\n" +
        "USB-C\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy A71 White 128GB",
      "imagen": "/assets/samsung_phones/SGA71B.jpg",
      "precio": "1549900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6 FHD + OLED, 21: 9\n" +
        "(2,520 x 1,080 pixels)\n" +
        "Gorilla Glass 6\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "163.6 x 76.0 x 7.7mm\n" +
        "179 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Snapdragon 730 Octa Core (Dual 2.2GHz + Hexa 1.8GHz)\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh\n" +
        "25W fast charge\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM, Wi-Fi, Bluetooth 5.0\n" +
        "USB-C\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy A71 Black 128GB",
      "imagen": "/assets/samsung_phones/SGA71N.jpg",
      "precio": "1549900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6 FHD + OLED, 21: 9\n" +
        "(2,520 x 1,080 pixels)\n" +
        "Gorilla Glass 6\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "163.6 x 76.0 x 7.7mm\n" +
        "179 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Snapdragon 730 Octa Core (Dual 2.2GHz + Hexa 1.8GHz)\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh\n" +
        "25W fast charge\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM, Wi-Fi, Bluetooth 5.0\n" +
        "USB-C\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy A71 Pink 128GB",
      "imagen": "/assets/samsung_phones/SGA71R.jpg",
      "precio": "1549900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6 FHD + OLED, 21: 9\n" +
        "(2,520 x 1,080 pixels)\n" +
        "Gorilla Glass 6\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "163.6 x 76.0 x 7.7mm\n" +
        "179 g\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Snapdragon 730 Octa Core (Dual 2.2GHz + Hexa 1.8GHz)\n" +
        "RAM\n" +
        "\n" +
        "6/8 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "128 GB\n" +
        "MicroSD up to 512 GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32MP, F2.2\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "5 MP f / 2.4 macro\n" +
        "12 MP f / 2.2 wide angle\n" +
        "5 MP f / 2.2 depth\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "4,500 mAh\n" +
        "25W fast charge\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10\n" +
        "Samsung One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G Dual SIM, Wi-Fi, Bluetooth 5.0\n" +
        "USB-C\n" +
        "Minijack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Fingerprint sensor under the screen"
    },
    {
      "titulo": "Samsung Galaxy M31 Blue 64GB",
      "imagen": "/assets/samsung_phones/SGM31A.png",
      "precio": "1149900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6.4 inch Super AMOLED\n" +
        "FullHD + resolution\n" +
        "Gorilla Glass 3\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Exynos 9611\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "64GB + MicroSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP f / 2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "8 MP wide angle f / 2.2\n" +
        "5 MP depth f / 2.2\n" +
        "5 MP macro f / 2.4\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "6,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10 + One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G, Dual SIM, Wi-Fi 5, Bluetooth 5, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Rear fingerprint reader\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "159.2 x 75.1 x 8.9 mm\n" +
        "191 g"
    },
    {
      "titulo": "Samsung Galaxy M31 Black 64GB",
      "imagen": "/assets/samsung_phones/SGM31N.jpg",
      "precio": "1149900",
      "marca": "samsung",
      "destacado": "si",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6.4 inch Super AMOLED\n" +
        "FullHD + resolution\n" +
        "Gorilla Glass 3\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Exynos 9611\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "64GB + MicroSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP f / 2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "8 MP wide angle f / 2.2\n" +
        "5 MP depth f / 2.2\n" +
        "5 MP macro f / 2.4\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "6,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10 + One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G, Dual SIM, Wi-Fi 5, Bluetooth 5, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Rear fingerprint reader\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "159.2 x 75.1 x 8.9 mm\n" +
        "191 g"
    },
    {
      "titulo": "Samsung Galaxy M31 Red 64GB",
      "imagen": "/assets/samsung_phones/SGM31R.jpg",
      "precio": "1149900",
      "marca": "samsung",
      "destacado": "no",
      "descripcion": "SCREEN\n" +
        "\n" +
        "6.4 inch Super AMOLED\n" +
        "FullHD + resolution\n" +
        "Gorilla Glass 3\n" +
        "\n" +
        "PROCESSOR\n" +
        "\n" +
        "Exynos 9611\n" +
        "\n" +
        "RAM\n" +
        "\n" +
        "6 GB\n" +
        "\n" +
        "STORAGE\n" +
        "\n" +
        "64GB + MicroSD up to 512GB\n" +
        "\n" +
        "FRONTAL CAMERA\n" +
        "\n" +
        "32 MP f / 2.0\n" +
        "\n" +
        "REAR CAMERA\n" +
        "\n" +
        "64 MP f / 1.8\n" +
        "8 MP wide angle f / 2.2\n" +
        "5 MP depth f / 2.2\n" +
        "5 MP macro f / 2.4\n" +
        "\n" +
        "BATTERY\n" +
        "\n" +
        "6,000 mAh\n" +
        "Fast charge 15W\n" +
        "\n" +
        "OPERATING SYSTEM\n" +
        "\n" +
        "Android 10 + One UI 2.0\n" +
        "\n" +
        "CONNECTIVITY\n" +
        "\n" +
        "4G, Dual SIM, Wi-Fi 5, Bluetooth 5, NFC, USB-C, 3.5mm jack\n" +
        "\n" +
        "OTHERS\n" +
        "\n" +
        "Rear fingerprint reader\n" +
        "\n" +
        "DIMENSIONS AND WEIGHT\n" +
        "\n" +
        "159.2 x 75.1 x 8.9 mm\n" +
        "191 g"
    },
  ];


}

