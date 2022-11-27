<template>
  <div>
    <yandex-map
      ref="map"
      :coords="[this.$props.coords[0], this.$props.coords[1]]"
      zoom="16"
      class="yandex-map"
      :controls="[]"
      
    >
      <ymap-marker
        marker-type="placemark"
        :coords="[this.$props.coords[0], this.$props.coords[1]]"
        :balloon="{ body: this.$props.markerText }"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "App",
  components: {
    yandexMap,
    ymapMarker,
  },
  props: ["coords", "markerText"],
  data() {
    return {
      markers: [
        {
          coord: [this.$props.coords[0], this.$props.coords[1]],
          text: "hello, world!!",
        },
      ].map((n, i) => ({ ...n, id: i + 1 })),
    };
  },
};
</script>

<style lang="scss" scoped>
.yandex-map {
  width: 100%;
  height: 600px;
  
  @media (max-width: 1600px) {
    height: 500px;
    width: 630px !important;
  }
  @media (max-width: 1440px) {
    height: 450px;
  }
  @media (max-width: 450px) {
    height: 300px !important;
    width: 440px !important;
  }

}
</style>
