import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('partner_authenticated') !== 'true') {
      navigate('/partner-login');
    }
  }, [navigate]);

  return (
    <div className="w-full h-screen">
      <iframe
        src="/cerviai-dashboard.html"
        className="w-full h-full border-0"
        title="CerviAI Clinical Dashboard"
      />
    </div>
  );
};

export default PartnerDashboard;
