import menuPrincipal from '../../components/menu';
import backgroundJedi from '../../../assets/images/background/backgroundJedi.jpg';

let Jedi = {
  is_private: false,

  render: async () => {
    let view = `<div>
        ${menuPrincipal}
        <section class="section background--jedi" style="background-image: url(${backgroundJedi})">
          <div class="container block-section--jedi">
            <h1>Caro Jedi,<br/> bem vindo a ordem!!</h1>
          </div>
        </section>
      </div>`;

    return view
  },

  after_render: async () => { }
}

export default Jedi;