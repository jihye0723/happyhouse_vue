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
    };
  },

  computed: {
    ...mapState(["aptcodes", "markers", "aptcode"]),
  },
  watch: {
    markers: function (value) {
      this.markerPositions.push(value[value.length - 1]);
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
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8273ad75e4cf13f650633b14013a60c0";
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
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
