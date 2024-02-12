import Images from '../../assets/images';
import './banner.css';
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner">
      <div className="cover"></div>
      <div className="content">
        <div className="text">
          <h1>Hemen Kirala, Yolculuğa Hazır Ol!</h1>
          <p>
            En uygun fiyatlarla araç kiralama hizmetimizle hayallerinizdeki
            yolculuğa adım atın. Kolay rezervasyon, geniş araç seçenekleri ve
            güvenilir hizmetimizle seyahatinizi daha keyifli hale getirin. Şimdi
            rezervasyon yapın ve yolculuğa başlamak için hemen yola çıkın!
          </p>
          <button className="contact">KİRALIK ARAÇLARIMIZ</button>
        </div>
        <div className="image">
          <img src={Images.Banner} alt="bannerImage" height={600} width={800} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
