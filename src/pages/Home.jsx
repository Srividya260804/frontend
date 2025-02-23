import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/ban.jpeg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/burger.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Burger</h5>
        <p class="card-text">Juicy, mouthwatering burgers stacked high with fresh ingredients for the ultimate indulgence!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/pizza.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pizza</h5>
        <p class="card-text">Sizzling hot pizza with the perfect blend of cheese, toppings, and flavor—every slice a taste of heaven!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/dosa.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dosa Receipe</h5>
        <p class="card-text">Crispy, golden dosas filled with flavor, a delightful South Indian treat!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/idli.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Idli Receipe</h5>
        <p class="card-text">Soft, fluffy idlis served fresh, a perfect bite of tradition to start your day!</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home