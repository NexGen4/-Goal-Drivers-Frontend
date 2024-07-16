import React, { useEffect, useCallback } from 'react';
import logo from './Logo.jpeg';
import './Gold.css';

function MembershipNotification({ startprice = 40000, endprice }) {
  const showNotification = useCallback(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          let membership = '';
          let discount = '';
          if (startprice > 30000) {
            membership = 'platinum';
            discount = '30%';
          } else if (startprice > 20000 && endprice < 29999.99) {
            membership = 'gold';
            discount = '20%';
          } else if (startprice > 10000 && endprice < 19999.99) {
            membership = 'silver';
            discount = '10%';
          }

          if (membership) {
            new Notification('Congratulations!', {
              body: `You have received ${membership} Membership and ${discount} discount for your order. Thank you.`,
            });
          }
        }
      });
    }
  }, [startprice, endprice]);

  useEffect(() => {
    showNotification();
  }, [showNotification]);

  let membership = '';
  let discount = '';
  if (startprice > 30000) {
    membership = 'platinum';
    discount = '30%';
  } else if (startprice > 20000 && endprice < 29999.99) {
    membership = 'gold';
    discount = '20%';
  } else if (startprice > 10000 && endprice < 19999.99) {
    membership = 'silver';
    discount = '10%';
  }

  return (
    <>
      <div className='MemberNotification'>
        <div className='AquaSquare'>
          <img className='Logo' src={logo} alt='logo' />
          {membership && discount && (
            <p className='Notification'>
              Congratulations! You have received a {membership} Membership and a {discount} discount for your order.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MembershipNotification;
