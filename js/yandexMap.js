ymaps.ready(init)

function init() {
    var myMap = new ymaps.Map('map', {
        center: [59.939764, 30.350236],
        zoom: 11,
        controls: ['zoomControl']
    });
    var objects = [
        {
            str: 'Test!',
            str2: 'Hello Loftschool!!!',
            coords: [59.945396, 30.382825]
        },
        {
            str: 'Test2!',
            str2: 'Hello Again!!!',
            coords: [59.888716, 30.311712]
        },
        {
            str: 'Test3!',
            str2: 'Hello!!!',
            coords: [59.971920, 30.313874]
        },
        {
            str: 'Test4!',
            str2: 'Hello!!!',
            coords: [59.917428, 30.491673]
        }
    ]

    myMap.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom'])

    for (var i = 0; i < objects.length; i++) {
        myMap.geoObjects.add(new ymaps.Placemark(objects[i].coords, {
            hintContent: objects[i].str,
            balloonContent: objects[i].str2
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57],
        }))
    }
}