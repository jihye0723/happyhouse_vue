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
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },

  computed: {
    ...mapState(["aptcodes", "markers"]),
  },
  watch: {
    markers: function (value) {
      value.forEach((element) => {
        console.log(element.code + " " + element.lat + " " + element.lng);
      });
      console.log("markers watch : " + value);
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

      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      console.log(map);
      this.$store.state.markers;
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
