import React from 'react';
import MyNav from './MyNav';
import MyFooter from './MyFooter';

function Account() {
  return (
    <div className="bg-dark min-vh-100 text-light d-flex flex-column">
      <MyNav tema="dark" />
      <main className="container flex-grow-1 py-4">
        <h2>Account</h2>
        <p>Nome utente: JsxJsxi@example.com</p>
        <p>Piano attuale: Premium</p>
        <button className="btn btn-outline-light mt-3">Gestisci abbonamento</button>
      </main>
      <MyFooter />
    </div>
  );
}

export default Account;
