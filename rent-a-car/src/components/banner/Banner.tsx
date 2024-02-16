import { Link, useNavigate } from 'react-router-dom';
import Images from '../../assets/images';
import './banner.css';
type Props = {};

const Banner = (props: Props) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/cars');
  };
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
        <button onClick={handleButtonClick} className="contact">KİRALIK ARAÇLARIMIZ</button>
        </div>
        <div className="image">
          <img src={Images.Banner} alt="bannerImage" height={600} width={800} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
