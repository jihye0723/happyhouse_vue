<template>
  <div>
    <div>Kakao map</div>
    <div id="map"></div>
    <div v-for="(marker, index) of markers" :key="index">
      {{ marker.code }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      markerPositions: [],
      markerSet: [],
    };
  },
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },

  computed: {
    ...mapState(["aptcodes", "markers", "isMarkerSet"]),
  },
  watch: {
    isMarkerSet: function (value) {
      if (value) {
        console.log("is marker setting clear : " + this.$store.state.markers);
      }
    },
    markers: function (value) {
      this.markerPosition = value;
      // console.log("markers watch : " + value);
      this.displayMarker(this.markerPositions);
    },
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
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },

    displayMarker(markerPositions) {
      console.log("marker POsitions : " + markerPositions);
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      let positions = [];
      markerPositions.forEach((element) => {
        positions.push(new kakao.maps.LatLng(element.lat, element.lng));
      });
      //   const positions = markerPositions.map(
      //     (position) => new kakao.maps.LatLng(...position)
      //   );
      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            }),
        );
        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds(),
        );
        this.map.setBounds(bounds);
      }
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
