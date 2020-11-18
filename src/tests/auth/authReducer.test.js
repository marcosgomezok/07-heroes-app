
import { authReducer } from './../../auth/authReducer';
import { types } from './../../types/types';


describe('Pruebas en el authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged:false},{})   
        expect(state).toEqual({logged:false});

    })
    test('debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload:{
                name: 'Marcos'
            }
        }

        const state = authReducer({logged:false},action)   
        expect(state).toEqual({logged:true,
            name: 'Marcos'
        });
    })
    test('debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout

        }

        const state = authReducer({logged:true,name:'Marcos'},action)   
        expect(state).toEqual({logged:false});
    })
    
})
