Kakao.init("fd05ae8aaf424b5534d131a95e9f5a43");

lightGallery(document.querySelector("#gallery"));

const $ = (name) => document.querySelector(name);

const addEvent = (name, event, callback) => {
  $(name).addEventListener(event, callback);
};

const target = {
  name: "엠타워컨벤션",
  lat: 37.3844042,
  lon: 126.931606,
  url: "https://joohee0928.github.io/wedding-invitation/",
};
const visualImgUrl =
  "http://www.mtowerwed.co.kr/attachList/upload/main/m20191125122518267.jpg";

addEvent("#shareFacebook", "click", () => {
  var url = "http://www.naver.com";
  window.open(
    "http://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
    "",
    "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
  );
});

addEvent("#btnKakaoMap", "click", () => {
  window.location.href =
    "https://m.map.kakao.com/actions/detailMapView?id=20515606&refService=place#none";
});

addEvent("#btnNaverMap", "click", () => {
  window.location.href =
    "https://m.place.naver.com/place/34585318/location?subtab=location";
});

addEvent("#btnTMap", "click", () => {
  window.location.href = `https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx0cad021f2b204989bff69ad3176bd011&name=${target.name}&lon=${target.lon}&lat=${target.lat}`;
});

addEvent("#kakaoTalk", "click", () => {
  Kakao.Link.sendDefault({
    objectType: "location",
    address: "경기 안양시 만안구 안양로 104 엠타워컨벤션 6층 파티오볼룸",
    addressTitle: "엠타워컨벤션",
    content: {
      title: "구민이와 주희의 결혼식에 초대합니다!",
      imageUrl: visualImgUrl,
      link: {
        mobileWebUrl: target.url,
        webUrl: target.url,
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: target.url,
          webUrl: target.url,
        },
      },
    ],
  });
});
