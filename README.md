## aframe-sprite-component

An implementation of the Sprite primitive from ThreeJS – a bitmap image always facing the camera – for [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>A-Frame using a Sprite</title>
  <script src="https://aframe.io/releases/0.3.0/aframe.min.js"></script>
  <script src="https://cdn.rawgit.com/tizzle/aframe-sprite-component/master/dist/aframe-sprite-component.min.js"></script>
</head>

<body>

    <a-scene>
        <a-assets>
            <img id="hotspotimage" src="hotspot.png">
        </a-assets>

        <a-entity camera position="0 0 5"></a-entity>

        <a-sprite position="0 0 0" resize="1 1 1" src="hotspot.png"></a-sprite>

        <a-sky color="#AADDF0"></a-sky>

    </a-scene>

</body>
```

