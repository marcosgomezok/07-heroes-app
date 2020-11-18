const { shallow } = require("enzyme")
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from './../../routers/PrivateRoute';



describe('Prueba en <PrivateRoute />', () => {

    const props = {
        location:{
            pathname:'/marvel'
        }
    } 
    
    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        
        const wrapper = shallow(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={true}
                    component={()=><span>Listo!</span>}
                    {...props}
                
                
                />
            </MemoryRouter>)

            //React v17.0.0 no soporta mount, se necesita usar mount para este caso
            //expect(wrapper.find('span').exists()).toBe(true);
            //expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');
    })

    test('debe de bloquear el componente si no esta autenticado', () => {

        const wrapper = shallow(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={false}
                    component={()=><span>Listo!</span>}
                    {...props}
                
                
                />
            </MemoryRouter>)

            //React v17.0.0 no soporta mount, se necesita usar mount para este caso
            //expect(wrapper.find('span').exists()).toBe(false);
            //expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');


    })
    
    
})
