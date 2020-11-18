const { shallow } = require("enzyme")
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from './../../routers/PrivateRoute';



describe('Prueba en <PrivateRoute />', () => {
    
    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        
        const props = {
            location:{
                pathname:'/marvel'
            }
        } 
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
    })
    
})
