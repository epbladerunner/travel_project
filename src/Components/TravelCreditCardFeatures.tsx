import React from 'react';

interface CardFeatureProps {
  title: string;
  details: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ title, details }) => (
  <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '16px', backgroundColor: '#fff' }}>
    <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#1e40af' }}>{title}</h2>
    <p style={{ color: '#374151' }}>{details}</p>
  </div>
);

const TravelCreditCardFeatures: React.FC = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center', color: '#1e3a8a', marginBottom: '24px' }}>Travel Credit Card Features</h1>
      <CardFeature
        title="Interest Rates"
        details="APR: 15.99% - 24.99% variable. Balance transfer rate: 3% fee for transfers."
      />
      <CardFeature
        title="Rewards"
        details="Earn 2x points on travel purchases, 1x on all other purchases. Redeem points for flights, hotels, and more."
      />
      <CardFeature
        title="Fees"
        details="Annual fee: $95. No foreign transaction fees. Late payment fee: up to $40."
      />
    </div>
  );
};

export default TravelCreditCardFeatures;
