<template>
  <div>
    <div>Kakao map</div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      map: null,
      markerPositions: [],
      markerSet: [],
      centerSetting: false,
      starbucksList: [],
    };
  },

  computed: {
    ...mapState([
      "aptcodes",
      "markers",
      "aptcode",
      "starbucks",
      "setStarbucks",
    ]),
  },
  watch: {
    markers: function (value) {
      this.markerPositions.push(value[value.length - 1]);
      console.log("watch markers", value.length);
    },
    aptcode: function (value) {
      let position = {};
      this.markerPositions.forEach((element) => {
        if (element.code == value) {
          position = new kakao.maps.LatLng(element.lat, element.lng);
        }
      });
      this.map.setCenter(position);
    },
    starbucks: function (value) {
      this.starbucksList = value;
      this.setStarbucksLocation();
    },
  },

  created() {
    if (this.map == null) {
      window.kakao && window.kakao.maps
        ? this.initMap()
        : this.addKakaoMapScript();
    }
  },
  mounted() {
    this.displayMarker();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8273ad75e4cf13f650633b14013a60c0&libraries=services";
      document.head.appendChild(script);
    },
    initMap() {
      console.log("initMap");

      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      this.displayMarker();
    },

    displayMarker() {
      this.centerSetting = false;
      this.markerPositions.shift();
      this.markerPositions.forEach((element) => {
        var position = new kakao.maps.LatLng(element.lat, element.lng);
        var marker = new kakao.maps.Marker({
          map: this.map,
          position: position,
        });

        marker.setMap(this.map);
        if (!this.centerSetting) {
          this.map.setCenter(position);
          this.centerSetting = true;
        }
      });
    },
    setStarbucksLocation() {
      console.log("set starbucks locations", this.starbucksList);
      var geocoder = new kakao.maps.services.Geocoder();
      this.starbucksList.forEach((element) => {
        let address = element.address;
        console.log("address", address);
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var position = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              // map: this.map,
              position: position,
            });
            // marker.setMap(this.map);

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">' +
                element.name +
                "</div>",
            });
            infowindow.open(this.map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            this.map.setCenter(position);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
