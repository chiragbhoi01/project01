import React from 'react';

// Profile Component
const Profile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    address: {
      street: '1234 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
    },
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    purchaseHistory: [
      { id: 1, product: 'Wireless Headphones', date: '2025-03-12', price: '$89.99' },
      { id: 2, product: 'Smartphone Case', date: '2025-02-28', price: '$19.99' },
      { id: 3, product: 'Bluetooth Speaker', date: '2025-01-15', price: '$29.99' },
    ],
  };

  return (
    <div className="profile-container" style={styles.container}>
      <div style={styles.avatarContainer}>
        <img
          src={user.avatar}
          alt={`${user.name}'s Avatar`}
          style={styles.avatar}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div style={styles.address}>
        <h3>Shipping Address</h3>
        <p>{user.address.street}</p>
        <p>{user.address.city}, {user.address.state} {user.address.zip}</p>
      </div>
      <div style={styles.purchaseHistory}>
        <h3>Purchase History</h3>
        <ul>
          {user.purchaseHistory.map((item) => (
            <li key={item.id} style={styles.purchaseItem}>
              <p>{item.product}</p>
              <p>{item.date}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  avatarContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  address: {
    marginBottom: '20px',
  },
  purchaseHistory: {
    marginTop: '20px',
  },
  purchaseItem: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

export default Profile;
