import homeSectionOne from '../../components/sections/homeSectionOne';
import homeSectionTwo from '../../components/sections/homeSectionTwo';
import floatImage from '../../components/float/floatImage';
import menuPrincipal from '../../components/menu';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${menuPrincipal}
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>`;

      return view
  },

  after_render: async () => {}
}

export default Home;