const $ = (name) => document.querySelector(name);
const addEvent = (target, event, callback) =>
  target.addEventListener(event, callback);

class WeddingInvitation {
  constructor() {
    this.name = "엠타워컨벤션";
    this.location = {
      lat: 37.3844042,
      lon: 126.931606,
    };
    this.pageUrl = "https://joohee0928.github.io/wedding-invitation/";
    this.imgUrl =
      "http://www.mtowerwed.co.kr/attachList/upload/main/m20191125122518267.jpg";
    this.el = null;

    this.init();
    this.initElements();
    this.initEvents();
    this.dday();
  }

  init = () => {
    Kakao.init("fd05ae8aaf424b5534d131a95e9f5a43");
  };

  initElements = () => {
    this.el = {
      dday: $("#dday"),
      gallery: $("#gallery"),
      btnKakaoMap: $("#btnKakaoMap"),
      btnNaverMap: $("#btnNaverMap"),
      btnTMap: $("#btnTMap"),
      btnKakaoTalk: $("#btnKakaoTalk"),
      btnFacebook: $("#btnFacebook"),
    };
  };

  initEvents = () => {
    const {
      gallery,
      btnKakaoMap,
      btnNaverMap,
      btnTMap,
      btnKakaoTalk,
      btnFacebook,
    } = this.el;
    lightGallery(gallery);
    addEvent(btnKakaoMap, "click", this.onClickKakaoMap);
    addEvent(btnNaverMap, "click", this.onClickNaverMap);
    addEvent(btnTMap, "click", this.onClickTMap);
    addEvent(btnKakaoTalk, "click", this.onClickKakaoTalk);
    addEvent(btnFacebook, "click", this.onClickShareFacebook);
  };

  dday = () => {
    const dday = new Date("September 12, 2020 00:00:00");
    const gap = dday.getTime() - new Date().getTime();
    const date = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1;
    this.el.dday.innerHTML = date > 0 ? `D-${date}` : "D-Day";
  };

  onClickKakaoMap = () => {
    window.location.href =
      "https://m.map.kakao.com/actions/detailMapView?id=20515606&refService=place#none";
  };

  onClickNaverMap = () => {
    window.location.href =
      "https://m.place.naver.com/place/34585318/location?subtab=location";
  };

  onClickTMap = () => {
    window.location.href = `https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx0cad021f2b204989bff69ad3176bd011&name=${this.name}&lon=${this.location.lon}&lat=${this.location.lat}`;
  };

  onClickKakaoTalk = () => {
    Kakao.Link.sendDefault({
      objectType: "location",
      address: "경기 안양시 만안구 안양로 104 엠타워컨벤션 6층 파티오볼룸",
      addressTitle: "엠타워컨벤션",
      content: {
        title: "구민♥주희 결혼식에 초대합니다!",
        description: "9/12(토) pm 5:30 안양 엠타워컨벤션",
        imageUrl: this.imgUrl,
        link: {
          mobileWebUrl: this.pageUrl,
          webUrl: this.pageUrl,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: this.pageUrl,
            webUrl: this.pageUrl,
          },
        },
      ],
    });
  };

  onClickShareFacebook = () => {
    window.open(
      `http://facebook.com/sharer/sharer.php?u=${this.pageUrl}`,
      "",
      "left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
  };
}

new WeddingInvitation();
