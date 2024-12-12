import { notifications } from '../../utils';
import { InfoBanner, Infos } from './info-panel.styles';

const InfoPanel = () => {
  return (
    <>
      <InfoBanner>
        <h2>Information</h2>
      </InfoBanner>
      <Infos>
        {notifications.map((message, index) => (
          <p key={index} style={{ color: message.color }}>
            {message.text}
          </p>
        ))}
      </Infos>
    </>
  );
};

export default InfoPanel;
