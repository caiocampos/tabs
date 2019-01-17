# Tabs

[<img src="https://api.travis-ci.org/caiocampos/tabs.svg?branch=master">](https://travis-ci.org/caiocampos/tabs)
![](https://img.shields.io/david/caiocampos/tabs.svg)
[![License](https://img.shields.io/github/license/caiocampos/tabs.svg)](LICENSE)


Projeto de componente de abas em Angular

## Uso:

```html
<app-tabs clickSoundResource="./assets/snd/Hit-sound.mp3">
  <app-tab id="home" description="Início" active="true">
    <div class="random-img">
      <img src="https://picsum.photos/1000/500/?random" alt="Imagem aleatória">
    </div>
  </app-tab>
  <app-tab id="bacon-ipsum" description="Bacon Ipsum">
    <app-bacon-ipsum></app-bacon-ipsum>
  </app-tab>
  <app-tab id="about" description="Sobre" position="right" 
           clickSoundResource="./assets/snd/Connection-established-sound-effect.mp3">
    <app-about></app-about>
  </app-tab>
</app-tabs>
```

## Imagens:

![Imagem](https://i.ibb.co/QpmP17Q/1.jpg)

## Recursos utilizados:

### Imagens:

[Freepik](http://www.freepik.com/)

[Lorem Picsum](https://picsum.photos/)

### Sons:

[Orange Free Sounds](http://www.orangefreesounds.com/)

### Outros:

[Bacon Ipsum](https://baconipsum.com/)
