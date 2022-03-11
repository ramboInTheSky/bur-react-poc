import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

global.window.gigya = {
    accounts: {
        getAccountInfo: () => {},
        initRegistration: () => {},
        login: () => {},
        logout: () => {},
        register: () => {},
    }
};
